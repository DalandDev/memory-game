(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{12:function(e,c,a){},13:function(e,c,a){},15:function(e,c,a){},16:function(e,c,a){"use strict";a.r(c);var i=a(1),t=a.n(i),o=a(6),s=a.n(o),d=(a(12),a(7)),n=a(3),l=(a(13),a(0));var m=function(e){return Object(l.jsx)("div",{id:"grid",children:e.arr.map((function(c,a){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{onClick:e.onClick,children:Object(l.jsx)("img",{src:c.logo})}),Object(l.jsx)("p",{children:c.name})]},a)}))})},g=(a(15),a.p+"static/media/adidas.92a712a5.svg"),r=a.p+"static/media/amazon.4b29166b.svg",p=a.p+"static/media/american_express.ececc221.svg",b=a.p+"static/media/apple.6e8e42e3.svg",f=a.p+"static/media/bmw.4ba23c0f.svg",k=a.p+"static/media/coca_cola.6f881fee.svg",v=a.p+"static/media/disney.4d596961.svg",u=a.p+"static/media/ebay.1d328526.svg",j=a.p+"static/media/facebook.6dfcfb66.svg",h=a.p+"static/media/fedex.9273544a.svg",O=a.p+"static/media/ford.7a4054b3.svg",x=a.p+"static/media/ibm.78d435f0.svg",y=a.p+"static/media/instagram.617454b3.svg",S=a.p+"static/media/intel.3f7191ad.svg",M=a.p+"static/media/lamborghini.d48c04a6.svg",A=a.p+"static/media/linkedin.32e20978.svg",I=a.p+"static/media/louis_vuitton.e13a8c17.svg",z=a.p+"static/media/marvel.f64c057b.svg",C=a.p+"static/media/mercedes_benz.d55c56ff.svg",E=a.p+"static/media/microsoft.e116a418.svg",w=a.p+"static/media/nasa.592322f3.svg",B=a.p+"static/media/nike.bf93db01.svg",_=a.p+"static/media/nissan.61dda663.svg",N=a.p+"static/media/puma.f8366daf.svg",T=a.p+"static/media/samsung.e555f7f5.svg",F=a.p+"static/media/skype.4ddbcd70.svg",L=a.p+"static/media/sony.b3486069.svg",W=a.p+"static/media/spotify.4e7c5090.svg",H=a.p+"static/media/starbucks.01479ca2.svg",J=a.p+"static/media/tesla.a2e6ec2f.svg",P=a.p+"static/media/tommy_hilfiger.15e7dae4.svg",D=a.p+"static/media/toyota.b0801450.svg",G=a.p+"static/media/ups.b9b86daf.svg",U=a.p+"static/media/walmart.fb6e9bde.svg",V=a.p+"static/media/whatsapp.5614c6dc.svg",Y=a.p+"static/media/youtube.4151dcdf.svg";var q=function(){var e=Object(i.useState)(0),c=Object(n.a)(e,2),a=c[0],t=c[1],o=Object(i.useState)(0),s=Object(n.a)(o,2),q=s[0],K=s[1],Q=Object(i.useState)(""),R=Object(n.a)(Q,2),X=(R[0],R[1]),Z=Object(i.useState)([{name:"Adidas",logo:g,clicked:!1},{name:"NASA",logo:w,clicked:!1},{name:"Disney",logo:v,clicked:!1},{name:"Lamborghini",logo:M,clicked:!1},{name:"Marvel",logo:z,clicked:!1},{name:"Starbucks",logo:H,clicked:!1},{name:"Toyota",logo:D,clicked:!1},{name:"Nike",logo:B,clicked:!1},{name:"Microsoft",logo:E,clicked:!1},{name:"Puma",logo:N,clicked:!1},{name:"BMW",logo:f,clicked:!1},{name:"Coca Cola",logo:k,clicked:!1},{name:"Samsung",logo:T,clicked:!1},{name:"Ford",logo:O,clicked:!1},{name:"Fedex",logo:h,clicked:!1},{name:"Apple",logo:b,clicked:!1},{name:"Nissan",logo:_,clicked:!1},{name:"Facebook",logo:j,clicked:!1},{name:"Sony",logo:L,clicked:!1},{name:"Tesla",logo:J,clicked:!1},{name:"Mercedes Benz",logo:C,clicked:!1},{name:"IBM",logo:x,clicked:!1},{name:"American Express",logo:p,clicked:!1},{name:"Instagram",logo:y,clicked:!1},{name:"Amazon",logo:r,clicked:!1},{name:"Skype",logo:F,clicked:!1},{name:"UPS",logo:G,clicked:!1},{name:"WhatsApp",logo:V,clicked:!1},{name:"YouTube",logo:Y,clicked:!1},{name:"Louis Vuitton",logo:I,clicked:!1},{name:"Walmart",logo:U,clicked:!1},{name:"LinkedIn",logo:A,clicked:!1},{name:"Intel",logo:S,clicked:!1},{name:"Spotify",logo:W,clicked:!1},{name:"eBay",logo:u,clicked:!1},{name:"Tommy Hilfiger",logo:P,clicked:!1}]),$=Object(n.a)(Z,2),ee=$[0],ce=$[1];return Object(i.useEffect)((function(){localStorage.getItem("highScore")&&K(localStorage.getItem("highScore"))}),[]),Object(i.useEffect)((function(){ce(function(e){for(var c=e.length-1;c>0;c--){var a=Math.floor(Math.random()*(c+1)),i=[e[a],e[c]];e[c]=i[0],e[a]=i[1]}return e}(ee)),X(ee[0].name)}),[ee]),Object(i.useEffect)((function(){localStorage.setItem("highScore",q)}),[q]),Object(l.jsxs)("div",{id:"main",children:[Object(l.jsxs)("div",{id:"header",children:[Object(l.jsxs)("div",{id:"logo",children:[Object(l.jsx)("i",{className:"fas fa-puzzle-piece"}),Object(l.jsx)("h1",{children:"Memory Game"})]}),Object(l.jsxs)("div",{id:"score",children:[Object(l.jsxs)("p",{children:["Current score: ",a]}),Object(l.jsxs)("p",{children:["High score: ",q]})]})]}),Object(l.jsx)("div",{id:"grid-container",children:Object(l.jsx)(m,{arr:ee.slice(0,9),onClick:function(e){X(ee[0].name);var c=Object(d.a)(ee),i=c.filter((function(c){return c.logo===e.target.getAttribute("src")}))[0];i.clicked?(t(0),c.forEach((function(e){e.clicked=!1}))):(i.clicked=!0,t(a+1),a>=q&&K(a)),ce(c)},id:"grid"})})]})};s.a.render(Object(l.jsx)(t.a.StrictMode,{children:Object(l.jsx)(q,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d786fa66.chunk.js.map