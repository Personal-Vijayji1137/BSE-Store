import Styles from "./homemain.module.css"
import Image from "next/image"
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
                <Image className={Styles.BannerImage} src="/HomeBanner.png" width={1000} height={1000}/>
            </div>
           </main>
           <div className={Styles.BottomBanner}>
               <img src="/BottomBanner.svg"/>
           </div>
        </>
    )
}