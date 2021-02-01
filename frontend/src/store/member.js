import { fetch } from "./csrf";

const LOAD = "members/LOAD";
const ADD_ONE = "members/ADD_ONE";

const load = (members) => ({
  type: LOAD,
  members,
});

const addOne = (newMember) => ({
  type: ADD_ONE,
  newMember,
});

export const getMembers = (id) => async (dispatch) => {
  const response = await fetch(`/api/members/${id}`);
  if (response.ok) {
    const members = await response.data;
    dispatch(load(members));
  }
};

export const addMember = (payload) => async (dispatch) => {
  const response = await fetch(`/api/members`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (response.ok) {
    const newMember = await response.data;
    dispatch(addOne(newMember));
    return newMember;
  }
};

const memberReducer = (state = {}, action) => {
  let newState = { ...state };
  switch (action.type) {
    case LOAD:
      action.members.forEach((member) => {
        newState[member.userId] = member;
      });
      return newState;
    case ADD_ONE:
      const addedMember = action.newMember;
      newState[addedMember.id] = addedMember;
      return newState;
    default:
      return state;
  }
};

export default memberReducer;
