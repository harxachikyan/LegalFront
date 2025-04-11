import {MainLayout} from "../components/layout/main-layout";
import {AuthLayout} from "../components/layout/auth-layout";
import {HomePage} from "../pages/home-page";
import {ConnectPage} from "../pages/connect-page";
import {ServicesPage} from "../pages/services-page"
import {DocumentsPage} from "../pages/document-page"
import {AboutPage} from "../pages/about-page";
import {WorksPage} from "../pages/works-page";

const routes = [
    {
        path: "/",
        Component: HomePage,
        Layout: MainLayout,
        secured: false,
        showFooter:true
    },
    {
        path: "/contact",
        Component: ConnectPage,
        Layout: MainLayout,
        secured: false,
        showFooter:true
    },
    {
        path: "/services",
        Component:ServicesPage,
        Layout: MainLayout,
        secured: false,
        showFooter:true
    },
    {
        path: "/documents",
        Component:DocumentsPage,
        Layout: MainLayout,
        secured: false,
        showFooter:true
    },
    {
        path: "/about",
        Component:AboutPage,
        Layout: MainLayout,
        secured: false,
        showFooter:true
    },
    {
        path: "/works",
        Component:WorksPage,
        Layout: MainLayout,
        secured: false,
        showFooter:true
    },
];

export default routes;
