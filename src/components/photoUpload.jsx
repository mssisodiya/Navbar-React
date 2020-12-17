import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PhotoForm(props) {
  const [newPhoto, setPhoto] = useState({
    photo: "",
    userId: props.match.params.id,
  });
  const api = `https://jsonplaceholder.typicode.com/photos`;

  function handleChange({ currentTarget: input }) {
    const data = { ...newPhoto };
    data[input.name] = input.value;
    setPhoto(data);
  }

  async function handleSubmit() {
    const { data } = await axios.post(api, newPhoto);
    console.log(data.photo.slice(-13));
    alert("Added" + data.photo.slice(-13));
  }

  return (
    <div>
      <div className="form-group">
        <label for="exampleInputEmail1">photo</label>
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
