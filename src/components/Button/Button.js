import "./Button.css";

function Button (properties) {
    console.log(properties.data);
    const buttonOptions = properties.data;
    const buttonStyles = {
                            color:buttonOptions.color,
                            backgroundColor: buttonOptions.backgroundColor
                        }
    return (
        <button 
            className="buttonOptions.className" 
            id="buttonOptions.id"
            style= {buttonStyles}
        > { buttonOptions.buttonText  }
        </button>
    );
}

export default Button;