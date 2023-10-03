import { useContext } from "react"
import { QuizContext } from "../context/Quiz"
import Question from "./Question"


export default function Quiz() {
    const [quizState, dispatch] = useContext(QuizContext)
  return (
    <div className="quiz">
        {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Congratulations!</div>
          <div className="results-info">
            <div>You have completed the quiz.</div>
            <div>
              You've got {quizState.correctAnswerCount} of &nbsp;
              {quizState.questions.length} right.
            </div>
          </div>
          <div
            onClick={() => dispatch({ type: "RESTART" })}
            className="next-button"
          >
            Restart
          </div>
        </div>
      )}
        {!quizState.showResults && (
            <div>
             <div className="score">
             Question {quizState.cuurentQuestionIndex +1 }/{quizState.questions.length}
 
         </div>
         <Question/>
         <div className="next-button" onClick={()=> dispatch({type:"NEXT_QUESTION"})}>Next question</div>
         </div>
        )}
       
    </div>
  )
}
