import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocations } from "../../store/location";
import { editGroup, getOneGroup } from "../../store/group";
import { useHistory, useParams } from "react-router-dom";

function EditGroup() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const group = useSelector((state) => state.group[id]);
  const sessionUser = useSelector((state) => state.session.user);
  const locations = useSelector((state) => {
    return Object.values(state.location);
  });

  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [location, setLocation] = useState();
  const history = useHistory();

  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getOneGroup(id));
  }, [dispatch, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedGroup = {
      name,
      description,
      creatorId: sessionUser.id,
      locationId: location,
    };
    let createdGroup = await dispatch(editGroup(updatedGroup));
    if (createdGroup) {
      history.push(`/groups/${createdGroup.newGroup.id}`);
    }
  };

  return (
    <div>
      <h2>Edit Group Component</h2>
      <div className="group_form">
        <div className="group_form__container">
          <form onSubmit={handleSubmit}>
            <h1>{group && group.name}</h1>
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
              <button type="submit">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditGroup;
