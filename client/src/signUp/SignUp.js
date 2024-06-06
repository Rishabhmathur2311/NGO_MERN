import React, { useState, useContext } from "react";
import { SignUpUser } from "../api";

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
  } from '@chakra-ui/react';
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext.js";

const SignUp=()=>{

    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [mobile, setMobile]=useState("");
    const [profile, setProfile]=useState("");
    const [weight, setWeight]=useState("");
    const [height, setHeight]=useState("");
    const [age, setAge]=useState("");
    const [gender, setGender]=useState("");

    const [show, setShow] = React.useState(false);
    const {user, setUser}=useContext(UserContext);
    const handleClick = () => setShow(!show)
  

    const convertToBase64=(e)=>{
      console.log(e);
      var reader=new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=()=>{
          setProfile(reader.result);
          console.log(reader.result);
      };

      reader.onerror=error=>{
          console.log("Error: ",  error)
      };
  }

  const handleAddrTypeChange=(e)=>{
    setGender(e.target.value);
  }

    const PostSignUp=async ()=>{
      const data={
        name: name,
        email: email,
        password: password,
        mobile: mobile,
        profile: profile,
        weight: weight,
        height: height,
        age: age,
        gender: gender,
      }

      let response=await SignUpUser(data);
      let a=response.data;
      let arr={
        data: [a],
      }
      console.log(arr);
      try {
        setUser(arr);
      } catch (error) {
        console.log(error)
      }
      
    }

    

    return (
    <VStack>
        <Avatar
        bg='#D0750E ' 
        marginTop="1%"
        marginBottom="1%"
        size="xl" />
        <FormControl width="60%">
            <FormLabel>
                Name
            </FormLabel>
            <Input placeholder="Enter your Name"
            onChange={(e)=>setName(e.target.value)}
            value={name}
            bg="#fff"
            />
        </FormControl>
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
              <Button h='1.75rem' size='sm' onClick={handleClick}
              variant="outline"
              colorScheme="orange"
              >
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl width="60%">
            <FormLabel>
                Mobile Number
            </FormLabel>
            <InputGroup>
            <InputLeftAddon>+91</InputLeftAddon>
                <Input placeholder="Enter your asking price"
                onChange={(e)=>setMobile(e.target.value)}
                value={mobile}
                bg="#fff"
                />
            </InputGroup>
        </FormControl>

        <FormControl width="60%">
            <FormLabel>
                Weight(in Kg)
            </FormLabel>
            <Input placeholder="Enter your Weight"
            onChange={(e)=>setWeight(e.target.value)}
            value={weight}
            bg="#fff"
            />
        </FormControl>

        <FormControl width="60%">
            <FormLabel>
                Height(in cm)
            </FormLabel>
            <Input placeholder="Enter your Height"
            onChange={(e)=>setHeight(e.target.value)}
            value={height}
            bg="#fff"
            />
        </FormControl>

        <FormControl width="60%">
            <FormLabel>
                Age
            </FormLabel>
            <Input placeholder="Enter your Age"
            onChange={(e)=>setAge(e.target.value)}
            value={age}
            bg="#fff"
            />
        </FormControl>

        <FormControl width="60%">
        <FormLabel>
            Select Gender
        </FormLabel>
            <Select variant='outline' placeholder='Select Gender'
            onChange={handleAddrTypeChange}
            bg="#fff"
            >
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='others' >Others</option>
            <option value='Prefer Not to Say'>Prefer not to Say</option>
            </Select>
        </FormControl>

        <FormControl width="60%">
            <FormLabel>
                Profile Picture
            </FormLabel>
            <InputGroup>
                <Input
                type="file"
                onChange={convertToBase64}
                />
            </InputGroup>
        </FormControl>
      
        <NavLink to="/mainPage">
        <Button
        onClick={PostSignUp}
        variant="outline"
        colorScheme="orange"
        >SignUp</Button>
        </NavLink>

    </VStack>
    );
}

export default SignUp;