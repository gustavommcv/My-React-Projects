/* eslint-disable react/prop-types */
import logo from '../assets/logo.png';

function Header({ title, description }) {
    return (
        <header className="flex flex-col items-center gap-5 text-center py-8">
            <img src={logo} alt="Logo" className='w-20 h-20 object-cover' />
            <h1 className='uppercase tracking-widest font-semibold text-cyan-100 text-5xl'>{title}</h1>
            <p className='mx-auto text-stone-400 w-96'>{description}</p>
        </header>
    );
}

export default Header;
