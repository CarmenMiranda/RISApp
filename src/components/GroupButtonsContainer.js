import React from 'react';

const GroupButtonContainer = (props) => {
	return (
		<div style={styles.containerStyle}>
			{props.children}
		</div>
	);
};

const styles = {
	containerStyle: {
		backgroundColor: 'transparent',
		borderRadius: 8,
		width: 450,
		marginLeft: 'auto',
		marginRight: 'auto',
	}
}
export default GroupButtonContainer;
