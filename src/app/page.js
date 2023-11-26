import HomeMain from './Components/HomeMain/homemain'
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
export async function generateStaticParams() {
  return (
    <>
    <HomeMain/>
    </>
  )
}
