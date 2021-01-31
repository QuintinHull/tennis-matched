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

  return (
    <div>
      <CreateGroupForm />
      <h1 className="groups_title">Groups</h1>
      <div className="groups_container">
        {groups.map((group) => {
          return (
            <NavLink key={group.id} to={`/groups/${group.id}`}>
              <div key={group.id} className="group_container">
                <div className="group_container__name">
                  <h2>{group.name}</h2>
                </div>
                <div className="group_container__location_creator">
                  <h3>{group.User && group.User.username}</h3>
                  <h3>
                    {group.Location && group.Location.city},{" "}
                    {group.Location && group.Location.state}
                  </h3>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
      <div>
        <h1>Events</h1>
        {events.map((event) => {
          return (
            <div key={event.id}>
              <p>{event && event.description}</p>
              <p>{event && event.date}</p>
              <p>{event && event.time}</p>
              <p>{event && event.place}</p>
              <p>{event.User && event.User.username}</p>
              <p>Group: {event.Group && event.Group.name}</p>
              <p>Skill: {event.Skill && event.Skill.level}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Home;
