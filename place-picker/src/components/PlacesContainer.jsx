/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import PlacesContext from "../data/PlacesContext";

function PlacesContainer({ type }) {
  const { sortedPlaces, pickedPlaces, addPlaceToPickedPlaces, removePlaceOnPickedPlaces, sortAvailablePlacesByDistance } = useContext(PlacesContext);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      sortAvailablePlacesByDistance(position.coords.latitude, position.coords.longitude)
    }, (error) => console.error("Error getting location:", error));
  }, [sortAvailablePlacesByDistance]);

  const context = 
    type === 'all'
      ? { type: 'all', places: sortedPlaces, message: 'Loading' }
      : { type: 'picked', places: pickedPlaces, message: 'Select the places you would like to visit below.' };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

    {context.places.length > 0 ? 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {context.places.map(place => (
            <div 
                key={place.id} 
                className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={context.type === 'all' ? () => addPlaceToPickedPlaces(place.id) : () => removePlaceOnPickedPlaces(place.id)}
            >
                <img
                className="w-full h-48 object-cover"
                src={place.image.src}
                alt={place.title}
                />
                <div className="absolute bottom-3 left-3 bg-yellow-500 text-gray-900 text-sm font-semibold px-2 py-1 rounded-md shadow">
                {place.title}
                </div>
            </div>
            ))}
        </div>
        :
        <p className="text-stone-300 mb-5 text-center">
            {context.message}
        </p>
    }

    </div>
  );
}

export default PlacesContainer;
