"use client"
import { Button, Image, Textarea, Tooltip } from "@nextui-org/react";
import React from "react";
import { RiMagicFill } from "react-icons/ri";
import { BsDiamondFill } from "react-icons/bs";
import ImageViewer from "@/components/ImageViewer";
import axios from "axios"
import Prompt from "./Prompt";
import useResultsStore from "@/store/resultsStore";

type Props = {};
function WorkSpace({}: Props) {
  const {results,setResults} = useResultsStore()
  return (
    <div className=" flex-1 h-screen">
        <div className="flex p-4 h-screen max-w-7xl mx-auto gap-2 flex-col">

      <h2 className="text-xl">AI Image Generation</h2>
      <Prompt/>
      <h2 className="text-lg mt-6">Generations</h2>
      <div className="flex-1 overflow-y-auto p-8 rounded-3xl">
      <div className=" grid grid-cols-3 py-4 gap-6">
        {
          results.map((r,i)=>(
            <>
            <ImageViewer key={i} img={r.url}/>
            <div className="flex col-span-2 p-6 gap-6 flex-col">
              <h2 className="text-2xl">
                  Revised Prompt
              </h2>
              <p className="">{r.prompt}</p>
            </div>
            </>
            
          ))
        }
      </div>
      </div>
        </div>
    </div>
  );
}

export default WorkSpace;
