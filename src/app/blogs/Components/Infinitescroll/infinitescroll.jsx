import Styles from "./infinitescroll.module.css"
import Link from "next/link"
export default function InfiniteScroll(){
    return(
        <>
        <div className={Styles.Tags}>BSE-Tags</div>
        <div className={Styles.scrollingcontainer}>
            {Array.from({ length: 3 }, (_, inde) => (
                <div className={Styles.scrollingcontent} key={inde}>
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
            ))}
        </div>
        </>
    )
}