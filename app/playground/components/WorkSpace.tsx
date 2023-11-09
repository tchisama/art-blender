import { Button, Image, Textarea } from "@nextui-org/react";
import React from "react";
import { RiMagicFill } from "react-icons/ri";
type Props = {};

function WorkSpace({}: Props) {
  return (
    <div className="p-4 flex-1 gap-2 h-screen flex flex-col">
      <h2 className="text-xl">AI Image Generation</h2>
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
          className="shadow-lg"
          startContent={<RiMagicFill />}
        >
          Generate
        </Button>
      </div>
      <h2 className="text-lg mt-6">Generations</h2>
      <div className=" grid grid-cols-3 py-4 gap-4">
        <Image isBlurred width={"100%"} className="aspect-square"  alt="" src="https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2Fimg-7KveRWHsS6CKgvJ2XFYsz6VE.png?alt=media&token=88bd4a90-7c9a-4bf2-bbaa-e69f7255af26"></Image>
        <Image isBlurred width={"100%"} className="aspect-square"  alt="" src="https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2Fimg-9ay7jozFfdSLMJNBerd3LppK.png?alt=media&token=4e2c01c7-bf66-42b8-ad24-60778e1f0f64"></Image>
        <Image isBlurred width={"100%"} className="aspect-square"  alt="" src="https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2Fimg-skXmzG8SOpZ2pyZl4Kxl5RRi.png?alt=media&token=aa1531bb-9bb2-42bd-84ef-4ef04abf96bc"></Image>
      </div>
    </div>
  );
}

export default WorkSpace;
