import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Recipes from './Pages/Recipes'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RecipeItemDetails from './Components/RecipeItemDetails'


function App() {

  return (
   <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipe' element={<Recipes />} />
        <Route path='/recipe/:recipeId' element={<RecipeItemDetails />} />
      </Routes>
      </Router>
      
   </div>
  )
}

export default App
