import {MainLayout} from "../components/layout/main-layout";
import {AuthLayout} from "../components/layout/auth-layout";
import {HomePage} from "../pages/home-page";

const routes = [
    {
        path: "/",
        Component: HomePage,
        Layout: MainLayout,
        secured: false,
        showFooter:true
    },
];

export default routes;
