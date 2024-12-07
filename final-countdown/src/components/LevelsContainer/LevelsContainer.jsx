/* eslint-disable react/prop-types */
function LevelsContainer({children}) {
    return (
        <div className="flex gap-16 flex-wrap justify-center mb-20">
            {children}
        </div>
    );
}

export default LevelsContainer;
