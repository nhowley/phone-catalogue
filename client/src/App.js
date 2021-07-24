import React from "react";
import logo from './logo.svg';
import './App.scss';
import Catalogue from "./Components/catalogue";
import Phone from "./Components/Phone";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  
  return (
    <div className="App">
      <Router>
      <Link to = "/"><h1 className="title">Phone Catalogue</h1></Link>
        <Switch>
          <Route path="/phone/:id" render={(props) => <Phone {...props} />} />
          <Route path="/"><Catalogue /></Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
