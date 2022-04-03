import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Upload.module.scss";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

function Upload({ handleUpload, isLoading }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  // const [img, setImg] = useState("");
  // const [url, setUrl] = useState("");
  const [img_Url, setImg_Url] = useState("");
  const { user } = useSelector((state) => state.users);

  // const uploadImage = async (img) => {
  //   try {
  //     const data = new FormData();
  //     data.append("file", img);
  //     data.append("upload_preset", "smiley");
  //     data.append("cloud_name", "smiley-geek");

  //     const response = await Axios.post(
  //       process.env.REACT_APP_CLOUDINARY_URL,
  //       data
  //     );

  //     return response.data.secure_url;
  //   } catch (error) {
  //     return "error";
  //   }
  // };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!(name && price)) {
      return toast.error("Ensure required fields are filled");
    }

    const product = {
      name,
      price,
      description: desc,
      designer_id: user.id,
      designer_name: user.name,
      category,
      imageurl: img_Url,
    };

    handleUpload(product);
    setName("");
    setPrice(0);
    setDesc("");
    setCategory("");
    setImg_Url("");
  };
  return (
    <div className={styles.upload}>
      <form onSubmit={handleCreate}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="">
          Paste image link below .<i>preferrably in portrait</i>
        </label>
        <label>
          Get the url{" "}
          <a rel="noreferrer" href="https://myimagemyupload.netlify.app/" target="_blank">
            here
          </a>
        </label>
        <input
          type="url"
          name=""
          id=""
          onChange={(e) => {
            setImg_Url(e.target.value);
          }}
          value={img_Url}
          placeholder="image url"
        />
        {/* <label>or</label>
        <input
          type="file"
          src=""
          alt=""
          onChange={(e) => {
            console.log(e.target.files[0]);
            setImg(e.target.files[0]);
          }}
        /> */}
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
        <button disabled={isLoading} onClick={handleCreate}>
          {isLoading ? "uploading" : "create"}
        </button>
      </form>
    </div>
  );
}

export default Upload;
