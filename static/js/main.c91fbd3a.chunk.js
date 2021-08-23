(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],{20:function(n,e,t){},21:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var r,o,a,s,c=t(0),i=t.n(c),d=t(8),l=t.n(d),h=(t(20),t(2)),u=t(9),m=t(10),p=t(15),b=t(14),f=(t(21),t(3)),j=t(1),g=function(n){return Object(j.jsxs)(x,{children:[Object(j.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(n.monster.id,"?set=set2&size=180x180")}),Object(j.jsx)("h2",{children:n.monster.name}),Object(j.jsx)("p",{children:n.monster.email})]})},x=f.a.div(r||(r=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: #95dada;\n  border: 1px solid grey;\n  border-radius: 5px;\n  padding: 25px;\n  cursor: pointer;\n  -moz-osx-font-smoothing: grayscale;\n  backface-visibility: hidden;\n  transform: translate(0);\n  transition: transform 0.25s ease-out;\n  &:hover {\n    transform: scale(1.05);\n  }\n"]))),O=function(n){return Object(j.jsx)(v,{children:n.monsters.map((function(n){return Object(j.jsx)(g,{monster:n},n.id)}))})},v=f.a.div(o||(o=Object(h.a)(["\n  width: 85vw;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 20px;\n"]))),y=function(n){n.placeholderText;var e=n.handleChange;return Object(j.jsx)(C,{type:"search",placeholder:n.placeholderText,onChange:e})},C=f.a.input(a||(a=Object(h.a)(["\n  padding: 10px;\n  -webkit-appearance: none;\n  border: none;\n  outline: none;\n  line-height: 30px;\n  width: 150px;\n  margin-bottom: 30px;\n"]))),w=function(n){Object(p.a)(t,n);var e=Object(b.a)(t);function t(){var n;return Object(u.a)(this,t),(n=e.call(this)).handleChange=function(e){n.setState({searchField:e.target.value})},n.state={monsters:[],searchField:""},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var n=this;fetch("https://jsonplaceholder.typicode.com/users",{mode:"cors"}).then((function(n){return n.json()})).then((function(e){return n.setState({monsters:e})}))}},{key:"render",value:function(){var n=this,e=this.state,t=e.searchField,r=e.monsters.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}));return Object(j.jsxs)(k,{children:[Object(j.jsx)("h1",{children:"Monsters Rolodex"}),Object(j.jsx)(y,{placeholderText:"search monsters",handleChange:function(e){return n.handleChange(e)}}),Object(j.jsx)(O,{monsters:r})]})}}]),t}(c.Component),k=f.a.div(s||(s=Object(h.a)(['\n  text-align: center;\n  h1 {\n    margin: 0;\n    font-family: "Bigelow Rules";\n    font-size: 72px;\n    color: #0ccac4;\n  }\n  background: linear-gradient(\n    to left,\n    rgba(7, 27, 82, 1) 0%,\n    rgba(0, 128, 128, 1) 100%\n  );\n']))),F=w,T=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,s=e.getTTFB;t(n),r(n),o(n),a(n),s(n)}))};l.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root")),T()}},[[25,1,2]]]);
//# sourceMappingURL=main.c91fbd3a.chunk.js.map