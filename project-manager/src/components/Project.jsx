import React from "react";
import Task from "../model/Task";

/* eslint-disable react/prop-types */
function Project({ currentProject, setProjects, onClickDelete }) {
    const [tasks, setTasks] = React.useState(currentProject ? currentProject.tasks : []);
    const taskInput = React.useRef();

    // Atualiza o estado de tasks quando o currentProject mudar
    React.useEffect(() => {
        if (currentProject) {
            setTasks(currentProject.tasks);
        }
    }, [currentProject]);

    function handleClickDelete() {
        setProjects(prevProjects => prevProjects.filter(project => project.id !== currentProject.id));
        onClickDelete();
    }

    function handleDeleteTask(taskId) {
        setTasks(prevTasks => {
            const updatedTasks = prevTasks.filter(task => task.id !== taskId);

            setProjects(prevProjects => prevProjects.map(project => {
                if (project.id === currentProject.id) {
                    return { ...project, tasks: updatedTasks };
                }
                return project;
            }));

            return updatedTasks;
        });
    }

    function handleClickCreateTask() {
        if (!taskInput.current.value) return;

        const newTask = new Task(taskInput.current.value);

        setTasks(prevTasks => {
            const updatedTasks = [...prevTasks, newTask];

            setProjects(prevProjects => prevProjects.map(project => {
                if (project.id === currentProject.id) {
                    return { ...project, tasks: updatedTasks };
                }
                return project;
            }));

            return updatedTasks;
        });

        taskInput.current.value = '';
    }

    return (
        <div className="flex flex-col gap-3 w-full max-w-2xl py-16 px-8 mt-8">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold text-stone-600">{currentProject.title}</h1>    
                <button onClick={handleClickDelete} className="text-stone-500 hover:text-stone-800">Delete</button>
            </div>
            <p className="text-stone-400">{currentProject.date}</p>
            <p>{currentProject.description}</p>

            <hr />

            <h2 className="text-2xl font-semibold text-stone-700">Tasks</h2>
            <div className="flex items-center">
                <input ref={taskInput} type="text" className="bg-stone-200 outline-none focus-within:border-b-stone-500 max-w-64 w-full mr-5 h-8 py-1 px-2" />
                <button onClick={handleClickCreateTask} className="text-stone-700 hover:text-stone-800">Add Task</button>
            </div>
            
            <div>
                {tasks.length > 0 ? 
                    tasks.map(task => (
                        <div className="flex w-full justify-between bg-stone-100 py-4 px-4 border border-transparent border-b-stone-300 mb-2" key={task.id}>
                            <p>{task.title}</p>
                            <button 
                                className="text-stone-600"
                                onClick={() => handleDeleteTask(task.id)}
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
