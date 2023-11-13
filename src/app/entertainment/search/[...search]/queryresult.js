'use server'
import { createClient } from "@supabase/supabase-js"
export default async function SearchResult(query){
    var search = query;
    if(query == ""){search = " "}
    const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {auth: { persistSession: false }});
    const res = await supabase.from("Free-Netflix-Darabase").select('ID,Title,Image').order('ID', { ascending: false }).ilike('Title', `%${search}%`).range(0,15);
    return res.data;
}