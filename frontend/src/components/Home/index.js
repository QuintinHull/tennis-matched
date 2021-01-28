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

  // console.log(groups);
  // const groupsTest = [
  //   {
  //     id: 1,
  //     name: "Full Metal Racquets",
  //   },
  //   {
  //     id: 2,
  //     name: "Clay Miserables",
  //   },
  // ];

  return (
    <div>
      <h1>Home Component</h1>
      {/* {groupsTest.map((group) => {
        return <p>{group.name}</p>;
      })} */}
      <div className="groups_container">
        <h2>Groups</h2>
        {groups.map((group) => {
          return (
            <div className="group_container">
              <div className="group_container__name">
                <h2 key={group.name}>{group.name}</h2>
              </div>
              <div className="group_container__location_creator">
                <h3>{group.User.username}</h3>
                <h3>
                  {group.Location.city}, {group.Location.state}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
      <CreateGroupForm />
    </div>
  );
}
export default Home;
