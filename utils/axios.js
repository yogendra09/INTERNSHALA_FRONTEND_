import axios from "axios";

const instance = axios.create({
    baseURL:"https://internshala-frontend-qsvz.vercel.app/",
    withCredentials:true,

});


export default instance;