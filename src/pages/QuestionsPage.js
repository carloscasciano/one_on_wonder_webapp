import React, { useState, useEffect } from "react";
import { Box, Text, Button, SelectList, Heading } from "gestalt";
import "gestalt/dist/gestalt.css";
import {
  getCategories,
  buildCategoryForSelectList,
} from "../assets/code_logic/getCategories";
/* import { baseQuestionsEN } from "../DUMMY_DATA/DUMMY_QUESTIONS"; */
import { getRawQuestionsData } from "../fetchData/fetchQuestions";
import { textData } from "../assets/code_logic/getLanguageTexts";

let questionsPageText = textData.questionsPageText;

export default function QuestionsPage(props) {
  questionsPageText = props.currentLanguage.questionsPageText
  const [questions, setQuestions] = useState([]);
  const [currentCategory, setCurrentCategory] = useState();
  const [randomQuestion, setRandomQuestion] = useState("");

  useEffect(() => {
    const questionsData = getRawQuestionsData();
    questionsData.then(function (value) {
      const qData = [...value];
      setQuestions(qData);
      return qData;
    });
  }, []);

  const currentDifferentCategories = getCategories(questions, "category");
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
        {questions
          .filter((elem) => elem.category === currentCategory)
          .map((elem) => (
            <div key={elem.id}>
              <Box paddingX={6} marginTop={6} marginBottom={2}>
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
            let rand = Math.floor(Math.random() * questions.length);
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
              {questions[randomQuestion]["question"]}
            </Text>
          </Box>
        </>
      )}
    </div>
  );
}
