(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var r=n(2),a=n(6),i=(n(0),n(124)),u={id:"queues",title:"Queues",sidebar_label:"Queues"},s={id:"data-structures/queues",title:"Queues",description:"Queues are very similar to stacks however they use the \u201cfirst-in-firstout\u201d FIFO",source:"@site/docs/data-structures/queues.md",permalink:"/docs/data-structures/queues",editUrl:"https://github.com/ajmhyd/studyguide/edit/master/website/docs/data-structures/queues.md",sidebar_label:"Queues",sidebar:"someSidebar",previous:{title:"Trees",permalink:"/docs/data-structures/trees"},next:{title:"Big-O",permalink:"/docs/algorithms/big-o"}},l=[{value:"Pros",id:"pros",children:[]},{value:"Cons",id:"cons",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Code",id:"code",children:[{value:"Array Implementation",id:"array-implementation",children:[]},{value:"Linked List Implementation",id:"linked-list-implementation",children:[]}]},{value:"Sample Questions",id:"sample-questions",children:[]}],o={rightToc:l};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Queues are very similar to stacks however they use the \u201cfirst-in-firstout\u201d ",Object(i.b)("inlineCode",{parentName:"p"},"FIFO")),Object(i.b)("h2",{id:"pros"},"Pros"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Similar to linked lists and typically used in breadth-first searches for trees")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"May be used to implement cache"))),Object(i.b)("h2",{id:"cons"},"Cons"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"More difficult to update when adding and removing items than stack because items are added to one side of the structure and removed from the other side")),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"enqueue(item)")," Add an item to the back of the queue ",Object(i.b)("inlineCode",{parentName:"p"},"O(1)"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"dequeue()")," Remove the first item from the queue ",Object(i.b)("inlineCode",{parentName:"p"},"O(1)"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"peek()")," Return the item at the front of the queue but ",Object(i.b)("em",{parentName:"p"},"does not remove it")," ",Object(i.b)("inlineCode",{parentName:"p"},"O(1)"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"isEmpty()")," Returns true if queue is empty")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"length()")," Returns the length of the queue"))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"code"},"Code"),Object(i.b)("h3",{id:"array-implementation"},"Array Implementation"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"class Queue {\n  constructor() {\n    this.queue = [];\n  }\n\n  enqueue(item) {\n    return this.queue.push(item);\n  }\n\n  dequeue() {\n    return this.queue.shift();\n  }\n\n  peek() {\n    return this.queue[0];\n  }\n\n  isEmpty() {\n    return this.queue.length === 0;\n  }\n\n  length() {\n    return this.queue.length;\n  }\n}\n")),Object(i.b)("h3",{id:"linked-list-implementation"},"Linked List Implementation"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"class Node {\n  constructor(value) {\n    this.value = value;\n    this.next = null;\n  }\n}\n\nclass Queue {\n  constructor() {\n    this.first = null;\n    this.last = null;\n    this.size = 0;\n  }\n\n  enqueue(val) {\n    let newNode = new Node(val);\n    if (!this.fist) {\n      this.first = newNode;\n      this.last = newNode;\n    } else {\n      this.last.next = newNode;\n      this.last = newNode;\n    }\n    return ++this.size;\n  }\n\n  dequeue() {\n    if (!this.first) return null;\n    let temp = this.first;\n    if (this.first === this.last) {\n      this.last = null;\n    }\n    this.first = this.first.next;\n    this.size--;\n    return temp.value;\n  }\n\n  isEmpty() {\n    return this.size === 0;\n  }\n\n  peek() {\n    if (isEmpty()) return null;\n    return this.first.value;\n  }\n\n  length() {\n    return this.size\n  }\n}\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"sample-questions"},"Sample Questions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Implement a Queue class from scratch with an existing bug, the bug is that it cannot take more than 5 elements.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Implement a Queue using two stacks. You may only use the standard ",Object(i.b)("inlineCode",{parentName:"p"},"push()"),", ",Object(i.b)("inlineCode",{parentName:"p"},"pop()"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"peek()")," operations traditionally available to stacks. You do not need to implement the stack yourself ",Object(i.b)("em",{parentName:"p"},"i.e. an array can be used to simulate a stack")))))}c.isMDXComponent=!0},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),c=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,d=p["".concat(u,".").concat(m)]||p[m]||b[m]||i;return n?a.a.createElement(d,s(s({ref:t},o),{},{components:n})):a.a.createElement(d,s({ref:t},o))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,u=new Array(i);u[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,u[1]=s;for(var o=2;o<i;o++)u[o]=n[o];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);