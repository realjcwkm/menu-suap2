import "./Button.css";

function Button( { text, type } ){
    return(
        <button className={type}>
            {text}
        </button>
    );
}

export default Button;