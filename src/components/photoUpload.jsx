import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewPhoto } from "../actions";

function PhotoForm(props) {
  const [newPhoto, setPhoto] = useState({
    photo: "",
    userId: props.match.params.id,
  });
  const dispatch = useDispatch();

  function handleChange({ currentTarget: input }) {
    const data = { ...newPhoto };
    data[input.name] = input.value;
    setPhoto(data);
  }

  async function handleSubmit() {
    dispatch(addNewPhoto(newPhoto));
  }

  return (
    <div>
      <div className="form-group">
        <label>photo</label>
        <input
          type="file"
          className="form-control"
          name="photo"
          value={newPhoto.photo}
          placeholder="Enter photo"
          onChange={handleChange}
        />
        <Link
          to={"/photos"}
          className="btn btn-primary"
          onClick={() => handleSubmit()}
        >
          Submit
        </Link>
      </div>
    </div>
  );
}

export default PhotoForm;
