
import './dist/css/index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Topics from './pages/Topics';
import Home from './pages/Home';
import Nomatch from './pages/Nomatch';
import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';
function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Header/>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topics" name="register" component={Topics}>
            
          </Route>
          <Route path="*" component ={Nomatch}>
            
          </Route>
        </Switch>
        
        <Footer/>
      </div>
    </Router>
    </div>
  );
}

export default App;
