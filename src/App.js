import React, { useState } from "react";
import { Box, Flex, SimpleGrid, Input, Button } from "@chakra-ui/react";

function App() {
  const [pixels, setPixels] = useState(Array(64).fill(false));
  const [onValue, setOnValue] = useState(1);
  const [offValue, setOffValue] = useState(0);
  const values = pixels.map((val) =>
    val ? (onValue ? onValue : "1") : offValue ? offValue : 0
  );

  const handleClick = (idx) => {
    setPixels((prev) => {
      let curr = [...prev];
      curr[idx] = !curr[idx];
      return curr;
    });
  };
  const handleOn = (event) => {
    const symbol = event.target.value;
    setOnValue(symbol);
  };
  const handleOff = (event) => {
    const symbol = event.target.value;
    setOffValue(symbol);
  };

  const handleClear = () => {
    setPixels(Array(64).fill(false));
  };
  const handleInvert = () => {
    setPixels((prev) => {
      const curr = [...prev];
      return curr.map((val) => !val);
    });
  };
  return (
    <Flex direction="column" textAlign="center">
      <Box>
        <Flex alignContent="center" justifyContent="center">
          <Box m={100}>
            <SimpleGrid columns={8} spacing={4}>
              {pixels.map((val, index) => (
                <Box
                  key={index}
                  h={50}
                  w={50}
                  bg={val ? "white" : "gray"}
                  outlineColor="gray"
                  outline="solid gray"
                  onClick={() => handleClick(index)}
                ></Box>
              ))}
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Flex alignContent="center" justifyContent="center">
          <Button mx={10} size="lg" variant="solid" onClick={handleInvert}>
            Invert
          </Button>
          <Button mx={10} size="lg" variant="solid" onClick={handleInvert}>
            Clear
          </Button>
        </Flex>
      </Box>
      <Box>
        <Box m={25}>
          On:
          <Input
            w={200}
            onChange={handleOn}
            placeholder="ON value or (R,G,B)"
            ml={10}
          />
        </Box>
        <Box m={25}>
          Off:
          <Input
            w={200}
            onChange={handleOff}
            placeholder="OFF value (R,G,B)"
            ml={10}
          />
        </Box>
      </Box>
      <Box m={50}>{JSON.stringify(values, null, 2).replace(/"/g, "")}</Box>
    </Flex>
  );
}

export default App;
