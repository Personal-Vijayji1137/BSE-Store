import DirectLink from "../ads/DirectLink"
import HomeBanner from "./Components/HomeBanner/homebanner"
import Scroller from "./Components/Scoroller/scroller"
export const metadata = {
  title: 'BSE - Entertainment || Watch All New Movies and Shows For Free or Download in HD',
  description: 'Unlock the ultimate entertainment experience with BSE - Entertainment, where every movie and web series is at your fingertips, completely free of charge. No more waiting for the latest releases, no more financial barriers, BSE - Entertainment is your passport to endless entertainment, available anytime, anywhere.',
  openGraph: {
    title: 'BSE - Entertainment || Watch All New Movies and Shows For Free or Download in HD',
    description: 'Unlock the ultimate entertainment experience with BSE - Entertainment, where every movie and web series is at your fingertips, completely free of charge. No more waiting for the latest releases, no more financial barriers, BSE - Entertainment is your passport to endless entertainment, available anytime, anywhere.',
    images: 'https://i.postimg.cc/FsQ1DCcG/opengraph-image.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BSE - Entertainment || Watch All New Movies and Shows For Free or Download in HD',
    description: 'Unlock the ultimate entertainment experience with BSE - Entertainment, where every movie and web series is at your fingertips, completely free of charge. No more waiting for the latest releases, no more financial barriers, BSE - Entertainment is your passport to endless entertainment, available anytime, anywhere.',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: ['https://i.postimg.cc/FsQ1DCcG/opengraph-image.png'],
  }
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
