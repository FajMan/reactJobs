import './App.css'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
      <NavBar/>
      <HomePage/>
      <HomeCards/>
      <JobListings/>
    </>
  )
}

export default App
