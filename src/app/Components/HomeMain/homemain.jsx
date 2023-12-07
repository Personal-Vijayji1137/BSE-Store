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
                <div className={Styles.DivOne} data-aos="fade-right">
                    <h1 data-aos="fade-right"><span>Web Versatility</span><span>Hub</span></h1>
                    <p data-aos="fade-right">Explore a diverse online platform offering shopping, blogging, movies, earning, and free courses. Your all-in-one destination for endless possibilities and learning</p>
                    <div className={Styles.LogInp} data-aos="fade-right">
                        <input className={Styles.Input} required="" type="email" placeholder="Your Email ID"/>
                        <button className={Styles.Btn}>Get Start</button>
                    </div>
                </div>
                <div className={Styles.DivTwo} data-aos="fade-left">
                    <Image className={Styles.BannerImage} src="/HomeBanner.png" width={1000} height={1000} alt=""/>
                </div>
           </main>
           <p className={Styles.Paragra} data-aos="fade-up" data-aos-duration="2000">Explore a diverse online platform offering shopping, blogging, movies, earning, and free courses. Your all-in-one destination for endless possibilities and learning</p>
           <div className={Styles.BottomBanner} data-aos="flip-left">
               <Image src="/BottomBanner.svg" width={1000} height={1000} alt=""/>
           </div>
           <div className={Styles.AboutBSE}>
            <div data-aos="fade-right">
                <div data-aos="fade-right">
                    <div data-aos="fade-right">
                        <Image data-aos="fade-right" src="/B-Red.png" width={500} height={500} alt=""/>
                        <Image data-aos="fade-right" src="/BB-Red.svg" width={500} height={500} alt=""/>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div data-aos="fade-right">(B) Blogging</div>
                    <p data-aos="fade-right">Our blog is a treasure trove of insightful articles, tutorials, and tips on programming, development, and technology</p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000">
                <div data-aos="fade-up" data-aos-duration="2000">
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <Image data-aos="fade-up" data-aos-duration="2000" src="/G-Green.png" width={500} height={500} alt=""/>
                        <Image data-aos="fade-up" data-aos-duration="2000" src="/GG-Green.svg" width={500} height={500} alt=""/>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="2000">
                    <div data-aos="fade-up" data-aos-duration="2000">(S) Shopping</div>
                    <p data-aos="fade-up" data-aos-duration="2000">Explore an exquisite collection of the latest fashion, electronics, home decor, and more.Shop smarter, shop with us.</p>
                </div>
            </div>
            <div data-aos="fade-left">
                <div data-aos="fade-left">
                    <div data-aos="fade-left">
                        <Image data-aos="fade-left" src="/Y-Yellow.png" width={500} height={500} alt=""/>
                        <Image data-aos="fade-left" src="/YY-Yellow.svg" width={500} height={500} alt=""/>
                    </div>
                </div>
                <div data-aos="fade-left">
                    <div data-aos="fade-left">(E) Entertainment</div>
                    <p data-aos="fade-left">Dive into a world of limitless entertainment with our platform, and experience the joy of streaming without subscription fees</p>
                </div>
            </div>
           </div>        
           <div className={Styles.OurBlog}  data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                <div>Our Blogs</div>
                <Link href="/blogs" className={Styles.Btn}>All Articles</Link>
            </div>
           <div className={Styles.OurBlogs}>
                <div data-aos="fade-up" data-aos-duration="2000">
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <Image src="https://i.ytimg.com/vi/qXeT4KARlkU/maxresdefault.jpg" width={500} height={500} alt=""/>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000">This is heading to one line and it can be more...</div>
                    <p data-aos="fade-up" data-aos-duration="2000">Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
                    <button data-aos="fade-up" data-aos-duration="2000" className={Styles.ReadMoreBtn}>Read More &#x2794;</button>
                </div>
                <div data-aos="fade-up" data-aos-duration="2000">
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <Image data-aos="fade-up" data-aos-duration="2000" src="https://i.ytimg.com/vi/qXeT4KARlkU/maxresdefault.jpg" width={500} height={500} alt=""/>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000">This is heading to one line and it can be more...</div>
                    <p data-aos="fade-up" data-aos-duration="2000">Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
                    <button data-aos="fade-up" data-aos-duration="2000" className={Styles.ReadMoreBtn}>Read More &#x2794;</button>
                </div>
                <div data-aos="fade-up" data-aos-duration="2000">
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <Image data-aos="fade-up" data-aos-duration="2000" src="https://i.ytimg.com/vi/qXeT4KARlkU/maxresdefault.jpg" width={500} height={500} alt=""/>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000">This is heading to one line and it can be more...</div>
                    <p data-aos="fade-up" data-aos-duration="2000">Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
                    <button data-aos="fade-up" data-aos-duration="2000" className={Styles.ReadMoreBtn}>Read More &#x2794;</button>
                </div>
           </div>
           <JoinWithUS/>
           <HomeTV/>
           <HomeShop/>
           <OurTeam/>
        </>
    )
}