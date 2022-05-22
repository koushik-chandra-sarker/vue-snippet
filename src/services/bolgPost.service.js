import {API} from "@/services/api.constant";
import axios from "axios";
import toast from "@/services/utils/toast.service";
import axiosInstance from "@/services/utils/axiosInstance";

const blogPostService = {
    getList:  function () {
       return axiosInstance.get(API.baseUrl+API.blog.getList).then(response=>{
           return response.data
        }).catch((errorResponse) => toast.error(errorResponse));
    },
    getOne: function (id){
        return axios.get(API.baseUrl+API.blog.getOne+id).then(response=>{
            return response.data
        }).catch((errorResponse) => toast.error(errorResponse));
    }
};
export default blogPostService;
