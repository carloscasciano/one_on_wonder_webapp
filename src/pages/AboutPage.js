import React from "react";
import { Box,  Text, Heading } from "gestalt";
import "gestalt/dist/gestalt.css";
import {aboutPageText} from "../assets/textData/EN-US/texts";

export default function AboutPage() {
  return (
    <div>
      <Box padding={3}>
        <Box>
          <Heading size="sm">
            {aboutPageText[0].mainQuestion}
          </Heading>
        </Box>
        <Box marginTop={3}>
          <Text weight="bold" size="md">
            {aboutPageText[0].subQuestion}
          </Text>
        </Box>
        <Box marginTop={5}>
          <Text size="md" margin>
            {aboutPageText[0].mainText01}
          </Text>
        </Box>
        <Box marginTop={5}>
          <Text size="md" margin>
            {aboutPageText[0].contactInfo}
          </Text>
        </Box>
        <Box marginTop={5}>
          <Text size="md" margin>
            {aboutPageText[0].specialThanks}
          </Text>
        </Box>
      </Box>
    </div>
  );
}
