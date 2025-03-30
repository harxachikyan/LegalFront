import {MainLayout} from "../components/layout/main-layout";
import {AuthLayout} from "../components/layout/auth-layout";
import {HomePage} from "../pages/home-page";
import {ConnectPage} from "../pages/connect-page";
import {ServicesPage} from "../pages/services-page"
const routes = [
    {
        path: "/",
        Component: HomePage,
        Layout: MainLayout,
        secured: false,
        showFooter:true
    },
    {
        path: "/connect",
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
];

export default routes;
