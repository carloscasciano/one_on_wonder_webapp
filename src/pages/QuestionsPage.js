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
  const [randomCategoryQuestion, setRandomCategoryQuestion] = useState("");
  const [
    randomCategoryQuestionVisibility,
    setRandomCategoryQuestionVisibility,
  ] = useState(false);
  const [categoryListVisibility, setCategoryListVisibility] = useState(false);
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
            onChange={({ value }) => {
              setRandomCategoryQuestionVisibility(true);
              setCurrentCategory(value);
              setCategoryListVisibility(true);
              setRandomCategoryQuestion("");
            }}
            options={categoriesBuilt}
            placeholder={questionsPageText[0].categoryBox}
            label={questionsPageText[0].categoryLabel}
            value={currentCategory}
          />
        </Box>
      </Box>
      <Box
        display="inlineBlock"
        justifyContent="around"
        alignItems="start"
        paddingX={4}
        marginBottom={3}
      >
        <Box>
          {randomCategoryQuestionVisibility === true ? (
            <Box>
              <Box display="flex">
                <Box marginBottom={4}>
                  <Button
                    text={questionsPageText[0].suggestCategoryButton}
                    size="sm"
                    inline
                    onClick={() => {
                      setRandomCategoryQuestion(
                        props.questions.filter(
                          (elem) => elem.category === currentCategory
                        )[
                          Math.floor(
                            Math.random() *
                              props.questions.filter(
                                (elem) => elem.category === currentCategory
                              ).length
                          )
                        ].question
                      );
                      setCategoryListVisibility(false);
                    }}
                  />
                </Box>
              </Box>
              <Box marginLeft={1}>
                <Text>{randomCategoryQuestion}</Text>
              </Box>
            </Box>
          ) : (
            <Box display="inlineBlock" width="100%" justifyContent="center">
              <Box marginBottom={5}>
                <Button
                  text={questionsPageText[0].randomButton}
                  size="sm"
                  inline
                  onClick={() => {
                    let rand = Math.floor(
                      Math.random() * props.questions.length
                    );
                    setRandomQuestion(rand);
                  }}
                />
              </Box>
              <Box marginRight={2}>
                {randomQuestion === "" ? null : (
                  <Text size="lg">
                    {props.questions[randomQuestion]["question"]}
                  </Text>
                )}
              </Box>
            </Box>
          )}
        </Box>
        {categoryListVisibility === true ? (
          <Box margin={2}>
            {props.questions
              .filter((elem) => elem.category === currentCategory)
              .map((elem) => (
                <div key={elem.id}>
                  <Box marginTop={6} marginBottom={2}>
                    <Text>
                      #{elem.id} - {elem.question}
                    </Text>
                  </Box>
                </div>
              ))}
          </Box>
        ) : null}
      </Box>
    </div>
  );
}
