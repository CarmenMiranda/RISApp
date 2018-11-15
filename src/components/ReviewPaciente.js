import React from 'react';
import '../css/reviewPaciente.css';

const ReviewPaciente = (props) =>{
    return(
        <div className="container" onClick={() => {console.log('Ya jala :D')}}>
            <img className="photo" src={props.foto} />
            <div className="containerDetail">
                <div className="containerDetailText">
                    <p className="textTitle">{props.paciente}</p>
					<p className="textSubtitle">Hola {props.paciente}...</p>
                </div>
				<p className="arrow">></p>
            </div>
        </div>
    );
};

export default ReviewPaciente;
