import React from "react";
import {FormControl, FormGroup, FormLabel, Modal, ModalBody, ModalTitle} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const CompareModal = () => {
   
    
    return (
        <Modal>
            <Modal.Header closeButton>
                <ModalTitle>Результат сравнения</ModalTitle>
            </Modal.Header>
            <ModalBody>
                <Form>
                    <FormGroup >
                        <FormLabel className={'text-center'}>Итоговая оценка лотов:</FormLabel>
                    </FormGroup>
                    <FormGroup className={'mb-3 mt-2'}>
                        <li>Оценка 1 лота: 3</li>
                        <li>Оценка 2 лота: 1</li>
                    </FormGroup>
                    <FormGroup >
                        <FormLabel className={'text-center'}>Оптимальный вариант найден !</FormLabel>
                        <Button>Посмотреть</Button>
                    </FormGroup>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default CompareModal();