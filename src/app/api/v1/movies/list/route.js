'use server'
import { createClient } from "@supabase/supabase-js"
export async function POST(request) {
    const { searchParams } = new URL(request.url)
    var page = +searchParams.get('page') || 1;
    var limit = +searchParams.get('limit') || 20;
    var MainCategory = searchParams.get('MainCategory');
    var Geans = searchParams.get('Geans');
    if(limit > 100){limit = 100}
    var Start = (page - 1)*limit;
    var End = (page*limit)-1;
    const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {auth: { persistSession: false }});
    if(MainCategory != null && Geans != null){
        const res = await supabase.from(process.env.NEXT_PUBLIC_SUPABASE_MOVIES_DATABSE_NAME).select('Title,Image,Geans,MainCategory,ID').eq('MainCategory',MainCategory).eq('Geans',Geans).order('ID', { ascending: false }).range(Start,End);
        const data = res.data;
        return Response.json({ "status":200,"message":data.length==0?"No result found on this page":"success","page": page,"limit":limit,data, })
    }else if(MainCategory != null && Geans == null){
        const res = await supabase.from(process.env.NEXT_PUBLIC_SUPABASE_MOVIES_DATABSE_NAME).select('Title,Image,Geans,MainCategory,ID').eq('MainCategory',MainCategory).order('ID', { ascending: false }).range(Start,End);
        const data = res.data;
        return Response.json({ "status":200,"message":data.length==0?"No result found on this page":"success","page": page,"limit":limit,data, })
    }else if(MainCategory == null && Geans != null){
        const res = await supabase.from(process.env.NEXT_PUBLIC_SUPABASE_MOVIES_DATABSE_NAME).select('Title,Image,Geans,MainCategory,ID').eq('Geans',Geans).order('ID', { ascending: false }).range(Start,End);
        const data = res.data;
        return Response.json({ "status":200,"message":data.length==0?"No result found on this page":"success","page": page,"limit":limit,data, })
    }
    const res = await supabase.from(process.env.NEXT_PUBLIC_SUPABASE_MOVIES_DATABSE_NAME).select('Title,Image,Geans,MainCategory,ID').order('ID', { ascending: false }).range(Start,End);
    const data = res.data;
    return Response.json({ "status":200,"message":data.length==0?"No result found on this page":"success","page": page,"limit":limit,data, })
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