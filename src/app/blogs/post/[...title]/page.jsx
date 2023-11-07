'use server'
import Styles from "./post.module.css"
import AboutPost from "./Components/AboutPost/aboutpost"
import AboutBlog from "../../Components/Recentpost/Aboutblog/aboutblog"
import GetBlogPostData from '@/app/Server/Bolgs/GetBlogData'
export default async function Page({ params }){
    const Respose = await GetBlogPostData(params.title[0]);
    const Data = Respose.data.data.listBSEBlogs.items[0];
    return (
        <>
            <div className={Styles.RecentPost}>
                <div><AboutPost Data={Data}/></div>
                <div><AboutBlog/></div>
            </div>
        </>
    )
}