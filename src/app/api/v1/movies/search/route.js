'use server'
import { createClient } from "@supabase/supabase-js"
export async function POST(request) {
    var search = "gad";
    // if(query == ""){search = " "}
    const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {auth: { persistSession: false }});
    const res = await supabase.from("Free-Netflix-Darabase").select('ID,Title,Image').order('ID', { ascending: false }).ilike('Title', `%${search}%`).range(0,15);
    return Response.json({ res })
}
export async function GET() {
    const data = {"message":"GET or any other Method is not alowed, Please use POST Method only ..."}
    return Response.json(data);
}