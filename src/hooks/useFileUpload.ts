import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useFileUpload = () => {
  const [uploadProgress, setUploadProgress] = useState(0);

  const mutation = useMutation((file: File) => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload`; // replace with your upload url
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", `${process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}`);

    return axios.post(url, formData, {
      onUploadProgress: (progressEvent) => {
        if (progressEvent.total) {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percentCompleted);
        }
      },
    });
  });

  return { ...mutation, uploadProgress };
};
