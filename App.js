const heading = React.createElement("h1",{id:"heading"}, "Hello world From React");
 console.log(heading) 
// returns object which having 
// $typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}
// $$typeof: Symbol(react.element)key: nullprops: {id: 'heading', children: 'Hello world From React'}ref: nulltype: "h1"_owner: null_store: {validated: false}_self: null_source: null[[Prototype]]: Object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);// this root.render method is putting into dom