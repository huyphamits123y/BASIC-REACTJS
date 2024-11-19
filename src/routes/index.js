import HomePage from "../pages/HomePage/HomePage";
import ReducerPage from "../pages/ReducerPage/ReducerPage";
import SeCondPage from "../pages/SeCondPage/SeCondPage";
import UseContextPage from "../pages/UseConTextPage/UseConTextPage";
import UserPage from "../pages/UserPage/UserPage";

export const routes = [
    {
        path: '/',
        page: HomePage,


    },
    {
        path: '/second',
        page: SeCondPage,


    },
    {
        path: '/user',
        page: UserPage,


    },
    {
        path: '/reducer',
        page: ReducerPage,


    },
    {
        path: '/usecontext',
        page: UseContextPage,


    },
]