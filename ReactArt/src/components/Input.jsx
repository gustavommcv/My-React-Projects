/* eslint-disable react/prop-types */
function Input({ type, children, invalid, ...props }) {

    let labelClass = "uppercase text-xs font-bold";
    let inputClass = "h-10 rounded border px-3";

    if (invalid) {
        labelClass += " text-red-400";
        inputClass += " border-red-500 bg-red-100"
    } else {
        labelClass += " text-gray-300";
        inputClass += " bg-gray-200";
    }

    return (
        <p className="flex flex-col gap-2 w-80 mb-2">
            <label className={labelClass} htmlFor={`${children}-input`}>{children}</label>
            <input {...props} className={inputClass} type={type} id={`${children}-input`} />
        </p>
    );
}

export default Input;
