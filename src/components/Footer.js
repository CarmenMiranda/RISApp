import React, { Component } from 'react';
import '../css/footer.css';
import Logo from './Logo';

class Footer extends Component {
	render(){
		return (
			<div className="viewStyleFooter">
				<div className="logoFooter">
					<Logo type="Footer"/>
				</div>

				<div className="thesis">
					<div className="thesisTitle">
						<p>Tesis: </p>
					</div>

					<div className="thesisName">
						<p>"Diseño y desarrollo de la interfaz gráfica de un administrador web de expedientes médicos"</p>
					</div>
				</div>

				<div className="styleTextFooter"> 
					<p> Carmen Miranda 7° "K"</p>
				</div>
			</div>
		);
		
	}
};

export default Footer;