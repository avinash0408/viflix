(this.webpackJsonpviflix=this.webpackJsonpviflix||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},61:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),i=c.n(a),o=c(17),r=c.n(o),s=(c(28),c(4)),l=(c(29),c(5)),u=c.n(l),d=c(6),h=c(18),v=c(21),f=c.n(v).a.create({baseURL:"https://api.themoviedb.org/3"}),j=(c(61),c(22)),b=c.n(j);var p=function(e){var t=Object(a.useState)([]),c=Object(s.a)(t,2),i=c[0],o=c[1],r=Object(a.useState)(""),l=Object(s.a)(r,2),v=l[0],j=l[1];return Object(a.useEffect)((function(){function t(){return(t=Object(d.a)(u.a.mark((function t(){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get(e.fetchUrl);case 2:return c=t.sent,o(c.data.results),t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.fetchUrl]),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("h2",{children:e.title}),Object(n.jsx)("div",{className:"row__posters",children:i.map((function(t){return Object(n.jsx)("img",{onClick:function(){return function(e){v?j(""):(console.log((null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.original_name)),b()((null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.original_name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);j(t.get("v"))})).catch((function(e){return console.log(e)})))}(t)},className:"row__poster ".concat(e.isLarge&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(e.isLarge?t.poster_path:t.backdrop_path),alt:t.name},t.id)}))}),v&&Object(n.jsx)(h.a,{videoId:v,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})},g="f08d0b962be8c5b6f23f93a5531ccc49",m={fetchTrending:"/trending/all/week?api_key=".concat(g,"&language=en-US"),fetchNetflix0riginals:"/discover/tv?api_key=".concat(g,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(g,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(g,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(g,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(g,"&With_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(g,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(g,"&with_genres=99"),fetchSearch:"/search/multi?api_key=".concat(g,"&query=")};c(64);var _=function(){var e,t,c=Object(a.useState)([]),i=Object(s.a)(c,2),o=i[0],r=i[1];return Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(m.fetchTopRated);case 2:return t=e.sent,r(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[m.fetchTopRated]),Object(n.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===o||void 0===o?void 0:o.backdrop_path,'")'),backgroundPosition:"center center"},children:[Object(n.jsxs)("div",{className:"banner__content",children:[Object(n.jsx)("h1",{className:"banner__title",children:(null===o||void 0===o?void 0:o.title)||(null===o||void 0===o?void 0:o.name)||(null===o||void 0===o?void 0:o.original_name)}),Object(n.jsx)("div",{className:"banner__buttons"}),Object(n.jsx)("h1",{className:"banner__description",children:(e=null===o||void 0===o?void 0:o.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(n.jsx)("div",{className:"banner__fadeBottom"})]})},O=(c(65),function(e){var t=e.data,c=Object(a.useState)(!1),o=Object(s.a)(c,2),r=o[0],l=o[1],u=Object(a.useState)([]),d=Object(s.a)(u,2),h=(d[0],d[1],i.a.useState("")),v=Object(s.a)(h,2),f=v[0],j=v[1];return Object(a.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?l(!0):l(!1)})),function(){window.removeEventListener("scroll",null)}}),[]),Object(n.jsxs)("div",{className:"nav ".concat(r&&"nav__black"),children:[Object(n.jsx)("img",{className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png",alt:"Netflix-logo"}),Object(n.jsx)("input",{type:"search",className:"search",id:"search_mv",value:f,onChange:function(e){j(e.target.value),t(e.target.value)},placeholder:"Search here.."}),Object(n.jsx)("img",{className:"nav__avatar",src:"https://t4.ftcdn.net/jpg/03/23/80/43/240_F_323804352_GEjabYYebyrfHyMLtfPPrZeh0wYsZQgf.jpg",alt:"Netflix-logo"})]})});var x=function(){var e=i.a.useState(null),t=Object(s.a)(e,2),c=t[0],a=t[1],o=function(e){a(e)};return c?Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(O,{data:o}),Object(n.jsx)(_,{}),Object(n.jsx)(p,{title:"Results",fetchUrl:"".concat(m.fetchSearch).concat(c),isLarge:!0})]}):Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(O,{data:o}),Object(n.jsx)(_,{}),Object(n.jsx)(p,{title:"Originals",fetchUrl:m.fetchNetflix0riginals,isLarge:!0}),Object(n.jsx)(p,{title:"Trending Now",fetchUrl:m.fetchTrending}),Object(n.jsx)(p,{title:"Top Rated",fetchUrl:m.fetchTopRated}),Object(n.jsx)(p,{title:"Action Movies",fetchUrl:m.fetchActionMovies}),Object(n.jsx)(p,{title:"Comedy Movies",fetchUrl:m.fetchComedyMovies}),Object(n.jsx)(p,{title:"Horror Movies",fetchUrl:m.fetchHorrorMovies}),Object(n.jsx)(p,{title:"Romantic Movies",fetchUrl:m.fetchRomanceMovies}),Object(n.jsx)(p,{title:"Documentaries",fetchUrl:m.fetchDocumentaries})]})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),i(e),o(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),w()}},[[66,1,2]]]);
//# sourceMappingURL=main.e506cc0a.chunk.js.map