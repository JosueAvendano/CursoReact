//import React from "react";
import React, {useState} from "react";
// import ReactDOM from "react-dom";
import './Login.css';
import ListaCursos from "../listaCursos/ListaCursos";

function Login(){
    //Estados de react
    const [errorMessages, setErrorMessage] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    //Info de login del/los usuario(s)
    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];

    const errors = {
        uname: "Invalid username or password",
        pass: "Invalid username or password!"
    };

    const handleSubmit = (event) => {
        //Previene un page reload
        event.preventDefault();

        var {uname, pass} = document.forms[0];

        //Encuentre la info de usuario
        const userData = database.find((user) => user.username === uname.value);

        //Comparar info de usuario
        if(userData){
            if(userData.password !== pass.value){
                //Pass invalida
                setErrorMessage({name: "pass", message: errors.pass});
            }else{
                setIsSubmitted(true);
            }
        }else{
            //Usuario no encontrado
            setErrorMessage({name:"uname", message: errors.uname});
        }
    };

    // Genera el codigo JSX para el mensaje de error
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // Codigo de JSX para el formulario de login
    const renderForm = (
            <div className="form">
                <div className="card login-card text-center">
                    <div className="card-header login-card-header">
                        Guten Tag Student, treten Sie bitte hier ein
                    </div>
                    <div className="card-body login-card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="login-input-container">
                                <label>Username:</label><br />
                                <input type="text" name="uname" placeholder="Username" required />
                                {renderErrorMessage("uname")}
                            </div>
                            <div className="login-input-container">
                                <label>Password:</label><br />
                                <input type="password" name="pass" placeholder="Password" required />
                                {renderErrorMessage("pass")}
                            </div>
                            <hr />
                            <div className="login-button-container">
                                {/* <input type="submit" /> */}
                                <button type="submit">Log In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );

    return (
        <div className="div-login-general-container">
            <div className="login">
                <div className="login-form">
                    {/* {isSubmitted ? <div>User is successfully logged in</div> : renderForm} */}
                    {isSubmitted ? <ListaCursos /> : renderForm}
                </div>
            </div>
        </div>
    );
}

export default Login;