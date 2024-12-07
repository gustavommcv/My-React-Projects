/* eslint-disable react/prop-types */
import { useContext, useRef } from "react";
import Context from "../../context/context";

function Project({ currentProjectId }) {

    const { projects, deleteProject, saveTask, deleteTask } = useContext(Context);

    const selectedProject = projects.find(project => project.id === currentProjectId);

    const input = useRef();

    return (
        <div className="flex flex-col gap-3 w-full max-w-2xl py-16 px-8 mt-8">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold text-stone-600">{selectedProject.title}</h1>    
                <button onClick={() => deleteProject(selectedProject.id)} className="text-stone-500 hover:text-stone-800">Delete</button>
            </div>
            <p className="text-stone-400">{selectedProject.date}</p>
            <p>{selectedProject.description}</p>

            <hr />

            <h2 className="text-2xl font-semibold text-stone-700">Tasks</h2>
            <div className="flex items-center">
                <input ref={input} type="text" className="bg-stone-200 outline-none focus-within:border-b-stone-500 max-w-64 w-full mr-5 h-8 py-1 px-2" />
                <button className="text-stone-700 hover:text-stone-800" 
                    onClick={() => {
                        saveTask(selectedProject.id, input.current.value)
                        input.current.value = '';
                    }}
                >Add Task</button>
            </div>
            
            <div>
                {selectedProject.tasks.length > 0 ? 
                    selectedProject.tasks.map(task => (
                        <div className="flex w-full justify-between bg-stone-100 py-4 px-4 border border-transparent border-b-stone-300 mb-2" key={task.id}>
                            <p>{task.title}</p>
                            <button 
                                className="text-stone-600"
                                onClick={() => deleteTask(selectedProject.id, task.id)}
                            >
                                Clear
                            </button>
                        </div>
                    )) 
                    :
                    <p className="text-stone-700">This project does not have any tasks yet.</p>
                }
            </div>
        </div>
    );
}

export default Project;
