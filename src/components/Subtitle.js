import React from 'react';

const Subtitle = (props) => {
    return (
        <div style={styles.viewStyle}>
            <p style={styles.textStyle}>{props.subtitleText}</p>
        </div>
    );
};

const styles = {
	viewStyle:{
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
		position: 'relative'
	},
	textStyle: {
		fontSize: 22,
		fontWeight: 'normal',
		textAlign: 'center',
		color: '#3E8E6B'
	}
};

export default Subtitle;