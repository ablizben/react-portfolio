import React from "react";
import "./pages/pages.css";


function Wrapper (props) {
    return <div className="wrapper">
        {props.children}
    </div>
}


export default Wrapper;