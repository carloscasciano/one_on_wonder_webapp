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
} from "gestalt";
import "gestalt/dist/gestalt.css";
import DUMMY_FEELINGS from "../DUMMY_DATA/DUMMY_FEELINGS"
import { CopyToClipboard } from "react-copy-to-clipboard";
import { createSessionPageText } from "../assets/textData/EN-US/texts";


const feelingOptions = DUMMY_FEELINGS

export default function CreateSession() {
  const [teamMemberName, setTeamMemberName] = useState("");
  const [sessionDate, setSessionDate] = useState("");
  const [currentFeeling, setCurrentFeeling] = useState("");
  const [sessionNotes, setSessionNotes] = useState([]);
  const [userSingleNote, setUserSingleNote] = useState("");
  const [summaryVisibility, setSummaryVisibility] = useState(false);
  const [toastVisibility, setToastVisibility] = useState(false);
  const summaryText = (
    <>
      On {sessionDate}, {teamMemberName} and I talked!The main feeling in this
      session was '{currentFeeling}'. We talked about...{" "}
      {sessionNotes.map((n) => (
        <Text key={Math.random()}>- {n}</Text>
      ))}{" "}
    </>
  );
  const copyToClipboardText = `On ${sessionDate}, ${teamMemberName} and I talked! \nThe main feeling in this session was '${currentFeeling}'.\nWe talked about: \n${sessionNotes
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
      <Box padding={3}>
        <Box marginBottom={3}>
          <Heading size="sm">{createSessionPageText[0].mainText}</Heading>
        </Box>
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

        <Box marginBottom={2}>
          <TextField
            id="notes"
            onChange={({ value }) => setUserSingleNote(value)}
            placeholder="We talked about life and family."
            label="Use field below to add comments, next steps or anything you feel it is important."
            value={userSingleNote}
            type="text"
          />
          <Box marginTop={2}>
            <Button
              inline
              onClick={() => {
                setSessionNotes(sessionNotes.concat(userSingleNote));
                setUserSingleNote("");
              }}
              text="Add Note to Summary"
              color="gray"
              textColor="darkGray"
              size="sm"
            />
          </Box>
        </Box>
        <Divider />

        {summaryVisibility === true ? (
          <Box marginTop={3}>
            <Box marginBottom={3}>
              <Heading size="sm">Summary</Heading>
            </Box>
            <Box marginTop={4}>
              <Text>{summaryText}</Text>
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
          </Box>
        ) : (
          <Box marginTop={2}>
            <Button
              inline
              onClick={() => {
                setSummaryVisibility(true);
              }}
              text="Show Summary"
              color="gray"
              textColor="darkGray"
              size="sm"
            />
          </Box>
        )}

        {toastVisibility && <Box padding={5}><Toast text={<>Go CTRL+V anywhere!</>} /></Box>}
      </Box>
    </div>
  );
}
