import React  from "react";
import ReactDOM from "react-dom/client";

const head1=React.createElement("h1",{id:"ti",key:"3"},"hello1");
const head2=React.createElement("h1",{id:"ti",key:"1"},"hello2");
const head3=React.createElement("h1",{id:"ti",key:"2"},"hello3");


const container=React.createElement("div",{id:"pk"},[head1,head2,head3]);
const root=ReactDOM.createRoot(document.getElementById("root"));

const head4=<h1 id="title" key="h2">hello 4</h1>;

root.render(head4);