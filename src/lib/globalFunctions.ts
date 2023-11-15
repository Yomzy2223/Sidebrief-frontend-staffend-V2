import axios from "axios";
import { saveAs } from "file-saver";

export const getAllYearsUpToCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2022;

  const allYears = [];
  for (let year = startYear; year <= currentYear; year++) {
    allYears.push(year.toString());
  }

  return allYears;
};

export const getUserInfo = () => {
  let userInfo;
  let parsedUserInfo;

  if (typeof window !== "undefined") {
    userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      parsedUserInfo = JSON.parse(userInfo);
    }
  }

  return parsedUserInfo || {};
};

export const handleError = (error: any) => {
  console.log(error.response.data.error);
};

export const handleSuccess = (data: any) => {
  console.log(data);
};

// export const client = axios.create({
//   baseURL: "https://iapkmjspxh.us-east-1.awsapprunner.com",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });bexport function getTimeInfo (timestampStr: string): TimeProps {

interface TimeProps {
  formattedTime: string;
  timeType: string;
}
export function getTimeInfo(timestampStr: string): string {
  const date = new Date(timestampStr);

  const hours = date.getHours();
  const timeType = hours < 12 ? "AM" : "PM";
  const minutes = "0" + date.getMinutes();

  const formattedTime = `${hours}:${minutes.substr(-2)} ${timeType}`;
  return formattedTime;
}

export const handleDownloadFile = (cloudinaryLink: string, fileName: string) => {
  // Convert http to https if necessary
  const secureLink = cloudinaryLink.startsWith("http://")
    ? "https://" + cloudinaryLink.slice(7)
    : cloudinaryLink;

  const result = axios
    .get(secureLink, {
      responseType: "blob",
    })
    .then((res) => {
      saveAs(res.data, fileName);
    })
    .catch((err) => {
      console.log(err.message);
      throw new Error(err);
    });

  return result;
};
