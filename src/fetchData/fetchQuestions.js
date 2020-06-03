const axios = require("axios");

async function axiosGetRawQuestionsData(language) {
  try {
    const response = await axios.get(
      `http://young-wildwood-47504.herokuapp.com/${language}/questions.json`
    )
    return response.data
  } catch (error) {
    console.error(error);
  }
}

async function getRawQuestionsData(language) {
  let questionsData = await axiosGetRawQuestionsData(language)
  return questionsData
}

export { getRawQuestionsData };
