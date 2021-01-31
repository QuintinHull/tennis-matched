import { fetch } from "./csrf";

const LOAD = "event/LOAD";

const load = (events) => ({
  type: LOAD,
  events,
});

export const getEvents = () => async (dispatch) => {
  const response = await fetch(`/api/events`);

  if (response.ok) {
    const events = await response.data;
    dispatch(load(events));
  }
};

export const getGroupEvents = (id) => async (dispatch) => {
  const response = await fetch(`/api/events/${id}`);
  if (response.ok) {
    const events = await response.data;
    dispatch(load(events));
  }
};

const eventReducer = (state = {}, action) => {
  let newState = { ...state };
  switch (action.type) {
    case LOAD:
      action.events.forEach((event) => {
        newState[event.id] = event;
      });
      return newState;
    default:
      return state;
  }
};

export default eventReducer;
