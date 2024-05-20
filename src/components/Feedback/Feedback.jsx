import { useState } from "react"


const Feedback = () => {
    const [state, setState] = useState({
  good: 0,
	neutral: 0,
	bad: 0
  })
    // const {good, neutral, bad } = state;
    
    return (
        <div>
        <ul>
          <li>{ state.good}</li>
          <li>{ state.neutral}</li>
          <li>{ state.bad }</li>
        </ul>
    </div>
    )
    
}

export default Feedback