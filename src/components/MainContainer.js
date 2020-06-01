import React from "react";
import { Tabs, Box, Divider,  Heading } from "gestalt";
import "gestalt/dist/gestalt.css";

export default function MainContainer(props) {
  /* const [menuVisibility, setMenuVisibility] = useState(false); */

  return (
    <>
      <Box padding={2} color="darkGray" display="flex" justifyContent="between">
        <Heading color="white">OOW</Heading>
        {/* <Button
          inline
          text={menuVisibility?"Close Menu":"Open Menu"}
          onClick={
            menuVisibility
              ? () => setMenuVisibility(false)
              : () => setMenuVisibility(true)
          }
        /> */}
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
