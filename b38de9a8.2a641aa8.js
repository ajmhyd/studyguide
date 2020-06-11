(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),i=n(6),a=(n(0),n(124)),o={id:"big-o",title:"Big-O",sidebar_label:"Big-O"},l={id:"algorithms/big-o",title:"Big-O",description:"Big-O notation is used in computer science to describe the worst-case performance upper bound, or complexity, of an algorithm",source:"@site/docs/algorithms/big-o.md",permalink:"/docs/algorithms/big-o",editUrl:"https://github.com/ajmhyd/studyguide/edit/master/website/docs/algorithms/big-o.md",sidebar_label:"Big-O",sidebar:"someSidebar",previous:{title:"Queues",permalink:"/docs/data-structures/queues"},next:{title:"Bubble Sort",permalink:"/docs/algorithms/bubble-sort"}},c=[{value:"Constant Time",id:"constant-time",children:[]},{value:"Logarithmic Time",id:"logarithmic-time",children:[]},{value:"Linear Time",id:"linear-time",children:[]},{value:"Super-Linear Time",id:"super-linear-time",children:[]},{value:"Polynomial Time",id:"polynomial-time",children:[]},{value:"Exponential Time",id:"exponential-time",children:[]},{value:"Factorial Time",id:"factorial-time",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Big-O notation is used in computer science to describe the worst-case performance ",Object(a.b)("em",{parentName:"p"},"upper bound"),", or complexity, of an algorithm"),Object(a.b)("h2",{id:"constant-time"},"Constant Time"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"O(1)")," describes an algorithm which will execute in the same amount of time regardless of the amount of data"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function sayHi() {\n  return 'Hello World';\n}\n")),Object(a.b)("h2",{id:"logarithmic-time"},"Logarithmic Time"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"O(log n)")," describes an algorithm which is logarithmic in nature ",Object(a.b)("em",{parentName:"p"},"the size of the problem decreased by half each time it runs")," ",Object(a.b)("inlineCode",{parentName:"p"},"binary search")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function binarySearch(list, item) {\n  let low = 0;\n  let high = list.length;\n\n  while (low <= high) {\n    let mid = Math.floor((low + high) / 2);\n    let guess = list[mid];\n    if (guess === item) {\n      return true;\n    } else if (guess < item ) {\n      low = mid + 1;\n    } else if (guess > item) {\n      high = mid - 1;\n    }\n  }\n  return false;\n}\n")),Object(a.b)("h2",{id:"linear-time"},"Linear Time"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"O(n)")," describes an algorithm whose performance grows linearly and\nproportionally to the size of the input ",Object(a.b)("inlineCode",{parentName:"p"},"for loop")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function printDogs(dogsArray) {\n  for (let i = 0; i < dogsArray.length; i++) {\n    console.log(dogsArray[i]);\n  }\n}\n")),Object(a.b)("h2",{id:"super-linear-time"},"Super-Linear Time"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"O(n log n)")," is less-performant than a linear time algorithm but more performant than an exponential algorithm. ",Object(a.b)("inlineCode",{parentName:"p"},"heap sort"),", ",Object(a.b)("inlineCode",{parentName:"p"},"merge sort"),", ",Object(a.b)("inlineCode",{parentName:"p"},"quick sort")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function mergeSort(arr) {\n  if (arr.length < 2) {\n    return arr;\n  }\n  const middle = Math.floor(arr.length / 2);\n  const left = arr.slice(0, middle);\n  const right = arr.slice(middle);\n\n  return merge(mergeSort(left), mergeSort(right));\n}\n\nfunction merge(left, right) {\n  const sorted = [];\n  while (left.length && right.length) {\n    if (left[0] <= right[0]) {\n      sorted.push(left.shift());\n    } else {\n      sorted.push(right.shift());\n    }\n  }\n  let results = [...sorted, ...left, ...right];\n  return results;\n}\n")),Object(a.b)("h2",{id:"polynomial-time"},"Polynomial Time"),Object(a.b)("p",null,"O(n",Object(a.b)("sup",null,"2"),") describes an algorithm where the performance is directly proportional to the square of the data size ",Object(a.b)("inlineCode",{parentName:"p"},"two nested for-loops"),", ",Object(a.b)("inlineCode",{parentName:"p"},"bubble sort")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function bubbleSort(arr) {\n  for (let i = 0; i < arr.length; i++) {\n    for (let j = 0; j < arr.length - i - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        let tmp = arr[j];\n        arr[j] = arr[j + 1];\n        arr[j + 1] = tmp;\n      }\n    }\n  }\n  return arr;\n}\n")),Object(a.b)("h2",{id:"exponential-time"},"Exponential Time"),Object(a.b)("p",null,"O(2",Object(a.b)("sup",null,"n"),") algorithms double with each new data point ",Object(a.b)("inlineCode",{parentName:"p"},"Fibonacci")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function fibonacci(num) {\n  if (num <= 1) return num;\n\n  return fibonacci(num - 1) + fibonacci(num - 2);\n}\n")),Object(a.b)("h2",{id:"factorial-time"},"Factorial Time"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"O(n!)")," is the worst-performing algorithm because it grows rapidly as the size of n increases ",Object(a.b)("em",{parentName:"p"},"traveling salesman brute force solution")))}b.isMDXComponent=!0},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=b(n),u=r,d=m["".concat(o,".").concat(u)]||m[u]||p[u]||a;return n?i.a.createElement(d,l(l({ref:t},s),{},{components:n})):i.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);