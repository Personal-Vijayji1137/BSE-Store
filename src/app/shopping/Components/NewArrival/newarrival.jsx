'use server'
import { createClient } from "@supabase/supabase-js";
import Render from "./render"
export default async function NewArrival(){
    const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {auth: { persistSession: false }});
    const GET = await supabase.from('BSE-Shopping').select('ID,Title,Image,Link,Price').order('ID', { ascending: false }).range(0,20);
    return(
        <>
        <Render Data={GET} Text="New Arrivals ..." link="/new"/>
        </>
    )
}