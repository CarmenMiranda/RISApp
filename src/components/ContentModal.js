import React, { Component } from 'react';
import '../css/modal.css';
import LineModal from './LineModal';

class ContentModal extends Component{
    render () {
		var info=this.props.info;
		var lengthBotones = info.botones.length;
		/*let keyPress = (key) =>{
			if(key.charCode < 48 || key.charCode > 57) return false;
		}*/

		let getInfo = (type) => {
			var modalContent;
			switch(type){
				case "agregarPaciente":
					modalContent= <div> 
						<form> 
							<p style={styles.inputLabelStyle}>Nombre del Paciente</p> 
							<input style={styles.inputContainerStyle} type='text' placeholder="Inserte el nombre del paciente"/>
							<p style={styles.inputLabelStyle}>Fecha de Nacimiento</p> 
							<input style={styles.inputContainerStyle} type='date'/>
							<p style={styles.inputLabelStyle}>Teléfono</p> 
							<input style={styles.inputContainerStyle} type='tel' pattern="[0-9]*" placeholder="Inserte el número telefónico"/>
						</form> 
					</div>;
				break;
				case "eliminarPaciente":
					modalContent= <div className="p-5 mt-5"> 
						<p style={styles.inputLabelStyle}>¿Está seguro que desea eliminar al paciente <i>Nombre del Paciente</i>?</p> 
						<p style={styles.inputLabelStyle}>Sus datos (incluyendo el expediente) no podrán ser recuperados.</p> 
					</div>;
				break;
				case "agregarExpediente":
					modalContent= <div>
						<p style={styles.inputLabelStyle}>*Paciente</p> 
						<select style={styles.inputContainerStyle}>
							<option>---Selecciona un paciente---</option>
							<option>Paciente 1</option>
							<option>Paciente 2</option>
							<option>Paciente 3</option>
							<option>Paciente 4</option>
						</select>
					</div>;
				break;
				case "agregarConsulta":
					modalContent= <div>
						<p style={styles.inputLabelStyle}>*Paciente</p> 
						<select style={styles.inputContainerStyle}>
							<option>---Selecciona un paciente---</option>
							<option>Paciente 1</option>
							<option>Paciente 2</option>
							<option>Paciente 3</option>
							<option>Paciente 4</option>
						</select>
						<p style={styles.inputLabelStyle}>*Día</p> 
						<input style={styles.inputContainerStyle} type='date'/>
						<p style={styles.inputLabelStyle}>*Hora</p> 
						<input style={styles.inputContainerStyle} type='time'/>
					</div>;
				break;
				case "editarConsulta":
					modalContent= <div>
						<div className="d-flex">
							<div className="w-50">
								<p style={styles.inputLabelStyle}>*Paciente</p> 
								<p className="font-weight-bold" style={styles.inputLabelStyle}>Nombre del Paciente</p> 
							</div>
							<div className="w-25 h-75">
								<p style={styles.inputLabelStyle}>*Día</p> 
								<input style={styles.inputContainerStyle} type='date'/>
							</div>
							<div className="w-25 h-75">
								<p style={styles.inputLabelStyle}>*Hora</p> 
								<input style={styles.inputContainerStyle} type='time'/>
							</div>
						</div>
						<div className="d-flex">
							<div className="w-50">
								<p style={styles.inputLabelStyle}>Síntomas:</p> 
								<textarea style={styles.inputContainerStyle} placeholder="Inserte los síntomas del paciente" rows="3" noresize/>
							</div>
							<div className="w-50">
								<p style={styles.inputLabelStyle}>Diagnóstico</p> 
								<input style={styles.inputContainerStyle} type='text' placeholder="Inserte diagnóstico"/>
							</div>
						</div>
						<p style={styles.inputLabelStyle}>Receta</p> 
						<input style={styles.inputContainerStyle} type='text' placeholder="Inserte receta"/>
					</div>;
				break;
				case "eliminarConsulta":
					modalContent= <div className="p-5 mt-5"> 
						<p style={styles.inputLabelStyle}>¿Está seguro que desea eliminar la consulta?</p> 
						<p style={styles.inputLabelStyle}>Los datos no podrán ser recuperados.</p> 
					</div>;
				break;
				default:
				break;
			}
			return modalContent;
		}

        return (
            <div 
        		className={this.props.open 
          		? "content-wrapper content-open"
          		: "content-wrapper"}
      		>
				<div className="modal-header">
					<p style={styles.textStyle}>{info.title}</p>
					<i className="fa fa-times-circle" 
						onClick={this.props.buttonClick}
					></i>
				</div>
				<LineModal />
				<div className="modal-content">
					{getInfo(this.props.info.type)}
					<div>
						<button style={styles.button} onClick={() => {console.log("Holiii, Oki")}} >{this.props.info.botones[0]}</button>
						{(lengthBotones==2)?(
							<button style={styles.buttonCancelar} onClick={this.props.buttonClick} >{this.props.info.botones[1]}</button>
							):("")
						}
					</div>
				</div>
      		</div>
        );
    }
}

const styles = {
	button:{
	    backgroundColor: '#3EC58A',
	    padding: 5,
	    borderRadius: 8,
	    borderColor: '#3DE69C',
	    borderBottomColor: '#3DE69C',
	    borderBottomWidth: 1,
	    borderWidth: 1,
	    width: 200,
	    height: 45,
	    marginTop: 20,
		marginRight: 20,
		color: 'white',
		fontSize: 22,
		textAlign: 'center',
		cursor: 'pointer',
	},
	buttonCancelar:{
		backgroundColor: '#dc3545',
	    padding: 5,
	    borderRadius: 8,
	    borderColor: '#9C2631',
	    borderBottomColor: '#9C2631',
	    borderBottomWidth: 1,
	    borderWidth: 1,
	    width: 200,
	    height: 45,
	    marginTop: 20,
		marginRight: 20,
		color: 'white',
		fontSize: 22,
		textAlign: 'center',
		cursor: 'pointer',
	},
	textStyle: {
		marginTop: 0,
		color: '#3DB07E',
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	inputContainerStyle: {
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		shadowColor:'black',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		elevation: 2,
		borderRadius: 8,
		width: '85%',
		padding: 10,

		borderColor: '#3DE69C',
		borderBottomColor: '#3DE69C',
		borderBottomWidth: 1,
        borderWidth: 1,
		color: '#5D5D5D',
		marginBottom: 25,
		resize: 'none',
		fontSize: 16,
	},
	inputLabelStyle: {
		color: '#7E9C94',
		fontSize: 20,
		fontWeight: 'normal',	
		paddingLeft: 1,
		marginBottom: 5,
		marginTop: 0
	}
}

export default ContentModal;