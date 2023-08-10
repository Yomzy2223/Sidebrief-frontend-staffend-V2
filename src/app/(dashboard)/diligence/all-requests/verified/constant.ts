import firstBank from "@/assets/images/firstBank.png";
export const headers = [
  "S/N",
  "Onboarded Banks",
  "Verified",
  "Branches",
  "Date",
];
export const bodyFullData = [
  {
    image:
      "https://res.cloudinary.com/soss/image/upload/v1675161515/banks/Sterling_bank_3_plgqak.png",
    banks: "Sterling Bank",
    verified: 320,

    branches: "20",
    date: "28/08/2022",
  },
  {
    image:
      "https://res.cloudinary.com/soss/image/upload/v1675161515/banks/Sterling_bank_3_plgqak.png",
    banks: "Sterling Bank",
    verified: 320,

    branches: "20",
    date: "28/08/2022",
  },
  {
    image:
      "https://res.cloudinary.com/soss/image/upload/v1675161515/banks/Sterling_bank_3_plgqak.png",
    banks: "Sterling Bank",
    verified: 320,

    branches: "20",
    date: "28/08/2022",
  },
  {
    image:
      "https://res.cloudinary.com/soss/image/upload/v1675161515/banks/Sterling_bank_3_plgqak.png",
    banks: "Sterling Bank",
    verified: 320,

    branches: "20",
    date: "28/08/2022",
  },
  {
    image:
      "https://res.cloudinary.com/soss/image/upload/v1675161515/banks/Sterling_bank_3_plgqak.png",
    banks: "Sterling Bank",
    verified: 320,

    branches: "20",
    date: "28/08/2022",
  },
];

export const dataBody = bodyFullData?.map((el, index) => [
  index + 1,
  { imageLink: el?.image, bankName: el?.banks },

  el?.verified,
  el?.branches,
  el?.date,
]);
