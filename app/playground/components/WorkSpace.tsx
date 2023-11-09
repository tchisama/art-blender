import { Button, Textarea } from "@nextui-org/react";
import React from "react";
import { RiMagicFill } from "react-icons/ri";
type Props = {};

function WorkSpace({}: Props) {
  return (
    <div className="p-4 flex-1">
      <h2 className="text-xl my-4">AI Image Generation</h2>
      <div className="flex mt-4 gap-2">
        <Button size="lg" variant="bordered" isIconOnly>
          <RiMagicFill />
        </Button>
        <Textarea
          label="Prompt"
          placeholder="type your prompt .."
          className="flex-1"
        />
        <Button
          size="lg"
          color="secondary"
          className=""
          startContent={<RiMagicFill />}
        >
          Generate
        </Button>
      </div>
    </div>
  );
}

export default WorkSpace;
