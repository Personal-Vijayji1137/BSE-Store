import Styles from "./input.module.css"
import Image from "next/image"
import Link from "next/link"
import GetFirstFivePostData from "@/app/Server/Bolgs/firstfivepost"
export default async function BlogSearch(){
    const FivePost = await GetFirstFivePostData();
    const Data = FivePost.data.data.listBSEBlogs.items;
    return(
        <>
        <form className={Styles.BlogSearch}>
            <input type="text" placeholder="Blog to Search..." />
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