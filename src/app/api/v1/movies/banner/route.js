'use server'
import { createClient } from "@supabase/supabase-js"
export async function POST() {
    const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {auth: { persistSession: false }});
    const GET = await supabase.from(process.env.NEXT_PUBLIC_SUPABASE_MOVIES_BANNER_NAME).select('*').eq('id', 1);
    const Object = {
        ID: +GET.data[0].Link,
        Title: GET.data[0].Name,
        Year: GET.data[0].Year,
        UA: GET.data[0].UA,
        Duration: GET.data[0].Duration,
        Geans: GET.data[0].Geans,
        Paragraph: GET.data[0].Paragraph,
        Cast: GET.data[0].Cast,
        Big_Image: GET.data[0].Big_Image,
        Small_Image: GET.data[0].Small_Image,
    }
    return Response.json({ "status":200,"message":"success","data":{...Object}})
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