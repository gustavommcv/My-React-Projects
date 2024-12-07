/* eslint-disable react/prop-types */

import './CoreConcept.css';

export default function CoreConcept(props) {
    return (
        <li className="core-concept">
            <img className="core-concept__image" src={props.image} alt={props.title} />
            <h3 className="core-concept__title">{props.title}</h3>
            <p className="core-concept__description">{props.description}</p>
        </li>
    );
}
