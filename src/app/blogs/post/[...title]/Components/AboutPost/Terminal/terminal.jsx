'use client'
import Styles from "./terminal.module.css"
import copy from "copy-to-clipboard"
export default function Terminal({Text}){
    return(
        <>
        <div className={Styles.Terminal}>
        <div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div onClick={()=>{copy(Text)}}>Copy &#x2750;</div>
        </div>
        <pre>
            <code>{Text}
            </code>
        </pre>
        </div>
        </>
    )
}