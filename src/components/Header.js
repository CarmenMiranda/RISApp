import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
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
					<NavLink to="/pacientes" title="Pacientes" className="ButtonPacientes" activeClassName="active">
						<img
							className="menuButton"
							style={{width: 55, height: 55}}
							src={imgPacientes}
							alt="Pacientes"
						/>
					</NavLink>
					<NavLink to="/expedientes" title="Expedientes" activeClassName="active">
						<img
							className="menuButton"
							style={{width: 45, height: 45}}
							src={imgExpedientes}
							alt="Expedientes"
						/>
					</NavLink>
					<NavLink to="/consultas" title="Consultas" className="ButtonPacientes" activeClassName="active">
						<img
							className="menuButton"
							style={{width: 45, height: 45}}
							src={imgConsultas}
							alt="Consultas"
						/>
					</NavLink>
					<NavLink to="/promociones" title="Promociones" activeClassName="active">
						<img
							className="menuButton"
							src={imgOfertas}
							alt="Promociones"
						/>
					</NavLink>
				</div>
				<div className="session">
					<a className="nav-link dropdown-toggle" id="dropDownSession" role="button"data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Carmen Miranda</a>
					<div className="dropdown-menu" aria-labelledby="dropDownSession">
						<NavLink to="/pacientes" className="dropdown-item" activeClassName="active">Pacientes</NavLink>
						<NavLink to="/expedientes" className="dropdown-item" activeClassName="active">Expedientes</NavLink>
						<NavLink to="/consultas" className="dropdown-item" activeClassName="active">Consultas</NavLink>
						<NavLink to="/promociones" className="dropdown-item" activeClassName="active">Promociones</NavLink>
						<NavLink to="/" className="dropdown-item" activeClassName="active" exact>Cerrar Sesión</NavLink>
					</div>
				</div>
			</div>
		);
		
	}
};

export default Header;