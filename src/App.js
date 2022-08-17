import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Error from "./components/Error";
import Crops from "./components/Crops";
import Articles from "./components/Articles";
import Aboutus from "./components/Aboutus";

function App() {
  return <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Navbar />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/crops" element={<Crops />}/>
      <Route path="/articles" element={<Articles />}/>
      <Route path="/aboutus" element={<Aboutus />}/>
      <Route path="/error" element={<Error />}/>
    </Routes>
  </Router>
}

export default App;
