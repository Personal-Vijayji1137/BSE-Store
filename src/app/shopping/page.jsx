import HomeBanner from "./Components/HomeBanner/homebanner";
import KidsBanner from "./Components/KidsBanner/kids";
import StartExploring from "./Components/StartExploring/startexploring";
import StepsToGetProduct from "./Components/StepsToGetProduct/stpes";
import NewArrival from "./Components/NewArrival/newarrival";
export const metadata = {
    title: 'BSE - Shopping ...',
    description: '...',
  }
export default function Shopping(){
    return(
        <>
        <HomeBanner/>
        <StartExploring/>
        <NewArrival/>
        <KidsBanner/>
        {/* <StepsToGetProduct/> */}
        </>
    )
}