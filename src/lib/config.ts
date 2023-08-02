import { getAllYearsUpToCurrentYear } from "./globalFunctions";

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
