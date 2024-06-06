import React from "react";
import { Tabs,
TabList,
Tab,
TabPanels,
TabPanel,
Box
} from "@chakra-ui/react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";


const TabWindow=()=>{
    
    return (
        <Box
        width="100vw" height="265vh"
        >
        <Tabs  colorScheme='orange' isFitted
        maxWidth="55%"
        marginLeft="22%"
        >
            
        <TabList 
        mb='1em'
        paddingTop="3%"
        >
            <Tab>Log In</Tab>
            <Tab>Sign up</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
            <LogIn />
            </TabPanel>
            <TabPanel>
            <SignUp />
            </TabPanel>
        </TabPanels>
        </Tabs>
        </Box>
    );
}

export default TabWindow;