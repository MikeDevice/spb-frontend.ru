webpackJsonp([0x1ad8c49d4e13dc00],{'./node_modules/babel-loader/lib/index.js?{"plugins":["/home/circleci/repo/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/home/circleci/repo/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/circleci/repo/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/home/circleci/repo/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/home/circleci/repo/node_modules/babel-preset-stage-0/lib/index.js","/home/circleci/repo/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/components/person-page/index.js':function(e,t,l){"use strict";function c(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=l("./node_modules/react/react.js"),a=c(n),r=l("./src/components/person-page/style.module.css"),o=c(r),s=l("./node_modules/gatsby-link/index.js"),d=c(s),m=l("./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/telegram.svg"),i=c(m),u=l("./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/vk.svg"),p=c(u),g=l("./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/slack.svg"),f=c(g),E=l("./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/twitter.svg"),y=c(E),b=function(e){var t=e.user,l=e.link,c=e.children,n=t?a.default.createElement("span",{className:o.default.social_icon},a.default.createElement("a",{target:"_blank",href:l},c)):null;return n};t.default=function(e){var t=e.pathContext.data,l=t.name,c=t.lastname,n=(t.position,t.vk),r=t.telegram,s=t.twitter,m=t.slack,u=t.company,g=t.podcasts,E=t.photo;return a.default.createElement("div",null,a.default.createElement("div",{className:o.default.back_link},a.default.createElement(d.default,{to:"/person/"},"<"," назад")),a.default.createElement("div",{className:o.default.person},a.default.createElement("div",{className:o.default.person_info},a.default.createElement("h2",null,l," ",c),a.default.createElement("div",{className:o.default.company},u),a.default.createElement("div",{className:o.default.social},a.default.createElement(b,{link:"https://vk.com/"+n,user:n},a.default.createElement(p.default,null)),a.default.createElement(b,{link:"https://t.me/"+r,user:r},a.default.createElement(i.default,null)),a.default.createElement(b,{link:s,user:s},a.default.createElement(y.default,null)),a.default.createElement(b,{link:"https://spb-frontend.slack.com/",user:m},a.default.createElement(f.default,null)))),a.default.createElement("div",{className:o.default.person_image},E?a.default.createElement("img",{src:"https:"+E.file.url+"?fit=thumb&h=200&w=200"}):a.default.createElement("img",{src:"/Person-placeholder.jpg"}))),a.default.createElement("div",null,a.default.createElement("h4",null,"Подкасты:"),g.map(function(e,t){var l=e.title,c=e.number;return a.default.createElement("div",{className:o.default.podcast_item,key:t},a.default.createElement(d.default,{target:"_blank",to:"/podcast/"+c},l))})))},e.exports=t.default},"./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/postcss-loader/index.js!./src/components/person-page/style.module.css":function(e,t,l){t=e.exports=l("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,"._2PqyTbrstzfNMei_7XfyBi{margin-bottom:10px}.BAhzCQ156f8dfQp82SLbM{display:flex;flex-direction:column}._3oO4wBB7J-6rcNQAwbng6G{order:2}._2tpoua_IbVoTl7i4kYtofm{width:150px;height:150px;margin:0 auto;border-radius:50%;overflow:hidden}._2tpoua_IbVoTl7i4kYtofm img{margin:0;padding:0}.VrCoyT9Wx1B9iN28jg696{margin-bottom:10px}._18lspL79In0xnwduT96w_m{font-style:italic}._1YMOqSHW2UmeKhitbSebE6{margin-bottom:20px}._1Pa-OIjP7FZxwmb-dGbbGC{display:inline-block;width:30px;height:30px;margin:5px}._1Pa-OIjP7FZxwmb-dGbbGC a{border-bottom:none}@media screen and (min-width:768px){.BAhzCQ156f8dfQp82SLbM{flex-direction:row}._2tpoua_IbVoTl7i4kYtofm,._3oO4wBB7J-6rcNQAwbng6G{order:1}}",""]),t.locals={back_link:"_2PqyTbrstzfNMei_7XfyBi",person:"BAhzCQ156f8dfQp82SLbM",person_info:"_3oO4wBB7J-6rcNQAwbng6G",person_image:"_2tpoua_IbVoTl7i4kYtofm",podcast_item:"VrCoyT9Wx1B9iN28jg696",company:"_18lspL79In0xnwduT96w_m",social:"_1YMOqSHW2UmeKhitbSebE6",social_icon:"_1Pa-OIjP7FZxwmb-dGbbGC"}},"./src/components/person-page/style.module.css":function(e,t,l){var c=l("./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/postcss-loader/index.js!./src/components/person-page/style.module.css");"string"==typeof c&&(c=[[e.id,c,""]]);l("./node_modules/style-loader/addStyles.js")(c,{});c.locals&&(e.exports=c.locals)},"./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/slack.svg":function(e,t,l){function c(e){return n.createElement("svg",e,[n.createElement("g",{key:0},n.createElement("g",null,n.createElement("path",{d:"M509.762,274.567c-7.776-23.968-33.504-37.056-57.472-29.28l-45.952,14.944c-10.176-31.36-21.024-64.704-31.2-96\n\t\t\tc27.936-9.088,45.952-14.944,45.952-14.944c23.968-7.776,37.056-33.504,29.28-57.472c-7.776-23.968-33.504-37.056-57.472-29.28\n\t\t\tl-45.952,14.944c-9.088-27.936-14.944-45.952-14.944-45.952c-7.744-23.936-33.472-37.056-57.44-29.28s-37.056,33.504-29.28,57.472\n\t\t\tl14.944,45.952l-96,31.2c-9.056-27.936-14.912-45.952-14.912-45.952c-7.808-23.968-33.536-37.088-57.472-29.28\n\t\t\tc-23.968,7.776-37.088,33.504-29.28,57.44l14.944,45.984l-47.424,15.424c-22.4,8.096-34.976,32.256-28.288,55.488\n\t\t\tc6.976,24.192,32.672,38.944,56.448,31.232c0.192-0.064,18.848-6.112,47.424-15.424l31.2,96l-47.424,15.424\n\t\t\tc-22.368,8.096-34.944,32.256-28.288,55.488c6.976,24.192,32.672,38.976,56.448,31.232c0.192-0.064,18.848-6.112,47.456-15.424\n\t\t\tl15.424,47.424c8.096,22.368,32.256,34.944,55.488,28.288c24.192-6.976,38.976-32.672,31.232-56.448\n\t\t\tc-0.064-0.192-6.112-18.816-15.392-47.424c31.36-10.176,64.704-21.024,96-31.2l15.424,47.424\n\t\t\tc8.096,22.368,32.256,34.944,55.488,28.288c24.192-6.976,38.976-32.672,31.232-56.448c-0.064-0.192-6.112-18.816-15.424-47.424\n\t\t\tc27.936-9.088,45.952-14.944,45.952-14.944C504.418,324.263,517.538,298.535,509.762,274.567z M223.618,319.623\n\t\t\tc-10.208-31.36-21.024-64.704-31.2-96c31.36-10.176,64.704-21.024,96-31.2l31.2,96L223.618,319.623z"}))),n.createElement("g",{key:1}),n.createElement("g",{key:2}),n.createElement("g",{key:3}),n.createElement("g",{key:4}),n.createElement("g",{key:5}),n.createElement("g",{key:6}),n.createElement("g",{key:7}),n.createElement("g",{key:8}),n.createElement("g",{key:9}),n.createElement("g",{key:10}),n.createElement("g",{key:11}),n.createElement("g",{key:12}),n.createElement("g",{key:13}),n.createElement("g",{key:14}),n.createElement("g",{key:15})])}var n=l("./node_modules/react/react.js");c.displayName="Icon",c.defaultProps={version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 512.002 512.002",style:{enableBackground:"new 0 0 512.002 512.002"},xmlSpace:"preserve"},e.exports=c,c.default=c},"./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/telegram.svg":function(e,t,l){function c(e){return n.createElement("svg",e,n.createElement("path",{d:"M152.53 179.476c-1.48 0-2.95-.438-4.21-1.293l-47.64-32.316-25.553 18.386c-2.004 1.44-4.587 1.804-6.914.972-2.324-.834-4.09-2.76-4.72-5.146l-12.83-48.623-45.842-17.53C1.936 92.825.02 90.064 0 86.974c-.02-3.09 1.855-5.877 4.727-7.02l174.312-69.36c.79-.336 1.627-.53 2.47-.582.303-.017.606-.017.907 0 1.748.104 3.465.816 4.805 2.13.14.136.27.275.396.42 1.11 1.268 1.72 2.814 1.835 4.39.028.395.026.796-.01 1.197-.023.286-.064.57-.122.854L159.9 173.38c-.473 2.48-2.16 4.556-4.493 5.523-.925.384-1.902.573-2.874.573zm-47.668-48.897l42.437 28.784L170.192 39.24l-82.687 79.566 17.156 11.638c.07.043.135.09.2.135zm-35.327-6.402l5.682 21.53 12.242-8.81-16.03-10.873c-.746-.504-1.384-1.132-1.895-1.847zm-41.4-37.396l31.48 12.035c2.254.862 3.956 2.758 4.572 5.092l3.992 15.128c.182-1.745.973-3.387 2.258-4.624l78.79-75.814L28.135 86.782z"}))}var n=l("./node_modules/react/react.js");c.displayName="Icon",c.defaultProps={viewBox:"0 0 189.473 189.473"},e.exports=c,c.default=c},"./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/twitter.svg":function(e,t,l){function c(e){return n.createElement("svg",e,[n.createElement("g",{key:0},n.createElement("g",null,n.createElement("path",{style:{fill:"#010002"},d:"M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411\n\t\t\tc-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513\n\t\t\tc0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101\n\t\t\tc0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104\n\t\t\tc-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194\n\t\t\tc-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485\n\t\t\tc230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z"}))),n.createElement("g",{key:1}),n.createElement("g",{key:2}),n.createElement("g",{key:3}),n.createElement("g",{key:4}),n.createElement("g",{key:5}),n.createElement("g",{key:6}),n.createElement("g",{key:7}),n.createElement("g",{key:8}),n.createElement("g",{key:9}),n.createElement("g",{key:10}),n.createElement("g",{key:11}),n.createElement("g",{key:12}),n.createElement("g",{key:13}),n.createElement("g",{key:14}),n.createElement("g",{key:15})])}var n=l("./node_modules/react/react.js");c.displayName="Icon",c.defaultProps={version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 612 612",style:{enableBackground:"new 0 0 612 612"},xmlSpace:"preserve"},e.exports=c,c.default=c},"./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/vk.svg":function(e,t,l){function c(e){return n.createElement("svg",e,[n.createElement("g",{key:0},n.createElement("path",{d:"M545.451,400.298c-0.664-1.431-1.283-2.618-1.858-3.569c-9.514-17.135-27.695-38.167-54.532-63.102l-0.567-0.571\n\t\tl-0.284-0.28l-0.287-0.287h-0.288c-12.18-11.611-19.893-19.418-23.123-23.415c-5.91-7.614-7.234-15.321-4.004-23.13\n\t\tc2.282-5.9,10.854-18.36,25.696-37.397c7.807-10.089,13.99-18.175,18.556-24.267c32.931-43.78,47.208-71.756,42.828-83.939\n\t\tl-1.701-2.847c-1.143-1.714-4.093-3.282-8.846-4.712c-4.764-1.427-10.853-1.663-18.278-0.712l-82.224,0.568\n\t\tc-1.332-0.472-3.234-0.428-5.712,0.144c-2.475,0.572-3.713,0.859-3.713,0.859l-1.431,0.715l-1.136,0.859\n\t\tc-0.952,0.568-1.999,1.567-3.142,2.995c-1.137,1.423-2.088,3.093-2.848,4.996c-8.952,23.031-19.13,44.444-30.553,64.238\n\t\tc-7.043,11.803-13.511,22.032-19.418,30.693c-5.899,8.658-10.848,15.037-14.842,19.126c-4,4.093-7.61,7.372-10.852,9.849\n\t\tc-3.237,2.478-5.708,3.525-7.419,3.142c-1.715-0.383-3.33-0.763-4.859-1.143c-2.663-1.714-4.805-4.045-6.42-6.995\n\t\tc-1.622-2.95-2.714-6.663-3.285-11.136c-0.568-4.476-0.904-8.326-1-11.563c-0.089-3.233-0.048-7.806,0.145-13.706\n\t\tc0.198-5.903,0.287-9.897,0.287-11.991c0-7.234,0.141-15.085,0.424-23.555c0.288-8.47,0.521-15.181,0.716-20.125\n\t\tc0.194-4.949,0.284-10.185,0.284-15.705s-0.336-9.849-1-12.991c-0.656-3.138-1.663-6.184-2.99-9.137\n\t\tc-1.335-2.95-3.289-5.232-5.853-6.852c-2.569-1.618-5.763-2.902-9.564-3.856c-10.089-2.283-22.936-3.518-38.547-3.71\n\t\tc-35.401-0.38-58.148,1.906-68.236,6.855c-3.997,2.091-7.614,4.948-10.848,8.562c-3.427,4.189-3.905,6.475-1.431,6.851\n\t\tc11.422,1.711,19.508,5.804,24.267,12.275l1.715,3.429c1.334,2.474,2.666,6.854,3.999,13.134c1.331,6.28,2.19,13.227,2.568,20.837\n\t\tc0.95,13.897,0.95,25.793,0,35.689c-0.953,9.9-1.853,17.607-2.712,23.127c-0.859,5.52-2.143,9.993-3.855,13.418\n\t\tc-1.715,3.426-2.856,5.52-3.428,6.28c-0.571,0.76-1.047,1.239-1.425,1.427c-2.474,0.948-5.047,1.431-7.71,1.431\n\t\tc-2.667,0-5.901-1.334-9.707-4c-3.805-2.666-7.754-6.328-11.847-10.992c-4.093-4.665-8.709-11.184-13.85-19.558\n\t\tc-5.137-8.374-10.467-18.271-15.987-29.691l-4.567-8.282c-2.855-5.328-6.755-13.086-11.704-23.267\n\t\tc-4.952-10.185-9.329-20.037-13.134-29.554c-1.521-3.997-3.806-7.04-6.851-9.134l-1.429-0.859c-0.95-0.76-2.475-1.567-4.567-2.427\n\t\tc-2.095-0.859-4.281-1.475-6.567-1.854l-78.229,0.568c-7.994,0-13.418,1.811-16.274,5.428l-1.143,1.711\n\t\tC0.288,140.146,0,141.668,0,143.763c0,2.094,0.571,4.664,1.714,7.707c11.42,26.84,23.839,52.725,37.257,77.659\n\t\tc13.418,24.934,25.078,45.019,34.973,60.237c9.897,15.229,19.985,29.602,30.264,43.112c10.279,13.515,17.083,22.176,20.412,25.981\n\t\tc3.333,3.812,5.951,6.662,7.854,8.565l7.139,6.851c4.568,4.569,11.276,10.041,20.127,16.416\n\t\tc8.853,6.379,18.654,12.659,29.408,18.85c10.756,6.181,23.269,11.225,37.546,15.126c14.275,3.905,28.169,5.472,41.684,4.716h32.834\n\t\tc6.659-0.575,11.704-2.669,15.133-6.283l1.136-1.431c0.764-1.136,1.479-2.901,2.139-5.276c0.668-2.379,1-5,1-7.851\n\t\tc-0.195-8.183,0.428-15.558,1.852-22.124c1.423-6.564,3.045-11.513,4.859-14.846c1.813-3.33,3.859-6.14,6.136-8.418\n\t\tc2.282-2.283,3.908-3.666,4.862-4.142c0.948-0.479,1.705-0.804,2.276-0.999c4.568-1.522,9.944-0.048,16.136,4.429\n\t\tc6.187,4.473,11.99,9.996,17.418,16.56c5.425,6.57,11.943,13.941,19.555,22.124c7.617,8.186,14.277,14.271,19.985,18.274\n\t\tl5.708,3.426c3.812,2.286,8.761,4.38,14.853,6.283c6.081,1.902,11.409,2.378,15.984,1.427l73.087-1.14\n\t\tc7.229,0,12.854-1.197,16.844-3.572c3.998-2.379,6.373-5,7.139-7.851c0.764-2.854,0.805-6.092,0.145-9.712\n\t\tC546.782,404.25,546.115,401.725,545.451,400.298z"})),n.createElement("g",{key:1}),n.createElement("g",{key:2}),n.createElement("g",{key:3}),n.createElement("g",{key:4}),n.createElement("g",{key:5}),n.createElement("g",{key:6}),n.createElement("g",{key:7}),n.createElement("g",{key:8}),n.createElement("g",{key:9}),n.createElement("g",{key:10}),n.createElement("g",{key:11}),n.createElement("g",{key:12}),n.createElement("g",{key:13}),n.createElement("g",{key:14}),n.createElement("g",{key:15})])}var n=l("./node_modules/react/react.js");c.displayName="Icon",c.defaultProps={version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 548.358 548.358",style:{enableBackground:"new 0 0 548.358 548.358"},xmlSpace:"preserve"},e.exports=c,c.default=c}});
//# sourceMappingURL=component---src-components-person-page-index-js-3c9f9dacadf79d96f043.js.map