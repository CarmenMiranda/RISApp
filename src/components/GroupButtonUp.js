import React from 'react';
import GroupButtonContainerUp from './GroupButtonContainerUp';
import GroupButtonSection from './GroupButtonSection';
import GroupInfo from './GroupInfo';
import GroupReviewPaciente from './GroupReviewPaciente';

const GroupButtonUp = (props) => {
    const groupInfoType = () =>{
        if(props.option == 'option'){
            return (<GroupInfo buttonText = {'Frutos rojos'}/>)
        }
        else{
            return (<GroupReviewPaciente btnEdit={props.btnEdit} btnDelete={props.btnDelete} screen={props.screen} />);
        }
    }

    return(
        <GroupButtonContainerUp color={props.bgColor}>
			<GroupButtonSection>
				<div style={styles.container}>
					<div style={styles.titleContainer}>
						<p style={styles.textTitle}>{props.buttonText}</p>
					</div>
					<div style={styles.arrowContainer}>
						<img style={styles.arrow} src={require('../assets/icons/ArrowUp.png')} />
					</div>
				</div>
			</GroupButtonSection>
            {groupInfoType()}
        </GroupButtonContainerUp>
    );
};

const styles = {
	container:{
		display:'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	arrowContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 45,
	},
	titleContainer:{
		display:'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	textTitle: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20,
		marginBottom: 0,
	},
	arrow: {
		width: 13,
		height: 13
	}
}

export default GroupButtonUp;