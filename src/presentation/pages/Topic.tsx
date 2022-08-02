import axios from "axios";
import { Button } from "flowbite-react";
import React, { useEffect } from "react";
import Post from "../../domain/entity/post";
import PostCard from "../components/PostCard/PostCard";
import {GetTopicById } from "../../domain/api/topic";
import { GetAllPostsByTopicId } from "../../domain/api/post";
import {SubscribeTopic, UnsubscribeTopic, CountSubscribersOfTopic} from "../../domain/api/subscribe";
interface IProps {
  topicId: string;
}
const Topic: React.FC<IProps> = (IProps) => {
  const [topicName, setTopicName] = React.useState("");
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [CountSubscribers, setCountSubscribers] = React.useState(0);
  useEffect(() => {
    GetAllPostsByTopicId(IProps.topicId).then((res: any) => {
      setPosts(res.data as Post[]);
    });
  }, []);

  useEffect(() => {
    GetTopicById(IProps.topicId).then((res: any) => {
      setTopicName(res.data.title as string);
    });
  }, []);

  useEffect(() => {
    CountSubscribersOfTopic(IProps.topicId).then((res: any) => {
      console.log(res);
      setCountSubscribers(res.data as number);
    });
  }
  , []);

  return (
    <>
      <div className="container px-4 mx-auto">
        <div id="title" className="text-center my-10">
          <h1 className="font-bold text-4xl text-black">{topicName}</h1>
          <p className="text-light text-gray-500 text-xl">
            {CountSubscribers} subscribers
          </p>
          <br />
          <div className="flex flex-wrap gap-2 justify-center">
            <Button onClick={handleSubscribe(IProps.topicId)}>Subscribe</Button>
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

function handleSubscribe(
  topicId: string
): React.MouseEventHandler<HTMLButtonElement> | undefined {
  return (event) => {
    SubscribeTopic(topicId).then((res: any) => {
      console.log(res);
    });
  };
}
