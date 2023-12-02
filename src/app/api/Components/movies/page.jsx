'use client'
import Styles from "./moviespage.module.css"
import copy from "copy-to-clipboard"
import Image from "next/image"
export default function MoviesAPI(){
    return(
        <>
        <div className={Styles.MoviesAPITitle}>Get Home Banner Data</div>
        <div className={Styles.MoviesAPIMethod}><span>POST</span><div className={Styles.MoviesAPIMethodDiv}>{process.env.NEXT_PUBLIC_API_BASE_URL}</div><div className={Styles.Path}>movies/banner</div><code className={Styles.Codetocopy} onClick={()=>{copy(`${process.env.NEXT_PUBLIC_API_BASE_URL}movies/banner`)}}>Copy</code></div>
        <div className={Styles.Response}>Response</div>
        <Image src="/API/BannerResponse.svg" className={Styles.ResponseImage} width={10000} height={10000}/>
        <div className={Styles.HR}></div>
        <div className={Styles.MoviesAPITitle}>Get Search Data</div>
        <div className={Styles.MoviesAPIMethod}><span>POST</span><div className={Styles.MoviesAPIMethodDiv}>{process.env.NEXT_PUBLIC_API_BASE_URL}</div><div className={Styles.Path}>movies/search?query=a</div><code className={Styles.Codetocopy} onClick={()=>{copy(`${process.env.NEXT_PUBLIC_API_BASE_URL}movies/search?query=a`)}}>Copy</code></div>
        <div className={Styles.Response}>Parameters</div>
        <div className={Styles.TableHeading}><div><div>Name</div><div>Description</div></div><div><div>Required</div><div>Type</div></div></div>
        <div className={Styles.TableHeadingTable}><div><div>query</div><div>Search By Title || Ex :- Gader</div></div><div><div>YES</div><div>String</div></div></div>
        <div className={Styles.TableHeadingTable}><div><div>page</div><div>Page Number || Ex :- 3</div></div><div><div>NO</div><div>Number</div></div></div>
        <div className={Styles.TableHeadingTable}><div><div>limit</div><div>No.of Results Per Page || Ex :- 30</div></div><div><div>NO</div><div>Number</div></div></div>
        <div className={Styles.Response}>Response</div>
        <Image src="/API/SearchResultsImage.svg" className={Styles.ResponseImage} width={10000} height={10000}/>
        <div className={Styles.HR}></div>
        <div className={Styles.MoviesAPITitle}>Get By ID</div>
        <div className={Styles.MoviesAPIMethod}><span>POST</span><div className={Styles.MoviesAPIMethodDiv}>{process.env.NEXT_PUBLIC_API_BASE_URL}</div><div className={Styles.Path}>movies/10001206</div><code className={Styles.Codetocopy} onClick={()=>{copy(`${process.env.NEXT_PUBLIC_API_BASE_URL}movies/10001206`)}}>Copy</code></div>
        <div className={Styles.Response}>Response</div>
        <Image src="/API/SearchByID.svg" className={Styles.ResponseImage} width={10000} height={10000}/>
        <div className={Styles.HR}></div>
        <div className={Styles.MoviesAPITitle}>Get List</div>
        <div className={Styles.MoviesAPIMethod}><span>POST</span><div className={Styles.MoviesAPIMethodDiv}>{process.env.NEXT_PUBLIC_API_BASE_URL}</div><div className={Styles.Path}>movies/list</div><code className={Styles.Codetocopy} onClick={()=>{copy(`${process.env.NEXT_PUBLIC_API_BASE_URL}movies/list`)}}>Copy</code></div>
        <div className={Styles.Response}>Parameters</div>
        <div className={Styles.TableHeading}><div><div>Name</div><div>Description</div></div><div><div>Required</div><div>Type</div></div></div>
        <div className={Styles.TableHeadingTable}><div><div>page</div><div>Page Number || Ex :- 3</div></div><div><div>NO</div><div>Number</div></div></div>
        <div className={Styles.TableHeadingTable}><div><div>limit</div><div>No.of Results Per Page || Ex :- 30</div></div><div><div>NO</div><div>Number</div></div></div>
        <div className={Styles.TableHeadingTable}><div><div>category</div><div>Give Category  || Ex :- Movies</div></div><div><div>NO</div><div>String</div></div></div>
        <div className={Styles.TableHeadingTable}><div><div>genre</div><div>Give Genre || Ex :- Action</div></div><div><div>NO</div><div>String</div></div></div>
        <div className={Styles.TypeOfCategory}><div>Different Type of Category</div> :- <span>Movies</span>||<span>WebSeries</span>||<span>Songs</span>||<span>TV</span></div>
        <div className={Styles.TypeOfCategory}><div>Different Type of Genre</div> :- <span>Romantic</span>||<span>Action</span>||<span>Adventure</span>||<span>Comedy</span>||<span>Crime</span>||<span>Drama</span>||<span>Horror</span>||<span>Thriller</span></div>
        <div className={Styles.Response}>Response</div>
        <Image src="/API/ListOfData.svg" className={Styles.ResponseImage} width={10000} height={10000}/>
        <div className={Styles.HR}></div>
        </>
    )
}