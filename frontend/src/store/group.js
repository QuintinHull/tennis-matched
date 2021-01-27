import { fetch } from "./csrf";

const LOAD = "group/LOAD";

// const ADD_ONE = "group/ADD_GROUP";
// const EDIT_ONE = "group/EDIT_GROUP";
// const REMOVE_ONE = "group/REMOVE_GROUP";

const load = (groups) => ({
  type: LOAD,
  groups,
});

// const addOneGroup = (newGroup) => ({
//   type: ADD_ONE,
//   newGroup,
// });

// const editOneGroup = (updatedGroup) => ({
//   type: EDIT_ONE,
//   updatedGroup,
// });

// const removeOneGroup = (groupId) => ({
//   type: REMOVE_ONE,
//   groupId,
// });

export const getGroups = () => async (dispatch) => {
  const response = await fetch(``);

  if (response.ok) {
    const groups = await response.json();
    dispatch(load(groups));
  }
};

// export const getOneGroup = () => async (dispatch) => {
//   const response = await fetch(``);

//   if (response.ok) {
//     const group = await response.json();
//     dispatch(load(group));
//   }
// };

// export const createGroup = (payload) => async (dispatch) => {
//   const response = await fetch(``, {
//     method: "post",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(payload),
//   });
//   if (response.ok) {
//     const newGroup = await response.json();
//     dispatch(addOneGroup(newGroup));
//     return newGroup;
//   }
// };

// export const editGroup = (payload) => async (dispatch) => {
//   const response = await fetch(``, {
//     method: "put",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(payload),
//   });
//   if (response.ok) {
//     const updatedGroup = await response.json();
//     dispatch(editOneGroup(updatedGroup));
//     return updatedGroup;
//   }
// };

// export const removeGroup = (groupId) => async (dispatch) => {
//   const response = await fetch(``, {
//     method: "delete",
//   });
//   if (response.ok) {
//     dispatch(removeOneGroup(groupId));
//   }
// };

const initialState = {
  1: {
    id: 1,
    name: "Full Metal Racquets",
  },
};

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      const newState = { ...state };
      action.groups.forEach((group) => {
        newState[group.id] = group;
      });
      return newState;
    // case ADD_ONE:

    // case EDIT_ONE:
    //
    // case REMOVE_ONE:
    //
    default:
      return state;
  }
};

export default groupReducer;
