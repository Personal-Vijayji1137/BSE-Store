import BlogMainBanner from "./Components/BlogMainBanner.jsx/BlogMainBanner"
import InfiniteScroll from "./Components/Infinitescroll/infinitescroll"
import RecentPost from "./Components/Recentpost/RecentPost"
export default function Blogs(){
    return(
        <>
        <BlogMainBanner/>
        <InfiniteScroll/>
        <RecentPost/>
        </>
    )
}