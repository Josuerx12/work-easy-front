import axios from "axios";

export const setupHttp = axios.create({
  baseURL:
    "https://6ms5ufdunlo7f52v6fjdfpaoa40lydxa.lambda-url.us-east-1.on.aws",
});
