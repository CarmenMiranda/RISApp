import React from 'react';

const GroupReviewPacienteSection = (props) => {
	return (
		<div style={styles.containerStyle}>
			{props.children}
		</div>
	);
};

const styles = {
	containerStyle: {
		marginTop:10,
		paddingLeft: 10,
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
		position: 'relative',
	}
}
export default GroupReviewPacienteSection;