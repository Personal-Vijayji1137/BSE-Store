'use server'
import { createClient } from "@supabase/supabase-js"
export async function POST(request,{ params }) {
    const ID = params.id;
    const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {auth: { persistSession: false }});
    const res = await supabase.from(process.env.NEXT_PUBLIC_SUPABASE_MOVIES_DATABSE_NAME).select('*').eq('ID',ID);
    if(res.status == 400){
        return Response.json({"status":400,"message":`Invalid ID ${ID} || ID must be INT`,"data":null})
    }
    const response = res.data[0];
    if(res.data.length == 0){
        return Response.json({"status":404,"message":`No result found for this ID ${ID}`,"data":null})
    }
    const title = response.Title || null;
    const image = response.Image || null;
    const fileid = response.FileID || null;
    let download = null;
    let iframeUrl = '';
    if (response.Plateform === 'filemoon') {
      iframeUrl = `https://filemoon.sx/e/${fileid}?poster=${image}&logo=https://i.postimg.cc/N0BLyhkx/logo.webp`;
      download = `https://filemoon.sx/download/${fileid}`
    } else if (response.Plateform === 'Youtube') {
      iframeUrl = `https://www.youtube.com/embed/${fileid}`;
    } else if (response.Plateform === 'Vidsrc') {
      const embedType = response.MainCategory === 'TV' ? 'tv' : 'movie';
      iframeUrl = `https://vidsrc.to/embed/${embedType}/${fileid}`;
    } else if (response.Plateform === 'vidsrc') {
      const embedType = response.MainCategory === 'TV' ? 'tv' : 'movie';
      iframeUrl = `https://vidsrc.me//embed//${embedType}?imdb=${fileid}`;
    } else if (response.Plateform === 'streamtape') {
      iframeUrl = `https://antiadtape.com/e/${fileid}?thumb=${image}`;
      download = `https://antiadtape.com/v/${fileid}`
    }
    return Response.json({ "status":200,"message":res.data.length==0?`No result found on for this ID = ${ID}`:"success","ID":`${ID}`,"data":{...response,"IframeURL":iframeUrl,"DownloadURL":download}, })
}
export async function GET() {
    const data = {"message":"GET or any other Method is not alowed, Please use POST Method only ..."}
    return Response.json(data);
}export async function PATCH() {
    const data = {"message":"PATCH or any other Method is not alowed, Please use POST Method only ..."}
    return Response.json(data);
}export async function PUT() {
    const data = {"message":"PUT or any other Method is not alowed, Please use POST Method only ..."}
    return Response.json(data);
}export async function DELETE() {
    const data = {"message":"DELETE or any other Method is not alowed, Please use POST Method only ..."}
    return Response.json(data);
}export async function OPTIONS() {
    const data = {"message":"OPTIONS or any other Method is not alowed, Please use POST Method only ..."}
    return Response.json(data);
}