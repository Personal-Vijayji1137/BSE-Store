'use server'
import { createClient } from "@supabase/supabase-js";
import Render from "./scrollerrender";
export default async function Scroller(){
    const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {auth: { persistSession: false }});
    const GET = await supabase.from('Free-Netflix-Darabase').select('ID,Title,Image').order('ID', { ascending: false }).range(0,15);
    const WebSeries = await supabase.from('Free-Netflix-Darabase').select('ID,Title,Image').order('ID', { ascending: false }).eq("MainCategory","WebSeries").range(0,15);
    const Movies = await supabase.from('Free-Netflix-Darabase').select('ID,Title,Image').order('ID', { ascending: false }).eq("MainCategory","Movies").range(0,15);
    const Songs = await supabase.from('Free-Netflix-Darabase').select('ID,Title,Image').order('ID', { ascending: false }).eq("MainCategory","Songs").range(0,15);
    return(
        <>
        <Render Data={[GET.data,"Recent Uploaded ...","/"]}/>
        <Render Data={[WebSeries.data,"Web Series ...","/"]}/>
        <Render Data={[Movies.data,"Movies ...","/"]}/>
        <Render Data={[Songs.data,"Songs ...","/"]}/>
        </>
    )
}