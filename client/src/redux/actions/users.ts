import { get } from "../crud/get";
import { deleteItem } from "../crud/delete";
import { patch } from "../crud/patch";
import {
  READ_USERS,
  READ_ONE_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../types/users";
export const readUsers = (page: number = 1, limit: number = 20): any =>
  get({
    url: `http://localhost:3010/task/api/users?page=${page}&limit=${limit}`,
    title: "User",
    successType: READ_USERS,
  });
export const readOneUser = (id: number | string): any =>
  get({
    url: process.env.BASE_URL + "users/" + id,
    title: "User",
    successType: READ_ONE_USER,
  });
export const updateUser = (formData: any): any =>
  patch({
    url: "http://localhost:3010/task/api/users/" + formData._id,
    title: "User",
    successType: UPDATE_USER,
    formData,
  });
export const deleteUser = (id: string | number): any =>
  deleteItem({
    url: "http://localhost:3010/task/api/users",
    title: "User",
    successType: DELETE_USER,
    id,
  });
