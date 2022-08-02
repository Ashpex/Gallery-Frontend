import axios from "axios";
import { apiUrlUser, apiUrlAuth } from "../../utils/constant";


export async function Login(email: string, password: string): Promise<any> {
    return (axios.post(apiUrlAuth + "login", {
        email,
        password,
    }).then
        ((response) => {
            return response.data;
        }).catch((error) => {
            return Promise.reject(error);
        }));
}

export async function Register(email: string, password: string): Promise<any> {
    return (axios.post(apiUrlAuth + "register", {
        email,
        password,
    }).then
        ((response) => {
            return response.data;
        }).catch((error) => {
            return Promise.reject(error);
        }));
}

export async function GetUserProfile(): Promise<any> {
    return (axios.get(apiUrlUser + "profile", {
        headers: {
            Authorization: `${localStorage.getItem("token")}`,
        },
    }).then
        ((response) => {
            return response.data;
        }).catch((error) => {
            return Promise.reject(error);
        }));
}

export async function GetUserProfileByID(id: string): Promise<any> {
    return (axios.get(apiUrlUser + id, {
        headers: {
            Authorization: `${localStorage.getItem("token")}`,
        },
    }).then
        ((response) => {
            return response.data;
        }).catch((error) => {
            return Promise.reject(error);
        }));
}

export async function UpdateUserProfile(name: string, email: string): Promise<any> {
    return (axios.put(apiUrlUser + "profile", {
        name,
        email,
    }).then
        ((response) => {
            return response.data;
        }).catch((error) => {
            return Promise.reject(error);
        }));
}

export default {
    Login,
    Register,
    GetUserProfile,
    UpdateUserProfile,
}