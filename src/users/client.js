import axios from 'axios';
const request = axios.create({
    withCredentials: true,
});

export const BASE_API = process.env.REACT_APP_API_BASE;
export const USER_API = `${BASE_API}/api/users`;

export const signIn = async (credientials) => {
    const response = await request.post(`${USER_API}/signin`, credientials);
    console.log("get request in sign in", request)
    return response.data;
}
export const account = async () => {
    const response = await request.post(`${USER_API}/account`);
    console.log("get request in account", request)
    console.log("get api base from env var: ", BASE_API);
    console.log("get user api base from env var: ", USER_API);
    return response.data;
}
export const updateUser = async (user) => {
    const response = await request.put(`${USER_API}/${user._id}`, user);
    return response.data;
}

export const findAllUsers = async () => {
    const response = await request.get(`${USER_API}`);
    return response.data;
}

export const createUser = async (user) => {
    const response = await request.post(`${USER_API}`, user);
    return response.data;
}

export const findUserById = async (id) => {
    const response = await request.get(`${USER_API}/${id}`);
    console.log("find user by id the path", `${USER_API}/${id}`);
    return response.data;
}

export const deleteUser = async(id) => {
    const response = await request.delete(`${USER_API}/${id}`);
    return response.data;
}

export const signup = async (credientials) => {
    const response = await request.post(
        `${USER_API}/signup`, credientials);
    return response.data;
} 

export const signout = async () => {
    const response = await request.post(`${USER_API}/signout`);
    return response.data;
}