import axios from "axios";
const API_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_MOVIES_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_GRAPHQL_MOVIES_API_KEY;
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
    return response;
  })
  .catch((error) => {
    return error
  });
export default GetMoviesList;