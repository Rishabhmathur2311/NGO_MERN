import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button, ButtonGroup,
useDisclosure,
Modal,
ModalOverlay,
ModalContent,
ModalHeader,
ModalCloseButton,
ModalBody,
ModalFooter,
Box
} from '@chakra-ui/react'
import { ManualClose } from "./Modal";
import Alert from "./Alert";
import Payment from "../payment/Payment";


const CardCmp=(prop)=>{

  const [expandedCount, setExpandedCount] = useState(2);
  const handleToggle = () =>
    setExpandedCount(expandedCount ? undefined : 2);


    return (
        <Box display="flex flex-wrap" justifyContent="center" alignItems="center" marginLeft='4%' >
            <Card maxW='sm' backgroundColor="#FFF8EB">
  <CardBody
  >
    <Box
    display="flex"
    justifyContent="center"
    >
    <Image
      src={prop.prop.photo}
      alt='Photo'
      borderRadius='lg'
      
      
    />
    </Box>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{prop.prop.title}</Heading>
      <Text as='b' >-{prop.prop.ngoName}</Text>
      <Text as='b'>{prop.prop.city}, {prop.prop.state}</Text>
      <Text>{prop.prop.type}</Text>
      <Box
      display="inline-block"
      as="span"
    >
      
      <Box noOfLines={expandedCount}>{prop.prop.description}</Box>
      <Button
        size="sm"
        variant="link"
        fontWeight="bold"
        colorScheme="slate"
        textColor="brown"
        textDecoration="underline"
        onClick={handleToggle}
      >
        {!expandedCount ? 'Show less' : 'Read more'}
      </Button>
    </Box>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='20'>
      <Alert />
      <Box>
      <ManualClose prop={prop.prop}/>
      </Box>
    </ButtonGroup>
  </CardFooter>
</Card>
        </Box>
    );
}

export default CardCmp;