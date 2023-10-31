import Styles from "./recent.module.css"
import Link from "next/link"
import Image from "next/image"
export default function Recent(){
    return(
        <>
        <div className={Styles.Recent}>
            <div>
                <div>Recent Post ...</div>
                <Link href="/">View All &#x2794;</Link>
            </div>
            <div>
                {Array.from({ length: 20 }, (_, index) => (
                    <div key={index} className={Styles.SinglePost}>
                        <div><Image src="https://i.ytimg.com/vi/m5wVhQYriJE/maxresdefault.jpg" width={1000} height={1000} alt=""/></div>
                        <div>
                            <div>All the money in the world can&apos;t buy you back good health</div>
                            <div>My dear, it never rains but it pours. How true the old proverbs are. Here am I, who shall be twenty in September, and yet I never had a proposal till to-day, not a real proposal, and to-day I have had three. Just fancy! THREE proposals in one day! Isn&apos;t it awful! I feel sorry, really and truly sorry, for two of the poor fellows.</div>
                            <div>
                                <div>
                                    <div>May 2, 2022&nbsp;&nbsp;&nbsp;|| &nbsp;&nbsp;&nbsp;</div>
                                    <div>3 min read</div>
                                </div>
                                <Link href="/">Read More &#x2794;</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}