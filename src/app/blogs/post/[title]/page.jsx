import Styles from "./post.module.css"
import AboutPost from "./Components/AboutPost/aboutpost"
import AboutBlog from "../../Components/Recentpost/Aboutblog/aboutblog"
export default function Page({ params }){
    return (
        <>
            {/* <div>My Post: {params.title}</div> */}
            <div className={Styles.RecentPost}>
                <div><AboutPost/></div>
                <div><AboutBlog/></div>
            </div>
        </>
    )
}