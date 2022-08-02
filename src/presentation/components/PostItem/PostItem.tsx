import axios from "axios";
import { Badge } from "flowbite-react";
import React, { useEffect } from "react";
import post from "../../../domain/entity/post";
import { apiUrlPost, apiUrlTopic, LOCAL_URL } from "../../../utils/constant";
interface IProps {
  post: post;
}


const PostItem: React.FC<IProps> = (props: IProps) => {
  var postUrl = LOCAL_URL + "posts/" + props.post.id;
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

        </div>
      </div>
    </>
  );
};

export default PostItem;

