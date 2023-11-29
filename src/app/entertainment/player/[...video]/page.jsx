'use server'
import Styles from "./page.module.css"
import Image from "next/image"
import Link from "next/link"
import { createClient } from "@supabase/supabase-js"
import DirectLink from "@/app/ads/DirectLink"
const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {auth: { persistSession: false }});
export async function generateMetadata({ params }) {
    const GET = await supabase.from(process.env.NEXT_PUBLIC_SUPABASE_MOVIES_DATABSE_NAME).select('Title,Image').eq('ID', `${params.video[0]}`);
    return {
        title: `${GET.data[0].Title} ( BSE-Store ) || Watch in HD or Download`,
        description: `Watch ${GET.data[0].Title} on BSE-Store in HD or Download it, Here you can Unlock the ultimate entertainment experience with BSE - Entertainment, where every movie and web series is at your fingertips, completely free of charge. No more waiting for the latest releases, no more financial barriers, BSE - Entertainment is your passport to endless entertainment, available anytime, anywhere.`,
        openGraph: {
            title: `${GET.data[0].Title} ( BSE-Store ) || Watch in HD or Download`,
            description: `Watch ${GET.data[0].Title} on BSE-Store in HD or Download it, Here you can Unlock the ultimate entertainment experience with BSE - Entertainment, where every movie and web series is at your fingertips, completely free of charge. No more waiting for the latest releases, no more financial barriers, BSE - Entertainment is your passport to endless entertainment, available anytime, anywhere.`,
            images: GET.data[0].Image,
        },
        twitter: {
            card: 'summary_large_image',
            title: `${GET.data[0].Title} ( BSE-Store ) || Watch in HD or Download`,
            description: `Watch ${GET.data[0].Title} on BSE-Store in HD or Download it, Here you can Unlock the ultimate entertainment experience with BSE - Entertainment, where every movie and web series is at your fingertips, completely free of charge. No more waiting for the latest releases, no more financial barriers, BSE - Entertainment is your passport to endless entertainment, available anytime, anywhere.`,
            siteId: '1467726470533754880',
            creator: '@nextjs',
            creatorId: '1467726470533754880',
            images: [`${GET.data[0].Image}`],
        }
    }
}
export default async function Page({ params }){
    const GET = await supabase.from(process.env.NEXT_PUBLIC_SUPABASE_MOVIES_DATABSE_NAME).select('*').eq('ID', `${params.video[0]}`);
    const Date = GET.data[0];
    var Iframe ;
    const resentdata = await supabase.from(process.env.NEXT_PUBLIC_SUPABASE_MOVIES_DATABSE_NAME).select('ID,Title,Image').order('ID', { ascending: false }).range(0,15);
    const res = await supabase.from(process.env.NEXT_PUBLIC_SUPABASE_MOVIES_DATABSE_NAME).select('ID,Title,Image').order('ID', { ascending: false }).eq('MainCategory' , `${Date.MainCategory}`).range(0,30);
    const resentada = resentdata.data;
    const datada = res.data;
    if(Date.Plateform == "filemoon"){
        Iframe = `https://filemoon.sx/e/${Date.FileID}?logo=https://i.postimg.cc/N0BLyhkx/logo.webp&poster=${Date.Image}`;
    }else if(Date.Plateform == "Youtube"){
        Iframe = `https://www.youtube.com/embed/${Date.FileID}`;
    }else if (Date.Plateform === 'Vidsrc') {
        const embedType = Date.MainCategory === 'TV' ? 'tv' : 'movie';
        Iframe = `https://vidsrc.to/embed/${embedType}/${fileid}`;
      } else if (Date.Plateform === 'vidsrc') {
        const embedType = Date.MainCategory === 'TV' ? 'tv' : 'movie';
        Iframe = `https://vidsrc.me//embed//${embedType}?imdb=${fileid}`;
      } else if (Date.Plateform === 'streamtape') {
        Iframe = `https://antiadtape.com/e/${fileid}?thumb=${Date.Image}`;
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
        <DirectLink/>
        </>
    )
}