import React, {FC} from 'react';
import {News} from "../../model/types";
import css from "./NewsCar.module.css"
import {formatDate} from "./fotmatDate";
import {Link} from "react-router-dom";
import {RouterNames} from "../../router/RouterNames";

interface NewsProps {
    news: News
    size?: string;
}

const NewsCard: FC<NewsProps> = ({news, size}) => {
    return (
        <Link to={RouterNames.NEWS + `/${news.id}`} className={`${css.card} ${size && css[size]}`}>
            <div className={css.date}>
                {formatDate(news.date)}
            </div>
            <img className={css.img} src={news.images[0]} alt=""/>
            <div className={css.title}>
                {news.title}
            </div>
        </Link>
    );
};

export default NewsCard;