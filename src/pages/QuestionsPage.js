import React, { useState } from "react";
import { Box, Text, Button, SelectList, Divider } from "gestalt";
import "gestalt/dist/gestalt.css";
import {
  getCategories,
  buildCategoryForSelectList,
} from "../assets/code_logic/getCategories";
import { baseQuestionsEN } from "../DUMMY_DATA/DUMMY_QUESTIONS";

const currentDifferentCategories = getCategories(baseQuestionsEN, "category");
const categoriesBuilt = buildCategoryForSelectList(currentDifferentCategories);

export default function QuestionsPage() {
  const [currentCategory, setCurrentCategory] = useState();

  return (
    <div>
      {/* <Button text="Testing" onClick={()=>console.log(currentCategories)} /> */}
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
            <Divider/>
        </Box>
        {baseQuestionsEN
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
    </div>
  );
}
