import React, {FC, useEffect, useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import css from "./CreateNewsModal.module.css"
import {News} from "../../model/types";
import $api from "../../http";

interface ModalProps {
    show: boolean;
    handleClose: () => any;
}

const CreateNewsModal: FC<ModalProps> = ({show, handleClose}) => {

    const [news, setNews] = useState({
        date: new Date(),
        images: [""]
    } as News)


    const createNews = (e: any) => {
        e.preventDefault()
        $api.post("/news", news).then(res => {
            console.log(res)
            console.log(news)
            handleClose()
            window.location.reload()
        }).catch(e => {
            console.log(e)
        })
    }

    return (
        <Modal className={css.modal} show={show} onHide={handleClose}>
            <form onSubmit={createNews}>
                <Modal.Header closeButton>
                    <Modal.Title className={css.modal}>Створення новини</Modal.Title>
                </Modal.Header>
                <Modal.Body className={css.modal}>
                    <div>
                        <div className={css.field}>
                            <span className={css.fieldTitle}>Назва</span>
                            <input className={css.fieldVlaue} required onChange={(e) => {
                                setNews({...news, title: e.target.value})
                            }} type="text"/>
                        </div>

                        <div className={css.field}>
                            <span className={css.fieldTitle}>Контент</span>
                            <textarea className={css.fieldVlaue} required onChange={(e) => {
                                setNews({...news, content: e.target.value})
                            }}/>
                        </div>

                        <div className={css.imagesContainer}>
                            <div className={css.addImagesCont}>
                                <span className={css.fieldTitle}>Зображення</span>
                                <button type={"button"} onClick={() => {
                                    setNews({...news, images: [...news.images, ""]})
                                }} className={css.addImagesBtn}>+
                                </button>
                            </div>
                            {news.images && news.images.map((item, index) => (
                                <div className={css.field}>
                                    <span className={css.fieldTitle}>{index + 1}.</span>
                                    <input className={css.fieldVlaue} required onChange={(e) => {
                                        news.images[index] = e.target.value
                                        setNews(news)
                                    }} type="text"/>
                                </div>
                            ))}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрити
                    </Button>
                    <Button type={"submit"} variant="primary">
                        Створити
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
    );
};

export default CreateNewsModal;