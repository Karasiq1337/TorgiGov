import {Modal} from "react-bootstrap";
import React from "react";
import {useAppDispatch, useAppSelector} from "../../AppHooks";
import {regSuccessHide} from "./AuthReducer";

export function AuthModal(){
    const show = useAppSelector((state) => state.reducer.auth.showAuthModal)
    const modalText = useAppSelector((state) => state.reducer.auth.authModalText)
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