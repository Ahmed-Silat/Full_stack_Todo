import axios from "axios";

export const getData = async (userId) => {
  const { data } = await axios.get(`http://localhost:3000/todo/user/${userId}`);
  console.log("Data fetched successfully");
  return data;
};

export const postData = async (value, userId) => {
  const { data } = await axios.post(`http://localhost:3000/todo`, {
    title: value,
    userId: userId,
  });
  console.log("Todo added successfully:", data);
};

export const deleteData = async (id) => {
  const { data } = await axios.delete(`http://localhost:3000/todo/${id}`);
};

export const updateExistingTodo = async (id, text, userId) => {
  const { data } = await axios.put(`http://localhost:3000/todo/${id}`, {
    title: text,
    userId: userId,
  });
};
