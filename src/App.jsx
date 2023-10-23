import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Visualizacion from './screens/Visualizacion'
import Agrupamiento from './screens/Agrupamiento'
import Prediccion from './screens/Prediccion'

function App() {
  return(
    <>
      <Router>
        <Routes>
          <Route path="/visualizacion" element={<Visualizacion/>} />
          <Route path="/agrupamiento" element={<Agrupamiento/>} />
          <Route path="/prediccion" element={<Prediccion/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
