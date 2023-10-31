import Styles from "./recent.module.css"
import Link from "next/link"
export default function Recent(){
    return(
        <>
        <div className={Styles.Recent}>
            <div>
                <div>Recent Post ...</div>
                <Link href="/">View All &#x2794;</Link>
            </div>
            <div></div>
        </div>
        </>
    )
}