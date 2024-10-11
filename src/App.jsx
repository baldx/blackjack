import './App.css'
import Player from './components/displayPlayers'
import FetchData from './components/fetchCards'
function App() {

  return (
    <>
      <Player player="computer" />
      <FetchData />
    </>
  )
}

export default App
