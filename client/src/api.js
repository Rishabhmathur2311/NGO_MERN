import axios from "axios";

const url='http://localhost:8000';

export const SignUpUser=async (data)=>{
    let response=await axios.post(`${url}/SignUpUser`, data);
    try {
        return response
    } catch (error) {
        console.log(error);
    }
}

export const LogInUser=async(data)=>{
    const response=await axios.post(`${url}/LogInUser`, data);

    try {
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const CreateCause=async(data)=>{
    const response=await axios.post(`${url}/CreateCause`, data);
    console.log(response);

    try {
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const GetCauses=async()=>{
    try {
        const response=await axios.get(`${url}/GetCauses`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

// export const UpdateUser=async(data)=>{
//     const response=await axios.post(`${url}/UpdateUser`, data);

//     try {
//         return response;
//     } catch (error) {
//         console.log(error);
//     }
// }

export const NameFilter=async(data)=>{
    const response=await axios.post(`${url}/name`, data);
    try {
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const TitleFilter=async(data)=>{
    const response=await axios.post(`${url}/TitleFilter`, data);
    try {
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const CityFilter=async(data)=>{
    const response=await axios.post(`${url}/CityFilter`, data);
    try {
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const StateFilter=async(data)=>{
    const response=await axios.post(`${url}/StateFilter`, data);
    try {
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const ValueFilter=async(data)=>{
    const response=await axios.post(`${url}/ValueFilter`, data);
    try {
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
}