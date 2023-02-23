import React from 'react';

const Scroll = (props) => {
    
    return (

        <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}> {/* A double bracket as the outer one means a java script expression, the inner one meaning an object */}
            {props.children} {/* Here we are saying just dislay the children of Scroll */}
        </div>
    )
};

export default Scroll;
