(this.webpackJsonpfoodies=this.webpackJsonpfoodies||[]).push([[0],{38:function(e,t,c){},39:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(10),r=c.n(a),i=(c(37),c(38),c(39),c(1)),j=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("header",{children:Object(i.jsxs)("h1",{className:"header",children:["Foodies",Object(i.jsx)("span",{children:"Recipe Database"})]})})})},l=c(16),d=c(15),o=c(20),b=c(8),u=c(46),h=c(47),O=c(52),x=c(30),m=c(48),f=c(49),p=c(50),g=c(54),v=c(55),y=c(51),k=c(53),I=function(e){var t=Object(s.useState)([]),c=Object(b.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)(""),j=Object(b.a)(r,2),I=j[0],w=j[1],S=Object(s.useState)(""),N=Object(b.a)(S,2),z=N[0],C=N[1],T=function(){var e=Object(o.a)(Object(d.a)().mark((function e(t){var c,s,n,r;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),C(I),I){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=f45007eefd874c71bd0a103aa764db2d&query=".concat(I,"&number=20&addRecipeInformation=true&fillIngredients=true"));case 7:if((c=e.sent).ok){e.next=10;break}throw new Error("something went wrong!");case 10:return e.next=12,c.json();case 12:s=e.sent,n=s.results,r=n.map((function(e){return{title:e.title,image:e.image,summary:e.summary,dishTypes:e.dishTypes,servings:e.servings,analyzedInstructions:e.analyzedInstructions,ingredients:e.extendedIngredients}})),a(r),w(""),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(4),console.error(e.t0);case 22:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(t){return e.apply(this,arguments)}}(),B=Object(s.useState)(!1),F=Object(b.a)(B,2),K=F[0],R=F[1],D=function(){return R(!1)},E=Object(s.useState)([]),H=Object(b.a)(E,2),L=H[0],_=H[1],q=Object(s.useState)([]),A=Object(b.a)(q,2),J=A[0],M=A[1],G=Object(s.useState)([]),P=Object(b.a)(G,2),Q=P[0],U=P[1],V=Object(s.useState)("steps"),W=Object(b.a)(V,2),X=W[0],Y=W[1],Z=function(e){var t=e,c=t.analyzedInstructions[0].steps,s=t.ingredients;_(t),M(c),U(s),R(!0)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u.a,{fluid:!0,className:"text-light",children:Object(i.jsx)(h.a,{children:Object(i.jsx)(O.a,{onSubmit:T,children:Object(i.jsxs)(O.a.Row,{children:[Object(i.jsx)(x.a,{xs:12,md:8,children:Object(i.jsx)(O.a.Control,{name:"searchInput",value:I,onChange:function(e){return w(e.target.value)},type:"text",size:"lg",placeholder:"Search for a recipe"})}),Object(i.jsx)(x.a,{xs:12,md:3,children:Object(i.jsx)(m.a,{className:"btn-2",type:"submit",variant:"success",size:"lg",children:"Submit Search"})})]})})})}),Object(i.jsxs)(h.a,{children:[Object(i.jsx)("h2",{className:"viewing",children:n.length?"".concat(n.length," results for ").concat(z,":"):""}),Object(i.jsx)(f.a,{lg:8,children:Object(i.jsx)(p.a,{lg:"auto",className:"g-4",children:n.map((function(e){return Object(i.jsxs)(g.a,{style:{width:"18rem"},children:[Object(i.jsx)(g.a.Img,{variant:"top",src:e.image,alt:"".concat(e.title)}),Object(i.jsxs)(g.a.Body,{children:[Object(i.jsx)(g.a.Title,{children:e.title}),Object(i.jsx)(g.a.Text,{})]}),Object(i.jsxs)(v.a,{className:"list-group-flush",children:[Object(i.jsxs)(v.a.Item,{children:["Dish type- ",e.dishTypes]}),Object(i.jsxs)(v.a.Item,{children:[e.servings," servings"]})]}),Object(i.jsx)(m.a,{className:"btn-2",type:"submit",variant:"success",size:"lg",onClick:function(){return Z(e)},children:"Crafting Instructions"})]})}))})})]}),Object(i.jsxs)(y.a,Object(l.a)(Object(l.a)({show:K,onHide:D},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(i.jsx)(y.a.Header,{closeButton:!0,children:Object(i.jsx)(y.a.Title,{id:"contained-modal-title-vcenter",children:L.title})}),Object(i.jsxs)(y.a.Body,{children:[Object(i.jsx)("h4",{children:"Summary"}),Object(i.jsx)("div",{children:L.summary}),Object(i.jsxs)(k.a,{variant:"tabs",defaultActiveKey:"link-1",children:[Object(i.jsx)(k.a.Item,{children:Object(i.jsx)(k.a.Link,{eventKey:"link-1",onClick:function(){Y("steps")},children:"Steps"})}),Object(i.jsx)(k.a.Item,{children:Object(i.jsx)(k.a.Link,{href:"#disabled",onClick:function(){Y("ingredients")},children:"Ingredients"})})]}),"steps"===X?Object(i.jsx)("div",{children:J.map((function(e){return Object(i.jsx)("li",{type:"1",children:e.step},e.step)}))}):Object(i.jsx)("div",{children:Q.map((function(e){return Object(i.jsxs)("li",{children:[e.measures.us.amount," ",e.measures.us.unitShort," ",e.name]})}))})]}),Object(i.jsx)(y.a.Footer,{children:Object(i.jsx)(m.a,{onClick:D,children:"Close"})})]}))]})};var w=function(){return Object(i.jsxs)("footer",{children:[Object(i.jsx)("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"}),Object(i.jsxs)("ul",{className:"flex-row",children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://github.com/chazgraham",children:Object(i.jsx)("i",{className:"fa fa-github fa-4x"})})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://www.linkedin.com/in/chaz-graham-a95a43258",children:Object(i.jsx)("i",{className:"fa fa-linkedin-square fa-4x"})})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://stackoverflow.com/users/19429367/chaz-graham",children:Object(i.jsx)("i",{className:"fa fa-stack-overflow fa-4x"})})})]})]})},S=c.p+"static/media/no_img.2efe78cd.jpg",N=function(e){var t=Object(s.useState)([]),c=Object(b.a)(t,2),n=c[0],a=c[1],r=function(){var e=Object(o.a)(Object(d.a)().mark((function e(t){var c,s,n,r;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spoonacular.com/recipes/random?apiKey=f45007eefd874c71bd0a103aa764db2d&&number=4&addRecipeInformation=true");case 2:if((c=e.sent).ok){e.next=5;break}throw new Error("something went wrong!");case 5:return e.next=7,c.json();case 7:s=e.sent,n=s.recipes,r=n.map((function(e){return{title:e.title,image:e.image,summary:e.summary,dishTypes:e.dishTypes,servings:e.servings,analyzedInstructions:e.analyzedInstructions,ingredients:e.extendedIngredients}})),a(r);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){r()}),[]);var j=Object(s.useState)(!1),u=Object(b.a)(j,2),O=u[0],x=u[1],I=function(){return x(!1)},w=Object(s.useState)([]),N=Object(b.a)(w,2),z=N[0],C=N[1],T=Object(s.useState)([]),B=Object(b.a)(T,2),F=B[0],K=B[1],R=Object(s.useState)([]),D=Object(b.a)(R,2),E=D[0],H=D[1],L=Object(s.useState)("steps"),_=Object(b.a)(L,2),q=_[0],A=_[1],J=function(e){var t=e,c=t.analyzedInstructions[0].steps,s=t.ingredients;C(t),K(c),H(s),x(!0)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(h.a,{children:[Object(i.jsx)("h2",{className:"random_h2",children:"Need some Ideas?"}),Object(i.jsx)(f.a,{lg:8,children:Object(i.jsx)(p.a,{lg:"auto",className:"g-4",children:n.map((function(e){return Object(i.jsxs)(g.a,{style:{width:"16rem"},children:[e.image?Object(i.jsx)(g.a.Img,{variant:"top",src:e.image,alt:"".concat(e.title)}):Object(i.jsx)(g.a.Img,{variant:"top",src:S,alt:"".concat(e.title)}),Object(i.jsxs)(g.a.Body,{children:[Object(i.jsx)(g.a.Title,{children:e.title}),Object(i.jsx)(g.a.Text,{})]}),Object(i.jsxs)(v.a,{className:"list-group-flush",children:[Object(i.jsxs)(v.a.Item,{children:["Dish type- ",e.dishTypes]}),Object(i.jsxs)(v.a.Item,{children:[e.servings," servings"]})]}),Object(i.jsx)(m.a,{className:"btn-2",type:"submit",variant:"success",size:"lg",onClick:function(){return J(e)},children:"Crafting Instructions"})]})}))})})]}),Object(i.jsx)("div",{className:"random_btn",children:Object(i.jsx)(m.a,{onClick:function(){return r()},children:"Randomize"})}),Object(i.jsxs)(y.a,Object(l.a)(Object(l.a)({show:O,onHide:I},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(i.jsx)(y.a.Header,{closeButton:!0,children:Object(i.jsx)(y.a.Title,{id:"contained-modal-title-vcenter",children:z.title})}),Object(i.jsxs)(y.a.Body,{children:[Object(i.jsx)("h4",{children:"Summary"}),Object(i.jsx)("div",{children:z.summary}),Object(i.jsxs)(k.a,{variant:"tabs",defaultActiveKey:"link-1",children:[Object(i.jsx)(k.a.Item,{children:Object(i.jsx)(k.a.Link,{eventKey:"link-1",onClick:function(){A("steps")},children:"Steps"})}),Object(i.jsx)(k.a.Item,{children:Object(i.jsx)(k.a.Link,{href:"#disabled",onClick:function(){A("ingredients")},children:"Ingredients"})})]}),"steps"===q?Object(i.jsx)("div",{children:F.map((function(e){return Object(i.jsx)("li",{type:"1",children:e.step},e.step)}))}):Object(i.jsx)("div",{children:E.map((function(e){return Object(i.jsxs)("li",{children:[e.measures.us.amount," ",e.measures.us.unitShort," ",e.name]})}))})]}),Object(i.jsx)(y.a.Footer,{children:Object(i.jsx)(m.a,{onClick:I,children:"Close"})})]}))]})};var z=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j,{}),Object(i.jsx)(I,{}),Object(i.jsx)(N,{}),Object(i.jsx)(w,{})]})};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(z,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.f0c14ef9.chunk.js.map