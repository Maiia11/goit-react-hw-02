
const Feedback = ({state}) =>{
    
    return (
        <div>
        <ul>
          <li> Good: { state.good}</li>
          <li> Neutral: { state.neutral}</li>
          <li> Bad: { state.bad }</li>
        </ul>
    </div>
    )
    
}

export default Feedback