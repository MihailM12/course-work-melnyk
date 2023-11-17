import React, {FC, useState} from 'react';
import {CarouselItem, News} from "../../model/types";
import $api from "../../http";
import {Button, Modal} from "react-bootstrap";
import css from "../CreateNewsModal/CreateNewsModal.module.css";

interface ModalProps {
    show: boolean;
    handleClose: () => void;
}

const CreateSliderModal: FC<ModalProps> = ({show, handleClose}) => {

    const [slide, setSlide] = useState({} as CarouselItem)


    const createCarouselItem = (e: any) => {
        e.preventDefault()
        $api.post("/carousel", slide).then(res => {
            console.log(res)
            console.log(slide)
            handleClose()
            window.location.reload()
        }).catch(e => {
            console.log(e)
        })
    }

    return (
        <Modal className={css.modal} show={show} onHide={handleClose}>
            <form onSubmit={createCarouselItem}>
                <Modal.Header closeButton>
                    <Modal.Title className={css.modal}>Створення слайду</Modal.Title>
                </Modal.Header>
                <Modal.Body className={css.modal}>
                    <div>
                        <div className={css.field}>
                            <span className={css.fieldTitle}>Опис</span>
                            <input className={css.fieldVlaue} required onChange={(e) => {
                                setSlide({...slide, description: e.target.value})
                            }} type="text"/>
                        </div>

                        <div className={css.field}>
                            <span className={css.fieldTitle}>Зображення</span>
                            <input className={css.fieldVlaue} required onChange={(e) => {
                                setSlide({...slide, image: e.target.value})
                            }} type="text"/>
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


export default CreateSliderModal;