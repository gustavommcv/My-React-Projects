/* eslint-disable react/prop-types */
function Header({title, description}) {
    // Separando o título em palavras
    const words = title.split(' ');

    return (
        <header className="flex flex-col items-center mb-4 gap-1 text-center mt-10">
            <h1 className="font-pixel text-4xl font-semibold uppercase text-gray-200">
                {words[0]}{' '}

                {words[1] && <span className="text-cyan-300">{words[1]}</span>}{' '}

                {words.slice(2).join(' ')}
            </h1>
            <p className="text-base text-gray-200 tracking-wide font-verdana">{description}</p>
        </header>
    );
}

export default Header;
