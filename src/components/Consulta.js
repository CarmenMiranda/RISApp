import React from 'react';
import '../css/consulta.css';

const Consulta = (props) =>{
    return(
        <div className="container-consulta">
            <div className="containerDetail-consulta my-2">
                <p className="namePaciente">{props.paciente}</p>
                <p className="dateConsulta">Día {props.date} a las {props.time} hras.</p>
                <div className="containerButtons-consulta">
                    <button onClick={props.btnEdit} >Editar <i className="fas fa-pencil-alt"></i></button>
                    <button onClick={props.btnDelete} >Eliminar <i className="fas fa-trash"></i></button>
                </div>
            </div>
        </div>
    );
}

export default Consulta;