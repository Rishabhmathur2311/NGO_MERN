import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button, ButtonGroup,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    } from '@chakra-ui/react'
import { NavLink } from "react-router-dom";
import Alert from "./Alert.js";

export function ManualClose(prop) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Button onClick={onOpen} colorScheme="orange" variant="outline" >Know More</Button>
  
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}
        
        >
          <ModalOverlay />
          <ModalContent
          backgroundColor="#FDFAF3"
          >
            <ModalHeader>{prop.prop.title}</ModalHeader>
            <ModalHeader>{prop.prop.ngoName}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              {prop.prop.description}
            </ModalBody>
  
            <ModalFooter>
              {/* <Button colorScheme='orange' mr={3}
              onClick={handleClick}
              >
                Donate Now
              </Button>
               */}
               <ButtonGroup spacing='2'>
               <Alert />
              <Button onClick={onClose} colorScheme="red" variant="outline">Cancel</Button>
              </ButtonGroup>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }