import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import RickAndMortyList from "./components/RickAndMortyList";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/rym" element={<RickAndMortyList />} />
            </Routes>
        </Router>
    );
}

export default App;
