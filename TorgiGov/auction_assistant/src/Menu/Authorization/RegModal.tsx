import React, {useEffect, useState} from "react";
import {FormCheck, FormControl, FormGroup, FormLabel, FormText, Modal, ModalBody, ModalTitle} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const  RegModal = () => {
    const [show, setShow] = useState(false);
    
    useEffect(() => {
        setShow(true);
    }, []);
    const handleclose = () => setShow(false);
    
    
    return (
        <Modal show={show} onHide={handleclose}>
            <Modal.Header closeButton>
                <ModalTitle>Регистрация</ModalTitle>
            </Modal.Header>
            <ModalBody>
                <Form>
                    <FormGroup controlId={'FromBasicLogin'}>
                        <FormLabel>Логин</FormLabel>
                        <FormControl type={'login'} placeholder={"Придумайте логин"}/>
                    </FormGroup>
                    <FormGroup controlId={'FromBasicPassword'} className={'mb-3 mt-2'}>
                        <FormLabel>Пароль</FormLabel>
                        <FormControl type={'Password'} placeholder={"Придумайте пароль"}/>
                    </FormGroup>
                    <FormGroup controlId={'FromBasicPassword'} className={'mb-3'}>
                        <FormControl type={'Password'} placeholder={"Повторите пароль"}/>
                    </FormGroup>
                    <FormGroup controlId={'FromBasicButton'}>
                        <Button className={'bg-primary'}>Зарегистрироваться</Button>
                    </FormGroup>
                </Form>
            </ModalBody>
        </Modal>
    )
}
  
  export default RegModal;
  