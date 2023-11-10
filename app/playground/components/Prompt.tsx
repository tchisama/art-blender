'use client'
import { Button, Image, Textarea, Tooltip } from "@nextui-org/react";
import React from "react";
import { RiMagicFill } from "react-icons/ri";
import { BsDiamondFill } from "react-icons/bs";
import ImageViewer from "@/components/ImageViewer";
import axios from "axios"
import usePromptStore from "@/store/promptStore";
import useResultsStore from "@/store/resultsStore";

type Props = {}

function Prompt({}: Props) {
    const {prompt,setPrompt,module,n,width,height} = usePromptStore()
    const {setResults} = useResultsStore()
    const generateImage = () => {
        axios({
            method: 'post',
            url: 'http://localhost:3001/api/generateImage',
            data: {
                "prompt":prompt,
                "model":module,
                "n":n,
                "size":`${width}x${height}`
              }
          }).then((res)=>{
                console.log(res.data.data)
              setResults(res.data.data)

          });
    };
  return (
      <div className="flex mt-4 gap-2">
        <Button size="lg" variant="bordered" isIconOnly>
          <RiMagicFill />
        </Button>
        <Textarea
          label="Prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="type your prompt .."
          className="flex-1"
        />
        <Tooltip content="cost 10 diamonds">
            <Button
            size="lg"
            color="secondary"
            variant="shadow"
            startContent={<RiMagicFill />}
            onClick={() => generateImage()}
            >
            Generate 
            </Button>
        </Tooltip>
      </div>
  )
}

export default Prompt