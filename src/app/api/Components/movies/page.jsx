'use client'
import Styles from "./moviespage.module.css"
import copy from "copy-to-clipboard"
export default function MoviesAPI(){
    return(
        <>
        <div className={Styles.MoviesAPITitle}>Get Home Banner Data</div>
        <div className={Styles.MoviesAPIMethod}><span>POST</span><div className={Styles.MoviesAPIMethodDiv}>{process.env.NEXT_PUBLIC_API_BASE_URL}</div><div className={Styles.Path}>movies/banner</div><code className={Styles.Codetocopy} onClick={()=>{copy(`${process.env.NEXT_PUBLIC_API_BASE_URL}movies/banner`)}}>Copy</code></div>
        </>
    )
}