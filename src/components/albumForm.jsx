import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AlbumForm(props) {
  const [newAlbum, setAlbum] = useState({
    title: "",
    userId: props.match.params.id,
  });
  const api = `https://jsonplaceholder.typicode.com/albums`;

  function handleChange({ currentTarget: input }) {
    const data = { ...newAlbum };
    data[input.name] = input.value;
    setAlbum(data);
  }

  async function handleSubmit() {
    const { data } = await axios.post(api, newAlbum);
    alert("Added" + " " + data.title);
  }

  return (
    <div>
      <div className="form-group">
        <label for="exampleInputEmail1">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={newAlbum.title}
          placeholder="Enter title"
          onChange={handleChange}
        />
        <Link
          to={"/albums"}
          className="btn btn-primary"
          onClick={() => handleSubmit()}
        >
          Submit
        </Link>
      </div>
    </div>
  );
}

export default AlbumForm;
