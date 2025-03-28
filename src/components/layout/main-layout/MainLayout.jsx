import React, { Suspense, useState } from "react";
import { Box, Flex, IconButton, useDisclosure, useToast } from "@chakra-ui/react";
import Footer from "../../footer/Footer";
import { FaComment } from "react-icons/fa";
import { useUser } from "../../../core/hooks";
import { useLocation } from "react-router-dom";

const Nav = React.lazy(() => import("../../../components/nav/Nav"));

const MainLayout = ({ children, showFooter }) => {

    const toast = useToast();
    const { user } = useUser();
    const location = useLocation();



    return (
        <Flex direction="column" position="relative" minH="100vh">
            <Flex direction="column" flex={1} position="relative" zIndex={1}>
                <Suspense fallback={<Box textAlign="center" py={4}>Loading...</Box>}>
                    <Nav />
                </Suspense>
                {children}
            </Flex>
            {showFooter && <Footer />}
        </Flex>
    );
};

export default MainLayout;
