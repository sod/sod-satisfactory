"use strict";(self.webpackChunksod_satisfactory=self.webpackChunksod_satisfactory||[]).push([[184],{8184:(pi,ue,c)=>{c.r(ue),c.d(ue,{PlannerModule:()=>li});var m=c(8583),et=c(9670),le=c(6983),y=c(3065),tt=c(3709),nt=c(6587);const pe=(0,y.ZF)(nt.uQ),ge=(0,y.P1)(pe,e=>e.productions.map((a,n)=>new tt.e(a,n))),q=(0,y.P1)(pe,e=>e.edit),at=(0,y.P1)(ge,q,(e,a)=>a?e[a.index]:void 0);var t=c(7716);let M=(()=>{class e{index(n){return n}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var b=c(3229),G=c(3385),z=c(5699),j=c(4514),x=c(464),F=c(4453),B=c(9374),ot=c(6566),W=c(9982),H=c(8576),K=c(1638);var U=c(4673),dt=c(914);function D(e){var a=this.__data__=new K.Z(e);this.size=a.size}D.prototype.clear=function(){this.__data__=new K.Z,this.size=0},D.prototype.delete=function(e){var a=this.__data__,n=a.delete(e);return this.size=a.size,n},D.prototype.get=function(e){return this.__data__.get(e)},D.prototype.has=function(e){return this.__data__.has(e)},D.prototype.set=function(e,a){var n=this.__data__;if(n instanceof K.Z){var o=n.__data__;if(!U.Z||o.length<199)return o.push([e,a]),this.size=++n.size,this;n=this.__data__=new dt.Z(o)}return n.set(e,a),this.size=n.size,this};const L=D;var yt=c(5072);const bt=function(e,a){for(var n=-1,o=null==e?0:e.length;++n<o;)if(a(e[n],n,e))return!0;return!1};var vt=c(4411);const de=function(e,a,n,o,r,i){var s=1&n,u=e.length,p=a.length;if(u!=p&&!(s&&p>u))return!1;var l=i.get(e),f=i.get(a);if(l&&f)return l==a&&f==e;var _=-1,d=!0,T=2&n?new yt.Z:void 0;for(i.set(e,a),i.set(a,e);++_<u;){var P=e[_],v=a[_];if(o)var A=s?o(v,P,_,a,e,i):o(P,v,_,e,a,i);if(void 0!==A){if(A)continue;d=!1;break}if(T){if(!bt(a,function(h,S){if(!(0,vt.Z)(T,S)&&(P===h||r(P,h,n,o,i)))return T.push(S)})){d=!1;break}}else if(P!==v&&!r(P,v,n,o,i)){d=!1;break}}return i.delete(e),i.delete(a),d};var me=c(5770),O=c(309);const _e=O.Z.Uint8Array;var fe=c(6224);const ht=function(e){var a=-1,n=Array(e.size);return e.forEach(function(o,r){n[++a]=[r,o]}),n},zt=function(e){var a=-1,n=Array(e.size);return e.forEach(function(o){n[++a]=o}),n};var ye=me.Z?me.Z.prototype:void 0,$=ye?ye.valueOf:void 0;var Rt=c(7052),Z=c(4654);var Xt=Object.prototype.propertyIsEnumerable,Pe=Object.getOwnPropertySymbols;const en=Pe?function(e){return null==e?[]:(e=Object(e),function(e,a){for(var n=-1,o=null==e?0:e.length,r=0,i=[];++n<o;){var s=e[n];a(s,n,e)&&(i[r++]=s)}return i}(Pe(e),function(a){return Xt.call(e,a)}))}:function(){return[]};var an=c(4671),be="object"==typeof exports&&exports&&!exports.nodeType&&exports,ve=be&&"object"==typeof module&&module&&!module.nodeType&&module,Te=ve&&ve.exports===be?O.Z.Buffer:void 0;const X=(Te?Te.isBuffer:void 0)||function(){return!1};var Ie=c(8078),V=c(7624),ln=c(2010),ee=c(6539),g={};g["[object Float32Array]"]=g["[object Float64Array]"]=g["[object Int8Array]"]=g["[object Int16Array]"]=g["[object Int32Array]"]=g["[object Uint8Array]"]=g["[object Uint8ClampedArray]"]=g["[object Uint16Array]"]=g["[object Uint32Array]"]=!0,g["[object Arguments]"]=g["[object Array]"]=g["[object ArrayBuffer]"]=g["[object Boolean]"]=g["[object DataView]"]=g["[object Date]"]=g["[object Error]"]=g["[object Function]"]=g["[object Map]"]=g["[object Number]"]=g["[object Object]"]=g["[object RegExp]"]=g["[object Set]"]=g["[object String]"]=g["[object WeakMap]"]=!1;var Ae=c(1162),kn=c(7746),Ze="object"==typeof exports&&exports&&!exports.nodeType&&exports,k=Ze&&"object"==typeof module&&module&&!module.nodeType&&module,te=k&&k.exports===Ze&&kn.Z.process,Ln=function(){try{return k&&k.require&&k.require("util").types||te&&te.binding&&te.binding("util")}catch(a){}}(),he=Ln&&Ln.isTypedArray;const Se=he?(0,Ae.Z)(he):function(e){return(0,ee.Z)(e)&&(0,ln.Z)(e.length)&&!!g[(0,V.Z)(e)]};var Qn=Object.prototype.hasOwnProperty;const Rn=function(e,a){var n=(0,Z.Z)(e),o=!n&&(0,an.Z)(e),r=!n&&!o&&X(e),i=!n&&!o&&!r&&Se(e),s=n||o||r||i,u=s?function(e,a){for(var n=-1,o=Array(e);++n<e;)o[n]=a(n);return o}(e.length,String):[],p=u.length;for(var l in e)(a||Qn.call(e,l))&&(!s||!("length"==l||r&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||(0,Ie.Z)(l,p)))&&u.push(l);return u};var Yn=Object.prototype;var e,a;const Kn=(e=Object.keys,a=Object,function(n){return e(a(n))});var Xn=Object.prototype.hasOwnProperty;const ea=function(e){if(!function(e){var a=e&&e.constructor;return e===("function"==typeof a&&a.prototype||Yn)}(e))return Kn(e);var a=[];for(var n in Object(e))Xn.call(e,n)&&"constructor"!=n&&a.push(n);return a};var E=c(8402);const ne=function(e){return(0,E.Z)(e)?Rn(e):ea(e)},ze=function(e){return function(e,a,n){var o=a(e);return(0,Z.Z)(e)?o:(0,Rt.Z)(o,n(e))}(e,ne,en)};var ia=Object.prototype.hasOwnProperty;var N=c(4553);const ae=(0,N.Z)(O.Z,"DataView"),oe=(0,N.Z)(O.Z,"Promise"),ie=(0,N.Z)(O.Z,"Set"),re=(0,N.Z)(O.Z,"WeakMap");var w=c(2035),je="[object Map]",De="[object Promise]",Oe="[object Set]",we="[object WeakMap]",Me="[object DataView]",da=(0,w.Z)(ae),ma=(0,w.Z)(U.Z),_a=(0,w.Z)(oe),fa=(0,w.Z)(ie),ya=(0,w.Z)(re),C=V.Z;(ae&&C(new ae(new ArrayBuffer(1)))!=Me||U.Z&&C(new U.Z)!=je||oe&&C(oe.resolve())!=De||ie&&C(new ie)!=Oe||re&&C(new re)!=we)&&(C=function(e){var a=(0,V.Z)(e),n="[object Object]"==a?e.constructor:void 0,o=n?(0,w.Z)(n):"";if(o)switch(o){case da:return Me;case ma:return je;case _a:return De;case fa:return Oe;case ya:return we}return a});const xe=C;var Fe="[object Arguments]",Be="[object Array]",Q="[object Object]",ke=Object.prototype.hasOwnProperty;const Ta=function(e,a,n,o,r,i){var s=(0,Z.Z)(e),u=(0,Z.Z)(a),p=s?Be:xe(e),l=u?Be:xe(a),f=(p=p==Fe?Q:p)==Q,_=(l=l==Fe?Q:l)==Q,d=p==l;if(d&&X(e)){if(!X(a))return!1;s=!0,f=!1}if(d&&!f)return i||(i=new L),s||Se(e)?de(e,a,n,o,r,i):function(e,a,n,o,r,i,s){switch(n){case"[object DataView]":if(e.byteLength!=a.byteLength||e.byteOffset!=a.byteOffset)return!1;e=e.buffer,a=a.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=a.byteLength||!i(new _e(e),new _e(a)));case"[object Boolean]":case"[object Date]":case"[object Number]":return(0,fe.Z)(+e,+a);case"[object Error]":return e.name==a.name&&e.message==a.message;case"[object RegExp]":case"[object String]":return e==a+"";case"[object Map]":var u=ht;case"[object Set]":if(u||(u=zt),e.size!=a.size&&!(1&o))return!1;var l=s.get(e);if(l)return l==a;o|=2,s.set(e,a);var f=de(u(e),u(a),o,r,i,s);return s.delete(e),f;case"[object Symbol]":if($)return $.call(e)==$.call(a)}return!1}(e,a,p,n,o,r,i);if(!(1&n)){var T=f&&ke.call(e,"__wrapped__"),P=_&&ke.call(a,"__wrapped__");if(T||P){var v=T?e.value():e,A=P?a.value():a;return i||(i=new L),r(v,A,n,o,i)}}return!!d&&(i||(i=new L),function(e,a,n,o,r,i){var s=1&n,u=ze(e),p=u.length;if(p!=ze(a).length&&!s)return!1;for(var _=p;_--;){var d=u[_];if(!(s?d in a:ia.call(a,d)))return!1}var T=i.get(e),P=i.get(a);if(T&&P)return T==a&&P==e;var v=!0;i.set(e,a),i.set(a,e);for(var A=s;++_<p;){var h=e[d=u[_]],S=a[d];if(o)var Ve=s?o(S,h,d,a,e,i):o(h,S,d,e,a,i);if(!(void 0===Ve?h===S||r(h,S,n,o,i):Ve)){v=!1;break}A||(A="constructor"==d)}if(v&&!A){var R=e.constructor,Y=a.constructor;R!=Y&&"constructor"in e&&"constructor"in a&&!("function"==typeof R&&R instanceof R&&"function"==typeof Y&&Y instanceof Y)&&(v=!1)}return i.delete(e),i.delete(a),v}(e,a,n,o,r,i))},Le=function Ue(e,a,n,o,r){return e===a||(null==e||null==a||!(0,ee.Z)(e)&&!(0,ee.Z)(a)?e!=e&&a!=a:Ta(e,a,n,o,Ue,r))};var Ee=c(4214);const Ne=function(e){return e==e&&!(0,Ee.Z)(e)},Qe=function(e,a){return function(n){return null!=n&&n[e]===a&&(void 0!==a||e in Object(n))}},Oa=function(e){var a=function(e){for(var a=ne(e),n=a.length;n--;){var o=a[n],r=e[o];a[n]=[o,r,Ne(r)]}return a}(e);return 1==a.length&&a[0][2]?Qe(a[0][0],a[0][1]):function(n){return n===e||function(e,a,n,o){var r=n.length,i=r,s=!o;if(null==e)return!i;for(e=Object(e);r--;){var u=n[r];if(s&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++r<i;){var p=(u=n[r])[0],l=e[p],f=u[1];if(s&&u[2]){if(void 0===l&&!(p in e))return!1}else{var _=new L;if(o)var d=o(l,f,p,e,a,_);if(!(void 0===d?Le(f,l,3,o,_):d))return!1}}return!0}(n,e,a)}};var xa=c(4478),Je=c(5264),Re=c(2753);const Ua=function(e,a){return(0,Je.Z)(e)&&Ne(a)?Qe((0,Re.Z)(e),a):function(n){var o=function(e,a,n){var o=null==e?void 0:(0,H.Z)(e,a);return void 0===o?n:o}(n,e);return void 0===o&&o===a?(0,xa.Z)(n,e):Le(a,o,3)}};var Ye=c(34);const Ra=function(e){return(0,Je.Z)(e)?function(e){return function(a){return null==a?void 0:a[e]}}((0,Re.Z)(e)):function(e){return function(a){return(0,H.Z)(a,e)}}(e)},qe=function(e){return"function"==typeof e?e:null==e?Ye.Z:"object"==typeof e?(0,Z.Z)(e)?Ua(e[0],e[1]):Oa(e):Ra(e)},Wa=function(a,n,o){for(var r=-1,i=Object(a),s=o(a),u=s.length;u--;){var p=s[++r];if(!1===n(i[p],p,i))break}return a},Ge=function(n,o){if(null==n)return n;if(!(0,E.Z)(n))return function(e,a){return e&&Wa(e,a,ne)}(n,o);for(var r=n.length,i=-1,s=Object(n);++i<r&&!1!==o(s[i],i,s););return n};var We=c(3982);const oo=function(e,a){if(e!==a){var n=void 0!==e,o=null===e,r=e==e,i=(0,We.Z)(e),s=void 0!==a,u=null===a,p=a==a,l=(0,We.Z)(a);if(!u&&!l&&!i&&e>a||i&&s&&p&&!u&&!l||o&&s&&p||!n&&p||!r)return 1;if(!o&&!i&&!l&&e<a||l&&n&&r&&!o&&!i||u&&n&&r||!s&&r||!p)return-1}return 0},co=function(e,a,n){a=a.length?(0,W.Z)(a,function(i){return(0,Z.Z)(i)?function(s){return(0,H.Z)(s,1===i.length?i[0]:i)}:i}):[Ye.Z];var o=-1;return a=(0,W.Z)(a,(0,Ae.Z)(qe)),function(e,a){var n=e.length;for(e.sort(a);n--;)e[n]=e[n].value;return e}(function(e,a){var n=-1,o=(0,E.Z)(e)?Array(e.length):[];return Ge(e,function(r,i,s){o[++n]=a(r,i,s)}),o}(e,function(i,s,u){return{criteria:(0,W.Z)(a,function(l){return l(i)}),index:++o,value:i}}),function(i,s){return function(e,a,n){for(var o=-1,r=e.criteria,i=a.criteria,s=r.length,u=n.length;++o<s;){var p=oo(r[o],i[o]);if(p)return o>=u?p:p*("desc"==n[o]?-1:1)}return e.index-a.index}(i,s,n)})};var uo=c(2137);const He=function(e,a,n){if(!(0,Ee.Z)(n))return!1;var o=typeof a;return!!("number"==o?(0,E.Z)(n)&&(0,Ie.Z)(a,n.length):"string"==o&&a in n)&&(0,fe.Z)(n[a],e)},go=(0,uo.Z)(function(e,a){if(null==e)return[];var n=a.length;return n>1&&He(e,a[0],a[1])?a=[]:n>2&&He(a[0],a[1],a[2])&&(a=[a[0]]),co(e,(0,ot.Z)(a,1),[])});var mo=c(8910),_o=c(2951);const yo=function(e,a,n,o){for(var r=-1,i=null==e?0:e.length;++r<i;){var s=e[r];a(o,s,n(s),e)}return o},bo=function(e,a,n,o){return Ge(e,function(r,i,s){a(o,r,n(r),s)}),o};var Ao=Object.prototype.hasOwnProperty;const Co=function(e,a){return function(n,o){var i={};return((0,Z.Z)(n)?yo:bo)(n,e,qe(o),i)}}(function(e,a,n){Ao.call(e,n)?e[n].push(a):(0,_o.Z)(e,n,[a])});class ho{constructor(a,n){var o,r,i;this.inputs=a,this.outputs=n,this.itemName=null!==(r=null===(o=a[0])||void 0===o?void 0:o.itemName)&&void 0!==r?r:"",this.amount=this.getAmount(a,n),this.outputProductionIndex=null===(i=n[0])||void 0===i?void 0:i.parent.parent.index}getAmount(a,n){return a.reduce((i,s)=>{var u;return i+(null!==(u=s.parent.parent.multiply(s.amount))&&void 0!==u?u:0)},0)-n.reduce((i,s)=>{var u;return i+(null!==(u=s.parent.parent.multiply(s.amount))&&void 0!==u?u:0)},0)}}let So=(()=>{class e{transform(n){const o=this.groupByName(n,"outputs"),i=Object.values(this.groupByName(n,"inputs")).map(s=>{var u;return new ho(s,null!==(u=o[s[0].itemName])&&void 0!==u?u:[])});return go(i,"itemName")}groupByName(n,o){const r=(0,mo.Z)(n.map(i=>i.recipe[o]));return Co(r,"itemName")}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=t.Yjl({name:"resolveProduction",type:e,pure:!0}),e})();function zo(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){t.CHM(n);const r=t.oxw(2).$implicit;return t.oxw(2).addProduction(r.itemName,r.amount)}),t._UZ(1,"i",10),t._uU(2," Add "),t.qZA()}}function jo(e,a){if(1&e&&(t.ynx(0),t.YNc(1,zo,3,0,"button",8),t.BQk()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",n.amount>0)}}function Do(e,a){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",11),t.NdJ("click",function(){t.CHM(n);const r=t.oxw().$implicit;return t.oxw(2).editProduction(r.outputProductionIndex)}),t._UZ(2,"i",12),t._uU(3," Edit "),t.qZA(),t.BQk()}if(2&e){const n=t.oxw().$implicit,o=t.oxw().ngIf;t.xp6(1),t.Q6J("nzType",o.edit&&n.outputProductionIndex===o.edit.index?"primary":"link")}}function Oo(e,a){if(1&e&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._UZ(2,"i",4),t._uU(3),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t.ynx(7,5),t.YNc(8,jo,2,1,"ng-container",6),t.YNc(9,Do,4,1,"ng-container",7),t.BQk(),t.qZA(),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.ekj("complete",n.amount<=0)("missing",n.amount>0),t.xp6(1),t.Q6J("nzType",n.amount>0?"close-circle":"check-circle"),t.xp6(1),t.hij(" ",n.amount.toFixed(1)," "),t.xp6(1),t.ekj("complete",n.amount<=0),t.xp6(1),t.Oqu(n.itemName),t.xp6(2),t.Q6J("ngSwitch",n.outputProductionIndex),t.xp6(1),t.Q6J("ngSwitchCase",void 0)}}function wo(e,a){if(1&e&&(t.TgZ(0,"nz-table",1,2),t.ALo(2,"resolveProduction"),t.TgZ(3,"thead"),t.TgZ(4,"tr"),t.TgZ(5,"th"),t._uU(6,"Diff"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Input"),t.qZA(),t._UZ(9,"th"),t.qZA(),t.qZA(),t.TgZ(10,"tbody"),t.YNc(11,Oo,10,11,"tr",3),t.qZA(),t.qZA()),2&e){const n=t.MAs(1),o=t.oxw();t.Q6J("nzData",t.lcZ(2,4,o.productions))("nzShowPagination",!1),t.xp6(11),t.Q6J("ngForOf",n.data)("ngForTrackBy",o.trackByService.index)}}const Mo=function(e){return{edit:e}};let xo=(()=>{class e{constructor(n,o){this.store=n,this.trackByService=o,this.edit$=this.store.select(q)}addProduction(n,o){this.store.dispatch((0,b.uS)({itemPackage:{itemName:n,amount:Math.abs(o)||1}}))}editProduction(n){this.store.dispatch((0,b.HP)({index:n}))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(y.yh),t.Y36(M))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-production-input-todo"]],inputs:{productions:"productions"},decls:3,vars:5,consts:[["nzTableLayout","fixed","nzSize","small",3,"nzData","nzShowPagination",4,"ngIf"],["nzTableLayout","fixed","nzSize","small",3,"nzData","nzShowPagination"],["fixedTable",""],[4,"ngFor","ngForOf","ngForTrackBy"],["nz-icon","","nzTheme","outline",3,"nzType"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["nz-button","","nzType","link",3,"click",4,"ngIf"],["nz-button","","nzType","link",3,"click"],["nz-icon","","nzType","plus","nzTheme","outline"],["nz-button","",3,"nzType","click"],["nz-icon","","nzType","edit","nzTheme","outline"]],template:function(n,o){1&n&&(t.YNc(0,wo,12,6,"nz-table",0),t.ALo(1,"async"),t._UZ(2,"nz-divider")),2&n&&t.Q6J("ngIf",t.VKq(3,Mo,t.lcZ(1,1,o.edit$)))},directives:[m.O5,G.g,z.N8,z.Om,z.$Z,z.Uo,z._C,z.p0,m.sg,j.w,x.Ls,m.RF,m.n9,m.ED,F.ix,B.dQ],pipes:[m.Ov,So],styles:[".complete[_ngcontent-%COMP%]{color:#aaa}.missing[_ngcontent-%COMP%]{color:#ff7875}"]}),e})(),Fo=(()=>{class e{constructor(n){this.store=n,this.addProduction=b.YI}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(y.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-action-add-production"]],decls:3,vars:0,consts:[["nz-button","","nzType","primary","nzGhost","",3,"click"],["nz-icon","","nzType","plus","nzTheme","outline"]],template:function(n,o){1&n&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return o.store.dispatch(o.addProduction())}),t._UZ(1,"i",1),t._uU(2," Add Production\n"),t.qZA())},directives:[F.ix,B.dQ,j.w,x.Ls],styles:[""]}),e})(),Bo=(()=>{class e{constructor(n){this.store=n,this.clearProduction=b.gS}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(y.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-action-clear-production"]],decls:3,vars:1,consts:[["nz-button","","nzDanger","",3,"nzType","click"],["nz-icon","","nzType","delete","nzTheme","outline"]],template:function(n,o){1&n&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return o.store.dispatch(o.clearProduction())}),t._UZ(1,"i",1),t._uU(2," Clear Production\n"),t.qZA()),2&n&&t.Q6J("nzType","default")},directives:[F.ix,B.dQ,j.w,x.Ls],styles:[""]}),e})();var se=c(7018);const Ke=[{label:"Limestone",image:"/assets/img/update4/Stone_256.jpg"},{label:"Iron Ore",image:"/assets/img/update4/IconDesc_iron_new_256.jpg"},{label:"Copper Ore",image:"/assets/img/update4/IconDesc_copper_new_256.jpg"},{label:"Caterium Ore",image:"/assets/img/update4/CateriumOre_256.jpg"},{label:"Coal",image:"/assets/img/update4/CoalOre_256.jpg"},{label:"Raw Quartz",image:"/assets/img/update4/IconDesc_QuartzCrystal_256.jpg"},{label:"Sulfur",image:"/assets/img/update4/Sulfur_256.jpg"},{label:"Bauxite",image:"/assets/img/update4/Bauxite_256.jpg"},{label:"S.A.M. Ore",image:"/assets/img/update4/SAMOre_256.jpg"},{label:"Uranium",image:"/assets/img/update4/UraniumOre_256.jpg"},{label:"Water",image:"/assets/img/update4/LiquidWater_Pipe_256.jpg"},{label:"Crude Oil",image:"/assets/img/update4/LiquidOil_Pipe_256.jpg"},{label:"Heavy Oil Residue",image:"/assets/img/update4/IconDesc_LiquidHeavyOilResidue_Pipe_256.jpg"},{label:"Fuel",image:"/assets/img/update4/IconDesc_LiquidFuel_Pipe_256.jpg"},{label:"Liquid Biofuel",image:"/assets/img/update4/IconDesc_LiquidBiofuel_Pipe_256.jpg"},{label:"Turbofuel",image:"/assets/img/update4/IconDesc_LiquidTurboFuel_Pipe_256.jpg"},{label:"Alumina Solution",image:"/assets/img/update4/LiquidAlumina_Pipe_256.jpg"},{label:"Sulfuric Acid",image:"/assets/img/update4/IconDesc_LiquidSulfuricAcid_Pipe_256.jpg"},{label:"Nitric Acid",image:"/assets/img/update4/IconDesc_NitricAcid_256.jpg"},{label:"Nitrogen Gas",image:"/assets/img/update4/IconDesc_NitricAcid_256.jpg"},{label:"Concrete",image:"/assets/img/update4/IconDesc_Concrete_256.jpg"},{label:"Iron Ingot",image:"/assets/img/update4/IconDesc_IronIngot_256.jpg"},{label:"Copper Ingot",image:"/assets/img/update4/IconDesc_CopperIngot_256.jpg"},{label:"Caterium Ingot",image:"/assets/img/update4/IconDesc_CateriumIngot_256.jpg"},{label:"Steel Ingot",image:"/assets/img/update4/IconDesc_SteelIngot_256.jpg"},{label:"Aluminum Ingot",image:"/assets/img/update4/IconDesc_AluminiumIngot_256.jpg"},{label:"Quartz Crystal",image:"/assets/img/update4/IconDesc_QuartzResource_256.jpg"},{label:"Polymer Resin",image:"/assets/img/update4/IconDesc_PolymerResin_256.jpg"},{label:"Petroleum Coke",image:"/assets/img/update4/IconDesc_PetroleumCoke_256.jpg"},{label:"Aluminum Scrap",image:"/assets/img/update4/IconDesc_AluminiumScrap_256.jpg"},{label:"Copper Powder",image:"/assets/img/update4/IconDesc_CopperDust_256.jpg"},{label:"Aluminum Casing",image:"/assets/img/update4/IconDesc_AluminiumCasing_256.jpg"},{label:"Empty Fluid Tank",image:"/assets/img/update4/IconDesc_PressureTank_256.jpg"},{label:"Silica",image:"/assets/img/update4/IconDesc_Silica_256.jpg"},{label:"Black Powder",image:"/assets/img/update4/IconDesc_Gunpowder_256.jpg"},{label:"Wire",image:"/assets/img/update4/IconDesc_Wire_256.jpg"},{label:"Cable",image:"/assets/img/update4/IconDesc_Cables_256.jpg"},{label:"Iron Rod",image:"/assets/img/update4/IconDesc_IronRods_256.jpg"},{label:"Screw",image:"/assets/img/update4/IconDesc_IronScrews_256.jpg"},{label:"Iron Plate",image:"/assets/img/update4/IconDesc_IronPlates_256.jpg"},{label:"Reinforced Iron Plate",image:"/assets/img/update4/IconDesc_ReinforcedIronPlates_256.jpg"},{label:"Copper Sheet",image:"/assets/img/update4/IconDesc_CopperSheet_256.jpg"},{label:"Alclad Aluminum Sheet",image:"/assets/img/update4/IconDesc_AluminiumSheet_256.jpg"},{label:"Plastic",image:"/assets/img/update4/IconDesc_Plastic_256.jpg"},{label:"Rubber",image:"/assets/img/update4/IconDesc_Rubber_256.jpg"},{label:"Packaged Water",image:"/assets/img/update4/IconDesc_PackagedWater_256.jpg"},{label:"Packaged Alumina Solution",image:"/assets/img/update4/IconDesc_PackagedAluminaSolution_256.jpg"},{label:"Packaged Sulfuric Acid",image:"/assets/img/update4/IconDesc_PckagedSulphuricAcid_256.jpg"},{label:"Packaged Nitric Acid",image:"/assets/img/update4/IconDesc_PackagedNitricAcid_256.jpg"},{label:"Packaged Nitrogen Gas",image:"/assets/img/update4/IconDesc_PackagedNitrogen_256.jpg"},{label:"Steel Pipe",image:"/assets/img/update4/IconDesc_SteelPipe_256.jpg"},{label:"Steel Beam",image:"/assets/img/update4/IconDesc_SteelBeam_256.jpg"},{label:"Encased Industrial Beam",image:"/assets/img/update4/IconDesc_EncasedSteelBeam_256.jpg"},{label:"Green Power Slug",image:"/assets/img/update4/PowerSlugGreen_256.jpg"},{label:"Yellow Power Slug",image:"/assets/img/update4/PowerSlugYellow_256.jpg"},{label:"Purple Power Slug",image:"/assets/img/update4/PowerSlugPurple_256.jpg"},{label:"Flower Petals",image:"/assets/img/update4/FlowerPetals_Final_256.jpg"},{label:"Crystal Oscillator",image:"/assets/img/update4/IconDesc_CrystalOscillator_256.jpg"},{label:"Empty Canister",image:"/assets/img/update4/IconDesc_EmptyCannister_256.jpg"},{label:"Fabric",image:"/assets/img/update4/IconDesc_Fabric_256.jpg"},{label:"Modular Frame",image:"/assets/img/update4/IconDesc_ModularFrame_256.jpg"},{label:"Heavy Modular Frame",image:"/assets/img/update4/IconDesc_ModularFrameHeavy_256.jpg"},{label:"Pressure Conversion Cube",image:"/assets/img/update4/IconDesc_ConversionCube_256.jpg"},{label:"Fused Modular Frame",image:"/assets/img/update4/IconDesc_FusedModularFrame_256.jpg"},{label:"Rotor",image:"/assets/img/update4/IconDesc_Rotor_256.jpg"},{label:"Stator",image:"/assets/img/update4/IconDesc_Stator_256.jpg"},{label:"Motor",image:"/assets/img/update4/IconDesc_Engine_256.jpg"},{label:"Quickwire",image:"/assets/img/update4/IconDesc_Quickwire_256.jpg"},{label:"Circuit Board",image:"/assets/img/update4/IconDesc_CircuitBoard_256.jpg"},{label:"Computer",image:"/assets/img/update4/IconDesc_Computer_256.jpg"},{label:"AI Limiter",image:"/assets/img/update4/IconDesc_AILimiter_256.jpg"},{label:"High-Speed Connector",image:"/assets/img/update4/IconDesc_HighSpeedConnector_256.jpg"},{label:"Supercomputer",image:"/assets/img/update4/IconDesc_SuperComputer_256.jpg"},{label:"Battery",image:"/assets/img/update4/IconDesc_Battery_256.jpg"},{label:"Heat Sink",image:"/assets/img/update4/IconDesc_Heatsink_256.jpg"},{label:"Radio Control Unit",image:"/assets/img/update4/IconDesc_RadioControlUnit_256.jpg"},{label:"Turbo Motor",image:"/assets/img/update4/IconDesc_TurboMotor_256.jpg"},{label:"Electromagnetic Control Rod",image:"/assets/img/update4/IconDesc_ElectromagneticControlRod_256.jpg"},{label:"Encased Uranium Cell",image:"/assets/img/update4/IconDesc_NuclearCell_256.jpg"},{label:"Non-fissile Uranium",image:"/assets/img/update4/IconDesc_NonFissileUranium_256.jpg"},{label:"Plutonium Pellet",image:"/assets/img/update4/IconDesc_PlutoniumPellet_256.jpg"},{label:"Encased Plutonium Cell",image:"/assets/img/update4/IconDesc_EncasedPlutoniumCell_256.jpg"},{label:"Cooling System",image:"/assets/img/update4/IconDesc_CoolingSystem_256.jpg"},{label:"Quantum Computer",image:"/assets/img/update4/IconDesc_QuantumComputer_256.jpg"},{label:"Superposition Oscillator",image:"/assets/img/update4/IconDesc_SuperPositionOscillator_256.jpg"},{label:"Beacon",image:"/assets/img/update4/IconDesc_Beacon_256.jpg"},{label:"Compacted Coal",image:"/assets/img/update4/CompactedCoal_256.jpg"},{label:"Leaves",image:"/assets/img/update4/IconDesc_Leaves_256.jpg"},{label:"Mycelia",image:"/assets/img/update4/IconDesc_Mycelia_256.jpg"},{label:"Wood",image:"/assets/img/update4/IconDesc_Wood_256.jpg"},{label:"Biomass",image:"/assets/img/update4/IconDesc_Biomass_Final_256.jpg"},{label:"Packaged Oil",image:"/assets/img/update4/Oil_256.jpg"},{label:"Packaged Heavy Oil Residue",image:"/assets/img/update4/OilResidue_256.jpg"},{label:"Solid Biofuel",image:"/assets/img/update4/IconDesc_SolidBiofuel_256.jpg"},{label:"Packaged Fuel",image:"/assets/img/update4/IconDesc_Fuel_256.jpg"},{label:"Packaged Liquid Biofuel",image:"/assets/img/update4/IconDesc_LiquidBiofuel_256.jpg"},{label:"Packaged Turbofuel",image:"/assets/img/update4/IconDesc_TurboFuel_256.jpg"},{label:"Uranium Fuel Rod",image:"/assets/img/update4/IconDesc_NuclearFuelRod_256.jpg"},{label:"Plutonium Fuel Rod",image:"/assets/img/update4/IconDesc_PlutoniumFuelRod_256.jpg"},{label:"Nobelisk",image:"/assets/img/update4/IconDesc_Explosive_256.jpg"},{label:"Gas Filter",image:"/assets/img/update4/IconDesc_GasMaskFilter_256.jpg"},{label:"Color Cartridge",image:"/assets/img/update4/IconDesc_ColorCartridge_256.jpg"},{label:"Rifle Cartridge",image:"/assets/img/update4/Rifle_Magazine_256.jpg"},{label:"Spiked Rebar",image:"/assets/img/update4/IconDesc_SpikedRebar_256.jpg"},{label:"Iodine Infused Filter",image:"/assets/img/update4/IconDesc_HazmatFilter_256.jpg"},{label:"Power Shard",image:"/assets/img/update4/PowerShard_256.jpg"},{label:"FICSIT Coupon",image:"/assets/img/update4/IconDesc_Ficsit_Coupon_256.jpg"},{label:"Smart Plating",image:"/assets/img/update4/IconDesc_SpelevatorPart_1_256.jpg"},{label:"Versatile Framework",image:"/assets/img/update4/IconDesc_SpelevatorPart_2_256.jpg"},{label:"Automated Wiring",image:"/assets/img/update4/SpelevatorPart_3_256.jpg"},{label:"Modular Engine",image:"/assets/img/update4/IconDesc_SpelevatorPart_4_256.jpg"},{label:"Adaptive Control Unit",image:"/assets/img/update4/IconDesc_SpelevatorPart_5_256.jpg"},{label:"Assembly Director System",image:"/assets/img/update4/IconDesc_AssemblyDirectorSystem_256.jpg"},{label:"Magnetic Field Generator",image:"/assets/img/update4/IconDesc_MagneticFieldGenerator_256.jpg"},{label:"Thermal Propulsion Rocket",image:"/assets/img/update4/IconDesc_ThermalPropulsionRocket_256.jpg"},{label:"Nuclear Pasta",image:"/assets/img/update4/IconDesc_NuclearPasta_256.jpg"},{label:"Uranium Waste",image:"/assets/img/update4/IconDesc_NuclearWaste_256.jpg"},{label:"Plutonium Waste",image:"/assets/img/update4/IconDesc_PlutoniumWaste_256.jpg"}],ko=new Map(Ke.map(e=>[e.label,e.image])),Uo=Ke.map(e=>e.label);let Lo=(()=>{class e{transform(n){return ko.get(n.itemName)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=t.Yjl({name:"satisfactoriyItemImage",type:e,pure:!0}),e})();function Eo(e,a){if(1&e&&(t.ynx(0),t._UZ(1,"img",1),t.BQk()),2&e){const n=a.ngIf,o=t.oxw();t.xp6(1),t.Q6J("src",n,t.LSH)("alt",o.itemPackage.itemName)}}let No=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-satisfactory-item-image"]],inputs:{itemPackage:"itemPackage"},decls:2,vars:3,consts:[[4,"ngIf"],[1,"img-fluid","mr-2",3,"src","alt"]],template:function(n,o){1&n&&(t.YNc(0,Eo,2,2,"ng-container",0),t.ALo(1,"satisfactoriyItemImage")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,o.itemPackage))},directives:[m.O5],pipes:[Lo],styles:[""]}),e})(),$e=(()=>{class e{transform(n){var o,r;return null!==(r=null===(o=null==n?void 0:n.parent.parent.multiply(null==n?void 0:n.amount))||void 0===o?void 0:o.toFixed(1))&&void 0!==r?r:""}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=t.Yjl({name:"amountWithModifiers",type:e,pure:!0}),e})(),Qo=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-satisfactory-item"]],inputs:{itemPackage:"itemPackage"},decls:7,vars:5,consts:[[1,"text-center"],[3,"itemPackage"],[1,"text-center","mt-2"],[1,"text-center","text-muted"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"app-satisfactory-item-image",1),t.qZA(),t.TgZ(2,"div",2),t._uU(3),t.ALo(4,"amountWithModifiers"),t.qZA(),t.TgZ(5,"div",3),t._uU(6),t.qZA()),2&n&&(t.xp6(1),t.Q6J("itemPackage",o.itemPackage),t.xp6(2),t.Oqu(t.lcZ(4,3,o.itemPackage)),t.xp6(3),t.Oqu(o.itemPackage.itemName))},directives:[No],pipes:[$e],styles:[""]}),e})();function Jo(e,a){if(1&e&&(t.TgZ(0,"div",2),t.TgZ(1,"div",3),t._UZ(2,"app-satisfactory-item",4),t.qZA(),t.qZA()),2&e){const n=a.$implicit;t.xp6(2),t.Q6J("itemPackage",n)}}let Ro=(()=>{class e{constructor(n){this.trackByService=n,this.align="left"}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(M))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-satisfactory-items"]],inputs:{values:"values",align:"align"},decls:2,vars:4,consts:[[1,"row","mx-n1"],["class","col-6 px-1 d-flex",4,"ngFor","ngForOf","ngForTrackBy"],[1,"col-6","px-1","d-flex"],[1,"border","rounded","shadow-sm","d-flex","p-2"],[3,"itemPackage"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.YNc(1,Jo,3,1,"div",1),t.qZA()),2&n&&(t.ekj("justify-content-end","right"===o.align),t.xp6(1),t.Q6J("ngForOf",o.values)("ngForTrackBy",o.trackByService.index))},directives:[m.sg,Qo],styles:[""]}),e})(),Yo=(()=>{class e{transform(n){const o=[];100!==n.clockSpeed1&&o.push(n.clockSpeed1+"%"),100!==n.clockSpeed2&&o.push(n.clockSpeed2+"%");let i=n.machines+" "+(n.recipe.inputs.length?"Machine":"Belt")+(n.machines>=2?"s":"");return o.length&&(i+=" at "+o.join(" + ")),i}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=t.Yjl({name:"productionTitle",type:e,pure:!0}),e})();function qo(e,a){1&e&&(t.TgZ(0,"div",8),t._UZ(1,"i",9),t.qZA())}function Go(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){t.CHM(n);const r=t.oxw(2);return r.edit(r.production.index)}),t._UZ(1,"i",11),t._uU(2," Edit "),t.qZA()}if(2&e){const n=t.oxw().ngIf,o=t.oxw();t.Q6J("nzType",n.edit&&o.production.index===n.edit.index?"primary":"link")}}function Wo(e,a){if(1&e&&(t.ynx(0),t.TgZ(1,"nz-card",1),t.ALo(2,"productionTitle"),t.TgZ(3,"div",2),t.YNc(4,qo,2,0,"div",3),t.TgZ(5,"div",4),t._UZ(6,"app-satisfactory-items",5),t.qZA(),t.TgZ(7,"div",4),t._UZ(8,"app-satisfactory-items",6),t.qZA(),t.qZA(),t.qZA(),t.YNc(9,Go,3,1,"ng-template",null,7,t.W1O),t.BQk()),2&e){const n=a.ngIf,o=t.MAs(10),r=t.oxw();t.xp6(1),t.ekj("shadow",(null==n.edit?null:n.edit.index)===r.production.index),t.Q6J("nzTitle",t.lcZ(2,7,r.production))("nzExtra",o),t.xp6(3),t.Q6J("ngIf",r.production.recipe.inputs.length&&r.production.recipe.outputs.length),t.xp6(2),t.Q6J("values",r.production.recipe.inputs),t.xp6(2),t.Q6J("values",r.production.recipe.outputs)}}const Ho=function(e){return{edit:e}};let Ko=(()=>{class e{constructor(n){this.store=n,this.edit$=this.store.select(q)}edit(n){this.store.dispatch((0,b.HP)({index:n}))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(y.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-production-overview"]],inputs:{production:"production"},decls:2,vars:5,consts:[[4,"ngIf"],["nzSize","small","nzBorderless","",1,"mb-3",3,"nzTitle","nzExtra"],[1,"row","position-relative"],["class","text-center arrow-center",4,"ngIf"],[1,"col-6"],["align","left",3,"values"],["align","right",3,"values"],["extraTemplate",""],[1,"text-center","arrow-center"],["nz-icon","","nzType","arrow-right","nzTheme","outline"],["nz-button","",3,"nzType","click"],["nz-icon","","nzType","edit","nzTheme","outline"]],template:function(n,o){1&n&&(t.YNc(0,Wo,11,9,"ng-container",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.VKq(3,Ho,t.lcZ(1,1,o.edit$)))},directives:[m.O5,se.bd,Ro,j.w,x.Ls,F.ix,B.dQ],pipes:[m.Ov,Yo],styles:[".arrow-center[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-user-select:none;user-select:none}"]}),e})();var J=c(7674),I=c(665),ce=c(7190);let $o=(()=>{class e{transform(n,o){return o&&"string"==typeof o?n.filter(r=>-1!==r.toLowerCase().indexOf(o.toLowerCase())):n}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=t.Yjl({name:"filterCaseInsensitive",type:e,pure:!0}),e})();function Xo(e,a){if(1&e&&(t.TgZ(0,"nz-auto-option",3),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.Q6J("nzValue",n)("nzLabel",n),t.xp6(1),t.hij(" ",n," ")}}let Vo=(()=>{class e{constructor(n,o){this.store=n,this.trackByService=o,this.items=Uo}updateItemName(n,o){this.store.dispatch((0,b.JQ)({relation:o.unwrap(),itemPackage:{itemName:n}}))}addItemName(n){this.store.dispatch((0,b.re)({relation:this.recipe.unwrap(),target:this.target,itemPackage:{itemName:n}}))}remove(n){this.store.dispatch((0,b.hD)({relation:n.unwrap()}))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(y.yh),t.Y36(M))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-item"]],inputs:{recipe:"recipe",target:"target",itemPackage:"itemPackage"},decls:5,vars:7,consts:[["placeholder","Item","nz-input","",3,"ngModel","nzAutocomplete","ngModelChange","blur"],["auto",""],[3,"nzValue","nzLabel",4,"ngFor","ngForOf","ngForTrackBy"],[3,"nzValue","nzLabel"]],template:function(n,o){if(1&n&&(t.TgZ(0,"input",0),t.NdJ("ngModelChange",function(i){return o.itemPackage?o.updateItemName(i,o.itemPackage):o.addItemName(i)})("blur",function(){return""===(null==o.itemPackage?null:o.itemPackage.itemName)&&o.remove(o.itemPackage)}),t.qZA(),t.TgZ(1,"nz-autocomplete",null,1),t.YNc(3,Xo,2,3,"nz-auto-option",2),t.ALo(4,"filterCaseInsensitive"),t.qZA()),2&n){const r=t.MAs(2);let i;t.Q6J("ngModel",null!==(i=null==o.itemPackage?null:o.itemPackage.itemName)&&void 0!==i?i:null)("nzAutocomplete",r),t.xp6(3),t.Q6J("ngForOf",t.xi3(4,4,o.items,null==o.itemPackage?null:o.itemPackage.itemName))("ngForTrackBy",o.trackByService.index)}},directives:[J.Zp,I.Fj,ce.Pf,I.JJ,I.On,ce.gi,m.sg,ce.NB],pipes:[$o],styles:[""]}),e})();var Xe=c(343);let ei=(()=>{class e{constructor(n){this.store=n}updateItemPackageAmount(n,o){this.store.dispatch((0,b.JQ)({relation:o.unwrap(),itemPackage:{amount:n}}))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(y.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-item-package"]],inputs:{recipe:"recipe",target:"target",itemPackage:"itemPackage"},decls:5,vars:10,consts:[["nzCompact",""],[3,"itemPackage","recipe","target"],[3,"ngModel","nzDisabled","nzMin","nzStep","ngModelChange"],["nz-input","","disabled","",2,"width","70px",3,"ngModel"]],template:function(n,o){if(1&n&&(t.TgZ(0,"nz-input-group",0),t._UZ(1,"app-item",1),t.TgZ(2,"nz-input-number",2),t.NdJ("ngModelChange",function(i){return o.itemPackage&&o.updateItemPackageAmount(i,o.itemPackage)}),t.qZA(),t._UZ(3,"input",3),t.ALo(4,"amountWithModifiers"),t.qZA()),2&n){let r;t.xp6(1),t.Q6J("itemPackage",o.itemPackage)("recipe",o.recipe)("target",o.target),t.xp6(1),t.Q6J("ngModel",null!==(r=null==o.itemPackage?null:o.itemPackage.amount)&&void 0!==r?r:null)("nzDisabled",!o.itemPackage)("nzMin",1)("nzStep",1),t.xp6(1),t.Q6J("ngModel",t.lcZ(4,8,o.itemPackage))}},directives:[j.w,J.gB,Vo,Xe._,I.JJ,I.On,J.Zp,I.Fj],pipes:[$e],styles:[""]}),e})(),ti=(()=>{class e{transform(n){return[...n,void 0]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=t.Yjl({name:"plusOneUndefined",type:e,pure:!0}),e})();function ni(e,a){if(1&e&&(t.TgZ(0,"div",2),t._UZ(1,"app-item-package",3),t.qZA()),2&e){const n=a.$implicit,o=t.oxw();t.xp6(1),t.Q6J("itemPackage",n)("recipe",o.production.recipe)("target",o.target)}}let ai=(()=>{class e{constructor(n){this.trackByService=n,this.title={inputs:"Input",outputs:"Output"}}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(M))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-production-input-or-output"]],inputs:{production:"production",target:"target"},decls:3,vars:5,consts:[["nzSize","small","nzBorderless","",3,"nzTitle"],["class","mb-2",4,"ngFor","ngForOf","ngForTrackBy"],[1,"mb-2"],[3,"itemPackage","recipe","target"]],template:function(n,o){1&n&&(t.TgZ(0,"nz-card",0),t.YNc(1,ni,2,3,"div",1),t.ALo(2,"plusOneUndefined"),t.qZA()),2&n&&(t.Q6J("nzTitle",o.title[o.target]),t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,3,o.production.recipe[o.target]))("ngForTrackBy",o.trackByService.index))},directives:[se.bd,m.sg,ei],pipes:[ti],styles:[""]}),e})(),oi=(()=>{class e{constructor(n){this.store=n}updateProduction(n,o){this.store.dispatch((0,b.cs)({relation:n.unwrap(),production:o}))}removeProduction(n){this.store.dispatch((0,b.dm)({relation:n.unwrap()}))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(y.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-production"]],inputs:{production:"production"},decls:16,vars:14,consts:[["nzSize","small",1,"shadow"],[3,"production","target"],["nzTitle","Modifier","nzSize","small","nzBorderless",""],["nzCompact","",1,"mb-2",3,"nzAddOnAfter"],[2,"width","100%",3,"nzMin","ngModel","ngModelChange"],["nzCompact","",3,"nzAddOnAfter"],["nz-button","","nzDanger","",3,"nzType","click"],["nz-icon","","nzType","delete","nzTheme","outline"]],template:function(n,o){1&n&&(t.TgZ(0,"nz-card",0),t._UZ(1,"app-production-input-or-output",1),t._UZ(2,"app-production-input-or-output",1),t.TgZ(3,"nz-card",2),t.TgZ(4,"nz-input-group",3),t.TgZ(5,"nz-input-number",4),t.NdJ("ngModelChange",function(i){return o.updateProduction(o.production,{machines:i||void 0})}),t.qZA(),t.qZA(),t._UZ(6,"br"),t.TgZ(7,"nz-input-group",3),t.TgZ(8,"nz-input-number",4),t.NdJ("ngModelChange",function(i){return o.updateProduction(o.production,{clockSpeed1:i||void 0})}),t.qZA(),t.qZA(),t._UZ(9,"br"),t.TgZ(10,"nz-input-group",5),t.TgZ(11,"nz-input-number",4),t.NdJ("ngModelChange",function(i){return o.updateProduction(o.production,{clockSpeed2:i||void 0})}),t.qZA(),t.qZA(),t.qZA(),t._UZ(12,"nz-divider"),t.TgZ(13,"button",6),t.NdJ("click",function(){return o.removeProduction(o.production)}),t._UZ(14,"i",7),t._uU(15," Remove "),t.qZA(),t.qZA()),2&n&&(t.xp6(1),t.Q6J("production",o.production)("target","inputs"),t.xp6(1),t.Q6J("production",o.production)("target","outputs"),t.xp6(2),t.Q6J("nzAddOnAfter","Machines"),t.xp6(1),t.Q6J("nzMin",1)("ngModel",o.production.machines),t.xp6(2),t.Q6J("nzAddOnAfter","% from Slugs"),t.xp6(1),t.Q6J("nzMin",1)("ngModel",o.production.clockSpeed1),t.xp6(2),t.Q6J("nzAddOnAfter","% from MK Upgrade"),t.xp6(1),t.Q6J("nzMin",1)("ngModel",o.production.clockSpeed2),t.xp6(2),t.Q6J("nzType","default"))},directives:[se.bd,ai,j.w,J.gB,Xe._,I.JJ,I.On,G.g,F.ix,B.dQ,x.Ls],styles:["nz-input-group[_ngcontent-%COMP%]{max-width:300px}"]}),e})();function ii(e,a){if(1&e&&(t.ynx(0),t._UZ(1,"app-production-overview",8),t.BQk()),2&e){const n=a.$implicit;t.xp6(1),t.Q6J("production",n)}}function ri(e,a){1&e&&t._UZ(0,"app-production",8),2&e&&t.Q6J("production",a.ngIf)}function si(e,a){if(1&e&&(t.TgZ(0,"div",2),t.TgZ(1,"div",3),t._UZ(2,"app-production-input-todo",4),t.YNc(3,ii,2,1,"ng-container",5),t._UZ(4,"nz-divider"),t._UZ(5,"app-action-add-production",6),t._UZ(6,"app-action-clear-production"),t.qZA(),t.TgZ(7,"div",3),t.YNc(8,ri,1,1,"app-production",7),t.ALo(9,"async"),t.qZA(),t.qZA()),2&e){const n=a.ngIf,o=t.oxw();t.xp6(2),t.Q6J("productions",n),t.xp6(1),t.Q6J("ngForOf",n)("ngForTrackBy",o.trackByService.index),t.xp6(5),t.Q6J("ngIf",t.lcZ(9,4,o.edit$))}}const ci=[{path:"",component:(()=>{class e{constructor(n,o){this.store=n,this.trackByService=o,this.productions$=this.store.select(ge),this.edit$=this.store.select(at)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(y.yh),t.Y36(M))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-default"]],decls:4,vars:3,consts:[[1,"my-3"],["class","row my-3",4,"ngIf"],[1,"row","my-3"],[1,"col-6"],[3,"productions"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"mr-2"],[3,"production",4,"ngIf"],[3,"production"]],template:function(n,o){1&n&&(t.TgZ(0,"h1",0),t._uU(1,"Satisfactory Production Planner"),t.qZA(),t.YNc(2,si,10,6,"div",1),t.ALo(3,"async")),2&n&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,1,o.productions$)))},directives:[m.O5,xo,m.sg,G.g,Fo,Bo,Ko,oi],pipes:[m.Ov],styles:[""]}),e})()}];let ui=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[le.Bz.forChild(ci)],le.Bz]}),e})(),li=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[m.ez,ui,et.m]]}),e})()}}]);