import axios from "axios";

export const setupHttp = axios.create({
  baseURL: "https://6yv67bkzl8.execute-api.us-east-1.amazonaws.com/dev/",
});
