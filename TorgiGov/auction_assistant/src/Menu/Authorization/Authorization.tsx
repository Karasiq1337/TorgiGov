import "bootstrap/dist/css/bootstrap-grid.min.css"
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import {logIn, logInFail, logOut, showReg} from "./AuthReducer";
import {useAppDispatch, useAppSelector} from "../../AppHooks";
import {login as apiLogin}  from "../../Api/Users";

const Authorization = () =>{
    const dispatch = useAppDispatch();
    const isLogged = useAppSelector((state) => state.reducer.auth.isLogged);
    const [login, setLogin] = useState(
        useAppSelector((state) => state.reducer.auth.login)
    );
    const [password, setPassword] = useState('')
    
    async function handleLogin(){
        const logSuccess = await apiLogin(login, password);
        if(logSuccess === true){
            dispatch(logIn(login));
            return;
        }
        dispatch(logInFail());
    }
    
    if(!isLogged){
        return (
            <InputGroup className="">
                <Form.Control type={"text"} placeholder={"Логин"}
                              className={"form-control me-3"}
                              onChange={(e) => setLogin(e.target.value)}/>
                <Form.Control type={"password"} placeholder={"Пароль"} className={"form-control me-3"}
                              onChange={(e) => setPassword(e.target.value)}/>
                <Button type={"submit"} className={"btn btn-primary me-3"}
                        onClick={() => handleLogin()}>Вход</Button>
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
