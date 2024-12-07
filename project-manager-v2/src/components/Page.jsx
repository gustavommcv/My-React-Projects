import Home from "./PageStates/Home";

import { useContext } from "react";
import Context from "../context/context";
import Form from "./PageStates/Form";
import Project from "./PageStates/Project";

function Page() {
    const { pageState, currentProject } = useContext(Context);

    if (pageState === 'Form') {
        return <Form />
    }

    if (pageState === 'Project') {
        return <Project currentProjectId={currentProject} />
    }

    return <Home />;

}

export default Page;
