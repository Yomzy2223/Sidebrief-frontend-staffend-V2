import axios from "axios";
import { getAllYearsUpToCurrentYear, getUserInfo } from "./globalFunctions";

export const allMonths = [
  {
    short: "Jan",
    full: "January",
  },
  {
    short: "Feb",
    full: "February",
  },
  {
    short: "Mar",
    full: "March",
  },
  {
    short: "Apr",
    full: "April",
  },
  {
    short: "May",
    full: "May",
  },
  {
    short: "Jun",
    full: "June",
  },
  {
    short: "Jul",
    full: "July",
  },
  {
    short: "Aug",
    full: "August",
  },
  {
    short: "Sep",
    full: "September",
  },
  {
    short: "Oct",
    full: "October",
  },
  {
    short: "Nov",
    full: "November",
  },
  {
    short: "Dec",
    full: "December",
  },
];

export const allYears = getAllYearsUpToCurrentYear();

export const client = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://iapkmjspxh.us-east-1.awsapprunner.com/"
      : "https://h2rwx2fbhm.us-east-1.awsapprunner.com/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getUserInfo()?.data?.token}`,
  },
});
console.log(client);
// Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
