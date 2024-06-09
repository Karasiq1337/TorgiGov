import "bootstrap/dist/css/bootstrap-grid.min.css"
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGem} from "@fortawesome/free-solid-svg-icons";
import React, {useContext, useReducer, useState} from "react";

function Authorization(){
    const [password, setPassword] = useState<string>('');
    const [login, setLogin] = useState<string>('')
    const loginState = useContext<LoginState>(LoginContext) 
    const [state, dispatch] = useReducer(loginReducer, { });
    
    return(
    <>
        {state.isLogged ? (
            <InputGroup className="">
                <Form.Control type={"text"} placeholder={"Логин"}
                              className={"form-control me-3"} value={state.login}
                              onChange={(e) => setLogin(e.target.value)}/>
                <Form.Control type={"password"} placeholder={"Пароль"}
                              className={"form-control me-3"} value={password}
                              onChange={(e) => setPassword(e.target.value)}/>
                <Button type={"submit"} className={"btn btn-primary me-5"}
                        onClick={() => dispatch(loginSuccess(login))}>Вход</Button>
            </InputGroup>
        ) : (
            <>
                <FontAwesomeIcon icon={faGem} className={'me-3 mt-1'}/>
                <span>{`Привет, ${ login }!`} </span>
            </>
        )}
    </>
    )
}

export function loginSuccess(login : string) : LoginAction{
    return{
        type: LoginActionName.Login,
        payload: login
    }
}

enum LoginActionName {
    Login = 'Login',
    Logout = 'Logout',
}

export interface LoginAction {
    type: LoginActionName;
    payload: string;
}

interface LoginState {
    login?: string;
    isLogged : boolean;
}

function loginReducer(state: LoginState, action: LoginAction) {
    const { type, payload } = action;
    switch (type) {
        case LoginActionName.Login:
            return {
                ...state,
                loginState: {isLogged: true, login: payload}
            };
        case LoginActionName.Logout:
            return {
                ...state,
                loginState: {isLogged : false, login: null}
            };
        default:
            return state;
    }
}

