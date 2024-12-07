/* eslint-disable react/prop-types */
import './ExampleButton.css';

export default function ExampleButton({isSelected, children, ...props}) {
    return (
        <li>
            <button className={isSelected ? "button button--example active" : "button button--example"} 
            {...props}>
                {children}
            </button>
        </li>
    );
}
