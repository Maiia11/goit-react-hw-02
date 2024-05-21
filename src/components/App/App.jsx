
import { useState } from 'react'
import Descriptions from '../Descriptions/Descriptions'
import './App.css'
import Feedback from '../Feedback/Feedback'
import Options from '../Options/Options'




function App() {

  const [state, setState] = useState({
  good: 0,
	neutral: 0,
	bad: 0
  })


  const updateFeedback = feedbackType => {
    setState({...state, [feedbackType]: state[feedbackType] + 1})
    
  }



  return (
    <>
      <Descriptions />
      
      <Options updateFeedback ={updateFeedback} />

    <Feedback state={state}/>

     </> 

    
        
      
      
    
  )
}

export default App
