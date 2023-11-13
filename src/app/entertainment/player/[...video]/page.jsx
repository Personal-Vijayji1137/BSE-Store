'use server'
import Styles from "./page.module.css"
import Image from "next/image"
import Link from "next/link"
import { createClient } from "@supabase/supabase-js"
export default async function Page({ params }){
    const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {auth: { persistSession: false }});
    const GET = await supabase.from('Free-Netflix-Darabase').select('*').eq('ID', `${params.video[0]}`);
    const Date = GET.data[0];
    var Iframe ;
    const resentdata = await supabase.from("Free-Netflix-Darabase").select('ID,Title,Image').order('ID', { ascending: false }).range(0,15);
    const res = await supabase.from("Free-Netflix-Darabase").select('ID,Title,Image').order('ID', { ascending: false }).eq('MainCategory' , `${Date.MainCategory}`).range(0,30);
    const resentada = resentdata.data;
    const datada = res.data;
    if(Date.Plateform == "filemoon"){
        Iframe = `https://filemoon.sx/e/${Date.FileID}?logo=https://i.postimg.cc/N0BLyhkx/logo.webp&poster=${Date.Image}`;
    }else if(Date.Plateform == "Youtube"){
        Iframe = `https://www.youtube.com/embed/${Date.FileID}`;
    }
    return(
        <>
        <div className={Styles.Maindiv}>
            <div className={Styles.Iframe}>
                <iframe src={Iframe} allowFullScreen/>
                <div className={Styles.Title}>{Date.Title}</div>
                <div className={Styles.Ads}>
                    <Link href="https://beta.publishers.adsterra.com/referral/aKMU588PJU"><img alt="banner" src="https://landings-cdn.adsterratech.com/referralBanners/gif/720x90_adsterra_reff.gif" /></Link>
                </div>
                <div className={Styles.Title}>Related ...</div>
                <div className={Styles.viewgrid}>
                    {datada.map((item)=>{
                        return <div key={item.ID}>
                            <Link href={`/entertainment/player/${item.ID}/${item.Title.split(" ").join("-")}`}><Image className={Styles.Images} src={item.Image} alt={item.Title} title={item.Title} width={300} height={300} /></Link>
                        </div>
                    })}
                </div>
            </div>
            <div>
                <div>
                    {resentada.map((item)=>{
                        return <Link href={`/entertainment/player/${item.ID}/${item.Title.split(" ").join("-")}`} key={item.ID} className={Styles.SinglePost}>
                            <div><Image src={item.Image} width={400} height={400} alt=""/></div>
                            <div>
                                <div>{item.Title}</div>
                            </div>
                        </Link>
                    })}
                </div>
            </div>
        </div>
        </>
    )
}