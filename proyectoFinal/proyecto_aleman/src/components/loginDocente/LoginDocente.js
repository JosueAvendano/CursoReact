import React, { useState } from "react";
import './LoginDocente.css'
import InfoEstudiantes from "../infoEstudiantes/InfoEstudiantes";

export default function LoginDocente(){
    //Estados de react
    const [errorMessages, setErrorMessage] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    //Info del login de los usuarios
    const database = [
        {
            username: "hermanBecker",
            password: "prof1"
        },
        {
            username: "antoniaMeyer",
            password: "prof2"
        }
    ];

    //Mensajes de error
    const errors = {
        uname: "Invalid username",
        pass: "Invalid password"
    };

    const handleSubmit = (event) => {
        //Previene un page reload
        event.preventDefault();

        var {uname, pass} = document.forms[0];

        //Arrow function para encontrar la info del usuario
        const userData = database.find((user) => user.username === uname.value);

        //Comparar info del usuario
        if(userData){
            if(userData.password !== pass.value){
                //Password invalida
                setErrorMessage({name: "pass", message: errors.pass});
            }else{
                //Si todo esta bien entonces el estado del componente cambia a 'true'
                setIsSubmitted(true);
            }
        }else{
            //Usuario no encontrado
            setErrorMessage({name:"uname", message: errors.uname});
        }
    };

    //Genera el codigo JSX para el mensaje de error
    const renderErrorMessage = (name) => name === errorMessages.name && (
        <div className="error">
            {errorMessages.message}
        </div>
    );

    //Codigo de JSX para el formulario de login
    const renderForm = (
        <div className="form">
            <div className="card login-prof-card text-center">
                <div className="card-header login-prof-card-header">
                    Guten Tag Lehrer, treten Sie bitte hier ein
                </div>
            <div className="card-body login-prof-card-body">
                <form onSubmit={handleSubmit}>
                    <div className="login-prof-input-container">
                        <label>Username:</label><br/>
                        <input type="text" name="uname" placeholder="Username" required/>
                        {renderErrorMessage("uname")}
                    </div>
                    <div className="login-prof-input-container">
                        <label>Password:</label><br/>
                        <input type="password" name="pass" placeholder="Password" required/>
                        {renderErrorMessage("pass")}
                    </div>
                    <hr/>
                    <div className="login-prof-button-container">
                        {/* <input type="submit" /> */}
                        <button type="submit">Log In</button>
                    </div>
                </form>
            </div>
{/*             <div className="card-footer text-body-secondary">
                <div className="button-container">
                    <input type="submit"/>
                </div>
            </div> */}
            </div>
        </div>
    );

    return(
        <div className="div-login-prof-general-container">
            <div className="loginDocente">
                <div className="login-prof-form">
                    {isSubmitted ? <InfoEstudiantes /> : renderForm}
                </div>
            </div>
        </div>
    );
}