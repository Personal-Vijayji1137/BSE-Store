import Styles from "./aboutblog.module.css"
import BlogSearch from "@/app/blogs/search/Input/input"
export default function AboutBlog(){
    return(
        <>
        <div className={Styles.AboutBlog}>
            <BlogSearch />
        </div>
        </>
    )
}