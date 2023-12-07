import Styles from "./hometv.module.css"
import Image from "next/image"
import Link from "next/link"
export default function HomeTV(){
    return(
        <>
        <div className={Styles.HomeTV}>
            <div data-aos="fade-right">
                <div data-aos="fade-right">Watch Anywhere<br/>You Want.</div>
                <p data-aos="fade-right">Watch an endless number of shows, on your phone, tablet, laptop, and TV.</p>
                <Link href="/entertainment">
                    <button data-aos="fade-right" className={Styles.box}>
                        <span data-aos="fade-right" className={Styles.button}>Watch Now</span>
                    </button>
                </Link>
            </div>
            <div data-aos="fade-left">
                <Image data-aos="fade-left" src="/TV.png" width={1000} height={1000} alt=""/>
            </div>
        </div>
        </>
    )
}