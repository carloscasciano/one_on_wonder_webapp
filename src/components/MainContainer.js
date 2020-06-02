import React from "react";
import { Tabs, Box, Divider,  Heading } from "gestalt";
import "gestalt/dist/gestalt.css";

export default function MainContainer(props) {


  return (
    <>
      <Box padding={2} color="darkGray" display="flex" justifyContent="between">
        <Heading color="white" size="md">One On Wonder</Heading>
      </Box>

      
        <Box paddingX={6} paddingY={1}>
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
                text: "Session",
                href: "#",
              },
              {
                text: "Options",
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
