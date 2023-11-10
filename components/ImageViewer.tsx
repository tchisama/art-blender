"use client"
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Image} from "@nextui-org/react";

export default function ImageViewer() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Image onClick={onOpen} isZoomed isBlurred width={"100%"}  alt="" src="https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/img-UjKsI6nFA6il3dOwvkFysQXZ.png?alt=media&token=d0ead8e2-915f-4bd5-808c-d74e67e25566"></Image>
      <Modal size="3xl" backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
                    <Image isZoomed width={"100%"}  alt="" src="https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/img-UjKsI6nFA6il3dOwvkFysQXZ.png?alt=media&token=d0ead8e2-915f-4bd5-808c-d74e67e25566"></Image>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
