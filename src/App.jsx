import Footer from "./Component/Footer"
import Headline from "./Component/Headline"
import Populer from "./Component/Populer"
import Rekomendasi from "./Component/Rekomendasi"
import Navbar from "./Component/Navbar"

const App = () => {
    return (
        <div>
            <Navbar/>
            <Headline/>
            <Populer/>
            <Rekomendasi/>
            <Footer/>
        </div>
    )
}

export default App