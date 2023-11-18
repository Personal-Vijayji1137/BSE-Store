'use server'
import { createClient } from "@supabase/supabase-js"
import Link from "next/link";
import Image from "next/image";
import Styles from "@/app/entertainment/viewall/[...view]/viewall.module.css"
import DirectLink from "@/app/ads/DirectLink";
export default async function Page({ params }){
    const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {auth: { persistSession: false }});
    var GET ;
    let page = +params.viewall[0];
    const query = params.viewall[1]=="recent"?"":params.viewall[1].split("-").join(" ");
    var back ;
    var next ;
    if(page<=0){
        page = 1;
    }
    var Start = (page - 1)*49;
    var End = page*49;
    if(page <= 1 ){
        back = `/entertainment/search/viewall/1/${params.viewall[1]=="recent"?"recent":params.viewall[1]}`
    }else{
        back = `/entertainment/search/viewall/${page-1}/${params.viewall[1]=="recent"?"recent":params.viewall[1]}`
    }
    GET = await supabase.from("Free-Netflix-Darabase").select('ID,Title,Image').order('ID', { ascending: false }).ilike('Title', `%${query}%`).range(Start,End);
    if(GET.data.length < 50){
        next = `/entertainment/search/viewall/${page}/${params.viewall[1]=="recent"?"recent":params.viewall[1]}`
    }else{
        next = `/entertainment/search/viewall/${page+1}/${params.viewall[1]=="recent"?"recent":params.viewall[1]}`
    }
    const Data = GET.data;
    return(
        <>
        <div className='mt-24'>
            <div className='m-5'>
                <div className={Styles.viewgrid}>
                    {Data.map((item)=>{
                        return <div key={item.ID}>
                            <Link href={`/entertainment/player/${item.ID}/${item.Title.split(" ").join("-")}`}><Image className={Styles.Images} src={item.Image} alt={item.Title} title={item.Title} width={300} height={300} /></Link>
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