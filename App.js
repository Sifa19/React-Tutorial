const heading = React.createElement(
  "h1",
  { class: "heading", style: { color: "white", background: "grey" } },
  "Hello World!"
);

const child = React.createElement("div", { class: "child" }, heading);
const sibling = React.createElement("div", { class: "sibling" });
const twin1 = React.createElement("div", { class: "twin1" }, "twin1");
const twin2 = React.createElement("div", { class: "twin2" }, "twin2");
const twins = React.createElement("div", { class: "twins" }, [twin1, twin2]);
const parent = React.createElement("div", { class: "parent" }, [
  child,
  sibling,
  twins,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
