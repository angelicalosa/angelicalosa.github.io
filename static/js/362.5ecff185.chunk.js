(self.webpackChunkangelicalosa_github_io=self.webpackChunkangelicalosa_github_io||[]).push([[362],{362:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>m});var r=n(43),s=n(475),a=n(551),i=n(579);const u=t=>{let{label:e,link:n,value:r,format:s}=t;return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{width:"70%",children:e}),(0,i.jsx)("td",{children:n?(0,i.jsx)("a",{href:n,children:s(r)}):s(r)})]})};u.defaultProps={format:t=>t,link:null,value:null};const o=u,c=t=>{let{data:e}=t;return(0,i.jsx)("table",{children:(0,i.jsx)("tbody",{children:e.map((t=>(0,i.jsx)(o,{format:t.format,label:t.label,link:t.link,value:t.value},t.label)))})})},l=()=>{const[t,e]=(0,r.useState)();return(0,r.useEffect)((()=>{const t=setInterval((()=>(()=>{const t=new Date("1998-03-25T00:00:00");e(((Date.now()-t)/31556925190.079998).toFixed(11))})()),25);return()=>{clearInterval(t)}}),[]),(0,i.jsx)(i.Fragment,{children:t})},h=[{key:"age",label:"Current age",value:(0,i.jsx)(l,{})},{key:"countries",label:"Countries visited",value:1,link:"https://www.google.com/maps/d/u/1/embed?mid=1brlWeC-k0bH-oXjLVdCN8sPva26uTcs&ehbc=2E312F"},{key:"location",label:"Current city",value:"City of Antipolo, Rizal"}],f=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{children:"Some stats about me"}),(0,i.jsx)(c,{data:h})]});var d=n(446),g=n.n(d);const $=[{label:"Stars this repository has on github",key:"stargazers_count",link:"https://github.com/angelicalosa/angelicalosa.github.io/stargazers"},{label:"Number of people watching this repository",key:"subscribers_count",link:"https://github.com/angelicalosa/angelicalosa.github.io/stargazers"},{label:"Number of forks",key:"forks",link:"https://github.com/angelicalosa/angelicalosa.github.io/network"},{label:"Number of spoons",value:"0"},{label:"Number of linter warnings",value:"0"},{label:"Open github issues",key:"open_issues_count",link:"https://github.com/angelicalosa/angelicalosa.github.io/issues"},{label:"Last updated at",key:"pushed_at",link:"https://github.com/angelicalosa/angelicalosa.github.io/commits",format:t=>g()(t).format("MMMM DD, YYYY")},{label:"Lines of Javascript powering this website",value:"2150",link:"https://github.com/angelicalosa/angelicalosa.github.io/graphs/contributors"}],b=()=>{const[t,e]=(0,r.useState)($),n=(0,r.useCallback)((async()=>{const t=await fetch("https://api.github.com/repos/aakalaw/aakalaw.github.io"),n=await t.json();e($.map((t=>({...t,value:Object.keys(n).includes(t.key)?n[t.key]:t.value}))))}),[]);return(0,r.useEffect)((()=>{n()}),[n]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"Some stats about this site"}),(0,i.jsx)(c,{data:t})]})},m=()=>(0,i.jsx)(a.A,{title:"Stats",description:"Some statistics about AAK's and aakalaw.github.io",children:(0,i.jsxs)("article",{className:"post",id:"stats",children:[(0,i.jsx)("header",{children:(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h2",{children:(0,i.jsx)(s.N_,{to:"/stats",children:"Stats"})})})}),(0,i.jsx)(f,{}),(0,i.jsx)(b,{})]})})},446:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",s="second",a="minute",i="hour",u="day",o="week",c="month",l="quarter",h="year",f="date",d="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,b={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},p={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(r,c),a=n-s<0,i=e.clone().add(r+(a?-1:1),c);return+(-(r+(n-s)/(a?s-i:i-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:u,D:f,h:i,m:a,s:s,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",y={};y[v]=b;var k="$isDayjsObject",M=function(t){return t instanceof x||!(!t||!t[k])},w=function t(e,n,r){var s;if(!e)return v;if("string"==typeof e){var a=e.toLowerCase();y[a]&&(s=a),n&&(y[a]=n,s=a);var i=e.split("-");if(!s&&i.length>1)return t(i[0])}else{var u=e.name;y[u]=e,s=u}return!r&&s&&(v=s),s||!r&&v},D=function(t,e){if(M(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new x(n)},S=p;S.l=w,S.i=M,S.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function b(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[k]=!0}var m=b.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(g);if(r){var s=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return S},m.isValid=function(){return!(this.$d.toString()===d)},m.isSame=function(t,e){var n=D(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return D(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<D(t)},m.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!S.u(e)||e,l=S.p(t),d=function(t,e){var s=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?s:s.endOf(u)},g=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},$=this.$W,b=this.$M,m=this.$D,p="set"+(this.$u?"UTC":"");switch(l){case h:return r?d(1,0):d(31,11);case c:return r?d(1,b):d(0,b+1);case o:var v=this.$locale().weekStart||0,y=($<v?$+7:$)-v;return d(r?m-y:m+(6-y),b);case u:case f:return g(p+"Hours",0);case i:return g(p+"Minutes",1);case a:return g(p+"Seconds",2);case s:return g(p+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=S.p(t),l="set"+(this.$u?"UTC":""),d=(n={},n[u]=l+"Date",n[f]=l+"Date",n[c]=l+"Month",n[h]=l+"FullYear",n[i]=l+"Hours",n[a]=l+"Minutes",n[s]=l+"Seconds",n[r]=l+"Milliseconds",n)[o],g=o===u?this.$D+(e-this.$W):e;if(o===c||o===h){var $=this.clone().set(f,1);$.$d[d](g),$.init(),this.$d=$.set(f,Math.min(this.$D,$.daysInMonth())).$d}else d&&this.$d[d](g);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[S.p(t)]()},m.add=function(r,l){var f,d=this;r=Number(r);var g=S.p(l),$=function(t){var e=D(d);return S.w(e.date(e.date()+Math.round(t*r)),d)};if(g===c)return this.set(c,this.$M+r);if(g===h)return this.set(h,this.$y+r);if(g===u)return $(1);if(g===o)return $(7);var b=(f={},f[a]=e,f[i]=n,f[s]=t,f)[g]||1,m=this.$d.getTime()+r*b;return S.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",s=S.z(this),a=this.$H,i=this.$m,u=this.$M,o=n.weekdays,c=n.months,l=n.meridiem,h=function(t,n,s,a){return t&&(t[n]||t(e,r))||s[n].slice(0,a)},f=function(t){return S.s(a%12||12,t,"0")},g=l||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace($,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return S.s(e.$y,4,"0");case"M":return u+1;case"MM":return S.s(u+1,2,"0");case"MMM":return h(n.monthsShort,u,c,3);case"MMMM":return h(c,u);case"D":return e.$D;case"DD":return S.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(a);case"HH":return S.s(a,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return g(a,i,!0);case"A":return g(a,i,!1);case"m":return String(i);case"mm":return S.s(i,2,"0");case"s":return String(e.$s);case"ss":return S.s(e.$s,2,"0");case"SSS":return S.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,f,d){var g,$=this,b=S.p(f),m=D(r),p=(m.utcOffset()-this.utcOffset())*e,v=this-m,y=function(){return S.m($,m)};switch(b){case h:g=y()/12;break;case c:g=y();break;case l:g=y()/3;break;case o:g=(v-p)/6048e5;break;case u:g=(v-p)/864e5;break;case i:g=v/n;break;case a:g=v/e;break;case s:g=v/t;break;default:g=v}return d?g:S.a(g)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return y[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return S.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},b}(),j=x.prototype;return D.prototype=j,[["$ms",r],["$s",s],["$m",a],["$H",i],["$W",u],["$M",c],["$y",h],["$D",f]].forEach((function(t){j[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),D.extend=function(t,e){return t.$i||(t(e,x,D),t.$i=!0),D},D.locale=w,D.isDayjs=M,D.unix=function(t){return D(1e3*t)},D.en=y[v],D.Ls=y,D.p={},D}()}}]);
//# sourceMappingURL=362.5ecff185.chunk.js.map