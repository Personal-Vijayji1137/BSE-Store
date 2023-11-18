'use client'
import { useState, useEffect } from "react"
import Styles from "./search.module.css"
import SearchResult from "./queryresult"
import Image from "next/image"
import Link from "next/link"
import DirectLink from "@/app/ads/DirectLink"
export default function Search({ params }){
    const [query,queryvalue] = useState(params.search[0]=="recent"?"":params.search[0]);
    const [Data,datavalue] = useState([]);
    async function FetchData(){
        const data = await SearchResult(query);
        datavalue(data);
    }
    useEffect(()=>{
        FetchData();
    },[query])
    return(
        <>
        <div className={Styles.Banners}>
            <div>
            <div className={Styles.BlogSearch}>
                    <input type="text" value={query} placeholder="Search..." onChange={(e)=>{queryvalue(e.target.value)}} />
                </div>
                <div className={Styles.Results}>Results</div>
                {Data.map((item)=>{
                    return <Link href={`/entertainment/player/${item.ID}/${item.Title.split(" ").join("-")}`} key={item.ID} className={Styles.SinglePost}>
                        <div><Image src={item.Image} width={400} height={400} alt=""/></div>
                        <div>
                            <div>{item.Title}</div>
                        </div>
                    </Link>
                })}
            </div>
            <div className={Styles.ViewAllBtn}>
                <Link href={`/entertainment/search/viewall/1/${query==""?"recent":query.split(" ").join("-")}`}>View All</Link>
            </div>
        </div>
        <DirectLink/>
        </>
    )
}