import axios from "axios";
const API_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_BOLGS_API_URI;
const API_KEY = process.env.NEXT_PUBLIC_GRAPHQL_BLOGS_API_KEY;
const headers = {'Content-Type': 'application/json','x-api-key': API_KEY,};
export default async function GetBlogBannerData(ID){
    return await axios({method: 'post',url: API_ENDPOINT,data: JSON.stringify({query: `{listBSEBlogs(filter: {ID: {eq: ${ID}}}) {items {Date Description ID Image ReadingTime Tags Title}}}`,}),headers: headers,});
}