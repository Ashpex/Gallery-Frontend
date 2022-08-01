import { Tabs } from "flowbite-react";
import React, { PropsWithChildren, useEffect } from "react";
import { Post } from "../../../domain/entity/post";
import User from "../../../domain/entity/user";
import PostItem from "../PostItem/PostItem";
import axios from "axios";
import { apiUrlPost } from "../../../utils/constant";
interface Props {
  post: Post;
}

const Tab: React.FC<PropsWithChildren> = () => {
  const [allPosts, setAllPosts] = React.useState<Post[]>([]);
  const [trendingPosts, setTrendingPosts] = React.useState<Post[]>([]);
  const [subscribedPosts, setSubscribedPosts] = React.useState<Post[]>([]);
  const [followersPosts, setFollowersPosts] = React.useState<Post[]>([]);

  useEffect(() => {
    axios
      .get(apiUrlPost, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res: any) => {
        console.log(res.data);
        setAllPosts(res.data.data as Post[]);
      });
  }, []);

  useEffect(() => {
    console.log(allPosts);
  }, [allPosts]);

  useEffect(() => {
    axios
      .get(apiUrlPost + "trending", {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res: any) => {
        console.log(res.data);
        setTrendingPosts(res.data.data as Post[]);
      });
  }, []);

  useEffect(() => {
    axios
      .get(apiUrlPost + "following", {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res: any) => {
        console.log(res.data);
        setFollowersPosts(res.data.data as Post[]);
      });
  }, []);

  useEffect(() => {
    axios
      .get(apiUrlPost + "subscribed", {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res: any) => {
        console.log(res.data);
        setSubscribedPosts(res.data.data as Post[]);
      });
  }, []);

  return (
    <>
      <Tabs.Group aria-label="Tabs with underline" style="underline">
        <Tabs.Item active={true} title="All">
          <div className="grid grid-cols-3 gap-3">
            {allPosts.map((allPosts: Post) => {
              return <PostItem post={allPosts} />;
            })}
          </div>
        </Tabs.Item>
        <Tabs.Item title="Trending">
          <div className="grid grid-cols-3 gap-3">
            {trendingPosts.map((trendingPosts: Post) => {
              return <PostItem post={trendingPosts} />;
            })}
          </div>
        </Tabs.Item>
        <Tabs.Item title="Subscribed topics">
          <div className="grid grid-cols-3 gap-3">
            {subscribedPosts.map((subscribedPosts: Post) => {
              return <PostItem post={subscribedPosts} />;
            })}
          </div>{" "}
        </Tabs.Item>
        <Tabs.Item title="Followers"></Tabs.Item>
        <div className="grid grid-cols-3 gap-3">
          {followersPosts.map((followersPosts: Post) => {
            return <PostItem post={followersPosts} />;
          })}
        </div>{" "}
      </Tabs.Group>
    </>
  );
};

export default Tab;
