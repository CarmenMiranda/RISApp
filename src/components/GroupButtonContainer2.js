import React from 'react';

const GroupButtonContainer2 = (props) =>{
    return(
        <div style={{backgroundColor: props.color, borderRadius: 8}}>
            {props.children}
        </div>
    );
}

export default GroupButtonContainer2;