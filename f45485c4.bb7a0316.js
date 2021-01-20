(window.webpackJsonp=window.webpackJsonp||[]).push([[77,9,32,55],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(2),r=n(6),a=(n(0),n(141)),i=n(54),b=n(51),c=n(48),p={id:"virtuoso-api-reference",title:"Virtuoso API Reference",sidebar_label:"Virtuoso",slug:"/virtuoso-api-reference/"},l={unversionedId:"virtuoso-api-reference",id:"virtuoso-api-reference",isDocsHomePage:!1,title:"Virtuoso API Reference",description:"All properties are optional - by default, the component will render empty. Under the hood, both Virtuoso and GroupedVirtuoso are the same component - the only difference is that they have different TypeScript interfaces applied.",source:"@site/docs/virtuoso-api-reference.md",slug:"/virtuoso-api-reference/",permalink:"/virtuoso-api-reference/",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/virtuoso-api-reference.md",version:"current",sidebar_label:"Virtuoso",sidebar:"someSidebar",previous:{title:"Grid with Responsive Columns",permalink:"/grid-responsive-columns/"},next:{title:"Virtuoso Grid API Reference",permalink:"/virtuoso-grid-api-reference/"}},s=[{value:"Virtuoso Properties",id:"virtuoso-properties",children:[]},{value:"GroupedVirtuoso Properties",id:"groupedvirtuoso-properties",children:[]},{value:"Methods",id:"methods",children:[]}],m={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"All properties are optional - by default, the component will render empty. Under the hood, both ",Object(a.b)("inlineCode",{parentName:"p"},"Virtuoso")," and ",Object(a.b)("inlineCode",{parentName:"p"},"GroupedVirtuoso")," are the same component - the only difference is that they have different TypeScript interfaces applied.\nAll ",Object(a.b)("inlineCode",{parentName:"p"},"Virtuoso")," props work for ",Object(a.b)("inlineCode",{parentName:"p"},"GroupedVirtuoso"),", but the properties in the ",Object(a.b)("inlineCode",{parentName:"p"},"GroupedVirtuoso")," section work only in grouped mode."),Object(a.b)("p",null,"If you are using TypeScript and want to use correctly typed component ",Object(a.b)("inlineCode",{parentName:"p"},"ref"),", you can use the ",Object(a.b)("inlineCode",{parentName:"p"},"VirtuosoHandle")," and the ",Object(a.b)("inlineCode",{parentName:"p"},"GroupedVirtuosoHandle")," types."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"import { Virtuoso, VirtuosoHandle } from 'react-virtuoso'\n//...\nconst ref = useRef<VirtuosoHandle>(null)\n//...\n<Virtuoso ref={ref} /*...*/ />\n")),Object(a.b)("h2",{id:"virtuoso-properties"},"Virtuoso Properties"),Object(a.b)("div",{className:"generated-api"},Object(a.b)(i.default,{mdxType:"Props"})),Object(a.b)("h2",{id:"groupedvirtuoso-properties"},"GroupedVirtuoso Properties"),Object(a.b)("div",{className:"generated-api"},Object(a.b)(b.default,{mdxType:"GroupProps"})),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("div",{className:"generated-api"},Object(a.b)(c.default,{mdxType:"Methods"})))}u.isMDXComponent=!0},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(n),u=o,d=s["".concat(i,".").concat(u)]||s[u]||m[u]||a;return n?r.a.createElement(d,b(b({ref:t},p),{},{components:n})):r.a.createElement(d,b({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:o,i[1]=b;for(var p=2;p<a;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var o=n(2),r=n(6),a=(n(0),n(141)),i={id:"_components_.virtuosohandle",title:"Interface: VirtuosoHandle",sidebar_label:"VirtuosoHandle"},b={unversionedId:"api/interfaces/_components_.virtuosohandle",id:"api/interfaces/_components_.virtuosohandle",isDocsHomePage:!1,title:"Interface: VirtuosoHandle",description:'"components".VirtuosoHandle',source:"@site/docs/api/interfaces/_components_.virtuosohandle.md",slug:"/api/interfaces/_components_.virtuosohandle",permalink:"/api/interfaces/_components_.virtuosohandle",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/api/interfaces/_components_.virtuosohandle.md",version:"current",sidebar_label:"VirtuosoHandle"},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"scrollBy",id:"scrollby",children:[]},{value:"scrollTo",id:"scrollto",children:[]},{value:"scrollToIndex",id:"scrolltoindex",children:[]}]}],p={rightToc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/api/modules/_components_"}),'"components"'),".VirtuosoHandle"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"{}"),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("strong",{parentName:"p"},"VirtuosoHandle")))),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("h3",{id:"scrollby"},"scrollBy"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"scrollBy"),"(",Object(a.b)("inlineCode",{parentName:"p"},"location"),": ScrollToOptions): void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L275"}),"components.tsx:275"))),Object(a.b)("p",null,"Scrolls the component with the specified amount. See ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions"}),"ScrollToOptions (MDN)")),Object(a.b)("h4",{id:"parameters"},"Parameters:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"location")),Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"ScrollToOptions")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," void"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"scrollto"},"scrollTo"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"scrollTo"),"(",Object(a.b)("inlineCode",{parentName:"p"},"location"),": ScrollToOptions): void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L271"}),"components.tsx:271"))),Object(a.b)("p",null,"Scrolls the component to the specified location. See ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions"}),"ScrollToOptions (MDN)")),Object(a.b)("h4",{id:"parameters-1"},"Parameters:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"location")),Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"ScrollToOptions")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," void"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"scrolltoindex"},"scrollToIndex"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"scrollToIndex"),"(",Object(a.b)("inlineCode",{parentName:"p"},"location"),": number ","|"," ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.indexlocationwithalign"}),"IndexLocationWithAlign"),"): void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L267"}),"components.tsx:267"))),Object(a.b)("p",null,"Scrolls the component to the specified item index. See {{IndexLocationWithAlign}} for more options."),Object(a.b)("h4",{id:"parameters-2"},"Parameters:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"location")),Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"number ","|"," ",Object(a.b)("a",Object(o.a)({parentName:"td"},{href:"/api/interfaces/_interfaces_.indexlocationwithalign"}),"IndexLocationWithAlign"))))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," void"))}l.isMDXComponent=!0},51:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var o=n(2),r=n(6),a=(n(0),n(141)),i={id:"_components_.groupedvirtuosoprops",title:"Interface: GroupedVirtuosoProps<D>",sidebar_label:"GroupedVirtuosoProps"},b={unversionedId:"api/interfaces/_components_.groupedvirtuosoprops",id:"api/interfaces/_components_.groupedvirtuosoprops",isDocsHomePage:!1,title:"Interface: GroupedVirtuosoProps<D>",description:'"components".GroupedVirtuosoProps',source:"@site/docs/api/interfaces/_components_.groupedvirtuosoprops.md",slug:"/api/interfaces/_components_.groupedvirtuosoprops",permalink:"/api/interfaces/_components_.groupedvirtuosoprops",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/api/interfaces/_components_.groupedvirtuosoprops.md",version:"current",sidebar_label:"GroupedVirtuosoProps"},c=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"groupContent",id:"groupcontent",children:[]},{value:"groupCounts",id:"groupcounts",children:[]},{value:"itemContent",id:"itemcontent",children:[]}]}],p={rightToc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/api/modules/_components_"}),'"components"'),".GroupedVirtuosoProps"),Object(a.b)("h2",{id:"type-parameters"},"Type parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Name"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"D"))))),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"{}")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"{}"),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("strong",{parentName:"p"},"GroupedVirtuosoProps")))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"groupcontent"},"groupContent"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"groupContent"),": ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.groupcontent"}),"GroupContent")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L187"}),"components.tsx:187"))),Object(a.b)("p",null,"Specifies how each each group header gets rendered. The callback receives the zero-based index of the group."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"groupcounts"},"groupCounts"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"groupCounts"),": number[]"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L182"}),"components.tsx:182"))),Object(a.b)("p",null,"Specifies the amount of items in each group (and, actually, how many groups are there).\nFor example, passing ","[20, 30]"," will display 2 groups with 20 and 30 items each."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"itemcontent"},"itemContent"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"itemContent"),": ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.groupitemcontent"}),"GroupItemContent"),"<","D>"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L192"}),"components.tsx:192"))),Object(a.b)("p",null,"Specifies how each each item gets rendered."))}l.isMDXComponent=!0},54:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var o=n(2),r=n(6),a=(n(0),n(141)),i={id:"_components_.virtuosoprops",title:"Interface: VirtuosoProps<D>",sidebar_label:"VirtuosoProps"},b={unversionedId:"api/interfaces/_components_.virtuosoprops",id:"api/interfaces/_components_.virtuosoprops",isDocsHomePage:!1,title:"Interface: VirtuosoProps<D>",description:'"components".VirtuosoProps',source:"@site/docs/api/interfaces/_components_.virtuosoprops.md",slug:"/api/interfaces/_components_.virtuosoprops",permalink:"/api/interfaces/_components_.virtuosoprops",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/api/interfaces/_components_.virtuosoprops.md",version:"current",sidebar_label:"VirtuosoProps"},c=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"alignToBottom",id:"aligntobottom",children:[]},{value:"atBottomStateChange",id:"atbottomstatechange",children:[]},{value:"atTopStateChange",id:"attopstatechange",children:[]},{value:"components",id:"components",children:[]},{value:"computeItemKey",id:"computeitemkey",children:[]},{value:"data",id:"data",children:[]},{value:"defaultItemHeight",id:"defaultitemheight",children:[]},{value:"endReached",id:"endreached",children:[]},{value:"firstItemIndex",id:"firstitemindex",children:[]},{value:"fixedItemHeight",id:"fixeditemheight",children:[]},{value:"followOutput",id:"followoutput",children:[]},{value:"headerFooterTag",id:"headerfootertag",children:[]},{value:"initialItemCount",id:"initialitemcount",children:[]},{value:"initialScrollTop",id:"initialscrolltop",children:[]},{value:"initialTopMostItemIndex",id:"initialtopmostitemindex",children:[]},{value:"isScrolling",id:"isscrolling",children:[]},{value:"itemContent",id:"itemcontent",children:[]},{value:"itemsRendered",id:"itemsrendered",children:[]},{value:"overscan",id:"overscan",children:[]},{value:"rangeChanged",id:"rangechanged",children:[]},{value:"scrollSeekConfiguration",id:"scrollseekconfiguration",children:[]},{value:"startReached",id:"startreached",children:[]},{value:"topItemCount",id:"topitemcount",children:[]},{value:"totalCount",id:"totalcount",children:[]},{value:"totalListHeightChanged",id:"totallistheightchanged",children:[]},{value:"useWindowScroll",id:"usewindowscroll",children:[]}]}],p={rightToc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/api/modules/_components_"}),'"components"'),".VirtuosoProps"),Object(a.b)("h2",{id:"type-parameters"},"Type parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Name"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"D"))))),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"{}"),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("strong",{parentName:"p"},"VirtuosoProps")))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"aligntobottom"},"alignToBottom"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"alignToBottom"),": boolean"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L167"}),"components.tsx:167"))),Object(a.b)("p",null,"Setting ",Object(a.b)("inlineCode",{parentName:"p"},"alignToBottom")," to ",Object(a.b)("inlineCode",{parentName:"p"},"true")," aligns the items to the bottom of the list if the list is shorter than the viewport.\nUse ",Object(a.b)("inlineCode",{parentName:"p"},"followOutput")," property to keep the list aligned when new items are appended."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"atbottomstatechange"},"atBottomStateChange"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"atBottomStateChange"),": (atBottom: boolean) => void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L146"}),"components.tsx:146"))),Object(a.b)("p",null,"Called with true / false when the list has reached the bottom / gets scrolled up.\nCan be used to load newer items, like ",Object(a.b)("inlineCode",{parentName:"p"},"tail -f"),"."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"attopstatechange"},"atTopStateChange"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"atTopStateChange"),": (atTop: boolean) => void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L151"}),"components.tsx:151"))),Object(a.b)("p",null,"Called with ",Object(a.b)("inlineCode",{parentName:"p"},"true")," / ",Object(a.b)("inlineCode",{parentName:"p"},"false")," when the list has reached the top / gets scrolled down."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"components"},"components"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"components"),": ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.components"}),"Components")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L66"}),"components.tsx:66"))),Object(a.b)("p",null,"Use the ",Object(a.b)("inlineCode",{parentName:"p"},"components")," property for advanced customization of the elements rendered by the list."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"computeitemkey"},"computeItemKey"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"computeItemKey"),": ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.computeitemkey"}),"ComputeItemKey")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L76"}),"components.tsx:76"))),Object(a.b)("p",null,"If specified, the component will use the function to generate the ",Object(a.b)("inlineCode",{parentName:"p"},"key")," property for each list item."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"data"},"data"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"data"),": readonly D[]"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L29"}),"components.tsx:29"))),Object(a.b)("p",null,"The data items to be rendered. If data is set, the total count will be inferred from the length of the array."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"defaultitemheight"},"defaultItemHeight"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"defaultItemHeight"),": number"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L87"}),"components.tsx:87"))),Object(a.b)("p",null,'By default, the component assumes the default item height from the first rendered item (rendering it as a "probe").'),Object(a.b)("p",null,"If the first item turns out to be an outlier (very short or tall), the rest of the rendering will be slower,\nas multiple passes of rendering should happen for the list to fill the viewport."),Object(a.b)("p",null,"Setting ",Object(a.b)("inlineCode",{parentName:"p"},"defaultItemHeight"),' causes the component to skip the "probe" rendering and use the property\nvalue as default height instead.'),Object(a.b)("hr",null),Object(a.b)("h3",{id:"endreached"},"endReached"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"endReached"),": (index: number) => void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L130"}),"components.tsx:130"))),Object(a.b)("p",null,"Gets called when the user scrolls to the end of the list.\nReceives the last item index as an argument. Can be used to implement endless scrolling."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"firstitemindex"},"firstItemIndex"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"firstItemIndex"),": number"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L119"}),"components.tsx:119"))),Object(a.b)("p",null,"Use when implementing inverse infinite scrolling - decrease the value this property\nin combination with  ",Object(a.b)("inlineCode",{parentName:"p"},"data")," or ",Object(a.b)("inlineCode",{parentName:"p"},"totalCount")," to prepend items to the top of the list."),Object(a.b)("p",null,"Warning: the firstItemIndex should ",Object(a.b)("strong",{parentName:"p"},"be a positive number"),", based on the total amount of items to be displayed."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"fixeditemheight"},"fixedItemHeight"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"fixedItemHeight"),": number"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L93"}),"components.tsx:93"))),Object(a.b)("p",null,"Can be used to improve performance if the rendered items are of known size.\nSetting it causes the component to skip item measurements."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"followoutput"},"followOutput"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"followOutput"),": ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/api/modules/_interfaces_#followoutput"}),"FollowOutput")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L106"}),"components.tsx:106"))),Object(a.b)("p",null,'If set to true, the list automatically scrolls to bottom if the total count is changed.\nPass "smooth" to have animated scrolling to.'),Object(a.b)("hr",null),Object(a.b)("h3",{id:"headerfootertag"},"headerFooterTag"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"headerFooterTag"),": string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L111"}),"components.tsx:111"))),Object(a.b)("p",null,"Set to customize the wrapper tag for the header and footer components (default is ",Object(a.b)("inlineCode",{parentName:"p"},"div"),")."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"initialitemcount"},"initialItemCount"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"initialItemCount"),": number"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L61"}),"components.tsx:61"))),Object(a.b)("p",null,"Use for server-side rendering - if set, the list will render the specified amount of items\nregardless of the container / item size."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"initialscrolltop"},"initialScrollTop"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"initialScrollTop"),": number"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L55"}),"components.tsx:55"))),Object(a.b)("p",null,"Set this value to offset the initial location of the list.\nWarning: using this property will still run a render cycle at the scrollTop: 0 list window.\nIf possible, avoid using it and stick to ",Object(a.b)("inlineCode",{parentName:"p"},"initialTopMostItemIndex")," instead."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"initialtopmostitemindex"},"initialTopMostItemIndex"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"initialTopMostItemIndex"),": number"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L48"}),"components.tsx:48"))),Object(a.b)("p",null,"Set to a value between 0 and totalCount - 1 to make the list start scrolled to that item."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"isscrolling"},"isScrolling"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"isScrolling"),": (isScrolling: boolean) => void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L124"}),"components.tsx:124"))),Object(a.b)("p",null,"Called when the list starts/stops scrolling."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"itemcontent"},"itemContent"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"itemContent"),": ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.itemcontent"}),"ItemContent"),"<","D>"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L71"}),"components.tsx:71"))),Object(a.b)("p",null,"Set the callback to specify the contents of the item."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"itemsrendered"},"itemsRendered"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"itemsRendered"),": (items: ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/api/modules/_interfaces_#listitem"}),"ListItem"),"<","D>[]) => void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L161"}),"components.tsx:161"))),Object(a.b)("p",null,"Called with the new set of items each time the list items are rendered due to scrolling."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"overscan"},"overscan"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"overscan"),": number ","|"," { main: number ; reverse: number  }"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L36"}),"components.tsx:36"))),Object(a.b)("p",null,"Increases the visual window which is used to calculate the rendered items with the specified ",Object(a.b)("strong",{parentName:"p"},"amount in pixels"),'.\nEffectively, this makes the component "chunk" the rendering of new items by renderng more items than the necessary, but reducing the re-renders on scroll.\nSetting { main: number, reverse: number } lets you extend the list in both the main and the reverse scrollable directions.'),Object(a.b)("hr",null),Object(a.b)("h3",{id:"rangechanged"},"rangeChanged"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"rangeChanged"),": (range: ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.listrange"}),"ListRange"),") => void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L140"}),"components.tsx:140"))),Object(a.b)("p",null,"Called with the new set of items each time the list items are rendered due to scrolling."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"scrollseekconfiguration"},"scrollSeekConfiguration"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"scrollSeekConfiguration"),": ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.scrollseekconfiguration"}),"ScrollSeekConfiguration")," ","|"," false"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L100"}),"components.tsx:100"))),Object(a.b)("p",null,"Use to display placeholders if the user scrolls fast through the list."),Object(a.b)("p",null,"Set ",Object(a.b)("inlineCode",{parentName:"p"},"components.ScrollSeekPlaceholder")," to change the placeholder content."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"startreached"},"startReached"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"startReached"),": (index: number) => void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L135"}),"components.tsx:135"))),Object(a.b)("p",null,"Called when the user scrolls to the start of the list."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"topitemcount"},"topItemCount"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"topItemCount"),": number"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L43"}),"components.tsx:43"))),Object(a.b)("p",null,"Set the amount of items to remain fixed at the top of the list."),Object(a.b)("p",null,"For a header that scrolls away when scrolling, check the ",Object(a.b)("inlineCode",{parentName:"p"},"components.Header")," property."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"totalcount"},"totalCount"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"totalCount"),": number"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L24"}),"components.tsx:24"))),Object(a.b)("p",null,"The total amount of items to be rendered."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"totallistheightchanged"},"totalListHeightChanged"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"totalListHeightChanged"),": (height: number) => void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L156"}),"components.tsx:156"))),Object(a.b)("p",null,"Called when the total list height is changed due to new items or viewport resize."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"usewindowscroll"},"useWindowScroll"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"useWindowScroll"),": boolean"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1ee6bff/src/components.tsx#L172"}),"components.tsx:172"))),Object(a.b)("p",null,"Experimental - uses the document scroller rather than wrapping the list in its own."))}l.isMDXComponent=!0}}]);