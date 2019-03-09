(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{149:function(d,u,e){"use strict";e.r(u),e.d(u,"graphql",function(){return L}),e.d(u,"StaticQueryContext",function(){return l}),e.d(u,"StaticQuery",function(){return M});var t=e(0),n=e.n(t),a=e(4),c=e.n(a),i=e(151),r=e.n(i);e.d(u,"Link",function(){return r.a}),e.d(u,"withPrefix",function(){return i.withPrefix}),e.d(u,"navigate",function(){return i.navigate}),e.d(u,"push",function(){return i.push}),e.d(u,"replace",function(){return i.replace}),e.d(u,"navigateTo",function(){return i.navigateTo});var o=e(153),s=e.n(o);e.d(u,"PageRenderer",function(){return s.a});var f=e(33);e.d(u,"parsePath",function(){return f.a});var l=n.a.createContext({}),M=function(d){return n.a.createElement(l.Consumer,null,function(u){return d.data||u[d.query]&&u[d.query].data?(d.render||d.children)(d.data?d.data.data:u[d.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function L(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}M.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},153:function(d,u,e){var t;d.exports=(t=e(158))&&t.default||t},154:function(d,u,e){"use strict";var t=e(167),n=e(0),a=e.n(n),c=e(4),i=e.n(c),r=e(152),o=e.n(r),s=e(149),f=function(d){var u=d.description,e=d.lang,n=d.meta,c=d.title;return a.a.createElement(s.StaticQuery,{query:l,render:function(d){var t=u||d.site.siteMetadata.description;return a.a.createElement(o.a,{htmlAttributes:{lang:e},defaultTitle:"OGI BLOG",title:c,titleTemplate:"%s | "+d.site.siteMetadata.title,meta:[{name:"description",content:t},{property:"og:title",content:c||"OGI BLOG"},{property:"og:description",content:t},{property:"og:image",content:d.site.siteMetadata.siteUrl+"/images/ogp.png"},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:d.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:t},{name:"google-site-verification",content:"YVyimowwJaAF-JS0VRAF1Ui5lFrPt1p46iWcbH1XbNI"}].concat(n)})},data:t})};f.defaultProps={lang:"ja",meta:[]},f.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,title:i.a.string.isRequired},u.a=f;var l="585967579"},155:function(d,u,e){"use strict";var t=e(7),n=e.n(t),a=(e(150),e(0)),c=e.n(a),i=e(148),r=e(174),o=e.n(r);function s(){var d=o()(["\n  /* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n  */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n    -webkit-tap-highlight-color:rgba(0,0,0,0);\n  }\n  html, body {\n    height: 100%;\n  }\n  body {\n    background: ",";\n    color: ",';\n    line-height: 1.6;\n    font-size: 100%;\n    font-weight: 400;\n    font-family: "Open Sans", Arial, -apple-system, BlinkMacSystemFont, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  a {\n    color: ',";\n    text-decoration: none;\n    transition: .2s;\n    :focus{\n      outline: none;\n    }\n  }\n  ol, ul, li {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote::before, blockquote::after,\n  q::before, q::after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  * {\n    box-sizing: border-box;\n  }\n  img {\n  \tmax-width: 100%;\n  }\n  button,\n  input {\n    font-family: inherit;\n    font-size: inherit;\n    background: none;\n    border: none;\n    outline: none;\n    appearance: none;\n    border-radius: 0;\n    resize: none;\n    &:focus {\n      outline: none;\n    }\n  }\n"]);return s=function(){return d},d}var f=Object(i.b)(s(),function(d){return d.theme.colors.background},function(d){return d.theme.colors.background},function(d){return d.theme.colors.highlight}),l={colors:{base:"#11b28",background:"#263951",blackLight:"#294263",yellow:"#ffd800",gray:"#93a1ad",silver:"#7e858c",whitesmoke:"#f1f4f7",highlight:"#20a8ea",red:"#f7615f",orange:"#ffb200"},sizes:{bioWidth:"290px",maxWidth:"1100px"},sideSpace:{small:"20px",large:"1.5em",contentSmall:"20px",contentLarge:"2.5em"},responsive:{small:"500px",medium:"768px",large:"950px"}},M=e(149),L=i.d.div.withConfig({displayName:"ContentWrapper__IndexContent",componentId:"xh4ad0-0"})(["max-width:",";margin:0 auto;padding:0 ",";@media screen and (max-width:","){max-width:760px;}@media screen and (max-width:","){padding:0 ",";}"],function(d){return d.theme.sizes.maxWidth},function(d){return d.theme.sideSpace.large},function(d){return d.theme.responsive.large},function(d){return d.theme.responsive.small},function(d){return d.theme.sideSpace.small}),g=function(d){var u=d.children;return c.a.createElement(L,null,u)},w=e(159),A=e.n(w),m=i.d.header.withConfig({displayName:"Header__HeaderTag",componentId:"sc-1l6ly3t-0"})(["width:100%;padding:16px 0;box-shadow:0 2px 4px rgba(0,0,0,.6);"]),y=i.d.div.withConfig({displayName:"Header__HeaderInner",componentId:"sc-1l6ly3t-1"})(["position:relative;h1,h3{width:100%;}.logo{display:block;width:165px;height:40px;@media screen and (max-width:","){margin:0 auto;}}.logo-link{display:block;}.message-link{position:absolute;right:0;top:7px;display:block;width:34px;&:hover{top:5px;}}"],function(d){return d.theme.responsive.small}),j=function(d){var u,e=d.title,t=d.location,n=c.a.createElement(M.Link,{to:"/",className:"logo-link"},c.a.createElement("img",{className:"logo",src:A.a,alt:e}));return u="/"===t.pathname?c.a.createElement("h1",null,n):c.a.createElement("h3",null,n),c.a.createElement(m,null,c.a.createElement(g,null,c.a.createElement(y,null,u)))},b=i.d.footer.withConfig({displayName:"Footer__FooterContent",componentId:"sc-1iykvdw-0"})(["padding:0.1em 0;"]),p=i.d.div.withConfig({displayName:"Footer__FooterInner",componentId:"sc-1iykvdw-1"})(["margin-top:3em;text-align:center;padding:1.5em;border-top:solid 1px ",";color:",";font-size:14px;a{color:",";text-decoration:underline;}"],function(d){return d.theme.colors.blackLight},function(d){return d.theme.colors.gray},function(d){return d.theme.colors.gray}),I=function(){return c.a.createElement(b,null,c.a.createElement(g,null,c.a.createElement(p,null,c.a.createElement("div",null,"© ",(new Date).getFullYear(),",",c.a.createElement("a",{href:"https://ogikota.jp"},"Kota Ogi")," All rights reserved."))))},N=e(160),C=e(161),x=e.n(C),h=e(162),D=e.n(h),E=e(163),S=e.n(E),z=e(164),T=e.n(z),v=(e(165),e(166)),O=e.n(v),Y=i.d.div.withConfig({displayName:"Bio__BioWrapper",componentId:"sc-1idlnhv-0"})(["position:sticky;top:2em;width:",";padding:1.5em;font-size:15.5px;background:",";border-radius:4px;box-shadow:0 2px 4px rgba(0,0,0,0.4);@media screen and (max-width:","){position:relative;margin:2em 0;width:100%;}@media screen and (max-width:","){padding:1.3em 1em;}"],function(d){return d.theme.sizes.bioWidth},function(d){return d.theme.colors.blackLight},function(d){return d.theme.responsive.large},function(d){return d.theme.responsive.small}),k=i.d.img.withConfig({displayName:"Bio__AvatarImage",componentId:"sc-1idlnhv-1"})(["display:block;width:70px;height:70px;border-radius:50%;"]),B=i.d.div.withConfig({displayName:"Bio__BioHeader",componentId:"sc-1idlnhv-2"})(["display:flex;align-items:center;"]),Q=i.d.div.withConfig({displayName:"Bio__BioName",componentId:"sc-1idlnhv-3"})(["margin-left:10px;a{font-weight:600;letter-spacing:1px;font-size:1.3em;color:#fff;}"]),Z=i.d.div.withConfig({displayName:"Bio__BioMain",componentId:"sc-1idlnhv-4"})(["margin-top:1em;"]),G=i.d.p.withConfig({displayName:"Bio__BioText",componentId:"sc-1idlnhv-5"})(["color:#fff;font-size:0.92em;"]),U=i.d.div.withConfig({displayName:"Bio__BioLinks",componentId:"sc-1idlnhv-6"})(["margin-top:1.5em;display:flex;color:#fff;text-align:center;max-width:244px;img{display:block;margin:0 auto;width:40px;height:33px;}"]),H=i.d.a.withConfig({displayName:"Bio__BioLink",componentId:"sc-1idlnhv-7"})(["width:34%;display:block;font-weight:600;font-size:0.9em;line-height:30px;color:",";letter-spacing:0.5px;&:hover{color:",";}"],function(d){return d.theme.colors.gray},function(d){return d.theme.colors.highlight}),P="2447670510",W=function(){return c.a.createElement(M.StaticQuery,{query:P,render:function(d){var u=d.site.siteMetadata,e=u.author,t=u.social;return c.a.createElement(Y,null,c.a.createElement(B,null,c.a.createElement(k,{src:x.a,alt:e}),c.a.createElement(Q,null,c.a.createElement("a",{href:"https://twitter.com/"+t.twitter},e))),c.a.createElement(Z,null,c.a.createElement(G,null,"高専生dayo"),c.a.createElement(U,null,c.a.createElement(H,{href:"https://twitter.com/atk420t"},c.a.createElement("img",{src:D.a,alt:"Twitter"}),c.a.createElement("div",null,"Twitter")),c.a.createElement(H,{href:"https://facebook.com/atk420t"},c.a.createElement("img",{src:T.a,alt:"facebook"}),c.a.createElement("div",null,"FaceBook")),c.a.createElement(H,{href:"https://ogikota.jp"},c.a.createElement("img",{src:O.a,alt:"home"}),c.a.createElement("div",null,"Profile")),c.a.createElement(H,{className:"bio-link--email",href:"mailto:atk420t@gmail.com"},c.a.createElement("img",{src:S.a,alt:""}),c.a.createElement("div",null,"E-mail")))))},data:N})},R=i.d.div.withConfig({displayName:"Layout__Content",componentId:"sc-1ak9zmx-0"})(["margin-top:2em;display:flex;min-height:85vh;align-items:flex-start;@media screen and (max-width:","){display:block;}@media screen and (max-width:","){margin-top:0;}"],function(d){return d.theme.responsive.large},function(d){return d.theme.responsive.small}),F=i.d.div.withConfig({displayName:"Layout__MainWrapper",componentId:"sc-1ak9zmx-1"})(["width:calc(100% - "," - 40px);margin-right:40px;@media screen and (max-width:","){width:100%;}"],function(d){return d.theme.sizes.bioWidth},function(d){return d.theme.responsive.large}),J=function(d){function u(){return d.apply(this,arguments)||this}return n()(u,d),u.prototype.render=function(){var d=this.props,u=d.location,e=d.title,t=d.children;return c.a.createElement(i.a,{theme:l},c.a.createElement("div",{className:"siteRoot"},c.a.createElement(j,{title:e,location:u}),c.a.createElement(g,null,c.a.createElement(R,null,c.a.createElement(F,null,c.a.createElement("main",null,t)),c.a.createElement(W,null))),c.a.createElement(I,null),c.a.createElement(f,null)))},u}(c.a.Component);u.a=J},156:function(d,u,e){"use strict";var t=function(){var d={base:"https://twemoji.maxcdn.com/2/",ext:".png",size:"72x72",className:"emoji",convert:{fromCodePoint:function(d){var u="string"==typeof d?parseInt(d,16):d;if(u<65536)return i(u);return i(55296+((u-=65536)>>10),56320+(1023&u))},toCodePoint:L},onerror:function(){this.parentNode&&this.parentNode.replaceChild(r(this.alt,!1),this)},parse:function(u,t){t&&"function"!=typeof t||(t={callback:t});return("string"==typeof u?function(d,u){return M(d,function(d){var e,t,n=d,c=s(d),i=u.callback(c,u);if(c&&i){for(t in n="<img ".concat('class="',u.className,'" ','draggable="false" ','alt="',d,'"',' src="',i,'"'),e=u.attributes(d,c))e.hasOwnProperty(t)&&0!==t.indexOf("on")&&-1===n.indexOf(" "+t+"=")&&(n=n.concat(" ",t,'="',e[t].replace(a,f),'"'));n=n.concat("/>")}return n})}:function(d,u){var t,n,a,i,o,f,l,M,L,g,w,A,m,y=function d(u,e){var t,n,a=u.childNodes,i=a.length;for(;i--;)t=a[i],3===(n=t.nodeType)?e.push(t):1!==n||"ownerSVGElement"in t||c.test(t.nodeName.toLowerCase())||d(t,e);return e}(d,[]),j=y.length;for(;j--;){for(a=!1,i=document.createDocumentFragment(),o=y[j],f=o.nodeValue,M=0;l=e.exec(f);){if((L=l.index)!==M&&i.appendChild(r(f.slice(M,L),!0)),w=l[0],A=s(w),M=L+w.length,m=u.callback(A,u),A&&m){for(n in(g=new Image).onerror=u.onerror,g.setAttribute("draggable","false"),t=u.attributes(w,A))t.hasOwnProperty(n)&&0!==n.indexOf("on")&&!g.hasAttribute(n)&&g.setAttribute(n,t[n]);g.className=u.className,g.alt=w,g.src=m,a=!0,i.appendChild(g)}g||i.appendChild(r(w,!1)),g=null}a&&(M<f.length&&i.appendChild(r(f.slice(M),!0)),o.parentNode.replaceChild(i,o))}return d})(u,{callback:t.callback||o,attributes:"function"==typeof t.attributes?t.attributes:l,base:"string"==typeof t.base?t.base:d.base,ext:t.ext||d.ext,size:t.folder||(n=t.size||d.size,"number"==typeof n?n+"x"+n:n),className:t.className||d.className,onerror:t.onerror||d.onerror});var n},replace:M,test:function(d){e.lastIndex=0;var u=e.test(d);return e.lastIndex=0,u}},u={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},e=/(?:\ud83d[\udc68\udc69])(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddb0-\uddb3])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f)|[\u0023\u002a\u0030-\u0039]\ufe0f?\u20e3|(?:[\u00a9\u00ae\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\uddb5\uddb6\uddb8\uddb9\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a-\udc6d\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\udeeb\udeec\udef4-\udef9]|\ud83e[\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd40-\udd45\udd47-\udd70\udd73-\udd76\udd7a\udd7c-\udda2\uddb4\uddb7\uddc0-\uddc2\uddd0\uddde-\uddff]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,t=/\uFE0F/g,n=String.fromCharCode(8205),a=/[&<>'"]/g,c=/^(?:iframe|noframes|noscript|script|select|style|textarea)$/,i=String.fromCharCode;return d;function r(d,u){return document.createTextNode(u?d.replace(t,""):d)}function o(d,u){return"".concat(u.base,u.size,"/",d,u.ext)}function s(d){return L(d.indexOf(n)<0?d.replace(t,""):d)}function f(d){return u[d]}function l(){return null}function M(d,u){return String(d).replace(e,u)}function L(d,u){for(var e=[],t=0,n=0,a=0;a<d.length;)t=d.charCodeAt(a++),n?(e.push((65536+(n-55296<<10)+(t-56320)).toString(16)),n=0):55296<=t&&t<=56319?n=t:e.push(t.toString(16));return e.join(u||"-")}}();u.a=t},157:function(d,u,e){var t=e(25).f,n=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in n||e(16)&&t(n,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(d){return""}}})},158:function(d,u,e){"use strict";e.r(u);e(32);var t=e(0),n=e.n(t),a=e(4),c=e.n(a),i=e(55),r=e(2),o=function(d){var u=d.location,e=r.default.getResourcesForPathnameSync(u.pathname);return n.a.createElement(i.a,Object.assign({location:u,pageResources:e},e.json))};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},u.default=o},159:function(d,u){d.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSLjg6zjgqTjg6Tjg7xfMSIgZGF0YS1uYW1lPSLjg6zjgqTjg6Tjg7wgMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTAxIDE4OC4yMyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMwNDAwMDA7fS5jbHMtMntmaWxsOiNmNWM1MWQ7c3Ryb2tlOiNmNWM1MWQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5sb2dvPC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00MTcuOTQsMTU2Yy4yNywwLTcuMDcsMCwwLDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjUgMC41KSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTkzLjg3LDBhOTMuNDUsOTMuNDUsMCwxLDAsOTMsOTMuN0E5My41NCw5My41NCwwLDAsMCw5My44NywwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC41IDAuNSkiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0zNTAuMTEsMTAuMTVjLTM3LTE4LjM1LTgwLjYtMTAuNS0xMDkuNzYsMTkuNzNDMjEyLjkxLDU4LjMyLDIwNywxMDIuOTQsMjI2LjE2LDEzOC4zMWMyMC4wNywzNy4wOSw1OC4yMiw1MC42OSw4NC45Myw0OC43NFY5NS4xNWg5MC41OUM0MDMuNDYsNjguNzksMzg4Ljg5LDI5LjQxLDM1MC4xMSwxMC4xNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSAwLjUpIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNDk1LjU1LDE5LjUzYy03Ljc2LTE0LjgzLTIzLjkxLTIyLjIxLTM5LjE2LTE4LTE1LjcsNC4zMS0yNi40NSwxOS0yNi40NiwzNi4zNHEwLDU1LjgyLDAsMTExLjYzYzAsMjAuOTMsMTUuNTgsMzcuNzMsMzUsMzcuNzdzMzUtMTYuNzIsMzUuMDctMzcuNjZxMC0yOCwwLTU2di0yOGMwLTkuMzMsMC0xOC42NiwwLTI4QTM4LjEyLDM4LjEyLDAsMCwwLDQ5NS41NSwxOS41M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSAwLjUpIi8+PC9zdmc+Cg=="},160:function(d){d.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAEEBQP/xAAXAQEAAwAAAAAAAAAAAAAAAAABAAID/9oADAMBAAIQAxAAAAGzQ6ZGRvsZcmkRBf/EABsQAAMAAgMAAAAAAAAAAAAAAAECAwAEEBIi/9oACAEBAAEFAnKmUutB5BoVWQoysNmgyrE8/wD/xAAXEQEAAwAAAAAAAAAAAAAAAAAAARAR/9oACAEDAQE/AWIr/8QAGBEAAgMAAAAAAAAAAAAAAAAAARACETH/2gAIAQIBAT8BgLCGL//EABwQAAICAgMAAAAAAAAAAAAAAAECABEhMRBSYf/aAAgBAQAGPwJmajXWA53DaEmVtfZamphjDnn/xAAaEAADAQEBAQAAAAAAAAAAAAABESEAMUEQ/9oACAEBAAE/IT0K+sAqEhG70BU4JGXKBedihi3CTvc6Em/v/9oADAMBAAIAAwAAABCA4L7/xAAYEQEBAAMAAAAAAAAAAAAAAAABABARMf/aAAgBAwEBPxBBtrjH/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQETH/2gAIAQIBAT8QRcIyUf/EAB4QAQACAgIDAQAAAAAAAAAAAAEAESExUYFBcaHw/9oACAEBAAE/ELA4Ivb0/sRQcWNYcN8Z9SgEySdPGSVikUeBbCvstb3QqDqANerBTMUWLJVbjzDU/9k=",width:70,height:70,src:"/static/20d83422204ffd4d32a971c955e870d7/0dde3/avatar.png",srcSet:"/static/20d83422204ffd4d32a971c955e870d7/0dde3/avatar.png 1x,\n/static/20d83422204ffd4d32a971c955e870d7/58a3a/avatar.png 1.5x,\n/static/20d83422204ffd4d32a971c955e870d7/0e066/avatar.png 2x,\n/static/20d83422204ffd4d32a971c955e870d7/d3624/avatar.png 3x"}}},site:{siteMetadata:{author:"Kota Ogi",social:{twitter:"atk420t"}}}}}},161:function(d,u,e){d.exports=e.p+"static/avatar-91e4dcf4291d5ac9dac8a4dca0ded435.svg"},162:function(d,u){d.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzMzQ0NGRjt9Cjwvc3R5bGU+Cjx0aXRsZT50d2l0dGVyPC90aXRsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTMyLDcuMWMtMS4yLDAuNS0yLjQsMC45LTMuOCwxYzEuNC0wLjgsMi40LTIuMSwyLjktMy42Yy0xLjMsMC44LTIuNywxLjMtNC4yLDEuNkMyNS43LDQuOCwyNCw0LDIyLjIsNAoJYy0zLjYsMC02LjYsMi45LTYuNiw2LjZjMCwwLjUsMC4xLDEsMC4yLDEuNUMxMC4zLDExLjgsNS41LDkuMiwyLjIsNS4yYy0wLjYsMS0wLjksMi4xLTAuOSwzLjNjMCwyLjMsMS4yLDQuMywyLjksNS41CgljLTEuMSwwLTIuMS0wLjMtMy0wLjhjMCwwLDAsMC4xLDAsMC4xYzAsMy4yLDIuMyw1LjgsNS4zLDYuNGMtMC42LDAuMS0xLjEsMC4yLTEuNywwLjJjLTAuNCwwLTAuOCwwLTEuMi0wLjEKCWMwLjgsMi42LDMuMyw0LjUsNi4xLDQuNmMtMi4yLDEuOC01LjEsMi44LTguMiwyLjhjLTAuNSwwLTEsMC0xLjYtMC4xYzIuOSwxLjksNi40LDMsMTAuMSwzYzEyLjEsMCwxOC43LTEwLDE4LjctMTguNwoJYzAtMC4zLDAtMC42LDAtMC45QzMwLDkuNiwzMS4xLDguNCwzMiw3LjFMMzIsNy4xeiIvPgo8L3N2Zz4K"},163:function(d,u){d.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzMzQ0NGRjt9Cjwvc3R5bGU+Cjx0aXRsZT5lbnZlbG9wPC90aXRsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTI5LDRIM0MxLjQsNCwwLDUuMywwLDd2MjBjMCwxLjYsMS40LDMsMywzaDI2YzEuNiwwLDMtMS40LDMtM1Y3QzMyLDUuMywzMC42LDQsMjksNHogTTEyLjUsMTcuMkw0LDIzLjhWOC4xCglDNCw4LjEsMTIuNSwxNy4yLDEyLjUsMTcuMnogTTUuNSw4aDIxTDE2LDE1LjlDMTYsMTUuOSw1LjUsOCw1LjUsOHogTTEyLjgsMTcuNkwxNiwyMWwzLjItMy40bDYuNiw4LjRINi4yTDEyLjgsMTcuNkwxMi44LDE3LjZ6CgkgTTE5LjUsMTcuMkwyOCw4LjF2MTUuN0MyOCwyMy44LDE5LjUsMTcuMiwxOS41LDE3LjJ6Ii8+Cjwvc3ZnPgo="},164:function(d,u){d.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzMzQ0NGRjt9Cjwvc3R5bGU+Cjx0aXRsZT5mYWNlYm9vazwvdGl0bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yOSwwSDNDMS40LDAsMCwxLjQsMCwzdjI2YzAsMS42LDEuNCwzLDMsM2gxM1YxOGgtNHYtNGg0di0yYzAtMy4zLDIuNy02LDYtNmg0djRoLTRjLTEuMSwwLTIsMC45LTIsMnYyaDYKCWwtMSw0aC01djE0aDljMS42LDAsMy0xLjQsMy0zVjNDMzIsMS40LDMwLjYsMCwyOSwweiIvPgo8L3N2Zz4K"},165:function(d,u){d.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzMzQ0NGRjt9Cjwvc3R5bGU+Cjx0aXRsZT5naXRodWI8L3RpdGxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTYsMC40Yy04LjgsMC0xNiw3LjItMTYsMTZjMCw3LjEsNC42LDEzLjEsMTAuOSwxNS4yYzAuOCwwLjEsMS4xLTAuMywxLjEtMC44YzAtMC40LDAtMS42LDAtMwoJYy00LjUsMS01LjQtMS45LTUuNC0xLjljLTAuNy0xLjgtMS44LTIuMy0xLjgtMi4zYy0xLjUtMSwwLjEtMSwwLjEtMWMxLjYsMC4xLDIuNSwxLjYsMi41LDEuNmMxLjQsMi40LDMuNywxLjcsNC43LDEuMwoJYzAuMS0xLDAuNi0xLjcsMS0yLjFjLTMuNi0wLjQtNy4zLTEuOC03LjMtNy45YzAtMS43LDAuNi0zLjIsMS42LTQuM2MtMC4yLTAuNC0wLjctMiwwLjItNC4yYzAsMCwxLjMtMC40LDQuNCwxLjYKCWMxLjMtMC40LDIuNi0wLjUsNC0wLjVjMS40LDAsMi43LDAuMiw0LDAuNUMyMy4xLDYuNiwyNC40LDcsMjQuNCw3YzAuOSwyLjIsMC4zLDMuOCwwLjIsNC4yYzEsMS4xLDEuNiwyLjUsMS42LDQuMwoJYzAsNi4xLTMuNyw3LjUtNy4zLDcuOWMwLjYsMC41LDEuMSwxLjUsMS4xLDNjMCwyLjEsMCwzLjksMCw0LjRjMCwwLjQsMC4zLDAuOSwxLjEsMC44QzI3LjQsMjkuNSwzMiwyMy41LDMyLDE2LjQKCUMzMiw3LjYsMjQuOCwwLjQsMTYsMC40eiIvPgo8L3N2Zz4K"},166:function(d,u){d.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzMzQ0NGRjt9Cjwvc3R5bGU+Cjx0aXRsZT5zcGhlcmU8L3RpdGxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTUsMkM2LjcsMiwwLDguNywwLDE3czYuNywxNSwxNSwxNXMxNS02LjcsMTUtMTVTMjMuMywyLDE1LDJ6IE0yMy41LDIyYzAuMy0xLjMsMC40LTIuNiwwLjUtNGg0CgljLTAuMSwxLjQtMC40LDIuNy0xLDRIMjMuNXogTTYuNSwxMmMtMC4zLDEuMy0wLjQsMi42LTAuNSw0SDJjMC4xLTEuNCwwLjQtMi43LDEtNEMzLDEyLDYuNSwxMiw2LjUsMTJ6IE0yMS40LDEyCgljMC4zLDEuMywwLjUsMi42LDAuNSw0aC02di00SDIxLjR6IE0xNiwxMFY0LjFjMC41LDAuMSwwLjksMC40LDEuNCwwLjdjMC44LDAuNiwxLjYsMS41LDIuMywyLjZjMC41LDAuOCwwLjksMS42LDEuMiwyLjZMMTYsMTAKCUwxNiwxMHogTTEwLjQsNy40YzAuNy0xLjEsMS41LTIsMi4zLTIuNmMwLjQtMC4zLDAuOS0wLjUsMS40LTAuN1YxMEg5LjFDOS41LDkuMSw5LjksOC4yLDEwLjQsNy40TDEwLjQsNy40eiBNMTQsMTJ2NEg4CgljMC4xLTEuNCwwLjItMi43LDAuNS00SDE0eiBNMywyMmMtMC41LTEuMy0wLjktMi42LTEtNGg0YzAuMSwxLjQsMC4yLDIuNywwLjUsNEgzeiBNOCwxOGg2djRIOC42QzguMywyMC43LDguMSwxOS40LDgsMTh6IE0xNCwyNAoJdjUuOWMtMC41LTAuMS0wLjktMC40LTEuNC0wLjdjLTAuOC0wLjYtMS42LTEuNS0yLjMtMi42Yy0wLjUtMC44LTAuOS0xLjYtMS4yLTIuNkwxNCwyNEwxNCwyNHogTTE5LjYsMjYuNmMtMC43LDEuMS0xLjUsMi0yLjMsMi42CgljLTAuNCwwLjMtMC45LDAuNS0xLjQsMC43VjI0aDQuOUMyMC41LDI0LjksMjAuMSwyNS44LDE5LjYsMjYuNkwxOS42LDI2LjZ6IE0xNiwyMnYtNGg2Yy0wLjEsMS40LTAuMiwyLjctMC41LDQKCUMyMS40LDIyLDE2LDIyLDE2LDIyeiBNMjQsMTZjLTAuMS0xLjQtMC4yLTIuNy0wLjUtNEgyN2MwLjUsMS4zLDAuOSwyLjYsMSw0SDI0eiBNMjYsMTBoLTNjLTAuNi0xLjgtMS40LTMuNC0yLjQtNC43CgljMS4zLDAuNiwyLjUsMS41LDMuNiwyLjVDMjQuOSw4LjUsMjUuNSw5LjIsMjYsMTB6IE01LjgsNy44YzEuMS0xLjEsMi4zLTEuOSwzLjYtMi41QzguNCw2LjYsNy42LDguMiw3LDEwSDQKCUM0LjUsOS4yLDUuMSw4LjUsNS44LDcuOHogTTQsMjRoM2MwLjYsMS44LDEuNCwzLjQsMi40LDQuN2MtMS4zLTAuNi0yLjUtMS41LTMuNi0yLjVDNS4xLDI1LjUsNC41LDI0LjgsNCwyNHogTTI0LjIsMjYuMgoJYy0xLjEsMS4xLTIuMywxLjktMy42LDIuNWMxLTEuMywxLjgtMi45LDIuNC00LjdoM0MyNS41LDI0LjgsMjQuOSwyNS41LDI0LjIsMjYuMnoiLz4KPC9zdmc+Cg=="},167:function(d){d.exports={data:{site:{siteMetadata:{title:"OGI BLOG",siteUrl:"https://blog.ogikota.jp",description:"",author:"Kota Ogi"}}}}},169:function(d,u,e){"use strict";e(157),e(73);var t=e(194),n=e(0),a=e.n(n),c=e(149),i=e(148).d.div.withConfig({displayName:"CategoryLabel__Wrapper",componentId:"sc-1exundf-0"})([".category-text{padding:0.3em 1em;display:inline-block;display:inline;padding:3px 6px;line-height:1.2;font-size:12px;border-radius:1em;font-weight:600;color:#fff;@media screen and (max-width:","){font-size:11px;padding:2.5px 6px;}}"],function(d){return d.theme.responsive.large}),r="1330303572";u.a=function(d){var u=d.slug,e=d.isLink;return u?a.a.createElement(c.StaticQuery,{query:r,render:function(d){var t=d.site.siteMetadata.categories.find(function(d){return d.slug===u}),n=t?t.name:u,r=t?t.color:"#6d4bf5",o=e?a.a.createElement(c.Link,{to:"/category/"+u,className:"category-text",style:{background:r}},n):a.a.createElement("span",{className:"category-text",style:{background:r}},n);return a.a.createElement(i,null,o)},data:t}):null}},194:function(d){d.exports={data:{site:{siteMetadata:{categories:[{name:"Photo",slug:"photo",color:"#0c9ee4"},{name:"Dev",slug:"dev",color:"#f7615f"}]}}}}}}]);
//# sourceMappingURL=1-564671af49fb86349631.js.map