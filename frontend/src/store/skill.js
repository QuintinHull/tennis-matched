import { fetch } from "./csrf";

const LOAD = "skill/LOAD";

const load = (skills) => ({
  type: LOAD,
  skills,
});

export const getSkills = () => async (dispatch) => {
  const response = await fetch(`/api/skills`);

  if (response.ok) {
    const skills = await response.data;
    dispatch(load(skills));
  }
};

const skillReducer = (state = {}, action) => {
  let newState = { ...state };
  switch (action.type) {
    case LOAD:
      action.skills.forEach((skill) => {
        newState[skill.id] = skill;
      });
      return newState;
    default:
      return state;
  }
};

export default skillReducer;
