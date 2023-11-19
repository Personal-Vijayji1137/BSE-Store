'use server'
import { createClient } from "@supabase/supabase-js"
export default async function SearchResult(query){
    var search = query;
    if(query == ""){search = " "}
    const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {auth: { persistSession: false }});
    const res = await supabase.from("BSE-Blogs").select('ID,Image,Title,ReadingTime,Date').order('ID', { ascending: false }).ilike('Title', `%${search}%`).range(0,5);
    return res.data;
}