'use server'
import Image from "next/image"
import Link from "next/link"
import Styles from "./kids.module.css"
export default async function KidsBanner(){
    return(
        <>
        <div style={{ backgroundImage: `url(/ShoppingHomeBG.svg)`}} className={Styles.HomeBanner}>
            <div><Image src="/ShoppingKids.png" width={1000} height={1000}/></div>
            <div>
                <div>
                    <div>Fashion is a form of self-expression and autonomy at a particular period and place.</div>
                    <div>Special offer in kids products</div>
                    <Link href="/">Discover more &#x2794;</Link>
                </div>
            </div>
        </div>
        </>
    )
}