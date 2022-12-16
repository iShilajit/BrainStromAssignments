import { Box, Button, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerAPI } from "../../Redux/Auth/action";
export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputData.email && inputData.password && inputData.name) {
      dispatch(registerAPI(inputData))
        .then((res) => console.log("resr", res.data))
        .catch((err) => console.log(err));
      alert("Registration Successfull");
      navigate("/login");
    } else {
      alert("Please Fill The Credentials");
    }
  };
  return (
    <Box justify="center"  >
      <Flex
       
        top="100px"
        justify="center"
        align="center"
        direction="column"
        textAlign="center"
        w={{sm:"80%", md:"50%" , lg:"32%"}}
        m={"auto "}
        padding="13px 20px"
       
        h="500px"
        
      >
        <form>
          <Text fontSize={"30px"} color="white.900" mt="150">
            Register
          </Text>
          <FormLabel m="15px 0 0 50px" htmlFor="text">
            Name
          </FormLabel>
          <Input
            h="50px"
            w="300px"
            type="text"
            name="name"
            value={inputData.name}
            onChange={(e) => handleInput(e)}
            placeholder="Enter Your Name"
          />

          <FormLabel m="15px 0 0 50px" htmlFor="text">
            Email Id
          </FormLabel>
          <Input
            h="50px"
            w="300px"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={inputData.email}
            onChange={(e) => handleInput(e)}
          />
      
          <FormLabel m="15px 0 0 50px" htmlFor="text">
            Password
          </FormLabel>
          <Input
            h="50px"
            w="300px"
            type="passowrd"
            name="password"
            placeholder="Enter Your 8 digit password"
            value={inputData.password}
            onChange={(e) => handleInput(e)}
          />
          <Button
            mt="20px"
            w="300px"
            borderColor="#ccd0d5"
            colorScheme="RGBA(0, 0, 0, 0.92)"
            _focus={{
              boxShadow:
                "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            }}
            transform="scale(0.98)"
            background="#fff"
            width="300px"
            _hover={{
              bg: "#fff",
              background: "red.600",
              transform: "scale(0.98)",
              color: "white",
            }}
            onClick={handleSubmit}
          >
            Register
          </Button>
        </form>
      </Flex>
    </Box>
  );
};
