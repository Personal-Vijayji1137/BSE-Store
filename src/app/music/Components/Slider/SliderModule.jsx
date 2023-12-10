'use client'
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Styles from "./SliderModule.module.css"
export default function SliderPost({Data,Text}){
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
                <span>{Text} ...</span>
            </div>
            <div ref={containerRef} className={Styles.Conainer}>
            <button className={Styles.ScrollLeft} onClick={handelScrollLeft}>&nbsp;&nbsp; &#x276E;&#x276E; &nbsp;&nbsp;&nbsp;&nbsp;</button>
                {Data.map((item) => (
                    <div key={item.id} className={Styles.OneImage}>
                        <Link href={`/music/player/${item.id}/${item.name.split(" ").join("-")}/${item.image.split('/').join('---')}`}><Image className={Styles.Images} src={item.image} alt={`Image ${item.id}`} title={item.name} width={200} height={200} /></Link>
                    </div>
                ))}
            <button className={Styles.ScrollRight} onClick={handelScrollRight}>&nbsp;&nbsp;&nbsp;&nbsp; &#x276F;&#x276F; &nbsp;&nbsp;</button>
            </div>
        </div>
    )
}