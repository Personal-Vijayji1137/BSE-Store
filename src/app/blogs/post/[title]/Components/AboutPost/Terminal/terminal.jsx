import Styles from "./terminal.module.css"
export default function Terminal(){
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
            <code>{`import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';
export default function Terminal(){
    return(
        <>
        <pre>
            <code>
            </code>
        </pre>
        </>
    )
}`}
            </code>
        </pre>
        </div>
        </>
    )
}