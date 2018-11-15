import React from 'react';

const GroupButtonContainerUp = (props) => {
	return (
		<div style={ {backgroundColor: props.color, paddingBottom:10, borderRadius: 8, shadowColor:'black', shadowOffset: { width: 0, height: 3}, shadowOpacity: 0.2, elevation: 2}}>
			{props.children}
		</div>
	);
};

export default GroupButtonContainerUp;
