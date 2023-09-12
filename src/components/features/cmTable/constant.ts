export const headers = [
  "S/N",
  "Date",
  "Business name",
  "Business Number",
  "Uploaded By",
  "Status",
];
export const bodyFullData = [
  {
    Date: "02/08/23",
    BusinessName: "Tomiwa Oil & Gas",
    BusinessNumber: "56874ght765",
    UploadedBy: "asumo@fbn.com",
    Status: "Under review",
  },
  {
    Date: "02/06/23",
    BusinessName: "Tomiwa Oil & Gas",
    BusinessNumber: "56874ght765",
    UploadedBy: "asumo@fbn.com",
    Status: "Under review",
  },
  {
    Date: "02/05/23",
    BusinessName: "Tomiwa Oil & Gas",
    BusinessNumber: "56874ght765",
    UploadedBy: "asumo@fbn.com",
    Status: "Completed",
  },
  {
    Date: "02/04/23",
    BusinessName: "Tomiwa Oil & Gas",
    BusinessNumber: "56874ght765",
    UploadedBy: "asumo@fbn.com",
    Status: "Under review",
  },
  {
    Date: "02/03/23",
    BusinessName: "Tomiwa Oil & Gas",
    BusinessNumber: "56874ght765",
    UploadedBy: "asumo@fbn.com",
    Status: "Completed",
  },
];

export const dataBody = bodyFullData?.map((el, index) => [
  index + 1,
  el?.Date,
  el?.BusinessName,
  el?.BusinessNumber,
  el?.UploadedBy,
  el?.Status,
]);
