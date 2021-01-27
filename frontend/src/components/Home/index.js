import "./Home.css";

function Home() {
  const groups = [
    {
      id: 1,
      name: "Full Metal Racquets",
    },
    {
      id: 2,
      name: "Clay Miserables",
    },
  ];

  return (
    <div>
      <h1>Home Component</h1>
      {groups.map((group) => {
        return <p>{group.name}</p>;
      })}
    </div>
  );
}
export default Home;
