import axios from "axios";

export default axios.create({
    baseURL:"https://api.unsplash.com/",
    headers:{
        Authorization: "Client-ID S-7JYOo60tnyvzbStfRZs9Xgz84wLosCGc0FReZApcw"
    }
});