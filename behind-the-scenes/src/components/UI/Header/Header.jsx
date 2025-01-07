import logo from '../../../assets/logo.png';
import { log } from '../../../log';

import './Header.scss';

export default function Header() {
    log('<Header /> rendered', 1);

    return (
        <header className='header'>
            <img className='header__logo' src={logo} alt="" />
            <h1 className='header__title'>React - Behind The Scenes</h1>
        </header>
    );
}
