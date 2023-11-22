import DirectLink from "../ads/DirectLink"
import HomeBanner from "./Components/HomeBanner/homebanner"
import Scroller from "./Components/Scoroller/scroller"
export const metadata = {
  title: 'BSE - Entertainment || Watch All New Movies and Shows For Free or Download in HD',
  description: 'Unlock the ultimate entertainment experience with BSE - Entertainment, where every movie and web series is at your fingertips, completely free of charge. No more waiting for the latest releases, no more financial barriers, BSE - Entertainment is your passport to endless entertainment, available anytime, anywhere.',
}
export default function Entertainment(){
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
