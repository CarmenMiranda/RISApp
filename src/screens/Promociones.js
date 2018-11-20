import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Line from '../components/Line';
import Subtitle from '../components/Subtitle';
import ButtonModal from '../components/ButtonModal';

import Promocion from '../components/Promocion';

import '../css/promocionesScreen.css';

export default class Consultas extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            modalAddPromocion: false,
            modalEditPromocion: false,
            modalDeletePromocion: false,
            promocion:0,
        };  
    }
    
    buttonClickAdd = () => {
        this.setState({
            modalAddPromocion: !this.state.modalAddPromocion
        });       
    };

    buttonClickEdit = () => {
        this.setState({
            modalEditPromocion: !this.state.modalEditPromocion
        });       
    };

    buttonClickDelete = () => {
        this.setState({
            modalDeletePromocion: !this.state.modalDeletePromocion
        });       
    };

    componentWillMount(){
        this.setState({
            promocion: 0,
        });
    }

    render(){
        var offers= [
            {name:'Promoción 1', description:"Detalle 1", validityPeriod:"2019-01-14"},
            {name:'Promoción 2', description:"Detalle 2", validityPeriod:"2019-02-15"},
            {name:'Promoción 3', description:"Detalle 3", validityPeriod:"2019-03-16"},
            {name:'Promoción 4', description:"Detalle 4", validityPeriod:"2019-04-17"},
            {name:'Promoción 5', description:"Detalle 5", validityPeriod:"2019-05-18"},
        ];

        var infoModalAdd={
            type: 'agregarPromocion',
            title: "Agregar Promocion",
            botones: ["Agregar","Cancelar"]
        };

        var infoModalEdit={
            type: 'editarPromocion',
            title: "Editar Promocion",
            botones: ["Guardar Cambios","Cancelar"],
            offer:offers[this.state.promocion],
        };
    
        var infoModalDelete={
            type: 'eliminarPromocion',
            title: "Eliminar Promocion",
            botones: ["Eliminar","Cancelar"],
            offer:offers[this.state.promocion],
        };

        

        return(
            <div className="container-fluid">
                <Header screen='Promociones' />
                <div className="row mainPromociones">
                    <div className="col-12">
                        <Title titleText={'Promociones'} />  
                        <Line/> 

                    </div>
                    <div className="col-12 mb-5 d-flex justify-content-end">
                        <ButtonModal buttonName={'Agregar Promocion'} open={this.state.modalAddPromocion} buttonClick={this.buttonClickAdd} info={infoModalAdd}/>
                        
                        <ButtonModal className="btnHidden" buttonName={'Editar Promocion'} open={this.state.modalEditPromocion} buttonClick={this.buttonClickEdit} info={infoModalEdit}/>
                        <ButtonModal className="btnHidden" buttonName={'Eliminar Promocion'} open={this.state.modalDeletePromocion} buttonClick={this.buttonClickDelete} info={infoModalDelete}/>
                    </div>
                    <div className="col-5">
                        <div className="d-flex justify-content-around ontainerButtons-promocion">
                            <Promocion name={offers[this.state.promocion].name} description={offers[this.state.promocion].description} validityPeriod={offers[this.state.promocion].validityPeriod} btnEdit={this.buttonClickEdit} btnDelete={this.buttonClickDelete}/>
                        </div>
                    </div>
                    <div className="col-7 botonesPromociones">
                        <button onClick={() => this.setState({promocion: 0})}><i className="fas fa-angle-left"></i> Promocion 1</button>
                        <button onClick={() => this.setState({promocion: 1})}><i className="fas fa-angle-left"></i> Promocion 2</button>
                        <button onClick={() => this.setState({promocion: 2})}><i className="fas fa-angle-left"></i> Promocion 3</button>
                        <button onClick={() => this.setState({promocion: 3})}><i className="fas fa-angle-left"></i> Promocion 4</button>
                        <button onClick={() => this.setState({promocion: 4})}><i className="fas fa-angle-left"></i> Promocion 5</button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}