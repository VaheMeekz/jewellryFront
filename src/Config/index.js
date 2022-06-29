import {lazy} from "react";

const routesMain = [
    {
        title: "Home",
        path: "/",
        component: lazy(() => import('../Components/Home/index')),
        exact: true
    },
    {
        title: "About",
        path: "/about",
        component: lazy(() => import('../Components/About/index')),
        exact: true
    },
    {
        title: "Products",
        path: "/products",
        component: lazy(() => import('../Components/Products/index')),
        exact: true
    },
    {
        title: "Video Rend",
        path: "/videoRend",
        component: lazy(() => import('../Components/Portfolio/index')),
        exact: true
    },
    {
        title: "Portfolio",
        path: "/portfolio",
        component: lazy(() => import('../Components/Rend/Rend')),
        exact: true
    },
    {
        title: "Contact",
        path: "/contact",
        component: lazy(() => import('../Components/Contact/index')),
        exact: true
    },
    {
        title: "Detail",
        path: "/products/:id",
        component: lazy(() => import('../Components/Detail/index'))
    }
];

export default routesMain;