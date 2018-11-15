import React from 'react';

const GroupInfoContainer = (props) => {
	return (
		<div style={styles.containerStyle}>
			{props.children}
		</div>
	);
};

const styles = {
	containerStyle: {
		backgroundColor: '#BDF6DD',
		shadowColor:'black',
		shadowOffset: { width: 0, height: 5},
		shadowOpacity: 0.2,
		elevation: 2,
		borderRadius: 8,
		marginLeft: 7,
		marginRight: 7,
		marginBottom: 7,
		paddingTop: 15,
		paddingBottom: 15
	}
}
export default GroupInfoContainer;
