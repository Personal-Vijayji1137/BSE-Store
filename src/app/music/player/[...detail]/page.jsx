'use server'
import Image from "next/image";
import { FeaturedPlaylists } from "../../AllServerRequests"
import Style from "./detail.module.css"
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
            <div className={Style.MainDiv}>
                <iframe className={Style.MusicPlayer} src={`https://open.spotify.com/embed/playlist/${params.detail[0]}?utm_source=generator&theme=0`} width="100%" height="552" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                <div>
                    {FeatureData.map((item)=>{
                        return <div key={item.id} className={Style.RightMain}>
                            <div>
                                <Image src={item.image} width={100} height={100}/>
                            </div>
                            <div></div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}