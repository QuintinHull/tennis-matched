import { fetch } from "./csrf";

const LOAD = "location/LOAD";

const load = (locations) => ({
  type: LOAD,
  locations,
});

export const getLocations = () => async (dispatch) => {
  const response = await fetch(`/api/locations`);
  if (response.ok) {
    const locations = await response.data;
    dispatch(load(locations));
  }
};

const locationReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      const newState = { ...state };
      action.locations.forEach((location) => {
        newState[location.id] = location;
      });
      return newState;
    default:
      return state;
  }
};

export default locationReducer;
