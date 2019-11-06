(this.webpackJsonpproject2=this.webpackJsonpproject2||[]).push([[0],{33:function(e,t,o){e.exports=o(62)},38:function(e,t,o){},39:function(e,t,o){},62:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),r=o(29),c=o.n(r),l=(o(38),o(9)),i=o(11),s=o(12),u=o(14),m=o(13),v=o(15),k=(o(39),function(e){return n.a.createElement("div",{class:"text-center",id:"bookStore"},n.a.createElement("h1",null,"Blue Bookstore"),n.a.createElement("div",{class:"text-center"},n.a.createElement("h2",null,"Welcome to Blue Bookstore")))}),d=function(e){console.log(e.favoriteBooks);var t=e.favoriteBooks.map((function(t,o){return n.a.createElement("div",{key:o},n.a.createElement("img",{src:t.image}),n.a.createElement("h6",{class:"titleStyle"},t.title),n.a.createElement("h6",null,t.price),n.a.createElement("button",{type:"button",class:"btn btn-link",onClick:function(){return e.removeBookFave(t)}},"Remove")," ")}));return n.a.createElement("div",null,n.a.createElement("h1",null,"Favorite"),n.a.createElement("button",{type:"button",class:"btn btn-link",onClick:function(){return e.removeAllFave(t)}},"Remove All"),t)},b=function(e){console.log(e.cartBooks);var t=e.cartBooks.map((function(t,o){return n.a.createElement("div",{key:o},n.a.createElement("img",{src:t.image}),n.a.createElement("h6",{class:"titleStyle"},t.title),n.a.createElement("h6",null,t.price),n.a.createElement("button",{type:"button",class:"btn btn-link",onClick:function(){return e.removeBookCart(t)}},"Remove"))}));return n.a.createElement("div",null,n.a.createElement("h1",null,"Cart"),n.a.createElement("button",{type:"button",class:"btn btn-link",onClick:function(){return e.removeAllCart(t)}},"Remove All"),t)};function f(e){return n.a.createElement("div",null,n.a.createElement("img",{src:e.img}),n.a.createElement("h6",{class:"titleStyle"},e.title),n.a.createElement("h6",null,e.price),n.a.createElement("button",{type:"button",class:"btn btn-info",onClick:function(){return e.addBookToFavorite(e.data)}},"Add to Favorite"),"  ",n.a.createElement("button",{type:"button",class:"btn btn-warning",onClick:function(){return e.addBookToCart(e.data)}},"Add to Cart"))}var p=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.books.map((function(t,o){return n.a.createElement(f,{key:o,addBookToFavorite:e.props.addBookToFavorite,addBookToCart:e.props.addBookToCart,img:t.image,data:t,title:t.title,price:t.price})}));return n.a.createElement("div",{class:"container-fluid"},n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col-md-3 offset-md-3"},t)))}}]),t}(a.Component),E=o(7),B=o(6),h=function(e){return n.a.createElement("div",null,n.a.createElement("h1",null,"Page not found"),n.a.createElement("h1",null,"404"),n.a.createElement(E.b,{to:"/"},"Go Home"))},C=o(32),O=o.n(C),j=function(e){function t(e){var o;return Object(i.a)(this,t),(o=Object(u.a)(this,Object(m.a)(t).call(this,e))).addBookToFavorite=function(e){var t=[].concat(Object(l.a)(o.state.favoriteBooks),[e]);console.log(e),o.setState({favoriteBooks:t})},o.addBookToCart=function(e){var t=[].concat(Object(l.a)(o.state.cartBooks),[e]);console.log(e),o.setState({cartBooks:t})},o.removeBookFave=function(e){var t=Object(l.a)(o.state.favoriteBooks),a=t.indexOf(e);t.splice(a,1),o.setState({favoriteBooks:t})},o.removeBookCart=function(e){var t=Object(l.a)(o.state.cartBooks),a=t.indexOf(e);t.splice(a,1),o.setState({cartBooks:t})},o.removeAllFave=function(e){var t=Object(l.a)(o.state.favoriteBooks),a=t.indexOf(e);t.splice(a,1),o.setState({favoriteBooks:[]})},o.removeAllCart=function(e){var t=Object(l.a)(o.state.cartBooks),a=t.indexOf(e);t.splice(a,1),o.setState({cartBooks:[]})},o.state={books:[],favoriteBooks:[],cartBooks:[]},o}return Object(v.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;O()({url:"https://cors-anywhere.herokuapp.com/https://api.itbook.store/1.0/new",method:"get"}).then((function(t){console.log(t),e.setState({books:t.data.books})})).catch((function(e){}))}},{key:"render",value:function(){var e=this;return n.a.createElement(E.a,null,n.a.createElement("nav",null,n.a.createElement(E.b,{className:"pressed",to:"/"},"Home")," | ",n.a.createElement(E.b,{to:"/books"},"Books")," | ",n.a.createElement(E.b,{to:"/favorite"},"Favorite")," | ",n.a.createElement(E.b,{to:"/cart"},"Cart")),n.a.createElement("div",{class:"center-block"},n.a.createElement(B.c,null,n.a.createElement(B.a,{exact:!0,path:"/",component:k}),n.a.createElement(B.a,{path:"/favorite",component:function(){return n.a.createElement(d,{removeAllFave:e.removeAllFave,removeBookFave:e.removeBookFave,favoriteBooks:e.state.favoriteBooks})}}),n.a.createElement(B.a,{path:"/cart",component:function(){return n.a.createElement(b,{removeAllCart:e.removeAllCart,removeBookCart:e.removeBookCart,cartBooks:e.state.cartBooks})}}),n.a.createElement(B.a,{path:"/books",component:function(){return n.a.createElement(p,{books:e.state.books,addBookToFavorite:e.addBookToFavorite,addBookToCart:e.addBookToCart})}}),n.a.createElement(B.a,{component:h}))))}}]),t}(a.Component);c.a.render(n.a.createElement(j,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.0b34b2f7.chunk.js.map