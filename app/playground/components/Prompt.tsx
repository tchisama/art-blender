'use client'
import { Button, Image, Textarea, Tooltip } from "@nextui-org/react";
import React from "react";
import { RiMagicFill } from "react-icons/ri";
import { BsDiamondFill ,BsStars } from "react-icons/bs";
import ImageViewer from "@/components/ImageViewer";
import axios from "axios"
import usePromptStore from "@/store/promptStore";
import useResultsStore from "@/store/resultsStore";
type Props = {}

function Prompt({}: Props) {
    const {prompt,setPrompt,module,n,size} = usePromptStore()
    const {setResults} = useResultsStore()
    const [loading, setLoading] = React.useState(false)
    const generateImage = () => {
        setLoading(true)
        axios({
            method: 'post',
            url: 'http://localhost:3001/api/generateImage',
            data: {
                "prompt":prompt,
                "model":module,
                "n":n,
                "size":size
              }
          }).then((res)=>{
                console.log(res.data.data)
              setResults(res.data.data)

          }).finally(()=>{
              setLoading(false)
          });
    };
  return (
      <div className="flex mt-4 gap-2 flex-col">
        <Textarea
          label="Prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="type your prompt .."
          className="flex-1 "
        />
        <div className="flex justify-between mt-3">
          <Tooltip content={"let me make a prompt for you"}>
            <Button disabled={loading} size="lg" variant="bordered" isIconOnly>
              <BsStars />
            </Button>
          </Tooltip>
          <Tooltip content="cost 10 diamonds">
              <Button
              isLoading={loading}
              size="lg"
              color="secondary"
              variant="shadow"
              radius="full"
              endContent={!loading && <RiMagicFill />}
              onClick={() => generateImage()}
              >
                {
                  !loading?
                  "Generate":"Generating"
                }
              </Button>
          </Tooltip>
        </div>
      </div>
  )
}

export default Prompt