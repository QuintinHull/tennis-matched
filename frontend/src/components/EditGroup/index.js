import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocations } from "../../store/location";
import { editGroup, getOneGroup } from "../../store/group";
import { useHistory, useParams } from "react-router-dom";
import "./EditGroup.css";

function EditGroup() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const group = useSelector((state) => state.group[id]);
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
      history.push(`/groups/${id}`);
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push(`/groups/${id}`);
  };

  return (
    <div>
      <div className="edit_group_form">
        <div className="edit_group_form__container">
          <form onSubmit={handleSubmit}>
            <div className="edit_group_form__row_one">
              <h1>Edit: {group && group.name}</h1>
            </div>
            <div className="edit_group_form__row_two">
              <label>Group Name:</label>
              <input
                type="text"
                placeholder="Edit group name"
                required
                value={group && name}
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
            <div className="edit_group_form__row_three">
              <textarea
                placeholder="Change your group desciption here"
                maxLength="300"
                type="text"
                rows="5"
                cols="53"
                required
                value={group && description}
                onChange={(event) => setDescription(event.target.value)}
              ></textarea>
            </div>
            <div className="edit_group_form__buttons">
              <button type="button" onClick={handleCancelClick}>
                Cancel
              </button>
              <button type="submit">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditGroup;
