import React from "react";
import { Box, Text, Heading, RadioButton, Badge } from "gestalt";
import "gestalt/dist/gestalt.css";
import { textData } from "../assets/code_logic/getLanguageTexts";
import { getLanguageTexts } from "../assets/code_logic/getLanguageTexts";

let optionsPageText = textData.optionsPageText;

export default function OptionsPage(props) {
  optionsPageText = props.currentLanguage.optionsPageText;
  /* 
  const [toastVisibility, setToastVisibility] = useState(false);
  const handleToastVisibility = () => {
    setToastVisibility(true);
    setTimeout(function () {
      setToastVisibility(false);
    }, 2000);
  }; 
  */

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
                onChange={() => {
                  props.setCurrentLanguage(getLanguageTexts("enus"));
                  props.setCurrentLanguageCode("enus");
                }}
                value="enus"
                label="English"
                checked={props.currentLanguage === getLanguageTexts("enus")}
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
                onChange={() => {
                  props.setCurrentLanguage(getLanguageTexts("ptbr"));
                  props.setCurrentLanguageCode("ptbr");
                }}
                value="ptbr"
                label={`Português`}
                checked={props.currentLanguage === getLanguageTexts("ptbr")}
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
                id="it"
                onChange={() => {}}
                value="it"
                disabled
                label={`Italiano`}
              />
              <Box marginLeft={3}>
                <Badge text={optionsPageText[0].soonText} />
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
                label={`Français`}
              />
              <Box marginLeft={3}>
                <Badge text={optionsPageText[0].soonText} />
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
                <Badge text={optionsPageText[0].soonText} />
              </Box>
            </Box>
          </Box>
          {/* <Box marginTop={4}>
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
          )} */}
        </Box>
        <Box marginLeft={3} marginTop={6}>
          <Badge text={optionsPageText[0].badgeText} />
        </Box>
      </Box>
    </div>
  );
}
