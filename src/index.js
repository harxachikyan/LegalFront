import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globalStyles.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ChakraProvider} from "@chakra-ui/react";
import custhomTheme from "./styles/custhomTheme";

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ChakraProvider theme={custhomTheme}>
            <QueryClientProvider client={queryClient}>
                <App/>
            </QueryClientProvider>
        </ChakraProvider>
    </React.StrictMode>
);