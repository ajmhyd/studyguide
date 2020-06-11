(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{116:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return l})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return d}));var n=t(2),i=t(6),a=(t(0),t(124)),o={id:"tree-traversals",title:"Tree Traversals",sidebar_label:"Tree Traversals"},l={id:"algorithms/tree-traversals",title:"Tree Traversals",description:"Three was to traverse a tree:",source:"@site/docs/algorithms/tree-traversals.md",permalink:"/docs/algorithms/tree-traversals",editUrl:"https://github.com/ajmhyd/studyguide/edit/master/website/docs/algorithms/tree-traversals.md",sidebar_label:"Tree Traversals",sidebar:"someSidebar",previous:{title:"Tree Search",permalink:"/docs/algorithms/tree-search"},next:{title:"Style Guide",permalink:"/docs/doc1"}},c=[{value:"In-Order Traversal",id:"in-order-traversal",children:[]},{value:"Pre-Order Traversal",id:"pre-order-traversal",children:[]},{value:"Post-Order Traversal",id:"post-order-traversal",children:[]},{value:"Code",id:"code",children:[]}],s={rightToc:c};function d(e){var r=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Three was to traverse a tree:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"In-Order")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Pre-Order")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Post-Order"))),Object(a.b)("h2",{id:"in-order-traversal"},"In-Order Traversal"),Object(a.b)("p",null,"Visit the current node in the order it would naturally fall ",Object(a.b)("strong",{parentName:"p"},"left child, current node, right child")),Object(a.b)("h2",{id:"pre-order-traversal"},"Pre-Order Traversal"),Object(a.b)("p",null,"Visit the current node before visiting the child nodes ",Object(a.b)("strong",{parentName:"p"},"current node, left child, right child")),Object(a.b)("h2",{id:"post-order-traversal"},"Post-Order Traversal"),Object(a.b)("p",null,"Visit the current node after visiting the child nodes ",Object(a.b)("strong",{parentName:"p"},"left child, right child, current node")),Object(a.b)("h2",{id:"code"},"Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const BINARY_TREE_TRAVERSALS = {\n  IN_ORDER: (node, visitFunction) => {\n    if (node !== null) {\n      BINARY_TREE_TRAVERSALS.IN_ORDER(node.leftChild, visitFunction);\n      visitFunction(node);\n      BINARY_TREE_TRAVERSALS.IN_ORDER(node.rightChild, visitFunction);\n    }\n  },\n  PRE_ORDER: (node, visitFunction) => {\n    if (node !== null) {\n      visitFunction(node);\n      BINARY_TREE_TRAVERSALS.PRE_ORDER(node.leftChild, visitFunction);\n      BINARY_TREE_TRAVERSALS.PRE_ORDER(node.rightChild, visitFunction);\n    }\n  },\n  POST_ORDER: (node, visitFunction) => {\n    if (node !== null) {\n      BINARY_TREE_TRAVERSALS.POST_ORDER(node.leftChild, visitFunction);\n      BINARY_TREE_TRAVERSALS.POST_ORDER(node.rightChild, visitFunction);\n      visitFunction(node);\n    }\n  }\n};\n")))}d.isMDXComponent=!0},124:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return O}));var n=t(0),i=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),d=function(e){var r=i.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=d(e.components);return i.a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},b=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(t),b=n,O=u["".concat(o,".").concat(b)]||u[b]||p[b]||a;return t?i.a.createElement(O,l(l({ref:r},s),{},{components:t})):i.a.createElement(O,l({ref:r},s))}));function O(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=b;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);