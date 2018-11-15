import React from 'react';
import GroupButtonContainer from './GroupButtonContainer';
import GroupButtonSection from './GroupButtonSection';
import GroupInfo from './GroupInfo';

const GroupButton = (props) => {
    return(
        <GroupButtonContainer color={props.bgColor}>
			<GroupButtonSection>
				<div style={styles.container}>
					<div style={styles.titleContainer}>
						<p style={styles.textTitle}>{props.buttonText}</p>
					</div>
					<div style={styles.arrowContainer}>
						<img style={styles.arrow} src={require('../assets/icons/ArrowDown.png')} />
					</div>
				</div>
			</GroupButtonSection>
        </GroupButtonContainer>
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
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	textTitle: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20,
		marginBottom: 0
	},
	arrow: {
		width: 13,
		height: 13
	}
}

export default GroupButton;
