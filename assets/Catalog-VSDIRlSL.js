import{a as e,j as t,L as x,B as d}from"./index-woxeVZVj.js";import{u as j,C,E as _}from"./Empty-CqfJotS4.js";import{B as b}from"./Button-CV0tBhxq.js";const w="_contentSection_sih0d_1",y="_catalog_sih0d_5",E="_btnWrapper_sih0d_10",o={contentSection:w,catalog:y,btnWrapper:E},B=()=>{const{cars:r,totalPages:n,fetchCars:c,resetCars:l,isLoading:i}=j(),[p,h]=e.useState(!1),[s,m]=e.useState(1);e.useEffect(()=>{const a=new AbortController,u=a.signal;return(async()=>{try{await c({params:{page:s},signal:u}),s>1&&window.scrollBy({top:384,behavior:"smooth"}),d.success("New campers loaded")}catch(f){d.error(`Oops.. something went wrong! ${f}`)}})(),()=>{a.abort()}},[c,s]),e.useEffect(()=>{h(s<n)},[s,n]),e.useEffect(()=>()=>{l()},[l]);const g=()=>{m(a=>a+1)};return t.jsx("section",{className:o.contentSection,children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:o.catalog,children:[t.jsx("h2",{className:"visually-hidden",children:"Campers catalog"}),r.length>0&&t.jsx(C,{}),i&&t.jsx(x,{}),!r.length&&t.jsx(_,{}),p&&t.jsx("div",{className:o.btnWrapper,children:t.jsx(b,{styleType:"loadMoreButton",loading:i,onClick:g,children:"Load more"})})]})})})};export{B as default};
