import Styles from "./homemain.module.css"
import Image from "next/image"
import Link from "next/link"
import JoinWithUS from "./joinwithus"
import HomeTV from "./hovetv"
import HomeShop from "./homeshop"
import OurTeam from "./ourteam"
export default function HomeMain(){
    return(
        <>
            <main className={Styles.Main}>
                <div className={Styles.DivOne}>
                    <h1><span>Web Versatility</span><span>Hub</span></h1>
                    <p>Explore a diverse online platform offering shopping, blogging, movies, earning, and free courses. Your all-in-one destination for endless possibilities and learning</p>
                    <div className={Styles.LogInp}>
                        <input className={Styles.Input} required="" type="email" placeholder="Your Email ID"/>
                        <button className={Styles.Btn}>Get Start</button>
                    </div>
                </div>
                <div className={Styles.DivTwo}>
                    <Image className={Styles.BannerImage} src="/HomeBanner.png" width={1000} height={1000} alt=""/>
                </div>
           </main>
           <div className={Styles.BottomBanner}>
               <Image src="/BottomBanner.svg" width={1000} height={1000} alt=""/>
           </div>
           <div className={Styles.AboutBSE}>
            <div>
                <div>
                    <div>
                        <Image src="/B-Red.png" width={500} height={500} alt=""/>
                        <Image src="/BB-Red.svg" width={500} height={500} alt=""/>
                    </div>
                </div>
                <div>
                    <div>(B) Blogging</div>
                    <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <Image src="/G-Green.png" width={500} height={500} alt=""/>
                        <Image src="/GG-Green.svg" width={500} height={500} alt=""/>
                    </div>
                </div>
                <div>
                    <div>(S) Shopping</div>
                    <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <Image src="/Y-Yellow.png" width={500} height={500} alt=""/>
                        <Image src="/YY-Yellow.svg" width={500} height={500} alt=""/>
                    </div>
                </div>
                <div>
                    <div>(E) Entertainment</div>
                    <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
                </div>
            </div>
           </div>
           
           {/* <div className={Styles.OurBlog}>
                <div>Our Blogs</div>
                <Link href="/blogs" className={Styles.Btn}>All Articles</Link>
            </div>
           <div className={Styles.OurBlogs}>
                <div>
                    <div>
                        <Image src="https://i.ytimg.com/vi/qXeT4KARlkU/maxresdefault.jpg" width={500} height={500} alt=""/>
                    </div>
                    <div>This is heading to one line and it can be more...</div>
                    <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
                    <button className={Styles.ReadMoreBtn}>Read More &#x2794;</button>
                </div>
                <div>
                    <div>
                        <Image src="https://i.ytimg.com/vi/qXeT4KARlkU/maxresdefault.jpg" width={500} height={500} alt=""/>
                    </div>
                    <div>This is heading to one line and it can be more...</div>
                    <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
                    <button className={Styles.ReadMoreBtn}>Read More &#x2794;</button>
                </div>
                <div>
                    <div>
                        <Image src="https://i.ytimg.com/vi/qXeT4KARlkU/maxresdefault.jpg" width={500} height={500} alt=""/>
                    </div>
                    <div>This is heading to one line and it can be more...</div>
                    <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
                    <button className={Styles.ReadMoreBtn}>Read More &#x2794;</button>
                </div>
           </div> */}
           {/* <JoinWithUS/>
           <HomeTV/>
           <HomeShop/>
           <OurTeam/> */}
        </>
    )
}