import React from 'react';

const GroupButtonSection = (props) =>{
    return(
        <button style={styles.containerStyle}>
            {props.children}
        </button>
    );
};

const styles = {
	containerStyle: {
		paddingLeft: 10,
		paddingTop: 10,
		paddingBottom: 10,
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
		position: 'relative',
		backgroundColor: 'transparent',
		minWidth: 150,
		border: 'none',
		cursor:'pointer',
		width: '100%',
	}
}
export default GroupButtonSection;