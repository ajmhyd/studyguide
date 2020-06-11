(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{109:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(6),a=(r(0),r(124)),i={id:"bubble-sort",title:"Bubble Sort",sidebar_label:"Bubble Sort"},l={id:"algorithms/bubble-sort",title:"Bubble Sort",description:"Bubble sort is a sorting algorithm where each value in an array is compared to the next and swapped if the value on the left is greater than the value on the right.",source:"@site/docs/algorithms/bubble-sort.md",permalink:"/docs/algorithms/bubble-sort",editUrl:"https://github.com/ajmhyd/studyguide/edit/master/website/docs/algorithms/bubble-sort.md",sidebar_label:"Bubble Sort",sidebar:"someSidebar",previous:{title:"Big-O",permalink:"/docs/algorithms/big-o"},next:{title:"Insertion Sort",permalink:"/docs/algorithms/insertion-sort"}},b=[{value:"Code",id:"code",children:[{value:"Bubble Sort With A Do-While Loop",id:"bubble-sort-with-a-do-while-loop",children:[]},{value:"Bubble Sort With For-Loops",id:"bubble-sort-with-for-loops",children:[]}]}],c={rightToc:b};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Bubble sort is a sorting algorithm where each value in an array is compared to the next and swapped if the value on the left is greater than the value on the right."),Object(a.b)("p",null,"Bubble sort is notorious for being non-performant with a runtime of O(n",Object(a.b)("sup",null,"2"),")"),Object(a.b)("p",null,"You can use nested for-loops or a do while loop ",Object(a.b)("em",{parentName:"p"},"which reads a bit cleaner and can be more performant")),Object(a.b)("p",null,"The do-while loop solution will stop once a full pass is completed without swapping any items. This contrast the nested for-loop solution which will test every item against every other regardless of if a swap has occurred"),Object(a.b)("h2",{id:"code"},"Code"),Object(a.b)("h3",{id:"bubble-sort-with-a-do-while-loop"},"Bubble Sort With A Do-While Loop"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"function bubbleSort(arr) {\n  let swapped = false;\n  do {\n    swapped = false;\n    arr.forEach((item, index) => {\n      if (item > arr[index + 1]) {\n        let temp = item;\n        arr[index] = arr[index + 1];\n        arr[index + 1] = temp;\n        swapped = true;\n      }\n    });\n  } while (swapped);\n  return arr;\n}\n")),Object(a.b)("h3",{id:"bubble-sort-with-for-loops"},"Bubble Sort With For-Loops"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"function bubbleSortWithForLoops(arr) {\n  for (let i = 0; i < arr.length; i++) {\n    for (let j = 0; j < arr.length - i - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        let tmp = arr[j];\n        arr[j] = arr[j + 1];\n        arr[j + 1] = tmp;\n      }\n    }\n  }\n  return arr;\n}\n")))}s.isMDXComponent=!0},124:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,h=u["".concat(i,".").concat(d)]||u[d]||p[d]||a;return r?o.a.createElement(h,l(l({ref:t},c),{},{components:r})):o.a.createElement(h,l({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);