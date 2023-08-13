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
// });
