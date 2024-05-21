
const Feedback = ({state}) =>{
    
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