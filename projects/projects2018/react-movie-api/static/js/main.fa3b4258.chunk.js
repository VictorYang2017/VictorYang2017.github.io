(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),i=a.n(r),c=(a(13),a(1)),s=a(2),l=a(4),u=a(3),p=a(5),m=(a(15),a(17),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={pageNumber:" "},a.retrieveValue=function(e){var t=e.target.value.trim();"0"===t||""===t||t>a.props.totalPages||t.match(/\s/)?(a.props.onChange("1"),a.setState({pageNumber:"1"})):(a.props.onChange(t),a.setState({pageNumber:t}))},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.pageNumber>this.props.totalPages||" "===this.state.pageNumber||this.state.pageNumber.match(/[a-z]/i)?"1":this.state.pageNumber;return o.a.createElement("div",{className:"PageInput"},o.a.createElement("input",{type:"text",placeholder:"Enter page number",onChange:this.retrieveValue}),o.a.createElement("span",null,"Page ",e," of ",this.props.totalPages))}}]),t}(o.a.Component)),h=(a(19),function(e){var t=e.movieTitles;return o.a.createElement("div",{className:"Results"},o.a.createElement("ul",null,t.map(function(e,t){return o.a.createElement("li",{key:t},e)})))}),g=(a(21),function(){return o.a.createElement("div",{className:"Heading"},o.a.createElement("h1",null,"Upcoming movies!"))}),v={movieDatabase:function(e){var t="https://api.themoviedb.org/3/movie/".concat("popular","?api_key=").concat("ca201dff08c62bcf6679ce793b09f589","&language=en-US&page=").concat(e);return fetch(t).then(function(e){return e.json()}).then(function(e){var t=e.results,a=e.total_pages;return{theMovieResults:t.map(function(e){return e.title}),theMovieTotalPage:a}}).catch(function(e){return console.log(e)})}},f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={page:"1",movieTitles:[],totalPages:"0"},a.componentDidMount=function(e){v.movieDatabase(e).then(function(e){a.setState({movieTitles:e.theMovieResults,totalPages:e.theMovieTotalPage})})},a.handleChange=function(e){a.setState({page:e}),e?a.componentDidMount(e):a.componentDidMount(a.state.page)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(g,null),o.a.createElement(h,{movieTitles:this.state.movieTitles}),o.a.createElement(m,{totalPages:this.state.totalPages,onChange:this.handleChange}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,2,1]]]);