import { useRef, useState } from "react";
import { AVAILABLE_PLACES } from "../data";
import PlacesContext from "./PlacesContext";
import Modal from "../components/Modal";
import { sortPlacesByDistance } from "../loc";

// eslint-disable-next-line react/prop-types
function PlacesContextProvider({ children }) {

    const modal = useRef();

    const [availablePlaces] = useState(AVAILABLE_PLACES);
    const [sortedPlaces, setSortedPlaces] = useState([]);
    const [pickedPlaces, setPickedPlaces] = useState([]);
    const [placeToRemove, setPlaceToRemove] = useState(null);

    function showModal() { modal.current.showModal(); }

    function closeModal() { modal.current.close(); }

    function handleAddPickedPlace(id) {
        if (pickedPlaces.some(place => place.id === id)) return;
        
        setPickedPlaces(prevArr => [...prevArr, availablePlaces.find(place => place.id === id)]);
    }

    function handleRemovePickedPlace(id) {
        setPlaceToRemove(id);
        showModal();
    }

    function confirmRemovePlace() {
        setPickedPlaces(prevArr => prevArr.filter(place => place.id !== placeToRemove));
        setPlaceToRemove(null);
        closeModal();
    }

    function sortAvailablePlacesByDistance(lat, lon) {
        const sorted = sortPlacesByDistance(availablePlaces, lat, lon);
        setSortedPlaces(sorted);
    }

    const ctxValue = {
        availablePlaces: availablePlaces,
        sortedPlaces: sortedPlaces,
        pickedPlaces: pickedPlaces,
        addPlaceToPickedPlaces: handleAddPickedPlace,
        removePlaceOnPickedPlaces: handleRemovePickedPlace,
        showModal: showModal,
        closeModal: closeModal,
        confirmRemovePlace: confirmRemovePlace,
        sortAvailablePlacesByDistance: sortAvailablePlacesByDistance
    }

    return <PlacesContext.Provider value={ctxValue}>
        <Modal ref={modal} />
        { children }
    </PlacesContext.Provider>
}

export default PlacesContextProvider;
