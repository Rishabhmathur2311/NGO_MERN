import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import HeadPage from "../display/HeadPage.js";
import ErrorPage from "../display/ErrorPage.js";
import { Box } from "@chakra-ui/react";

const MainPage=()=>{

    const {user, setUser}=useContext(UserContext);

    return (
        <Box >
            {Object.keys(user).length!==0?
            <HeadPage />
            :
            <ErrorPage />
            }
        </Box>
    );
}

export default MainPage;