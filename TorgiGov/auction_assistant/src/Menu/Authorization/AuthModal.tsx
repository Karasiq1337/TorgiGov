import {FormControl, FormGroup, FormLabel, Modal, ModalBody, ModalTitle} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, {FC, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../AppHooks";
import {regSuccessHide} from "./AuthReducer";

export function AuthModal(){
    const show = useAppSelector((state) => state.authReducer.showAuthModal)
    const modalText = useAppSelector((state) => state.authReducer.authModalText)
    const dispatch = useAppDispatch()
    const handleClose = () => dispatch(regSuccessHide());

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>{modalText}</Modal.Body>
            </Modal>
        </>
    )
}