//import React from "react";
import React, {useState} from "react";
// import ReactDOM from "react-dom";
import './Login.css';
import ListaCursos from "../listaCursos/ListaCursos";

// class Login extends React.Component {
//     render(){
//         return(
//             <div>
//                 <form>
//                     <label for="user">Username:</label><br/>
//                     <input type="text" id="user" name="user"/><br/>
//                     <label for="psw">Password:</label><br/>
//                     <input type="text" id="psw" name="psw"/><br/>
//                 </form>
//             </div>
//         );
//     }
// }

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
            <div className="title">Sign In</div>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="login">
            <div className="login-form">
                {/* {isSubmitted ? <div>User is successfully logged in</div> : renderForm} */}
                {isSubmitted ? <ListaCursos/> : renderForm}
            </div>
        </div>
    );
}

export default Login;