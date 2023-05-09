import "./style.css";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Login } from "./pages/login";
import { Signup } from "./pages/Signup";
import { Forgotpassword } from "./pages/forgotPassword"; 
import { Home } from "./pages/home"

function Signin (){
  
return(
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Signup/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/forgotPassword" element={<Forgotpassword/>}/>
          <Route path="/home" element = {<Home/>}/>
        </Routes>
      </Router>
        
    </div>
)
}

export default Signin;


