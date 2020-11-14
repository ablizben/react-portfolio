import React from "react";
import { Jumbotron } from "reactstrap";
import './pages.css';


const Home = () => (
<div>
    <Jumbotron phrase="hi, i'm abby" subtitle="I'm a front end developer who loves building things and watching them come to life" />
    <div id="icons">
        <a href="https://twitter.com/ablizben"><i className="fab fa-twitter fa-3x" id="twitter"></i></a> &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://github.com/ablizben"><i className="fab fa-github fa-3x" id="github"></i></a> &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/abigail-benjamin-codes/"><i class="fab fa-linkedin fa-3x"  id="linkedin"></i></a>
    </div>
    <h3>hi, i'm abby 
      <br/>
    <h4>I'm a front end developer who loves building things and watching them come to life</h4>
    </h3>
    <hr />
</div>
 
)

export default Home;
