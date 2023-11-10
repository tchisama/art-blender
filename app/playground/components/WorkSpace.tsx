import { Button, Image, Textarea, Tooltip } from "@nextui-org/react";
import React from "react";
import { RiMagicFill } from "react-icons/ri";
import { BsDiamondFill } from "react-icons/bs";
import ImageViewer from "@/components/ImageViewer";
type Props = {};

function WorkSpace({}: Props) {
    const ginerateImage = () => {
        
    };
  return (
    <div className="p-4 flex-1 h-screen">
        <div className="flex max-w-7xl mx-auto gap-2 flex-col">

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
        <Tooltip content="cost 10 diamonds">
            <Button
            size="lg"
            color="secondary"
            variant="shadow"
            startContent={<RiMagicFill />}
            onClick={() => ginerateImage()}
            >
            Generate 
            </Button>
        </Tooltip>
      </div>
      <h2 className="text-lg mt-6">Generations</h2>
      <div className=" grid grid-cols-3 py-4 gap-4">
        <ImageViewer/>
        <Image isZoomed isBlurred width={"100%"}  alt="" src="https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2Fimg-9ay7jozFfdSLMJNBerd3LppK.png?alt=media&token=4e2c01c7-bf66-42b8-ad24-60778e1f0f64"></Image> 
        <Image isZoomed isBlurred width={"100%"}  alt="" src="https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2Fimg-skXmzG8SOpZ2pyZl4Kxl5RRi.png?alt=media&token=aa1531bb-9bb2-42bd-84ef-4ef04abf96bc"></Image> 
      </div>
        </div>
    </div>
  );
}

export default WorkSpace;
