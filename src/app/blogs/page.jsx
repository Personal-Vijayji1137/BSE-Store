'use server'
import BlogMainBanner from "./Components/BlogMainBanner.jsx/BlogMainBanner"
import InfiniteScroll from "./Components/Infinitescroll/infinitescroll"
import RecentPost from "./Components/Recentpost/recentpost"
import GetBlogBannerData from "../Server/Bolgs/GetBlogBannerData";
export default async function Blogs(){
    const Respose = await GetBlogBannerData(2);
    const Data = Respose.data.data.listBSEBlogs.items[0];
    return(
        <>
        <BlogMainBanner Data={Data}/>
        <InfiniteScroll/>
        <RecentPost/>
        </>
    )
}