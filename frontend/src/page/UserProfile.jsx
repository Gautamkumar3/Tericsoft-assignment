import { Avatar, Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const getUserProfile = async ({ token }) => {
  const res = await axios.get(
    `https://tericsoft-api-production.up.railway.app/user/get_profile`,
    {
      headers: {
        token: token,
      },
    }
  );
  return res;
};

const UserProfile = () => {
  const userData = JSON.parse(localStorage.getItem("data"));

  const [data, setData] = useState({});

  useEffect(() => {
    getUserProfile({ token: userData.token }).then((res) =>
      setData(res.data.data)
    );
  }, []);

  return (
    <Flex justify={"center"} align="center">
      <Box boxShadow="xl" p="8" rounded="md" bg="white" textAlign={"left"}>
        <Center my={2}>
          <Avatar size="xl" mt={"10%"} />
        </Center>

        <Text>
          <b>Name : </b>
          {data.name}
        </Text>
        <Text>
          <b>Email : </b>
          {data.email}
        </Text>
      </Box>
    </Flex>
  );
};

export default UserProfile;
