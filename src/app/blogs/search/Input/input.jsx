'use client'
import { useState, useEffect } from "react"
import SearchResult from "./searchresult"
import Styles from "./input.module.css"
import Image from "next/image"
import Link from "next/link"
export default function BlogSearch(){
    const [query,queryvalue] = useState("");
    const [Data,datavalue] = useState([]);
    const FetchData = async()=>{
        const data = await SearchResult(query);
        datavalue(data);
    }
    useEffect(()=>{
        FetchData();
    },[query])
    return(
        <>
        <form className={Styles.BlogSearch}>
            <input type="text" value={query} placeholder="Blog to Search..." onChange={(e)=>{queryvalue(e.target.value)}} />
        </form>
        <div className={Styles.Results}>Top Results</div>
        {Data.map((item)=>{
            return <Link href={`/blogs/post/${item.ID}/${item.Title.split(" ").join("-")}`} key={item.ID} className={Styles.SinglePost}>
                <div><Image src={item.Image} width={100} height={100} alt=""/></div>
                <div>
                    <div>{item.Title}</div>
                    <div>{item.Date} || {item.ReadingTime}</div>
                </div>
            </Link>
        })}
        <div className={Styles.ViewAll}>
            <Link href="/">View All &#x2794;</Link>
        </div>
        <div className={Styles.Results}>Tags</div>
        <div className={Styles.scrollingcontent}>
            <Link href="/"><span></span><span>One</span></Link>
            <Link href="/"><span></span><span>two</span></Link>
            <Link href="/"><span></span><span>three</span></Link>
            <Link href="/"><span></span><span>four</span></Link>
            <Link href="/"><span></span><span>five</span></Link>
            <Link href="/"><span></span><span>six</span></Link>
            <Link href="/"><span></span><span>seven</span></Link>
            <Link href="/"><span></span><span>eight</span></Link>
            <Link href="/"><span></span><span>nine</span></Link>
            <Link href="/"><span></span><span>ten</span></Link>
        </div>
        <div className={Styles.Results}>Ads</div>
        <div className={Styles.Ads}>
        <Link href="https://beta.publishers.adsterra.com/referral/aKMU588PJU"><img alt="banner" src="https://landings-cdn.adsterratech.com/referralBanners/gif/720x90_adsterra_reff.gif" /></Link>
        </div>
        </>
    )
}