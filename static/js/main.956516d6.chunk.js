(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var d=n(1),s=n(3),i=(n(12),n(0));function a(e){e.preventDefault();document.querySelector("#new-task-form");var t=document.querySelector("#new-task-input"),n=document.querySelector("#tasks"),d=t.value,s=document.createElement("div");s.classList.add("task");var i=document.createElement("div");i.classList.add("content");var a=document.createElement("input");a.classList.add("text"),a.type="text",a.value=d,a.setAttribute("readonly","readonly"),i.appendChild(a);var c=document.createElement("div");c.classList.add("actions");var r=document.createElement("button");r.classList.add("edit"),r.innerHTML="Edit";var o=document.createElement("button");o.classList.add("delete"),o.innerHTML="Delete",c.appendChild(r),c.appendChild(o),s.appendChild(i),s.appendChild(c),n.appendChild(s),t.value=" ",r.addEventListener("click",(function(){"edit"==r.innerText.toLowerCase()?(a.removeAttribute("readonly"),a.focus(),r.innerHTML="Save"):(a.setAttribute("readonly","readonly"),r.innerHTML="Edit")})),o.addEventListener("click",(function(){1==confirm("Are you sure you want to delete")&&n.removeChild(s)}))}function c(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("h1",{children:"Todo List 2023"}),Object(i.jsxs)("form",{id:"new-task-form",children:[Object(i.jsx)("input",{type:"text",name:"new-task-input",id:"new-task-input",placeholder:"What do you have planned?"}),Object(i.jsx)("button",{type:"submit",id:"new-task-submit",onClick:a,children:"Add task"})]})]}),Object(i.jsx)("main",{children:Object(i.jsxs)("section",{class:"task-list",children:[Object(i.jsx)("h2",{children:"Tasks"}),Object(i.jsx)("div",{id:"tasks"})]})})]})}var r=document.getElementById("root");Object(s.createRoot)(r).render(Object(i.jsx)(d.StrictMode,{children:Object(i.jsx)(c,{})}))}},[[14,1,2]]]);
//# sourceMappingURL=main.956516d6.chunk.js.map