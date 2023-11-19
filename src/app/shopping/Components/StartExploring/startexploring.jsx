'use server'
import Link from "next/link"
import Image from "next/image"
import Styles from "./startexploring.module.css"
export default async function StartExploring(){
    return(
        <>
        <div className={Styles.MainSteps} style={{ backgroundImage: `url(/StepsBG.svg)`}}>
            <div>Start exploring.</div>
            <div>
                <div>
                    <Link href="/"><Image src="/WomenIcon.svg" width={40} height={40}/>Women</Link>
                    <Link href="/"><Image src="/ManIcon.svg" width={40} height={40}/>Man</Link>
                    <Link href="/"><Image src="/KidsIcon.svg" width={40} height={40}/>Kids</Link>
                    <Link href="/"><Image src="/SportsIcon.svg" width={40} height={40}/>Sports</Link>
                    <Link href="/"><Image src="/BeautyIcon.svg" width={40} height={40}/>Beauty</Link>
                    <Link href="/"><Image src="/JewelryIcon.svg" width={40} height={40}/>Jewelry</Link>
                </div>
            </div>
            <div className={Styles.Category}>
                <Link href="/" style={{ backgroundImage: `url(/CoatBG.svg)`}}>
                    <div>
                        <Image src="/BackpackIcon.png" width={100} height={100}/>
                        <div>155 Products</div>
                    </div>
                    <div>Manufacturar</div>
                    <div>Backpack</div>
                    <div>See Collection &#x2794;</div>
                </Link>
                <Link href="/" style={{ backgroundImage: `url(/JerseyBG.svg)`}}>
                    <div>
                        <Image src="/ShoesIcon.png" width={100} height={100}/>
                        <div>22 Products</div>
                    </div>
                    <div>Manufacturar</div>
                    <div>Shoes</div>
                    <div>See Collection &#x2794;</div>
                </Link>
                <Link href="/" style={{ backgroundImage: `url(/ShortsBG.svg)`}}>
                    <div>
                        <Image src="/BlanketIcon.png" width={100} height={100}/>
                        <div>144 Products</div>
                    </div>
                    <div>Manufacturar</div>
                    <div>Blanket</div>
                    <div>See Collection &#x2794;</div>
                </Link>
                <Link href="/" style={{ backgroundImage: `url(/ShortsBG.svg)`}}>
                    <div>
                        <Image src="/ShortsIcon.png" width={100} height={100}/>
                        <div>343 Products</div>
                    </div>
                    <div>Manufacturar</div>
                    <div>Shorts</div>
                    <div>See Collection &#x2794;</div>
                </Link>
                <Link href="/" style={{ backgroundImage: `url(/BlanketBG.svg)`}}>
                    <div>
                        <Image src="/JerseyIcon.png" width={100} height={100}/>
                        <div>243 Products</div>
                    </div>
                    <div>Manufacturar</div>
                    <div>Jersey</div>
                    <div>See Collection &#x2794;</div>
                </Link>
                <Link href="/" style={{ backgroundImage: `url(/CoatBG.svg)`}}>
                    <div>
                        <Image src="/CoatIcon.png" width={100} height={100}/>
                        <div>198 Products</div>
                    </div>
                    <div>Manufacturar</div>
                    <div>Coat</div>
                    <div>See Collection &#x2794;</div>
                </Link>
            </div>
        </div>
        </>
    )
}