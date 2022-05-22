import HomePage from "@/view/pages/HomePage";
import LoginPage from "@/view/pages/LoginPage";
import {createRouter, createWebHistory} from "vue-router";
import localStorageService from "@/services/utils/localStorageService";
import PostDetailsPage from "@/view/pages/PostDetailsPage";

const DashboardPage = () => import ( "@/view/pages/Dashboard/DashboardPage");
import Post from "@/view/pages/Dashboard/Post";
import Like from "@/view/pages/Dashboard/Like";
import Comment from "@/view/pages/Dashboard/Comment";
import Post1 from "@/view/pages/Dashboard/Post-1";
import Post11 from "@/view/pages/Dashboard/Post-1.1";
import Post2 from "@/view/pages/Dashboard/Post-2";
import Like1 from "@/view/pages/Dashboard/Like-1";

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
        children: [
            {
                name: "Post",
                path: '/dashboard/post',
                component: Post,
                meta: {
                    authenticationRequired: true
                },
            },
            {
                name: "Post-1",
                path: '/dashboard/post-1',
                component: Post1,
                meta: {
                    authenticationRequired: true
                }
            },{
                name: "Post-1.1",
                path: '/dashboard/post-1.1',
                component: Post11,
                meta: {
                    authenticationRequired: true
                }
            },
            {
                name: "Post-2",
                path: '/dashboard/post-2',
                component: Post2,
                meta: {
                    authenticationRequired: true
                }
            },
            {
                name: "Like",
                path: '/dashboard/like',
                component: Like,
                meta: {
                    authenticationRequired: true
                }
            },
            {
                name: "Like-1",
                path: '/dashboard/like-1',
                component: Like1,
                meta: {
                    authenticationRequired: true
                }
            },
            {
                name: "Comment",
                path: '/dashboard/comment',
                component: Comment,
                meta: {
                    authenticationRequired: true
                }
            },
        ],
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