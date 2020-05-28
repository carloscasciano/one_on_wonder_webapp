import React from "react";
import { Tabs, Box, Divider, Text } from "gestalt";
import "gestalt/dist/gestalt.css";

export default function MainContainer(props) {


  return (
    <>
      <Box padding={2} color="darkGray">
        <Text color="white">OOW - One On Wonder</Text>
      </Box>
      <Box padding={3}>
        <Tabs
          tabs={[
            {
              text: "About",
              href: "#",
            },
            {
              text: "Questions",
              href: "#",
            },
            {
              text: "Ice Breakers",
              href: "#",
            },
            {
              text: "Create Session",
              href: "#",
            },
            {
              text: "Menu",
              href: "#",
            },
          ]}
          activeTabIndex={props.currentPage}
          onChange={props.handlePageChange}
          wrap={true}
          size="md"
        />
      </Box>
      <Divider />
    </>
  );
}
