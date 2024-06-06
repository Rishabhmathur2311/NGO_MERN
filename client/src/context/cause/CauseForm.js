import React, { useState, useContext } from "react";

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    VStack,
    Button,
    Box,
    Avatar,
    InputLeftElement,
    InputGroup,
    InputRightElement,
    InputLeftAddon,
    Select,
    Textarea,
    Heading,
  } from '@chakra-ui/react';
import { NavLink } from "react-router-dom";
import { CreateCause } from "../../api";
import {UserContext} from "../UserContext.js";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'

const SignUp=()=>{

    const [title, setTitle]=useState("");
    const [ngoName, setngoName]=useState("");
    const [description, setDescription]=useState("");
    const [UPI,setUPI]=useState("");
    const [type, setType]=useState("");
    const [address, setAddress]=useState("");
    const [proof, setProof]=useState("");
    const [photo, setPhoto]=useState("");
    const [amount, setAmount]=useState(0);
    const [city, setCity]=useState("");
    const [state, setState]=useState("");

    const [show, setShow] = React.useState(false);
    const {user, setUser}=useContext(UserContext);
    const handleClick = () => setShow(!show)
  

    const convertToBase64=(e)=>{
      console.log(e);
      var reader=new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=()=>{
          setProof(reader.result);
          console.log(reader.result);
      };

      reader.onerror=error=>{
          console.log("Error: ",  error)
      };
    } 

    const convertToBase64Photo=(e)=>{
        console.log(e);
        var reader=new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=()=>{
            setPhoto(reader.result);
            console.log(reader.result);
        };
  
        reader.onerror=error=>{
            console.log("Error: ",  error)
        };
    }

    const Create=async ()=>{
        console.log(user[0]);
      const data={
        // name: user[0].name,
        // mobile: user[0].mobile,
        ngoName: ngoName,
        title: title,
        description: description,
        UPI: UPI,
        type: type,
        address: address,
        proof: proof,
        photo: photo,
        city: city,
        state: state,
      }

      console.log(data);

      let response=await CreateCause(data);
    }

    const handleAddrTypeChange=(e)=>{
        setType(e.target.value);
      }

    

    return (

        <Box>
            <Box>
            <Box as="b">
            <Breadcrumb fontWeight='3xl' fontSize='lg' padding='2%' textColor='#A47000'>
            <BreadcrumbItem>
                <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='/mainPage'>Main Page</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='/newCause'>NGO Registration</BreadcrumbLink>
            </BreadcrumbItem>

            </Breadcrumb>
            </Box>
            <Heading margin="2%" textColor='#A47000'>
                Register a new NGO
            </Heading>
            </Box>
    <VStack>
        <Avatar
        bg='#D0750E ' 
        marginTop="1%"
        marginBottom="1%"
        size="2xl" />
        <FormControl width="60%">
            <FormLabel>
                Name of Organisation
            </FormLabel>
            <Input placeholder="Enter name Of organisation"
            onChange={(e)=>setngoName(e.target.value)}
            value={ngoName}
            bg="#fff"
            />
        </FormControl>

        <FormControl width="60%">
            <FormLabel>
                Title of Charity
            </FormLabel>
            <Input placeholder="Enter Title of Charity"
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
            bg="#fff"
            />
        </FormControl>

        <FormControl width="60%">
            <FormLabel>
                Description
            </FormLabel>
            <Textarea placeholder="Enter description"
            onChange={(e)=>setDescription(e.target.value)}
            value={description}
            bg="#fff"
            />
        </FormControl>
        <FormControl width="60%">
            <FormLabel>
                Enter UPI ID
            </FormLabel>
            <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter UPI'
              onChange={(e)=>setUPI(e.target.value)}
              value={UPI}
              bg="#fff"
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick} colorScheme="orange" variant='outline'>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>


        <FormControl width="60%">
        <FormLabel>
            Charity Type
        </FormLabel>
            <Select variant='outline' placeholder='Select Charity Type'
            onChange={handleAddrTypeChange}
            bg="#fff"
            >
            <option value='Education'>Education</option>
            <option value='Health'>Health</option>
            <option value='Environment' >Environment</option>
            <option value='Social welfare'>Social Welfare</option>
            </Select>
        </FormControl>

        <FormControl width="60%">
            <FormLabel>
                Organisation Street Address
            </FormLabel>
            <InputGroup>
                <Input
                    placeholder="Enter address"
                    onChange={(e)=>setAddress(e.target.value)}
                    bg="#fff"
                />
            </InputGroup>
        </FormControl>

        <FormControl width="60%">
            <FormLabel>
                City
            </FormLabel>
            <InputGroup>
                <Input
                    placeholder="Enter city"
                    onChange={(e)=>setCity(e.target.value)}
                    bg="#fff"
                />
            </InputGroup>
        </FormControl>

        <FormControl width="60%">
            <FormLabel>
                State
            </FormLabel>
            <InputGroup>
                <Input
                    placeholder="Enter State"
                    onChange={(e)=>setState(e.target.value)}
                    bg="#fff"
                />
            </InputGroup>
        </FormControl>

        <FormControl width="60%">
            <FormLabel>
                Registration Proof
            </FormLabel>
            <InputGroup>
                <Input
                type="file"
                onChange={convertToBase64}
                
                />
            </InputGroup>
        </FormControl>

        <FormControl width="60%">
            <FormLabel>
                Pic to diaplay
            </FormLabel>
            <InputGroup>
                <Input
                type="file"
                onChange={convertToBase64Photo}
                />
            </InputGroup>
        </FormControl>
      
        <NavLink to="/mainPage">
        <Button
        onClick={Create}
        variant='outline'
        colorScheme="orange"
        m='5%'
        >Register</Button>
        </NavLink>

    </VStack>
    </Box>
    );
}

export default SignUp;