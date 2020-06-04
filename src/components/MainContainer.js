import React from "react";
import { Tabs, Box, Divider, Heading } from "gestalt";
import "gestalt/dist/gestalt.css";
import { textData } from "../assets/code_logic/getLanguageTexts";

let headerText = textData.headerText;

export default function MainContainer(props) {
  headerText = props.currentLanguage.headerText;
  return (
    <>
      <Box padding={2} color="darkGray" display="flex" justifyContent="between">
        <Heading color="white" size="md">
          One On Wonder
        </Heading>
      </Box>

      <Box paddingX={2} paddingY={1}>
        <Tabs
          tabs={[
            {
              text: headerText[0].about,
              href: "#",
            },
            {
              text: headerText[0].session,
              href: "#",
            },
            {
              text: headerText[0].questions,
              href: "#",
            },
            
            {
              text: headerText[0].options,
              href: "#",
            },
            /* {
              text: "Ice Breakers",
              href: "#",
            }, */
          ]}
          activeTabIndex={props.currentPage}
          onChange={props.handlePageChange}
          wrap={false}
          size="md"
        />
      </Box>
      <Divider />
    </>
  );
}
