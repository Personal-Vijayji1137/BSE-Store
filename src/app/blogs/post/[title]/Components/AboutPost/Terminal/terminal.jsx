import Styles from "./terminal.module.css"
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
            <div>Copy &#x2750;</div>
        </div>
        <pre>
            <code>{Text}
            </code>
        </pre>
        </div>
        </>
    )
}