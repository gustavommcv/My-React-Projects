/* eslint-disable react/prop-types */
function Sidebar({ onClick, projects, onProjectClick }) {
    return(
        <aside className="bg-stone-900 md:max-w-64 max-w-48 w-full rounded-tr-xl rounded-br-xl mt-8 mb-8 h-screen py-12 px-8">
            <h2 className="text-white text-sm md:text-lg uppercase mb-8">Your Projects</h2>

            <button onClick={onClick} className="border-transparent bg-stone-700 px-4 py-2 rounded-md text-stone-400 hover:bg-stone-600 hover:text-stone-100 text-xs md:text-base mb-8">+ Add Project</button>

            <ul>
                {projects.map((project) => (
                    <li onClick={() => onProjectClick(project.id)} data-id={project.id} className="text-stone-500 rounded cursor-pointer hover:bg-stone-800 hover:text-stone-300 px-2 py-1 mb-1" key={project.id}><button>{project.title}</button></li>
                ))}
            </ul>

        </aside>
    );
}

export default Sidebar;
