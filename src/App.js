import "./dist/css/index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Topics from "./pages/Topics";
import Home from "./pages/Home";
import Nomatch from "./pages/Nomatch";
import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about" name="register" component={About}></Route>
            <Route path="/contact" name="register" component={Contact}></Route>    
            <Route path="/topics" name="register" component={Topics}></Route>
            <Route path="*" component={Nomatch}></Route>
          </Switch>

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
