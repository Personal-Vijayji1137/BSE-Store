import Link from 'next/link'
import Image from 'next/image'
import "./Components/not-found.css"
const NotFound = ({})=>{
  return (
    <>
    <div className="Not">
        <div>
            <div>This page has been abducted [404]</div>
            <p>Choose your path below. The truth is out there…</p>
            <Link href="/">Home Page</Link>
        </div>
        <div>
            <Image src="https://i.postimg.cc/K8PSDFQb/ufo-2x.png" width={500} height={500} alt=''/>
        </div>
    </div>
    </>
  )
}
export const getStaticProps =  async()=>{
    return{
        props: {},
    }
}
export default NotFound;