import { Badge } from "flowbite-react";
import React, { useEffect } from "react";
import post from "../../../domain/entity/post";
import { LOCAL_URL, URL_TOPIC } from "../../../utils/constant";
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import { GetPostById } from "../../../domain/api/post";
import { CountLikes } from "../../../domain/api/like";
import { CountComments } from "../../../domain/api/comment";
interface IProps {
  post: post;
}

const PostItem: React.FC<IProps> = (props: IProps) => {
  const [topicName, setTopicName] = React.useState<string>("");
  const [topicID, setTopicID] = React.useState<string>("");
  const [likeCount, setLikeCount] = React.useState<number>(0);
  const [commentCount, setCommentCount] = React.useState<number>(0);
  var postUrl = LOCAL_URL + "posts/" + props.post.id;
  let topicUrl = URL_TOPIC + topicID;
  let picUrl = "http://localhost:8080/" + props.post.image_path;
  useEffect(() => {
    GetPostById(props.post.id).then((res: any) => {
      setTopicName(res.data.topic.title as string);
      setTopicID(res.data.topic.id as string);
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
      <div className="break-inside-avoid mb-4 max-w-sm bg-white h-fit rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={picUrl} alt="post's image" />
        </a>
        <div className="p-4">
          <a href={postUrl}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.post.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.post.description}
          </p>
          <div className="justify-between flex flex-wrap items-center gap-2">
            <Badge href={topicUrl} size="sm">
              {topicName}
            </Badge>
            <div className="flex flex-row">
              <div className="flex mr-2 cursor-pointer items-center transition hover:text-slate-600">
                <AiOutlineComment className="text-gray-600" size={18} />
                <span>{commentCount}</span>
              </div>
              <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                <AiOutlineLike className="text-gray-600" size={18} />
                <span>{likeCount}</span>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default PostItem;
