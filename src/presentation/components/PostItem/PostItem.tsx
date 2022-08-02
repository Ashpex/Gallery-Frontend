import axios from "axios";
import { Badge } from "flowbite-react";
import React, { useEffect } from "react";
import post from "../../../domain/entity/post";
import {
  apiUrlComment,
  apiUrlLike,
  apiUrlPost,
  apiUrlTopic,
  LOCAL_URL,
} from "../../../utils/constant";
import { GetAllTopics } from "../../../domain/api/topic";
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import { GetPostById } from "../../../domain/api/post";
import { CountLikes } from "../../../domain/api/like";
import { CountComments } from "../../../domain/api/comment";
interface IProps {
  post: post;
}

const PostItem: React.FC<IProps> = (props: IProps) => {
  var postUrl = LOCAL_URL + "posts/" + props.post.id;
  const [topic, setTopic] = React.useState<string>("");
  const [likeCount, setLikeCount] = React.useState<number>(0);
  const [commentCount, setCommentCount] = React.useState<number>(0);

  useEffect(() => {
    GetPostById(props.post.id).then((res: any) => {
      setTopic(res.data.topic.title as string);
    });
  }, []);

  useEffect(() => {
    CountLikes(props.post.id).then((res: any) => {
      setLikeCount(res.data as number);
    });
  }, []);

  useEffect(() => {
    CountComments(props.post.id).then((res: any) => {
      setCommentCount(res.data as number);
    });
  }, []);

  return (
    <>
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src="https://picsum.photos/seed/picsum/600/400"
            alt="post's image"
          />
        </a>
        <div className="p-5">
          <a href={postUrl}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.post.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.post.description}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Badge href="#" size="sm">
              {topic}
            </Badge>
            <div className="flex cursor-pointer items-center transition hover:text-slate-600">
              <AiOutlineComment className="text-gray-600" size={18} />
              <span>{commentCount}</span>
            </div>
            <div className="flex cursor-pointer items-center transition hover:text-slate-600">
              <AiOutlineLike className="text-gray-600" size={18} />
              <span>{likeCount}</span>
            </div>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default PostItem;
