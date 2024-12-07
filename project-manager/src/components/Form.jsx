/* eslint-disable react/prop-types */
import React from "react";
import Input from "./Input";
import Modal from './Modal';
import Project from "../model/Project";

function Form({ onClick, setProjects }) {
    const titleInput = React.useRef();
    const descriptionInput = React.useRef();
    const dateInput = React.useRef();

    const modal = React.useRef();

    function handleClick() {
        const title = titleInput.current.value.trim();
        const description = descriptionInput.current.value.trim();
        const date = dateInput.current.value.trim();

        if (!title || !description || !date) {
            modal.current.showModal();
            return;
        }

        setProjects((current) => [
            ...current,
            new Project(title, description, date)
        ]);

        onClick();
    }

    return(
        <div className="flex flex-col gap-5 w-full max-w-2xl py-16 px-8 mt-8">
            <Modal ref={modal} />

            <div className="self-end flex gap-4">
                <button onClick={onClick}>Cancel</button>
                <button className="border-transparent bg-stone-700 px-4 py-2 rounded-md text-stone-400 hover:bg-stone-600 hover:text-stone-100"
                
                onClick={handleClick}
                >Save</button>
            </div>
            
            <form action="" className="flex flex-col">
                <Input type="text" ref={titleInput}>Title</Input>
                <Input type="textarea" ref={descriptionInput}>Description</Input>
                <Input type="date" ref={dateInput}>Due Date</Input>
            </form>
        </div>
    );
}

export default Form;
