import axios from "axios";
import { apiUrlLike } from "../../utils/constant";

export async function LikePost(id: string): Promise<any> {
    return (axios.post(apiUrlLike + id, {
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

export async function UnlikePost(id: string): Promise<any> {
    return (axios.delete(apiUrlLike + id, {
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

export async function GetAllLikes(id: string): Promise<any>{
    return (axios.get(apiUrlLike + id, {
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

export async function CountLikes(id: number): Promise<any>{
    return (axios.get(apiUrlLike + "count/" + id, {
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

export async function IsLiked(id: string): Promise<any>{
    return (axios.get(apiUrlLike + "is_liked/" + id, {
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

export default {
    LikePost,
    UnlikePost,
    GetAllLikes,
    CountLikes,
    IsLiked,
}