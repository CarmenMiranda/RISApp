import React, { Component } from 'react';
import Consulta from './Consulta';

class GroupConsulta extends Component {     
    render(){
        return(
            <div className="d-flex flex-row justify-content-around flex-wrap my-5">
                <Consulta paciente={this.props.pacients[0].namePaciente} date={this.props.pacients[0].dateConsulta} time={this.props.pacients[0].timeConsulta} btnEdit={this.props.btnEdit} btnDelete={this.props.btnDelete}/>
                <Consulta paciente={this.props.pacients[1].namePaciente} date={this.props.pacients[1].dateConsulta} time={this.props.pacients[1].timeConsulta} btnEdit={this.props.btnEdit} btnDelete={this.props.btnDelete}/>
                <Consulta paciente={this.props.pacients[2].namePaciente} date={this.props.pacients[2].dateConsulta} time={this.props.pacients[2].timeConsulta} btnEdit={this.props.btnEdit} btnDelete={this.props.btnDelete}/>
                <Consulta paciente={this.props.pacients[3].namePaciente} date={this.props.pacients[3].dateConsulta} time={this.props.pacients[3].timeConsulta} btnEdit={this.props.btnEdit} btnDelete={this.props.btnDelete}/>
                <Consulta paciente={this.props.pacients[4].namePaciente} date={this.props.pacients[4].dateConsulta} time={this.props.pacients[4].timeConsulta} btnEdit={this.props.btnEdit} btnDelete={this.props.btnDelete}/>
            </div>
        );
    }
}


export default GroupConsulta;