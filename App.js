import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { className: "heading", style: { color: "white", background: "grey" } },
  "Hello World!"
);

const child = React.createElement("div", { className: "child" }, heading);
const sibling = React.createElement("div", { className: "sibling" });
const twin1 = React.createElement("div", { className: "twin1" }, "twin1");
const twin2 = React.createElement("div", { className: "twin2" }, "twin2");
const twins = React.createElement("div", { className: "twins" }, [
  twin1,
  twin2,
]);
const parent = React.createElement("div", { className: "parent" }, [
  child,
  sibling,
  twins,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
