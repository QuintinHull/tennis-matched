import { useEffect, useState } from "react";
import { createGroup } from "../../store/group";
import { useDispatch, useSelector } from "react-redux";
import { getLocations } from "../../store/location";
import { useHistory } from "react-router-dom";

import "./CreateGroup.css";

const CreateGroupForm = () => {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const locations = useSelector((state) => {
    return Object.values(state.location);
  });

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState(1);
  const history = useHistory();

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
    if (createdGroup) {
      history.push(`/group/${createdGroup.newGroup.id}`);
    }
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
              required
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
              placeholder="Leave a brief group desciption here"
              maxLength="300"
              type="text"
              rows="5"
              cols="50"
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
