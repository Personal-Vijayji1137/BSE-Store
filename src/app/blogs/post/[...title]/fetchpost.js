'use server'
import { createClient } from "@supabase/supabase-js"
export default async function FetchPost(id){
    const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {auth: { persistSession: false }});
    const GET = await supabase.from("BSE-Blogs").select('*').eq('ID', `${id}`);
    return GET.data[0];
}