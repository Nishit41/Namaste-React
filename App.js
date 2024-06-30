//  write a code for this nested Child
{/* <div id="parent">
    <div id ="child">
        <h1>I am a H1 tag</h1>
    </div>
</div>  */}
const heading = React.createElement("h1",{id:"heading"}, 
  React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"I am an H1 tag")))
);
 console.log(heading) 
// returns object which having 
// $typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}
// $$typeof: Symbol(react.element)key: nullprops: {id: 'heading', children: 'Hello world From React'}ref: nulltype: "h1"_owner: null_store: {validated: false}_self: null_source: null[[Prototype]]: Object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);// this root.render method is putting into dom
