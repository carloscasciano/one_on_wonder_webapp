import React, { useState } from "react";
import { Box, Text, Heading, RadioButton, Button, Toast, Badge } from "gestalt";
import "gestalt/dist/gestalt.css";

export default function OptionsPage() {
  const [toastVisibility, setToastVisibility] = useState(false);
  const handleToastVisibility = () => {
    setToastVisibility(true);
    setTimeout(function () {
      setToastVisibility(false);
    }, 2000);
  };

  return (
    <Box padding={3}>
      <Box>
        <Heading size="sm">Options</Heading>
        <Box>
          <Text>Language</Text>
          <Box>
            <RadioButton
              id="enus"
              onChange={() => {}}
              value="enus"
              checked
              label="English"
            />
          </Box>
          <Box display="flex" justifyContent="start" alignItems="center">
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
          <Box display="flex" justifyContent="start" alignItems="center">
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
        <Box>
          <Button
            inline
            onClick={() => {
              handleToastVisibility();
            }}
            text="Save"
            color="gray"
            textColor="darkGray"
            size="sm"
          />
        </Box>
        {toastVisibility && (
          <Box padding={5}>
            <Toast text={<>Saved!</>} />
          </Box>
        )}
      </Box>
    </Box>
  );
}
