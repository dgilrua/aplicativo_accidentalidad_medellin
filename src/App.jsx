import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Visualizacion from './screens/Visualizacion'
import Agrupamiento from './screens/Agrupamiento'
import Prediccion from './screens/Prediccion'
import Video from './screens/Video'
import { Inicio } from './screens/Inicio'

function App() {
  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/visualizacion" element={<Visualizacion/>} />
          <Route path="/agrupamiento" element={<Agrupamiento/>} />
          <Route path="/prediccion" element={<Prediccion/>} />
          <Route path="/video" element={<Video/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
