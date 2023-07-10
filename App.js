/**
 * <div id=parent>
 * <div id="child">
 *   <h1>I am h1 tag<h1>
 *   <h1>I am h1 tag<h1>
 * <div>
 * <div id="child2">
 *   <h1>I am h1 tag<h1>
 *   <h1>I am h1 tag<h1>
 * <div>
 * <div>
 * 
 * 
 * 
 */
// making the structure which afre shown above
const parent = React.createElement("div", {},
[
 React.createElement("div", {id:"child1"}, 
[React.createElement("h1",{} , "hi i am h1 tag"),React.createElement("h1",{} , "hi i am h2 tag") ]

),  React.createElement("div", {id:"child2"}, 
[React.createElement("h1",{} , "hi i am h1 tag"),React.createElement("h1",{} , "hi i am h2 tag") ])    ]

);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);











// const heading = React.createElement(
//     "h1", {id:"heading"}, "hello from react");
    
//    const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(heading);
//    root.render(heading);