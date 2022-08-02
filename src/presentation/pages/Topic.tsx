import axios from "axios";
import { Button } from "flowbite-react";
import React, { useEffect } from "react";
import Post from "../../domain/entity/post";
import { apiUrl, apiUrlPost, apiUrlSubscribe, apiUrlTopic } from "../../utils/constant";
import PostCard from "../components/PostCard/PostCard";

interface IProps {
  topicId: string;
}
const Topic: React.FC<IProps> = (IProps) => {
  const [topicName, setTopicName] = React.useState("");
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
  useEffect(() => {
    axios
      .get(apiUrlTopic + IProps.topicId, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res: any) => {
        console.log(res.data);
        setTopicName(res.data.data.title as string);
      });
  }, []);
  return (
    <>
      <div className="container px-4 mx-auto">
        <div id="title" className="text-center my-10">
          <h1 className="font-bold text-4xl text-black">{topicName}</h1>
          <p className="text-light text-gray-500 text-xl">
            Funny {topicName} Content
          </p>
          <br />
          <div className="flex flex-wrap gap-2 justify-center">
            <Button onClick={handleSubscribe(IProps.topicId)}>
            Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {posts.map((post: Post) => {
          return <PostCard post={post} />;
        })}
      </div>
    </>
  );
};

export default Topic;


function handleSubscribe(topicId: string): React.MouseEventHandler<HTMLButtonElement> | undefined {
  return (event) => {
    axios
      .post(apiUrlSubscribe + topicId, {}, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res: any) => {
        console.log(res.data);
      });
  }
}

