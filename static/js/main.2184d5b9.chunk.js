(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),s=n.n(o),c=(n(12),n(3)),i=n(4),l=n(6),u=n(5),m=(n(13),function(e){return a.a.createElement("div",{className:"card-container"},a.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),a.a.createElement("h2",null," ",e.monster.name," "),a.a.createElement("p",null," ",e.monster.email," "))}),h=(n(14),function(e){return a.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return a.a.createElement(m,{key:e.id,monster:e})})))}),d=(n(15),function(e){return a.a.createElement("input",{className:"search-box",type:"search",placeholder:"search monsters",onChange:e.onSearchChange})}),f=(n(16),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Monsters Rolodex"),a.a.createElement(d,{onSearchChange:this.onSearchChange}),a.a.createElement(h,{monsters:r}))}}]),n}(r.Component));s.a.render(a.a.createElement(f,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.2184d5b9.chunk.js.map