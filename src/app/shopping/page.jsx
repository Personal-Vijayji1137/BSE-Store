import HomeBanner from "./Components/HomeBanner/homebanner";
import KidsBanner from "./Components/KidsBanner/kids";
import StepsToGetProduct from "./Components/StepsToGetProduct/stpes";
export const metadata = {
    title: 'BSE - Shopping ...',
    description: '...',
  }
export default function Shopping(){
    return(
        <>
        <HomeBanner/>
        <KidsBanner/>
        {/* <StepsToGetProduct/> */}
        </>
    )
}