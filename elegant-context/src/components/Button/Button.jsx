/* eslint-disable react/prop-types */
import './Button.scss';

function Button({ children, classN, onClick }){
    return (
        <button onClick={onClick} className={`custom-button ${classN}`}>{children}</button>
    );
}

export default Button;
