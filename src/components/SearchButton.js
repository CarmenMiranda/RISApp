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
        backgroundColor: '#F0F0F0',
        shadowColor:'black',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        elevation: 2,
        borderWidth: 2,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#52D89E',
        borderTopColor: '#52D89E',
        borderBottomColor: '#52D89E',
        borderRadius: 8,
        marginBottom: 20,
        paddingRight: 30,
        flex:1
    },
    input:{
        backgroundColor: 'transparent',
        borderRadius: 20,
        fontSize: 17,
        color:'#424242',
        paddingLeft: 10
    }
}

export default SearchButton;