import { fetch } from "./csrf";

const LOAD = "members/LOAD";

const load = (members) => ({
  type: LOAD,
  members,
});

export const getMembers = (id) => async (dispatch) => {
  const response = await fetch(`/api/members/${id}`);
  console.log("------store---->");
  if (response.ok) {
    const members = await response.data;
    dispatch(load(members));
  }
};

const memberReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      const newState = { ...state };
      action.members.forEach((member) => {
        newState[member.userId] = member;
      });
      return newState;
    default:
      return state;
  }
};

export default memberReducer;
