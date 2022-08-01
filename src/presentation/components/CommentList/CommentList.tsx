import axios from "axios";
import React, { PropsWithChildren, useEffect } from "react";
import Comment from "../../../domain/entity/comment";
import { apiUrlComment } from "../../../utils/constant";
import CommentCard from "../CommentCard/CommentCard";
interface IProps {
  postID: string;
}
const CommentList: React.FC<IProps> = (IProps) => {
  const [comments, setComments] = React.useState<Comment[]>([]);
  useEffect(() => {
    axios
      .get(apiUrlComment + "post/" + IProps.postID, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res: any) => {
        console.log(res.data);
        setComments(res.data.data as Comment[]);
      });
  }, []);
  return (
    <div className="w-full">
      {comments.map((comments: Comment) => {
        return <CommentCard comment={comments} />;
      })}
    </div>
  );
};

export default CommentList;
