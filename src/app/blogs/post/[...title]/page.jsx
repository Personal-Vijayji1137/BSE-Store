'use server'
import Styles from "./post.module.css"
import AboutPost from "./Components/AboutPost/aboutpost"
import AboutBlog from "../../Components/Recentpost/Aboutblog/aboutblog"
import FetchPost from "./fetchpost"
export default async function Page({ params }){
    const Data = await FetchPost(params.title[0]);
    return (
        <>
            <div className={Styles.RecentPost}>
                <div><AboutPost Data={Data}/></div>
                <div><AboutBlog/></div>
            </div>
        </>
    )
}