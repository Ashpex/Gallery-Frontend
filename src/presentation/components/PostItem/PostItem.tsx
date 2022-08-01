import axios from "axios";
import { Badge } from "flowbite-react";
import React, { useEffect } from "react";
import post from "../../../domain/entity/post";
import { apiUrlPost, apiUrlTopic } from "../../../utils/constant";
interface IProps {
  post: post;
}


const PostItem: React.FC<IProps> = (props: IProps) => {
  var postUrl = "http://localhost:3000/posts/" + props.post.id;
  const [topic, setTopic] = React.useState<string>("");
 
  useEffect(() => {
    axios
      .get(apiUrlPost + props.post.id, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res: any) => {
        console.log(res.data.data.topic.title);
        setTopic(res.data.data.topic.title as string);
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
          </div>
          <br />
          <a
            href={postUrl}
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default PostItem;

