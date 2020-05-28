import React from "react";
import { Box, Text, TextArea, Heading, Divider } from "gestalt";
import "gestalt/dist/gestalt.css";
import { iceBreakersPageText } from "../assets/textData/EN-US/texts";
import { DUMMY_GAMES } from "../DUMMY_DATA/DUMMY_GAMES";

const gamesList = DUMMY_GAMES;

export default function IceBreakers() {
  return (
    <div>
      <Box padding={3}>
        <Heading size="sm">{iceBreakersPageText[0]["mainText"]}</Heading>
        {gamesList.map((g) => (
          <div key={g.gameId}>
            <Box padding={3}>
              <Text>{g.gameId}.</Text>
              <Text>{g.gameName}</Text>
              <Text>{g.gameDirections}</Text>
              <Text>Number of Players: {g.gameNumberOfPlayers}</Text>
              <Text>{g.gameTryTo}</Text>
            </Box>
            <Divider/>
          </div>
        ))}
        
      </Box>
    </div>
  );
}
