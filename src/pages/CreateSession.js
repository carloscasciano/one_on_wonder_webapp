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
import AddQuestionModal from "../components/AddQuestionModal";
/* import DUMMY_FEELINGS from "../DUMMY_DATA/DUMMY_FEELINGS"; */
import { CopyToClipboard } from "react-copy-to-clipboard";
import { textData } from "../assets/code_logic/getLanguageTexts";

let createSessionPageText = textData.createSessionPageText;

export default function CreateSession(props) {
  /* console.log(props.questions); */
  createSessionPageText = props.currentLanguage.createSessionPageText;
  const feelingOptions = createSessionPageText[0].feelingsEmojis;
  const [teamMemberName, setTeamMemberName] = useState("");
  const [sessionDate, setSessionDate] = useState("");
  const [currentFeeling, setCurrentFeeling] = useState("");
  const [sessionNotes, setSessionNotes] = useState([]);
  const [userSingleNote, setUserSingleNote] = useState("");
  const [toastVisibility, setToastVisibility] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [sessionSuggestedQuestions, setSessionSuggestedQuestions] = useState(
    []
  );

  const summaryText = (
    <>
      <Text size="lg">
        {createSessionPageText[0].summaryText[0].preDateText} {sessionDate},
      </Text>
      <Text size="lg">
        {createSessionPageText[0].summaryText[0].preTeamMemberText}{" "}
        {teamMemberName}.
      </Text>
      <Text size="lg">
        {createSessionPageText[0].summaryText[0].preFeelingText} '
        {currentFeeling}'.
      </Text>
      <Box marginTop={3}>
        <Text size="lg">
          {createSessionPageText[0].summaryText[0].preSuggestedQuestions}
        </Text>
        {sessionSuggestedQuestions.map((q) => (
          <Text key={Math.random()} size="lg">
            - {q}
          </Text>
        ))}{" "}
      </Box>
      <Box marginTop={3}>
        <Text size="lg">
          {createSessionPageText[0].summaryText[0].preNotesText}
        </Text>
        {sessionNotes.map((n) => (
          <Text key={Math.random()} size="lg">
            - {n}
          </Text>
        ))}{" "}
      </Box>
    </>
  );
  const copyToClipboardText = `${
    createSessionPageText[0].summaryText[0].preDateText
  } ${sessionDate},\n${
    createSessionPageText[0].summaryText[0].preTeamMemberText
  } ${teamMemberName}.\n${
    createSessionPageText[0].summaryText[0].preFeelingText
  } '${currentFeeling}'.\n \n${
    createSessionPageText[0].summaryText[0].preSuggestedQuestions
  } \n${sessionSuggestedQuestions
    .map((question) => " - " + question + "\n")
    .join("")} 
  ${
    createSessionPageText[0].summaryText[0].preNotesText
  } \n${sessionNotes.map((note) => " - " + note + "\n").join("")}  `;

  const handleToastVisibility = () => {
    setToastVisibility(true);
    setTimeout(function () {
      setToastVisibility(false);
    }, 2000);
  };

  const handleModalVisibility = () => {
    setModalVisibility(false);
  };

  const handleAddSuggestedQuestion = (questionText) => {
    setSessionSuggestedQuestions(
      sessionSuggestedQuestions.concat(questionText)
    );
  };

  return (
    <div>
      {modalVisibility === false ? (
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
                label={createSessionPageText[0].memberLabel}
                value={teamMemberName}
                type="text"
              />
            </Box>

            <Box marginBottom={2}>
              <TextField
                id="date"
                onChange={({ value }) => setSessionDate(value)}
                placeholder="01/01/2020"
                label={createSessionPageText[0].dateLabel}
                value={sessionDate}
                type="date"
              />
            </Box>

            <Box marginBottom={4}>
              <SelectList
                id="feelings"
                name="feelings"
                onChange={({ value }) => setCurrentFeeling(value)}
                options={feelingOptions}
                placeholder={createSessionPageText[0].feelingPlaceholder}
                label={createSessionPageText[0].feelingLabel}
                value={currentFeeling}
              />
            </Box>
          </Box>

          {teamMemberName !== "" &&
          sessionDate !== "" &&
          currentFeeling !== "" ? (
            <>
              <Divider />

              <Box maxWidth="480px" marginTop={4}>
                <Button
                  inline
                  onClick={() => {
                    setModalVisibility(true);
                  }}
                  text={createSessionPageText[0].modalButtomText}
                  size="sm"
                />
              </Box>
              <Box maxWidth="480px" marginTop={4} marginBottom={4}>
                <TextField
                  inline
                  id="notes"
                  onChange={({ value }) => setUserSingleNote(value)}
                  placeholder={createSessionPageText[0].notesPlaceholder}
                  label={createSessionPageText[0].notesLabel}
                  value={userSingleNote}
                  type="text"
                />
                <Box marginTop={2}>
                  <Button
                    inline
                    onClick={
                      userSingleNote !== ""
                        ? () => {
                            setSessionNotes(
                              sessionNotes.concat(userSingleNote)
                            );
                            setUserSingleNote("");
                          }
                        : null
                    }
                    text={createSessionPageText[0].addNoteButtomText}
                    color="gray"
                    textColor="darkGray"
                    size="sm"
                  />
                </Box>
              </Box>
              <Divider />
            </>
          ) : null}

          <Box marginTop={3}>
            <Box
              marginBottom={3}
              display="flex"
              alignItems="center"
              justifyContent="start"
            >
              <Heading size="sm">{createSessionPageText[0].summary}</Heading>
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
                        text={createSessionPageText[0].copyToClipButton}
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
                  <Badge text={createSessionPageText[0].summaryBadge} />
                </Box>
              )}
            </Box>
          </Box>

          {toastVisibility && (
            <Box
              fit
              dangerouslySetInlineStyle={{
                __style: {
                  bottom: 50,
                  left: "50%",
                  transform: "translateX(-50%)",
                },
              }}
              paddingX={1}
              position="fixed"
            >
              <Toast text={<>{createSessionPageText[0].toastText}</>} />
            </Box>
          )}
        </Box>
      ) : (
        <AddQuestionModal
          questions={props.questions}
          handleModalVisibility={handleModalVisibility}
          handleAddSuggestedQuestion={handleAddSuggestedQuestion}
          texts={createSessionPageText[0].modalTexts}
        />
      )}
    </div>
  );
}

  