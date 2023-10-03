import React from 'react'
import ReactDOM from 'react-dom/client'

import Quiz from './components/Quiz.jsx'
import { QuizProvider } from './context/Quiz.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuizProvider>
    <Quiz/>
    </QuizProvider>
    
  </React.StrictMode>,
)
