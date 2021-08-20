import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Home from './Home.js';
import Header from './Header';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
