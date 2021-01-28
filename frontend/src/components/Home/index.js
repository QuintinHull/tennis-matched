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
      <h2>Groups</h2>
      {groups.map((group) => {
        return <p key={group.name}>{group.name}</p>;
      })}
      <CreateGroupForm />
    </div>
  );
}
export default Home;
