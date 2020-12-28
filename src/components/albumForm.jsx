import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewAlbum } from "../actions";

function AlbumForm(props) {
  const dispatch = useDispatch();
  const [newAlbum, setAlbum] = useState({
    title: "",
    userId: props.match.params.id,
  });

  function handleChange({ currentTarget: input }) {
    const data = { ...newAlbum };
    data[input.name] = input.value;
    setAlbum(data);
  }
  function handleSubmit() {
    dispatch(addNewAlbum(newAlbum));
  }

  return (
    <div>
      <div className="form-group">
        <label>Title</label>
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
