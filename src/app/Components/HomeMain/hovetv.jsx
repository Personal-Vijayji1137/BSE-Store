import Styles from "./hometv.module.css"
import Image from "next/image"
import Link from "next/link"
export default function HomeTV(){
    return(
        <>
        <div className={Styles.HomeTV}>
            <div>
                <div>Watch Anywhere<br/>You Want.</div>
                <p>Watch an endless number of shows, on your phone, tablet, laptop, and TV.</p>
                <Link href="/entertainment">
                    <button className={Styles.box}>
                        <span className={Styles.button}>Watch Now</span>
                    </button>
                </Link>
            </div>
            <div>
                <Image src="/TV.png" width={500} height={500} alt=""/>
            </div>
        </div>
        </>
    )
}