/* eslint-disable react/prop-types */
import logo from '../assets/no-projects.png';

function MainDisplay({onClick}) {
    return (
        <div className='flex flex-col m-auto items-center h-fit py-16 px-8 mt-8'>
            <img src={logo} alt="Logo" className='w-16 h-16 object-cover mb-6' />

            <h2 className='text-xl text-stone-500 font-semibold mb-4'>No Project Selected</h2>
            <p className='text-stone-400 mb-8'>Select a project or get started with a new one</p>

            <button onClick={onClick} className='border-transparent bg-stone-700 px-4 py-2 rounded-md text-stone-400 hover:bg-stone-600 hover:text-stone-100'>Create new project</button>
        </div>
    );
}

export default MainDisplay;
