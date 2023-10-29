import Styles from "./footer.module.css"
import Image from "next/image"
import Link from "next/link"
export default function Footer(){
    return(
        <>
        <div id="Footer" className={Styles.Footer}>
            <div>
                <div>
                    <div>
                        <div className={Styles.divlog}>
                            <Link href="/" className={Styles.divlog}>
                                <Image src="/logo.webp" width={40} height={40} className={Styles.logo} alt=""/>
                                <h1 className={Styles.logotext}>BSE-Store</h1>
                            </Link>
                        </div>
                    </div>
                    <div className={Styles.ForUlTag}>
                        <ul>
                            <Link href="/"><li>Home</li></Link>
                            <Link href="/courses"><li>Courses</li></Link>
                            <Link href="/blogs"><li>Blogs</li></Link>
                            <Link href="/shopping"><li>Shopping</li></Link>
                            <Link href="/entertainment"><li>Entertainment</li></Link>
                            <Link href="/build-my-site"><li>Build my Site</li></Link>
                            <Link href="/playlist"><li>Playlist</li></Link>
                            <Link href="/music"><li>Music</li></Link>
                            <Link href="/reels"><li>Reels</li></Link>
                            <Link href="/earn"><li>Earn</li></Link>
                            <Link href="/contact"><li>Contact</li></Link>
                            <Link href="/about"><li>About</li></Link>
                        </ul>
                        <ul>
                            <Link href="/"><li>Recent Uploaded...</li></Link>
                            <Link href="/"><li>Songs...</li></Link>
                            <Link href="/"><li>Web Series...</li></Link>
                            <Link href="/"><li>TV Shows...</li></Link>
                            <Link href="/"><li>Romantic...</li></Link>
                            <Link href="/"><li>Action...</li></Link>
                            <Link href="/"><li>Comedy...</li></Link>
                            <Link href="/"><li>Crime...</li></Link>
                            <Link href="/"><li>Drama...</li></Link>
                            <Link href="/"><li>Horror...</li></Link>
                            <Link href="/"><li>Trailler...</li></Link>
                            <Link href="/"><li>Adventure...</li></Link>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className={Styles.Para}>Explore a diverse online platform offering shopping, blogging, movies, earning, and free courses. Your all-in-one destination for endless possibilities and learning</div>
                    <div className={Styles.LogInp}>
                    <input className={Styles.Input} required="" type="email" placeholder="Your Email ID"/>
                    <button className={Styles.Btn}>Get Start</button>
                </div>
                </div>
            </div>
        </div>
        <Image className={Styles.BGImage} src="/Footer.webp" width={2000} height={2000} alt=""/>
        </>
    )
}