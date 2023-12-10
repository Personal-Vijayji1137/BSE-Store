'use server'
import Image from "next/image";
import { FeaturedPlaylists } from "../../AllServerRequests"
import Style from "./detail.module.css"
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