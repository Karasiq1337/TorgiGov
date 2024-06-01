import React, {Children} from "react";
import './Authorization.css'

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
        <div className="grid">
            <div>
                <text>
                    Авторизоваться
                </text>
            </div>
            <div>
                <span>
                    <input/>
                </span>
            </div>
            <div>
                <span>
                    <input/>
                </span>
            </div>
            <div>
                <button>
                    Войти
                </button>
            </div>
            <div>
                <span>
                    Уже зарегестрированы?
                </span>
            </div>
        </div>
    )
}