import React from 'react';
import '../css/reviewPaciente.css';

const ReviewPaciente = (props) =>{
    return(
        <div>
            <div className="container">
                <img className="photo" src={props.foto} />
                <div className="containerDetail">
                    <div className="containerDetailText">
                        <p className="textTitle">{props.paciente.name}</p>
                        <p className="textSubtitle">Fecha de Nacimiento: {props.paciente.birthday}</p>
                        <div className="containerButtons">
                            <button className="btnEditarPaciente" style={styles.button} onClick={props.btnEdit} >Editar <i className="fas fa-pencil-alt"></i></button>
                            {props.screen=="Pacientes"?<button className="btnEliminarPaciente" style={styles.button} onClick={props.btnDelete} >Eliminar <i className="fas fa-trash"></i></button>:""}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewPaciente;

const styles = {
	button:{
	    backgroundColor: '#3EC58A',
	    padding: 5,
	    borderRadius: 8,
	    borderColor: '#3DE69C',
	    borderBottomColor: '#3DE69C',
	    borderBottomWidth: 1,
	    borderWidth: 1,
	    width: '45%',
	    height: 35,
	    marginBottom: 20,
		/*marginRight: 10,*/
		color: 'white',
		fontSize: 15,
		textAlign: 'center',
		cursor: 'pointer',
    },
}