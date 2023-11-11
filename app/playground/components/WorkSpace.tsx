"use client"
import { Button, Image, Textarea, Tooltip } from "@nextui-org/react";
import React from "react";
import { RiMagicFill } from "react-icons/ri";
import { BsDiamondFill } from "react-icons/bs";
import ImageViewer from "@/components/ImageViewer";
import axios from "axios"
import Prompt from "./Prompt";
import useResultsStore from "@/store/resultsStore";
import {FiDownload} from "react-icons/fi"
import {PiShareFatBold as FaShare} from "react-icons/pi"

type Props = {};
function WorkSpace({}: Props) {
  const {results,setResults} = useResultsStore()


  return (
    <div className=" flex-1 h-screen">
        <div className="flex p-4 h-screen max-w-[1600px] mx-auto gap-2 flex-col">

      <h2 className="text-xl">AI Image Generation</h2>
      <Prompt/>
      <h2 className="text-lg mt-6">Generations</h2>
      <div className="flex-1 overflow-y-auto p-8 rounded-3xl">
      <div className=" grid grid-cols-1 lg:grid-cols-5 py-4 gap-6">
        {
          results.map((r,i)=>(
            <>
            <div className="rotate-0 lg:col-span-2">
              <ImageViewer key={i} img={r.url}/>
            </div>
            <div className="flex lg:col-span-3 p-6 gap-6 flex-col">
              <h2 className="text-2xl">
                  Revised Prompt
              </h2>
              <p className="flex-1">{r.prompt}</p>
              <div className="flex justify-end gap-2">
                <Button variant="bordered" size="lg"  startContent={<FaShare/>}>Share</Button>
                <a onClick={e=>e.defaultPrevented()} download={r.url} href={r.url}>
                    <Button  size="lg" variant="solid" color={"secondary"}  startContent={<FiDownload/>}>Download</Button>
                </a>
              </div>
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
