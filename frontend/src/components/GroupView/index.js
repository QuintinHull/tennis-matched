import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getOneGroup } from "../../store/group";
import { getMembers } from "../../store/member";

const GroupView = () => {
  const { id } = useParams();
  const group = useSelector((state) => state.group[id]);
  const members = useSelector((state) => {
    return Object.values(state.member);
  });
  console.log("-------component---->", members);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneGroup(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getMembers(id));
  }, [dispatch, id]);

  return (
    <div>
      <div>
        <h1>GroupView Component</h1>
        <p>name:{group && group.name}</p>
        <p>description:{group && group.description}</p>
        <p>Creator:{group && group.User && group.User.username}</p>
        <p>Location:{group && group.Location && group.Location.city}</p>
        <h2>Members: </h2>
        {members.map((member) => {
          return (
            <h3 key={member.userId && member.userId}>
              {member.userId && member.userId}
            </h3>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};

export default GroupView;
