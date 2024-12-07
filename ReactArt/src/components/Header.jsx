/* eslint-disable react/prop-types */
function Header({ title, description, logo }) {
    return (
        <header className="mx-auto flex flex-col items-center p-14">
        <img src={logo} alt="logo" className="w-44 h-44 object-contain mb-8" />
            <h1 className="text-amber-800 font-semibold text-4xl uppercase font-title tracking-widest">{title}</h1>
            <p className="text-gray-500">{description}</p>
        </header>
    );
}

export default Header;
