import HomePage from "@/view/pages/HomePage";
import LoginPage from "@/view/pages/LoginPage";
import {createRouter, createWebHistory} from "vue-router";
import localStorageService from "@/services/utils/localStorageService";
import PostDetailsPage from "@/view/pages/PostDetailsPage";

const DashboardPage = () => import ( "@/view/pages/Dashboard/DashboardPage");
const routes = [
    {
        name: "Home",
        path: "/",
        component: HomePage,
        meta: {
            authenticationRequired: true,
            showNavigation: true
        }

    },
    {
        name: "Login",
        path: "/login",
        component: LoginPage,
        meta: {
            authenticationRequired: false,
            showNavigation: false
        }
    },
    {
        name: "Dashboard",
        path: "/dashboard",
        component: DashboardPage,
        meta: {
            authenticationRequired: true,
            showNavigation: true
        },
        children: [],
    },
    {
        name: "Post Details",
        path: "/posts/:id",
        component: PostDetailsPage,
        meta: {
            authenticationRequired: false
        }
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
});


//Protected Router
router.beforeEach((to, from, next) => {
    if (to.meta.authenticationRequired) {
        if (localStorageService.getAccessToken()) next()
        else return next("/login");
    } else if (to.path === '/login' && localStorageService.getAccessToken()) next("/")
    else next();
});

export default router;