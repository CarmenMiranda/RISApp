import React, { Component } from 'react';
import Modal from './Modal';
import '../css/modal.css';

class ButtonModal extends Component{
	render () {
		return (
		  <div>
				<button
					className={this.props.className=="btnHidden"? "button d-none": "button"}
					onClick={this.props.buttonClick}
				> {this.props.buttonName}
				</button>
				<Modal 
					open={this.props.open}
					buttonClick={this.props.buttonClick}
					info={this.props.info}
				/>
		  </div>
		);
	}
}

export default ButtonModal;