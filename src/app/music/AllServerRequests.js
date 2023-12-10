'use server'
import axios from "axios"
var Access_Token ;
export async function GetToken(){
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_ID;
    const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_SECRET;
    const response = await axios.post('https://accounts.spotify.com/api/token',
      new URLSearchParams({
        'grant_type': 'client_credentials',
        'client_id': clientId,
        'client_secret': clientSecret,
      }),{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
    );
    const data = response.data;
    Access_Token = data.access_token;
    return Access_Token;
}
export async function FeaturedPlaylists(url){
    const Token = await GetToken();
    const response = await axios.get(url, {headers: {'Authorization': `Bearer ${Token}`}});
    const data = response.data.playlists.items;
    let ArrData = [];
    data.map((item)=>{
        let NeedToPush = {};
        NeedToPush.description = item.description;
        NeedToPush.name = item.name;
        NeedToPush.id = item.id;
        NeedToPush.image = item.images[0].url;
        ArrData.push(NeedToPush);
    });
    return ArrData;
}
