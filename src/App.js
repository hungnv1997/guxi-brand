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
import List from "./components/List";
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
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>    
            <Route path="/topics" component={Topics}></Route>
            <Route path="/products/:id" component={List}></Route>
            <Route path="*" component={Nomatch}></Route>
          </Switch>

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
