'use server'
import { FeaturedPlaylists } from "./AllServerRequests"
import SliderPost from "./Components/Slider/SliderModule";
export default async function Music(){
    const FeaturePlaylist = await FeaturedPlaylists('https://api.spotify.com/v1/browse/featured-playlists?limit=50&country=IN');
    const Punjabi = await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFKSopHMaeIeI/playlists?limit=50&country=IN');
    const Romance = await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFAUsdyVjCQuL/playlists?limit=50&country=IN');
    const Bollywood = await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHCxg5H5PtqW/playlists?limit=50&country=IN');
    const Devotional = await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFOTGtSOysEXE/playlists?limit=50&country=IN');
    const Tamil = await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFE33XAyDiPIr/playlists?limit=50&country=IN');
    const Telugu = await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFIdOwkMWR5at/playlists?limit=50&country=IN');
    const Marathi = await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFOx2X0qlR9iG/playlists?limit=50&country=IN');
    const Netflix = await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFEOEBCABAxo9/playlists?limit=50&country=IN');
    const TopLists = await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/toplists/playlists?limit=50&country=IN');
    const Party = await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFA6SOHvT3gck/playlists?limit=50&country=IN');
    const HappyHolidays = await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFDKyRxRDLIbk/playlists?limit=50&country=IN');
    const Chill = await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFFzDl7qN9Apr/playlists?limit=50&country=IN');
    const Mood = await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFzHmL4tf05da/playlists?limit=50&country=IN');
    const Workout = await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFAXlCG6QvYQ4/playlists?limit=50&country=IN');
    const Sleep = await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCuoRTxhYWow/playlists?limit=50&country=IN');
    const Rock = await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFDXXwE9BDJAr/playlists?limit=50&country=IN');
    const Focus = await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists?limit=50&country=IN');
    const Soul = await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFIpEuaCnimBj/playlists?limit=50&country=IN');

    const Classical = await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFPrEiAOxgac3/playlists?limit=50&country=IN');
    const Travel = await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFAQy4HL4XU2D/playlists?limit=50&country=IN');
    const Country = await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFKLfwjuJMoNC/playlists?limit=50&country=IN');
    return(
        <>
        <SliderPost Data={FeaturePlaylist} Text='Feature Playlist'/>
        <SliderPost Data={Punjabi} Text='Punjabi'/>
        <SliderPost Data={Romance} Text='Romance'/>
        <SliderPost Data={Bollywood} Text='Bollywood'/>
        <SliderPost Data={Devotional} Text='Devotional'/>
        <SliderPost Data={Tamil} Text='Tamil'/>
        <SliderPost Data={Telugu} Text='Telugu'/>
        <SliderPost Data={Marathi} Text='Marathi'/>
        <SliderPost Data={Netflix} Text='Netflix'/>
        <SliderPost Data={TopLists} Text='Top Lists'/>
        <SliderPost Data={Party} Text='Party'/>
        <SliderPost Data={HappyHolidays} Text='Happy Holidays'/>
        <SliderPost Data={Chill} Text='Chill'/>
        <SliderPost Data={Mood} Text='Mood'/>
        <SliderPost Data={Workout} Text='Workout'/>
        <SliderPost Data={Sleep} Text='Sleep'/>
        <SliderPost Data={Rock} Text='Rock'/>
        <SliderPost Data={Focus} Text='Focus'/>
        <SliderPost Data={Soul} Text='Soul'/>
        <SliderPost Data={Classical} Text='Classical'/>
        <SliderPost Data={Travel} Text='Travel'/>
        <SliderPost Data={Country} Text='Country'/>
        </>
    )
}