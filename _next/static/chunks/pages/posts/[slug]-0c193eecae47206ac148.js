(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{900:function(e,t,n){"use strict";var r=n(2553),i=n(2012),a=n(9807),o=n(7690),l=n(9828);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var i=l(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return o(this,n)}}var c=n(2426);t.__esModule=!0,t.default=void 0;var u=c(n(7294)),d=c(n(7947)),f={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function p(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var g=function(e){a(n,e);var t=s(n);function n(){return r(this,n),t.apply(this,arguments)}return i(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||f[e]||"An unexpected error has occurred";return u.default.createElement("div",{style:h.error},u.default.createElement(d.default,null,u.default.createElement("title",null,e,": ",t)),u.default.createElement("div",null,u.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?u.default.createElement("h1",{style:h.h1},e):null,u.default.createElement("div",{style:h.desc},u.default.createElement("h2",{style:h.h2},t,"."))))}}]),n}(u.default.Component);t.default=g,g.displayName="ErrorPage",g.getInitialProps=p,g.origGetInitialProps=p;var h={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},4001:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c}});var r=n(5893),i=n(2918),a=n(9008),o=n(1163),l=(n(7294),n(419)),s=n(709),c=!0;t.default=function(e){var t=e.post,n=e.preview,c=(0,o.useRouter)();return c.isFallback||null!==t&&void 0!==t&&t.slug?(0,r.jsx)(s.Ar,{preview:n,children:(0,r.jsxs)(s.W2,{children:[(0,r.jsx)(s.h4,{}),c.isFallback?(0,r.jsx)(s.DZ,{children:"Loading\u2026"}):(0,r.jsxs)(l.xu,{as:"article",mb:4,children:[(0,r.jsxs)(a.default,{children:[(0,r.jsxs)("title",{children:[t.title," | Pager Universe"]}),(0,r.jsx)("meta",{content:t.ogImage.url,property:"og:image"}),(0,r.jsx)("meta",{content:"".concat(t.title," | Pager Universe"),property:"og:title"}),(0,r.jsx)("meta",{content:t.excerpt,property:"og:description"}),(0,r.jsx)("meta",{content:t.excerpt,name:"description"}),(0,r.jsx)("meta",{content:t.tags.join(", "),name:"keywords"})]}),(0,r.jsx)(s.mV,{author:t.author,coverImage:t.coverImage,date:t.date,title:t.title}),(0,r.jsx)(s.yO,{content:t.content,tags:t.tags})]})]})}):(0,r.jsx)(i.default,{statusCode:404})}},9035:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n(4001)}])},2918:function(e,t,n){e.exports=n(900)},1163:function(e,t,n){e.exports=n(2441)}},function(e){e.O(0,[774,351,338,72,709],(function(){return t=9035,e(e.s=t);var t}));var t=e.O();_N_E=t}]);