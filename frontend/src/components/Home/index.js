import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getGroups } from "../../store/group";
import { getEvents } from "../../store/event";
import CreateGroupForm from "../CreateGroup";
import "./Home.css";

function Home() {
  const groups = useSelector((state) => {
    return Object.values(state.group);
  });
  const events = useSelector((state) => {
    return Object.values(state.event);
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGroups());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  if (!groups) {
    return null;
  }

  return (
    <div className="home_container">
      <div className="left_side">
        <CreateGroupForm />
        <h1 className="groups_title">Groups</h1>
        <div className="groups_container">
          {groups.map((group) => {
            return (
              <NavLink
                className="nav_link"
                key={group.id}
                to={`/groups/${group.id}`}
              >
                <div key={group.id} className="group_container">
                  <div className="group_container__name">
                    <h2>{group.name}</h2>
                  </div>
                  <div className="group_container__location_creator">
                    <h5 className="row_username">
                      {group.User && group.User.username}
                    </h5>
                    <h5>
                      {group.Location && group.Location.city},{" "}
                      {group.Location && group.Location.state}
                    </h5>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="right_side">
        <div className="events_container">
          {events.map((event) => {
            return (
              <NavLink
                className="nav_link"
                key={event.id}
                to={`events/${event.id}`}
              >
                <div className="event_container" key={event.id}>
                  <div className="event_row_1">
                    <div className="user_skill">
                      <h5>{event.User && event.User.username}</h5>
                      <h5>Skill: {event.Skill && event.Skill.level}</h5>
                    </div>
                    <div className="date_time">
                      <h5>{event && event.date}</h5>
                      <h5>{event && event.time}</h5>
                    </div>
                  </div>
                  <div className="event_row_2">
                    <h5>{event && event.description}</h5>
                    <h5>{event && event.place}</h5>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Home;
