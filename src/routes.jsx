import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import App from './App'


function Routeres() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/home" element={<Home />} />
         
        </Routes>
      </BrowserRouter>
  )
}

export default Routeres
