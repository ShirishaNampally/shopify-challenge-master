(this.webpackJsonpshoppies=this.webpackJsonpshoppies||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/error.6315845c.svg"},37:function(e,t,a){e.exports=a.p+"static/media/back.c2e4f1c0.svg"},39:function(e,t,a){e.exports=a.p+"static/media/plus.1c7775bf.svg"},40:function(e,t,a){e.exports=a.p+"static/media/minus.f448ccd7.svg"},41:function(e,t,a){e.exports=a.p+"static/media/search.35e7ec75.svg"},42:function(e,t,a){e.exports=a.p+"static/media/cross.d79a8310.svg"},44:function(e,t,a){e.exports=a(90)},89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),i=a.n(r),c=a(6),s=a(7),l=a(9),m=a(8),u=a(4),p=a(13),d=a.n(p),E=a(23),v=a(12),f=a(24),b=a.n(f),h=a(10),O=a(43),N=a(1),g={FETCH_MOVIES_FAILED:"LOADING_MOVIES_FAILED",FETCH_MOVIES_SUCCESS:"LOADING_MOVIES_SUCCESS",FETCH_MOVIES_PENDING:"FETCH_MOVIES_PENDING",GET_MOVIE_DETAILS_PENDING:"GET_MOVIE_DETAILS_PENDING",GET_MOVIE_DETAILS_SUCCESS:"GET_MOVIE_DETAILS_SUCCESS",GET_MOVIE_DETAILS_FAILED:"GET_MOVIE_DETAILS_FAILED",NOMINATE_MOVIE:"NOMINATE_MOVIE",REMOVE_NOMINATED_MOVIE:"REMOVE_NOMINATED_MOVIE"},w=a(36),x=Object(h.d)(Object(h.c)({fetchMovies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!1,data:[],err:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.FETCH_MOVIES_SUCCESS:return Object(N.a)(Object(N.a)({},e),{},{data:t.payload,loading:!1,err:null});case g.FETCH_MOVIES_PENDING:return Object(N.a)(Object(N.a)({},e),{},{loading:!0,err:null});case g.FETCH_MOVIES_FAILED:return Object(N.a)(Object(N.a)({},e),{},{err:t.err,loading:!1});default:return e}},movieDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!1,data:{},err:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.GET_MOVIE_DETAILS_SUCCESS:return Object(N.a)(Object(N.a)({},e),{},{data:t.payload,loading:!1,err:null});case g.GET_MOVIE_DETAILS_PENDING:return Object(N.a)(Object(N.a)({},e),{},{loading:!0,err:null});case g.GET_MOVIE_DETAILS_FAILED:return Object(N.a)(Object(N.a)({},e),{},{err:t.err,loading:!1});default:return e}},nominations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{movies:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.NOMINATE_MOVIE:return Object(N.a)(Object(N.a)({},e),{},{movies:[].concat(Object(O.a)(e.movies),[t.payload])});case g.REMOVE_NOMINATED_MOVIE:return Object(N.a)(Object(N.a)({},e),{},{movies:e.movies.filter((function(e){return e!==t.payload}))});default:return e}}}),{},Object(h.a)(w.a)),I=a(11),y=a(17),_=a.n(y),D=function(e){var t=window.location.protocol+"//"+window.location.host+window.location.pathname+e;window.history.pushState({path:t},"",t)},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.search,a=_.a.parse(t);return a[e]&&a[e].split(",")||[]},S=function(e){return function(t){5===x.getState().nominations.movies.length?v.c.warn("You have nominated 05 movies",{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0}):(!function(e,t){var a=M(e);a.push(t);var n=_.a.stringify(Object(I.a)({},e,a.join(",")));D("?".concat(n))}("movies",e),t({type:g.NOMINATE_MOVIE,payload:e}))}},j=function(e){return function(e,t){var a=M(e),n=_.a.stringify(Object(I.a)({},e,a.filter((function(e){return e!==t})).join(",")));D("?".concat(n))}("movies",e),{type:g.REMOVE_NOMINATED_MOVIE,payload:e}},C=a(37),k=a.n(C),T=a(15),A=a.n(T),V=a(16),G=a.n(V),L=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).showContent=function(){return e.props.movieDetails.loading?o.a.createElement("div",{className:"flex justify-center mt-32"},o.a.createElement(G.a,{size:30,color:"#fff",loading:e.props.movieDetails.loading})):e.props.movieDetails.err?o.a.createElement("div",{className:"flex flex-col justify-center mt-32"},o.a.createElement("img",{src:A.a,className:"h-10",alt:"Error"}),o.a.createElement("p",{className:"text-center mt-3"},"Error!")):o.a.createElement("div",{className:"mx-auto w-3/4"},o.a.createElement("img",{src:k.a,alt:"Go back",className:"h-5 cursor-pointer my-5",onClick:e.props.goBack}),o.a.createElement("img",{src:"https://img.omdbapi.com/?apikey=e1592641&i=".concat(e.props.id),alt:"movie poster",className:"img object-cover w-56 h-64 rounded"}),o.a.createElement("h3",{className:"font-bold text-3xl py-5 text-white"},e.props.movieDetails.data.Title),o.a.createElement("table",{className:"table-auto"},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{className:"block uppercase tracking-wide  text-xs font-bold w-1/4 mr-4"},"Plot"),o.a.createElement("td",{className:"pb-3"},e.props.movieDetails.data.Plot)),o.a.createElement("tr",null,o.a.createElement("td",{className:"block uppercase tracking-wide  text-xs font-bold w-1/4 mr-4"},"Actors"),o.a.createElement("td",{className:"pb-3"},e.props.movieDetails.data.Actors)),o.a.createElement("tr",null,o.a.createElement("td",{className:"block uppercase tracking-wide  text-xs font-bold w-1/4 mr-4"},"Awards"),o.a.createElement("td",{className:"pb-3"},e.props.movieDetails.data.Awards)),o.a.createElement("tr",null,o.a.createElement("td",{className:"block uppercase tracking-wide  text-xs font-bold w-1/4 mr-4"},"Director"),o.a.createElement("td",{className:"pb-3"},e.props.movieDetails.data.Director)),o.a.createElement("tr",null,o.a.createElement("td",{className:"block uppercase tracking-wide  text-xs font-bold w-1/4 mr-4"},"Genre"),o.a.createElement("td",{className:"pb-3"},e.props.movieDetails.data.Genre)),o.a.createElement("tr",null,o.a.createElement("td",{className:"block uppercase tracking-wide  text-xs font-bold w-1/4 mr-4"},"Released"),o.a.createElement("td",{className:"pb-3"},e.props.movieDetails.data.Released)),o.a.createElement("tr",null,o.a.createElement("td",{className:"block uppercase tracking-wide  text-xs font-bold w-1/4 mr-4"},"Rating"),o.a.createElement("td",{className:"pb-3"},e.props.movieDetails.data.imdbRating)))),e.props.nominations.includes(e.props.id)?o.a.createElement("button",{className:"text-white mt-5 font-bold py-2 px-4 border-none rounded outline-none focus:outline-none focus:border-none opacity-50 cursor-not-allowed",style:{backgroundColor:"#262630"}},"Already nominated"):o.a.createElement("button",{className:"text-white mt-5 font-bold py-2 px-4 border-none rounded outline-none focus:outline-none focus:border-none",style:{backgroundColor:"#0687ff"},onClick:function(){e.props.nominateMovie(e.props.movieDetails.data.imdbID)}},"Nominate"))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.getMovieDetails(this.props.id)}},{key:"render",value:function(){return o.a.createElement("div",{className:"mt-5",style:{flex:2}},this.showContent())}}]),a}(o.a.Component),F=Object(u.b)((function(e){return{movieDetails:e.movieDetails,nominations:e.nominations.movies}}),(function(e){return{getMovieDetails:function(t){return e(function(e){return function(){var t=Object(E.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:g.GET_MOVIE_DETAILS_PENDING}),t.prev=1,t.next=4,b.a.get("https://www.omdbapi.com/?i=".concat(e,"&type=movie&r=json&plot=short&apikey=e1592641"));case 4:n=t.sent,a({type:g.GET_MOVIE_DETAILS_SUCCESS,payload:n.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:g.FETCH_MOVIES_FAILED,err:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(t))},nominateMovie:function(t){return e(S(t))}}}))(L),H=a(39),P=a.n(H),R=a(40),U=a.n(R),B=a(41),z=a.n(B);function J(e){var t=e.data,a=e.showDetails,n=e.nominateMovie,r=e.alreadyNominated,i=e.removeNominatedMovie;return o.a.createElement("div",{className:"mb-1 flex justify-between items-center rounded py-3 px-5 border-2 movie-text"},o.a.createElement("div",null,o.a.createElement("h2",{className:"text-xl cursor-pointer",onClick:a},t.Title,o.a.createElement("span",{className:"text-xs ml-2",style:{color:"#b5bbc9"}},"(",t.Year,")"))),r?o.a.createElement("img",{src:U.a,alt:"Delete movie",className:"h-4 cursor-pointer",onClick:function(){return i(t.imdbID)}}):o.a.createElement("img",{src:P.a,alt:"Add movie",className:"h-4 cursor-pointer",onClick:function(){return n(t.imdbID)}}))}var W=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).showContent=function(){return n.props.movies.loading?o.a.createElement("div",{className:"flex justify-center mt-10"},o.a.createElement(G.a,{size:30,color:"#fff",loading:n.props.movies.loading})):n.props.movies.err?o.a.createElement("div",{className:"flex flex-col justify-center mt-10"},o.a.createElement("img",{src:A.a,className:"h-10",alt:"Error"}),o.a.createElement("p",{className:"text-center mt-3"},"Error!")):o.a.createElement("div",{className:"mt-5 mx-auto"},n.props.movies.data.map((function(e){return o.a.createElement(J,{key:e.imdbID,data:e,showDetails:function(){return n.setState({showDetails:!0,id:e.imdbID})},alreadyNominated:n.props.nominations.includes(e.imdbID),removeNominatedMovie:n.props.removeNominatedMovie,nominateMovie:function(e){return n.props.nominateMovie(e)}})})))},n.state={searchTerm:"",showDetails:!1,id:null},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return this.state.showDetails?o.a.createElement(F,{id:this.state.id,goBack:function(){return e.setState({showDetails:!1,id:null})}}):o.a.createElement("div",{style:{flex:2}},o.a.createElement("div",{className:"md:w-1/2 sm:w-3/4 mt-5 mx-auto"},o.a.createElement("h1",{className:"uppercase tracking-wide block text-3xl font-semibold"},"S h o p p i e  s"),o.a.createElement("div",{className:"w-full mt-10 rounded py-3 px-5 flex items-center",style:{backgroundColor:"#262630"}},o.a.createElement("img",{src:z.a,className:"h-6",alt:"Search"}),o.a.createElement("input",{autoFocus:!0,className:"placeholder border-none bg-transparent ml-5 flex-1 text-2xl text-white outline-none focus:outline-none focus:border-none",value:this.state.searchTerm,onChange:function(t){return e.setState({searchTerm:t.target.value})},placeholder:"Search Movies",onKeyDown:function(t){13===t.keyCode&&e.props.fetchMovies(e.state.searchTerm)}})),this.showContent()))}}]),a}(o.a.Component),Y=Object(u.b)((function(e){return{movies:e.fetchMovies,nominations:e.nominations.movies}}),(function(e){return{fetchMovies:function(t){return e(function(e){return function(){var t=Object(E.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:g.FETCH_MOVIES_PENDING}),t.prev=1,t.next=4,b.a.get("https://www.omdbapi.com/?s=".concat(e,"&type=movie&r=json&apikey=e1592641"));case 4:if(!(n=t.sent).data.Error){t.next=7;break}throw new Error(n.data.Error);case 7:a({type:g.FETCH_MOVIES_SUCCESS,payload:n.data.Search}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),a({type:g.FETCH_MOVIES_FAILED,err:t.t0});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))},nominateMovie:function(t){return e(S(t))},removeNominatedMovie:function(t){return e(j(t))}}}))(W),K=a(42),$=a.n(K),q=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return this.props.placeholder?o.a.createElement("div",{className:"w-40 h-48 border-dashed border-2 m-2 flex items-center justify-center rounded",style:{borderColor:"#262630"}},o.a.createElement("p",{className:"text-2xl",style:{color:"#262630"}},this.props.num)):o.a.createElement("div",{className:"m-2",style:{position:"relative"}},o.a.createElement("img",{src:"https://img.omdbapi.com/?apikey=e1592641&i=".concat(this.props.id),className:"object-cover w-40 h-48 rounded",alt:"movie poster"}),o.a.createElement("img",{src:$.a,className:"h-5 cursor-pointer",alt:"close button",onClick:function(){return e.props.removeNominatedMovie(e.props.id)},style:{position:"absolute",top:-7,right:-7}}))}}]),a}(o.a.Component),Q=Object(u.b)(null,(function(e){return{removeNominatedMovie:function(t){return e(j(t))}}}))(q),X=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).copyURLtoClipboard=function(){navigator.clipboard.writeText(window.location.href),n.setState({copied:!0}),setTimeout((function(){n.setState({copied:!1})}),2e3)},n.state={copied:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=M("movies");D("?"),t.map((function(t){return e.props.nominateMovie(t)}))}},{key:"render",value:function(){for(var e=[],t=0;t<this.props.movies.length;t++)e.push(o.a.createElement(Q,{id:this.props.movies[t]}));for(;t<5;t++)e.push(o.a.createElement(Q,{placeholder:!0,num:t+1}));return o.a.createElement("div",{className:"flex-1 flex flex-col p-5"},o.a.createElement("button",{style:{backgroundColor:"#000"},className:"text-white font-bold py-2 px-4 border-none rounded outline-none focus:outline-none focus:border-none self-end",onClick:this.copyURLtoClipboard},this.state.copied?"Copied!":"Share"),o.a.createElement("h1",{className:"block text-2xl font-italicbold"},"Nominations"),o.a.createElement("div",{className:"flex flex-wrap mt-5"},e))}}]),a}(o.a.Component),Z=Object(u.b)((function(e){return{movies:e.nominations.movies}}),(function(e){return{nominateMovie:function(t){return e(S(t))}}}))(X);a(88),a(89);var ee=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(v.b,{position:"top-center",autoClose:3e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,transition:v.a,rtl:!1,pauseOnFocusLoss:!1,draggable:!1,pauseOnHover:!1}),o.a.createElement(Y,null),o.a.createElement(Z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u.a,{store:x},o.a.createElement(ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.009054cb.chunk.js.map