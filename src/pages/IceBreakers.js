import React from "react";
import { Box, Text, Heading, Divider } from "gestalt";
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
              <Text weight="bold" italic={true}>
                # {g.gameId}
              </Text>
              <Text weight="bold">{`${iceBreakersPageText[0].ibName}:`}</Text>
              <Text> {g.gameName}</Text>
              <Text weight="bold">
                {`${iceBreakersPageText[0].ibMaterials}: `}
              </Text>
              <Box padding={1}>
                {g.gameMaterials.map((m) => (
                  <div key={Math.random()}>
                    <Text>- {m}</Text>
                  </div>
                ))}
              </Box>
              <Text weight="bold">
                {`${iceBreakersPageText[0].ibPlayers}: `}
              </Text>
              <Text>{g.gameNumberOfPlayers}</Text>
              <Text weight="bold">
                {`${iceBreakersPageText[0].ibAchievement}: `}
              </Text>
              <Text>{g.gameAchievement}</Text>
              <Text weight="bold">
                {`${iceBreakersPageText[0].ibSummary}: `}
              </Text>
              <Text>{g.gameDirections}</Text>

      
            </Box>
            <Divider />
          </div>
        ))}
      </Box>
    </div>
  );
}
