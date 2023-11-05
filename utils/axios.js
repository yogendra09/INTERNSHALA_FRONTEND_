import axios from "axios";

const instance = axios.create({
    baseURL:"https://internshala-backend-mmjo7nct4-yogendra09s-projects.vercel.app",
    withCredentials:true,

});


export default instance;