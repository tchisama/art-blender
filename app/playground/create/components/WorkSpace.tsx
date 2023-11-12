"use client"
import { Button, Card, CardBody, CardFooter, Image, Textarea, Tooltip } from "@nextui-org/react";
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
      <div className="flex-1 rounded-3xl">
      <div className="grid grid-cols-1 gap-6">
        {
          results.map((r,i)=>(
            // <Card key={i} className="max-w-none flex gap-2">
            // </Card>
          <div
            key={i}
          >

            <div className="flex gap-12 p-4">
                <div className="flex-[4]">
                    <ImageViewer key={i} img={r.url}/>
                </div>
                {/* <div className="flex flex-[3]  gap-6 flex-col">
                  <h2 className="text-2xl">
                      Revised Prompt
                  </h2>
                  <p className="flex-1">{r.prompt}</p>
                </div> */}
              <div className="flex flex-col flex-[4] justify-end gap-2">
                  <h2 className="text-2xl mt-2">
                      Revised Prompt
                  </h2>
                  <p className="flex-1 ">{r.prompt}</p>
                  <div className="flex justify-end gap-2">
                    <Button variant="light" size="lg"  startContent={<FaShare/>}>Share</Button>
                    <a download={r.url} href={r.url}>
                        <Button  size="lg" variant="solid"  startContent={<FiDownload/>}>Download</Button>
                    </a>
                  </div>
              </div>
            </div>
          </div>
          ))
        }
      </div>
      </div>
        </div>
    </div>
  );
}

export default WorkSpace;
