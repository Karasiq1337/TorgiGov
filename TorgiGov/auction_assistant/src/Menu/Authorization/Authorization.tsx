import "bootstrap/dist/css/bootstrap-grid.min.css"
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGem} from "@fortawesome/free-solid-svg-icons";
import React, {useContext, useReducer, useState} from "react";


export function  Authorization(){
    const initialLoginState = {
        login: '',
        password: '',
        isLogged: false,
    }
    const [state, dispatch] = useReducer(loginReducer, initialLoginState);
    
    return(
    <>
        {state.isLogged ? (
            <InputGroup className="">
                <Form.Control type={"text"} placeholder={"Логин"}
                              className={"form-control me-3"} value={state.login}
                              onChange={(e) => dispatch({type: LoginActionName.SET_Login, payload: e.target.value})}/>
                <Form.Control type={"password"} placeholder={"Пароль"}
                              className={"form-control me-3"} value={state.password}
                              onChange={(e) => dispatch({type: LoginActionName.SET_Password, payload: e.target.value})}/>
                <Button type={"submit"} className={"btn btn-primary me-5"}
                        onClick={() => dispatch(loginSuccess(''))}>Вход</Button>
            </InputGroup>
        ) : (
            <>
                <FontAwesomeIcon icon={faGem} className={'me-3 mt-1'}/>
                <span>{`Привет, ${ state.login }!`} </span>
            </>
        )}
    </>
    )
}

export function loginSuccess(login : string) : LoginAction{
    return {
        type: LoginActionName.Login,
        payload: login
    }
}

enum LoginActionName {
    Login = 'Login',
    Logout = 'Logout',
    SET_Password = 'SET_Password',
    SET_Login = 'SET_Login',
}

export interface LoginAction {
    type: LoginActionName;
    payload: string;
}

interface LoginState {
    login?: string;
    password?: string;
    isLogged : boolean;
}

function loginReducer(state: LoginState, action: LoginAction) {
    const { type, payload } = action;
    switch (type) {
        case LoginActionName.Login:
            return {
                ...state,
                 isLogged: true, login: action.payload
            };
        case LoginActionName.Logout:
            return {
                ...state,
                isLogged : false, login: ''
            };
        case LoginActionName.SET_Login:
            return {
                ...state,
                login: action.payload,
            };
        case LoginActionName.SET_Password:
            return {
                ...state,
                password: action.payload,
            };
        default:
            return state;
    }
}

