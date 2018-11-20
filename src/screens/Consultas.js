import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Line from '../components/Line';
import Subtitle from '../components/Subtitle';
import GroupConsulta from '../components/GroupConsulta';
import ButtonModal from '../components/ButtonModal';

import '../css/consultasScreen.css';


export default class Consultas extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            modalAddConsulta: false,
            modalEditConsulta: false,
            modalDeleteConsulta: false,
        };  
    }
    
    buttonClickAdd = () => {
        this.setState({
            modalAddConsulta: !this.state.modalAddConsulta
        });       
    };

    buttonClickEdit = () => {
        this.setState({
            modalEditConsulta: !this.state.modalEditConsulta
        });       
    };

    buttonClickDelete = () => {
        this.setState({
            modalDeleteConsulta: !this.state.modalDeleteConsulta
        });       
    };

    render(){
        var today = new Date(),
            date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear(),
            fullDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+ today.getDate();
        
        var infoModalAdd={
            type: 'agregarConsulta',
            title: "Agregar Consulta",
            botones: ["Agregar","Cancelar"]
        };

        var infoModalEdit={
            type: 'editarConsulta',
            title: "Editar Consulta",
            botones: ["Editar","Cancelar"]
        };
    
        var infoModalDelete={
            type: 'eliminarConsulta',
            title: "Eliminar Consulta",
            botones: ["Eliminar","Cancelar"]
        };

        var pacients= [
            {namePaciente:'Brian Nájera', dateConsulta:date, timeConsulta:"08:00"},
            {namePaciente:'Eduardo Martínez', dateConsulta:date, timeConsulta:"10:00"},
            {namePaciente:'Andrea Olarte', dateConsulta:date, timeConsulta:"12:00"},
            {namePaciente:'Carmen Miranda', dateConsulta:date, timeConsulta:"14:00"},
            {namePaciente:'Claudia Miranda', dateConsulta:date, timeConsulta:"16:00"},
        ];

        return(
            <div className="container-fluid">
                <Header screen='Consultas' />
                <div className="row mainConsultas">
                    <div className="col-12">
                        <Title titleText={'Cosultas'} />  
                        <Line/> 
                        <Subtitle subtitleText={date} />
                    </div>
                    <div className="col-2"></div>
                    <div className="col-7 mainCenterConsultas p-0 ">
                        <input className="form-control w-25" type="date" value={fullDate}/>
                        <GroupConsulta btnEdit={this.buttonClickEdit} btnDelete={this.buttonClickDelete} pacients={pacients}/>
                    </div>
                    <div className="col-3 d-flex flex-row justify-content-end align-items-start">
                        <ButtonModal buttonName={'Agregar Consulta'} open={this.state.modalAddConsulta} buttonClick={this.buttonClickAdd} info={infoModalAdd}/>
                        
                        <ButtonModal className="btnHidden" buttonName={'Editar Consulta'} open={this.state.modalEditConsulta} buttonClick={this.buttonClickEdit} info={infoModalEdit}/>
                        <ButtonModal className="btnHidden" buttonName={'Eliminar Consulta'} open={this.state.modalDeleteConsulta} buttonClick={this.buttonClickDelete} info={infoModalDelete}/>
                    </div>

                </div>
                <Footer />
            </div>
        );
    }

}