webpackJsonp([0x67ef26645b2ab800,0x36dfee11ec260a00],{"./node_modules/json-loader/index.js!./.cache/json/layout-index.json":function(e,t){e.exports={layoutContext:{}}},'./node_modules/babel-loader/lib/index.js?{"plugins":["/home/circleci/repo/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/home/circleci/repo/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/circleci/repo/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/home/circleci/repo/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/home/circleci/repo/node_modules/babel-preset-stage-0/lib/index.js","/home/circleci/repo/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js':function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},a=o("./node_modules/react/react.js"),s=n(a),i=o("./src/layouts/index.js"),l=n(i),d=o("./node_modules/json-loader/index.js!./.cache/json/layout-index.json"),c=n(d);t.default=function(e){return s.default.createElement(l.default,r({},e,c.default))},e.exports=t.default},"./src/components/nav-header/index.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.SiteHeader=void 0;var i=o("./node_modules/react/react.js"),l=n(i),d=o("./node_modules/gatsby-link/index.js"),c=n(d),m=o("./src/components/nav-header/style.module.css"),u=n(m),p=o("./node_modules/svg-react-loader/lib/loader.js?name=Icon!./src/components/nav-header/spbf-logo-white.svg"),f=n(p),b=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){return l.default.createElement("div",{className:u.default.header},l.default.createElement("div",{className:u.default.wrapper},l.default.createElement(c.default,{className:u.default.logo,to:"/"},l.default.createElement(f.default,{className:u.default.icon})),l.default.createElement(c.default,{className:u.default.menuItem,activeClassName:u.default.active,to:"/podcast"},"Drinkcast")))},t}(i.Component);t.SiteHeader=b},"./node_modules/svg-react-loader/lib/loader.js?name=Icon!./src/components/nav-header/spbf-logo-white.svg":function(e,t,o){function n(e){return r.createElement("svg",e,r.createElement("path",{fill:"#FFFFFF",fillRule:"evenodd",d:"M38.7655267,153.948454 C46.2183786,153.948454 52.7944244,151.758614 58.2013954,147.232945 C63.7545007,142.707276 66.5310534,137.45166 66.5310534,131.320109 C66.5310534,111.46556 43.4418259,109.129731 34.0892275,104.458072 C26.9286443,100.370371 31.6049435,92.9249154 38.7655267,92.9249154 C43.5879603,92.9249154 46.3645129,95.9906913 47.0951847,98.3265205 C47.8258564,100.808339 49.5794687,102.122243 52.3560213,102.122243 L61.7086198,102.122243 C63.9006351,102.122243 65.6542473,100.370371 65.6542473,98.1805312 C65.6542473,93.6548621 63.3160977,89.2751822 58.6397984,84.7495131 C53.9634992,80.2238439 47.3874534,78.034004 39.0577954,78.034004 C31.8972122,78.034004 25.6134351,80.0778546 20.3525985,84.1655558 C15.2378962,88.2532569 12.6074779,93.5088727 12.6074779,99.9324031 C12.6074779,113.6554 25.4673007,118.473048 35.4044366,122.122781 C42.2727511,124.604599 47.8258564,127.670375 47.8258564,131.904066 C47.8258564,135.553799 45.0493038,138.911554 39.0577954,138.911554 C34.0892275,138.911554 30.8742717,137.159682 29.4129282,133.509948 C28.3899878,131.02813 26.6363756,129.714226 23.8598229,129.714226 L14.9456275,129.714226 C12.7536122,129.714226 11,131.466098 11,133.655938 C11,138.035618 13.3381496,142.561287 18.1605832,147.086956 C22.9830168,151.612625 29.8513313,153.948454 38.7655267,153.948454 Z M147.799819,96.657277 L146.046207,95.4893624 L146.046207,121.329473 C146.046207,123.519313 144.292594,125.271185 142.100579,125.271185 L131.72504,125.271185 C129.533025,125.271185 127.779413,123.519313 127.779413,121.329473 L127.779413,29.9401544 C127.779413,27.7503145 129.533025,25.9984425 131.72504,25.9984425 L140.639236,25.9984425 C142.831251,25.9984425 144.584863,27.7503145 144.584863,29.9401544 L144.584863,31.108069 C148.822759,26.8743785 154.22973,24.8305279 161.098045,24.8305279 C168.258628,24.8305279 174.396271,27.1663572 179.510973,31.984005 C184.625675,36.6556634 187.109959,42.4952365 187.109959,49.6487136 L187.109959,75.3428352 C187.109959,82.6423016 184.625675,88.627864 179.510973,93.4455118 C174.396271,98.1171703 168.404762,100.453 161.390313,100.453 C155.544939,100.453 149.991834,98.4091489 147.799819,96.657277 Z M280.771863,127.227838 L280.771863,155.987735 C284.425222,152.629981 289.539924,151.024098 296.11597,151.024098 C303.130419,151.024098 309.121927,153.359927 314.236629,158.177575 C319.351332,162.849234 321.835616,168.834796 321.835616,176.134262 L321.835616,201.828384 C321.835616,208.981861 319.351332,214.821434 314.236629,219.639082 C309.121927,224.31074 302.984284,226.64657 295.823701,226.64657 C288.955387,226.64657 283.548416,224.602719 279.31052,220.369029 L279.31052,221.536943 C279.31052,223.726783 277.556907,225.478655 275.364892,225.478655 L266.450697,225.478655 C264.258681,225.478655 262.505069,223.726783 262.505069,221.536943 L262.505069,127.227838 C262.505069,125.037998 264.258681,123.286126 266.450697,123.286126 L276.826236,123.286126 C279.018251,123.286126 280.771863,125.037998 280.771863,127.227838 Z M382.481371,53.6537864 C383.504312,54.383733 383.942715,55.259669 383.942715,56.4275836 C383.942715,57.1575302 383.650446,57.8874768 383.212043,58.6174235 L378.243475,65.6249112 C377.512803,66.5008472 376.635997,66.9388151 375.613057,66.9388151 C374.736251,66.9388151 374.005579,66.6468365 373.274907,66.2088685 C365.529787,61.099242 354.861979,65.1869432 355.592651,73.9463029 L355.592651,79.4938973 L378.535744,79.4938973 C380.43549,79.4938973 382.189103,81.0997799 382.189103,82.9976412 L382.189103,91.1730435 C382.189103,93.0709047 380.43549,94.6767873 378.535744,94.6767873 L355.592651,94.6767873 L355.592651,148.546849 C355.592651,150.736689 353.839039,152.488561 351.647023,152.488561 L341.563753,152.488561 C339.371738,152.488561 337.618126,150.736689 337.618126,148.546849 L337.618126,94.6767873 L324.612168,94.6767873 C322.712422,94.6767873 320.95881,93.0709047 320.95881,91.1730435 L320.95881,82.9976412 C320.95881,81.0997799 322.712422,79.4938973 324.612168,79.4938973 L337.618126,79.4938973 L337.618126,74.3842708 C337.618126,67.0848045 340.248544,60.9532527 345.363246,56.1356049 C350.477948,51.3179571 357.053994,48.8361385 365.091384,48.8361385 C372.105832,48.8361385 377.951206,50.4420211 382.481371,53.6537864 Z M469.788075,14.4272962 L469.788075,27.6223866 L481.280923,23.6809959 C482.481668,23.5096311 483.167809,23.3382663 483.510879,23.3382663 C484.711624,23.3382663 485.569299,24.3664552 486.255439,26.2514681 L488.31386,32.0778716 C488.31386,32.5919661 489,34.1342494 489,34.8197086 C489,36.1906271 488.142325,37.2188159 486.598509,37.7329104 L474.247986,42.1883954 L482.138598,52.470284 C482.481668,53.1557433 482.653203,53.8412025 482.653203,54.5266617 C482.653203,55.7262154 481.967063,56.7544043 480.594783,57.6112283 L474.934127,61.8953486 C474.419521,62.5808078 473.561846,62.9235374 472.704171,62.9235374 C471.503426,62.9235374 470.645751,62.409443 469.788075,61.3812541 L462.068999,51.2707304 L454.349922,61.552619 C453.835317,62.409443 453.149176,62.9235374 451.948431,62.9235374 C450.919221,62.9235374 450.061546,62.5808078 449.20387,61.7239838 L443.028609,57.4398635 C441.999399,56.5830395 441.484794,55.5548506 441.484794,54.5266617 C441.484794,53.8412025 441.656329,53.1557433 441.999399,52.470284 L449.546941,42.1883954 L437.367953,38.07564 C435.824137,37.5615456 435.137997,36.3619919 435.137997,34.8197086 C435.137997,33.9628845 435.309532,33.1060605 435.652602,32.0778716 L437.539488,26.2514681 C438.225628,24.3664552 439.254838,23.3382663 440.627118,23.3382663 C440.798653,23.3382663 441.484794,23.5096311 442.857074,23.6809959 L454.349922,27.6223866 L454.349922,14.4272962 C454.349922,12.5422833 456.236807,11 458.466763,11 L465.671234,11 C467.90119,11 469.788075,12.5422833 469.788075,14.4272962 Z"}))}var r=o("./node_modules/react/react.js");n.displayName="Icon",n.defaultProps={width:"500",height:"238",viewBox:"0 0 500 238"},e.exports=n,n.default=n},"./src/components/nav-header/style.module.css":function(e,t,o){var n=o("./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/postcss-loader/index.js!./src/components/nav-header/style.module.css");"string"==typeof n&&(n=[[e.id,n,""]]);o("./node_modules/style-loader/addStyles.js")(n,{});n.locals&&(e.exports=n.locals)},"./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/postcss-loader/index.js!./src/components/nav-header/style.module.css":function(e,t,o){t=e.exports=o("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,"._9cLKMoiU6q1XTnLNuryg-{position:fixed;left:0;top:0;display:flex;align-items:center;background:#222;color:#fafafa;height:50px;box-shadow:0 0 5px rgba(0,0,0,.5);width:100%;z-index:100}._3FYqaBkL2ZMko96Ok-EFJ7{display:flex;flex-grow:1;align-items:center;max-width:900px;height:100%;margin-left:auto;margin-right:auto;padding-left:20px;padding-right:20px}._39y5_ZQXzM9xcePR-PC-B2{display:flex}._1DdL6kQZU4FNtA8_v_Fkog,._1XAzy7eui_b4S-WW2Ly_bp{display:flex;align-items:center;font-weight:600;color:#ddd;border:none;margin:0 10px}._1DdL6kQZU4FNtA8_v_Fkog{height:100%;padding:0 10px}._5Ni-NFRPvKc69Fd4bRVV3{color:#fafafa;background:#333}._1DdL6kQZU4FNtA8_v_Fkog:hover,._1XAzy7eui_b4S-WW2Ly_bp:hover{color:#fff}._1XAzy7eui_b4S-WW2Ly_bp{position:relative;margin-left:0;font-size:30px}.S2Yv-RBBMc1FH2Dw2nnO9{width:75px;height:100%;margin:0}",""]),t.locals={header:"_9cLKMoiU6q1XTnLNuryg-",wrapper:"_3FYqaBkL2ZMko96Ok-EFJ7",menu:"_39y5_ZQXzM9xcePR-PC-B2",logo:"_1XAzy7eui_b4S-WW2Ly_bp",menuItem:"_1DdL6kQZU4FNtA8_v_Fkog",active:"_5Ni-NFRPvKc69Fd4bRVV3",icon:"S2Yv-RBBMc1FH2Dw2nnO9"}},"./src/components/subscription-form/index.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.SubscriptionForm=void 0;var i=o("./node_modules/react/react.js"),l=n(i),d=o("./src/components/utils.js"),c=o("./src/components/subscription-form/style.module.css"),m=n(c),u=function(e){function t(o){r(this,t);var n=a(this,e.call(this,o));return n.invited=function(e){"success"===e.result?n.showSuccess(e):n.showError(e)},n.sendForm=function(e){e.preventDefault();var t=e.currentTarget,o=(0,d.serialize)(t),n="//vk.us13.list-manage.com/subscribe/post-json?"+o+"&id=8651e5fe3f&u=e16bb3d05ec796d0d4d06c13d&c=formLoginRequestSuccess",r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src=n,document.getElementsByTagName("head")[0].appendChild(r),document.getElementsByTagName("head")[0].removeChild(r)},n.showError=function(e){n.setState({errors:[e]})},n.showSuccess=function(e){n.setState({status:"success"})},n.state={errors:[],status:"form"},n}return s(t,e),t.prototype.componentDidMount=function(){window.formLoginRequestSuccess=this.invited},t.prototype.render=function(){return l.default.createElement("div",{id:"mc_embed_signup",className:m.default.subscription},"success"===this.state.status&&l.default.createElement("span",{className:m.default.success},"Спасибо, проверьте вашу почту и подтвердите подписку"),"form"===this.state.status&&l.default.createElement("form",{onSubmit:this.sendForm,action:"",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:m.default.form,target:"_blank"},l.default.createElement("input",{type:"email",name:"EMAIL",className:m.default.input,id:"mce-EMAIL",placeholder:"email address",required:!0}),l.default.createElement("div",{style:{position:"absolute",left:"-9999vw"},"aria-hidden":"true"},l.default.createElement("input",{type:"text",name:"b_e16bb3d05ec796d0d4d06c13d_8651e5fe3f",tabIndex:"-1"})),l.default.createElement("div",{className:m.default.errors},this.state.errors.map(function(e){return l.default.createElement("div",{key:e,className:m.default.error,dangerouslySetInnerHTML:{__html:e.msg}})})),l.default.createElement("input",{type:"submit",value:"Subscribe",name:"subscribe",id:"mc-embedded-subscribe",className:m.default.button})))},t}(i.Component);t.SubscriptionForm=u},"./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/postcss-loader/index.js!./src/components/subscription-form/style.module.css":function(e,t,o){t=e.exports=o("./node_modules/css-loader/lib/css-base.js")(),t.i(o("./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/postcss-loader/index.js!./src/css/config.css"),""),t.push([e.id,"._1s0NebIgnUCqTdHFyf70u0{margin-top:20px}._106HlJ8L-EXWnWmcGFiCy{width:100%;display:block;box-sizing:border-box;font-size:var(--base-size);font-family:var(--base-font)}._3saZXTiaksMVLnIEkHc1I7,._34__rfoqQeT0lLqFdixpOn{width:100%;display:block;box-sizing:border-box;font-family:inherit;font-size:inherit;border:1px solid var(--color-grey);padding:calc(var(--base-size) / 2) var(--base-size)}._3saZXTiaksMVLnIEkHc1I7{margin-top:calc(var(--base-size) / 2);background-color:var(--color-light);transition:background-color .15s ease;cursor:pointer;&:hover{background-color:var(--color-grey)}}.nkY2RgzVcUSUlrTRZPvdC{margin:calc(var(--base-size) / 2) 0}._1RYZNvTEB5OT7ePe_P2ntq,.nkY2RgzVcUSUlrTRZPvdC{font-size:calc(var(--base-size) / 1.5)}",""]),t.locals={subscription:"_1s0NebIgnUCqTdHFyf70u0",form:"_106HlJ8L-EXWnWmcGFiCy",input:"_34__rfoqQeT0lLqFdixpOn",button:"_3saZXTiaksMVLnIEkHc1I7",errors:"nkY2RgzVcUSUlrTRZPvdC",error:"_1RYZNvTEB5OT7ePe_P2ntq"}},"./src/components/subscription-form/style.module.css":function(e,t,o){var n=o("./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/postcss-loader/index.js!./src/components/subscription-form/style.module.css");"string"==typeof n&&(n=[[e.id,n,""]]);o("./node_modules/style-loader/addStyles.js")(n,{});n.locals&&(e.exports=n.locals)},"./src/components/utils.js":function(e,t){"use strict";function o(e){var t=e.toLowerCase(),o=t.replace(/\s/g,"_");return o}function n(e){if(e&&"FORM"===e.nodeName){var t=void 0,o=void 0,n=[];for(t=e.elements.length-1;t>=0;t-=1)if(""!==e.elements[t].name)switch(e.elements[t].nodeName){case"INPUT":switch(e.elements[t].type){case"text":case"email":case"hidden":case"password":case"button":case"reset":case"submit":n.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value));break;case"checkbox":case"radio":e.elements[t].checked&&n.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value));break;case"file":}break;case"TEXTAREA":n.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value));break;case"SELECT":switch(e.elements[t].type){case"select-one":n.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value));break;case"select-multiple":for(o=e.elements[t].options.length-1;o>=0;o-=1)e.elements[t].options[o].selected&&n.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].options[o].value))}break;case"BUTTON":switch(e.elements[t].type){case"reset":case"submit":case"button":n.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value))}}return n.join("&")}}function r(e,t){var o=new XMLHttpRequest;o.open("GET",e,!0),o.onload=function(){o.status>=200&&o.status<400?t(JSON.parse(o.responseText)):console.error("Server error: ",o)},o.onerror=function(){console.error("Connection error: ",o)},o.send()}function a(e){function t(){var e="now"in window.performance?performance.now():(new Date).getTime(),l=Math.min(1,(e-i)/o),d=a[n](l);return window.scroll(0,Math.ceil(d*(m-s)+s)),window.pageYOffset===m?void(r&&r()):void requestAnimationFrame(t)}var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"linear",r=arguments[3],a={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},s=window.pageYOffset,i="now"in window.performance?performance.now():(new Date).getTime(),l=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),d=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,c="number"==typeof e?e:e.offsetTop,m=Math.round(l-c<d?l-d:c);return"requestAnimationFrame"in window==!1?(window.scroll(0,m),void(r&&r())):void t()}t.__esModule=!0,t.toSnakeCase=o,t.serialize=n,t.getJSON=r,t.scrollIt=a},"./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/postcss-loader/index.js!./src/css/config.css":function(e,t,o){t=e.exports=o("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,":root{--base-font:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif;--base-size:16px;--color-red:#df4b26;--color-grey:#f7f7f7;--color-dark:#000;--color-light:#fff}",""])},"./node_modules/css-loader/index.js!./src/css/config.css":function(e,t,o){t=e.exports=o("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,":root{--base-font:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif;--base-size:16px;--color-red:#df4b26;--color-grey:#f7f7f7;--color-dark:#000;--color-light:#fff}",""])},"./src/css/index.css":function(e,t,o){t=e.exports=o("./node_modules/css-loader/lib/css-base.js")(),t.i(o("./node_modules/css-loader/index.js!./src/css/config.css"),""),t.push([e.id,"body,html{margin:0;padding:0;width:100%;min-height:100%;display:flex}body{font-family:var(--base-font);font-size:var(--base-size);background:var(--color-light);color:var(--color-dark)}a{color:var(--color-red);text-decoration:none;border-bottom-width:1px;border-bottom-style:solid}a.no-border{border-bottom:none}a:focus,a:hover{cursor:pointer;border:none}dl,p{margin:0;padding:.5em 0}.app{min-width:100%;min-height:100%}.app,.page{display:flex}.page{flex-direction:column;padding:70px 0 1em;width:100%}.page,.page--header{box-sizing:border-box}.page--header{padding:0 1em}.page--heading{margin:0;padding:0 0 .5em}.page--aside{box-sizing:border-box;padding:0 1em;order:1;margin-top:1em;border-top:1px solid #eee}.page--container{display:flex;flex-direction:column;flex-grow:1}.page--logo{float:right;padding:1em 0}.page--content{box-sizing:border-box;padding:0 1em}.page--footer{box-sizing:border-box;padding:40px 1em;font-size:.9em}.contacts--desc{margin-left:0;-webkit-margin-start:0;&+.contacts--term{margin-top:calc(var(--base-size) / 2)}}@media screen and (min-width:700px){.page{flex-flow:column wrap;align-content:flex-start}.page--aside{flex-basis:250px;order:1;margin-top:0;border-top:none}.page--logo{float:none}.page--container{flex-direction:row}.page--content{flex-basis:calc(100% - 250px)}}@media screen and (min-width:950px){.page{width:900px;margin-left:auto;margin-right:auto}}",""])},"./src/css/typography.css":function(e,t,o){t=e.exports=o("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,'html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,optgroup,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}html{font:112.5%/1.45em georgia,serif;box-sizing:border-box;overflow-y:scroll}*,:after,:before{box-sizing:inherit}body{color:rgba(0,0,0,.8);font-family:georgia,serif;font-weight:400;word-wrap:break-word;font-kerning:normal;-moz-font-feature-settings:"kern","liga","clig","calt";-ms-font-feature-settings:"kern","liga","clig","calt";-webkit-font-feature-settings:"kern","liga","clig","calt";font-feature-settings:"kern","liga","clig","calt"}img{max-width:100%;margin:0 0 .85rem;padding:0}h1{margin:0 0 .85rem;font-size:2.25rem;line-height:2.9rem}h1,h2{padding:0;color:inherit;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:700;text-rendering:optimizeLegibility}h2{margin-bottom:0 0 .85rem;font-size:1.62671rem;line-height:2.175rem}h3{font-size:1.38316rem;line-height:2.175rem}h3,h4{margin:0 0 .85rem;padding:0;color:inherit;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:700;text-rendering:optimizeLegibility}h4{font-size:1rem;line-height:.85rem}h5{margin:0 0 .85rem;font-size:.85028rem}h5,h6{padding:0;color:inherit;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:700;text-rendering:optimizeLegibility;line-height:.85rem}h6{font-size:.78405rem}h6,hgroup{margin-bottom:0 0 .85rem}hgroup{padding:0}ul{margin:0 0 .85rem .85rem}ol,ul{padding:0;list-style-position:outside;list-style-image:none}ol{margin-bottom:0 0 .85rem .85rem}dl{padding:0;margin-bottom:0 0 .85rem}dd,figure,p{padding:0}dd,figure,p,pre{margin:0 0 .85rem}pre{font-size:.85rem;line-height:1.42;background:rgba(0,0,0,.04);border-radius:3px;overflow:auto;word-wrap:normal;padding:.85rem}table{font-size:1rem;line-height:.85rem;border-collapse:collapse;width:100%}fieldset,table{margin:0 0 .85rem;padding:0}blockquote{margin-bottom:0 .85rem .85rem;padding:0}form,iframe,noscript{margin:0 0 .85rem;padding:0}hr{margin:0 0 calc(.85rem - 1px);padding:0;background:rgba(0,0,0,.2);border:none;height:1px}address{margin:0 0 .85rem;padding:0}b,strong,th{font-weight:700}li{margin-bottom:0.425rem}ol li,ul li{padding-left:0}li>ol,li>ul{margin-left:.85rem;margin-bottom:0.425rem;margin-top:0.425rem}blockquote :last-child,li :last-child,p :last-child{margin-bottom:0}li>p{margin-bottom:0.425rem}code,kbd,samp{font-size:.85rem;line-height:.85rem}abbr,abbr[title],acronym{border-bottom:1px dotted rgba(0,0,0,.5);cursor:help}abbr[title]{text-decoration:none}td,th,thead{text-align:left}td,th{border-bottom:1px solid rgba(0,0,0,.12);font-feature-settings:"tnum";-moz-font-feature-settings:"tnum";-ms-font-feature-settings:"tnum";-webkit-font-feature-settings:"tnum";padding-top:.725rem .96667rem calc(.725rem - 1px)}td:first-child,th:first-child{padding-left:0}td:last-child,th:last-child{padding-right:0}code,tt{background-color:rgba(0,0,0,.04);border-radius:3px;font-family:SFMono-Regular,Consolas,Roboto Mono,Droid Sans Mono,Liberation Mono,Menlo,Courier,monospace;padding:0;padding-top:.2em;padding-bottom:.2em}pre code{background:none;line-height:1.42}code:after,code:before,tt:after,tt:before{letter-spacing:-.2em;content:" "}pre code:after,pre code:before,pre tt:after,pre tt:before{content:""}@media only screen and (max-width:480px){html{font-size:100%}}',""])},"./src/layouts/index.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.defaultHelmetMeta=void 0;var r=o("./node_modules/react/react.js"),a=n(r),s=o("./src/components/subscription-form/index.js"),i=o("./src/components/nav-header/index.js");o("./src/css/typography.css"),o("./src/css/index.css");var l=function(e){return a.default.createElement("div",{className:"page"},a.default.createElement(i.SiteHeader,null),a.default.createElement("div",{className:"page--container"},a.default.createElement("aside",{className:"page--aside"},a.default.createElement("a",{className:"no-border",href:"/"},a.default.createElement("picture",{className:"logo page--logo"},a.default.createElement("source",{type:"image/webp",srcSet:" https://ucarecdn.com/3d33c161-b440-4710-b3dd-ad980640dba8/-/preview/-/resize/200x/-/format/webp/spb_frontend_logo.webp 1x, https://ucarecdn.com/3d33c161-b440-4710-b3dd-ad980640dba8/-/preview/-/resize/400x/-/format/webp/-/quality/lightest/spb_frontend_logo@2x.webp 2x"}),a.default.createElement("img",{src:"https://ucarecdn.com/3d33c161-b440-4710-b3dd-ad980640dba8/-/preview/-/resize/200x/spb_frontend_logo.png",srcSet:"https://ucarecdn.com/3d33c161-b440-4710-b3dd-ad980640dba8/-/preview/-/resize/400x/-/quality/lightest/spb_frontend_logo@2x.png 2x",alt:"SPB Frontend. Frontend artisans"}))),a.default.createElement("dl",{className:"contacts"},a.default.createElement("dt",{className:"contacts--term"},"ВКонтакте"),a.default.createElement("dd",{className:"contacts--desc"},a.default.createElement("a",{href:"https://vk.com/spb_frontend"},"spb_frontend")),a.default.createElement("dt",{className:"contacts--term"},"Твитер"),a.default.createElement("dd",{className:"contacts--desc"},a.default.createElement("a",{href:"https://twitter.com/spb_frontend"},"@spb_frontend")),a.default.createElement("dt",{className:"contacts--term"},"Канал в Телеграме"),a.default.createElement("dd",{className:"contacts--desc"},a.default.createElement("a",{href:"https://t.me/spb_frontend"},"@spb_frontend")),a.default.createElement("dt",{className:"contacts--term"},"Канал на ютубе"),a.default.createElement("dd",{className:"contacts--desc"},a.default.createElement("a",{href:"https://www.youtube.com/channel/UCWjDubFXv8I1vWEb47s9_IA"},"SPB Frontend")),a.default.createElement("dt",{className:"contacts--term"},"Слак-чат"),a.default.createElement("dd",{className:"contacts--desc"},a.default.createElement("a",{href:"https://spb-frontend.slack.com/"},"spb-frontend.slack.com")),a.default.createElement("dt",{className:"contacts--term"},"Регистрация в Слак"),a.default.createElement("dd",{className:"contacts--desc"},a.default.createElement("a",{href:"http://slack.spb-frontend.ru/"},"slack.spb-frontend.ru")),a.default.createElement("dt",{className:"contacts--term"},"Гитхаб"),a.default.createElement("dd",{className:"contacts--desc"},a.default.createElement("a",{href:"https://github.com/spb-frontend"},"spb-frontend")),a.default.createElement("dt",{className:"contacts--term"},"Почта"),a.default.createElement("dd",{className:"contacts--desc"},a.default.createElement("a",{href:"mailto:hi@spb-frontend.ru"},"hi@spb-frontend.ru"))),a.default.createElement(s.SubscriptionForm,null)),a.default.createElement("main",{className:"page--content"},e.children())),a.default.createElement("footer",{className:"page--footer"},a.default.createElement("div",null,a.default.createElement("a",{href:"https://github.com/spb-frontend/spb-frontend.ru"},"Сайт на гитхабе"))))};t.default=l;t.defaultHelmetMeta=[a.default.createElement("meta",{key:"og:title",property:"og:title",content:"SPB Frontend"}),a.default.createElement("meta",{key:"og:description",property:"og:description",content:"Петербургское сообщество фронтенд-разработчиков"}),a.default.createElement("meta",{key:"og:image",property:"og:image",content:"https://ucarecdn.com/3d33c161-b440-4710-b3dd-ad980640dba8/-/preview/-/resize/1200x/-/crop/1200x630/0,300/spb_frontend_social.png"}),a.default.createElement("meta",{key:"og:url",property:"og:url",content:"http://spb-frontend.ru/"}),a.default.createElement("meta",{key:"twitter:card",name:"twitter:card",content:"summary_large_image"}),a.default.createElement("meta",{key:"twitter:site",name:"twitter:site",content:"@spb_frontend"}),a.default.createElement("meta",{key:"twitter:image:alt",name:"twitter:image:alt",content:"SPB Frontend. Frontend artisans"}),a.default.createElement("meta",{key:"description",name:"description",content:"Петербургское сообщество фронтенд-разработчиков"}),a.default.createElement("meta",{key:"keywords",name:"keywords",content:"frontend, spb-frontend"})]}});
//# sourceMappingURL=component---src-layouts-index-js-dd0602f1ec2477cf92f7.js.map