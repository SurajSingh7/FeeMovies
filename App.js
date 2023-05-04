import React  from "react";
import ReactDOM from "react-dom/client";

const head1=React.createElement("h1",{id:"ti"},"hello1");
const head2=React.createElement("h1",{id:"ti"},"hello2");
const head3=React.createElement("h1",{id:"ti"},"hello3");
console.log("jh");


const container=React.createElement("div",{id:"pk"},[head2,head1,head3]);
const root=ReactDOM.createRoot(document.getElementById("root"));


root.render(container);