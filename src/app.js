import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// const heading=React.createElement("h1",{},"Hello World by react");

// const root= ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

//in JSX,i.e HTML like syntax
//JSx code is been transfiles before going to the Js engine which in background is done by Parcel-->Babel


//React element
// const jsxheading=
// (<h1>
//     React through JSX
//     </h1>);

// // React component
// const Title=function(){
// return(<h1>
//     React through JSX
//     </h1>);
// };

// const Functionalheading=()=>(
//     <div id ="container">
//     <Title/>
    
//     <h1>React response through functionalcomponent</h1>
//     </div>
// );










 const AppLayout=()=>{
    return (
        <div className="app">
       <Header/>
       <Body/>

        </div>
    )
 }



 const root=ReactDOM.createRoot(document.getElementById("root"));

 //root.render(jsxheading);
 root.render(<AppLayout/>)