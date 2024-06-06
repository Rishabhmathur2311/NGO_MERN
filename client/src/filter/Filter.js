import { Box, VStack, FormControl, FormLabel, Input, Checkbox, Stack, RadioGroup, Radio, Heading, Button, InputRightElement, InputGroup
 } from "@chakra-ui/react";
 import {CheckIcon} from "@chakra-ui/icons"
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { NameFilter } from "../api";

const Filter=()=>{

    const [state, setState]=useState("");
    const [city, setCity]=useState("");
    const [name, setName]=useState("");
    const [title, setTitle]=useState("");
    const [value, setValue] = useState('');

    const {filter, setFilter}=useContext(UserContext);

    const handleName=async()=>{
        let response=await NameFilter(name);
        setFilter(response)
        console.log(response);
    }

    return (
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
                
            <InputGroup>
            <FormControl 
            width="80%"
            >
            <FormLabel>
                NGO Name
            </FormLabel>
            <Input placeholder="Enter name"
            onChange={(e)=>setName(e.target.value)}
            value={name}
            bg="#fff"
            />
            <InputRightElement onClick={handleName}>
            <CheckIcon color='green.500' />
            </InputRightElement>
        
            </FormControl>
            </InputGroup>

            <FormControl 
            width="80%"
            >
            <FormLabel>
                Title
            </FormLabel>
            <Input placeholder="Enter Title"
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
            bg="#fff"
            />

            </FormControl>

            <FormControl 
            width="80%"
            >
            <FormLabel>
                City
            </FormLabel>
            <Input placeholder="Enter City"
            onChange={(e)=>setCity(e.target.value)}
            value={city}
            bg="#fff"
            />
        </FormControl >
        <FormControl 
            width="80%"
        >
            <FormLabel>
                State
            </FormLabel>
            <Input placeholder="Enter State"
            onChange={(e)=>setState(e.target.value)}
            value={state}
            bg="#fff"
            />
        </FormControl>
        </Box>

        
            <Heading size="sm" margin="2%" marginLeft="0">
                Sort By Type
                </Heading>
            <RadioGroup onChange={setValue} value={value} 
                margin={{base: "6%", md: "2%"}}
                >
                
            <Box 
            display="grid"
            gridGap="1%"
            gridTemplateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
            marginTop="2%"
            >
                <Radio value='Health' margin="2%">Health</Radio>
                <Radio value='Education' margin="2%">Education</Radio>
                <Radio value='Environment' margin="2%">Environment</Radio>
                <Radio value='Social Welfare'>Social Welfare</Radio>
                </Box>
            </RadioGroup> 
            <Button variant="outline">
                Clear Filters
            </Button>           
        </Box>
    );
}

export default Filter;