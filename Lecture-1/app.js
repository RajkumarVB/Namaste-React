const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm H1 tag"),
    React.createElement("h2", {}, "I'm H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm H1 tag"),
    React.createElement("h2", {}, "I'm H2 tag"),
  ]),
]);

// const parent = React.createElement("h1",{},"Hello")

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
