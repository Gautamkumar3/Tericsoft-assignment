import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const BMICalculator = () => {
  const userData = JSON.parse(localStorage.getItem("data"));
  const [data, setData] = useState({
    height: "",
    weight: "",
  });
  const [bmiValue, setBmiValue] = useState(null);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: Number(value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post(
        "https://tericsoft-api-production.up.railway.app/calculate_bmi",
        data,
        {
          headers: { token: userData.token },
        }
      )
      .then((res) => {
        setBmiValue(res.data.data.bmi_val);
        toast({
          title: `Status code ${res.status}`,
          description: `${res.data.message}`,
          status: "success",
          duration: 4000,
          isClosable: true,
          position: "top",
        });
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
  };

  return (
    <Flex w={"85%"} m="auto" mt={"5%"}>
      <Box
        m={"auto"}
        boxShadow="md"
        p="6"
        rounded="md"
        bg="white"
        mt={"5%"}
        w="45%"
      >
        <Heading textAlign={"center"} color={"tomato"} mb={5}>
          BMI Calculator Form
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel mt={2}>Height</FormLabel>
            <Input
              type={"number"}
              placeholder="in feet"
              name="height"
              step="0.01"
              onChange={handleChange}
            />
            <FormLabel mt={2}>Weight</FormLabel>
            <Input
              type={"number"}
              name="weight"
              placeholder="in kg"
              step="0.01"
              onChange={handleChange}
            />
            <Button mt={3} type="submit" colorScheme={"whatsapp"} w="full">
              Calculate BMI
            </Button>
          </FormControl>
        </form>
      </Box>
      <Box w="45%">
        {bmiValue ? (
          <Box boxShadow="lg" p="6" rounded="md" bg="white">
            <Heading>Your BMI value is - </Heading>
            <Heading color={"whatsapp.600"}>{bmiValue}</Heading>
          </Box>
        ) : (
          ""
        )}
      </Box>
    </Flex>
  );
};

export default BMICalculator;
