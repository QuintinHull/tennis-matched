import { NavLink, useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getOneGroup } from "../../store/group";
import { getGroupEvents } from "../../store/event";
import { getMembers, addMember } from "../../store/member";
import "./GroupView.css";

const GroupView = () => {
  const { id } = useParams();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const group = useSelector((state) => state.group[id]);
  const members = useSelector((state) => {
    return Object.values(state.member);
  });
  const events = useSelector((state) => {
    return Object.values(state.event);
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneGroup(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getMembers(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getGroupEvents(id));
  }, [dispatch, id]);

  const handleNewMember = async (event) => {
    event.preventDefault();
    const newMember = {
      userId: sessionUser.id,
      groupId: id,
    };
    await dispatch(addMember(newMember));
  };

  const handleNewEvent = async (event) => {
    history.push(`/groups/${id}/create`);
  };

  const editGroup = async (event) => {
    history.push(`/groups/edit/${id}`);
  };

  const admin = () => {
    if (group && sessionUser.id === group.creatorId) {
      return true;
    }
  };

  if (!members) {
    return null;
  }

  return (
    <div className="group_view_container">
      <div className="group_view__left_side">
        <div className="left_side__group_info">
          <div className="group_view__row_one">
            <h1>{group && group.name}</h1>
            <h2>{group && group.Location && group.Location.city}</h2>
          </div>
          <div className="group_view__row_two">
            <h2>{group && group.description}</h2>
          </div>
          <div className="group_view__row_three">
            <h2>Admin: {group && group.User && group.User.username}</h2>
            <div className="group_form__buttons">
              <button onClick={handleNewMember}>Join</button>
              <button onClick={handleNewEvent}>Create</button>
              {admin() && <button onClick={editGroup}>Update</button>}
            </div>
          </div>
        </div>
        <h2 className="members_title">Members</h2>
        <div className="members_container">
          <div className="group_members">
            {members.map((member) => {
              return (
                <div className="member_container">
                  <h3 key={member && member.id}>
                    {member.User && member.User.username}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="right_side">
        <div className="events_container">
          {events.map((event) => {
            return (
              <NavLink
                className="nav_link"
                key={event.id}
                to={`/events/${event.id}`}
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
};

export default GroupView;
