import React, { createElement } from "react";
import ReactDOM from "react-dom/client";

// const heading=React.createElement("h1",{},"Hello World by react");

// const root= ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

//in JSX,i.e HTML like syntax
//JSx code is been transfiles before going to the Js engine which in background is done by Parcel-->Babel


//React element
const jsxheading=
(<h1>
    React through JSX
    </h1>);

// React component
const Title=function(){
return(<h1>
    React through JSX
    </h1>);
};

const Functionalheading=()=>(
    <div id ="container">
    <Title/>
    
    <h1>React response through functionalcomponent</h1>
    </div>
);
 const root=ReactDOM.createRoot(document.getElementById("root"));

 root.render(jsxheading);
 root.render(<Functionalheading/>)