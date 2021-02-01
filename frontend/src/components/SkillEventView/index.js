import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getEventsBySkill } from "../../store/event";

function SkillEventView() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const events = useSelector((state) => {
    return Object.values(state.event);
  });

  useEffect(() => {
    dispatch(getEventsBySkill(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>Events</h1>
      {events.map((event) => {
        return (
          <NavLink key={event.id} to={`/events/${event.id}`}>
            <p>{event && event.description}</p>
            <p>{event && event.date}</p>
            <p>{event && event.time}</p>

            <p>{event && event.place}</p>
            <p>{event.User && event.UsercreatorId}</p>
            <p>{event.Group && event.Group.name}</p>
          </NavLink>
        );
      })}
    </div>
  );
}

export default SkillEventView;
