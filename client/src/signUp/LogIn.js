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
  } from '@chakra-ui/react';
import { NavLink } from "react-router-dom";
import { LogInUser } from "../api.js";
import {UserContext} from "../context/UserContext.js";

const LogIn=()=>{

    const [email, setEmail]=useState("rishabhmathur2311@gmail.com");
    const [password,setPassword]=useState("123");

    const {user, setUser}=useContext(UserContext);

    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    const postLogIn= async()=>{
      let data={
        email: email,
        password: password,
      }
      let response=await LogInUser(data);

      try {
        setUser(response);
      } catch (error) {
        console.log(error);
      }
    }

    return (
        <VStack>
            <Avatar
            bg='#D0750E ' 
            marginTop="1%"
            size="xl" />
            <FormControl width="60%">
            <FormLabel>
                Email
            </FormLabel>
            <Input placeholder="Enter your Email"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            bg="#fff"
            />
        </FormControl>
        <FormControl width="60%">
            <FormLabel>
                Password
            </FormLabel>
            <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
              bg="#fff" 
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick} colorScheme="orange" variant="outline">
                {show ? 'Hide' : 'Show'}
                
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <NavLink to="mainPage">
        <Button
        onClick={postLogIn}
        colorScheme="orange"
        variant="outline"
        >
          Log In
        </Button>
        </NavLink>
        
        </VStack>
    );
}

export default LogIn;