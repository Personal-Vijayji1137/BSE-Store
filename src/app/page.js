import HomeMain from './Components/HomeMain/homemain'
export const metadata = {
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
  }
}
export async function getStaticPaths() {
  return {props: {}}
}
export default function Home({ }) {
  return (
    <>
    <HomeMain/>
    </>
  )
}
