import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ButtonModal from './components/ButtonModal';
import Header from './components/Header';

import GroupButtonsContainer from './components/GroupButtonsContainer';
import GroupButton from './components/GroupButton';
import GroupButton2 from './components/GroupButton2';
import GroupButtonUp from './components/GroupButtonUp';
import GroupReviewPacienteSection from './components/GroupReviewPacienteSection';
import GroupReviewPaciente from './components/GroupReviewPaciente';
import GroupReviewPacienteContainer from './components/GroupReviewPacientContainer';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
        };
    }
    
    buttonClick = () => {
        this.setState({
            openModal: !this.state.openModal
        });
    };

    render() {
        var infoModal={
            title: "Nombre Modal",
            label: "Nombre Label",
            botones: ["Ok","Cancelar"]
        };

        return (
            <div>
                <Header screen="Pacientes"/>
                <ButtonModal buttonName={'Modal'} open={this.state.openModal} buttonClick={this.buttonClick} info={infoModal}/>
            
                <GroupButtonsContainer>
                    <GroupButtonUp buttonText = {'Dietas'} bgColor = {'#3DE69C'} option={'option'} />
                    <GroupButton2 buttonText = {'Ejercicios'} bgColor = {'#2EC382'} />
                    <GroupButton buttonText = {'Otros'} bgColor = {'#18B16E'}/>
                    <GroupButton2 buttonText = {'Otros más'} bgColor = {'#2EC382'}/>
                </GroupButtonsContainer>

                <GroupReviewPacienteContainer>
                    <GroupReviewPacienteSection>
                        <GroupReviewPaciente />
                    </GroupReviewPacienteSection>
                </GroupReviewPacienteContainer>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));