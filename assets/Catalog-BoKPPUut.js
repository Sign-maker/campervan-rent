import{r as a,j as t,B as u}from"./index-BWygEn43.js";import{u as f,C as x,B as C}from"./CarList-DBm6RIOo.js";const j="_contentSection_sih0d_1",_="_catalog_sih0d_5",b="_btnWrapper_sih0d_10",n={contentSection:j,catalog:_,btnWrapper:b},v=()=>{const{cars:i,totalPages:r,fetchCars:c,resetCars:l,isLoading:o}=f(),[d,h]=a.useState(!1),[s,p]=a.useState(1);a.useEffect(()=>{const e=new AbortController,m=e.signal;return(async()=>{try{await c({params:{page:s},signal:m}),s>1&&window.scrollBy({top:384,behavior:"smooth"})}catch{u.error("Ooops.. something went wrong!")}})(),()=>{e.abort()}},[c,s]),a.useEffect(()=>{h(s<r)},[s,r]),a.useEffect(()=>()=>{l()},[l]);const g=()=>{p(e=>e+1)};return t.jsx("section",{className:n.contentSection,children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:n.catalog,children:[t.jsx("h2",{className:"visually-hidden",children:"Campers catalog"}),i.length>0?t.jsx(x,{}):!o&&t.jsx("p",{children:"No data"}),d&&t.jsx("div",{className:n.btnWrapper,children:t.jsx(C,{styleType:"loadMoreButton",loading:o,onClick:g,children:"Load more"})}),o&&t.jsx("p",{children:"...Loading Cars"})]})})})};export{v as default};
