import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./Page/Beranda";
import DetailBerita from "./Page/DetailBerita"
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Beranda />} />
                <Route path="/berita" element={<DetailBerita />} />
            </Routes>
        </Router>
    );
}

export default App;