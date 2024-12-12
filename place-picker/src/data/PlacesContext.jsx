import { createContext } from "react";

const PlacesContext = createContext({
    availablePlaces: [],
    pickedPlaces: [],
    addPlaceToPickedPlaces: () => {},
    removePlaceOnPickedPlaces: () => {},
    showModal: () => {},
    closeModal: () => {},
    confirmRemovePlace: () => {},
    sortAvailablePlacesByDistance: () => {},
    sortedPlaces: []
});

export default PlacesContext
