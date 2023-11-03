import Styles from "./aboutpost.module.css"
import Image from "next/image"
import Link from "next/link"
export default function AboutPost(){
    return(
        <>
        <div className={Styles.AboutPost}>
            <Image src="https://i.postimg.cc/4dxzwGwW/maxresdefault.jpg" width={1000} height={1000} alt=""/>
        </div>
        <div className={Styles.Tags}>
                <div><Link href="/"><span></span><span>Coading</span></Link></div>
                <div><Link href="/"><span></span><span>Earning</span></Link></div>
        </div>
        <div className={Styles.Heading}>
            <h1>All the money in the world can't buy you back good health</h1>
        </div>
        <div className={Styles.Author}>By Jitender&nbsp;&nbsp;&nbsp;|| &nbsp;&nbsp;&nbsp;May 2, 2022&nbsp;&nbsp;&nbsp;|| &nbsp;&nbsp;&nbsp; 4 min read</div>
        <p className={Styles.Paragraph}>She then expatiated very warmly upon the advantages I should reap from her plan talked in a high style of my future grandeur assured me how heartily I should despise almost every body and every thing I had hitherto seen predicted my marrying into some family of the first rank in the kingdom and finally said I should spend a few months in Paris where my education and manners might receive their last polish.</p>
        <p className={Styles.Paragraph}>She then expatiated very warmly upon the advantages I should reap from her plan talked in a high style of my future grandeur assured me how heartily I should despise almost every body and every thing I had hitherto seen predicted my marrying into some family of the first rank in the kingdom and finally said I should spend a few months in Paris where my education and manners might receive their last polish.</p>
        <div className={Styles.SubHeading}>
            <h2>1. All the money in the world can't buy you back good health</h2>
        </div>
        <p className={Styles.Paragraph}>She then expatiated very warmly upon the advantages I should reap from her plan talked in a high style of my future grandeur assured me how heartily I should despise almost every body and every thing I had hitherto seen predicted my marrying into some family of the first rank in the kingdom and finally said I should spend a few months in Paris where my education and manners might receive their last polish.</p>
        <div className={Styles.Link}>
            <Link href="/">Vist Site Now</Link>
        </div>
        </>
    )
}