import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from "../pages/configs";

function PageRoutes() {
    return (
        <Router>
            <Routes>
                {routes.map(({ Component, Layout, path, secured, showFooter }, index) => (
                    <Route
                        key={index}
                        path={path}
                        element={
                            <Layout showFooter={showFooter}>
                                <Component />
                            </Layout>
                        }
                    />
                ))}
            </Routes>
        </Router>
    );
}

export default PageRoutes;
