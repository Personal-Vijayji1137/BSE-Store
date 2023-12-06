'use server'
import { createClient } from "@supabase/supabase-js";
import Styles from "../../Components/HomeBanner/homebanner.module.css"
import Style from "./dranastyle.module.css"
import Link from "next/link";
import Image from "next/image";
export default async function({ params }){
    const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {auth: { persistSession: false }});
    const GET = await supabase.from(process.env.NEXT_PUBLIC_SUPABASE_BSE_DRAMAS_NAME).select('*').eq('ID',params.Drama[0]);
    const Results = GET.data[0];
    const Episodes = Results.Episodes;
    return(
        <>
            <div className={Styles.TextDiv} style={{ backgroundImage: `url(${Results.Image})` }}>
                <div>
                    <div>
                        <div>
                        <div className={Styles.AboutBanner}>
                            <h1>{Results.Title}</h1>
                            <div>
                                <span>{Results.Year}</span>
                                <span> | </span>
                                <span>{Results.UorA}</span>
                                <span> | </span>
                                <span>Season {Results.Season}</span>
                                <span> | </span>
                                <span>{Results.Category} </span>
                                <Link href={`/entertainment/player/${Episodes[0].ID}/${Results.Title.split(" ").join("-")}`}>Watch</Link>
                            </div>
                            <div className={Styles.Paragraph}>
                                <div>{Results.Description}</div>
                                <div className='pt-4'>
                                    <span className='info-item'>Starring: </span>
                                    <span className='text-sm'>{Results.StartingWith}</span>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Style.NoOfEpi}>All {Episodes.length} Episodes</div>
            <div className={Style.viewgrid}>
                {Episodes.map((item,index)=>{
                    return <div key={item.ID}>
                        <Link href={`/entertainment/player/${item.ID}/${item.Title.split(" ").join("-")}`}><div className={Style.Imageinner}>Ep. {index+1}</div><Image className={Style.Images} src={item.Image} alt={item.Title} title={item.Title} width={300} height={300} /></Link>
                        <div className={Style.Title}>{item.Title}</div>
                        <div className={Style.WatDou}>
                            <Link href={item.Download}>Download</Link>
                            <Link href={`/entertainment/player/${item.ID}/${item.Title.split(" ").join("-")}`}>Watch</Link>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}