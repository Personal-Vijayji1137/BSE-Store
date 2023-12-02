'use client'
import Styles from "./moviespage.module.css"
export default function MoviesAPI(){
    return(
        <>
        <div className={Styles.MoviesAPITitle}>Get Home Banner Data</div>
        <div className={Styles.MoviesAPIMethod}><span>POST</span><div className={Styles.MoviesAPIMethodDiv}>{process.env.NEXT_PUBLIC_API_BASE_URL}</div><div className={Styles.Path}>movies/banner</div></div>
        </>
    )
}