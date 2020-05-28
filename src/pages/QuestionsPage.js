import React, { useState } from "react";
import { Box, Text, Button, SelectList, Divider } from "gestalt";
import "gestalt/dist/gestalt.css";
import {
  getCategories,
  buildCategoryForSelectList,
} from "../assets/code_logic/getCategories";
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
        <SelectList
          id="categories"
          name="categories"
          onChange={({ value }) => setCurrentCategory(value)}
          options={categoriesBuilt}
          placeholder="Select category"
          label="Category"
          value={currentCategory}
        />
        <Box margin={4}>
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
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          text="I'm in a hurry, surprise me"
          size="md"
          inline
          onClick={() => {
            let rand = Math.round(Math.random() * questions.length);
            setRandomQuestion(rand);
          }}
        />
      </Box>
      {randomQuestion === "" ? null : (
        <Box padding={2} marginTop={2} marginBottom={2}>
          <Text>{questions[randomQuestion]["question"]}</Text>
        </Box>
      )}
    </div>
  );
}
