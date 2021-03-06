import React from "react";
import { Box, Text, Heading } from "gestalt";
import "gestalt/dist/gestalt.css";
import { textData } from "../assets/code_logic/getLanguageTexts";

let aboutPageText = textData.aboutPageText;

export default function AboutPage(props) {
  aboutPageText = props.currentLanguage.aboutPageText
  return (
    <div>
      <Box paddingY={4} paddingX={4}>
        <Box>
          <Heading size="sm">{aboutPageText[0].mainQuestion}</Heading>
        </Box>
        <Box marginTop={3}>
          <Text weight="bold" size="lg">
            {aboutPageText[0].subQuestion}
          </Text>
        </Box>
        <Box marginTop={5}>
          <Text size="lg" margin>
            {aboutPageText[0].mainText01}
          </Text>
        </Box>
        <Box marginTop={5}>
          <Text size="lg" margin>
            {aboutPageText[0].mainText02}
          </Text>
          <img src="/gifs/1-1.gif" alt="How to use 1-1" style={{height: "350px", margin: "15px"}}/>
        </Box>
        <Box marginTop={5}>
          <Text size="lg" margin>
            {aboutPageText[0].mainText03}
          </Text>
          <img src="/gifs/inspire.gif" alt="How to use Inspire" style={{height: "350px", margin: "15px"}}/>
        </Box>
        <Box marginTop={5}>
          <Text size="lg" margin>
            {aboutPageText[0].contactInfo}
          </Text>
        </Box>
        <Box marginTop={5}>
          <Text size="lg" margin>
            {aboutPageText[0].specialThanks}
          </Text>
        </Box>
      </Box>
    </div>
  );
}
