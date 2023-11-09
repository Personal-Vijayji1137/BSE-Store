'use server'
import { createClient } from "@supabase/supabase-js"
import Link from "next/link";
import Image from "next/image";
import Styles from "./viewall.module.css"
export default async function Page({ params }){
    const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {auth: { persistSession: false }});
    var maincat ;
    var GET ;
    let page = +params.view[2];
    if(page<=0){page = 1}
    if(params.view[0] == "recent"){
        page = +params.view[1];
        var Start = (page - 1)*49;
        var End = page*49;
        GET = (await supabase.from('Free-Netflix-Darabase').select('ID,Title,Image').order('ID', { ascending: false }).range(Start,End))
    }else{
        var Start = (page - 1)*49;
        var End = page*49;
        GET = (await supabase.from('Free-Netflix-Darabase').select('ID,Title,Image').order('ID', { ascending: false }).eq(`${params.view[0]}`,`${params.view[1]}`).range(Start,End))
    }
    const Date = GET.data;
    return(
        <>
        <div className='mt-24'>
            <div className='m-5'>
                <div className={Styles.viewgrid}>
                    {Date.map((item)=>{
                        return <div key={item.ID}>
                            <Link href={`/entertainment/player/${item.ID}/${item.Title.split(" ").join("-")}`}><Image className={Styles.Images} src={item.Image} alt={item.Title} title={item.Title} width={500} height={500} /></Link>
                        </div>
                    })}
                </div>
            </div>
        </div>
        <div className="flex mb-20 w-full justify-center items-center">
            {/* <Link className="bg-red-700 p-2 rounded-md m-3 text-center" style={{ width: '100px' }} href={page<=1?"#":`/viewall/${totparem}/${page-1}`}>{page === 1 ? 'First Page' : 'Back'}</Link>
            <button className="bg-red-700 p-2 rounded-md m-3" style={{ width: '60px' }} disabled>{page}</button>
            <Link className="bg-red-700 p-2 rounded-md m-3 text-center" style={{ width: '100px' }} href={MapedData.length<50?"#":`/viewall/${totparem}/${page+1}`}>{MapedData.length < 50 ? 'Last Page' : 'Next'}</Link> */}
        </div>
        </>
    )
}