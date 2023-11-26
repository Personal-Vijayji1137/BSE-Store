import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './Components/footer'
import HomeNav from './Components/HomeNav/honenav'
import Image from 'next/image'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  metadataBase: new URL('https://bsestore.vercel.app/'),
  title: 'BSE - Store',
  description: 'Explore a diverse online platform offering shopping, blogging, movies, earning, and free courses. Your all-in-one destination for endless possibilities and learning',
  openGraph: {
    title: 'BSE - Store',
    description: 'Explore a diverse online platform offering shopping, blogging, movies, earning, and free courses. Your all-in-one destination for endless possibilities and learning',
    images: 'https://i.postimg.cc/Z5nL2cdZ/Screenshot-97.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BSE - Store',
    description: 'Explore a diverse online platform offering shopping, blogging, movies, earning, and free courses. Your all-in-one destination for endless possibilities and learning',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: ['https://i.postimg.cc/Z5nL2cdZ/Screenshot-97.png'],
  },
  generator: 'Next.js',
  applicationName: 'BSE - Store',
  referrer: 'origin-when-cross-origin',
  keywords: ['Netflix Mirror', 'Free-Netflix-Mirror', 'free-Netflix Mirror','watch movies for free','BSE - Store','bsestore'],
  authors: [{ name: 'jitenderji1137' }, { name: 'vijayji1137', url: 'https://www.instagram.com/vijayji1137/' }],
  creator: 'jitenderji1137',
  publisher: 'jitenderji1137',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HomeNav/>
        {children}
        <Footer/>
        <div className="Tab">
          <Link href="/">
            <div>
              <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1klEQVR4nO3ZPWtUQRjF8QlGUAzYKOgHMAG1tDJWWquNmm9gn8rW0tbSRju186VVhCRY+AKCFtHOQgVtfKtU9CeXzJK76ybem0w2c9n5w7LLznOfe56dM4ddNoTCGIGDuI971evQRXACH6zyCadCl8A8fsUBHsWH+N58yB1M4XYU/QdXsRM7cBm/49pd7A05gmm8ikK/4dyQmtP4HGve4GjICZzFlyhwGYfXqT2El7H2O+ZGq3YImMSVaKOKm9jT4LpduF4LgmuVBcN2gP14WDvElzbQ4yJ+xB5LI4/ogWh9h+Ob6HUMb2sRfTKt2vU/xZ/xxgs4kKDnPjyo7y4m0ihuGK0J+w9G9J3kET0kWs8nvcHaEf0aR1I1PtM0WlPh34i+MPJoTQV248amIjpFtKZCf0QvNo5ozOJ9vLB6nt1yte0i+uN/I3pg+oWcfkNYcUlfRK8Vrbf0Mxkyw8q5rVNpnqoXPI0LX3sVIVOs0tP6pLcwged4gZkODTITNT8b+i2gK4OEZIXbhDJIZig7Mm47gsfas5TjIBsi20HCFtX3KIM0pexIS5Qz0pBirZYo1mpIsVZLFGs1pFirJYq1GlKs1RJja63cCQ0Gqf4mzp3FtjvZGf4Cpf0zKih224cAAAAASUVORK5CYII=" width={50} height={50} alt=""/>
              <div>Home</div>
            </div>
          </Link>
          <Link href="/courses">
            <div>
              <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADgUlEQVR4nO2ZW4hNYRTHjzMug5FrGIXjknIZxXigmEFyTTQYtwfKiwfzgMKLyAPKpTAab5Qnah6EyKVolEspI/PgfilyG/LgNi4/Lf6xbXvMfOfsfTJj/+vrzPzXOd9a/73Xt/b3rZ1IxIgRI0azBtAJ6JFoqgDGAZf5hQfAMo99AbA24tExUxGTgDrgIFAMFAIbgQ/Aen1nDnA6onFBFy+ViYgWwG1gX4BtkQT2zehKNRxDKgwhQzTJoHrsT4DlmQSaLSGjNUmneuzXLH8zCTRbQjorfWYH2HoCH4HpmQYbuRCDrQ/gETDMw3UFzgDXgZxEExHSDjiuq38OOAa8Am4CA0KLOGohngmnAjuAPcASoE0oE0cthB+ltxfQX6O7x9bBw7uM/KwKAWbo6e3FM1v8sp8ifVwBukQuBJgIfAI2AcN1JQcCt4ByYK7Wy9g07sgI4A6wIRtCrgK7AvgpwGfgKbDFadLfN53VwNZsCKmr79kAVKoUt/c5cYGlbO9sCDGM19+bgQKPrQ8wM8DJYm0uGxpjgLaO8aTCEDLrb+eP0Gt8hELsDrRqDkJOAkWhO8m2kIbQZITgW+yhOXGLJxUvduLF/u+mVkegdehOsiTkAVBh2xTtrZY2xom6KjZy1TrKDYlLyceqdLbwryXCRUihRtKad/oMg+sM7Aa+2BbHVUxLHZ7uOwgZ2sj9VrrjqZ1MnYR4AnURsp/osTTxXwNoY+dsy1kfn1Rf64+KBnQD8gL4PLMF8K01VzLAR35GTQ5Vje3Ae91Sy88VspXp/G54p66KtYwmADXivwInrC+stDshznDDyrt+U94IH++BbRZTOkIOqAzPs72WlT4FfUafK8Wb/SFQpe58hSqNiToP3AXuqR82XrZ9Cq7K0ccBVxHWcDCM9PGrxa/08Rac4UhAKlmT+7E/1YCjafoocBGyEHj5F4F/TAbUWjrUc8avDODL0vSx0EVIsR4+PX38fDkp9fH5yv+9AYu1Rmuihc9WkaaPIhchOcAl5ep3R8AodU+eK18LPQ7Oiq/TK7ikisVO4K3GDnFJ3fE6/cbFx0XnhrkqzSVdBbulhkPqSx3W/7Wy2zuSfsA6BfhGDbwXwGT1w16Ie6PvrNFvqhvp42Imvd8cVZpSYHDAm6xSdRt/1n9dvRJgmpVXD99OXIk3nXSHxjbgozjqVxcxYsRINA18A9MC/t8CEshCAAAAAElFTkSuQmCC" width={50} height={50} alt=''/>
              <div>Courses</div>
            </div>
          </Link>
          <Link href="/blogs">
            <div>
              <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABvklEQVR4nO2YS07DMBBAveoKDkA5CeUEtFyH77bid6iyKEKicAA4QGFP2cCGh0adSFHjtk7sxEby20WZTOZ5PIlkYzL/EOCeeDyEFImKCS0SLGGs95JF/CB3pMbKAD3grc2vEx2KvAYUmUYR6QKySHcz8pBMR/CbkWkyIl1AFllD7kjMBcSPH+AZGG7IP9IYiW2MaVmkTEUGOA6V3LgW3rCb8kk+1xQzy/0XvXcmsQ3fYSWoiL5oV1MsLPcWem/HI7+VykCtXjfoyOWGjshsCBe+HTGr101FtOg74MOyQL/AkeWZoX09eQduXOS2ilRatT3hreUx+RI92SRWZGZrvlrXriKVej1EZBWFg22xDrkGRWdMU5F1gTVEBh4ORa5DzTV3iHWqr46I7OnQXMUQ6alM0Rkf5iJBg2H3D4wEWSQxyB1RgMfyoUHX18E6IknLhwZdXxfkrZUahBr2WLPRhkiU2SjIM5IatPFD1P0cirAH2zVFZD+HIuzBdumkY88kBrCvtX26BE80+MQkBsvzMGHiEixHmsI3cAr0O6lyc019lSgOLEauD45Jl3HdVRjpNvuKXTnLGibOnciY+PwBtDLa20vI82gAAAAASUVORK5CYII=" width={50} height={50} alt=''/>
              <div>Blogs</div>
            </div>
          </Link>
          <Link href="/entertainment">
            <div>
              <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABGUlEQVR4nO2WsRHCMAxF1cEEwBYU7MMatExCQcEQFNAwCQvQ0HKPyncUOOcgKacQvVIXK/+d7MQiSZL0gpEgkxORxroXaHOkSNSJ1LAO7JYDbYNoItJY9wJtjhSJOpEa1oHdcqBtEE1EGuteoM2haQCcgDOw6R/dLoeFSOEFHIBV1/NeOdR788vjT2APzLvWWefwECncgW3XWjcRaaz3eTlwBdZ9ROSHHEOIlPNzBJZjFyk8gB0wcxWpYShSuFnn+E8RaayH31rif9gXXjmGELkM/vmtMbofYo3RXVGksR7+0ihTvsZbgpXIz3vTCKzOyN+ISGPdC7Q5UiTqRGpYB3bLgbZBNBFprHuBNkeKRJ1IdGQyIkmSyCdvX59LEtCCxQIAAAAASUVORK5CYII=" width={50} height={50} alt=''/>
              <div>Movies</div>
            </div>
          </Link>
          <Link href="#Footer">
            <div>
              <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVR4nO3PsREAIAgEsN9/aSy9s6EGkw2SAABXDZVXbYkAAECrhsraCAAAtGqorI0AwM8OwfxL7Rbt49gAAAAASUVORK5CYII=" width={50} height={50} alt=''/>
              <div>More</div>
            </div>
          </Link>
        </div>
      </body>
    </html>
  )
}
