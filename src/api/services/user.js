import api from "..";

export const getAllUsers = () => api.get("/users");

export const getUserById = (id) => api.get("/users/" + id);
