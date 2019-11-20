import React from 'react'


function Button (props){
    const buttonText = props.direction === "Next" ? "Next >" : "< Previous"
    return (<div>

        <button 
        onClick={ () => props.changeCard(props.direction)}
        >
        {buttonText}
        </button>

    </div>)

}

export default Button;