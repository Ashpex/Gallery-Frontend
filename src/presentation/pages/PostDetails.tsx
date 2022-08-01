import React, { useEffect } from "react";
import Post from "../../domain/entity/post";
import User from "../../domain/entity/user";
import PostCard from "../components/PostCard/PostCard";
import TextArea from "../components/TextArea/TextArea";
import CommentCard from "../components/CommentCard/CommentCard";
import Comment from "../../domain/entity/comment";
import axios from "axios";
import { apiUrlPost } from "../../utils/constant";
let imageUrl = "https://picsum.photos/seed/picsum/600/400";
let randomtext =
  "Aliquam a tristique sapien, nec bibendum urna. Maecenas convallis dignissim turpis, non suscipit mauris interdum at. Morbi sed gravida nisl, a pharetra nulla. Etiam tincidunt turpis leo, ut mollis ipsum consectetur quis. Etiam faucibus est risus, ac condim ntum mauris consequat nec. Curabitur eget feugiat massa";
let randomtitle = "Amet consectetur";
var randomUser: User = {
  id: 1,
  name: "test",
  email: "test@gmail.com",
};
var randomPost: Post = {
  id: 1,
  title: randomtitle,
  description: randomtext,
  imageUrl: imageUrl,
  user: randomUser,
};
var randomComment: Comment = {
  id: 1,
  content: "This is a comment",
  user: randomUser,
}

interface IProps {
  postId: string;
}

const PostDetails:React.FC<IProps> = (IProps) => {
  const [post, setPost] = React.useState<Post>();
  useEffect(() => {
    axios
      .get(apiUrlPost + IProps.postId, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res: any) => {
        setPost(res.data.data as Post);
        console.log(res.data.data.topic.title);
        
      });
  }, []);
  return (
    <>
      <div className="container mx-auto flex items-center flex-col">
        {post !== undefined && <PostCard post={post} />}
        <TextArea />
        <br />
        <CommentCard comment={randomComment} />

      </div>

    </>
  );
};

export default PostDetails;
