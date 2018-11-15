import React, { Component } from 'react';
import ContentModal from './ContentModal';
import '../css/modal.css';

class Modal extends Component{
    render () {
        return (
            <div 
                className={this.props.open ? "inner-modal inner-modal-open" : "inner-modal"}
            >
            <ContentModal 
                open={this.props.open}
                buttonClick={this.props.buttonClick} 
                info={this.props.info}
            />
            </div>
        );
    }
}


export default Modal;