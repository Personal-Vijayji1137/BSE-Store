'use server'
import { FeaturedPlaylists } from "./AllServerRequests"
import SliderPost from "./Components/Slider/SliderModule";
export default async function Music(){
    return(
        <>
        <SliderPost Data={await FeaturedPlaylists('https://api.spotify.com/v1/browse/featured-playlists?limit=50&country=IN')} Text='Feature Playlist'/>
        <SliderPost Data={await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFKSopHMaeIeI/playlists?limit=50&country=IN')} Text='Punjabi'/>
        <SliderPost Data={await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFAUsdyVjCQuL/playlists?limit=50&country=IN')} Text='Romance'/>
        <SliderPost Data={await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHCxg5H5PtqW/playlists?limit=50&country=IN')} Text='Bollywood'/>
        <SliderPost Data={await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFOTGtSOysEXE/playlists?limit=50&country=IN')} Text='Devotional'/>
        <SliderPost Data={await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFE33XAyDiPIr/playlists?limit=50&country=IN')} Text='Tamil'/>
        <SliderPost Data={await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFIdOwkMWR5at/playlists?limit=50&country=IN')} Text='Telugu'/>
        <SliderPost Data={await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFOx2X0qlR9iG/playlists?limit=50&country=IN')} Text='Marathi'/>
        <SliderPost Data={await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFEOEBCABAxo9/playlists?limit=50&country=IN')} Text='Netflix'/>
        <SliderPost Data={await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/toplists/playlists?limit=50&country=IN')} Text='Top Lists'/>
        <SliderPost Data={await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFA6SOHvT3gck/playlists?limit=50&country=IN')} Text='Party'/>
        <SliderPost Data={await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFDKyRxRDLIbk/playlists?limit=50&country=IN')} Text='Happy Holidays'/>
        <SliderPost Data={await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFFzDl7qN9Apr/playlists?limit=50&country=IN')} Text='Chill'/>
        <SliderPost Data={await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFzHmL4tf05da/playlists?limit=50&country=IN')} Text='Mood'/>
        <SliderPost Data={await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFAXlCG6QvYQ4/playlists?limit=50&country=IN')} Text='Workout'/>
        <SliderPost Data={await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCuoRTxhYWow/playlists?limit=50&country=IN')} Text='Sleep'/>
        <SliderPost Data={await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFDXXwE9BDJAr/playlists?limit=50&country=IN')} Text='Rock'/>
        <SliderPost Data={await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists?limit=50&country=IN')} Text='Focus'/>
        <SliderPost Data={await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFIpEuaCnimBj/playlists?limit=50&country=IN')} Text='Soul'/>
        <SliderPost Data={await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFPrEiAOxgac3/playlists?limit=50&country=IN')} Text='Classical'/>
        <SliderPost Data={await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFAQy4HL4XU2D/playlists?limit=50&country=IN')} Text='Travel'/>
        <SliderPost Data={await FeaturedPlaylists('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFKLfwjuJMoNC/playlists?limit=50&country=IN')} Text='Country'/>
        </>
    )
}