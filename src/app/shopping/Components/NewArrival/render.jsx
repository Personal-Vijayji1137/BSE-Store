'use client'
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Styles from "./newarrival.module.css"
export default function Render({Data,Text,link}){
    const containerRef = useRef(null);
    const handelScrollLeft = ()=>{
        if(containerRef.current){
          const container = containerRef.current;
          container.scrollLeft -= window.innerWidth*0.8;
        }
       }
       const handelScrollRight = ()=>{
        if(containerRef.current){
          const container = containerRef.current;
          container.scrollLeft += window.innerWidth*0.8;
        }
    }   
    return (
        <div>
            <div className={Styles.customContainer}>
                <span>{Text}</span>
                <Link href={link}>View All &#x276F;&#x276F;</Link>
            </div>
            <div ref={containerRef} className={Styles.Conainer}>
            <button className={Styles.ScrollLeft} onClick={handelScrollLeft}>&nbsp;&nbsp; &#x276E;&#x276E; &nbsp;&nbsp;&nbsp;&nbsp;</button>
                {Data.data.map((item) => (
                    <div key={item.ID} className={Styles.OneImage}>
                        <Link href={item.Link} target="_blank"><div className={Styles.OneImageLink}><Image className={Styles.Images} src={item.Image} alt={`Image ${item.ID}`} title={item.Title} width={300} height={300} /></div></Link>
                        <div className={Styles.OneImageTitle}>{item.Title}</div>
                        <div className={Styles.OneImagePrice}>
                            <div>&#8377;&#8377; {item.Price.toLocaleString('en-IN')}.00</div>
                            <Link href={item.Link} target="_blank">Buy Now &#x2794;</Link>
                        </div>
                    </div>
                ))}
            <button className={Styles.ScrollRight} onClick={handelScrollRight}>&nbsp;&nbsp;&nbsp;&nbsp; &#x276F;&#x276F; &nbsp;&nbsp;</button>
            </div>
        </div>
    )
}