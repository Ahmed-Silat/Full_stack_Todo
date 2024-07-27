import { data } from "autoprefixer";
import axios from "axios";

export const signin = async (email, password) => {
  const userDetails = await axios.post("http://localhost:3000/user/signin", {
    email: email,
    password: password,
  });
  console.log("user login successful");
};

export const signup = async (username, email, password) => {
  const userDetails = await axios.post("http://localhost:3000/user/signup", {
    name: username,
    email: email,
    password: password,
  });
  console.log("user signup successful");
};
