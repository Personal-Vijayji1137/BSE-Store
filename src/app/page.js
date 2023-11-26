import HomeMain from './Components/HomeMain/homemain'
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
