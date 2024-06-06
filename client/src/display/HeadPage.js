import { Box, Divider, Text, } from "@chakra-ui/react";
import { VStack, FormControl, FormLabel, Input, Checkbox, Stack, RadioGroup, Radio, Heading, Button, InputRightElement, InputGroup
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext.js";
import CardCmp from "./Card.js";
import { GetCauses } from "../api.js";
import Payment from "../payment/Payment.js";
import { NameFilter, TitleFilter, CityFilter, StateFilter, ValueFilter } from "../api";

import {CheckIcon, Search2Icon, SearchIcon} from "@chakra-ui/icons";
import RadioButtonGroup from "./RadioList.js";
import Profile from "../step/Step.js";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'



const HeadPage=()=>{

    // ***********************************Filter**********************************************************

    const [state, setState]=useState("");
    const [city, setCity]=useState("");
    const [name, setName]=useState("");
    const [title, setTitle]=useState("");
    const [value, setValue] = useState("Education");

    const handleName=async()=>{
        let detail={
            ngoName: name,
        }

        let response=await NameFilter(detail);
        
        console.log(response.data);
        setFilter(response.data);
        setName("");
    }

    const handleTitle=async()=>{
        let detail={
            title: title,
        }
        let response=await TitleFilter(detail);
        
        console.log(response.data);
        setFilter(response.data);
        setTitle("");
    }

    const handleCity=async()=>{
        let detail={
            city: city,
        }
        let response=await CityFilter(detail);
        
        console.log(response.data);
        setFilter(response.data);
        setCity("");
    }

    const handleState=async()=>{
        let detail={
            state: state,
        }
        console.log(detail);
        let response=await StateFilter(detail);
        
        console.log(response.data);
        setFilter(response.data);
        setState("");
    }

    const [selectedOption, setSelectedOption] = useState('none');

  const handleChange =async(event)=> {
    setSelectedOption(event.target.value);
    if(selectedOption==='none'){
        let response=await GetCauses();
        setFilter(response.data);
    }
    else{
    let detail={
        type: selectedOption,
    }

    let response=await ValueFilter(detail);

    setFilter(response.data);
}

  }
    const clearFilter=async()=>{
        let response=await GetCauses();
        
        console.log(response.data);
        setFilter(response.data)
    }


    // ************************************Filter*********************************************************

    const {user}=useContext(UserContext);
    const [response, setResponse]=useState([]);

    const {filter, setFilter}=useContext(UserContext);


    const getDetails=async()=>{
        let details=await GetCauses();

        try {
            setResponse(details.data)
            
            setFilter(details.data);
            console.log(filter)
            return details;
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getDetails();
        // console.log(response);
    }, [])

    return (
        <Box>

            <Box as="b">
            <Breadcrumb fontWeight='3xl' fontSize='xl' padding='2%' textColor='#A47000'>
            <BreadcrumbItem>
                <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='/mainPage'>Main Page</BreadcrumbLink>
            </BreadcrumbItem>

            </Breadcrumb>
            </Box>


            <Heading size="3xl" display="flex" alignItems="center" justifyContent="center" padding="3%" paddingTop='0'
            textColor="#A47000 "
            fontFamily="inherit"
            backgroundColor="#FDFAF3  "
            >
                Welcome {user.data[0].name}
            </Heading>
            <Box display="flex" alignItems="center" justifyContent="center" paddingBottom="2%">
            <NavLink to="/newCause">
                <Button variant="outline" colorScheme="orange">
                    Create a new Cause
                </Button>
            </NavLink>
            <Profile />
            </Box>

            <Divider />

            
            {/* *****************************************Filter********************************************** */}

            <Box
            margin="2%"
        >
            <Heading size="sm" marginBottom="1%">
            Search By Name
            </Heading>
            <Box 
            display="grid"
            gridGap="2%"
            gridTemplateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}>
                
            
            <FormControl 
            width="80%"
            >
            <FormLabel>
                NGO Name
            </FormLabel>
            <InputGroup>
            <Input placeholder="Enter name"
            onChange={(e)=>setName(e.target.value)}
            value={name}
            bg="#fff"
            />
            <InputRightElement onClick={handleName}>
                <Button variant="flushed">
            <SearchIcon color='#B37A01 ' />
            </Button>
            </InputRightElement>
            </InputGroup>
            </FormControl>

            <FormControl 
            width="80%"
            >
            <FormLabel>
                Title
            </FormLabel>
            <InputGroup>
            <Input placeholder="Enter name"
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
            bg="#fff"
            />
            <InputRightElement onClick={handleTitle}>
                <Button variant="flushed">
            <SearchIcon color='#B37A01 ' />
            </Button>
            </InputRightElement>
            </InputGroup>
            </FormControl>

            <FormControl 
            width="80%"
            >
            <FormLabel>
                City
            </FormLabel>
            <InputGroup>
            <Input placeholder="Enter city"
            onChange={(e)=>setCity(e.target.value)}
            value={city}
            bg="#fff"
            />
            <InputRightElement onClick={handleCity}>
                <Button variant="flushed">
            <SearchIcon color='#B37A01 ' />
            </Button>
            </InputRightElement>
            </InputGroup>
        </FormControl >
        <FormControl 
            width="80%"
        >
            <FormLabel>
                State
            </FormLabel>
            <InputGroup>
            <Input placeholder="Enter state"
            onChange={(e)=>setState(e.target.value)}
            value={state}
            bg="#fff"
            />
            <InputRightElement onClick={handleState}>
                <Button variant="flushed">
            <SearchIcon color='#B37A01 ' />
            </Button>
            </InputRightElement>
            </InputGroup>
        </FormControl>
        </Box>

        
            <Heading size="sm" margin="2%" marginLeft="0">
                Sort By Type
                </Heading>
                <RadioButtonGroup />       
        </Box>


            {/* ****************************************Filter************************************************* */}

            <Box
            display="grid"
            gridGap="2%"
            gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
            // padding="2%"
            marginEnd="3%"
            paddingTop="2%"
            >
            {filter.map((message)=>
                <CardCmp prop={message}
                />
            )}
            </Box>
            
        </Box>
    );
}

export default HeadPage;