import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getGroups } from "../../store/group";

const GroupView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const group = useSelector((state) => state.group[id]);

  useEffect(() => {
    dispatch(getGroups());
  }, [dispatch]);

  return (
    <div>
      <h1>GroupView Component</h1>
    </div>
  );
};

export default GroupView;
