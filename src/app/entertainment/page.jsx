'use server'
import GetMoviesList from "../Server/Movies/GetMoviesList" 
export default async function Entertainment(){
  const Data = await GetMoviesList;
  return (
    <>
    <div></div>
    </>
  )
}
