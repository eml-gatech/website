"use strict";(self.webpackChunkbaena=self.webpackChunkbaena||[]).push([[392],{6142:(e,t,a)=>{a.d(t,{Z:()=>P});var n=a(7462),r=a(7294),l=a(1980),i=a(7143),o=a(9912),c=a(5181),s=a(7614),p=a(4195),m=a(3023),h=a(5358),u=a(4888),d=a(9264),k=a(4321);const g=e=>{let{title:t,authors:a,venue:n,year:s,link:p}=e;return r.createElement("div",null,r.createElement(l.Z,null,r.createElement(i.Z,{onClick:e=>{window.location.href=`https://scholar.google.com/${p}`}},r.createElement(o.Z,null,r.createElement(c.Z,{variant:"h5",component:"h2"},t),r.createElement(c.Z,{color:"textSecondary"},a),r.createElement(c.Z,{variant:"body2",component:"p"},n),r.createElement(c.Z,{color:"textSecondary"},s)))),r.createElement("br",null))},E=e=>{let{data:t}=e;const a=Object.entries(t.citations_per_year).map((e=>{let[t,a]=e;return{year:t,citations:a}}));return r.createElement(s.v,{width:350,height:300,data:a},r.createElement(p.q,{strokeDasharray:"3 3"}),r.createElement(m.K,{dataKey:"year"}),r.createElement(h.B,null),r.createElement(u.u,null),r.createElement(d.D,null),r.createElement(k.$,{dataKey:"citations",fill:"#b3a369"}))},P=e=>{let{scholarId:t,showIndex:a=!0,showTotatCitations:l=!1}=e;const[i,o]=(0,r.useState)(void 0);return(0,r.useEffect)((()=>{!async function(){try{const e=await fetch(`https://baena.gatech.edu/scholar/${t}`),a=await e.json();o(a)}catch(e){console.error(e)}}()}),[]),i?r.createElement("div",null,r.createElement("div",null,l&&r.createElement("div",{style:{display:"table",marginRight:"auto",marginLeft:"auto"}},r.createElement("h3",null,"Citations"),r.createElement(E,{data:i}),r.createElement("h4",null,"Total Citations: ",i.total_citations),a&&r.createElement("div",null,r.createElement("h4",null,"h-index: ",i.hIndex),r.createElement("h4",null,"i-10 index: ",i.i10Index))),r.createElement("h4",null,r.createElement("a",{href:`https://scholar.google.com/citations?user=${t}&hl=en`},"Link to Google Scholar Profile")),r.createElement("h3",null,"Publications"),i.publications.map(((e,t)=>r.createElement(g,(0,n.Z)({key:t},e)))))):r.createElement("div",null,"Loading...")}},8549:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l=a.p+"assets/images/carlo-ae01829963de35d8aca017f14ec00478.png";var i=a(6142);const o={},c="Carlo Perini",s={unversionedId:"People/Research Scientists/carlo",id:"People/Research Scientists/carlo",title:"Carlo Perini",description:"he/his/him",source:"@site/docs/02-People/02-Research Scientists/01-carlo.mdx",sourceDirName:"02-People/02-Research Scientists",slug:"/People/Research Scientists/carlo",permalink:"/docs/People/Research Scientists/carlo",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Principal Investigator",permalink:"/docs/People/prof"},next:{title:"Kunal Datta",permalink:"/docs/People/Post Doctoral Researchers/kunal"}},p={},m=[],h={toc:m};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"carlo-perini"},"Carlo Perini"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"he/his/him")),(0,r.kt)("img",{src:l,width:"200",align:"right"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Entry year:")," Fall 2019",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Research Areas:")," Device Engineering, Probing Structure-Property Relationships of interfaces, Thermal Evaporation of Exotic Materials, Light-Matter Interactions. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Degrees \ud83c\udf93:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PhD. Physics \u2013 Politecnico di Milano "),(0,r.kt)("li",{parentName:"ul"},"M.S. Nano-technologies and physical technologies \u2013 Politecnico di Milano "),(0,r.kt)("li",{parentName:"ul"},"B.S. Physics Engineering \u2013 Politecnico di Milano ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hometown:")," \ud83c\udfe1 Pieve Fissiraga, Italy",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Hobbies:")," Bouldering, Backpacking, Skiing, Diving, Traveling"),(0,r.kt)("admonition",{title:"Contact Information",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u2709\ufe0f ",(0,r.kt)("a",{parentName:"p",href:"mailto:carperini@gatech.edu"},"carperini@gatech.edu"),(0,r.kt)("br",null),"\n\ud83c\udfe2 Pettit Microelectronics, 117",(0,r.kt)("br",null),"\n\ud83c\udf10 ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/CarloPerini3"},"@CarloPerini3"))),(0,r.kt)(i.Z,{scholarId:"a5V-liEAAAAJ",showTotatCitations:!1,mdxType:"ScholarProfile"}))}u.isMDXComponent=!0}}]);