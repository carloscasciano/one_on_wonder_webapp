import React, { useState } from "react";
import { Box, Text, Button, SelectList, Heading } from "gestalt";
import "gestalt/dist/gestalt.css";
import {
  getCategories,
  buildCategoryForSelectList,
} from "../assets/code_logic/getCategories";

export default function QuestionsPage(props) {
  const questionsPageText = props.currentLanguage.questionsPageText;
  const [currentCategory, setCurrentCategory] = useState();
  const [randomQuestion, setRandomQuestion] = useState("");
  const currentDifferentCategories = getCategories(props.questions, "category");
  const categoriesBuilt = buildCategoryForSelectList(
    currentDifferentCategories
  );

  return (
    <div>
      <Box paddingY={4} paddingX={4}>
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

        <Box margin={2}></Box>
        {props.questions
          .filter((elem) => elem.category === currentCategory)
          .map((elem) => (
            <div key={elem.id}>
              <Box paddingX={2} marginTop={6} marginBottom={2}>
                <Text>
                  #{elem.id} - {elem.question}
                </Text>
              </Box>
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
            let rand = Math.floor(Math.random() * props.questions.length);
            setRandomQuestion(rand);
          }}
        />
      </Box>
      {randomQuestion === "" ? null : (
        <>
          <Box
            marginTop={5}
            marginBottom={2}
            paddingX={12}
            display="flex"
            justifyContent="center"
          >
            <Text size="lg" weight="bold">
              {props.questions[randomQuestion]["question"]}
            </Text>
          </Box>
        </>
      )}
    </div>
  );
}
