import React from 'react';

const Title = (props) => {
    return(
        <div style={styles.viewStyle}>
            <p style={styles.textStyle}> {props.titleText} </p>
        </div>
    );
};

const styles = {
	viewStyle:{
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 20,
		position: 'relative'
	},
	textStyle: {
		fontSize: 40,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#3DB07E'
	}
};

export default Title;