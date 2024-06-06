import { Box, Divider, } from "@chakra-ui/react";
import { VStack, FormControl, FormLabel, Input, Checkbox, Stack, RadioGroup, Radio, Heading, Button, InputRightElement, InputGroup
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext.js";
import CardCmp from "./Card.js";
import { GetCauses } from "../api.js";
import Payment from "../payment/Payment.js";
import { NameFilter, TitleFilter, CityFilter, StateFilter, ValueFilter } from "../api";

import {CheckIcon} from "@chakra-ui/icons";

function RadioButtonGroup() {
    const {filter, setFilter}=useContext(UserContext);

    const [selectedOption, setSelectedOption] = useState('none');

    const clearFilter=async()=>{
      let response=await GetCauses();
      
      console.log(response.data);
      setFilter(response.data);
      
    setSelectedOption('none');
  }

  const handleChange =async(event)=> {
    event.preventDefault();
    setSelectedOption(event.target.value);
    console.log(selectedOption)
    if(selectedOption==='none'){
        let response=await GetCauses();
        setFilter(response.data);
    }
    else{
    let detail={
        type: selectedOption,
    }

    let response=await ValueFilter(detail);
    console.log(response.data);

    setFilter(response.data);
}
  }

  return (
    <Box>
    <Box
        display="grid"
        gridGap="5%"
        gridTemplateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
        // padding="2%"
        marginBottom="3%"
    >
      <Button
      value="Education" checked={selectedOption === 'Education'} onClick={handleChange}
      colorScheme="orange"
      variant="outline"
      >
        Education
      </Button>
      <Button
      value="Health" checked={selectedOption === 'Health'} onClick={handleChange}
      colorScheme="orange"
      variant="outline"
      >
        Health
      </Button>
      <Button
      value="Environment" checked={selectedOption === 'Environment'} onClick={handleChange}
      colorScheme="orange"
      variant="outline"
      >
        Environment
      </Button>
      <Button
      value="Social Welfare" checked={selectedOption === 'Social Welfare'} onClick={handleChange}
      colorScheme="orange"
      variant="outline"
      >
        Social Welfare
      </Button>
      </Box>

      <Button variant="outline" colorScheme='orange' onClick={clearFilter}>
                Clear Filters
      </Button>
    </Box>
  );
}

export default RadioButtonGroup;
