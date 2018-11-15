import React, { Component } from 'react';
import '../css/modal.css';
import LineModal from './LineModal';

class ContentModal extends Component{
    render () {
		var info=this.props.info;
		var lengthBotones = info.botones.length;

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
					<div>
						<form>
							<p style={styles.inputLabelStyle}>{info.label}</p>
							<input style={styles.inputContainerStyle} type='text'/>
						</form>
					</div>
					<div>
						<button style={styles.button} onClick={() => {console.log("Holiii, Oki")}} >{this.props.info.botones[0]}</button>
						{(lengthBotones==2)?(
							<button style={styles.button} onClick={() => {console.log("Holiii, Cancelar")}} >{this.props.info.botones[1]}</button>
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
	    width: 100,
	    height: 35,
	    marginTop: 20,
		marginRight: 20,
		color: 'white',
		fontSize: 18,
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
		paddingLeft: 5,
		borderRadius: 8,

		borderColor: '#3DE69C',
		borderBottomColor: '#3DE69C',
		borderBottomWidth: 1,
        borderWidth: 1,
        color: '#5D5D5D',
	},
	inputLabelStyle: {
		color: '#7E9C94',
		fontSize: 17,
		fontWeight: 'normal',	
		paddingLeft: 1,
		marginBottom: 5,
		marginTop: 0
	}
}

export default ContentModal;