import './App.css'
import Navbar from './components/partials/Navbar'
import Main from './components/Main'
import Footer from './components/partials/Footer'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  return (
    <div className='chord-app-wrapper'>
      <Router>
        <Navbar />
        <Main />
        <Footer />
      </Router>
    </div>
  )
}

export default App
