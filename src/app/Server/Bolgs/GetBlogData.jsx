import axios from "axios";
const API_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_BOLGS_API_URI;
const API_KEY = process.env.NEXT_PUBLIC_GRAPHQL_BLOGS_API_KEY;
const graphqlQuery = `{
    listBSEBlogs(filter: {ID: {eq: 1}}) {
        items {
          Date
          Description
          ID
          Image
          ParagrapHTML
          ReadingTime
          Tags
          Title
          WrittenBy
        }
    }
}`;
const headers = {
  'Content-Type': 'application/json',
  'x-api-key': API_KEY,
};
const GetBlogPostData = axios({
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
export default GetBlogPostData;