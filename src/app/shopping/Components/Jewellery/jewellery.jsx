import Styles from "./jewellery.module.css"
import Link from "next/link"
export default function Jewellery(){
    return(
        <>
        <div style={{ backgroundImage: `url(/JewelleryBG.png)`}} className={Styles.Jewellery}>
            <div style={{ backgroundImage: `url(/StepsBG.svg)`}}>Jewellery & Diamonds</div>
            <div>Discover the epitome of elegance and timeless beauty with our exquisite Jewelry & Diamonds module, where craftsmanship meets sophistication in every intricately designed piece, reflecting the brilliance of your unique style.</div>
            <Link href="/">Check more Product &#x2794;</Link>
        </div>
        </>
    )
}