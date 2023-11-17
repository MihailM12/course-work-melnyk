import React, {useEffect, useState} from 'react';
import Title from "../../component/Title/Title";
import css from "./ManagePage.module.css"
import {CarouselItem, News} from "../../model/types";
import $api from "../../http";
import LoadingSpinner from "../../component/LoadingSpinner/LoadingSpinner";
import NewsCard from "../../component/NewsCard/NewsCard";
import {Dialog} from "../../component/Dialog/Dialog";
import CreateNewsModal from "../../component/CreateNewsModal/CreateNewsModal";
import CreateSliderModal from "../../component/CreateSliderModal/CreateSliderModal";

const ManagePage = () => {

    const [news, setNews] = useState<News[]>([])
    const [isLoadingNews, setIsLoadingNews] = useState(true)

    const [carouselItems, setCarouselItems] = useState<CarouselItem[]>([])
    const [isLoadingCarousel, setIsLoadingCarousel] = useState(true)

    const [delNewsId, setDelNewsId] = useState(-1)
    const [delSliderId, setDelSliderId] = useState(-1)

    const getCarrouselItems = () => {
        $api.get<CarouselItem[]>("/carousel").then(res => {
            setCarouselItems(res.data)
        }).then(() => {
            setIsLoadingCarousel(false)
        }).catch(e => {
            console.log(e)
        })
    }
    const getNews = () => {
        $api.get("/news").then(res => {
            setNews(res.data)
        }).then(() => {
            setTimeout(() => {
                setIsLoadingNews(false)

            }, 1000)
        }).catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        getNews()
        getCarrouselItems()
    }, []);

    const delNews = () => {
        $api.delete(`/news/${delNewsId}`).then(res => {
            console.log(res)
            window.location.reload()
        }).catch(e => {
            console.log(e)
        })
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (id: number) => {
        setDelNewsId(id)
        setShow(true)
    };


    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = (id: number) => {
        setDelSliderId(id)
        setShow2(true)
    };

    const delSlider = () => {
        $api.delete(`/carousel/${delSliderId}`).then(res => {
            console.log(res)
            window.location.reload()
        }).catch(e => {
            console.log(e)
        })
    }

    const [showCreateNews, setShowCreateNews] = useState(false);

    const handleCloseCreateNews = () => setShowCreateNews(false);
    const handleShowCreateNews = () => {
        setShowCreateNews(true)
    };

    const [showCreateSlider, setShowCreateSlider] = useState(false);
    const handleCloseCreateSlider = () => setShowCreateSlider(false);
    const handleShowCreateSlider = () => {
        setShowCreateSlider(true)
    };


    return (
        <div>
            <CreateNewsModal show={showCreateNews} handleClose={handleCloseCreateNews}/>
            <CreateSliderModal show={showCreateSlider} handleClose={handleCloseCreateSlider}/>

            <Dialog submit={delNews} show={show} handleClose={handleClose}/>
            <Dialog submit={delSlider} show={show2} handleClose={handleClose2}/>

            <Title title={"Сторінка Адміністрування"}/>

            <div className={css.newsContainer}>

                <Title title={"Новини"}/>
                <div className={css.addContainer}>
                    <button onClick={() => {
                        handleShowCreateNews()
                    }} className={css.addBtn}>Створити новину
                    </button>
                </div>
                <div className={css.news}>
                    {isLoadingNews ? <LoadingSpinner/> :
                        news.map(item => (
                            <div>
                                <div className={css.delCont}>
                                    <button onClick={() => handleShow(item.id)} className={css.delBtn}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-trash2-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z"/>
                                        </svg>
                                    </button>
                                </div>
                                <NewsCard size={"s"} news={item}/>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className={css.carouselContainer}>
                <Title title={"Слайдер головної сторінки"}/>
                <div className={css.addContainer}>
                    <button onClick={() => {
                        handleShowCreateSlider()
                    }} className={css.addBtn}>Створити слайд
                    </button>
                </div>
                <div className={css.news}>
                    {isLoadingCarousel ? <LoadingSpinner/> :
                        carouselItems.map(item => (
                            <div>
                                <div className={css.delCont}>
                                    <button onClick={() => handleShow2(item.id)} className={css.delBtn}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-trash2-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className={css.sliderCard}>
                                    <img className={css.sliderImg} src={item.image} alt=""/>
                                    <div className={css.sliderDescription}>{item.description}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ManagePage;