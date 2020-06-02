import React, { useState } from "react";
import { Box, Text, Heading, RadioButton, Button, Toast, Badge } from "gestalt";
import "gestalt/dist/gestalt.css";
import { optionsPageText } from "../assets/textData/enus/texts";

export default function OptionsPage() {
  const [toastVisibility, setToastVisibility] = useState(false);
  const handleToastVisibility = () => {
    setToastVisibility(true);
    setTimeout(function () {
      setToastVisibility(false);
    }, 2000);
  };

  return (
    <div>
      <Box padding={3}>
        <Box>
          <Heading size="sm">{optionsPageText[0].mainText}</Heading>
          <Box marginTop={3} paddingX={3}>
            <Text size="lg">{optionsPageText[0].languageMenuText}</Text>
            <Box marginTop={1} paddingX={3}>
              <RadioButton
                id="enus"
                onChange={() => {}}
                value="enus"
                checked
                label="English"
              />
            </Box>
            <Box
              marginTop={1}
              paddingX={3}
              display="flex"
              justifyContent="start"
              alignItems="center"
            >
              <RadioButton
                id="ptbr"
                onChange={() => {}}
                value="ptbr"
                disabled
                label={`Português`}
              />
              <Box marginLeft={3}>
                <Badge text="Soon!" />
              </Box>
            </Box>
            <Box
              marginTop={1}
              paddingX={3}
              display="flex"
              justifyContent="start"
              alignItems="center"
            >
              <RadioButton
                id="it"
                onChange={() => {}}
                value="it"
                disabled
                label={`Italiano`}
              />
              <Box marginLeft={3}>
                <Badge text="Soon!" />
              </Box>
            </Box>
            <Box
              marginTop={1}
              paddingX={3}
              display="flex"
              justifyContent="start"
              alignItems="center"
            >
              <RadioButton
                id="fr"
                onChange={() => {}}
                value="fr"
                disabled
                label={`Française`}
              />
              <Box marginLeft={3}>
                <Badge text="Soon!" />
              </Box>
            </Box>
            <Box
              marginTop={1}
              paddingX={3}
              display="flex"
              justifyContent="start"
              alignItems="center"
            >
              <RadioButton
                id="es"
                onChange={() => {}}
                value="es"
                disabled
                label={`Español`}
              />
              <Box marginLeft={3}>
                <Badge text="Soon!" />
              </Box>
            </Box>
          </Box>
          <Box marginTop={4}>
            <Button
              disabled
              inline
              onClick={() => {
                handleToastVisibility();
              }}
              text={optionsPageText[0].saveButtom}
              color="gray"
              textColor="darkGray"
              size="sm"
            />
          </Box>
          {toastVisibility && (
            <Box padding={5}>
              <Toast text={<>{optionsPageText[0].toastSaveText}</>} />
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
}
