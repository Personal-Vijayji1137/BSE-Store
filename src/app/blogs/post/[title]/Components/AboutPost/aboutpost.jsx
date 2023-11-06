'use server'
import Styles from './aboutpost.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Terminal from './Terminal/terminal'
import GetBlogPostData from '@/app/Server/Bolgs/GetBlogData'
export default async function AboutPost(){
    const Respose = await GetBlogPostData;
    const Data = Respose.data.data.listBSEBlogs.items[0];
    console.log(Data);
    return(
        <>
        <div className={Styles.AboutPost}>
            <Image src={Data.Image} width={1000} height={1000} alt=''/>
        </div>
        <div className={Styles.Tags}>
                <div><Link href='/'><span></span><span>Coading</span></Link></div>
                <div><Link href='/'><span></span><span>Earning</span></Link></div>
        </div>
        <div className={Styles.Heading}>
            <h1>{Data.Title}</h1>
        </div>
        <div className={Styles.Author}>{Data.WrittenBy}&nbsp;&nbsp;&nbsp;|| &nbsp;&nbsp;&nbsp;{Data.Date}&nbsp;&nbsp;&nbsp;|| &nbsp;&nbsp;&nbsp; {Data.ReadingTime}</div>
        <p className={Styles.Paragraph}>{Data.Description}</p>
        <p className={Styles.Paragraph}>She then expatiated very warmly upon the advantages I should reap from her plan talked in a high style of my future grandeur assured me how heartily I should despise almost every body and every thing I had hitherto seen predicted my marrying into some family of the first rank in the kingdom and finally said I should spend a few months in Paris where my education and manners might receive their last polish.</p>
        <div className={Styles.SubHeading}>
            <h2>1. All the money in the world can&apos;t buy you back good health</h2>
        </div>
        <p className={Styles.Paragraph}>She then expatiated very warmly upon the advantages I should reap from her plan talked in a high style of my future grandeur assured me how heartily I should despise almost every body and every thing I had hitherto seen predicted my marrying into some family of the first rank in the kingdom and finally said I should spend a few months in Paris where my education and manners might receive their last polish.</p>
        <div className={Styles.Link}>
            <Link href='/'>Vist Site Now</Link>
        </div>
        <Terminal Text={`import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';
export default function Terminal(){
    return(
        <>
        <pre>
            <code>
            </code>
        </pre>
        </>
    )
}`}/>
        <div className={Styles.Iframe}>
            <iframe src='https://www.youtube.com/embed/RN-P2LQemV0'/>
        </div>
        </>
    )
}