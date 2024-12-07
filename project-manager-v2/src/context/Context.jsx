import { createContext } from "react";

const Context = createContext({
    projects: [],
    pageState: 'Home',
    changePage: () => {},
    saveProject: () => {},
    showModal: false,
    currentProject: null,
    deleteProject: () => {},
    saveTask: () => {},
    deleteTask: () => {}
});

export default Context;
