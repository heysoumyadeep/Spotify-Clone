(this["webpackJsonpSpotify-Clone"]=this["webpackJsonpSpotify-Clone"]||[]).push([[0],{186:function(e,t,s){},187:function(e,t,s){},188:function(e,t,s){},190:function(e,t,s){},191:function(e,t,s){},192:function(e,t,s){},198:function(e,t,s){},199:function(e,t,s){},200:function(e,t,s){},201:function(e,t,s){},497:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(17),i=s.n(n),r=(s(186),s(30)),o=(s(187),s(188),"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("b7bd3ab00a094ceaac4503b6e8f3fae4","&redirect_uri=").concat("https://heysoumyadeep.github.io/Spotify-Clone/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("&20"),"&response_type=token&show_dialog=true")),l=s(2);var j=function(){return Object(l.jsxs)("div",{className:"login",children:[Object(l.jsx)("img",{src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:"",className:"logo"}),Object(l.jsx)("a",{href:o,children:"Login with Spotify"}),Object(l.jsxs)("div",{className:"dev_info",children:[Object(l.jsx)("p",{children:"Made by Soumyadeep Pradhan"}),Object(l.jsx)("a",{href:"https://github.com/heysoumyadeep",rel:"noreferrer",target:"_blank",children:Object(l.jsx)("img",{src:"https://img.icons8.com/color/48/000000/github--v1.png",alt:"",className:"githubProfLogo"})})]})]})},d=s(152),b=s.n(d);s(190),s(191),s(192);var u=function(e){var t=e.items,s=e.Icon;return Object(l.jsxs)("div",{className:"sidebarOption",children:[s&&Object(l.jsx)(s,{className:"sidebarOption_icon"}),s?Object(l.jsx)("h4",{children:t}):Object(l.jsx)("p",{children:t})]})},O=s(153),m=s.n(O),h=s(159),x=s.n(h),f=s(160),p=s.n(f),v=Object(c.createContext)(),_=function(e){var t=e.initialState,s=e.reducer,a=e.children;return Object(l.jsx)(v.Provider,{value:Object(c.useReducer)(s,t),children:a})},y=function(){return Object(c.useContext)(v)};var g=function(){var e,t=y(),s=Object(r.a)(t,2),c=s[0].playlists;return s[1],Object(l.jsxs)("div",{className:"sidebar",children:[Object(l.jsx)("img",{className:"sidebar_logo",src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),Object(l.jsx)(u,{items:"Home",Icon:m.a}),Object(l.jsx)(u,{items:"Search",Icon:x.a}),Object(l.jsx)(u,{items:"Your Library",Icon:p.a}),Object(l.jsx)("br",{}),Object(l.jsx)("strong",{className:"sidebar_title",children:"PLAYLISTS"}),Object(l.jsx)("hr",{}),null===c||void 0===c||null===(e=c.items)||void 0===e?void 0:e.map((function(e){return Object(l.jsx)(u,{items:e.name})})),Object(l.jsx)(u,{items:"Indian"}),Object(l.jsx)(u,{items:"Rock"}),Object(l.jsx)(u,{items:"Classic"})]})},N=(s(198),s(199),s(163)),S=s.n(N),T=s(162),w=s.n(T),E=s(161),k=s.n(E),I=s(513);var L=function(){var e,t=y(),s=Object(r.a)(t,2),c=s[0].user;return s[1],Object(l.jsxs)("div",{className:"header",children:[Object(l.jsxs)("div",{className:"header_arrowContainer",children:[Object(l.jsx)(k.a,{className:"backArrow"}),Object(l.jsx)(w.a,{className:"forwardArrow"})]}),Object(l.jsxs)("div",{className:"header_right",children:[Object(l.jsx)(I.a,{src:null===c||void 0===c||null===(e=c.images[0])||void 0===e?void 0:e.url,alt:null===c||void 0===c?void 0:c.display_name}),Object(l.jsx)("h4",{children:null===c||void 0===c?void 0:c.display_name}),Object(l.jsx)(S.a,{})]})]})},C=s(164),P=s.n(C),R=s(165),A=s.n(R),Y=s(166),F=s.n(Y);s(200);var M=function(e){var t=e.track,s=Math.floor(t.duration_ms/6e4),c=(t.duration_ms%6e4/1e3).toFixed(0),a=s+":"+(c<10?"0":"")+c;return Object(l.jsxs)("div",{className:"songRow",children:[Object(l.jsx)("img",{className:"songRow_album",src:t.album.images[0].url,alt:""}),Object(l.jsxs)("div",{className:"songRow_info",children:[Object(l.jsx)("h1",{children:t.name}),Object(l.jsxs)("p",{children:[t.artists.map((function(e){return e.name})).join(", ")," -"," ",t.album.name]}),Object(l.jsx)("p",{className:"songRow_albumName",children:t.album.name}),Object(l.jsx)("p",{className:"songRow_albumRelease",children:t.album.release_date}),Object(l.jsx)("span",{className:"songRow_infoDuration",children:a})]})]})};var D=function(e){var t=e.spotify,s=y(),c=Object(r.a)(s,2),a=c[0].discover_weekly;return c[1],Object(l.jsxs)("div",{className:"body",children:[Object(l.jsx)(L,{spotify:t}),Object(l.jsxs)("div",{className:"body_info",children:[Object(l.jsx)("img",{src:null===a||void 0===a?void 0:a.images[0].url,alt:"",className:""}),Object(l.jsxs)("div",{className:"body_infoText",children:[Object(l.jsx)("strong",{children:"PLAYLIST"}),Object(l.jsx)("h2",{children:"Discover Weekly"}),Object(l.jsx)("p",{children:null===a||void 0===a?void 0:a.description})]})]}),Object(l.jsxs)("div",{className:"body_songs",children:[Object(l.jsxs)("div",{className:"body_icons",children:[Object(l.jsx)(P.a,{className:"body_shuffle"}),Object(l.jsx)(A.a,{fontSize:"large"}),Object(l.jsx)(F.a,{})]}),Object(l.jsxs)("ul",{className:"body_songsHeader",children:[Object(l.jsx)("li",{className:"body_songsNumber",children:Object(l.jsx)("p",{children:"#"})}),Object(l.jsx)("li",{className:"body_songsTitle",children:Object(l.jsx)("p",{children:"TITLE"})}),Object(l.jsx)("li",{className:"body_songsAlbum",children:Object(l.jsx)("p",{children:"ALBUM"})})]}),Object(l.jsx)("div",{className:"body_songNumber",children:null===a||void 0===a?void 0:a.tracks.items.map((function(e){return Object(l.jsx)(M,{track:e.track,duration:e.duration})}))})]})]})},U=(s(201),s(170)),B=s.n(U),K=s(169),z=s.n(K),V=s(171),W=s.n(V),H=s(168),J=s.n(H),Q=s(172),G=s.n(Q),X=s(175),Z=s.n(X),q=s(173),$=s.n(q),ee=s(512),te=s(511),se=s(167),ce=s.n(se),ae=s(174),ne=s.n(ae);var ie=function(){return Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsxs)("div",{className:"footer_left",children:[Object(l.jsx)("img",{className:"footer_albumLogo",src:"https://i.pinimg.com/originals/97/39/fe/9739fe3d4134a837230d7c1c92a30814.jpg",alt:""}),Object(l.jsxs)("div",{className:"footer_songInfo",children:[Object(l.jsx)("a",{href:"",children:Object(l.jsx)("h5",{children:"Rockstar"})}),Object(l.jsx)("a",{href:"",children:Object(l.jsx)("p",{children:"Post Malone"})})]}),Object(l.jsx)(ce.a,{className:"footer_heartCurrent"})]}),Object(l.jsxs)("div",{className:"footer_center",children:[Object(l.jsx)(J.a,{className:"footer_green"}),Object(l.jsx)(z.a,{className:"footer_icon"}),Object(l.jsx)(B.a,{fontSize:"large",className:"footer_icon footer_play"}),Object(l.jsx)(W.a,{className:"footer_icon"}),Object(l.jsx)(G.a,{className:"footer_green"})]}),Object(l.jsxs)("div",{className:"footer_durationContainer",children:[Object(l.jsx)("span",{children:"02:14"}),Object(l.jsx)(ee.a,{className:"footer_durationBar"}),Object(l.jsx)("span",{children:"4:36"})]}),Object(l.jsx)("div",{className:"footer_right",children:Object(l.jsx)("div",{className:"footer_rightContainer",children:Object(l.jsxs)(te.a,{container:!0,spacing:2,children:[Object(l.jsx)(te.a,{item:!0,children:Object(l.jsx)($.a,{className:"footer_playlistIcon"})}),Object(l.jsx)(te.a,{item:!0,children:Object(l.jsx)(ne.a,{className:"footer_deviceIcon"})}),Object(l.jsx)(te.a,{item:!0,children:Object(l.jsx)(Z.a,{className:"footer_volumeIcon"})}),Object(l.jsx)(te.a,{item:!0,xs:!0,children:Object(l.jsx)(ee.a,{className:"footer_volumeSlider"})})]})})})]})};var re=function(e){var t=e.spotify;return Object(l.jsxs)("div",{className:"player",children:[Object(l.jsxs)("div",{className:"player_body",children:[Object(l.jsx)(g,{}),Object(l.jsx)(D,{spotify:t})]}),Object(l.jsx)(ie,{spotify:t})]})},oe=new b.a;var le=function(){var e=Object(c.useState)(null),t=Object(r.a)(e,2),s=t[0],a=t[1],n=y(),i=Object(r.a)(n,2),o=(i[0].user,i[1]);return Object(c.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var s=t.split("=");return e[s[0]]=decodeURIComponent(s[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(o({type:"SET_TOKEN",token:t}),oe.setAccessToken(t),a(t),oe.getMe().then((function(e){o({type:"SET_USER",user:e})})),oe.getUserPlaylists().then((function(e){o({type:"SET_PLAYLISTS",playlists:e})})),oe.getPlaylist("37i9dQZEVXbnrESiQFPwvN").then((function(e){o({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})})))}),[]),Object(l.jsx)("div",{className:"App",children:s?Object(l.jsx)(re,{spotify:oe}):Object(l.jsx)(j,{})})},je=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,515)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))},de=s(10),be=(s(202),function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(de.a)(Object(de.a)({},e),{},{user:t.user});case"SET_PLAYING":return Object(de.a)(Object(de.a)({},e),{},{playing:t.playing});case"SET_ITEM":return Object(de.a)(Object(de.a)({},e),{},{item:t.item});case"SET_DISCOVER_WEEKLY":return Object(de.a)(Object(de.a)({},e),{},{discover_weekly:t.discover_weekly});case"SET_TOP_ARTISTS":return Object(de.a)(Object(de.a)({},e),{},{top_artists:t.top_artists});case"SET_TOKEN":return Object(de.a)(Object(de.a)({},e),{},{token:t.token});case"SET_SPOTIFY":return Object(de.a)(Object(de.a)({},e),{},{spotify:t.spotify});case"SET_PLAYLISTS":return Object(de.a)(Object(de.a)({},e),{},{playlists:t.playlists});default:return e}});i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(_,{initialState:{user:null,playlists:[],spotify:null,discover_weekly:null,top_artists:null,playing:!1,item:null},reducer:be,children:Object(l.jsx)(le,{})})}),document.getElementById("root")),je()}},[[497,1,2]]]);
//# sourceMappingURL=main.b4d5e284.chunk.js.map