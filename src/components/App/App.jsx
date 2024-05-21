
import { useEffect, useState } from 'react'
import Descriptions from '../Descriptions/Descriptions'
import './App.css'
import Feedback from '../Feedback/Feedback'
import Options from '../Options/Options'
import Notification from '../Notification/Notification'


function App() {

  const createInitialFeedback = () => {
  const localFeedback = localStorage.getItem('feedback')
  return localFeedback ? JSON.parse(localFeedback) : { good: 0, neutral: 0, bad: 0}
  }

  const [state, setState] = useState(()=> createInitialFeedback())


  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(state))
  }, [state])

  
  const resetButton = () => {
    setState({
    good: 0,
    neutral: 0,
    bad: 0
    })
  }


  const updateFeedback = feedbackType => {
    setState({ ...state, [feedbackType]: state[feedbackType] + 1 })
    
  }

  const totalFeedback = state.good + state.neutral + state.bad;
  const positiveFeedback = Math.round((state.good / totalFeedback) * 100);

  return (
    <>
      <Descriptions />

      <Options updateFeedback={updateFeedback} totalFeedback ={totalFeedback} resetButton={resetButton} />
      {totalFeedback > 0 ? <Feedback state={state} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} /> : <Notification totalFeedback={totalFeedback} />}

    
    </>
 
  )
}

export default App
