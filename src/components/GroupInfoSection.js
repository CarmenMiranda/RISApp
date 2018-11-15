import React from 'react';

const GroupInfoSection = (props) => {
	return (
		<div style={styles.containerStyle}>
			{props.children}
		</div>
	);
};

const styles = {
	containerStyle: {
		paddingLeft: 20,
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
		position: 'relative'
	}
}
export default GroupInfoSection;