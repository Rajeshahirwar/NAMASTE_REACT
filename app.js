
const parent = React.createElement("div", {
    id:"parent"
},
React.createElement("div",{
    id:"child"
},[
React.createElement("h1",{},"Hello This Is Rajesh Ahirwar im Belong Frome Khajuraho"),
React.createElement("h2",{},"Khajuraho is the most beautyfull city")]),
React.createElement("div",{
    id:"child2"
},[
React.createElement("h1",{},"Hello This Is Rajesh Ahirwar im Belong Frome Khajuraho"),
React.createElement("h2",{},"Khajuraho is the most beautyfull city")])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);