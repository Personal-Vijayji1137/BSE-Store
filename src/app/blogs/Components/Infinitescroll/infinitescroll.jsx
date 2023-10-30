import Styles from "./infinitescroll.module.css"
import Link from "next/link"
export default function InfiniteScroll(){
    return(
        <>
        <div className={Styles.scrollingcontainer}> 
            <div className={Styles.scrollingcontent}>
                <Link href="/">one</Link>
                <Link href="/">two</Link>
                <Link href="/">three</Link>
                <Link href="/">four</Link>
                <Link href="/">five</Link>
                <Link href="/">six</Link>
                <Link href="/">seven</Link>
                <Link href="/">eight</Link>
                <Link href="/">nine</Link>
                <Link href="/">ten</Link>
                <Link href="/">one</Link>
                <Link href="/">two</Link>
                <Link href="/">three</Link>
                <Link href="/">four</Link>
                <Link href="/">five</Link>
                <Link href="/">six</Link>
                <Link href="/">seven</Link>
                <Link href="/">eight</Link>
                <Link href="/">nine</Link>
                <Link href="/">ten</Link>
            </div>
            <div className={Styles.scrollingcontent}>
                <Link href="/">one</Link>
                <Link href="/">two</Link>
                <Link href="/">three</Link>
                <Link href="/">four</Link>
                <Link href="/">five</Link>
                <Link href="/">six</Link>
                <Link href="/">seven</Link>
                <Link href="/">eight</Link>
                <Link href="/">nine</Link>
                <Link href="/">ten</Link>
                <Link href="/">one</Link>
                <Link href="/">two</Link>
                <Link href="/">three</Link>
                <Link href="/">four</Link>
                <Link href="/">five</Link>
                <Link href="/">six</Link>
                <Link href="/">seven</Link>
                <Link href="/">eight</Link>
                <Link href="/">nine</Link>
                <Link href="/">ten</Link>
            </div>
        </div>
        </>
    )
}