import React from "react";

function Main(props){
    return(
        <div {...props}>
            {props.children}
        </div>
    )
}

export default Main;