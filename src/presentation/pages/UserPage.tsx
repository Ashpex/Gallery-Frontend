import axios from "axios";
import React, { useEffect } from "react";
import User from "../../domain/entity/user";
import { apiUrlPost, apiUrlUser } from "../../utils/constant";
import UserCard from "../components/UserCard/UserCard";
import { GetUserProfileByID } from "../../domain/api/user";
import Post from "../../domain/entity/post";
import PostItem from "../components/PostItem/PostItem";

interface IProps {
  userID: string;
}
const UserPage: React.FC<IProps> = (props: IProps) => {
  const [currentUser, setCurrentUser] = React.useState<User>();
  const [allPosts, setAllPosts] = React.useState<Post[]>([]);

  useEffect(() => {
    GetUserProfileByID(props.userID)
      .then((res: any) => {
        setCurrentUser({
          id: res.data.id,
          name: res.data.name,
          email: res.data.email,
        });
        setAllPosts(res.data.posts as Post[]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {currentUser !== undefined && <UserCard user={currentUser} />}

      <div className="grid grid-cols-3 gap-3 mt-5">
        {allPosts.map((allPosts: Post) => {
          return <PostItem post={allPosts} />;
        })}
      </div>
    </>
  );
};

export default UserPage;
