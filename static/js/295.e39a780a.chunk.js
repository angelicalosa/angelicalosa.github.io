(self.webpackChunkangelicalosa_github_io=self.webpackChunkangelicalosa_github_io||[]).push([[295],{295:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>E});var r=s(43),n=s(475),i=s(551),a=s(579);const c=e=>{let{data:t}=e;return(0,a.jsx)("article",{className:"degree-container",children:(0,a.jsxs)("header",{children:[(0,a.jsx)("h4",{className:"degree",children:t.degree}),(0,a.jsxs)("p",{className:"school",children:[(0,a.jsx)("a",{href:t.link,children:t.school}),", ",t.startYear," - ",t.endYear]})]})})},l=e=>{let{data:t}=e;return(0,a.jsxs)("div",{className:"education",children:[(0,a.jsx)("div",{className:"link-to",id:"education"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:"Education"})}),t.map((e=>(0,a.jsx)(c,{data:e},e.school)))]})};l.defaultProps={data:[]};const o=l;var u=s(446),d=s.n(u),h=s(574);const f=e=>{let{data:{name:t,position:s,url:r,startDate:n,endDate:i,summary:c,highlights:l}}=e;return(0,a.jsxs)("article",{className:"jobs-container",children:[(0,a.jsxs)("header",{children:[(0,a.jsxs)("h4",{children:[(0,a.jsx)("a",{href:r,children:t})," - ",s]}),(0,a.jsxs)("p",{className:"daterange",children:[" ",d()(n).format("MMMM YYYY")," - ",i?d()(i).format("MMMM YYYY"):"PRESENT"]})]}),c?(0,a.jsx)(h.Ay,{options:{overrides:{p:{props:{className:"summary"}}}},children:c}):null,l?(0,a.jsx)("ul",{className:"points",children:l.map((e=>(0,a.jsx)("li",{children:e},e)))}):null]})},m=e=>{let{data:t}=e;return(0,a.jsxs)("div",{className:"experience",children:[(0,a.jsx)("div",{className:"link-to",id:"experience"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:"Experience"})}),t.map((e=>(0,a.jsx)(f,{data:e},"".concat(e.name,"-").concat(e.position))))]})};m.defaultProps={data:[]};const p=m,g=e=>{let{handleClick:t,active:s,label:r}=e;return(0,a.jsx)("button",{className:"skillbutton ".concat(s[r]?"skillbutton-active":""),type:"button",onClick:()=>t(r),children:r})},x=e=>{let{data:t,categories:s}=e;const{category:r,competency:n,title:i}=t,c={background:s.filter((e=>r.includes(e.name))).map((e=>e.color))[0]},l={...c,width:"".concat(String(Math.min(100,Math.max(n/5*100,0))),"%")};return(0,a.jsxs)("div",{className:"skillbar clearfix",children:[(0,a.jsx)("div",{className:"skillbar-title",style:c,children:(0,a.jsx)("span",{children:i})}),(0,a.jsx)("div",{className:"skillbar-bar",style:l}),(0,a.jsxs)("div",{className:"skill-bar-percent",children:[n," / 5"]})]})};x.defaultProps={categories:[]};const v=x,y=e=>{let{skills:t,categories:s}=e;const n=Object.fromEntries([["All",!1]].concat(s.map((e=>{let{name:t}=e;return[t,!1]})))),[i,c]=(0,r.useState)(n),l=e=>{const t=Object.keys(i).reduce(((t,s)=>({...t,[s]:e===s&&!i[s]})),{});t.All=!Object.keys(i).some((e=>t[e])),c(t)};return(0,a.jsxs)("div",{className:"skills",children:[(0,a.jsx)("div",{className:"link-to",id:"skills"}),(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("h3",{children:"Skills"}),(0,a.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),(0,a.jsx)("div",{className:"skill-button-container",children:Object.keys(i).map((e=>(0,a.jsx)(g,{label:e,active:i,handleClick:l},e)))}),(0,a.jsx)("div",{className:"skill-row-container",children:(()=>{const e=Object.keys(i).reduce(((e,t)=>i[t]?t:e),"All");return t.sort(((e,t)=>{let s=0;return e.competency>t.competency?s=-1:e.competency<t.competency?s=1:e.category[0]>t.category[0]?s=-1:e.category[0]<t.category[0]||e.title>t.title?s=1:e.title<t.title&&(s=-1),s})).filter((t=>"All"===e||t.category.includes(e))).map((e=>(0,a.jsx)(v,{categories:s,data:e},e.title)))})()})]})};y.defaultProps={skills:[],categories:[]};const j=y,$=e=>{let{data:t,last:s}=e;return(0,a.jsxs)("li",{className:"course-container",children:[(0,a.jsxs)("a",{href:t.link,children:[(0,a.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,a.jsx)("p",{className:"course-name",children:t.title})]}),!s&&(0,a.jsx)("div",{className:"course-dot",children:(0,a.jsx)("p",{className:"course-name",children:" \u2022"})})]})};$.defaultProps={last:!1};const b=$,M=e=>e.sort(((e,t)=>{let s=0;return e.university>t.university?s=-1:e.university<t.university||e.number>t.number?s=1:e.number<t.number&&(s=-1),s})).map(((t,s)=>(0,a.jsx)(b,{data:t,last:s===e.length-1},t.title))),k=e=>{let{data:t}=e;return(0,a.jsxs)("div",{className:"courses",children:[(0,a.jsx)("div",{className:"link-to",id:"courses"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:"Selected Courses"})}),(0,a.jsx)("ul",{className:"course-list",children:M(t)})]})};k.defaultProps={data:[]};const D=k,N=()=>(0,a.jsxs)("div",{className:"references",children:[(0,a.jsx)("div",{className:"link-to",id:"references"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)(n.N_,{to:"/contact",children:(0,a.jsx)("h3",{children:"References are available upon request"})})})]}),S=[{title:" ",number:" ",link:" ",university:" "}],w=[{school:"Samar College Inc.",degree:"Bachelor of Elementary Education",link:"https://beta.samarcollege.edu.ph/portal/",startYear:2015,endYear:2019}],O=[{name:"Fireprofessionals (Firepro) Inc.  ",position:"Junior Sales Executive",url:"https://fireprofessionals.com.ph",startDate:"2023-02-15",endDate:"2024-05-15",summary:" \n     ",highlights:["Prospected and generated leads within assigned territory, resulting in a 20% increase in client base.","Presented and demonstrated fire protection products and services to potential customers, achieving a 15% conversion rate.","Collaborated with technical teams to ensure accurate understanding and representation of product features and benefits.","Negotiated contracts and terms of sales agreements, consistently meeting or exceeding monthly sales targets."]},{name:"COMELEC",position:"DESO Technician Support",url:" ",startDate:"2022-04-01",endDate:"2022-04-30",summary:" \n     ",highlights:["Provided expert technical support and troubleshooting for DESO systems, resolving issues promptly and ensuring minimal downtime.","Managed, installed, configured, and tested new DESO equipment at customer sites, ensuring seamless integration and functionality."]}],Y=[{title:"Microsoft Office",competency:4,category:["Application Suite"]},{title:"Canva",competency:3,category:["Graphic Design"]}].map((e=>({...e,category:e.category.sort()}))),_=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],C=[...new Set(Y.flatMap((e=>{let{category:t}=e;return t})))].sort().map(((e,t)=>({name:e,color:_[t]}))),A={Education:()=>(0,a.jsx)(o,{data:w}),Experience:()=>(0,a.jsx)(p,{data:O}),Skills:()=>(0,a.jsx)(j,{skills:Y,categories:C}),Courses:()=>(0,a.jsx)(D,{data:S}),References:()=>(0,a.jsx)(N,{})},E=()=>(0,a.jsx)(i.A,{title:"Resume",description:"AAK's Resume.",children:(0,a.jsxs)("article",{className:"post",id:"resume",children:[(0,a.jsx)("header",{children:(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("h2",{children:(0,a.jsx)(n.N_,{to:"/resume",children:"Resume"})}),(0,a.jsxs)("div",{className:"link-container",children:[(0,a.jsx)("h4",{children:(0,a.jsx)("a",{href:"https://drive.google.com/file/d/1mattbdC2Z6ZZsCRzxMTQusGrjOrZG6r2/view",children:"download"})}),Object.keys(A).map((e=>(0,a.jsx)("h4",{children:(0,a.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)))]})]})}),Object.entries(A).map((e=>{let[t,s]=e;return(0,a.jsx)(s,{},t)}))]})})},446:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,s=36e5,r="millisecond",n="second",i="minute",a="hour",c="day",l="week",o="month",u="quarter",d="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],s=e%100;return"["+e+(t[(s-20)%10]||t[s]||t[0])+"]"}},x=function(e,t,s){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(s)+e},v={s:x,z:function(e){var t=-e.utcOffset(),s=Math.abs(t),r=Math.floor(s/60),n=s%60;return(t<=0?"+":"-")+x(r,2,"0")+":"+x(n,2,"0")},m:function e(t,s){if(t.date()<s.date())return-e(s,t);var r=12*(s.year()-t.year())+(s.month()-t.month()),n=t.clone().add(r,o),i=s-n<0,a=t.clone().add(r+(i?-1:1),o);return+(-(r+(s-n)/(i?n-a:a-n))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:o,y:d,w:l,d:c,D:h,h:a,m:i,s:n,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",j={};j[y]=g;var $="$isDayjsObject",b=function(e){return e instanceof N||!(!e||!e[$])},M=function e(t,s,r){var n;if(!t)return y;if("string"==typeof t){var i=t.toLowerCase();j[i]&&(n=i),s&&(j[i]=s,n=i);var a=t.split("-");if(!n&&a.length>1)return e(a[0])}else{var c=t.name;j[c]=t,n=c}return!r&&n&&(y=n),n||!r&&y},k=function(e,t){if(b(e))return e.clone();var s="object"==typeof t?t:{};return s.date=e,s.args=arguments,new N(s)},D=v;D.l=M,D.i=b,D.w=function(e,t){return k(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var N=function(){function g(e){this.$L=M(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[$]=!0}var x=g.prototype;return x.parse=function(e){this.$d=function(e){var t=e.date,s=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(m);if(r){var n=r[2]-1||0,i=(r[7]||"0").substring(0,3);return s?new Date(Date.UTC(r[1],n,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],n,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},x.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},x.$utils=function(){return D},x.isValid=function(){return!(this.$d.toString()===f)},x.isSame=function(e,t){var s=k(e);return this.startOf(t)<=s&&s<=this.endOf(t)},x.isAfter=function(e,t){return k(e)<this.startOf(t)},x.isBefore=function(e,t){return this.endOf(t)<k(e)},x.$g=function(e,t,s){return D.u(e)?this[t]:this.set(s,e)},x.unix=function(){return Math.floor(this.valueOf()/1e3)},x.valueOf=function(){return this.$d.getTime()},x.startOf=function(e,t){var s=this,r=!!D.u(t)||t,u=D.p(e),f=function(e,t){var n=D.w(s.$u?Date.UTC(s.$y,t,e):new Date(s.$y,t,e),s);return r?n:n.endOf(c)},m=function(e,t){return D.w(s.toDate()[e].apply(s.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),s)},p=this.$W,g=this.$M,x=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case o:return r?f(1,g):f(0,g+1);case l:var y=this.$locale().weekStart||0,j=(p<y?p+7:p)-y;return f(r?x-j:x+(6-j),g);case c:case h:return m(v+"Hours",0);case a:return m(v+"Minutes",1);case i:return m(v+"Seconds",2);case n:return m(v+"Milliseconds",3);default:return this.clone()}},x.endOf=function(e){return this.startOf(e,!1)},x.$set=function(e,t){var s,l=D.p(e),u="set"+(this.$u?"UTC":""),f=(s={},s[c]=u+"Date",s[h]=u+"Date",s[o]=u+"Month",s[d]=u+"FullYear",s[a]=u+"Hours",s[i]=u+"Minutes",s[n]=u+"Seconds",s[r]=u+"Milliseconds",s)[l],m=l===c?this.$D+(t-this.$W):t;if(l===o||l===d){var p=this.clone().set(h,1);p.$d[f](m),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},x.set=function(e,t){return this.clone().$set(e,t)},x.get=function(e){return this[D.p(e)]()},x.add=function(r,u){var h,f=this;r=Number(r);var m=D.p(u),p=function(e){var t=k(f);return D.w(t.date(t.date()+Math.round(e*r)),f)};if(m===o)return this.set(o,this.$M+r);if(m===d)return this.set(d,this.$y+r);if(m===c)return p(1);if(m===l)return p(7);var g=(h={},h[i]=t,h[a]=s,h[n]=e,h)[m]||1,x=this.$d.getTime()+r*g;return D.w(x,this)},x.subtract=function(e,t){return this.add(-1*e,t)},x.format=function(e){var t=this,s=this.$locale();if(!this.isValid())return s.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",n=D.z(this),i=this.$H,a=this.$m,c=this.$M,l=s.weekdays,o=s.months,u=s.meridiem,d=function(e,s,n,i){return e&&(e[s]||e(t,r))||n[s].slice(0,i)},h=function(e){return D.s(i%12||12,e,"0")},m=u||function(e,t,s){var r=e<12?"AM":"PM";return s?r.toLowerCase():r};return r.replace(p,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return c+1;case"MM":return D.s(c+1,2,"0");case"MMM":return d(s.monthsShort,c,o,3);case"MMMM":return d(o,c);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(s.weekdaysMin,t.$W,l,2);case"ddd":return d(s.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return D.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(i,a,!0);case"A":return m(i,a,!1);case"m":return String(a);case"mm":return D.s(a,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return n}return null}(e)||n.replace(":","")}))},x.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},x.diff=function(r,h,f){var m,p=this,g=D.p(h),x=k(r),v=(x.utcOffset()-this.utcOffset())*t,y=this-x,j=function(){return D.m(p,x)};switch(g){case d:m=j()/12;break;case o:m=j();break;case u:m=j()/3;break;case l:m=(y-v)/6048e5;break;case c:m=(y-v)/864e5;break;case a:m=y/s;break;case i:m=y/t;break;case n:m=y/e;break;default:m=y}return f?m:D.a(m)},x.daysInMonth=function(){return this.endOf(o).$D},x.$locale=function(){return j[this.$L]},x.locale=function(e,t){if(!e)return this.$L;var s=this.clone(),r=M(e,t,!0);return r&&(s.$L=r),s},x.clone=function(){return D.w(this.$d,this)},x.toDate=function(){return new Date(this.valueOf())},x.toJSON=function(){return this.isValid()?this.toISOString():null},x.toISOString=function(){return this.$d.toISOString()},x.toString=function(){return this.$d.toUTCString()},g}(),S=N.prototype;return k.prototype=S,[["$ms",r],["$s",n],["$m",i],["$H",a],["$W",c],["$M",o],["$y",d],["$D",h]].forEach((function(e){S[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),k.extend=function(e,t){return e.$i||(e(t,N,k),e.$i=!0),k},k.locale=M,k.isDayjs=b,k.unix=function(e){return k(1e3*e)},k.en=j[y],k.Ls=j,k.p={},k}()}}]);
//# sourceMappingURL=295.e39a780a.chunk.js.map