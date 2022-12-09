import { Routes, Route } from 'react-router-dom'
import CreateMeme from './views/CreateMeme'
import Home from './views/Home'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-meme" element={<CreateMeme />} />
            </Routes>
        </div>
    )
}

export default App
