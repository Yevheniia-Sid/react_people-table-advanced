(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var c=a(26),r=a(8),n=(a(36),a(37),a(3)),s=a(5),l=a(0),i=a(10),o=a(9),j=a.n(o);function d(e,t){var a=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(s.a)(e,2),c=t[0],r=t[1];null===r?a.delete(c):Array.isArray(r)?(a.delete(c),r.forEach((function(e){a.append(c,e)}))):a.set(c,r)})),a.toString()}var b=["16","17","18","19","20"],u=function(e){return e.All="All",e.Male="m",e.Female="f",e}({}),h=function(e){return e.Query="query",e.Sex="sex",e.Centuries="centuries",e.Sort="sort",e.Order="order",e}({}),x=a(24),m=a(27),O=a(1),p=["children","params"],f=function(e){var t=e.children,a=e.params,c=Object(m.a)(e,p),n=Object(r.d)(),l=Object(s.a)(n,1)[0];return Object(O.jsx)(r.b,Object(x.a)(Object(x.a)({to:{search:d(l,a)}},c),{},{children:t}))},N=function(){var e=Object(r.d)(),t=Object(s.a)(e,2),a=t[0],c=t[1],n=a.get(h.Query)||"",l=a.get(h.Sex)||"",o=a.getAll(h.Centuries)||[];return Object(O.jsxs)("nav",{className:"panel",children:[Object(O.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(O.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(O.jsx)(f,{className:j()({"is-active":!l}),params:{sex:null},children:"All"}),Object(O.jsx)(f,{className:j()({"is-active":l===u.Male}),params:{sex:u.Male},children:"Male"}),Object(O.jsx)(f,{className:j()({"is-active":l===u.Female}),params:{sex:u.Female},children:"Female"})]}),Object(O.jsx)("div",{className:"panel-block",children:Object(O.jsxs)("p",{className:"control has-icons-left",children:[Object(O.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:n,onChange:function(e){var t={query:e.target.value||null},r=d(a,t);c(r)}}),Object(O.jsx)("span",{className:"icon is-left",children:Object(O.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(O.jsx)("div",{className:"panel-block",children:Object(O.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(O.jsx)("div",{className:"level-left",children:b.map((function(e){var t=o.includes(e),a=t?o.filter((function(t){return t!==e})):[].concat(Object(i.a)(o),[e]);return Object(O.jsx)(f,{"data-cy":"century",params:{centuries:a},className:j()("button","mr-1",{"is-info":t}),children:e},e)}))}),Object(O.jsx)("div",{className:"level-right ml-4",children:Object(O.jsx)(f,{"data-cy":"centuryALL",className:j()("button","is-success",{"is-outlined":!!o.length}),params:{centuries:null},children:"All"})})]})}),Object(O.jsx)("div",{className:"panel-block",children:Object(O.jsx)(f,{className:"button is-link is-outlined is-fullwidth",params:{sex:null,centuries:[],query:null},children:"Reset all filters"})})]})},v=(a(39),function(){return Object(O.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(O.jsx)("div",{className:"Loader__content"})})}),g=function(e){var t=e.person;return Object(O.jsx)(r.b,{to:"../".concat(t.slug),className:j()({"has-text-danger":"f"===t.sex}),children:t.name})},w=function(e){var t=e.person,a=t.sex,c=t.born,r=t.died,s=t.mother,l=t.motherName,i=t.father,o=t.fatherName,d=Object(n.q)().slug,b=void 0===d?"":d;return Object(O.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":t.slug===b}),children:[Object(O.jsx)("td",{children:Object(O.jsx)(g,{person:t})}),Object(O.jsx)("td",{children:a}),Object(O.jsx)("td",{children:c}),Object(O.jsx)("td",{children:r}),Object(O.jsx)("td",{children:s?Object(O.jsx)(g,{person:s}):l}),Object(O.jsx)("td",{children:i?Object(O.jsx)(g,{person:i}):o})]})},y=function(e){return e.Name="name",e.Sex="sex",e.Born="born",e.Died="died",e}({}),S=function(e){var t=e.people,a=Object(r.d)(),c=Object(s.a)(a,1)[0],n=c.get(h.Sort),l=c.has(h.Order),i=c.get(h.Query);function o(e){return n===e?l?{sort:null,order:null}:{sort:e,order:"desc"}:{sort:e,order:null}}return Object(O.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:Object(O.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Name",Object(O.jsx)(f,{params:o(y.Name),children:Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)("i",{className:j()("fas",{"fa-sort":i!==y.Name,"fa-sort-up":n===y.Name&&!l,"fa-sort-down":n===y.Name&&l})})})})]})}),Object(O.jsx)("th",{children:Object(O.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Sex",Object(O.jsx)(f,{params:o(y.Sex),children:Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)("i",{className:j()("fas",{"fa-sort":i!==y.Sex,"fa-sort-up":n===y.Sex&&!l,"fa-sort-down":n===y.Sex&&l})})})})]})}),Object(O.jsx)("th",{children:Object(O.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Born",Object(O.jsx)(f,{params:o(y.Born),children:Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)("i",{className:j()("fas",{"fa-sort":i!==y.Born,"fa-sort-up":n===y.Born&&!l,"fa-sort-down":n===y.Born&&l})})})})]})}),Object(O.jsx)("th",{children:Object(O.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Died",Object(O.jsx)(f,{params:o(y.Died),children:Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)("i",{className:j()("fas",{"fa-sort":i!==y.Died,"fa-sort-up":n===y.Died&&!l,"fa-sort-down":n===y.Died&&l})})})})]})}),Object(O.jsx)("th",{children:"Mother"}),Object(O.jsx)("th",{children:"Father"})]})}),Object(O.jsx)("tbody",{children:t.map((function(e){return Object(O.jsx)(w,{person:e},e.slug)}))})]})},k=a(4),C=a(7),A="https://mate-academy.github.io/react_people-table/api/people.json";function F(e){return new Promise((function(t){return setTimeout(t,e)}))}function L(){return(L=Object(C.a)(Object(k.a)().mark((function e(){return Object(k.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",F(500).then((function(){return fetch(A)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=function(){var e=Object(l.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],n=Object(l.useState)(!1),o=Object(s.a)(n,2),j=o[0],d=o[1],b=Object(l.useState)(!1),u=Object(s.a)(b,2),x=u[0],m=u[1],p=Object(r.d)(),f=Object(s.a)(p,1)[0];Object(l.useEffect)((function(){d(!0),function(){return L.apply(this,arguments)}().then((function(e){c(function(e){return e.map((function(t){var a=t;return a.motherName=t.motherName||"-",a.fatherName=t.fatherName||"-",a.mother=e.find((function(e){return e.name===t.motherName})),a.father=e.find((function(e){return e.name===t.fatherName})),a}))}(e))})).catch((function(){return m(!0)})).finally((function(){return d(!1)}))}),[]);var g=function(e,t){var a=t.get(h.Query)||"",c=t.get(h.Sex),r=t.getAll(h.Centuries),n=t.get(h.Sort),s=t.get(h.Order),l=Object(i.a)(e);if(a&&(l=l.filter((function(e){var t=e.name,c=e.motherName,r=e.fatherName,n=a.toLowerCase();return t.toLowerCase().includes(n)||(null===c||void 0===c?void 0:c.toLowerCase().includes(n))||(null===r||void 0===r?void 0:r.toLowerCase().includes(n))}))),c&&(l=l.filter((function(e){return e.sex===c}))),r.length&&(l=l.filter((function(e){var t=e.born;return r.includes(Math.ceil(t/100).toString())}))),n){switch(n){case y.Name:l.sort((function(e,t){return e.name.localeCompare(t.name)}));break;case y.Sex:l.sort((function(e,t){return e.sex.localeCompare(t.sex)}));break;case y.Born:l.sort((function(e,t){return e.born-t.born}));break;case y.Died:l.sort((function(e,t){return e.died-t.died}))}s&&l.reverse()}return l}(a,f),w=x&&!j,k=!a.length&&!j&&!x,C=!j&&!!g.length&&!x,A=!j&&!g.length&&!x;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{className:"title",children:"People Page"}),Object(O.jsx)("div",{className:"block",children:Object(O.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[!j&&Object(O.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(O.jsx)(N,{})}),Object(O.jsx)("div",{className:"column",children:Object(O.jsxs)("div",{className:"box table-container",children:[j&&Object(O.jsx)(v,{}),w&&Object(O.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),k&&Object(O.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),A&&Object(O.jsx)("p",{children:"There are no people matching the current search criteria"}),C&&Object(O.jsx)(S,{people:g})]})})]})})]})},P=function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},D=function(){return Object(O.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"navbar-brand",children:[Object(O.jsx)(r.c,{to:"/",className:P,children:"Home"}),Object(O.jsx)(r.c,{to:"/people",className:P,children:"People"})]})})})},M=function(){return Object(O.jsx)("h1",{className:"title",children:"Home Page"})},E=function(){return Object(O.jsx)("h1",{className:"title",children:"Page not found"})},_=(a(40),function(){return Object(O.jsxs)("div",{"data-cy":"app",children:[Object(O.jsx)(D,{}),Object(O.jsx)("div",{className:"section",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)(n.d,{children:[Object(O.jsx)(n.b,{path:"/",element:Object(O.jsx)(M,{})}),Object(O.jsx)(n.b,{path:"/home",element:Object(O.jsx)(n.a,{to:"/",replace:!0})}),Object(O.jsx)(n.b,{path:"people",children:Object(O.jsx)(n.b,{path:":slug?",element:Object(O.jsx)(B,{})})}),Object(O.jsx)(n.b,{path:"*",element:Object(O.jsx)(E,{})})]})})})]})});Object(c.createRoot)(document.getElementById("root")).render(Object(O.jsx)(r.a,{children:Object(O.jsx)(_,{})}))}},[[41,1,2]]]);
//# sourceMappingURL=main.358c6d33.chunk.js.map