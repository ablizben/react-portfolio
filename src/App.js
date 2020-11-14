import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ProjectPage from "./components/pages/ProjectPage";
import Contact from "./components/pages/Contact";
import "./components/pages/images/habittracker.png";

function App() {
    return (
        <Router>
            <NavBar/>
            <Switch>

                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={ProjectPage} />
                <Route exact path="/contact" component={Contact} />

            </Switch>
        </Router>
    )
}

export default App;