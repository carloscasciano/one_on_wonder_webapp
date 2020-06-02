import React, { useState } from "react";
import {
  Box,
  Text,
  Heading,
  TextField,
  Button,
  Divider,
  SelectList,
  Toast,
  Badge,
} from "gestalt";
import "gestalt/dist/gestalt.css";
import DUMMY_FEELINGS from "../DUMMY_DATA/DUMMY_FEELINGS";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { createSessionPageText } from "../assets/textData/EN-US/texts";

const feelingOptions = DUMMY_FEELINGS;

export default function CreateSession() {
  const [teamMemberName, setTeamMemberName] = useState("");
  const [sessionDate, setSessionDate] = useState("");
  const [currentFeeling, setCurrentFeeling] = useState("");
  const [sessionNotes, setSessionNotes] = useState([]);
  const [userSingleNote, setUserSingleNote] = useState("");
  const [toastVisibility, setToastVisibility] = useState(false);

  const summaryText = (
    <>
      <Text size="lg">On {sessionDate},</Text>
      <Text size="lg">I talked with {teamMemberName}.</Text>
      <Text size="lg">The main feeling of this session was '{currentFeeling}'.</Text>
      <Box marginTop={3}>
        <Text size="lg">My notes were:</Text>
        {sessionNotes.map((n) => (
          <Text key={Math.random()} size="lg">- {n}</Text>
        ))}{" "}
      </Box>
    </>
  );
  const copyToClipboardText = `On ${sessionDate},\nI talked with ${teamMemberName}.\nThe main feeling of this session was '${currentFeeling}'.\nMy notes were: \n${sessionNotes
    .map((note) => " - " + note + "\n")
    .join("")}`;

  const handleToastVisibility = () => {
    setToastVisibility(true);
    setTimeout(function () {
      setToastVisibility(false);
    }, 2000);
  };

  return (
    <div>
      <Box paddingY={4} paddingX={4}>
        <Box marginBottom={3}>
          <Heading size="sm">{createSessionPageText[0].mainText}</Heading>
        </Box>
        <Box maxWidth="480px" alignItems="center">
          <Box marginBottom={2}>
            <TextField
              id="teamMember"
              onChange={({ value }) => setTeamMemberName(value)}
              placeholder="Eric Anthony"
              label="Who are you talking to?"
              value={teamMemberName}
              type="text"
            />
          </Box>

          <Box marginBottom={2}>
            <TextField
              id="date"
              onChange={({ value }) => setSessionDate(value)}
              placeholder="01/01/2020"
              label="When?"
              value={sessionDate}
              type="date"
            />
          </Box>

          <Box marginBottom={2}>
            <SelectList
              id="feelings"
              name="feelings"
              onChange={({ value }) => setCurrentFeeling(value)}
              options={feelingOptions}
              placeholder="Choose a dominant feeling"
              label="How is your team member feeling?"
              value={currentFeeling}
            />
          </Box>

          <Box marginTop={8} marginBottom={8}>
            <TextField
              id="notes"
              onChange={({ value }) => setUserSingleNote(value)}
              placeholder="Eric is glad his wife got a new job."
              label="Use field below to add comments, next steps or anything you feel it is important."
              value={userSingleNote}
              type="text"
            />
            <Box marginTop={2}>
              <Button
                onClick={() => {
                  setSessionNotes(sessionNotes.concat(userSingleNote));
                  setUserSingleNote("");
                }}
                text="Add Note"
                color="gray"
                textColor="darkGray"
                size="sm"
              />
            </Box>
          </Box>
        </Box>
        <Divider />

        <Box marginTop={3}>
          <Box
            marginBottom={3}
            display="flex"
            alignItems="center"
            justifyContent="start"
          >
            <Heading size="sm">Summary</Heading>
          </Box>
          <Box marginTop={4}>
            {teamMemberName !== "" &&
            sessionDate !== "" &&
            currentFeeling !== "" ? (
              <>
                <Text size="lg">{summaryText}</Text>
                <Box marginTop={3}>
                  <CopyToClipboard text={copyToClipboardText}>
                    <Button
                      inline
                      text="Copy to Clipboard"
                      color="gray"
                      textColor="darkGray"
                      size="sm"
                      onClick={() => handleToastVisibility()}
                    />
                  </CopyToClipboard>
                </Box>
              </>
            ) : (
              <Box marginLeft={2}>
                <Badge text="Add a team member, a date and feeling." />
              </Box>
            )}
          </Box>
        </Box>

        {toastVisibility && (
          <Box padding={5}>
            <Toast text={<>Go CTRL+V anywhere!</>} />
          </Box>
        )}
      </Box>
    </div>
  );
}

