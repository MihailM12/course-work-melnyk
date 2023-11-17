import React, {FC, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import css from "./Dialog.module.css"

interface DialogProps {
    show: boolean;
    handleClose: () => any;
    submit: (any: any) => any;
}

export const Dialog: FC<DialogProps> = ({show, handleClose, submit}) => {

    return (
        <>
            <Modal className={css.modal} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрити
                    </Button>
                    <Button variant="primary" onClick={submit}>
                        Підтвердити
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
