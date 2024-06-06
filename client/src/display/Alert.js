import React, { useContext, useState } from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    Button,
    useDisclosure,
    Input,
    Text
  } from '@chakra-ui/react';
  import axios from 'axios';
  import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'
  import {UserContext} from "../context/UserContext.js";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

  function Alert() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef();
    const [weight, setWeight]=useState("");

    const [amount, setAmount]=useState(0);
    const [step, setStep]=useState(0);
    
    const {user, setUser, bmi}=useContext(UserContext);

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
        } catch (error) {
            console.error(error);
        }
  }

    const handleChange=(e)=>{
        console.log(e.target.value)
        let val=e.target.value;
        val=val/100 + val%100 + val%10;
        setAmount(e.target.value);
        setStep(val);
    }

    const handleClick=async(e)=>{

      e.preventDefault();

      let res = await axios.post('http://localhost:8000/order', { ...data }).then(res => {

          // console.log(res)
          if (res.data && res.data.data.instrumentResponse.redirectInfo.url) {
              window.location.href = res.data.data.instrumentResponse.redirectInfo.url;
          }
      })
          .catch(error => {
              console.error(error);
          });
    }

    

  //   useEffect(()=>{
  //     Weight();
  // }, [])

    // console.log(user.data[0]);
    let userData=user.data[0];

    let bm=0;
    if(bmi==='Normal') bm=20;
    else bm=5;

    const data = {
        name: user.data[0].name,
        amount: step + bm,
        number: user.data[0].mobile,
        MUID: "MUID" + Date.now(),
        transactionId: 'T' + Date.now(),
    }


  
    return (
      <>
        <Button variant='solid' colorScheme='orange' onClick={onOpen}>
          Donate Now
        </Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          
        >
          <AlertDialogOverlay>
            <AlertDialogContent backgroundColor="#FDFAF3">
              <AlertDialogHeader fontSize='lg' fontWeight='bold' textColor="#A47000 ">
                Donate Money
              </AlertDialogHeader>
  
              <AlertDialogBody>
                <Text>Money due to {bmi} BMI- {bm}</Text>
               Enter the steps you have waked today.
               <Input type="number" value={amount} onChange={handleChange}></Input>
              </AlertDialogBody>
  
              <AlertDialogFooter>
                {/* <Link component={Link} to={`/Payment`} state={amount}> */}
                <Button onClick={handleClick} colorScheme="orange" variant='solid'>
                  Donate Now
                </Button>
                {/* </Link> */}
                <Button onClick={onClose} ml={3} colorScheme='red' variant="outline">
                  Cancel
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }

export default Alert