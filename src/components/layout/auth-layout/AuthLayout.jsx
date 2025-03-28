import { useEffect } from 'react';
import { useUser } from "../../../core/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Footer from "../../footer/Footer";

const AuthLayout = ({ children, showFooter }) => {
    const { user } = useUser();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (user && (location.pathname.includes('/login') || location.pathname.includes('/register'))) {
            navigate('/');
        }
    }, [user]);

    return (
        <Box>
            {children}
            {showFooter && <Footer />}
        </Box>
    );
};

export default AuthLayout;
