import { fetch } from "./csrf";

const LOAD = "comments/LOAD";
const ADD_ONE = "comments/ADD_ONE";

const load = (comments) => ({
  type: LOAD,
  comments,
});

const addOne = (newComment) => ({
  type: ADD_ONE,
  newComment,
});

export const getComments = (id) => async (dispatch) => {
  const res = await fetch(`/api/comments/${id}`);

  const json = res.data;
  const comments = json.comments;
  let normalizedComments = {};
  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];
    normalizedComments[comment.id] = comment;
  }
  dispatch(load(normalizedComments));
};

export const postComment = (payload) => async (dispatch) => {
  const res = await fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  const newComment = await res.data.comment;
  dispatch(addOne(newComment));
};

const initialState = {};

function commentReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case LOAD:
      newState = Object.assign({}, state, action.comments);
      return newState;
    case ADD_ONE:
      // console.log("in add tweets", action.payload);
      const comment = action.newComment;
      // const commentId = comment.id;
      newState = Object.assign({}, state, { commentId: comment });
      return newState;
    default:
      return state;
  }
}

export default commentReducer;
