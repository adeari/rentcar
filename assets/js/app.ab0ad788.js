(function(a){function t(t){for(var i,s,o=t[0],l=t[1],w=t[2],u=0,c=[];u<o.length;u++)s=o[u],r[s]&&c.push(r[s][0]),r[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(a[i]=l[i]);d&&d(t);while(c.length)c.shift()();return n.push.apply(n,w||[]),e()}function e(){for(var a,t=0;t<n.length;t++){for(var e=n[t],i=!0,s=1;s<e.length;s++){var o=e[s];0!==r[o]&&(i=!1)}i&&(n.splice(t--,1),a=l(l.s=e[0]))}return a}var i={},s={app:0},r={app:0},n=[];function o(a){return l.p+"js/"+({}[a]||a)+"."+{"chunk-429dd060":"9c0cb283","chunk-ed8bcecc":"b88e885a"}[a]+".js"}function l(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.e=function(a){var t=[],e={"chunk-429dd060":1,"chunk-ed8bcecc":1};s[a]?t.push(s[a]):0!==s[a]&&e[a]&&t.push(s[a]=new Promise(function(t,e){for(var i="css/"+({}[a]||a)+"."+{"chunk-429dd060":"96b17500","chunk-ed8bcecc":"07f5fac6"}[a]+".css",r=l.p+i,n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var w=n[o],u=w.getAttribute("data-href")||w.getAttribute("href");if("stylesheet"===w.rel&&(u===i||u===r))return t()}var c=document.getElementsByTagName("style");for(o=0;o<c.length;o++){w=c[o],u=w.getAttribute("data-href");if(u===i||u===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var i=t&&t.target&&t.target.src||r,n=new Error("Loading CSS chunk "+a+" failed.\n("+i+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=i,delete s[a],d.parentNode.removeChild(d),e(n)},d.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(d)}).then(function(){s[a]=0}));var i=r[a];if(0!==i)if(i)t.push(i[2]);else{var n=new Promise(function(t,e){i=r[a]=[t,e]});t.push(i[2]=n);var w,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(a),w=function(t){u.onerror=u.onload=null,clearTimeout(c);var e=r[a];if(0!==e){if(e){var i=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,n=new Error("Loading chunk "+a+" failed.\n("+i+": "+s+")");n.type=i,n.request=s,e[1](n)}r[a]=void 0}};var c=setTimeout(function(){w({type:"timeout",target:u})},12e4);u.onerror=u.onload=w,document.head.appendChild(u)}return Promise.all(t)},l.m=a,l.c=i,l.d=function(a,t,e){l.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},l.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},l.t=function(a,t){if(1&t&&(a=l(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var i in a)l.d(e,i,function(t){return a[t]}.bind(null,i));return e},l.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return l.d(t,"a",t),t},l.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},l.p="/",l.oe=function(a){throw console.error(a),a};var w=window["webpackJsonp"]=window["webpackJsonp"]||[],u=w.push.bind(w);w.push=t,w=w.slice();for(var c=0;c<w.length;c++)t(w[c]);var d=u;n.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"56d7":function(a,t,e){"use strict";e.r(t);e("14c6"),e("08c1"),e("4842"),e("d9fc");var i=e("2b0e"),s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("router-view")},r=[],n=e("2877"),o={},l=Object(n["a"])(o,s,r,!1,null,null,null),w=l.exports,u=e("8c4f"),c=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-app",[e("Header"),e("v-content",[e("v-container",{attrs:{"grid-list-md":""}},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("v-carousel",{staticClass:"hidden-sm-and-down",attrs:{cycle:"","hide-delimiter-background":"","show-arrows-on-hover":"",interval:"2000",height:"800px"}},a._l(a.items,function(a,t){return e("v-carousel-item",{key:t},[e("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:a.src,alt:"gambar"}})])}),1),e("v-carousel",{staticClass:"hidden-sm-and-up",attrs:{cycle:"","hide-delimiter-background":"","show-arrows-on-hover":"",interval:"2000",height:"200px"}},a._l(a.items,function(a,t){return e("v-carousel-item",{key:t},[e("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:a.src,alt:"gambar"}})])}),1),e("v-carousel",{staticClass:"hidden-lg-and-up hidden-xs-only",attrs:{cycle:"","hide-delimiter-background":"","show-arrows-on-hover":"",interval:"2000",height:"320px"}},a._l(a.items,function(a,t){return e("v-carousel-item",{key:t},[e("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:a.src,alt:"gambar"}})])}),1)],1),e("v-flex",{attrs:{xs12:""}},[e("v-card",{staticClass:"mx-auto"},[e("v-alert",{attrs:{type:"info"}},[a._v("Order form")]),e("v-form",{directives:[{name:"show",rawName:"v-show",value:a.kirimFormShow,expression:"kirimFormShow"}],ref:"kirimForm",model:{value:a.valid,callback:function(t){a.valid=t},expression:"valid"}},[e("v-container",[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{attrs:{xs12:"",md4:""}},[e("v-flex",{attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Nama",rules:a.requiredRules,required:""},model:{value:a.nama,callback:function(t){a.nama=t},expression:"nama"}})],1),e("v-flex",{attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Email",rules:a.emailRules,required:""},model:{value:a.email,callback:function(t){a.email=t},expression:"email"}})],1),e("v-flex",{attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Handphone",required:""},model:{value:a.hp,callback:function(t){a.hp=t},expression:"hp"}})],1)],1),e("v-flex",{attrs:{xs12:"",md4:""}},[e("v-flex",{attrs:{xs12:""}},[e("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:a._u([{key:"activator",fn:function(t){var i=t.on;return[e("v-text-field",a._g({attrs:{label:"Tanggal pickup","prepend-icon":"event",readonly:""},model:{value:a.tglpickuptext,callback:function(t){a.tglpickuptext=t},expression:"tglpickuptext"}},i))]}}]),model:{value:a.tglpickupmenu,callback:function(t){a.tglpickupmenu=t},expression:"tglpickupmenu"}},[e("v-date-picker",{attrs:{locale:"id"},on:{input:function(t){a.tglpickupmenu=!1}},model:{value:a.tglpickup,callback:function(t){a.tglpickup=t},expression:"tglpickup"}})],1)],1),e("v-flex",{attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Tujuan",required:""},model:{value:a.tujuan,callback:function(t){a.tujuan=t},expression:"tujuan"}})],1),e("v-flex",{attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Drop off di",required:""},model:{value:a.dropoff,callback:function(t){a.dropoff=t},expression:"dropoff"}})],1)],1),e("v-flex",{attrs:{xs12:"",md4:""}},[e("v-flex",{attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Merk mobil",required:""},model:{value:a.merkmobil,callback:function(t){a.merkmobil=t},expression:"merkmobil"}})],1),e("v-flex",{attrs:{xs12:""}},[e("v-textarea",{attrs:{solo:"",name:"input-7-4",label:"Pesan lain"},model:{value:a.pesan,callback:function(t){a.pesan=t},expression:"pesan"}})],1)],1),e("v-flex",{directives:[{name:"show",rawName:"v-show",value:a.showkirim&&!a.loaderShow,expression:"showkirim && !loaderShow"}],staticClass:"text-right",attrs:{xs12:""},on:{click:a.showKirim}},[e("v-btn",{attrs:{color:"success",dark:"",large:""}},[a._v("Kirim")])],1),e("v-flex",{directives:[{name:"show",rawName:"v-show",value:!a.showkirim&&!a.loaderShow,expression:"!showkirim && !loaderShow"}],staticClass:"text-right",attrs:{xs12:""}},[a._v("\n          Apakah data sudah terisi dengan benar ?   "),e("v-btn",{attrs:{color:"success",dark:"",large:""},on:{click:function(t){return a.kirimkan()}}},[a._v("Ya")]),a._v("    "),e("v-btn",{attrs:{color:"warning",dark:"",large:""},on:{click:function(t){a.showkirim=!a.showkirim}}},[a._v("Tidak")])],1),e("v-flex",{directives:[{name:"show",rawName:"v-show",value:a.loaderShow,expression:"loaderShow"}],attrs:{xs12:""}},[e("v-progress-linear",{attrs:{color:"light-green darken-4",height:"10",indeterminate:"",value:"20",striped:""}})],1)],1)],1)],1),e("v-flex",{directives:[{name:"show",rawName:"v-show",value:!a.kirimFormShow,expression:"!kirimFormShow"}],staticClass:"text-center",attrs:{xs12:""}},[e("v-alert",{attrs:{type:"success"}},[a._v("\n            Terima kasih, mohon tunggu info dari kami.\n          ")])],1)],1)],1),a._l(a.wisatas,function(t,i){return e("v-flex",{key:i,attrs:{xs12:"",md4:""}},[e("v-card",[e("v-img",{attrs:{height:"250",src:t.gambar}}),e("v-card-title",[a._v(a._s(t.title))]),e("v-card-text",[e("div",[a._v(a._s(t.text))])])],1)],1)})],2)],1)],1),e("Footer")],1)},d=[],m=(e("f576"),e("28a5"),e("768b")),p={components:{Footer:function(){return e.e("chunk-ed8bcecc").then(e.bind(null,"2060"))},Header:function(){return e.e("chunk-429dd060").then(e.bind(null,"2e4e"))}},data:function(){return{valid:!0,kirimFormShow:!0,showkirim:!0,loaderShow:!1,nama:"",hp:"",email:"",tujuan:"",dropoff:"",merkmobil:"",pesan:"",bulans:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],haries:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],tglpickupmenu:!1,tglpickuptext:null,tglpickup:null,emailRules:[function(a){return!!a||"Membutuhkan Email"},function(a){return/.+@.+/.test(a)||"E-mail harus sesuai"}],requiredRules:[function(a){return!!a||"Harus di isi"}],items:[{src:"slide1d.jpg"},{src:"slide2d.jpg"},{src:"slide3d.jpg"},{src:"slide4d.jpg"},{src:"slide5d.jpg"},{src:"slide6d.jpg"},{src:"slide7d.jpg"},{src:"slide8d.jpg"},{src:"slide9d.jpg"},{src:"slide10d.jpg"},{src:"slide11d.jpg"}],wisatas:[{gambar:"wisata1b.jpg",title:"Thailand",text:"wisata yang terletak di sana ada mereaka pergi wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata"},{gambar:"wisata2b.jpg",title:"Singapura",text:"wisata yang terletak di sana ada mereaka pergi wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata"},{gambar:"wisata3b.jpg",title:"Arung jeram",text:"wisata yang terletak di sana ada mereaka pergi wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata"},{gambar:"wisata4b.jpg",title:"Bromo",text:"wisata yang terletak di sana ada mereaka pergi wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata"},{gambar:"wisata5b.jpg",title:"Air terjun",text:"wisata yang terletak di sana ada mereaka pergi wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata"}]}},computed:{computedDateFormatted:function(){return this.formatDate(this.tglpickup)}},watch:{tglpickup:function(){this.tglpickuptext=this.formatDate(this.tglpickup)}},methods:{formatDate:function(a){if(!a)return null;var t=a.split("-"),e=Object(m["a"])(t,3),i=e[0],s=e[1],r=e[2],n=parseInt(s)-1,o=new Date(a);return this.haries[o.getDay()]+", "+r+" "+this.bulans[n]+" "+i},todays:function(){var a=new Date,t=String(a.getDate()).padStart(2,"0"),e=a.getMonth(),i=a.getFullYear();return this.haries[a.getDay()]+", "+t+" "+this.bulans[e]+" "+i},showKirim:function(){this.$refs.kirimForm.validate()&&(this.showkirim=!this.showkirim)},kirimkan:function(){alert("dddd");var a=e("bc3a");a.post("http://suryasuburrentcar.com:8084/coba",{firstName:"Fred",lastName:"Flintstone"}).then(function(a){alert(a.data.msg)}).catch(function(a){alert(a)})}},created:function(){this.tglpickuptext=this.todays()}},f=p,v=e("6544"),h=e.n(v),g=e("0798"),k=e("7496"),b=e("8336"),x=e("b0af"),y=e("99d9"),_=e("5e66"),S=e("3e35"),j=e("a523"),V=e("a75b"),C=e("2e4b"),F=e("0e8f"),O=e("4bd4"),T=e("adda"),D=e("a722"),P=e("e449"),E=e("8e36"),N=e("8654"),A=e("a844"),M=Object(n["a"])(f,c,d,!1,null,null,null),q=M.exports;h()(M,{VAlert:g["a"],VApp:k["a"],VBtn:b["a"],VCard:x["a"],VCardText:y["b"],VCardTitle:y["c"],VCarousel:_["a"],VCarouselItem:S["a"],VContainer:j["a"],VContent:V["a"],VDatePicker:C["a"],VFlex:F["a"],VForm:O["a"],VImg:T["a"],VLayout:D["a"],VMenu:P["a"],VProgressLinear:E["a"],VTextField:N["a"],VTextarea:A["a"]});var K=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-layout",{attrs:{wrap:""}},[e("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[e("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":a.date,transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},on:{"update:returnValue":function(t){a.date=t},"update:return-value":function(t){a.date=t}},scopedSlots:a._u([{key:"activator",fn:function(t){var i=t.on;return[e("v-text-field",a._g({attrs:{label:"Picker in menu","prepend-icon":"event",readonly:""},model:{value:a.date,callback:function(t){a.date=t},expression:"date"}},i))]}}]),model:{value:a.menu,callback:function(t){a.menu=t},expression:"menu"}},[e("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:a.date,callback:function(t){a.date=t},expression:"date"}},[e("v-spacer"),e("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){a.menu=!1}}},[a._v("Cancel")]),e("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return a.$refs.menu.save(a.date)}}},[a._v("OK")])],1)],1)],1),e("v-spacer"),e("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[e("v-dialog",{ref:"dialog",attrs:{"return-value":a.date,persistent:"","full-width":"",width:"290px"},on:{"update:returnValue":function(t){a.date=t},"update:return-value":function(t){a.date=t}},scopedSlots:a._u([{key:"activator",fn:function(t){var i=t.on;return[e("v-text-field",a._g({attrs:{label:"Picker in dialog","prepend-icon":"event",readonly:""},model:{value:a.date,callback:function(t){a.date=t},expression:"date"}},i))]}}]),model:{value:a.modal,callback:function(t){a.modal=t},expression:"modal"}},[e("v-date-picker",{attrs:{scrollable:""},model:{value:a.date,callback:function(t){a.date=t},expression:"date"}},[e("v-spacer"),e("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){a.modal=!1}}},[a._v("Cancel")]),e("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return a.$refs.dialog.save(a.date)}}},[a._v("OK")])],1)],1)],1),e("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[e("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:a._u([{key:"activator",fn:function(t){var i=t.on;return[e("v-text-field",a._g({attrs:{label:"Picker without buttons","prepend-icon":"event",readonly:""},model:{value:a.date,callback:function(t){a.date=t},expression:"date"}},i))]}}]),model:{value:a.menu2,callback:function(t){a.menu2=t},expression:"menu2"}},[e("v-date-picker",{on:{input:function(t){a.menu2=!1}},model:{value:a.date,callback:function(t){a.date=t},expression:"date"}})],1)],1),e("v-spacer")],1)},L=[],$={data:function(){return{date:(new Date).toISOString().substr(0,10),menu:!1,modal:!1,menu2:!1}}},B=$,J=e("169a"),H=e("2fa4"),I=Object(n["a"])(B,K,L,!1,null,null,null),R=I.exports;h()(I,{VBtn:b["a"],VDatePicker:C["a"],VDialog:J["a"],VFlex:F["a"],VLayout:D["a"],VMenu:P["a"],VSpacer:H["a"],VTextField:N["a"]}),i["a"].use(u["a"]);var Y=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:q},{path:"/coba",name:"coba",component:R}]}),U=e("2f62");i["a"].use(U["a"]);var z=new U["a"].Store({state:{},mutations:{},actions:{}}),G=e("f309");i["a"].use(G["a"]);var Q=new G["a"]({icons:{iconfont:"mdi"}}),W=(e("bf40"),e("d5e8"),e("f818"),e("5363"),e("15f5"),e("bc3a")),X=e.n(W);i["a"].config.productionTip=!1,new i["a"]({router:Y,store:z,vuetify:Q,axios:X.a,render:function(a){return a(w)}}).$mount("#app")}});
//# sourceMappingURL=app.ab0ad788.js.map