import css from "./Feedback.module.css";

const Feedback = ({state, totalFeedback, positiveFeedback}) =>{
    
    return (
        <div>
        <ul className={css.feedbackList}>
          <li> Good: { state.good}</li>
          <li> Neutral: { state.neutral}</li>
          <li> Bad: {state.bad}</li>
          <li> Total: {totalFeedback}</li>
          <li>Positive: {positiveFeedback }</li>
        </ul>
    </div>
    )
    
}

export default Feedback