import React, { Component } from 'react';
import GroupInfoContainer from './GroupInfoContainer';
import GroupInfoSection from './GroupInfoSection';
import ReviewPaciente from './ReviewPaciente';

class GroupReviewPaciente extends Component {
    state = {
	    pacient: [],
 	};

 	componentWillMount(){
 		this.setState({
 			pacient: [
 				'Brian Nájera',
 				'Eduardo Martínez',
 				'Andrea Olarte',
 				4,
 				5
 			]
 		});
     }
     
     render(){
         return(
            <GroupInfoContainer>
            	<GroupInfoSection>
					<ReviewPaciente foto={require('../assets/icons/Brian.png')} paciente={this.state.pacient[0]} btnEdit={this.props.btnEdit} btnDelete={this.props.btnDelete} screen={this.props.screen}/>
				</GroupInfoSection>
				<GroupInfoSection>
					<ReviewPaciente foto={require('../assets/icons/Lalo.jpeg')} paciente={this.state.pacient[1]} btnEdit={this.props.btnEdit} btnDelete={this.props.btnDelete} screen={this.props.screen}/>
				</GroupInfoSection>
				<GroupInfoSection>
					<ReviewPaciente foto={require('../assets/icons/Andrea.jpeg')} paciente={this.state.pacient[2]} btnEdit={this.props.btnEdit} btnDelete={this.props.btnDelete} screen={this.props.screen}/>
				</GroupInfoSection>
        	</GroupInfoContainer>
         );
     }
}

export default GroupReviewPaciente;
