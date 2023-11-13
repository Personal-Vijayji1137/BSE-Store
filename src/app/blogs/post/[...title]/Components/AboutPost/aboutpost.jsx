import Styles from './aboutpost.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Terminal from './Terminal/terminal'
export default function AboutPost({Data}){
    const TagOne = Object.keys(Data.Tags[0])[0];
    const TagTwo = Object.keys(Data.Tags[1])[0];
    return(
        <>
        <div className={Styles.AboutPost}>
            <Image src={Data.Image} width={1000} height={1000} alt=''/>
        </div>
        <div className={Styles.Tags}>
                <div><Link href={Data.Tags[0][TagOne]}><span></span><span>{TagOne}</span></Link></div>
                <div><Link href={Data.Tags[1][TagTwo]}><span></span><span>{TagTwo}</span></Link></div>
        </div>
        <div className={Styles.Heading}>
            <h1>{Data.Title}</h1>
        </div>
        <div className={Styles.Author}>{Data.WrittenBy}&nbsp;&nbsp;&nbsp;|| &nbsp;&nbsp;&nbsp;{Data.Date}&nbsp;&nbsp;&nbsp;|| &nbsp;&nbsp;&nbsp; {Data.ReadingTime}</div>
        <p className={Styles.Paragraph}>{Data.Description}</p>
        {(Data.ParagrapHTML).map((item,index)=>{
            const keys = Object.keys(item)[0];
            if(keys == "Paragraph"){
                return <p className={Styles.Paragraph} key={index}>{item[keys]}</p>
            }else if(keys == "Subtitle"){
                return <div className={Styles.SubHeading} key={index}><h2>{item[keys]}</h2></div>
            }else if(keys == "Button"){return <div className={Styles.Link} key={index}><Link href={item[keys][0].Link}>{item[keys][0].Text}</Link></div>
            }else if(keys == "Code"){return <Terminal Text={item[keys]} key={index}/>
            }else if(keys == "Video"){return <div className={Styles.Iframe} key={index}><iframe src={item[keys][0].Link} allowFullScreen/></div>
            }
        })}
        </>
    )
}