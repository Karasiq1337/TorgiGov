import React, {useEffect, useState} from "react";
import { FormControl, FormGroup, FormLabel, Modal, ModalBody, ModalTitle} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useAppDispatch} from "../../AppHooks";
import {hideReg, regSuccess} from "./AuthReducer";
import {checkLogin, reg} from "../../Api/Users";


const RegModal = () => {
    const dispatch = useAppDispatch();
    const [show, setShow] = useState(false);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [showWrong, setShowWrong] = useState(false);
    const [wrongModalText, setWrongModalText] = useState('');
    
    useEffect(() => {
        setShow(true);
    }, []);
    const handleClose = () => dispatch(hideReg());

    async function trySignIn() : Promise<boolean | any>{
        if(password.length < 8){
            setWrongModalText("Пароль не может быть меньше 8 символов");
            setShowWrong(true);
            return;
        }
        if(password !== repeatPassword){
            setWrongModalText("Пароли не совпадают");
            setShowWrong(true);
            return;
        }
        if (await checkLogin(login)){
            setWrongModalText("Логин занят")
            setShowWrong(true);
            return;
        }
        const regIsOk = await reg(login, password);
        if (!regIsOk){
            setWrongModalText("Не удалось зарегестрироваться")
            setShowWrong(true);
            return; 
        }
        dispatch(regSuccess());
        setShow(false);
    }

    const wrongRegParamModal = (text : string) => {
        return <Modal show={showWrong} onHide={() => setShowWrong(false)}>
            <ModalBody>
                <Form>
                    <Form.Label expand={"lg"} className={" bg-body-tertiary"}>
                        {text}
                    </Form.Label>
                </Form>
            </ModalBody>
        </Modal>
    }
    
    return (
        <>
            {showWrong && wrongRegParamModal(wrongModalText)}
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <ModalTitle>Регистрация</ModalTitle>
            </Modal.Header>
            <ModalBody>
                <Form>
                    <FormGroup controlId={'FromBasicLogin'}>
                        <FormLabel>Логин</FormLabel>
                        <FormControl type={'login'} placeholder={"Придумайте логин"}
                                     onChange={(e) => setLogin(e.target.value)}/>
                    </FormGroup>
                    <FormGroup controlId={'FromBasicPassword'} className={'mb-3 mt-2'}>
                        <FormLabel>Пароль</FormLabel>
                        <FormControl type={'Password'} placeholder={"Придумайте пароль"}
                                     onChange={(e) => setPassword(e.target.value)}/>
                    </FormGroup>
                    <FormGroup controlId={'FromBasicPassword'} className={'mb-3'}>
                        <FormControl type={'Password'} placeholder={"Повторите пароль"}
                                     onChange={(e) => setRepeatPassword(e.target.value)}/>
                    </FormGroup>
                    <FormGroup controlId={'FromBasicButton'}>
                        <Button className={'bg-primary'} onClick={() => trySignIn()}>Зарегистрироваться</Button>
                    </FormGroup>
                </Form>
            </ModalBody>
        </Modal>
        </>
    )
}

export default RegModal;
  