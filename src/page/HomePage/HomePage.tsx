import React, {useEffect, useState} from 'react';
import {Carousel} from "react-bootstrap";
import Title from "../../component/Title/Title";
import $api from "../../http";
import {CarouselItem} from "../../model/types";
import css from "./HomePage.module.css"

const HomePage = () => {

    const [carouselItems, setCarouselItems] = useState<CarouselItem[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const getCarrouselItems = () => {
        $api.get<CarouselItem[]>("/carousel").then(res => {
            setCarouselItems(res.data)
        }).then(() => {
            setIsLoading(false)
        }).catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        getCarrouselItems()
    }, []);

    return (
        <div>
            <Title title={"Вітаємо на порталі кафедрі радіозвязку!"}/>
            <Carousel className={css.carousel}>
                {isLoading ? <div>Loading...</div> : carouselItems.map(item => (
                    <Carousel.Item key={`${item.image}_${item.id}`}>
                        <div className={css.imageContainer}>
                            <img src={item.image} alt=""/>
                        </div>
                        <Carousel.Caption>
                            <h3>{item.description}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}

            </Carousel>
            <Title title={"Кафедра зв'язку Військового інституту"}/>
            <div className={css.descriptionBlock}>
                <p>Ласкаво просимо на сторінку кафедри зв'язку Військового інституту! Наша кафедра відіграє важливу роль
                    у
                    підготовці кваліфікованих фахівців у сфері зв'язку та телекомунікацій для потреб Збройних Сил.</p>

                <p>Місія кафедри полягає в забезпеченні студентів глибокими знаннями з теорії та практики сучасних
                    технологій
                    зв'язку, а також розвитку їх лідерських та комунікативних навичок. Наші викладачі - це
                    висококваліфіковані
                    фахівці, які активно застосовують свої знання для навчання та виховання майбутніх офіцерів Збройних
                    Сил.</p>

                <p>На кафедрі здійснюється науково-дослідницька робота в області розвитку технологій зв'язку, що
                    дозволяє
                    студентам брати участь у сучасних проектах та отримувати актуальні знання, які будуть корисні в
                    подальшій
                    службі.</p>

                <p>Нехай наша кафедра стане для вас місцем, де ви зможете отримати не лише високоякісну освіту, але й
                    розвинути
                    свій потенціал для успішної служби в Збройних Силах!</p>
            </div>

        </div>
    );
};

export default HomePage;