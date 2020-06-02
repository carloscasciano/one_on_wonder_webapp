const axios = require("axios");

async function axiosGetRawQuestionsData() {
  try {
    const response = await axios.get(
      `http://young-wildwood-47504.herokuapp.com/enus/questions.json`
    )
    return response.data
  } catch (error) {
    console.error(error);
  }
}

async function getRawQuestionsData() {
  let questionsData = await axiosGetRawQuestionsData()
  return questionsData
}

export { getRawQuestionsData };
