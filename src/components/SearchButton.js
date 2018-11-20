import React from 'react';

const SearchButton = (props) =>{
    return(
        <div style={styles.searchContainer}>
            <input style={styles.input} placeholder={props.placeHolderText}></input>
        </div>
    );
}

const styles={
    searchContainer:{
        backgroundColor: 'transparent',
        shadowColor:'black',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        elevation: 2,
        borderWidth: 2,
        borderColor: '#52D89E',
        borderRadius: 8,
        marginBottom: 20,
        display: 'flex',
        justifyContent: 'center'
    },
    input:{
        backgroundColor: '#F0F0F0',
        borderRadius: 20,
        fontSize: 17,
        color:'#424242',
        paddingLeft: 10, 
        width: 300,
    }
}

export default SearchButton;