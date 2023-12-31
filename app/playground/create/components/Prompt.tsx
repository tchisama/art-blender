'use client'
import { Button, Image, Textarea, Tooltip } from "@nextui-org/react";
import React from "react";
import { RiMagicFill } from "react-icons/ri";
import { BsDiamondFill ,BsStars } from "react-icons/bs";
import { BiSolidImageAlt } from "react-icons/bi"
import ImageViewer from "@/components/ImageViewer";
import axios from "axios"
import usePromptStore from "@/store/promptStore";
import useResultsStore from "@/store/resultsStore";
import {TbDiamondFilled} from "react-icons/tb"
import {useQuery } from "@tanstack/react-query";
import useUserStore from "@/store/userStore";
type Props = {}

function Prompt({}: Props) {
    const {prompt,setPrompt,module,n,size,dallev} = usePromptStore()
    const {setResults} = useResultsStore()
    const [loading, setLoading] = React.useState(false)
    const [promptLoading,setPromptLoading] = React.useState(false)
    const {user} = useUserStore()
    const generateImage = () => {
        setLoading(true)
        axios({
            method: 'post',
            url: 'http://localhost:3001/api/generateImage',
            data: {
                "prompt":prompt,
                "model":module,
                "n":dallev=="dall-e-3"?1:n,
                "dallev":dallev,
                "size":(dallev=="dall-e-3")?"1024x1024":size,
                "userId": user?._id??""
              }
          }).then((res)=>{
                console.log(res.data.data)
              setResults(res.data.data)

          }).finally(()=>{
              setLoading(false)
          });
    };

    const createPrompt = ()=>{
        setPromptLoading(true)
        axios.post("http://localhost:3001/prompts/createPrompt",{
            module
        }).then((res)=>{
            setPrompt(res.data.prompt)
        }).catch(()=>{
            console.log("failed to create prompt")
        }).finally(()=>{
            setPromptLoading(false)
        })
    }

  return (
      <div className="flex mt-4 gap-2 flex-col">
        <Textarea
          label="Prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="type your prompt .."
          className="flex-1 "
        />
        <div className="flex justify-start gap-2 mt-3">
          <Tooltip content={"Random Prompt"}>
            <Button isLoading={promptLoading} onClick={createPrompt} disabled={loading} size="lg" variant="bordered" isIconOnly>
              <BsStars />
            </Button>
          </Tooltip>
          <Tooltip content={"Steal Style"}>
            <Button disabled={loading} size="lg" variant="bordered" isIconOnly>
              <BiSolidImageAlt />
            </Button>
          </Tooltip>
          <Tooltip content="cost 10 diamonds">
              <Button
              isLoading={loading}
              size="lg"
              color="secondary"
              disabled={!(prompt&&size&&module&&dallev)}
              variant="shadow"
              radius="full"
              startContent={!loading && <RiMagicFill />}
              onClick={() => generateImage()}
              className="flex gap-2 ml-auto"
              >
                <div>
                {
                  !loading?
                  "Generate":"Generating"
                }
                </div>
                <div>|</div>
                <div className="flex items-center gap-2 ">15 <TbDiamondFilled/> </div>
              </Button>
          </Tooltip>
        </div>
      </div>
  )
}

export default Prompt