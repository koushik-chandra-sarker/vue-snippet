import HomePage from "@/view/pages/HomePage";
import LoginPage from "@/view/pages/LoginPage";
import {createRouter, createWebHistory} from "vue-router";
import AdminPage from "@/view/pages/AdminPage";
import localStorageService from "@/services/utils/localStorageService";
import PostDetailsPage from "@/view/pages/PostDetailsPage";

const routes = [
    {
        name:"Home",
        path:"/",
        component:HomePage,
        meta:{
            authenticationRequired:false
        }

    },
    {
        name:"Login",
        path:"/login",
        component:LoginPage
    },
    {
        name:"Admin",
        path:"/admin",
        component:AdminPage,
        meta:{
            authenticationRequired:true
        }
    },
    {
        name:"Post Details",
        path: "/posts/:id",
        component: PostDetailsPage,
        meta: {
            authenticationRequired: false
        }
    }
];

const router = createRouter({
    history : createWebHistory(),
    routes
});


//Protected Router
router.beforeEach((to, from, next) => {
    if (to.meta.authenticationRequired) {
        if (localStorageService.getAccessToken())  next()
        else return next("/login");
    } else if (to.path === '/login' && localStorageService.getAccessToken()) next("/")
    else next();
});

export default router;