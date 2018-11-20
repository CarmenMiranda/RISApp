import React from 'react';
import SearchInput from 'react-search-input';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Line from '../components/Line';
import Subtitle from '../components/Subtitle';

import GroupButtonsContainer from '../components/GroupButtonsContainer';
import GroupButtonUp from '../components/GroupButtonUp';
import GroupButton2 from '../components/GroupButton2';

import ButtonModal from '../components/ButtonModal';

import '../css/pacientesScreen.css';
import '../css/searchInput.css';

export default class Pacientes extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            modalAddPacientes: false,
            modalEditPacientes: false,
            modalDeletePacientes: false,
        };
    }
    
    buttonClickAdd = () => {
        this.setState({
            modalAddPacientes: !this.state.modalAddPacientes
        });       
    };

    buttonClickEdit = () => {
        this.setState({
            modalEditPacientes: !this.state.modalEditPacientes
        });       
    };

    buttonClickDelete = () => {
        this.setState({
            modalDeletePacientes: !this.state.modalDeletePacientes
        });       
    };

    render(){
        var infoModalAdd={
            type: 'agregarPaciente',
            title: "Agregar Paciente", 
            botones: ["Agregar","Cancelar"]
        };

        var infoModalEdit={
            type: 'agregarPaciente',
            title: "Editar Paciente",
            botones: ["Editar","Cancelar"]
        };
    
        var infoModalDelete={
            type: 'eliminarPaciente',
            title: "Eliminar Paciente",
            botones: ["Eliminar","Cancelar"]
        };

        return(
            <div className="container-fluid">
                <Header screen='Pacientes' />
                <div className="row main">
                    <div className="col-12">
                        <Title titleText={'Pacientes'} />  
                        <Line/> 
                    </div>
                    <div className="col-3 d-flex justify-content-center">
                        <select className="form-control" id="elegirSelect">
                            <option id="opTodos" value="Todos" >Todos</option>
                            <option id="opPacientes" value="Pacientes" >Pacientes</option>
                            <option id="opGrupos" value="Grupos">Grupos</option>
                        </select>
                    </div>
                    <div className="col-6 mainCenterPacientes">
                        <Subtitle subtitleText={'Buscar grupo o paciente'} />
                        <SearchInput className="search-input" placeholder="Buscar paciente o grupo" />
                        <br />
                        <GroupButtonsContainer>
                            <GroupButtonUp buttonText = {'Consultorio Colima'} bgColor = {'#3DE69C'} option={'reviewPacientes'} btnEdit={this.buttonClickEdit} btnDelete={this.buttonClickDelete} screen={"Pacientes"}/>
                            <GroupButton2 buttonText = {'Campaña de salud U de C'} bgColor = {'#2EC382'}/>
                        </GroupButtonsContainer>
                    </div>
                    <div className="col-3 d-flex flex-row justify-content-end align-items-start">
                        <ButtonModal buttonName={'Agregar Paciente'} open={this.state.modalAddPacientes} buttonClick={this.buttonClickAdd} info={infoModalAdd}/>
                        
                        <ButtonModal className="btnHidden" buttonName={'Editar Paciente'} open={this.state.modalEditPacientes} buttonClick={this.buttonClickEdit} info={infoModalEdit}/>
                        <ButtonModal className="btnHidden" buttonName={'Eliminar Paciente'} open={this.state.modalDeletePacientes} buttonClick={this.buttonClickDelete} info={infoModalDelete}/>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}