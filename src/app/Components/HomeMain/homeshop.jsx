import Styles from "./homeshop.module.css"
import Image from "next/image"
import Link from "next/link"
export default function HomeShop(){
    return(
        <>
            <div className={Styles.Shop} data-aos="fade-up" data-aos-duration="2000">
                <div data-aos="fade-up" data-aos-duration="2000">View Our Shop</div>
                <div className={Styles.HomeShop} data-aos="fade-up" data-aos-duration="2000">
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <Image src="/ShopGirl.png" width={1000} height={1000} alt=""/>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <div data-aos="fade-up" data-aos-duration="2000">Discover New <br/>Collection</div>
                        <p data-aos="fade-up" data-aos-duration="2000">Fashion is part of the daily air and it changes all the time, with all the events.</p>
                        <Link href="/shopping">
                            <button className={Styles.Btn} data-aos="fade-up" data-aos-duration="2000">Shop Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}