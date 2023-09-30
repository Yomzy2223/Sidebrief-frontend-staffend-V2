import firstBank from "@/assets/images/firstBank.png";
export const headers = [
  "S/N",
  "Onboarded Banks",
  "Requests",
  "Branches",
  "Date",
  // 'Registration URl',
];
export const bodyFullData = [
  {
    image:
      "https://res.cloudinary.com/soss/image/upload/v1675161515/banks/Sterling_bank_3_plgqak.png",
    banks: "Sterling Bank",
    requests: 320,

    branches: "20",
    date: "28/08/2022",
    url: "https/www/sidebrief.diligence/gtbank.com",
  },
  {
    image:
      "https://res.cloudinary.com/soss/image/upload/v1675161515/banks/Sterling_bank_3_plgqak.png",
    banks: "Sterling Bank",
    requests: 320,

    branches: "20",
    date: "28/08/2022",
    url: "https/www/sidebrief.diligence/gtbank.com",
  },
  {
    image:
      "https://res.cloudinary.com/soss/image/upload/v1675161515/banks/Sterling_bank_3_plgqak.png",
    banks: "Sterling Bank",
    requests: 320,

    branches: "20",
    date: "28/08/2022",
    url: "https/www/sidebrief.diligence/gtbank.com",
  },
  {
    image:
      "https://res.cloudinary.com/soss/image/upload/v1675161515/banks/Sterling_bank_3_plgqak.png",
    banks: "Sterling Bank",
    requests: 320,

    branches: "20",
    date: "28/08/2022",
    url: "https/www/sidebrief.diligence/gtbank.com",
  },
  {
    image:
      "https://res.cloudinary.com/soss/image/upload/v1675161515/banks/Sterling_bank_3_plgqak.png",
    banks: "Sterling Bank",
    requests: 320,

    branches: "20",
    date: "28/08/2022",
    url: "https/www/sidebrief.diligence/gtbank.com",
  },
];

export const dataBody = bodyFullData?.map((el, index) => [
  index + 1,
  { imageLink: el?.image, bankName: el?.banks },

  el?.requests,
  el?.branches,
  el?.date,
  el?.url,
]);
