import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Upload.module.scss";

function Upload() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImg] = useState("");
  const [url, setUrl] = useState("");
  const [img_Url, setImg_Url] = useState("");

  const uploadImage = async (img) => {
    try {
      const data = new FormData();
      data.append("file", img);
      data.append("upload_preset", "smiley");
      data.append("cloud_name", "smiley-geek");

      const response = await Axios.post(
        process.env.REACT_APP_CLOUDINARY_URL,
        data
      );

      return response.data.secure_url;
    } catch (error) {
      return "error";
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!(name && url && price && desc)) {
      toast.error("Ensure required fields are filled");
    }

    //const res = await uploadImage(img);

    img_Url ? setUrl(img_Url) : setUrl(res);
    img_Url ? setUrl(img_Url) : setUrl(res);

    if (url === "error") {
      return toast.error("Check your network or the image file");
    }
  };
  return (
    <div className={styles.upload}>
      <form>
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="">
          Paste image link below or choose an image from your computer{" "}
          <i>preferrably in portrait</i>
        </label>
        <input
          type="url"
          name=""
          id=""
          onChange={(e) => {
            setImg_Url(e.target.value);
          }}
          value={img_Url}
          placeholder="image url(optional)"
        />
        <label>or</label>
        <input
          type="file"
          src=""
          alt=""
          onChange={(e) => {
            setImg(e.target.files[0]);
          }}
        />
        <label htmlFor="">description</label>
        <textarea
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <label htmlFor="">Category</label>
        <input
          type="text"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <label htmlFor="">Price</label>
        <input
          type="number"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <button onClick={handleCreate}>create</button>
      </form>
    </div>
  );
}

export default Upload;
