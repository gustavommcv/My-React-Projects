import Logo from '../../assets/react-core-concepts.png'
import './Header.css';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const dynamicDesc = ["Fundamental", "Crucial", "Core"];

export default function Header() {
    return(
        <header className="header">
            <img className="header__logo" src={Logo} alt="react-core-concepts" />
            <h1 className="header__title">React Essentials</h1>
            {/* Dinamic content .Fundamental .Crucial .Core */}
            <p className="header__description">{dynamicDesc[getRandomInt(3)]} React concepts you will need for almost any app you are going to build!</p>
        </header>
    );
}
