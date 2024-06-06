import React, { useContext, useEffect, useState } from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
  } from '@chakra-ui/react'
import { UserContext } from '../context/UserContext';

const Profile = () => {

    const [weight, setWeight]=useState('');
    const [age, setAge]=useState('');
    const [height, setHeight]=useState('');
    const [gender, setGender]=useState('');
    const {user, setBmi}=useContext(UserContext);

    const Weight=async()=>{

        const options = {
            method: 'POST',
            url: 'https://fitness-api.p.rapidapi.com/fitness',
            headers: {
              'x-rapidapi-key': '4ca467b263mshdbbbf610a492262p12d41fjsn3158e008e51d',
              'x-rapidapi-host': 'fitness-api.p.rapidapi.com',
              'Content-Type': 'application/json'
            },
            data: {
              height: user.data[0].height,
              weight: user.data[0].weight,
              age: user.data[0].age,
              gender: user.data[0].gender,
              exercise: 'little',
              neck: '41',
              hip: '100',
              waist: '88',
              goal: 'maintenance',
              deficit: '500',
              goalWeight: '85'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data);
              setWeight(response.data);
              setBmi(response.data.bodyMassIndex.conclusion);
          } catch (error) {
              console.error(error);
          }
    }

    useEffect(()=>{
        Weight();
    }, [])

    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>

<Button onClick={onOpen}
colorScheme="orange"
variant='outline'
marginLeft='10%'
>Visit Profile</Button>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent
  display='flex'
  justifyContent='center'
  alignItems='center'
  >
    <ModalHeader
    
    >
      {console.log(user)}
        <Image
        src={user.data[0].profile}
        alt='profile'
        boxSize='100px'
        objectFit='cover'
        borderRadius='full'
        marginLeft='32.5%'
        >
        </Image>
        <Heading
          textColor='#A47000'
        >
        {user.data[0].name}
        </Heading>
        <Text>
          
        </Text>
    </ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      {Object.keys(weight).length!==0?
      <Box
        fontFamily='initial'
        fontSize='lg'
        as='b'
        textColor='#A47000'
      >
                <Text>
                    {/* {console.log(user)} */}
                    
                    </Text>
                    <Text display='flex' justifyContent='center' alignItems='center'>
                    Email: {user.data[0].email}
                    </Text>
                    <Text display='flex' justifyContent='center' alignItems='center'>
                    Mobile: {user.data[0].mobile}

                </Text>
                <Text display='flex' justifyContent='center' alignItems='center'>
        Body Fat percentage={weight.bodyFatPercentage.bmi.value}{weight.bodyFatPercentage.bmi.unit[0]}({weight.bodyFatPercentage.bmi.conclusion})
        </Text>
        <Text display='flex' justifyContent='center' alignItems='center'>
        Body Mass Index={weight.bodyMassIndex.value}{weight.bodyMassIndex.unit}({weight.bodyMassIndex.conclusion})
        </Text>
        <Text display='flex' justifyContent='center' alignItems='center'>
            Idle Body Weight={weight.idealBodyWeight.devine.metric.value}{weight.idealBodyWeight.devine.metric.unit[0]}
        </Text>
        <Text display='flex' justifyContent='center' alignItems='center'>
            Lean Body Mass={weight.leanBodyMass.bmi.value}{weight.leanBodyMass.bmi.unit[0]}
        </Text>
        <Text display='flex' justifyContent='center' alignItems='center'>
            Needed Energy per Day={weight.neededEnergy.bmi.calories.value}{weight.neededEnergy.bmi.calories.unit[0]}
        </Text>
        <Text display='flex' justifyContent='center' alignItems='center'>
        Body Fat percentage=17.3%(Acceptable)
        </Text>

            </Box>
            :
            <Box>
            Loading
            </Box>
            }


    </ModalBody>

    <ModalFooter>
      <Button colorScheme='orange' variant='outline' mr={3} onClick={onClose}>
        Close
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>

    </Box>
  );
};

export default Profile;