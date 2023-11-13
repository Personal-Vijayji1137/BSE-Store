'use server'
import { createClient } from "@supabase/supabase-js"
export async function GET(request) {
    const { searchParams } = new URL(request.url)
    var search = searchParams.get('query') || " ";
    var page = +searchParams.get('page') || 1;
    var limit = +searchParams.get('limit') || 20;
    var Start = (page - 1)*limit;
    var End = (page*limit)-1;
    const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {auth: { persistSession: false }});
    const res = await supabase.from("Free-Netflix-Darabase").select('ID,Title,Image').order('ID', { ascending: false }).ilike('Title', `%${search}%`).range(Start,End);
    const data = res.data;
    return Response.json({ "status":200,"message":data.length==0?"No result found on this page":"success","query":`${search}`,"page": page,"limit":limit,data, })
}
export async function POST() {
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