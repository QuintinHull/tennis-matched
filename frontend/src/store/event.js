import { fetch } from "./csrf";

const LOAD = "event/LOAD";
const LOAD_ONE = "event/LOAD_ONE";

const load = (events) => ({
  type: LOAD,
  events,
});

const loadOne = (event) => ({
  type: LOAD_ONE,
  event,
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

export const getOneEvent = (id) => async (dispatch) => {
  const response = await fetch(`/api/events/view/${id}`);

  if (response.ok) {
    const event = await response.data;
    dispatch(loadOne(event));
  }
};

export const getEventsBySkill = (id) => async (dispatch) => {
  const response = await fetch(`/api/events/skill/${id}`);
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
    case LOAD_ONE:
      const event = action.event;
      newState[event.id] = event;
      return newState;
    default:
      return state;
  }
};

export default eventReducer;
