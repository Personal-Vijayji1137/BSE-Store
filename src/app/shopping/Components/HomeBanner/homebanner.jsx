'use server'
import Link from "next/link"
import Image from "next/image"
import Styles from "./homebanner.module.css"
export default async function HomeBanner(){
    return(
        <>
        <div style={{ backgroundImage: `url(/ShoppingHomeBG.svg)`}} className={Styles.HomeBanner}>
            <div>
                <div>
                    <div><span>🔥</span> In this season, find the best <span>🔥</span></div>
                    <div>Exclusive collection for everyone</div>
                    <Link href="/">Explore now</Link>
                </div>
            </div>
            <div><Image src="/ShoppingBanner.png" width={1000} height={1000}/></div>
        </div>
        </>
    )
}