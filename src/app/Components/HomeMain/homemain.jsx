'use server'
import { createClient } from "@supabase/supabase-js"
import Styles from "./homemain.module.css"
import Image from "next/image"
import Link from "next/link"
import JoinWithUS from "./joinwithus"
import HomeTV from "./hovetv"
import HomeShop from "./homeshop"
import OurTeam from "./ourteam"
export default async function HomeMain(){
    const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {auth: { persistSession: false }});
    const GET = await supabase.from("BSE-Blogs").select('ID,Image,Title,Description').order('ID', { ascending: false }).range(0,2);
    const Data = GET.data;
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
           <p className={Styles.Paragra}>Explore a diverse online platform offering shopping, blogging, movies, earning, and free courses. Your all-in-one destination for endless possibilities and learning</p>
           <div className={Styles.BottomBanner}>
               <Image src="/BottomBanner.svg" width={1000} height={1000} alt=""/>
           </div>
           <div className={Styles.AboutBSE}>
            <div>
                <div>
                    <div>
                        <Image src="/B-Red.png" width={200} height={200} alt=""/>
                        <Image src="/BB-Red.svg" width={200} height={200} alt=""/>
                    </div>
                </div>
                <div>
                    <div>(B) Blogging</div>
                    <p>Our blog is a treasure trove of insightful articles, tutorials, and tips on programming, development, and technology</p>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <Image src="/G-Green.png" width={200} height={200} alt=""/>
                        <Image src="/GG-Green.svg" width={200} height={200} alt=""/>
                    </div>
                </div>
                <div>
                    <div>(S) Shopping</div>
                    <p>Explore an exquisite collection of the latest fashion, electronics, home decor, and more.Shop smarter, shop with us.</p>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <Image src="/Y-Yellow.png" width={200} height={200} alt=""/>
                        <Image src="/YY-Yellow.svg" width={200} height={200} alt=""/>
                    </div>
                </div>
                <div>
                    <div>(E) Entertainment</div>
                    <p>Dive into a world of limitless entertainment with our platform, and experience the joy of streaming without subscription fees</p>
                </div>
            </div>
           </div>        
           <div className={Styles.OurBlog}>
                <div>Our Blogs</div>
                <Link href="/blogs" className={Styles.Btn}>All Articles</Link>
            </div>
           <div className={Styles.OurBlogs}>
            {Data.map((item)=>{
                return <div key={item.ID}>
                <div>
                    <Image src={item.Image} width={300} height={300} alt=""/>
                </div>
                <div>{item.Title}</div>
                <p>{item.Description}</p>
                <Link href={`/blogs/post/${item.ID}/${item.Title.split(" ").join("-")}`} className={Styles.ReadMoreBtn}>Read More &#x2794;</Link>
            </div>
            })}
           </div>
           <JoinWithUS/>
           <HomeTV/>
           <HomeShop/>
           <OurTeam/>
        </>
    )
}