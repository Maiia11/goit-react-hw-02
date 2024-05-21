import css from './Notification.module.css'

const Notification = ({ totalFeedback }) => {
    if (totalFeedback === 0) {
        return (
            <>
                <p className={css.message}> No feedback yet </p>
            </>
            )    
        
    }
        
            
            
            
}
export default Notification
       
    
