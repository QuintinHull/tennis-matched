import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getOneGroup } from "../../store/group";

const GroupView = () => {
  const { id } = useParams();
  const group = useSelector((state) => state.group[id]);
  console.log("_____group_____", group);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneGroup(id));
  }, [dispatch, id]);

  return (
    <div>
      <div>
        <h1>GroupView Component</h1>
        <p>name:{group && group.name}</p>
        <p>description:{group && group.description}</p>
        <p>Creator:{group && group.User && group.User.username}</p>
        <p>Location:{group && group.Location && group.Location.city}</p>
        <p>Members: </p>
      </div>
      <div></div>
    </div>
  );
};

export default GroupView;
