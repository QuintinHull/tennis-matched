import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getEventsBySkill } from "../../store/event";
import "./SkillEventView.css";

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
    <div className="skill_events_container">
      {events.map((event) => {
        return (
          <NavLink class="nav_link" key={event.id} to={`/events/${event.id}`}>
            <div className="skill_event_container">
              <div className="skill_event_row_1">
                <div className="skill__user_skill">
                  <h5>{event.User && event.User.username}</h5>
                  <h5>Skill: {event.Skill && event.Skill.level}</h5>
                </div>
                <div className="skill__date_time">
                  <h5>{event && event.date}</h5>
                  <h5>{event && event.time}</h5>
                </div>
              </div>
              <div className="skill_event_row_2">
                <h5>{event && event.description}</h5>
                <h5>{event && event.place}</h5>
              </div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}

export default SkillEventView;
