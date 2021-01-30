import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGroups } from "../../store/group";
import CreateGroupForm from "../CreateGroup";
import "./Home.css";

function Home() {
  const dispatch = useDispatch();
  const groups = useSelector((state) => {
    return Object.values(state.group);
  });

  useEffect(() => {
    dispatch(getGroups());
  }, [dispatch]);

  return (
    <div>
      <CreateGroupForm />
      <h1 className="groups_title">Groups</h1>
      <div className="groups_container">
        {groups.map((group) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
}
export default Home;
