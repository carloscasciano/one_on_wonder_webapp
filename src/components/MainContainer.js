import React from "react";
import { Tabs, Box, Divider, Heading } from "gestalt";
import "gestalt/dist/gestalt.css";
import { headerText } from "../assets/textData/enus/texts";


export default function MainContainer(props) {
  return (
    <>
      <Box padding={2} color="darkGray" display="flex" justifyContent="between">
        <Heading color="white" size="md">
          One On Wonder
        </Heading>
      </Box>

      <Box paddingX={6} paddingY={1}>
        <Tabs
          tabs={[
            {
              text: headerText[0].about,
              href: "#",
            },
            {
              text: headerText[0].questions,
              href: "#",
            },
            {
              text: headerText[0].session,
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
