import { useContext } from "react"
import { QuizContext } from "../context/Quiz"
import Answer from "./Answer"

export default function Question() {
    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex]
  return (
    <div>
        <div className="question">{currentQuestion.question}</div>
        <div className="answers">
          {quizState.answers.map((answer, index) => {
            <Answer answerText={answer} key={index} index={index} currentAnswer={quizState.currentAnswer}  correctAnswer={currentQuestion.correctAnswer} onSelectAnswer={(answerText)=> dispatch({type:"SELECT_ANSWER", payload: answerText})}/>
          })}
        </div>
    </div>
  )
}
