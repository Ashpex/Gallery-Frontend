import axios from "axios";
import React, { useEffect } from "react";
import User from "../../domain/entity/user";
import { apiUrlPost, apiUrlUser } from "../../utils/constant";
import UserCard from "../components/UserCard/UserCard";

const Profile: React.FC = () => {
  const [currentUser, setCurrentUser] = React.useState<User>();

  useEffect(() => {
    axios
      .get(apiUrlUser + "profile", {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res: any) => {
        console.log(res.data.data);
        setCurrentUser({
          id: res.data.data.id,
          name: res.data.data.name,
          email: res.data.data.email,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(currentUser);
  });

  return <>{currentUser !== undefined && <UserCard user={currentUser} />}</>;
};

function useGetUser(): User {
  const [currentUser, setUser] = React.useState<User>();
  axios
    .get(apiUrlUser + "profile", {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
    .then((res: any) => {
      console.log(res.data.data);
      setUser(res.data.data as User);
    });
  if (currentUser === undefined) {
    throw new Error("User is undefined");
  }
  return currentUser;
}

export default Profile;
