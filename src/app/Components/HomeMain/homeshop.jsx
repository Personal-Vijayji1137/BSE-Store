import Styles from "./homeshop.module.css"
import Image from "next/image"
import Link from "next/link"
export default function HomeShop(){
    return(
        <>
            <div className={Styles.Shop}>
                <div>View Our Shop</div>
                <div className={Styles.HomeShop}>
                    <div>
                        <Image src="/ShopGirl.png" width={1000} height={1000} alt=""/>
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