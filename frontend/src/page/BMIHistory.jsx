import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const getBMIHistory = async ({ token }) => {
  const res = await axios.get(
    `https://tericsoft-api-production.up.railway.app/history`,
    {
      headers: {
        token: token,
      },
    }
  );
  return res;
};

const BMIHistory = () => {
  const userData = JSON.parse(localStorage.getItem("data"));

  function getTime(val) {
    let t = val.split("T")[1].split(".")[0];
    let hour = t.split(":");

    let time = Number(hour[0]);
    if (Number(time) > 12) {
      time = Number(time) - 12;
    } else {
      time = Number(time);
    }
    return `${time}:${hour[1]}:${hour[2]}`;
  }

  const getDate = (val) => {
    return val.split("T")[0];
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    getBMIHistory({ token: userData.token }).then((res) =>
      setData(res.data.data)
    );
  }, []);

  return (
    <SimpleGrid columns={[2, 3, 4]} w={"90%"} m="auto" mt={"5%"} spacing={10}>
      {data.map((el) => (
        <Box
          key={el._id}
          boxShadow="xl"
          p="6"
          rounded="md"
          bg="white"
          textAlign={"left"}
        >
          <Text>
            <b>BMI value</b> : {el.bmi_val}
          </Text>
          <Text>
            <b>Time : </b> {getTime(el.createdAt)}
          </Text>
          <Text>
            <b>Date : </b>
            {getDate(el.createdAt)}
          </Text>{" "}
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default BMIHistory;
