import React from "react";

function UserNameInput() {
    const input = React.useRef();

    const [userName, setUserName] = React.useState('');

    function handleClick(event) {
        event.preventDefault();

        setUserName(input.current.value);

        input.current.value = '';
    }

    return(
        <div className="flex flex-col gap-4 items-center mb-20">
            <h2 className={`text-teal-500 font-semibold text-2xl tracking-wide`}>Welcome {userName || 'unkown entity'}</h2>

            <form action="" className="flex">
                <input type="text" ref={input} className={`p-2 rounded-l-md border border-teal-500 text-gray-300 bg-teal-900 h-7 outline-none`} />
                <button onClick={(event) => handleClick(event)} type="submit" className={`px-4 bg-teal-500 text-xs rounded-r-md border border-teal-500 h-7`}>Set Name</button>
            </form>
        </div>
    );
}

export default UserNameInput;
