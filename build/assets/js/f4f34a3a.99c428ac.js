"use strict";(self.webpackChunkdarklab=self.webpackChunkdarklab||[]).push([[8636],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>b});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},i=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,b=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return r?o.createElement(b,u(u({ref:t},i),{},{components:r})):o.createElement(b,u({ref:t},i))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,u=new Array(a);u[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:n,u[1]=l;for(var s=2;s<a;s++)u[s]=r[s];return o.createElement.apply(null,u)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5145:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const a={slug:"mdx-blog-post",title:"MDX Blog Post",authors:["author"],tags:["docusaurus"]},u=void 0,l={permalink:"/darklab/blog/mdx-blog-post",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-01-mdx-blog-post.mdx",source:"@site/blog/2021-08-01-mdx-blog-post.mdx",title:"MDX Blog Post",description:"---",date:"2021-08-01T00:00:00.000Z",formattedDate:"August 1, 2021",tags:[{label:"docusaurus",permalink:"/darklab/blog/tags/docusaurus"}],readingTime:.18,hasTruncateMarker:!1,authors:[{date:"Jun 23, 2023",name:"DevJag",title:"Data Scientist",url:"https://github.com/devjag-linux",imageURL:"https://avatars.githubusercontent.com/u/104650542?v=4",key:"author"}],frontMatter:{slug:"mdx-blog-post",title:"MDX Blog Post",authors:["author"],tags:["docusaurus"]},prevItem:{title:"Codes Blog",permalink:"/darklab/blog/Welcome"}},c={authorsImageUrls:[void 0]},s=[],i={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Blog posts support ",(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features"},"Docusaurus Markdown features"),", such as ",(0,n.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX"),"."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Use the power of React to create interactive blog posts."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-js"},"<button onClick={() => alert('button clicked!')}>Click me!</button>\n")),(0,n.kt)("button",{onClick:()=>alert("button clicked!")},"Click me!")))}m.isMDXComponent=!0}}]);