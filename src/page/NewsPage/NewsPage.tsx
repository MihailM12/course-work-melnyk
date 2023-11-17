import React, {useEffect, useState} from 'react';
import {News} from '../../model/types';
import $api from "../../http";
import Title from "../../component/Title/Title";
import css from "./NewsPage.module.css"
import {CircleLoader} from "react-spinners";
import NewsCard from "../../component/NewsCard/NewsCard";
import LoadingSpinner from "../../component/LoadingSpinner/LoadingSpinner";

const NewsPage = () => {

    const [news, setNews] = useState<News[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const getNews = () => {
        $api.get("/news").then(res => {
            setNews(res.data)
        }).then(() => {
            setTimeout(()=>{
                setIsLoading(false)

            }, 1000)
        }).catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        getNews()
    }, []);

    return (
        <div>
            <Title title={"Новини"}/>
            <div className={css.newsContainer}>
                {isLoading ? <LoadingSpinner/> :
                    news.map(item => (
                        <NewsCard news={item}/>
                    ))
                }
            </div>
        </div>
    );
};

export default NewsPage;