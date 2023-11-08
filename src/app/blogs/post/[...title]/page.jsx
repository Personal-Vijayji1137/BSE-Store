'use server'
import { createClient } from "@supabase/supabase-js"
import Styles from "./post.module.css"
import AboutPost from "./Components/AboutPost/aboutpost"
import AboutBlog from "../../Components/Recentpost/Aboutblog/aboutblog"
export default async function Page({ params }){
    const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {auth: { persistSession: false }});
    const GET = await supabase.from("BSE-Blogs").select('*').eq('ID', `${params.title[0]}`);
    const Data = GET.data[0];
    return (
        <>
            <div className={Styles.RecentPost}>
                <div><AboutPost Data={Data}/></div>
                <div><AboutBlog/></div>
            </div>
        </>
    )
}