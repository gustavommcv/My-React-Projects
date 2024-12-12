import PlacesContainer from "./PlacesContainer";

/* eslint-disable react/prop-types */
function PlacesList({ title }) {

    return (
        <div className="flex flex-col items-center border border-cyan-800 rounded mx-6 p-6 mb-8">
            <h2 className="text-cyan-300 font-bold text-2xl mb-5">{title}</h2>
            {title === 'Available Places' ? 
            <PlacesContainer type={'all'} /> 
            : 
            <PlacesContainer type={'picked'} />}
        </div>
    );
}

export default PlacesList;
