(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),s=n(2),c=n.n(s),l=n(3),i=n(4),a=n(6),d=n(5),u=(n(12),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),m=function(e){Object(a.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={selectedGoodsArr:["No goods"]},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null," ","".concat(this.state.selectedGoodsArr.map((function(e){return" ".concat(e)}))," are selected"),r.a.createElement("button",{type:"button",id:"xButton",style:{visibility:"hidden"},onClick:function(){e.setState({selectedGoodsArr:["No goods"]}),document.getElementById("xButton").style.visibility="hidden"}}," ","X"," ")),r.a.createElement("ul",null,u.map((function(t){return r.a.createElement("li",null," ",t,r.a.createElement("button",{type:"button",id:t,onClick:function(){"No goods"===e.state.selectedGoodsArr[0]?e.setState((function(){return{selectedGoodsArr:[t]}})):e.setState((function(e){return e.selectedGoodsArr.push(t)})),document.getElementById(t).style.visibility="hidden",document.getElementById("xButton").style.visibility="visible"}}," ","Add"),r.a.createElement("button",{type:"button",onClick:function(){e.setState((function(e){return{selectedGoodsArr:e.selectedGoodsArr.filter((function(e){return e!==t}))}})),1===e.state.selectedGoodsArr.length&&e.state.selectedGoodsArr[0]===t&&e.setState({selectedGoodsArr:["No goods"]}),document.getElementById(t).style.visibility="visible"}},"remove"))}))))}}]),n}(r.a.Component);c.a.render(r.a.createElement(m,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.54882f79.chunk.js.map