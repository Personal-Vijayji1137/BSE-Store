'use server'
import Image from "next/image"
import Link from "next/link"
import { createClient } from "@supabase/supabase-js";
import Styles from "./kids.module.css"
import Render from "../NewArrival/render"
export default async function KidsBanner(){
    const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {auth: { persistSession: false }});
    const GET = await supabase.from('BSE-Shopping').select('ID,Title,Image,Link,Price').eq('MainCategory','Kids').order('ID', { ascending: false }).range(0,20);
    return(
        <>
        <div style={{ backgroundImage: `url(/ShoppingHomeBG.svg)`}} className={Styles.HomeBanner}>
            <div><Image src="/ShoppingKids.png" width={1000} height={1000}/></div>
            <div>
                <div>
                    <div>Fashion is a form of self-expression and autonomy at a particular period and place.</div>
                    <div>Special offer in kids products</div>
                    <Link href="/">Discover more &#x2794;</Link>
                </div>
            </div>
        </div>
        <Render Data={GET} Text="Kids Special" link="/kids"/>
        </>
    )
}