import { useContext } from "react";
import PlacesContext from "../data/PlacesContext";

/* eslint-disable react/prop-types */
function Modal({ ref }) {

    const { closeModal, confirmRemovePlace  } = useContext(PlacesContext);

    return (
        <dialog
            ref={ref}
            className="backdrop:bg-black/50 rounded-lg border border-gray-300 p-6 bg-[#d8c5b0]"
        >
            <h3 className="text-lg font-semibold text-[#7c231d] mb-3">
                Are you sure?
            </h3>
            <p className="text-sm text-gray-800 mb-5">
                Do you really want to remove this place?
            </p>
            <div className="flex justify-end gap-4">
                <button
                    className="px-4 py-2 text-sm bg-transparent border-none text-gray-800 hover:underline"
                    onClick={() => closeModal()}
                >
                    No
                </button>
                <button
                    className="px-4 py-2 text-sm bg-[#7c231d] text-white rounded shadow hover:bg-[#5f1b14] focus:ring focus:ring-red-400"
                    onClick={confirmRemovePlace}
                >
                    Yes
                </button>
            </div>
        </dialog>
    );
}

export default Modal;
