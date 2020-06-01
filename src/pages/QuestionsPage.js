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
      <Box padding={3} marginBottom={3}>
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
        marginBottom={3}
      >
        <Button
          text={questionsPageText[0].randomButton}
          size="sm"
          inline
          onClick={() => {
            let rand = Math.floor(Math.random() * questions.length );
            console.log(rand)
            setRandomQuestion(rand);
          }}
        />
      </Box>
      {randomQuestion === "" ? null : (
        <>
          <Box marginTop={5} marginBottom={2} display="flex" justifyContent="center">
            <Text size="lg" weight="bold">{questions[randomQuestion]["question"]}</Text>
          </Box>
        </>
      )}
    </div>
  );
}
