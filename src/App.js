

import { BrowserRouter as Router } from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'

import { FeedbackProvider } from './context/FeedbackContext'
import AboutLink from './components/AboutLink';

function App (){


  return (
    <FeedbackProvider>
    <Router>
      <Header  />
      {/* <Routes> */}
        
        <div className="container">
          {/* <Route exact path='/home'> */}
          <FeedbackForm  />
          <FeedbackStats />
          <FeedbackList   />
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