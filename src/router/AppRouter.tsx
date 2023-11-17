import React from 'react';
import {Route, Routes} from "react-router-dom";
import {RouterNames} from "./RouterNames";
import HomePage from "../page/HomePage/HomePage";
import NewsPage from "../page/NewsPage/NewsPage";
import NewsPageDetailed from "../page/NewsPageDetailed/NewsPageDetailed";
import ManagePage from "../page/ManagePage/ManagePage";
import AboutUsPage from "../page/AboutUsPage/AboutUsPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={RouterNames.HOME} element={<HomePage/>}/>
            <Route path={RouterNames.NEWS} element={<NewsPage/>}/>
            <Route path={RouterNames.NEWS + "/:id"} element={<NewsPageDetailed/>}/>
            <Route path={RouterNames.MANAGE} element={<ManagePage/>}/>
            <Route path={RouterNames.ABOUT} element={<AboutUsPage/>}/>
            <Route path={"*"} element={<HomePage/>}/>
        </Routes>
    );
};

export default AppRouter;