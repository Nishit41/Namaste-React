//  write a code for this nested Child
{
  /* <div id="parent">
    <div id ="child">
        <h1>I am a H1 tag</h1> // h1 and h2 are sibling is for sibling
        <h2>I an a H2 tag</h2>
    </div>
</div>  */
}

// const heading = React.createElement("h1",{id:"heading"},
//   React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"I am an H1 tag"),React.createElement("h2",{},"I am an H2 tag")]))
// );

//  write a code for siblings with nested Child
{
  /* <div id="parent">
      <div id ="child">
          <h1>I am a H1 tag</h1> // h1 and h2 are sibling is for sibling
          <h2>I an a H2 tag</h2>
      </div>
      <div id="child2">
      <h1>I am a H2 tag </h2>
      <h2>I am a H2 tag </h2>
     </div>
  </div>  */
}

const heading = React.createElement("div", { id: "Parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    [
      React.createElement("h1", {}, "I am a H1 tag"),
      React.createElement("h2", {}, "I am a h2 tag"),
    ],
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", "I am a H1 tag of version 1"),
      React.createElement("h2", {}, "I am a h2 tag of version 2"),
    ])
  ),
]);

console.log(heading);
// returns object which having
// $typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}
// $$typeof: Symbol(react.element)key: nullprops: {id: 'heading', children: 'Hello world From React'}ref: nulltype: "h1"_owner: null_store: {validated: false}_self: null_source: null[[Prototype]]: Object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // this root.render method is putting into dom
