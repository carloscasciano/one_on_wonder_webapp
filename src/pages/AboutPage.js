import React from "react";
import { Box, Divider, Text } from "gestalt";
import "gestalt/dist/gestalt.css";
import aboutPageText from "../assets/textData/EN-US/texts";

export default function AboutPage() {
  console.log(aboutPageText);
  return (
    <div>
      <Box padding={3}>
        <Text weight="bold" size="lg">
          {aboutPageText[0].mainQuestion}
        </Text>
        <Box marginTop={5}>
            <Text size="md" margin>{aboutPageText[0].mainText01}</Text>
        </Box>
        <Box marginTop={5}>
            <Text size="md" margin>{aboutPageText[0].contactInfo}</Text>
        </Box>
        <Box marginTop={5}>
            <Text size="md" margin>{aboutPageText[0].specialThanks}</Text>
        </Box>
        
      </Box>
    </div>
  );
}
