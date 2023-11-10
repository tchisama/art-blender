import { Button, Image, Textarea, Tooltip } from "@nextui-org/react";
import React from "react";
import { RiMagicFill } from "react-icons/ri";
import { BsDiamondFill } from "react-icons/bs";
import ImageViewer from "@/components/ImageViewer";
import axios from "axios"
import Prompt from "./Prompt";

type Props = {};
function WorkSpace({}: Props) {
  return (
    <div className="p-4 flex-1 h-screen">
        <div className="flex max-w-7xl mx-auto gap-2 flex-col">

      <h2 className="text-xl">AI Image Generation</h2>
      <Prompt/>
      <h2 className="text-lg mt-6">Generations</h2>
      <div className=" grid grid-cols-3 py-4 gap-4">
        <ImageViewer img={"https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/img-UjKsI6nFA6il3dOwvkFysQXZ.png?alt=media&token=d0ead8e2-915f-4bd5-808c-d74e67e25566"}/>
        <ImageViewer img={"https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2Fimg-9ay7jozFfdSLMJNBerd3LppK.png?alt=media&token=4e2c01c7-bf66-42b8-ad24-60778e1f0f64"}/>
        <ImageViewer img={"https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2Fimg-skXmzG8SOpZ2pyZl4Kxl5RRi.png?alt=media&token=aa1531bb-9bb2-42bd-84ef-4ef04abf96bc"}/>
      </div>
        </div>
    </div>
  );
}

export default WorkSpace;
