import {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This itme is from context',
            rating:10,
        }
    ])

    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
        // console.log(newFeedback)
        setFeedback([newFeedback, ...feedback])
      }

    const deleteFeedback = (id) =>{
        if (window.confirm('Esta seguro de eliminar ?')){
          setFeedback(feedback.filter((item) => item.id !== id))
        }
      }

     

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback, 
        addFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext