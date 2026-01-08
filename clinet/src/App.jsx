
import './App.css'
import CreateSnippet from './components/CreateSnippet.jsx'
import Navbar from './components/Navbar.jsx'

function App() {

  return (
    <main className='container max-w-4xl mx-auto'>
      <Navbar />
      <CreateSnippet />
    </main>
  )
}

export default App
