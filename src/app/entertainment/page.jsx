'use server'
import DirectLink from "../ads/DirectLink"
import HomeBanner from "./Components/HomeBanner/homebanner"
import Scroller from "./Components/Scoroller/scroller"
export default async function Entertainment(){
  return (
    <>
    <div>
        <HomeBanner/>
        <Scroller/>
    </div>
    <DirectLink/>
    </>
  )
}
