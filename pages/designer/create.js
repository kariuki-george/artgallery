import React from "react";
import Sidebar from "../../components/global/Sidebar";
import styles from "../../styles/Pages.module.css";
import Upload from "../../components/designer/Upload";
import axios from "axios";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

function create() {
  const mutation = useMutation((product) => {
    const response = axios.post(
      "https://api.smiley-geek-codes.tech/api/products",
      product
    );
    return response.data;
  });
  const handleUpload = (product) => {
    mutation.mutate(product);
  };

  return (
    <div className={styles.page}>
      <Sidebar />
      {mutation.isError && toast.error("Sorry an error occurred")}
      {mutation.isSuccess && toast.success("successfully created")}
      <Upload handleUpload={handleUpload} isLoading={mutation.isLoading} />
    </div>
  );
}

export default create;
