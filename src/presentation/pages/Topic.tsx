import { Button } from "flowbite-react";
import React from "react";

const Topic = () => {
  return (
    <>
      <div>Topic</div>
      <div className="flex flex-wrap gap-2">
        <Button gradientMonochrome="info">Info</Button>
        <Button gradientMonochrome="success">Success</Button>
        <Button gradientMonochrome="cyan">Cyan</Button>
        <Button gradientMonochrome="teal">Teal</Button>
        <Button gradientMonochrome="lime">Lime</Button>
        <Button gradientMonochrome="failure">Failure</Button>
        <Button gradientMonochrome="pink">Pink</Button>
        <Button gradientMonochrome="purple">Purple</Button>
      </div>
    </>
  );
};

export default Topic;
