import {User} from "./user";

export interface Post{
    id: number;
    title: string;
    description: string;
    user: User;
    imageUrl: string;
}

export default Post;