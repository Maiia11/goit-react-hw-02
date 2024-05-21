
import { useState } from 'react'
import Descriptions from '../Descriptions/Descriptions'
import './App.css'
import Feedback from '../Feedback/Feedback'
import Options from '../Options/Options'
import Notification from '../Notification/Notification'




function App() {

  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })


  const updateFeedback = feedbackType => {
    setState({ ...state, [feedbackType]: state[feedbackType] + 1 })
    
  }

  const totalFeedback = state.good + state.neutral + state.bad;

  console.log(totalFeedback);



  return (
    <>
      <Descriptions />
      
      <Options updateFeedback={updateFeedback} />
      {(totalFeedback > 0) && <Feedback state={state} />}
      
      <Notification totalFeedback={totalFeedback}/>
      



       
      

    </>

    
   
    
  )
}

export default App
