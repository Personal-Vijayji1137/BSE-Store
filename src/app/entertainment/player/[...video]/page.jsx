'use server'
import Styles from "./page.module.css"
import { createClient } from "@supabase/supabase-js"
export default async function Page({ params }){
    const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {auth: { persistSession: false }});
    const GET = await supabase.from('Free-Netflix-Darabase').select('*').eq('ID', `${params.video[0]}`);
    return(
        <>
        <div>
            <div className={Styles.Iframe}><iframe src="https://www.youtube.com/embed/8HFBY9cudgM"/></div>
        </div>
        </>
    )
}