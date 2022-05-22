// sidebar menu
export const sidebarMenu = [
    {
        name: 'Post',
        path: '/dashboard/post',
        icon: '',
        active: false,
        permitted: false,
        child: [
            {
                name: 'Post-1',
                path: '/dashboard/post-1',
                icon: '',
                active: false,
                permitted: false,
                child: [
                    {
                        name: 'Post-1.1',
                        path: '/dashboard/post-1.1',
                        icon: '',
                        active: false,
                        permitted: false,
                        child: []
                    },
                    {
                        name: 'Post-1.2',
                        path: '/dashboard/post',
                        icon: '',
                        active: false,
                        permitted: false,
                        child: []
                    },
                ]
            },
            {
                name: 'Post-2',
                path: '/dashboard/post-2',
                icon: '',
                active: false,
                permitted: false,
                child: []
            },
        ]
    },
    {
        name: 'Like',
        path: '/dashboard/like',
        icon: '',
        active: false,
        permitted: false,
        child: [
            {
                name: 'Like-1',
                path: '/dashboard/like-1',
                icon: '',
                active: false,
                permitted: false,
                child: []
            },
        ]
    },
    {
        name: 'Comment',
        path: '/dashboard/comment',
        icon: '',
        active: false,
        permitted: false,
        child: []
    }

]
