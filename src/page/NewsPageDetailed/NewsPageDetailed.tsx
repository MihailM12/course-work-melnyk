import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {News} from "../../model/types";
import $api from "../../http";
import LoadingSpinner from "../../component/LoadingSpinner/LoadingSpinner";
import Title from "../../component/Title/Title";
import {Carousel} from "react-bootstrap";
import css from "./NewsPageDetailed.module.css";
import {formatDate} from "../../component/NewsCard/fotmatDate";

const NewsPageDetailed = () => {

    const {id} = useParams()
    const [news, setNews] = useState<News>({} as News)
    const [isLoading, setIsLoading] = useState(true)
    const getNews = () => {
        $api.get<News>(`news/${id}`).then(res => {
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
        <div className={css.container}>
            {isLoading ? <LoadingSpinner/> :
                <div>
                    <div className={css.topContainer}>
                        <div>{formatDate(news.date)}</div>
                        <div>id:{news.id}</div>
                    </div>
                    <Title title={news.title}/>
                    <Carousel className={css.carousel}>
                        {isLoading ? <LoadingSpinner/> : news.images.map((item,index) => (
                            <Carousel.Item key={`${item}_${index}`}>
                                <div className={css.imageContainer}>
                                    <img src={item} alt=""/>
                                </div>
                            </Carousel.Item>
                        ))}

                    </Carousel>
                    <div className={css.contentContainer}>
                        {news.content}
                    </div>
                </div>
            }
        </div>
    );
};

export default NewsPageDetailed;