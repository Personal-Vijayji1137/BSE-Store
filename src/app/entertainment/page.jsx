'use server'
import GetMoviesList from "../Server/Movies/GetMoviesList" 
export default async function Entertainment(){
  const Data = await GetMoviesList;
  console.log(Data.data.data.listBSEMovies);
  return (
    <>
    <div></div>
    </>
  )
}
