/* <div>
    <div>
        <h1></h1>
    </div>
</div> */



const heading = React.createElement("div", {id:"parent"}, React.createElement("div", {id:"child"}, React.createElement("h1",{},"Hey I am H1")));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading);