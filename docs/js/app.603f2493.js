(function(e){function t(t){for(var n,o,s=t[0],l=t[1],u=t[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},i={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"025f":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-form",{ref:"form"},[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("span",{domProps:{innerHTML:e._s(e.$t("recognition.gs.headline"))}}),a("v-file-input",{attrs:{"prepend-icon":"vpn_key",label:e.$t("recognition.gs.key"),"persistent-hint":"",hint:e.$t("recognition.keyHint"),loading:e.loading,disabled:e.loading,rules:e.keyRules},model:{value:e.key,callback:function(t){e.key=t},expression:"key"}}),a("v-file-input",{attrs:{disabled:!e.key||e.loading,"show-size":"",label:e.$t("recognition.file"),"persistent-hint":"",hint:e.$t("recognition.fileHint"),loading:e.loading,rules:e.rules},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}}),a("v-overflow-btn",{attrs:{items:e.languages,label:e.$t("language"),editable:""},model:{value:e.language,callback:function(t){e.language=t},expression:"language"}})],1),a("v-card-actions",[e.loading?a("v-progress-linear",{staticClass:"mx-3",attrs:{value:e.progress,height:"25",stream:"",color:"blue lighten-3",indeterminate:e.recognizing}},[e._v(e._s(e.status))]):e._e(),a("v-spacer"),a("v-btn",{attrs:{disabled:!e.key||!e.file||e.loading||!e.valid,large:"",color:"primary",loading:e.loading},on:{click:e.recognize}},[e._v(e._s(e.$t("recognition.recognize")))])],1)],1),e.result?a("div",[a("v-divider"),a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("div",{staticClass:"title"},[e._v(e._s(e.$t("result")))]),a("blockquote",{staticClass:"blockquote"},[e._v(e._s(e.result))])])],1)],1):e._e()],1)},i=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})},"05f6":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("9ab4"),i=n.__importDefault(a("2b0e")),r=n.__importDefault(a("2fe1")),o=a("60a3"),s=n.__importStar(a("97e5")),l=n.__importStar(a("874e")),u=a("fe0b");let c=class extends i.default{constructor(){super(...arguments),this.key="",this.file=null,this.rules=[e=>!e||e.size<2e8||u.i18n.t("errors.size")],this.loading=!1,this.recognizing=!1,this.progress=0,this.status="",this.result="",this.valid=!1}fileChanged(){this.valid=this.$refs.form.validate()}async recognize(){if(this.key.trim()&&this.file){this.loading=!0,this.progress=0,this.status=u.i18n.t("uploading");try{const t=await s.recognize("wit",this.key,this.file,e=>{this.progress=e,this.status=`${u.i18n.t("uploading")} (${e}%)`,100===this.progress&&(this.recognizing=!0,this.status=u.i18n.t("recognizing"))});this.result=t.data.text||u.i18n.t("noText")}catch(e){l.setSnackbar({message:e.message,active:!0,color:"error"})}finally{this.loading=!1,this.recognizing=!1}}}};n.__decorate([o.Watch("file"),n.__metadata("design:type",Function),n.__metadata("design:paramtypes",[]),n.__metadata("design:returntype",void 0)],c.prototype,"fileChanged",null),c=n.__decorate([r.default],c),t.default=c},"0670":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("9ab4"),i=n.__importDefault(a("2b0e")),r=n.__importDefault(a("ce5b"));a("bf40"),i.default.use(r.default),t.default=new r.default({icons:{iconfont:"mdi"}})},"06cf":function(e,t,a){"use strict";a.r(t);var n=a("025f"),i=a("70ef");for(var r in i)"default"!==r&&function(e){a.d(t,e,function(){return i[e]})}(r);var o=a("2877"),s=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},"0ac6":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-row",[a("v-col",[a("p",{staticClass:"text-center",domProps:{innerHTML:e._s(e.$t("premise"))}}),a("p",{staticClass:"text-center",domProps:{innerHTML:e._s(e.$t("recognition.headline"))}})])],1),a("v-row",[a("v-col",[a("v-tabs",{attrs:{centered:"",grow:""},model:{value:e.currentTab,callback:function(t){e.currentTab=t},expression:"currentTab"}},[a("v-tab",[e._v("Wit")]),a("v-tab",[e._v("Google Speech")]),a("v-tab-item",{attrs:{value:0}},[a("Wit")],1),a("v-tab-item",{attrs:{value:1}},[a("GoogleSpeech")],1)],1)],1)],1)],1)},i=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})},"0d40":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"pa-4"},[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"text-center"},[a("div",{staticClass:"body-1",domProps:{innerHTML:e._s(e.$t("headline"))}})])],1),a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"text-center"},[a("v-btn",{attrs:{large:"",color:"primary",target:"_blank",href:"https://t.me/voicybot"}},[e._v(e._s(e.$t("add")))])],1)],1),a("Recognition"),a("div",{staticClass:"caption text-center",domProps:{innerHTML:e._s(e.$t("footer"))}}),a("div",{staticClass:"caption text-center",domProps:{innerHTML:e._s(e.$t("author"))}})],1)},i=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})},"132b":function(e,t,a){"use strict";a.r(t);var n=a("e3ab"),i=a("9b7a");for(var r in i)"default"!==r&&function(e){a.d(t,e,function(){return i[e]})}(r);var o=a("2877"),s=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},"20b4":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("9ab4"),i=n.__importDefault(a("2b0e")),r=n.__importDefault(a("2fe1")),o=a("60a3"),s=n.__importStar(a("97e5")),l=n.__importStar(a("874e")),u=a("fe0b"),c=a("b4c9");let d=class extends i.default{constructor(){super(...arguments),this.key=null,this.file=null,this.loading=!1,this.recognizing=!1,this.progress=0,this.valid=!1,this.rules=[e=>!e||e.size<2e8||u.i18n.t("errors.size")],this.keyRules=[e=>!e||e.size<1e6||u.i18n.t("errors.keySize")],this.status="",this.result="",this.languages=Object.keys(c.googleLanguages).map(e=>({text:e,value:c.googleLanguages[e]})),this.language=null}keyChanged(){this.valid=this.$refs.form.validate()&&!!this.language}fileChanged(){this.valid=this.$refs.form.validate()&&!!this.language}languageCHanged(){this.valid=this.$refs.form.validate()&&!!this.language}async recognize(){if(this.key&&this.file&&this.valid&&this.language){this.loading=!0,this.progress=0,this.status=u.i18n.t("uploading");try{const t=await s.recognize("google",this.key,this.file,e=>{this.progress=e,this.status=`${u.i18n.t("uploading")} (${e}%)`,100===this.progress&&(this.recognizing=!0,this.status=u.i18n.t("recognizing"))},this.language);this.result=t.data.text||u.i18n.t("noText")}catch(e){l.setSnackbar({message:e.message,active:!0,color:"error"})}finally{this.loading=!1,this.recognizing=!1}}}};n.__decorate([o.Watch("key"),n.__metadata("design:type",Function),n.__metadata("design:paramtypes",[]),n.__metadata("design:returntype",void 0)],d.prototype,"keyChanged",null),n.__decorate([o.Watch("file"),n.__metadata("design:type",Function),n.__metadata("design:paramtypes",[]),n.__metadata("design:returntype",void 0)],d.prototype,"fileChanged",null),n.__decorate([o.Watch("language"),n.__metadata("design:type",Function),n.__metadata("design:paramtypes",[]),n.__metadata("design:returntype",void 0)],d.prototype,"languageCHanged",null),d=n.__decorate([r.default],d),t.default=d},"22b2":function(e,t,a){"use strict";a.r(t);var n=a("c8b7"),i=a("6a01");for(var r in i)"default"!==r&&function(e){a.d(t,e,function(){return i[e]})}(r);var o=a("2877"),s=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},"3d48":function(e,t,a){"use strict";a.r(t);var n=a("7402"),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);t["default"]=i.a},"3dfd":function(e,t,a){"use strict";a.r(t);var n=a("54ac"),i=a("6f68");for(var r in i)"default"!==r&&function(e){a.d(t,e,function(){return i[e]})}(r);var o=a("2877"),s=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},"46cd":function(e,t,a){"use strict";a.r(t);var n=a("e5f4"),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);t["default"]=i.a},4720:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("9ab4"),i=n.__importDefault(a("2b0e")),r=n.__importDefault(a("2fe1"));let o=class extends i.default{};o=n.__decorate([r.default],o),t.default=o},"54ac":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("Navbar"),a("Snackbar"),a("v-content",[a("router-view")],1)],1)},i=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})},"5b65":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("9ab4"),i=n.__importDefault(a("22b2")),r=n.__importDefault(a("d178"));t.default={components:{Navbar:r.default,Snackbar:i.default}}},6031:function(e,t,a){"use strict";a.r(t);var n=a("0ac6"),i=a("9603");for(var r in i)"default"!==r&&function(e){a.d(t,e,function(){return i[e]})}(r);var o=a("2877"),s=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},"6a01":function(e,t,a){"use strict";a.r(t);var n=a("cd00"),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);t["default"]=i.a},"6f68":function(e,t,a){"use strict";a.r(t);var n=a("5b65"),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);t["default"]=i.a},"70ef":function(e,t,a){"use strict";a.r(t);var n=a("20b4"),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);t["default"]=i.a},"72aa":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.messages={ru:{title:"Войси",notFound:"Страница не найдена",close:"Закрыть",headline:'<a target="_blank" href="https://t.me/voicybot">@voicybot</a> автоматически переводит все голосовые сообщения в текст, если добавить его в групповой чат.',add:"Добавить в Телеграм",premise:'Если вы ищите статистику проекта, то она доступна на <a target="_blank" href="https://borodutch.com">borodutch.com</a>',errors:{internal:"Внутренняя ошибка сервера",size:"Файл должен быть меньше 200 мегабайт",keySize:"Файл ключей должен быть меньше 1 мегабайта"},recognition:{headline:'К сожалению, Телеграм ограничивает максимальный размер доступных для ботов файлов до 20 мегабайт. Чтобы обойти этот лимит, мы реализовали распознавание речи прямо на этом вебсайте. Все бесплатно, никакие данные у нас на сервере не хранятся, а код опубликован в <a target="_blank" href="https://github.com/backmeupplz/voicy-landing">открытом доступе</a>. Пользуйтесь на здоровье.',wit:{headline:'<a target="_blank" href="https://wi.ai">Wit.ai</a> — это бесплатный движок распознавания речи. Он поддерживает лишь аудио-записи длинной менее 15 секунд, но Войси автоматически разделяет ваш аудио-файл на отрезки длинной в 15 секунд и распознает их раздельно. Поэтому в районе промежутков между 10-ти секундными интервалами могут появляться странные артефакты. Пожалуйста, введите ключ от вашего Wit-приложения ниже. Можете ознакомиться с <a target="_blank" href="https://medium.com/@nikitakolmogorov/%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BB%D1%8E%D1%87%D0%B0-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-wit-%D0%B4%D0%BB%D1%8F-voicybot-com-7c3791dcea26">инструкцией</a>, как получить ключ.',key:"Ключ Wit-приложения"},keyHint:"Мы не храним ваши ключи",file:"Файл для распознавания",fileHint:"Мы не храним ваши файлы",gs:{headline:'<a target="_blank" href="https://cloud.google.com/speech-to-text/">Google Speech</a> — это более продвинутый движок распознавания речи. После того, как Войси получает ваш файл, он загружает его в Google Cloud Storage, распознает при помощи Google Speech, а после удаляет файл с Google Cloud Storage. Пожалуйста, предоставьте ваши ключи от Google Cloud ниже. Можете ознакомиться с <a target="_blank" href="https://medium.com/@nikitakolmogorov/%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%B9-google-speech-%D0%B4%D0%BB%D1%8F-voicybot-com-8d05f2f5c425">инструкцией</a>, как получить ключи. Учтите, что Google Speech не бесплатный, цены на распознавание речи указаны в их <a target="_blank" href="https://cloud.google.com/speech-to-text/pricing">справке</a>.',key:"Ключи Google Cloud"},recognize:"Распознать"},uploading:"Загрузка фаила на сервер Войси",noText:"Похоже, Войси не смог распознать текст в этом файле.",recognizing:"Распознавание речи...",result:"Результат:",footer:'Проблемы с этим сайтом? Ищите помощь на <a target="_blank" href="https://t.me/borodutch_support">нашем канале поддержки</a>. Удачи!',author:'Сделано <a target="_blank" href="https://borodutch.com">@borodutch</a> с ❤️',language:"Язык"},en:{title:"Voicy",notFound:"Page not found",close:"Close",headline:'<a target="_blank" href="https://t.me/voicybot">@voicybot</a> automatically converts all the audio messages to text when added to a group chat.',add:"Add to Telegram",premise:'If you\'re looking for the project stats, it\'s available at <a target="_blank" href="https://borodutch.com">borodutch.com</a>',errors:{internal:"Internal server error",size:"File should be smaller than 200 megabytes",keySize:"Credentials file should be smaller than 1 megabyte"},recognition:{headline:'Unfortunately, Telegram doesn\'t allow bots to download files over 20 megabytes. To bypass this limit, we\'ve implemented voice recognition on this webpage. It\'s free, no data is stored on our servers, and code is completely <a target="_blank" href="https://github.com/backmeupplz/voicy-landing">open-source</a>. Enjoy.',wit:{headline:'<a target="_blank" href="https://wi.ai">Wit.ai</a> is a free voice recognition engine. It only supports voice messages up to 15 seconds long, but Voicy automatically splits your recordings into 10-second intervals and recognizes them separately. Downside is that you can experience weird artifacts in between the 10 second intervals. Please, provide your Wit app key in the form below. Here\'s <a target="_blank" href="https://medium.com/@nikitakolmogorov/getting-wit-app-key-for-voicybot-com-7c150672070b?postPublishedType=initial">an instruction</a> on how to obtain one.',key:"Wit app key"},file:"File to recognize",fileHint:"We do not store your files",keyHint:"We do not store your keys",gs:{headline:'<a target="_blank" href="https://cloud.google.com/speech-to-text/">Google Speech</a> is a more advanced voice recognition engine. After Voicy obtains your file, it uploads the file to the Google Cloud Storage, then recognizes it with Google Speech, then deletes the file from the Google Cloud Storage. Please, provide your Google Cloud credentials below. Here\'s <a target="_blank" href="https://medium.com/@nikitakolmogorov/getting-google-speech-credentials-for-voicybot-com-e389e4a4059d">an instruction</a> on how to obtain them. Please, note, that Google Speech is not free, Google will charge you as outlined in their <a target="_blank" href="https://cloud.google.com/speech-to-text/pricing">reference</a>.',key:"Google Cloud credentials"},recognize:"Recognize"},uploading:"Uploading the file to the Voicy server",noText:"Looks like Voicy was not able to recognize speech in this file.",recognizing:"Speech recognition...",result:"Result:",footer:'Having issues with this website? Find help on <a target="_blank" href="https://t.me/borodutch_support">our support channel</a>. Cheers!',author:'Made by <a target="_blank" href="https://borodutch.com">@borodutch</a> with ❤️',language:"Language"}}},7402:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("9ab4"),i=n.__importDefault(a("2b0e")),r=n.__importDefault(a("2fe1")),o=n.__importDefault(a("6031"));let s=class extends i.default{};s=n.__decorate([r.default({components:{Recognition:o.default}})],s),t.default=s},"874e":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("9ab4"),i=n.__importDefault(a("2b0e")),r=n.__importDefault(a("2f62"));i.default.use(r.default);const o={state:{snackbar:{message:"",active:!1,color:"success"},language:void 0},mutations:{setSnackbar(e,t){e.snackbar=t},setLanguage(e,t){e.language=t}},getters:{snackbar:e=>e.snackbar,language:e=>e.language}};t.store=new r.default.Store(o);const s=t.store.getters;t.snackbar=()=>s.snackbar,t.language=()=>s.language,t.setSnackbar=e=>{t.store.commit("setSnackbar",e)},t.hideSnackbar=()=>{t.store.commit("setSnackbar",Object.assign({},t.store.state.snackbar,{active:!1}))},t.setLanguage=e=>{t.store.commit("setLanguage",e)}},9603:function(e,t,a){"use strict";a.r(t);var n=a("c901"),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);t["default"]=i.a},9703:function(e,t,a){"use strict";a.r(t);var n=a("d623"),i=a("ed6f");for(var r in i)"default"!==r&&function(e){a.d(t,e,function(){return i[e]})}(r);var o=a("2877"),s=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},"97e5":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("9ab4"),i=n.__importDefault(a("bc3a")),r="https://recognition.voicybot.com";async function o(e,t,a,n,o){const s=new FormData;return s.append("key",t),s.append("file",a),o&&s.append("language",o),i.default.post(`${r}/recognize/${e}`,s,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:e=>{n(Math.round(100*e.loaded/e.total))}})}t.recognize=o},"9b7a":function(e,t,a){"use strict";a.r(t);var n=a("05f6"),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);t["default"]=i.a},b4c9:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.googleLanguages={"Afrikaans (South Africa)":"af-ZA","Amharic (Ethiopia)":"am-ET","Armenian (Armenia)":"hy-AM","Azerbaijani (Azerbaijan)":"az-AZ","Indonesian (Indonesia)":"id-ID","Malay (Malaysia)":"ms-MY","Bengali (Bangladesh)":"bn-BD","Bengali (India)":"bn-IN","Catalan (Spain)":"ca-ES","Czech (Czech Republic)":"cs-CZ","Danish (Denmark)":"da-DK","German (Germany)":"de-DE","English (Australia)":"en-AU","English (Canada)":"en-CA","English (Ghana)":"en-GH","English (United Kingdom)":"en-GB","English (India)":"en-IN","English (Ireland)":"en-IE","English (Kenya)":"en-KE","English (New Zealand)":"en-NZ","English (Nigeria)":"en-NG","English (Philippines)":"en-PH","English (South Africa)":"en-ZA","English (Tanzania)":"en-TZ","English (United States)":"en-US","Spanish (Argentina)":"es-AR","Spanish (Bolivia)":"es-BO","Spanish (Chile)":"es-CL","Spanish (Colombia)":"es-CO","Spanish (Costa Rica)":"es-CR","Spanish (Ecuador)":"es-EC","Spanish (El Salvador)":"es-SV","Spanish (Spain)":"es-ES","Spanish (United States)":"es-US","Spanish (Guatemala)":"es-GT","Spanish (Honduras)":"es-HN","Spanish (Mexico)":"es-MX","Spanish (Nicaragua)":"es-NI","Spanish (Panama)":"es-PA","Spanish (Paraguay)":"es-PY","Spanish (Peru)":"es-PE","Spanish (Puerto Rico)":"es-PR","Spanish (Dominican Republic)":"es-DO","Spanish (Uruguay)":"es-UY","Spanish (Venezuela)":"es-VE","Basque (Spain)":"eu-ES","Filipino (Philippines)":"fil-PH","French (Canada)":"fr-CA","French (France)":"fr-FR","Galician (Spain)":"gl-ES","Georgian (Georgia)":"ka-GE","Gujarati (India)":"gu-IN","Croatian (Croatia)":"hr-HR","Zulu (South Africa)":"zu-ZA","Icelandic (Iceland)":"is-IS","Italian (Italy)":"it-IT","Javanese (Indonesia)":"jv-ID","Kannada (India)":"kn-IN","Khmer (Cambodia)":"km-KH","Lao (Laos)":"lo-LA","Latvian (Latvia)":"lv-LV","Lithuanian (Lithuania)":"lt-LT","Hungarian (Hungary)":"hu-HU","Malayalam (India)":"ml-IN","Marathi (India)":"mr-IN","Dutch (Netherlands)":"nl-NL","Nepali (Nepal)":"ne-NP","Norwegian Bokmål (Norway)":"nb-NO","Polish (Poland)":"pl-PL","Portuguese (Brazil)":"pt-BR","Portuguese (Portugal)":"pt-PT","Romanian (Romania)":"ro-RO","Sinhala (Sri Lanka)":"si-LK","Slovak (Slovakia)":"sk-SK","Slovenian (Slovenia)":"sl-SI","Sundanese (Indonesia)":"su-ID","Swahili (Tanzania)":"sw-TZ","Swahili (Kenya)":"sw-KE","Finnish (Finland)":"fi-FI","Swedish (Sweden)":"sv-SE","Tamil (India)":"ta-IN","Tamil (Singapore)":"ta-SG","Tamil (Sri Lanka)":"ta-LK","Tamil (Malaysia)":"ta-MY","Telugu (India)":"te-IN","Vietnamese (Vietnam)":"vi-VN","Turkish (Turkey)":"tr-TR","Urdu (Pakistan)":"ur-PK","Urdu (India)":"ur-IN","Greek (Greece)":"el-GR","Bulgarian (Bulgaria)":"bg-BG","Russian (Russia)":"ru-RU","Serbian (Serbia)":"sr-RS","Ukrainian (Ukraine)":"uk-UA","Hebrew (Israel)":"he-IL","Arabic (Israel)":"ar-IL","Arabic (Jordan)":"ar-JO","Arabic (United Arab Emirates)":"ar-AE","Arabic (Bahrain)":"ar-BH","Arabic (Algeria)":"ar-DZ","Arabic (Saudi Arabia)":"ar-SA","Arabic (Iraq)":"ar-IQ","Arabic (Kuwait)":"ar-KW","Arabic (Morocco)":"ar-MA","Arabic (Tunisia)":"ar-TN","Arabic (Oman)":"ar-OM","Arabic (State of Palestine)":"ar-PS","Arabic (Qatar)":"ar-QA","Arabic (Lebanon)":"ar-LB","Arabic (Egypt)":"ar-EG","Persian (Iran)":"fa-IR","Hindi (India)":"hi-IN","Thai (Thailand)":"th-TH","Korean (South Korea)":"ko-KR","Chinese, Mandarin (Traditional, Taiwan)":"cmn-Hant-TW","Chinese, Cantonese (Traditional, Hong Kong)":"yue-Hant-HK","Japanese (Japan)":"ja-JP","Chinese, Mandarin (Simplified, Hong Kong)":"cmn-Hans-HK","Chinese, Mandarin (Simplified, China)":"cmn-Hans-CN"}},b909:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("9ab4"),i=n.__importDefault(a("2b0e")),r=n.__importDefault(a("8c4f")),o=n.__importDefault(a("bb51")),s=n.__importDefault(a("9703"));i.default.use(r.default);const l=new r.default({mode:"history",routes:[{path:"/",name:"home",component:o.default},{path:"*",name:"notFound",component:s.default}]});t.default=l},bb51:function(e,t,a){"use strict";a.r(t);var n=a("0d40"),i=a("3d48");for(var r in i)"default"!==r&&function(e){a.d(t,e,function(){return i[e]})}(r);var o=a("2877"),s=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},c8b7:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-snackbar",{attrs:{app:"",timeout:4e3,top:"",color:e.color,flat:""},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[a("span",[e._v(e._s(e.text))]),a("v-btn",{attrs:{color:"white",text:""},on:{click:function(t){e.active=!1}}},[e._v(e._s(e.$t("close")))])],1)},i=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})},c901:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("9ab4"),i=n.__importDefault(a("2b0e")),r=n.__importDefault(a("2fe1")),o=n.__importDefault(a("132b")),s=n.__importDefault(a("06cf"));let l=class extends i.default{constructor(){super(...arguments),this.currentTab=0}};l=n.__decorate([r.default({components:{Wit:o.default,GoogleSpeech:s.default}})],l),t.default=l},cd00:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("9ab4"),i=n.__importDefault(a("2b0e")),r=n.__importDefault(a("2fe1")),o=a("fe0b"),s=n.__importStar(a("874e"));let l=class extends i.default{get active(){return s.snackbar().active}set active(e){s.hideSnackbar()}get color(){return s.snackbar().color}get text(){const e=s.snackbar().message;return"string"===typeof e?"Internal Server Error"===e?o.i18n.t("errors.internal"):o.i18n.t(s.snackbar().message.toString()):e[o.i18n.locale]}};l=n.__decorate([r.default],l),t.default=l},cd49:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("9ab4"),i=n.__importDefault(a("2b0e")),r=n.__importDefault(a("3dfd")),o=n.__importDefault(a("b909")),s=a("874e"),l=a("fe0b"),u=n.__importDefault(a("0670"));i.default.config.productionTip=!0,new i.default({router:o.default,store:s.store,i18n:l.i18n,vuetify:u.default,render:e=>e(r.default)}).$mount("#app")},d178:function(e,t,a){"use strict";a.r(t);var n=a("e6fb"),i=a("46cd");for(var r in i)"default"!==r&&function(e){a.d(t,e,function(){return i[e]})}(r);var o=a("2877"),s=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},d623:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"v-container pa-4"},[a("v-layout",{staticClass:"text-xs-center",attrs:{column:"","justify-center":"","align-center":""}},[a("v-flex",{attrs:{xs12:"",md10:""}},[a("div",{staticClass:"headline pb-4"},[a("span",[e._v(e._s(e.$t("notFound")))])])])],1)],1)},i=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})},e3ab:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-form",{ref:"form"},[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("span",{domProps:{innerHTML:e._s(e.$t("recognition.wit.headline"))}}),a("v-text-field",{attrs:{"prepend-icon":"vpn_key",label:e.$t("recognition.wit.key"),"persistent-hint":"",hint:e.$t("recognition.keyHint"),loading:e.loading,disabled:e.loading},model:{value:e.key,callback:function(t){e.key=t},expression:"key"}}),a("v-file-input",{attrs:{disabled:!e.key||e.loading,"show-size":"",label:e.$t("recognition.file"),"persistent-hint":"",hint:e.$t("recognition.fileHint"),loading:e.loading,rules:e.rules},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}})],1),a("v-card-actions",[e.loading?a("v-progress-linear",{staticClass:"mx-3",attrs:{value:e.progress,height:"25",stream:"",color:"blue lighten-3",indeterminate:e.recognizing}},[e._v(e._s(e.status))]):e._e(),a("v-spacer"),a("v-btn",{attrs:{disabled:!e.key||!e.file||e.loading||!e.valid,large:"",color:"primary",loading:e.loading},on:{click:e.recognize}},[e._v(e._s(e.$t("recognition.recognize")))])],1)],1),e.result?a("div",[a("v-divider"),a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("div",{staticClass:"title"},[e._v(e._s(e.$t("result")))]),a("blockquote",{staticClass:"blockquote"},[e._v(e._s(e.result))])])],1)],1):e._e()],1)},i=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})},e5f4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("9ab4"),i=n.__importDefault(a("2b0e")),r=n.__importDefault(a("2fe1")),o=n.__importStar(a("874e")),s=a("fe0b");let l=class extends i.default{get locales(){return[{icon:"🇺🇸",code:"en"},{icon:"🇷🇺",code:"ru"}]}get currentLocale(){for(const e of this.locales)if(e.code===s.i18n.locale)return e}changeLanguage(e){s.i18n.locale=e,o.setLanguage(e),document.title=s.i18n.t("title")}};l=n.__decorate([r.default],l),t.default=l},e6fb:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",[a("v-app-bar",{attrs:{flat:"",app:""}},[a("v-toolbar-title",{staticClass:"text-uppercase grey--text"},[a("span",[e._v(e._s(e.$t("title")))])]),a("v-spacer"),a("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-btn",e._g({attrs:{text:"",icon:"",color:"grey"}},n),[e._v(e._s(e.currentLocale.icon))])]}}])},[a("v-list",e._l(e.locales,function(t){return a("v-list-item",{key:t.code,on:{click:function(a){return e.changeLanguage(t.code)}}},[a("v-list-item-title",[e._v(e._s(t.icon))])],1)}),1)],1)],1)],1)},i=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})},ed6f:function(e,t,a){"use strict";a.r(t);var n=a("4720"),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);t["default"]=i.a},fe0b:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("9ab4"),i=n.__importDefault(a("2b0e")),r=n.__importDefault(a("a925")),o=a("72aa"),s=n.__importStar(a("874e"));function l(){if(s.language())return s.language();{const e=(navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.userLanguage||navigator.language||navigator.browserLanguage||"en").substr(0,2),t=["en","ru"];return t.indexOf(e)>-1?e:"en"}}i.default.use(r.default),t.i18n=new r.default({locale:l(),messages:o.messages})}});
//# sourceMappingURL=app.603f2493.js.map