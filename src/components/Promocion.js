import React from 'react';
import '../css/promocion.css';
import Subtitle from './Subtitle';

const Promocion = (props) =>{
    return(
        <div className="container-promocion">
            <div className="containerDetail-promocion">
                <Subtitle subtitleText={'Nombre:'} />
                <p className="nameOffer">{props.name}</p>
                <Subtitle subtitleText={'Descripción:'} />
                <p className="descriptionOffer">{props.description}</p>
                <div className="containerButtons-promocion">
                    <button onClick={props.btnEdit} >Editar <i className="fas fa-pencil-alt"></i></button>
                    <button onClick={props.btnDelete} >Eliminar <i className="fas fa-trash"></i></button>
                </div>
            </div>
        </div>
    );
}

export default Promocion;