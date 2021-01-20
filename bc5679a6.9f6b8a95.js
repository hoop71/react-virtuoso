(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{122:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(2),o=t(6),i=(t(0),t(141)),c={id:"window-scrolling",title:"Window Scrolling",sidebar_label:"Window Scrolling",slug:"/window-scrolling/"},a={unversionedId:"window-scrolling",id:"window-scrolling",isDocsHomePage:!1,title:"Window Scrolling",description:"The Virtuoso component can use the document level scroller.",source:"@site/docs/window-scrolling.md",slug:"/window-scrolling/",permalink:"/window-scrolling/",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/window-scrolling.md",version:"current",sidebar_label:"Window Scrolling",sidebar:"someSidebar",previous:{title:"React Sortable HOC",permalink:"/react-sortable-hoc/"},next:{title:"Customize Root Element",permalink:"/custom-scroll-container/"}},l=[{value:"List attached to window scroller",id:"list-attached-to-window-scroller",children:[]}],s={rightToc:l};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Virtuoso component can use the document level scroller.\nThis feature is a recent addition and may not work as expected in certain scenarios.\nIf you encounter such case, please open an issue with a reproduction of it."),Object(i.b)("h2",{id:"list-attached-to-window-scroller"},"List attached to window scroller"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Virtuoso\n  useWindowScroll\n  data={generateUsers(200)}\n  itemContent={(index, user) => (\n    <div\n      style={{\n        backgroundColor: user.bgColor,\n        padding: '1rem 0.5rem',\n      }}\n    >\n      <h4>{user.name}</h4>\n      <div style={{ marginTop: '1rem' }}>{user.description}</div>\n    </div>\n  )}\n/>\n")))}u.isMDXComponent=!0},141:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return t?o.a.createElement(f,a(a({ref:n},s),{},{components:t})):o.a.createElement(f,a({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var s=2;s<i;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);