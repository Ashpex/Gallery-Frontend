import { Label, Textarea } from "flowbite-react";
import React from "react";

const TextArea = () => {
  return (
    <>
      <div className="items-center justify-center w-9/12">
        <div id="textarea">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Your message" />
          </div>
          <Textarea
            id="comment"
            placeholder="Leave a comment..."
            required={true}
            rows={4}
          />
        </div>
      </div>
    </>
  );
};

export default TextArea;
