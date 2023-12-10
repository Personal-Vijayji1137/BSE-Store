'use server'
import { FeaturedPlaylists } from "./AllServerRequests"
import SliderPost from "./Components/Slider/SliderModule";
export default async function Music(){
    const FeaturePlaylist = await FeaturedPlaylists('https://api.spotify.com/v1/browse/featured-playlists?limit=50');
    return(
        <>
        <SliderPost Data={FeaturePlaylist}/>
        </>
    )
}