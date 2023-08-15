import React from "react";
import './InfoEstudiantes.css';

class InfoEstudiantes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            estaCargado: false,
            estudiantes: []
        };
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then(respuesta => respuesta.json()).then(
            (resultado) => {
                this.setState({
                    error: null,
                    estaCargado: true,
                    estudiantes: resultado
                })
            },
            (errores) => {
                this.state({
                    error: errores,
                    estaCargado: true,
                    estudiantes: []
                });
            }
        )
    }

    render(){
        const { error, estaCargado, estudiantes } = this.state;
        if(error){
            return <div>Se encontro el siguiente error: {error.nessage}</div>;
        }else if (!estaCargado){
            return <div>Cargando datos de estudiantes...</div>
        }else{
            return(
                <div>
            {/*         <h2>Peticion Ajax: Users</h2>
                    <ul>
                        {estudiantes.map(estudiante => (
                            <li key={estudiante.id}>
                                {estudiante.id} | {estudiante.name} | {estudiante.username} | {estudiante.email}
                            </li>
                        ))}
                    </ul> */}
                    <table class="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Full Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {estudiantes.map(estudiante =>
                                <tr key={estudiante.id}>
                                    <th scope="row">{estudiante.id}</th>
                                    <td>{estudiante.name}</td>
                                    <td>{estudiante.username}</td>
                                    <td>@{estudiante.email}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}

export default InfoEstudiantes;