import React from 'react';

const Subtitle = () => {
	return (

		<div style={styles.lineStyle}>
		</div>

	);
};

const styles = {
	lineStyle:{
		alignItems: 'center',
		marginTop: 15,
		marginBottom: 15, //para línea arriba del subtítulo
		marginLeft: 35,
		marginRight: 35,
		position: 'relative',
		backgroundColor: '#B3B3B3',
		height: 1,
	}
};

export default Subtitle;