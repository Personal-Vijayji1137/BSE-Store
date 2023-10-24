import Styles from "./ourteam.module.css"
import Image from "next/image"
import Link from "next/link"
export default function OurTeam(){
    return(
        <>
        <div className={Styles.OurTeam}>
            <div>
                <div>Meet our amazing Team</div>
                <div>"Our awesome team builds and takes care of websites for you. They make sure your website looks great and works well all the time. You can rely on them to make your online ideas come true."</div>
            </div>
            <div>
                <div>
                    <Image src="https://i.postimg.cc/449JgtSs/friendly-schoolboy-standing-with-backpack-his-back-generative-ai-58409-37768.jpg" width={300} height={300}/>
                    <div>Jitender</div>
                    <div>Director <Link href="https://www.linkedin.com/in/jitender1137/"><Image src="https://i.postimg.cc/VkTmnGqs/linkedin.png"width={50} height={50} /></Link></div>
                </div>
                <div>
                    <Image src="https://i.postimg.cc/MpK2vjdc/Cute-Anime-Girl-Profile-Picture-HD.jpg" width={300} height={300}/>
                    <div>Khushi</div>
                    <div>Manager <Link href="/"><Image src="https://i.postimg.cc/VkTmnGqs/linkedin.png"width={50} height={50} /></Link></div>
                </div>
            </div>
        </div>
        </>
    )
}