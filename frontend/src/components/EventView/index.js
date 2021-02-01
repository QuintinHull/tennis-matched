import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getOneEvent } from "../../store/event";
import { getComments, postComment } from "../../store/comment";
import "./EventView.css";

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

  if (!event || !event.User || !event.Group || !event.Skill || !comments) {
    return null;
  }

  return (
    <>
      <div className="event_page">
        <div className="event_view__container">
          <div className="event_view__row1">
            <div className="event__user_skill">
              <h3>{event.User && event.User.username}</h3>
              <h5>Skill: {event.Skill && event.Skill.level}</h5>
            </div>
            <div className="event__date_time">
              <h5>{event && event.date}</h5>
              <h5>{event && event.time}</h5>
            </div>
          </div>
          <div className="event_view__row2">
            <h1>{event && event.description}</h1>
          </div>
          <div className="event_view__row3">
            <h5>{event && event.place}</h5>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="leave a comment"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
              />
              <button type="submit">comment</button>
            </form>
          </div>
        </div>
      </div>
      <div className="comments_container">
        <h1 className="comments_title">Comments</h1>
      </div>
      <div className="comment_body__container">
        {comments.map((comment) => {
          return (
            <div className="comment_body">
              <div className="comment_body__message" key={comment.id}>
                <h3>{comment && comment.message} </h3>
              </div>
              <div className="comment_body__user">
                <h4> - {comment.User && comment.User.username}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default EventView;
