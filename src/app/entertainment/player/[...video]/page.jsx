'use server'
import Styles from "./page.module.css"
import { createClient } from "@supabase/supabase-js"
export default async function Page({ params }){
    const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {auth: { persistSession: false }});
    const GET = await supabase.from('Free-Netflix-Darabase').select('*').eq('ID', `${params.video[0]}`);
    const Date = GET.data[0];
    var Iframe ;
    if(Date.Plateform == "filemoon"){
        Iframe = `https://filemoon.sx/e/${Date.FileID}?logo=https://i.postimg.cc/N0BLyhkx/logo.webp&poster=${Date.Image}`;
    }else if(Date.Plateform == "Youtube"){
        Iframe = `https://www.youtube.com/embed/${Date.FileID}`;
    }
    return(
        <>
        <div>
            <div className={Styles.Iframe}><iframe src={Iframe} allowFullScreen/></div>
        </div>
        </>
    )
}