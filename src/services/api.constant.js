export const API = {
    baseUrl: "http://127.0.0.1:8000",
    auth: {
        login: "/author/login/",
        logout: "/author/logout",
        refreshToken: "/author/token/refresh/"
    },
    blog:{
        getList:"/blog/posts/",
        getOne:"/blog/post/"
    }
}