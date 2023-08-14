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
