import { Button } from "flowbite-react";
import React from "react";

const Topic = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/topic/1";
          }}
          gradientDuoTone="purpleToBlue"
        >
          Dog
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/topic/2";
          }}
          gradientDuoTone="cyanToBlue"
        >
          Cat
        </Button>
        <Button gradientDuoTone="greenToBlue">Kitten</Button>
        <Button gradientDuoTone="purpleToPink">Funny</Button>
        <Button gradientDuoTone="pinkToOrange">Landscape</Button>
        <Button gradientDuoTone="tealToLime">Action</Button>
        <Button gradientDuoTone="redToYellow">Nature</Button>
      </div>
    </div>
  );
};

export default Topic;
