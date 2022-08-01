import React, { useEffect } from "react";
import Tab from "../components/Tab/Tab";
import { apiUrlPost } from "../../utils/constant";
import SuccessAlert from "../components/Alerts/SuccessAlert";
import axios from "axios";
import ErrorAlert from "../components/Alerts/ErrorAlert";
import TopicButton from "../components/TopicButton/TopicButton";
const Home = () => {
  useEffect(() => {
    (async () => {
      axios
        .get(apiUrlPost, {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          //console.log(res)
        });
    })();
  }, []);
  return (
    <>
      <div className="container flex items-center flex-col w-full">
        <TopicButton />
      </div>
      <Tab />

    </>
  );
};

export default Home;
