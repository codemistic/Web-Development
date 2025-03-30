import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "https://resume-builder-using-react.herokuapp.com/",
});
