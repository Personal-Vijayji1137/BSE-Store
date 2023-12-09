'use server'
import { cookies } from 'next/headers'
import { createClient } from "@supabase/supabase-js"
import { redirect } from 'next/navigation';
const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {auth: { persistSession: false }});
export async function Loginwithnewemailid(email,password){  
    const data = await supabase.auth.signUp({
        email: email,
        password: password,
    })
}
export async function Loginold(email,password){ 
    const data = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })
    if(data.error){
        return 'Please verify your email ID'
    }
    const access_token = data.data.session.access_token;
    const refresh_token = data.data.session.refresh_token; 
    const { secadata, error } = supabase.auth.setSession({
        access_token,
        refresh_token
    })
    cookies().set('access_token', access_token);
    cookies().set('refresh_token', refresh_token);
    return "Please Wait ...";
}
export async function LoginWithGithub(){
    const data = await supabase.auth.signInWithOAuth({
        provider: 'github',
    })
    redirect(data.data.url);
}
export async function LoginWithGoogle(){

}
export async function LoginWithLinkkedin(){

}
export async function Signout(){
    const { error } = await supabase.auth.signOut();
    const access_token = cookies().delete('access_token');
    const refresh_token = cookies().delete('refresh_token');
    if(access_token && refresh_token){
        cookies().delete('access_token');
        cookies().delete('refresh_token');
    }else{
        redirect('/');
    }
}