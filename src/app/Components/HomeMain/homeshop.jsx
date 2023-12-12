'use client'
import { setCookies } from "@/app/entertainment/player/login/loginlogic";
import Styles from "./homeshop.module.css"
import Image from "next/image"
import Link from "next/link"
export default function HomeShop(){
    if (typeof window !== 'undefined') {
        const URL = window.location.href;
        if (URL.includes('#access_token')) {
            console.log(URL);
            const params = window.location.hash.substring(1);
            const urlParams = new URLSearchParams(params);
            const access_token = urlParams.get("access_token");
            const refresh_token = urlParams.get("refresh_token");
            setCookies(access_token, refresh_token);
        }
    }
    
    return(
        <>
            <div className={Styles.Shop}>
                <div>View Our Shop</div>
                <div className={Styles.HomeShop}>
                    <div>
                        <Image src="/ShopGirl.png" width={500} height={500} alt=""/>
                    </div>
                    <div>
                        <div>Discover New <br/>Collection</div>
                        <p>Fashion is part of the daily air and it changes all the time, with all the events.</p>
                        <Link href="/shopping">
                            <button className={Styles.Btn}>Shop Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}