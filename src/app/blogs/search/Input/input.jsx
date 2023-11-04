import Styles from "./input.module.css"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
export default function BlogSearch(){
    return(
        <>
        <form className={Styles.BlogSearch}>
            <input type="text" placeholder="Blog to Search..." />
        </form>
        <div className={Styles.Results}>Top Results</div>
        {Array.from({ length: 5 }, (_, index) => (
        <Link href="/" key={index} className={Styles.SinglePost}>
            <div><Image src="https://i.ytimg.com/vi/m5wVhQYriJE/maxresdefault.jpg" width={100} height={100} alt=""/></div>
            <div>
                <div>All the money in the world can&apos;t buy you back good health</div>
                <div>May 2, 2022 || 3 min read</div>
            </div>
        </Link>
        ))}
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