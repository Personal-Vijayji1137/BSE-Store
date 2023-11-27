'use client'
import Styles from "./Components/mainpage.module.css"
import { useEffect,useState } from "react"
import MoviesAPI from "./Components/movies/page";
export default function API(){
    const [page,pagevalue] = useState('Movies');
    return(
        <>
        <div className={Styles.DifferentPages}>
            <div onClick={()=>{pagevalue("Blogs")}} style={{color:page === "Blogs"?"#00ffc6":"white"}}>Blogs</div>
            <div onClick={()=>{pagevalue("Courses")}} style={{color:page === "Courses"?"#00ffc6":"white"}}>Courses</div>
            <div onClick={()=>{pagevalue("Movies")}} style={{color:page === "Movies"?"#00ffc6":"white"}}>Movies</div>
            <div onClick={()=>{pagevalue("Shopping")}} style={{color:page === "Shopping"?"#00ffc6":"white"}}>Shopping</div>
            <div onClick={()=>{pagevalue("Playlist")}} style={{color:page === "Playlist"?"#00ffc6":"white"}}>Playlist</div>
        </div>
        <div className={Styles.Welcome}>Welcome to BSE-API</div>
        <div className={Styles.BaseURL}>BaseURL = <span>{document.URL}/v1/</span></div>
        {page == "Blogs"?<>
        <div>This is blogs api page</div>
        </>:<></>}
        {page == "Courses"?<>
        <div>This is Courses api page</div>
        </>:<></>}
        {page == "Movies"?<MoviesAPI/>:<></>}
        {page == "Shopping"?<>
        <div>This is Shopping api page</div>
        </>:<></>}
        {page == "Playlist"?<>
        <div>This is Playlist api page</div>
        </>:<></>}
        </>
    )
}