import React from 'react';
import SearchInput from 'react-search-input';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Line from '../components/Line';
import Subtitle from '../components/Subtitle';
import ButtonModal from '../components/ButtonModal';

import GroupButtonsContainer from '../components/GroupButtonsContainer';
import GroupReviewPacienteSection from '../components/GroupReviewPacienteSection';
import GroupReviewPaciente from '../components/GroupReviewPaciente';
import GroupReviewPacienteContainer from '../components/GroupReviewPacientContainer';

import '../css/expedientesScreen.css';
import '../css/searchInput.css';

export default class Expedientes extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            modalAddExpediente: false,
            modalEditExpediente: false,
            modalDeleteExpediente: false,
        };
    }
    
    buttonClickAdd = () => {
        this.setState({
            modalAddExpediente: !this.state.modalAddExpediente
        });       
    };

    buttonClickEdit = () => {
        this.setState({
            modalEditExpediente: !this.state.modalEditExpediente
        });       
    };

    render(){
        var infoModalAdd={
            type: 'agregarExpediente',
            title: "Agregar Expediente",
            botones: ["Agregar","Cancelar"]
        };

        var infoModalEdit={
            type: 'agregarExpediente',
            title: "Editar Expediente",
            botones: ["Editar","Cancelar"]
        };
        return(
            <div className="container-fluid">
                <Header screen='Expedientes' />
                <div className="row mainExpedientes">
                    <div className="col-12">
                        <Title titleText={'Expedientes'} />  
                        <Line/> 
                    </div>
                    <div className="col-3"></div>
                    <div className="col-6 mainCenterExpedientes">
                        <Subtitle subtitleText={'Buscar expediente'} />
                        <SearchInput className="search-input" placeholder="Buscar expediente" />
                        <br />
                        <GroupButtonsContainer>
                            <GroupReviewPacienteContainer>
                                <GroupReviewPacienteSection>
                                    <GroupReviewPaciente btnEdit={this.buttonClickEdit} btnDelete={this.buttonClickDelete} screen={'Expedientes'}/>
                                </GroupReviewPacienteSection>
                            </GroupReviewPacienteContainer>
                        </GroupButtonsContainer>
                    </div>
                    <div className="col-3 d-flex flex-row justify-content-end align-items-start">
                        <ButtonModal buttonName={'Agregar Expediente'} open={this.state.modalAddExpediente} buttonClick={this.buttonClickAdd} info={infoModalAdd}/>
                        
                        <ButtonModal className="btnHidden" buttonName={'Editar Expediente'} open={this.state.modalEditExpediente} buttonClick={this.buttonClickEdit} info={infoModalEdit}/>
                    </div>
                    
                </div>
                <Footer />
            </div>
        );
    }
}