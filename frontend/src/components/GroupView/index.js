import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getOneGroup } from "../../store/group";
import { getMembers, addMember } from "../../store/member";

const GroupView = () => {
  const { id } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const group = useSelector((state) => state.group[id]);
  const members = useSelector((state) => {
    return Object.values(state.member);
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneGroup(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getMembers(id));
  }, [dispatch, id]);

  const handleNewMember = async (event) => {
    event.preventDefault();
    const newMember = {
      userId: sessionUser.id,
      groupId: id,
    };
    await dispatch(addMember(newMember));
  };

  const editGroup = async (event) => {};

  if (!members) {
    return null;
  }

  return (
    <div>
      <div>
        <h1>GroupView Component</h1>
        <p>name:{group && group.name}</p>
        <button onClick={handleNewMember}>Join</button>
        <button onClick={editGroup}>Update</button>
        <button>Remove</button>
        <p>description:{group && group.description}</p>
        <p>Creator:{group && group.User && group.User.username}</p>
        <p>Location:{group && group.Location && group.Location.city}</p>
        <h2>Members: </h2>
        {members.map((member) => {
          return (
            <h3 key={member && member.id}>
              {member.User && member.User.username}
            </h3>
          );
        })}
      </div>
      <div>
        <h1>Group Events</h1>
      </div>
    </div>
  );
};

export default GroupView;
