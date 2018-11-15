import React from 'react';
import GroupButtonContainer2 from './GroupButtonContainer2';
import GroupButtonSection from './GroupButtonSection';
import GroupInfo from './GroupInfo';

const GroupButton2 = (props) => {
    return(
        <GroupButtonContainer2 color={props.bgColor}>
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
        </GroupButtonContainer2>
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
		marginBottom: 0,
	},
	arrow: {
		width: 13,
		height: 13
	}
}

export default GroupButton2;
