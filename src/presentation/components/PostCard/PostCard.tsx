import axios from "axios";
import React, { useEffect } from "react";
import Post from "../../../domain/entity/post";
import {
  apiUrlComment,
  apiUrlLike,
  apiUrlPost,
  LOCAL_URL,
} from "../../../utils/constant";
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import { GetPostById } from "../../../domain/api/post";
import { CountLikes } from "../../../domain/api/like";
import { CountComments } from "../../../domain/api/comment";
interface IProps {
  post: Post;
}
const PostCard: React.FC<IProps> = (props: IProps) => {
  const [topicID, setTopicID] = React.useState<number>(0);
  const [topic, setTopic] = React.useState<string>("");
  const [likeCount, setLikeCount] = React.useState<number>(0);
  const [commentCount, setCommentCount] = React.useState<number>(0);
  const [userURl, setUserURl] = React.useState<string>("");
  useEffect(() => {
    GetPostById(props.post.id).then((res: any) => {
      setTopicID(res.data.topic.id as number);
      setTopic(res.data.topic.title as string);
      setUserURl(LOCAL_URL + "user/" + res.data.user.id);
      console.log(res.data.user.id);
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
      <div className="flex items-center justify-center min-h-full">
        {" "}
        <div className="rounded-xl border p-5 shadow-md bg-white">
          <div className="flex w-full items-center justify-between border-b pb-3">
            <a href={userURl}>
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
                <div className="text-lg font-bold text-slate-700">
                  {props.post.user.name}
                </div>
              </div>
            </a>

            <div className="flex items-center space-x-8">
              <button
                className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold"
                onClick={handleTopicClick(topicID)}
              >
                {topic}
              </button>
              <div className="text-xs text-neutral-500">2 hours ago</div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="mb-3 text-xl font-bold">{props.post.title}</div>
            <div className="text-sm text-neutral-600">
              {props.post.description}
            </div>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-lg"
                  src="https://picsum.photos/seed/picsum/1800/800"
                  alt="post's image"
                />
              </a>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-slate-500">
              <div className="flex space-x-4 md:space-x-8">
                <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                  <AiOutlineComment
                    className="text-gray-600"
                    size={20}
                    onClick={handleLikeClick()}
                  />

                  <span>{commentCount}</span>
                </div>
                <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                  <AiOutlineLike className="text-gray-600" size={20} />

                  <span>{likeCount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function handleTopicClick(
  id: number
): React.MouseEventHandler<HTMLButtonElement> | undefined {
  return (event) => {
    event.preventDefault();
    window.location.href = `/topic/${id}`;
  };
}
export default PostCard;
function handleLikeClick(): React.MouseEventHandler<SVGElement> | undefined {
  return (event) => {
    event.preventDefault();
    console.log("like");
  };
}
