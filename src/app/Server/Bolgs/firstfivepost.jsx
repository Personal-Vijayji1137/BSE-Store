import axios from "axios";
const API_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_BOLGS_API_URI;
const API_KEY = process.env.NEXT_PUBLIC_GRAPHQL_BLOGS_API_KEY;
const headers = {'Content-Type': 'application/json','x-api-key': API_KEY,};
export default async function GetFirstFivePostData(){
    return await axios({method: 'post',url: API_ENDPOINT,data: JSON.stringify({query: `{listBSEBlogs (filter: {ID: {le: 10}}){items {ID Image Title Date ReadingTime}}}`,}),headers: headers,});
}