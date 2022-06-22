import React, {Component, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import Layout from "../Layout";
import routesMain from "./index";
import Loading from "./Loading";

const RouteBuilder = () => {
    return (
        <div>
            <Suspense fallback={<Loading/>}>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        {
                            routesMain.map(({
                                                component: Component,
                                                path,
                                                exact
                                            }) => {
                                    return (
                                        <Route key={path} exact={!!exact} key={path.toString()} path={`${path}`} element={<Component/>}/>
                                    )
                                }
                            )
                        }
                    </Route>
                </Routes>
            </Suspense>
        </div>
    );
};

export default RouteBuilder;