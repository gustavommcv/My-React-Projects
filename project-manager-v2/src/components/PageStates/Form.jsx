import Input from "../Input";

import { useContext, useRef } from 'react';
import Context from '../../context/context';

function Form() {

    const { changePage, saveProject } = useContext(Context);
    
    const titleInput = useRef();
    const descriptionInput = useRef();
    const dateInput = useRef();

    return(
        <div className="flex flex-col gap-5 w-full max-w-2xl py-16 px-8 mt-8">
            <div className="self-end flex gap-4">
                <button onClick={() => changePage('Home')}>Cancel</button>
                <button onClick={() => saveProject(titleInput.current.value, descriptionInput.current.value, dateInput.current.value)} className="border-transparent bg-stone-700 px-4 py-2 rounded-md text-stone-400 hover:bg-stone-600 hover:text-stone-100">Save</button>
            </div>
            
            <form className="flex flex-col">
                <Input ref={titleInput} type="text">Title</Input>
                <Input ref={descriptionInput} type="textarea">Description</Input>
                <Input ref={dateInput} type="date">Due Date</Input>
            </form>
        </div>
    );
}

export default Form;
