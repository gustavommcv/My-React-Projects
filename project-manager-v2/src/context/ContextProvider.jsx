/* eslint-disable react/prop-types */
import { useReducer, useRef } from "react";
import Context from "./context";

import Modal from "../components/Modal";

function reducer(state, action) {
    if (action.type === "changePage") {

        if(action.payload.page === 'Project') {
            return {
                ...state,
                pageState: action.payload.page,
                currentProject: action.payload.id
            }
        }

        return {
            ...state,
            pageState: action.payload.page,
        };
    }

    if (action.type === "saveProject") {
        if (!action.payload.title || !action.payload.description || !action.payload.date) {
            return {
                ...state,
                showModal: true
            };
        }

        return {
            ...state,
            projects: [
                ...state.projects,
                {
                    id :crypto.randomUUID(),
                    title: action.payload.title,
                    description: action.payload.description,
                    date: action.payload.date,
                    tasks: []
                },
            ],
            showModal: false,
            pageState: 'Home'
        };
    }

    if (action.type === "deleteProject") {
        return {
            ...state,
            pageState: 'Home',
            currentProject: null,
            projects: state.projects.filter(project => project.id !== action.payload.id)
        };
    }

    if (action.type === "saveTask") {
        const updatedProjects = state.projects.map(project => {
            if (project.id === action.payload.id) {
                return {
                    ...project,
                    tasks: [
                        ...project.tasks,
                        {
                            id: crypto.randomUUID(),
                            title: action.payload.title
                        }
                    ]
                };
            }
            return project;
        });

        return {
            ...state,
            projects: updatedProjects
        };
    }

    if (action.type === "deleteTask") {
        const updatedProjects = state.projects.map(project => {
            if (project.id === action.payload.projectId) {
                return {
                    ...project,
                    tasks: project.tasks.filter(task => task.id !== action.payload.taskId)
                };
            }
            return project;
        });

        return {
            ...state,
            projects: updatedProjects
        };
    }

    return state;
}

function ContextProvider({ children }) {

    const modal = useRef();

    const [state, dispatch] = useReducer(reducer, {
        projects: [],
        pageState: "Home",
        showModal: false,
        currentProject: null
    });

    function handlePageChange(page, id) {
        dispatch({
            type: "changePage",
            payload: { 
                page: page,
                id: id
            },
        });
    }

    function handleSave(title, description, date) {
        dispatch({
            type: "saveProject",
            payload: { 
                title: title, 
                description: description, 
                date: date
            },
        });
    }

    function handleDelete(id) {
        dispatch({
            type: "deleteProject",
            payload: {
                id: id
            }
        });
    }

    function handleSaveTask(id, title) {
        dispatch({
            type: "saveTask",
            payload: {
                id: id,
                title: title
            }
        });
    }

    function handleDeleteTask(projectId, taskId) {
        dispatch({
            type: "deleteTask",
            payload: {
                projectId: projectId,
                taskId: taskId
            }
        });
    }

    function handleShowModal() {
        modal.current.showModal();
    }

    function handleCloseModal() {
        modal.current.close();
    }

    const ctxValue = {
        projects: state.projects,

        pageState: state.pageState,
        changePage: handlePageChange,
        
        saveProject: handleSave,
        deleteProject: handleDelete,

        saveTask: handleSaveTask,
        deleteTask: handleDeleteTask,

        showModal: state.showModal,

        currentProject: state.currentProject
    };

    if (state.showModal) {
        handleShowModal();
        state.showModal = false;
    }

    return (
        <Context.Provider value={ctxValue}>
            <Modal ref={modal} closeModal={handleCloseModal} />
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;
