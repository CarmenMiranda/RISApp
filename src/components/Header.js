import React, { Component } from 'react';
import '../css/header.css';
import Logo from './Logo';

class Header extends Component {
	render(){
		var screen = this.props.screen;
		var imgPacientes= require('../assets/icons/pacientes.png'),
			imgExpedientes=require('../assets/icons/expedientes.png'), 
			imgConsultas=require('../assets/icons/consultas.png'), 
			imgOfertas=require('../assets/icons/descuento.png');
		switch(screen){
			case "Pacientes":
				imgPacientes=require('../assets/icons/pacientes-2.png');
			break;
			case "Expedientes":
				imgExpedientes=require('../assets/icons/expedientes-2.png');
			break;
			case "Consultas":
				imgConsultas=require('../assets/icons/consultas-2.png');
			break;
			case "Promociones":
				imgOfertas=require('../assets/icons/descuento-2.png');
			break;
		}
		
		return (
			<div className="viewStyle">
				<div className="logo">
					<Logo type="Header"/>
				</div>
				<div className="pages">
					<a title="Pacientes" className={screen=="Pacientes"? "ButtonPacientes active": "ButtonPacientes"}>
						<img
							className="menuButton"
							style={{width: 55, height: 55}}
							src={imgPacientes}
							alt="Pacientes"
						/>
					</a>
					<a title="Expedientes" className={screen=="Expedientes"? "active": ""}>
						<img
							className="menuButton"
							style={{width: 45, height: 45}}
							src={imgExpedientes}
							alt="Expedientes"
						/>
					</a>
					<a title="Consultas" className={screen=="Consultas"? "active": "ButtonPacientes"}>
						<img
							className="menuButton"
							style={{width: 45, height: 45}}
							src={imgConsultas}
							alt="Consultas"
						/>
					</a>
					<a title="Promociones" className={screen=="Promociones"? "active": ""}>
						<img
							className="menuButton"
							src={imgOfertas}
							alt="Promociones"
						/>
					</a>
				</div>
				<div className="session">
					<a className="nav-link dropdown-toggle" id="dropDownSession" role="button"data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Carmen Miranda</a>
					<div className="dropdown-menu" aria-labelledby="dropDownSession">
						<a id="dropPacientes" className={screen=="Pacientes"? "dropdown-item active": "dropdown-item"} href="#">Pacientes</a>
						<a id="dropExpedientes" className={screen=="Expedientes"? "dropdown-item active": "dropdown-item"} href="#">Expedientes</a>
						<a id="dropConsultas" className={screen=="Consultas"? "dropdown-item active": "dropdown-item"} href="#">Consultas</a>
						<a id="dropPromociones" className={screen=="Promociones"? "dropdown-item active": "dropdown-item"} href="#">Promociones</a>
						<a className="dropdown-item" href="#">Cerrar Sesión</a>
					</div>
				</div>
			</div>
		);
		
	}
};

export default Header;