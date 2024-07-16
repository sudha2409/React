import React from "react";
import  ReactDOM  from "react-dom/client";


//JSX (transpiled before it reaches the JS) - Parcel - Babel

//JSX => Babel transpiles it to React.createElement => ReactElement- JS Object => HTML Element(render)
const jsxHeading =  <h1 className="head" tabIndex='5'> React Learning is here using jsx </h1>
console.log(jsxHeading);

//Functional Component
const HeadingComponent2 = () => (<h1 className="heading">React Functional Component</h1>
)

const HeadingComponent = () =>{
    return(
   <div id="container">
    <HeadingComponent2/>,
    <h1 className="heading">Welcome to  Functional Component </h1>
    </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>)
//root.render(jsxHeading);

  /* <div id = "parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div> */



// const parent = React.createElement("div",{id: "parent"},
// [
//     [React.createElement("div",{id: "child"},
// React.createElement("h1",{},"I m Sudha Lohani"),
// React.createElement("h2",{},"I m H2 tag"),)
// ],
// [React.createElement("div",{id: "child2"},
// React.createElement("h1",{},"I m H1 tag"),
// React.createElement("h2",{},"I m H2 tag"),)
// ]
// ]
// );

//const heading = React.createElement("h1",{},"Hello world from React!");