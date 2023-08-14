// import axios from "axios";

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
  let userInfo = localStorage.getItem("userInfo");
  let parsedUserInfo;

  if (userInfo) {
    parsedUserInfo = JSON.parse(userInfo);
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
export function getTimeInfo(timestampStr: string): TimeProps {
  const date = new Date(timestampStr);

  const hours = date.getHours();
  const timeType = hours < 12 ? "AM" : "PM";
  const minutes = "0" + date.getMinutes();

  const formattedTime = `${hours}:${minutes.substr(-2)} ${timeType}`;
  return formattedTime;
}
