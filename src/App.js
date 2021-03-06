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
          <Box mt={20} mb={10}>
            <SimpleGrid columns={8} spacing={2}>
              {pixels.map((val, index) => (
                <Box
                  key={index}
                  h={8}
                  w={8}
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
          <Button mx={4} size="lg" variant="solid" onClick={handleInvert}>
            Invert
          </Button>
          <Button mx={4} size="lg" variant="solid" onClick={handleClear}>
            Clear
          </Button>
        </Flex>
      </Box>
      <Box>
        <Box mt={10}>
          On:
          <Input
            w={200}
            onChange={handleOn}
            placeholder="ON value or (R,G,B)"
            ml={4}
          />
        </Box>
        <Box mt={2}>
          Off:
          <Input
            w={200}
            onChange={handleOff}
            placeholder="OFF value (R,G,B)"
            ml={4}
          />
        </Box>
      </Box>
      <Flex alignContent="center" justifyContent="center">
        <Box w={400} m={8}>
          {JSON.stringify(values, null, 2).replace(/"/g, "")}
        </Box>
      </Flex>
    </Flex>
  );
}

export default App;
