import React, { useEffect } from "react";
import Post from "../../domain/entity/post";
import PostCard from "../components/PostCard/PostCard";
import axios from "axios";
import { apiUrlPost } from "../../utils/constant";
import CommentList from "../components/CommentList/CommentList";
import CommentBox from "../components/CommentBox/CommentBox";

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
      <div className="container mx-auto flex items-center flex-col w-full">
        {post !== undefined && <PostCard post={post} />}
        <br />
        <CommentBox postId={IProps.postId}/>
        <CommentList postID={IProps.postId} />
      </div>

    </>
  );
};

export default PostDetails;
