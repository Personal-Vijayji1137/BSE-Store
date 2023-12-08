import Image from "next/image"
import Link from "next/link"
import styles from "./homenav.module.css"
export default function HomeNav(){
    return(
        <>
            <nav className={styles.homenav}>
                <div className={styles.nav}>
                    <div className={styles.divlog}>
                        <Link href="/" className={styles.divlog}>
                            <Image src="/logo.webp" width={40} height={40} className={styles.logo} alt=""/>
                            <h1 className={styles.logotext}>BSE-Store</h1>
                        </Link>
                    </div>
                    <div className={styles.navmenu}>
                        <div className={styles.menu}>
                        <div><Link href="/courses" className={styles.LinkText}>Courses</Link></div>
                        <div><Link href="/blogs" className={styles.LinkText}>Blogs</Link></div>
                        <div><Link href="/shopping" className={styles.LinkText}>Shopping</Link></div>
                        <div><Link href="/entertainment" className={styles.LinkText}>Entertainment</Link></div>
                        <div><Link href="/build-my-site" className={styles.LinkText}>Build my Site</Link></div>
                        <div><Link href="/playlist" className={styles.LinkText}>Playlist</Link></div>
                        <div><Link href="/music" className={styles.LinkText}>Music</Link></div>
                        <div><Link href="/reels" className={styles.LinkText}>Reels</Link></div>
                        <div><Link href="#" className={styles.LinkText}>More&nbsp;<span className={styles.arrow}>&#x276F;</span></Link>
                        <ul className={styles.navitem}>
                            <div><Link href="/courses" className={styles.LinkText}>Courses</Link></div>
                            <div><Link href="/blogs" className={styles.LinkText}>Blogs</Link></div>
                            <div><Link href="/shopping" className={styles.LinkText}>Shopping</Link></div>
                            <div><Link href="/entertainment" className={styles.LinkText}>Entertainment</Link></div>
                            <div><Link href="/build-my-site" className={styles.LinkText}>Build my Site</Link></div>
                            <div><Link href="/playlist" className={styles.LinkText}>Playlist</Link></div>
                            <div><Link href="/music" className={styles.LinkText}>Music</Link></div>
                            <div><Link href="/reels" className={styles.LinkText}>Reels</Link></div>
                            <div><Link href="/earn" className={styles.LinkText}>Earn</Link></div>
                            <div><Link href="https://www.youtube.com/" className={styles.LinkText}>Youtube</Link></div>
                            <div><Link href="https://github.com/jitenderji1137" className={styles.LinkText}>Github</Link></div>
                            <div><Link href="https://www.linkedin.com/in/jitender1137/" className={styles.LinkText}>Linkedin</Link></div>
                            <div><Link href="https://www.instagram.com/vijayji1137/" className={styles.LinkText}>Instagram</Link></div>
                            <div><Link href="/api" className={styles.LinkText}>API</Link></div>
                            <div><Link href="/contact" className={styles.LinkText}>Contact</Link></div>
                            <div><Link href="/about" className={styles.LinkText}>About</Link></div>
                        </ul>
                        </div>
                        <button className={styles.signinbtn}>Login</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}