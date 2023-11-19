import Link from "next/link"
import Image from "next/image"
export default function HomeBanner(){
    return(
        <>
        <div>
            <div>
                <div>In this season, find the best</div>
                <div>Exclusive collection for everyone</div>
                <Link href="/">Explore now</Link>
            </div>
            <div><Image src="/ShoppingBanner.png" width={1000} height={1000}/></div>
        </div>
        </>
    )
}