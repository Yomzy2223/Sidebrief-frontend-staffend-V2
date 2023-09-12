import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFileUpload = () => {
  const [uploadProgress, setUploadProgress] = useState(0);

  const mutation = useMutation((file: File) => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload`;
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

export const useCheckIsImage = (url?: string) => {
  return useQuery(
    ["checkIsImage", url],
    async () => {
      try {
        if (!url) throw new Error("No url specified");

        const response = await axios.get(url, { responseType: "arraybuffer" });
        const contentType = response.headers["content-type"];
        return contentType.startsWith("image/");
      } catch (error: any) {
        console.error("Error:", error.message);
        return false;
      }
    },
    {
      enabled: !!url,
    }
  );
};
