(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),c=(n(0),n(141)),i={id:"custom-scroll-container",title:"Customize Root Element",sidebar_label:"Customize Scroller",slug:"/custom-scroll-container/"},l={unversionedId:"custom-scroll-container",id:"custom-scroll-container",isDocsHomePage:!1,title:"Customize Root Element",description:"The React Virtuoso component accepts the standard set of HTML attributes and passes them to the root scrollable DOM div.",source:"@site/docs/custom-scroll-container.md",slug:"/custom-scroll-container/",permalink:"/custom-scroll-container/",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/custom-scroll-container.md",version:"current",sidebar_label:"Customize Scroller",sidebar:"someSidebar",previous:{title:"Window Scrolling",permalink:"/window-scrolling/"},next:{title:"Customize Rendering",permalink:"/customize-structure/"}},a=[{value:"List with custom styling",id:"list-with-custom-styling",children:[]},{value:"List with custom scroller",id:"list-with-custom-scroller",children:[]}],s={rightToc:a};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The React Virtuoso component accepts the standard set of HTML attributes and passes them to the root scrollable DOM div.\nThis can be used to customize the styling and also to bind to DOM events like ",Object(c.b)("inlineCode",{parentName:"p"},"onScroll"),"."),Object(c.b)("p",null,"If you want to customize the wrapper further, you can pass your own component as ",Object(c.b)("inlineCode",{parentName:"p"},"components.Scroller"),"."),Object(c.b)("h2",{id:"list-with-custom-styling"},"List with custom styling"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Virtuoso\n  onScroll={e => console.log(e.target.scrollTop)}\n  totalCount={1000}\n  itemContent={idx => `Item ${idx}`}\n  style={{\n    border: '5px dashed gray',\n    borderRadius: '4px',\n  }}\n/>\n")),Object(c.b)("p",null,"The example above changes the scroller element with a custom component. This approach is useful for integrating the component with a custom scroller library."),Object(c.b)("h2",{id:"list-with-custom-scroller"},"List with custom scroller"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Virtuoso\n  onScroll={e => console.log(e.target.scrollTop)}\n  totalCount={1000}\n  itemContent={idx => `Item ${idx}`}\n  components={{\n    Scroller: React.forwardRef(({ style, children }, ref) => {\n      // an alternative option to assign the ref is\n      // <div ref={(r) => ref.current = r}>\n      return (\n        <div style={{...style, border: '5px solid gray'}} ref={ref}>\n          {children}\n        </div>\n      )\n    }),\n  }}\n/>\n")))}u.isMDXComponent=!0},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||m[d]||c;return n?o.a.createElement(b,l(l({ref:t},s),{},{components:n})):o.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<c;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);