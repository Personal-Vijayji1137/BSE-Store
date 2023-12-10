'use server'
import Image from "next/image";
import { FeaturedPlaylists } from "../../AllServerRequests"
import Style from "./detail.module.css"
import Link from "next/link";
export async function generateMetadata({ params }) {
    return {
        title: `${params.detail[1]} on BSE-Store`,
        description: `You are Listening ${params.detail[1]} on BSE-Store, BSE - Entertainment is your passport to endless entertainment, available anytime, anywhere.`,
        openGraph: {
            title: `${params.detail[1]} on BSE-Store`,
            description: `You are Listening ${params.detail[1]} on BSE-Store, BSE - Entertainment is your passport to endless entertainment, available anytime, anywhere.`,
            images: `${params.detail[2].split('%3A').join(':').split('---').join('/')}`,
        },
        twitter: {
            card: 'summary_large_image',
            title: `${params.detail[1]} on BSE-Store`,
            description: `You are Listening ${params.detail[1]} on BSE-Store, BSE - Entertainment is your passport to endless entertainment, available anytime, anywhere.`,
            siteId: '1467726470533754880',
            creator: '@nextjs',
            creatorId: '1467726470533754880',
            images: [`${params.detail[2].split('%3A').join(':').split('---').join('/')}`],
        }
    }
}
export default async function MusicPlayer({ params }){
    const FeatureData = await FeaturedPlaylists('https://api.spotify.com/v1/browse/featured-playlists?limit=50&country=IN');
    return(
        <>
                <iframe className={Style.MusicPlayer} src={`https://open.spotify.com/embed/playlist/${params.detail[0]}?utm_source=generator&theme=0`} width="100%" height="552" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                <div>
                <div className={Style.viewgrid}>
                    {FeatureData.map((item)=>{
                        return <div key={item.id}>
                        <Link href={`/music/player/${item.id}/${item.name.split(" ").join("-")}/${item.image.split('/').join('---')}`}><Image className={Style.Images} src={item.image} alt={`Image ${item.id}`} title={item.name} width={200} height={200} /></Link>
                        </div>
                    })}
                </div>
                </div>
        </>
    )
}