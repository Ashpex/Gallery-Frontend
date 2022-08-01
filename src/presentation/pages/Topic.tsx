import axios from "axios";
import { Button } from "flowbite-react";
import React, { useEffect } from "react";
import Post from "../../domain/entity/post";
import { apiUrlPost, apiUrlTopic } from "../../utils/constant";
import PostCard from "../components/PostCard/PostCard";

interface IProps {
  topicId: string;
}

const Topic: React.FC<IProps> = (IProps) => {
  const [posts, setPosts] = React.useState<Post[]>([]);
  useEffect(() => {
    axios
      .get(apiUrlPost + "topic/" + IProps.topicId, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res: any) => {
        console.log(res.data);
        setPosts(res.data.data as Post[]);
      });
  }, []);
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {posts.map((post: Post) => {
          return <PostCard post={post} />;
        })}
      </div>
    </>
  );
};

export default Topic;
