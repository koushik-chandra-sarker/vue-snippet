import localStorageService from "@/services/utils/localStorageService";
import axios from "axios";
import {API} from "@/services/api.constant";
import toast from "@/services/utils/toast.service";
import store from "@/store";
import {MUTATION_UPDATE_ACCESS_TOKEN} from "@/store/auth.module";



let accessToken = localStorageService.getAccessToken();
let refreshToken = localStorageService.getRefreshToken();

const baseUrl = API.baseUrl
const axiosInstance = axios.create({
    baseUrl,
    headers: {Authorization: `Bearer ${accessToken}`}
})

axiosInstance.interceptors.request.use(async function (request) {
    console.log("interceptors")
    if (!accessToken) {
        accessToken = localStorageService.getAccessToken();
        request.headers.Authorization = `Bearer ${accessToken}`
    }
    // decode access token and check token is expired
    // console.log("isExpired: " + isExpired)
    if (!localStorageService.isAccessTokenExpired()) return request;

    // if access token is expired, get new access token by refresh token
    console.log("Token refreshing... ")
    if (localStorageService.isRefreshTokenExpired()) {
        localStorageService.removeAuthInfo()
        toast.error("Session Expired. Please Login to continue." , { timeout: 2000 })
        setTimeout(()=>{
            location.reload();
        },2000)
        return request;
    }
    let newAccessTokenResponse = await axios.post(baseUrl + API.auth.refreshToken, {
        "refresh": refreshToken
    })
    // set new access token in header
    request.headers.Authorization = `Bearer ${newAccessTokenResponse.data.access}`
    store.commit(MUTATION_UPDATE_ACCESS_TOKEN, newAccessTokenResponse.data.access)
    return request;

}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default axiosInstance;