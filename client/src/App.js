import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NewCollections from "./pages/NewCollections";
import About from "./pages/About";
// import Footer from "./components/Footer";
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <div>
          {/* <Home /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/newcollection" component={NewCollections} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
