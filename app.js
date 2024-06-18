import React from "react";
import ReactDOM from "react-dom";

const heading=React.createElement("h1",{},"Hello World by react");

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);