import { useState, useContext } from "react"
import RatingSelect from "./RatingSelect"
import Card from "./shared/Card"
import Button from "./Button"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const {addFeedback} = useContext(FeedbackContext)

  const handletextChange = (e) =>{
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    }else if(text !== '' && text.trim().length <= 10){
      setMessage('Text must be at at least 10 characters')
      setBtnDisabled(true);
    }else {
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(text.trim().length > 10){
      const newFeedback = {
        text,
        rating
      }

     addFeedback(newFeedback)

      setText('')
    }
  }

  return (
    <Card>
      <form  onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        {/* todo - rating select compaonet */}
        {rating}
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
           onChange={handletextChange}
           type="text"
           placeholder="Write a review"
           value={text}
           />
          <Button type="submit" isDisabled={btnDisabled}> Send </Button>
        </div>

           {message && <div className="message">{message}</div>}

      </form>
    </Card>
  )
}

export default FeedbackForm()