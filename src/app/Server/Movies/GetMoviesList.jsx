import axios from "axios";
const API_ENDPOINT = 'https://icfg6k4n6vfsrf5gkel3b7tamu.appsync-api.eu-north-1.amazonaws.com/graphql';
const API_KEY = 'da2-wpoijjksnjeubfwghsh6p5ddbe';
const graphqlQuery = `
  {
    listBSEMovies {
        items {
          FileID
          Geans
          ID
          Image
          MainCategory
          Plateform
          Title
        }
      }
  }
`;
const headers = {
  'Content-Type': 'application/json',
  'x-api-key': API_KEY,
};
const GetMoviesList = axios({
  method: 'post',
  url: API_ENDPOINT,
  data: JSON.stringify({
    query: graphqlQuery,
  }),
  headers: headers,
})
  .then((response) => {
    const responseData = response.data.data.listBSEMovies.items;
    return responseData;
  })
  .catch((error) => {
    return error
  });
export default GetMoviesList;