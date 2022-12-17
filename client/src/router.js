import {
    ADMIN_ROUTE,
    LOGIN_ROUTE, MAIN_ROUTE, PROFILE_ROUTE
} from "./utils/consts.js";

import Main from "./page/main.js";
import Auth from "./page/auth.js";
import Profile from "./page/profile.js";
import AdminPanel from "./page/adminPanel";

export const authRoutes = [

    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: ADMIN_ROUTE,
        Component: AdminPanel
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
    }
]
export const publicRoutes = [

    {
        path: LOGIN_ROUTE,

        Component: Auth
    },
    {
        path: ADMIN_ROUTE,
        Component: AdminPanel
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
    }
]