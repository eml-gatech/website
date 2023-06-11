"use strict";(self.webpackChunkbaena=self.webpackChunkbaena||[]).push([[371],{6142:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7462),l=n(7294),r=n(1980),i=n(7143),o=n(9912),c=n(5181),s=n(7614),u=n(4195),d=n(3023),m=n(5358),p=n(4888),g=n(9264),h=n(4321);const k=e=>{let{title:t,authors:n,venue:a,year:s,link:u}=e;return l.createElement("div",null,l.createElement(r.Z,null,l.createElement(i.Z,{onClick:e=>{window.location.href=`https://scholar.google.com/${u}`}},l.createElement(o.Z,null,l.createElement(c.Z,{variant:"h5",component:"h2"},t),l.createElement(c.Z,{color:"textSecondary"},n),l.createElement(c.Z,{variant:"body2",component:"p"},a),l.createElement(c.Z,{color:"textSecondary"},s)))),l.createElement("br",null))},E=e=>{let{data:t}=e;const n=Object.entries(t.citations_per_year).map((e=>{let[t,n]=e;return{year:t,citations:n}}));return l.createElement(s.v,{width:350,height:300,data:n},l.createElement(u.q,{strokeDasharray:"3 3"}),l.createElement(d.K,{dataKey:"year"}),l.createElement(m.B,null),l.createElement(p.u,null),l.createElement(g.D,null),l.createElement(h.$,{dataKey:"citations",fill:"#b3a369"}))},y=e=>{let{scholarId:t,showIndex:n=!0,showTotatCitations:r=!1}=e;const[i,o]=(0,l.useState)(void 0);return(0,l.useEffect)((()=>{!async function(){try{const e=await fetch(`https://baena.gatech.edu/scholar/${t}`),n=await e.json();o(n)}catch(e){console.error(e)}}()}),[]),i?l.createElement("div",null,l.createElement("div",null,r&&l.createElement("div",{style:{display:"table",marginRight:"auto",marginLeft:"auto"}},l.createElement("h3",null,"Citations"),l.createElement(E,{data:i}),l.createElement("h4",null,"Total Citations: ",i.total_citations),n&&l.createElement("div",null,l.createElement("h4",null,"h-index: ",i.hIndex),l.createElement("h4",null,"i-10 index: ",i.i10Index))),l.createElement("h4",null,l.createElement("a",{href:`https://scholar.google.com/citations?user=${t}&hl=en`},"Link to Google Scholar Profile")),l.createElement("h3",null,"Publications"),i.publications.map(((e,t)=>l.createElement(k,(0,a.Z)({key:t},e)))))):l.createElement("div",null,"Loading...")}},2173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const r=n.p+"assets/images/jingwei-517f2461dddc4295aca7ab5d43497521.png";n(6142);const i={},o="Jingwei Yang",c={unversionedId:"People/Graduate Students/jingwei",id:"People/Graduate Students/jingwei",title:"Jingwei Yang",description:"she/her",source:"@site/docs/02-People/04-Graduate Students/jingwei.mdx",sourceDirName:"02-People/04-Graduate Students",slug:"/People/Graduate Students/jingwei",permalink:"/docs/People/Graduate Students/jingwei",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Jack Lawton",permalink:"/docs/People/Graduate Students/jack"},next:{title:"Juanita Hidalgo",permalink:"/docs/People/Graduate Students/juanita"}},s={},u=[],d={toc:u};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"jingwei-yang"},"Jingwei Yang"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"she/her")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Position:")," PhD Student"),(0,l.kt)("img",{src:r,width:"200",align:"right"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Entry year:")," Fall 2018",(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Research Areas:")," Perovskite/organic photodiode optimization, electro-optics "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Degrees \ud83c\udf93:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"M.S. in Electrical Engineering \u2013 City University of Hong Kong "),(0,l.kt)("li",{parentName:"ul"},"BEng. in Electrical Engineering \u2013 City University of Hong Kong  ")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Hometown:")," \ud83c\udfe1  Xining, Qinghai, China",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Hobbies:")," Reading, Zheng, puzzle games"),(0,l.kt)("admonition",{title:"Contact Information",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u2709\ufe0f ",(0,l.kt)("a",{parentName:"p",href:"mailto:jingwyang@gatech.edu"},"jingwyang@gatech.edu"),(0,l.kt)("br",null))))}m.isMDXComponent=!0}}]);