import { useEffect, useState } from "react";
import { createGroup } from "../../store/group";
import { useDispatch, useSelector } from "react-redux";
import { getLocations } from "../../store/location";

const CreateGroupForm = () => {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const locations = useSelector((state) => {
    return Object.values(state.location);
  });

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState(locations[0]);

  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newGroup = {
      name,
      description,
      creatorId: sessionUser.id,
      locationId: location,
    };
    let createdGroup = await dispatch(createGroup(newGroup));
    console.log(createdGroup);
  };

  // const locations = [
  //   {
  //     city: "New York City",
  //     state: "NY",
  //   },
  //   {
  //     city: "Los Angeles",
  //     state: "CA",
  //   },
  //   {
  //     city: "Honolulu",
  //     state: "HI",
  //   },
  // ];

  return (
    <section>
      <h1>Form Component</h1>
      <form onSubmit={handleSubmit}>
        <label>Group Name:</label>
        <input
          type="text"
          placeholder="TheBig12"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label>Group Description:</label>
        <textarea
          maxLength="300"
          type="text"
          rows="5"
          cols="35"
          required
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
        <label>Location:</label>
        <select
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        >
          {locations.length &&
            locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.city}, {location.state}
              </option>
            ))}
        </select>
        <button type="submit">Create Group</button>
        <button type="button">Cancel</button>
      </form>
    </section>
  );
};

export default CreateGroupForm;
