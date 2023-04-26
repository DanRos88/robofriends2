import React from "react";

const Scroll = (props) => {
    return (
        <div style={{msOverflowY: 'scroll', border: '1px solid black'}}>
            {props.children}
        </div>
    )
}

export default Scroll;