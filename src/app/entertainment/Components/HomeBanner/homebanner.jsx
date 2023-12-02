'use server'
import { createClient } from "@supabase/supabase-js"
import Styles from "./homebanner.module.css"
import Image from "next/image"
import Link from "next/link"
export default async function HomeBanner(){
    const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {auth: { persistSession: false }});
    const GET = await supabase.from(process.env.NEXT_PUBLIC_SUPABASE_MOVIES_BANNER_NAME).select('*').eq('id', 1);
    console.log(GET)
    const Banner = GET.data[0];
    return(
        <>
            <div className={Styles.TextDiv} style={{ backgroundImage: `url(${Banner.Big_Image})` }}>
                <Link href="/entertainment/search/recent" className={Styles.searchbtn}><Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC9klEQVR4nO2au2tVQRCHN4mkiwYrn1XEKpoiRqxCFDS2ghZqowiptEljYxWLdEIgIEKsbNMFAhIICooiUav4KAJBO21MUDBR7yfDWeEacnf3njvnnkf2+wP2NztndmZ29hgTiUQikUgkEskOYD9wDBgEjgMHgQ5TVYCjwB1gEVhje34Az4C74hRTBYDzwBPSsQRcBDpN2QCOAI/R4QUwYMoCcBlYR5efwE1TdIDbQI3smC7skSBJcu3gvilo2Nea3Mgv4CuwmcIJ46ZgCW89wGhx0DxwAzhUH8q2L7gCzAK/A9YSpw2ZIkBYtn8JnApcrx9YCFjzDdCV/Q79dd7HDNDd5LqdwGTAsbpm8gR46jHwYYvrT3jW/5hbC03S3vrCvrtFjQ5gzqMzrLcrvbJXCz3zATp9wIZDa1pDJ41hiw6j5pW1JI804oOmVjCOW51wXVlrFDe7NfW82Lrt4rBRRHKJp2Ea1NTzYocZrg5PvT4Dnxya57T1nAAnHcZ8MRkAvHZoXshCsyF2jNWIzSxubMCqQ/O0tp4T28u72GcUAXZ5SmF7ByYkDcp3h0FXlfVGHFp/gF5NvSCA5w6jZpW1phxay5pawdjpbSPkStuvpHPAE20PNHTSGDaAmwWNZAg88uiM6OwonXFLHuMmW1z/lmf9lVwfVEjm9nguRRNpjJQpsG2qXIxls7PmBhcyt/chV9q+Js68L+yFd1IeTd6Q5AKZ2/vYsLe60a1zAmmdbamb8iS8rSOx9pc/R7g2g3SLn20OWfU0OS5eFckJ98gHiYS9ee/f2HwgLzd5UKhIGE/52FEpJwzZ0NRAsv3bMjqhS+b2dnSdBmlyxuxNsNdurlxOqLs5Dtv88N7TNC1Lb29L4n/NU6mdUA/QA5wAzgKXgDO2l/AaXBkntAKwxz66lKdEahOdYFIdhx6zw50wY6oI4TlhrbD/F7UxEtr7hFYwJ6yYqoPbCaoPtoXFNloyePn278vvmM1v04JX98xHIpFIJBIx2vwFyuC9DcG7PH8AAAAASUVORK5CYII=" width={100} height={100}/></Link>
                <div>
                    <div>
                        <div>
                        <div className={Styles.Small_Image}><Image src={Banner.Small_Image} priority={false} alt='banner' width={400} height={400}/></div>
                        <div className={Styles.AboutBanner}>
                            <h1>{Banner.Name}</h1>
                            <div>
                                <span>{Banner.Year}</span>
                                <span> | </span>
                                <span>{Banner.UA}</span>
                                <span> | </span>
                                <span>{Banner.Duration}</span>
                                <span> | </span>
                                <span>{Banner.Geans} </span>
                                <Link href={`/entertainment/player/${Banner.Link}/${Banner.Name.split(" ").join("-")}`}>Watch</Link>
                            </div>
                            <div className={Styles.Paragraph}>
                                <div>{Banner.Paragraph}</div>
                                <div className='pt-4'>
                                    <span className='info-item'>Starring: </span>
                                    <span className='text-sm'>{Banner.Cast}</span>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}