import React, { useState } from "react";
import { Box, Text, Button, SelectList, Divider, Heading } from "gestalt";
import "gestalt/dist/gestalt.css";
import {
  getCategories,
  buildCategoryForSelectList,
} from "../assets/code_logic/getCategories";
import { questionsPageText } from "../assets/textData/EN-US/texts";
import { baseQuestionsEN } from "../DUMMY_DATA/DUMMY_QUESTIONS";

const questions = baseQuestionsEN;
const currentDifferentCategories = getCategories(questions, "category");
const categoriesBuilt = buildCategoryForSelectList(currentDifferentCategories);

export default function QuestionsPage() {
  const [currentCategory, setCurrentCategory] = useState();
  const [randomQuestion, setRandomQuestion] = useState("");

  return (
    <div>
      <Box padding={3} marginBottom={10}>
        <Heading size="sm">{questionsPageText[0].mainText}</Heading>
        <Box marginTop={3}>
          <SelectList
            id="categories"
            name="categories"
            onChange={({ value }) => setCurrentCategory(value)}
            options={categoriesBuilt}
            placeholder={questionsPageText[0].categoryBox}
            label={questionsPageText[0].categoryLabel}
            value={currentCategory}
          />
        </Box>

        <Box margin={2}>
          <Divider />
        </Box>
        {questions
          .filter((elem) => elem.category === currentCategory)
          .map((elem) => (
            <div key={elem.id}>
              <Box padding={2} marginTop={2} marginBottom={2}>
                <Text>
                  #{elem.id} - {elem.question}
                </Text>
              </Box>
              <Divider />
            </div>
          ))}
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginBottom={6}
      >
        <Button
          text={questionsPageText[0].randomButton}
          size="md"
          inline
          onClick={() => {
            let rand = Math.round(Math.random() * questions.length);
            setRandomQuestion(rand);
          }}
        />
      </Box>
      {randomQuestion === "" ? null : (
        <>
          <Divider />
          <Box padding={2} marginTop={2} marginBottom={2}>
            <Text>{questions[randomQuestion]["question"]}</Text>
          </Box>
          <Divider />
        </>
      )}
    </div>
  );
}
