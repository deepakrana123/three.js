import './App.css'
import Home from './pages/Home'
import Customize from './pages/Customize'
import Canvas from './canvas'
function App() {
  return (
    <main className='relative w-full h-screen overflow-hidden transition-all-ease-in'>
      <Home/>
      <Canvas/>
      <Customize/>
    </main>
  )
}

export default App
