import axios from "axios";
import {API} from "@/services/api.constant";

const authService = {
    login: function (data) {
        return axios.post(API.baseUrl+API.auth.login, data);
    },
    logout: function () {
        return axios.post(API.auth.logout);
    },
};
export default authService;
