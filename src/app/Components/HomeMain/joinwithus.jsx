import Styles from "./joinwithus.module.css"
import Image from "next/image"
import Link from "next/link"
export default function JoinWithUS(){
    return(
        <>
        <div className={Styles.JoinWithUS} data-aos="fade-up" data-aos-duration="2000">
            <div data-aos="fade-up" data-aos-duration="2000">Join With US</div>
            <div>
                <Link href="https://www.instagram.com/vijayji1137/" target='_blank' data-aos="fade-up" data-aos-duration="2000"><Image src="https://i.postimg.cc/HxBRmjsZ/instagram.png" height={300} width={300} alt=""/></Link>
                <Link href="https://www.youtube.com/" target='_blank' data-aos="fade-up" data-aos-duration="2000"><Image src="https://i.postimg.cc/fRWJBrSx/youtube-1.png" height={300} width={300} alt=""/></Link>
                <Link href="https://www.linkedin.com/in/jitender1137/" target='_blank' data-aos="fade-up" data-aos-duration="2000"><Image src="https://i.postimg.cc/VkTmnGqs/linkedin.png" height={300} width={300} alt=""/></Link>
                <Link href="https://github.com/jitenderji1137" target='_blank' data-aos="fade-up" data-aos-duration="2000"><Image src="https://i.postimg.cc/25bv7Kg0/github.png" height={300} width={300} alt=""/></Link>
                <Link href="https://api.whatsapp.com/send?phone=918307056141" target='_blank' data-aos="fade-up" data-aos-duration="2000"><Image src="https://i.postimg.cc/TwLn9YHL/whatsapp.png" height={300} width={300} alt=""/></Link>
                <Link href="https://beta.publishers.adsterra.com/referral/aKMU588PJU" target='_blank' data-aos="fade-up" data-aos-duration="2000"><Image src="https://i.postimg.cc/7LCXcvxp/PNG-250x250-px.png" height={300} width={300} alt=""/></Link>
                <Link href="/" target='_blank' data-aos="fade-up" data-aos-duration="2000"><Image src="https://i.postimg.cc/cH8RdLW7/unnamed.webp" height={300} width={300} alt=""/></Link>
                <Link href="https://winzo.onelink.me/gu8K/28342d48" target='_blank' data-aos="fade-up" data-aos-duration="2000"><Image src="https://i.postimg.cc/QMDgj3tv/460x0w.png" height={300} width={300} alt=""/></Link>
            </div>
        </div>
        </>
    )
}