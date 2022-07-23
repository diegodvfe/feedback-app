import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'

import { FeedbackProvider } from './context/FeedbackContext'

import FeedbackData from "./data/FeedbackData"
import AboutLink from './components/AboutLink';

function App (){
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) =>{
    newFeedback.id = uuidv4()
    console.log(newFeedback)
    setFeedback([newFeedback, ...feedback])
  }

   const deleteFeedback = (id) =>{
    if (window.confirm('Esta seguro de eliminar ?')){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <FeedbackProvider>
    <Router>
      <Header  />
      {/* <Routes> */}
        
        <div className="container">
          {/* <Route exact path='/home'> */}
          <FeedbackForm handleAdd={addFeedback} />
          <FeedbackStats feedback={feedback} />
          <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
          {/* </Route> */}


        {/* <Route path='/about' component={AboutPage }/> */}
        <AboutLink />
        </div>

      {/* </Routes> */}
        </Router>
    </FeedbackProvider>
  )
}

export default App