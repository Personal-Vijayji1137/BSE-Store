'use server'
import { createClient } from "@supabase/supabase-js"
import Styles from "./recent.module.css"
import Link from "next/link"
import Image from "next/image"
export default async function Recent(){
    const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {auth: { persistSession: false }});
    const GET = await supabase.from("BSE-Blogs").select('ID,Image,Title,Description,ReadingTime,Date').order('ID', { ascending: false }).range(0,15);
    const Data = GET.data;
    return(
        <>
        <div className={Styles.Recent}>
            <div>
                <div>Recent Post ...</div>
                <Link href="/">View All &#x2794;</Link>
            </div>
            <div>
                {Data.map((item)=>{
                    return <div key={item.ID} className={Styles.SinglePost}>
                    <div><Image src={item.Image} width={1000} height={1000} alt=""/></div>
                    <div>
                        <div>{item.Title}</div>
                        <div>{item.Description}</div>
                        <div>
                            <div>
                                <div>{item.Date}&nbsp;&nbsp;&nbsp;|| &nbsp;&nbsp;&nbsp;</div>
                                <div>{item.ReadingTime}</div>
                            </div>
                            <Link href={`/blogs/post/${item.ID}/${item.Title.split(" ").join("-")}`}>Read More &#x2794;</Link>
                        </div>
                    </div>
                </div>
                })}
            </div>
        </div>
        </>
    )
}