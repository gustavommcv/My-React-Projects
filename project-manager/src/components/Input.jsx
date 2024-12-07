import { forwardRef } from "react";

/* eslint-disable react/prop-types */

const Input = forwardRef(
    function Input({ type, children }, ref) {
        return(
            <>
                <label className="cursor-pointer uppercase text-sm font-semibold text-stone-500 mb-1" htmlFor={`${type}${children}`}>{children}</label>
    
                {type === 'textarea' ? (
                <textarea
                    name=""
                    id={`${type}${children}`}
                    className="bg-stone-200 border border-b-stone-300 border-b-2 p-1 outline-none focus-within:border-b-stone-500 mb-4"

                    ref={ref}
                ></textarea>
                ) : (
                <input
                    className="bg-stone-200 border border-b-stone-300 border-b-2 p-1 outline-none focus-within:border-b-stone-500 mb-4"
                    type={type}
                    id={`${type}${children}`}

                    ref={ref}
                />
                )}
            </>
        );
    }
)



export default Input;
