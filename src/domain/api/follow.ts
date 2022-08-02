import axios from "axios";
import { apiUrlFollow } from "../../utils/constant";

export async function FollowUser(id: string): Promise<any> {
    return (axios.post(apiUrlFollow, {
        target_user_id: id,
    }, {
        headers: {
            Authorization: `${localStorage.getItem("token")}`,
        },
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        return Promise.reject(error);
    }));
}

export async function UnfollowUser(id: string): Promise<any> {
    return (axios.delete(apiUrlFollow + id, {
        headers: {
            Authorization: `${localStorage.getItem("token")}`,
        },
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        return Promise.reject(error);
    }));
}

export async function AllFollowersOfUser(id: string): Promise<any> {
    return (axios.get(apiUrlFollow + id, {
        headers: {
            Authorization: `${localStorage.getItem("token")}`,
        },
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        return Promise.reject(error);
    }));
}

export async function IsFollowing(id: string): Promise<any> {
    return (axios.get(apiUrlFollow + "is_following/" + id, {
        headers: {
            Authorization: `${localStorage.getItem("token")}`,
        },
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        return Promise.reject(error);
    }));
}