import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getOneEvent } from "../../store/event";
import { getComments, postComment } from "../../store/comment";

function EventView() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const event = useSelector((state) => state.event[id]);
  const comments = useSelector((state) => Object.values(state.comment));

  const [message, setMessage] = useState("");

  useEffect(() => {
    dispatch(getOneEvent(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getComments(id));
  }, [dispatch, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      message,
      eventId: id,
      userId: sessionUser.id,
    };
    dispatch(postComment(newComment));
    setMessage("");
  };

  if (!event || !event.User || !event.Group || !event.Skill) {
    return null;
  }

  return (
    <div>
      <h1>EventView Component</h1>
      <p>{event && event.description}</p>
      <p>{event && event.date}</p>
      <p>{event && event.time}</p>
      <p>{event && event.place}</p>
      <p>{event.User && event.User.username}</p>
      <p>{event.Group && event.Group.name}</p>
      <p>{event.Skill && event.Skill.level}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="message"
        />
        <button type="submit">Comment!</button>
      </form>
      <h1>Comments</h1>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <h3>{comment && comment.message}</h3>
            <h4>{comment.User && comment.User.username}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default EventView;
