"use client"
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Image} from "@nextui-org/react";

export default function ImageViewer({img}:{img:string}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Image onClick={onOpen} isZoomed isBlurred width={"100%"}  alt="" src={img}></Image>
      <Modal size="3xl" backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
                    <Image width={"100%"}  alt="" src={img}></Image>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
