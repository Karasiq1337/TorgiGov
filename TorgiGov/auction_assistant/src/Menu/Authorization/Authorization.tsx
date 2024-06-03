import React, {Children} from "react";
import './Authorization.css'
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap-grid.min.css"
import {FormGroup} from "react-bootstrap";


export function Authorization(){
    return(
        <VerticalAllinWrapper>
           <AuthorizationElement/>
        </VerticalAllinWrapper>
    )
}

export function VerticalAllinWrapper({children}: { children: React.ReactNode }){
    return(
        <div className="outer">
            <div className="middle">
                <div className="inner">
                    {children}
                </div>
            </div>
        </div>
    )
}

function AuthorizationElement(){
    return(
        <Form >
            <Form.Group>
                <Form.Label>Зарегистрируйтесь для продолжения</Form.Label>  
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Control
                    placeholder="Логин"
                    aria-label="Логин"
                    aria-describedby="basic-addon1"
                />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Control
                    placeholder="Пароль"
                    aria-label="Пароль"
                />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Control
                    placeholder="Повторите Пароль"
                    aria-label=" Повторите Пароль"
                />
            </Form.Group>
            <FormGroup>
                <Button variant="primary">Регистрация</Button>{' '}
            </FormGroup>
        </Form>
    )
}