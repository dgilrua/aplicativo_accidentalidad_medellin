import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Visualizacion from './screens/Visualizacion'
import Agrupamiento from './screens/Agrupamiento'
import Prediccion from './screens/Prediccion'
import Video from './screens/Video'

function App() {
  return(
    <>
      <Router>
        <Routes>
          <Route path="/visualizacion" element={<Visualizacion/>} />
          <Route path="/agrupamiento" element={<Agrupamiento/>} />
          <Route path="/" element={<Prediccion/>} />
          <Route path="/video" element={<Video/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
