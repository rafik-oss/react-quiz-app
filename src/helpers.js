export const shuffleAnswer = (question) => {
  const unshuffleAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswer,
  ];
  return unshuffleAnswers
    .map((answer) => {
      return { sort: Math.random(), value: answer };
    })
    .sort((a, b) => a.sort - b.sort)
    .map((obj) => obj.value);
};
