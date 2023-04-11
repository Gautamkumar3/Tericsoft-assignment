import { Box, Button, Flex, HStack, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const data = JSON.parse(localStorage.getItem("data"));

  const toast = useToast();
  const navigate = useNavigate();
  async function handleLogout() {
    await axios
      .post(
        "https://tericsoft-api-production.up.railway.app/user/logout",
        {},
        {
          headers: { token: data.token },
        }
      )
      .then((res) => {
        toast({
          title: `Status code ${res.status}`,
          description: `${res.data.message}`,
          status: "success",
          duration: 4000,
          isClosable: true,
          position: "top",
        });
        localStorage.removeItem("data");
        navigate("/login");
      })
      .catch((er) => {
        toast({
          title: `Status code ${er.response.status}`,
          description: `${er.response.data.message || "Something went wrong"}`,
          status: "error",
          duration: 4000,
          isClosable: true,
          position: "top",
        });
      });
  }

  return (
    <Flex
      justify={"space-around"}
      align="center"
      height={"70px"}
      fontSize="20px"
      color={"white"}
      bg="blue.500"
      position={"sticky"}
      zIndex={"500"}
      top="0px"
    >
      <Link to="/user_profile">User Profile</Link>
      <Link to="/">BMI Calculator</Link>
      <Link to="/bmi_history">BMI History</Link>

      {!data ? (
        <>
          {" "}
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      ) : (
        <HStack spacing={5}>
          <Text color={"fff"}>Welcome , {data.name}</Text>
          <Button colorScheme={"red"} onClick={handleLogout}>
            Logout
          </Button>
        </HStack>
      )}
    </Flex>
  );
};

export default Navbar;
