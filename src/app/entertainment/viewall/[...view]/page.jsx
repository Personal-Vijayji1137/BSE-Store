'use server'
import { createClient } from "@supabase/supabase-js"
import Link from "next/link";
import Image from "next/image";
import Styles from "./viewall.module.css"
import DirectLink from "@/app/ads/DirectLink";
export default async function Page({ params }){
    const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {auth: { persistSession: false }});
    var GET ;
    let page = +params.view[2];
    var back ;
    var next ;
    if(page<=0){
        page = 1;
    }
    if(params.view[0] == "recent"){
        page = +params.view[1];
        var Start = (page - 1)*49;
        var End = page*49;
        if(page <= 1 ){
            back = `/entertainment/viewall/recent/1`
        }else{
            back = `/entertainment/viewall/recent/${page-1}`
        }
        GET = (await supabase.from(process.env.NEXT_PUBLIC_SUPABASE_MOVIES_DATABSE_NAME).select('ID,Title,Image').order('ID', { ascending: false }).range(Start,End));
        if(GET.data.length < 50){
            next = `/entertainment/viewall/recent/${page}`
        }else{
            next = `/entertainment/viewall/recent/${page+1}`
        }
    }else{
        var Start = (page - 1)*49;
        var End = page*49;
        if(page <= 1 ){
            back = "/"
        }
        if(page <= 1 ){
            back = `/entertainment/viewall/${params.view[0]}/${params.view[1]}/1`
        }else{
            back = `/entertainment/viewall/${params.view[0]}/${params.view[1]}/${page-1}`
        }
        GET = (await supabase.from(process.env.NEXT_PUBLIC_SUPABASE_MOVIES_DATABSE_NAME).select('ID,Title,Image').order('ID', { ascending: false }).eq(`${params.view[0]}`,`${params.view[1]}`).range(Start,End));
        if(GET.data.length < 50){
            next = `/entertainment/viewall/${params.view[0]}/${params.view[1]}/${page}`
        }else{
            next = `/entertainment/viewall/${params.view[0]}/${params.view[1]}/${page+1}`
        }
    }
    const Data = GET.data;
    return(
        <>
        <div className='mt-24'>
            <div className='m-5'>
                <div className={Styles.viewgrid}>
                    {Data.map((item)=>{
                        return <div key={item.ID}>
                            <Link href={`/entertainment/player/${item.ID}/${item.Title.split(" ").join("-")}`}><Image priority={true} className={Styles.Images} src={item.Image} alt={item.Title} title={item.Title} width={300} height={300} /></Link>
                        </div>
                    })}
                </div>
            </div>
        </div>
        <div className={Styles.Button}>
            <Link className="bg-red-700 p-2 rounded-md m-3 text-center" style={{ width: '100px' }} href={back}>{page === 1 ? 'First Page' : 'Back'}</Link>
            <button className="bg-red-700 p-2 rounded-md m-3" style={{ width: '60px' }} disabled>{page}</button>
            <Link className="bg-red-700 p-2 rounded-md m-3 text-center" style={{ width: '100px' }} href={next}>{Data.length < 50 ? 'Last Page' : 'Next'}</Link>
        </div>
        <DirectLink/>
        </>
    )
}