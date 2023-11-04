import Styles from "./recentpost.module.css"
import Recent from "./Recent/recent"
import AboutBlog from "./Aboutblog/aboutblog"
export default function RecentPost(){
    return(
        <>
        <div className={Styles.RecentPost}>
            <div><Recent/></div>
            <div><AboutBlog/></div>
        </div>
        </>
    )
}