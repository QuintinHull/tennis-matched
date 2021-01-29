import { useEffect, useState } from "react";
import { createGroup } from "../../store/group";
import { useDispatch, useSelector } from "react-redux";
import { getLocations } from "../../store/location";
import "./CreateGroup.css";

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
    await dispatch(createGroup(newGroup));
  };

  return (
    <div className="group_form">
      <div className="group_form__container">
        <form onSubmit={handleSubmit}>
          <h1>Create Group</h1>
          <div className="group_form__row">
            <label>Group Name:</label>
            <input
              type="text"
              placeholder="Enter a group name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
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
          </div>
          <div className="group_form__row">
            <textarea
              placeholder="Leave a brief desciption of your group here"
              maxLength="300"
              type="text"
              rows="5"
              cols="60"
              required
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            ></textarea>
          </div>
          <div className="group_form__buttons">
            <button type="button">Cancel</button>
            <button type="submit">Create Group</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateGroupForm;
