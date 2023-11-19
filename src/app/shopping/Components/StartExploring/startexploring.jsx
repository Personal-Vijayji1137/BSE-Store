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
            <div>
                <Link href="/"></Link>
                <Link href="/"></Link>
                <Link href="/"></Link>
                <Link href="/"></Link>
                <Link href="/"></Link>
                <Link href="/"></Link>
            </div>
        </div>
        </>
    )
}