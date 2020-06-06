import React, { useState } from "react";
import { Box, Text, Button, SelectList, Toast } from "gestalt";
import "gestalt/dist/gestalt.css";
import {
  getCategories,
  buildCategoryForSelectList,
} from "../assets/code_logic/getCategories";

export default function AddQuestionModal(props) {
  const questions = props.questions;
  const [currentCategory, setCurrentCategory] = useState();
  const [randomQuestion] = useState(
    questions[Math.floor(Math.random() * questions.length)]
  );
  const [buttonText] = useState("+");
  const [toastVisibility, setToastVisibility] = useState(false);
  const currentDifferentCategories = getCategories(questions, "category");
  const categoriesBuilt = buildCategoryForSelectList(
    currentDifferentCategories
  );
  const handleToastVisibility = () => {
    setToastVisibility(true);
    setTimeout(() => {
      setToastVisibility(false);
    }, 2000);
  };

  return (
    <>
      <Box paddingY={4} paddingX={4}>
        <Box marginBottom={5}>
          <Button
            onClick={() => props.handleModalVisibility()}
            text="<"
            inline
          />
        </Box>

        <Text weight="bold" size="lg">
          {props.texts[0].suggestionText}
        </Text>
        <Box
          display="flex"
          marginTop={5}
          marginBottom={5}
          justifyContent="start"
        >
          <Box minWidth="80%">
            <Text>{randomQuestion.question}</Text>
          </Box>

          <Button
            text={buttonText}
            onClick={() => {
              props.handleAddSuggestedQuestion(randomQuestion.question);
              props.handleModalVisibility()
              handleToastVisibility();
            }}
            size="sm"
          />
        </Box>
        <Text weight="bold" size="lg">
          {props.texts[0].freeChoiceText}
        </Text>
        <Box marginTop={3}>
          <SelectList
            id="categories"
            name="categories"
            onChange={({ value }) => {
              setCurrentCategory(value);
            }}
            options={categoriesBuilt}
            placeholder={props.texts[0].categoryBox}
            label={props.texts[0].categoryLabel}
            value={currentCategory}
          />
        </Box>
        {questions
          .filter((q) => q.category === currentCategory)
          .map((q) => (
            <div key={q.id}>
              <Box
                display="flex"
                marginTop={3}
                marginBottom={3}
                justifyContent="start"
                alignItems="center"
              >
                <Box minWidth="80%" marginLeft={2}>
                  <Text>{q.question}</Text>
                </Box>

                <Button
                  text={buttonText}
                  onClick={() => {
                    props.handleAddSuggestedQuestion(q.question);
                    handleToastVisibility();
                    props.handleModalVisibility();
                  }}
                  size="sm"
                />
              </Box>
            </div>
          ))}
      </Box>
      {toastVisibility === true ? (
        <>
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
            <Toast text={props.texts[0].toastText} />
          </Box>
        </>
      ) : null}
    </>
  );
}
