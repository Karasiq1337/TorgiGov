import "bootstrap/dist/css/bootstrap-grid.min.css"
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import {logIn, logOut, showReg} from "./AuthReducer";
import {useAppDispatch, useAppSelector} from "../../AppHooks";

const Authorization = () =>{
    const dispatch = useAppDispatch();
    const login = useAppSelector((state) => state.authReducer.login);
    const isLogged = useAppSelector((state) => state.authReducer.isLogged);
    const [textInput, setTextInput] = useState('');

    if(!isLogged){
        return (
            <InputGroup className="">
                <Form.Control type={"text"} placeholder={"Логин"}
                              className={"form-control me-3"}
                              onChange={(e) => setTextInput(e.target.value)}/>
                <Form.Control type={"password"} placeholder={"Пароль"}
                              className={"form-control me-3"} />
                <Button type={"submit"} className={"btn btn-primary me-3"}
                        onClick={() => dispatch(logIn(textInput))}>Вход</Button>
                <Button type={"submit"} 
                        onClick={() => dispatch(showReg())}>Регистрация</Button>
            </InputGroup>  
        )
    }
    return(
        <Form>
            <Form.Label className={'me-3'}>{`Привет, ${ login }!`} </Form.Label>
            <Button onClick={() => dispatch(logOut())}>Выйти</Button>
        </Form>
    )
}

export default Authorization;
