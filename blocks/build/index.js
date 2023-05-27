!function(e){var t={};function a(l){if(t[l])return t[l].exports;var n=t[l]={i:l,l:!1,exports:{}};return e[l].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,l){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(a.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(l,n,function(t){return e[t]}.bind(null,n));return l},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=13)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.primitives},function(e,t,a){var l;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var i=typeof l;if("string"===i||"number"===i)e.push(l);else if(Array.isArray(l)){if(l.length){var r=n.apply(null,l);r&&e.push(r)}}else if("object"===i)if(l.toString===Object.prototype.toString)for(var c in l)a.call(l,c)&&l[c]&&e.push(c);else e.push(l.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(l=function(){return n}.apply(t,[]))||(e.exports=l)}()},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.data},function(e,t){e.exports=window.wp.keycodes},function(e,t){e.exports=window.wp.blocks},function(e){e.exports=JSON.parse('{"apiVersion":2,"version":"1.0.0","textdomain":"site-functionality","name":"site-functionality/defender","title":"Defender","category":"text","collection":"site-functionality","icon":"id","className":"defender","description":"Display a defender element on page","keywords":["defender","social"],"attributes":{"id":{"type":"number","default":0},"url":{"type":"string"},"alt":{"type":"string","source":"attribute","selector":"img","attribute":"alt","default":""},"tagName":{"type":"string","default":"article"},"layout":{"type":"constrained"}},"supports":{"align":true,"anchor":true,"color":{"background":true,"text":true,"gradients":false,"link":false},"customClassName":true,"spacing":{"padding":false,"margin":false,"blockGap":true,"__experimentalDefaultControls":{"padding":true,"blockGap":true}},"defaultStylePicker":false,"__experimentalLayout":false},"variations":[],"styles":[],"example":{},"style":"file:../../build/style-index.css","editorScript":"site-functionality","editorStyle":"file:../../build/index.css"}')},function(e){e.exports=JSON.parse('{"apiVersion":2,"version":"1.0.0","textdomain":"site-functionality","name":"site-functionality/page-nav","title":"Page Navigation","category":"text","collection":"site-functionality","icon":"button","className":"page-nav","description":"Display an internal page navigation element.","keywords":["navigation","page menu","button"],"attributes":{},"supports":{"align":true,"anchor":true,"color":{"background":false,"text":false,"gradients":false,"link":false},"customClassName":true,"defaultStylePicker":false,"__experimentalLayout":false,"multiple":false},"variations":[],"styles":[],"example":{},"style":"file:../../build/style-index.css","editorScript":"site-functionality","editorStyle":"file:../../build/index.css"}')},function(e){e.exports=JSON.parse('{"apiVersion":2,"version":"1.0.0","textdomain":"site-functionality","name":"site-functionality/link-group","title":"Link Group","icon":"admin-links","category":"text","collection":"site-functionality","description":"Display a linked group of blocks.","keywords":["callout","group","button"],"attributes":{"url":{"type":"string","default":""},"linkTarget":{"type":"string"},"rel":{"type":"string"},"className":{"type":"string","default":"link-group"},"anchor":{"type":"string"},"attributesForBlocks":{"title":"","data-vars-ga-label":"","data-vars-ga-category":""}},"supports":{"align":true,"anchor":true,"color":{"background":true,"text":true,"gradients":false,"link":false},"customClassName":true,"defaultStylePicker":false,"__experimentalLayout":false,"__experimentalStyle":false,"__experimentalBorder":false},"example":{"attributes":{"className":"link-group","url":"#"},"innerBlocks":[{"name":"core/group","attributes":{},"innerBlocks":[{"name":"core/image","attributes":{"className":"link-group__image","sizeSlug":"medium","url":"https://live.staticflickr.com/7271/6941148040_e7221059d9_b.jpg"}},{"name":"core/paragraph","attributes":{"className":"link-group__content","content":"Donate to the Uru-eu-Wau-Wau Association"}}]}]},"style":"file:../../build/style-index.css","editorScript":"site-functionality","editorStyle":"file:../../build/index.css"}')},function(e){e.exports=JSON.parse('{"apiVersion":2,"version":"1.0.0","textdomain":"site-functionality","name":"site-functionality/social-card","title":"Social Card","category":"media","collection":"site-functionality","description":"Display a social card on page","keywords":["share","social"],"attributes":{"id":{"type":"number","default":0},"url":{"type":"string","default":""},"alt":{"type":"string","default":""},"sizeSlug":{"type":"string","default":"social-medium"},"sizes":{"type":"array","default":[]},"title":{"type":"string","default":""},"link":{"type":"string","default":""},"instagram":{"type":"string","default":""},"twitter":{"type":"string","default":""},"message":{"type":"string","default":""},"placeholderTitle":{"type":"string","default":"Our Forests. #OurResponsiblity. Pass it On"},"placeholderUrl":{"type":"string","default":""},"placeholderMessage":{"type":"string","default":""},"hashtags":{"type":"string","default":""},"via":{"type":"string","default":""},"related":{"type":"string","default":""},"className":{"type":"string","default":"social-card"}},"supports":{"align":false,"anchor":true,"color":{"background":false,"text":false,"gradients":false,"link":false},"customClassName":true,"defaultStylePicker":false,"__experimentalLayout":false,"__experimentalStyle":false,"__experimentalBorder":false},"example":{"attributes":{"className":"social-card"}},"style":"file:../../build/style-index.css","editorScript":"site-functionality","editorStyle":"file:../../build/index.css"}')},function(e,t,a){"use strict";a.r(t),a.d(t,"registerBlocks",(function(){return q}));var l={};a.r(l),a.d(l,"name",(function(){return v})),a.d(l,"category",(function(){return O})),a.d(l,"settings",(function(){return k}));var n={};a.r(n),a.d(n,"name",(function(){return x})),a.d(n,"category",(function(){return N})),a.d(n,"settings",(function(){return E}));var i={};a.r(i),a.d(i,"name",(function(){return I})),a.d(i,"category",(function(){return T})),a.d(i,"settings",(function(){return A}));var r={};a.r(r),a.d(r,"name",(function(){return F})),a.d(r,"category",(function(){return J})),a.d(r,"settings",(function(){return Z}));var c=a(8),o=a(1),s=a(9),u=a(0),d=a(2),m=a(5),p=a(6),g=a(4),f=a.n(g);const b=["image"],h=[["core/group",{className:"row",layout:{type:"flex",flexWrap:"nowrap",verticalAlignment:"top"}},[["core/group",{className:"defender__profile",layout:{type:"flex",orientation:"vertical"}},[["core/image",{className:"defender__profile-image",sizeSlug:"thumbnail"}],["core/group",{className:"profile__wrapper",layout:{type:"flex",orientation:"vertical"}},[["core/heading",{className:"defender__profile-title",placeholder:Object(o.__)("Add Name...","site-functionality"),level:3}],["core/social-links",{className:"is-style-logos-only defender__social-links",iconColor:"green-dark",openInNewTab:!0,showLabels:!0,size:"has-normal-icon-size",layout:{type:"flex",orientation:"vertical"}},[["core/social-link",{url:"https://instagram.com/username",service:"instagram",label:"username"}],["core/social-link",{url:"https://twitter.com/handle",service:"twitter",label:"handle"}]]],["core/paragraph",{className:"defender__profile-bio content",placeholder:Object(o.__)("Add bio...","site-functionality")}]]]]],["core/group",{className:"defender__forest",layout:{type:"flex",orientation:"vertical"}},[["core/image",{className:"defender__forest-image",sizeSlug:"medium"}],["core/heading",{className:"defender__forest-title",placeholder:Object(o.__)("Add Forest Name ...","site-functionality"),level:3}],["core/paragraph",{className:"defender__forest-description content",placeholder:Object(o.__)("Add forest description...","site-functionality")}]]]]]],y=["core/group","core/heading","core/paragraph","core/image","core/social-links"];const{name:v,category:O}=s,k={edit:e=>{const{attributes:{id:t,url:a,alt:l,tagName:n,layout:i},className:r,setAttributes:c}=e,s=e=>{e&&e.url?c({url:e.url,id:e.id,alt:null==e?void 0:e.alt}):c({url:null,id:null,alt:null})},p=!!a&&Object(u.createElement)("img",{src:a,alt:l}),g={backgroundImage:a?`url(${a})`:void 0},v=Object(d.useBlockProps)({className:f()(r,"defender"),style:g});return Object(u.createElement)("div",v,Object(u.createElement)(d.InspectorControls,null,Object(u.createElement)(m.PanelBody,{title:Object(o.__)("Background Image","site-functionality"),initialOpen:!0},Object(u.createElement)(d.MediaPlaceholder,{accept:"image/*",allowedTypes:b,onSelect:s,mediaPreview:p,multiple:!1,handleUpload:!0}))),Object(u.createElement)(d.BlockControls,null,Object(u.createElement)(d.MediaReplaceFlow,{mediaId:t,mediaURL:a,allowedTypes:b,accept:"image/*",onSelect:s,onSelectURL:e=>{c({url:e})},name:a?Object(o.__)("Replace Background Image","site-functionality"):Object(o.__)("Add Background Image","site-functionality")})),Object(u.createElement)(d.InnerBlocks,{allowedBlocks:y,template:h,templateLock:"all"}))},save:e=>{const{attributes:{id:t,url:a,alt:l,tagName:n,layout:i},className:r,setAttributes:c}=e,o={backgroundImage:a?`url(${a})`:void 0};return d.useBlockProps.save({className:f()(r,"defender"),style:o}),Object(u.createElement)("div",d.useBlockProps.save(),Object(u.createElement)(d.InnerBlocks.Content,null))}};var _=a(10);const j=[["core/buttons",{className:"menu"},[["core/button",{placeholder:Object(o.__)("Add Nav Item...","site-functionality"),className:"menu-item"},[]]],[["core/button",{placeholder:Object(o.__)("Add Nav Item...","site-functionality"),className:"menu-item"},[]]],[["core/button",{placeholder:Object(o.__)("Add Nav Item...","site-functionality"),className:"menu-item"},[]]]]],w=["core/buttons","core/button"];const{name:x,category:N}=_,E={edit:e=>{const{attributes:t,className:a,setAttributes:l}=e,n=Object(d.useBlockProps)({className:f()(a,"page-nav")});return Object(u.createElement)("div",n,Object(u.createElement)(d.InnerBlocks,{allowedBlocks:w,template:j}))},save:e=>Object(u.createElement)(d.InnerBlocks.Content,null)};var S=a(11),C=a(7),B=a(3),z=Object(u.createElement)(B.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(u.createElement)(B.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),P=Object(u.createElement)(B.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(u.createElement)(B.Path,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"}));const V=[["core/group",{className:"link-group__title"},[["core/image",{className:"link-group__image",sizeSlug:"medium"}],["core/paragraph",{className:"link-group__content",placeholder:Object(o.__)("Add content...","the-territory")}]]]],M=["core/group","core/heading","core/paragraph","core/image","core/buttons","core/list"];const{name:I,category:T}=S,A={edit:e=>{const{attributes:t,isSelected:a,onReplace:l,setAttributes:n,className:i}=e,{linkTarget:r,rel:c,url:s}=t,p=Object(d.useBlockProps)({className:f()(i,"link-group")}),g=Object(u.useRef)(),[b,h]=Object(u.useState)(!1),y=!!s,v="_blank"===r;function O(){n({url:"",linkTarget:void 0,rel:void 0}),h(!1)}return Object(u.useEffect)(()=>{a||h(!1)},[a]),Object(u.createElement)("div",p,Object(u.createElement)(d.BlockControls,{group:"block"},!y&&Object(u.createElement)(m.ToolbarButton,{name:"link",icon:z,title:Object(o.__)("Link","site-functionality"),shortcut:C.displayShortcut.primary("k"),onClick:function(e){e.preventDefault(),h(!0)}}),y&&Object(u.createElement)(m.ToolbarButton,{name:"link",icon:P,title:Object(o.__)("Unlink","site-functionality"),shortcut:C.displayShortcut.primaryShift("k"),onClick:O,isActive:!0})),a&&(b||y)&&Object(u.createElement)(m.Popover,{position:"bottom center",onClose:()=>{h(!1)},anchorRef:null==g?void 0:g.current,focusOnMount:!!b&&"firstElement"},Object(u.createElement)(d.__experimentalLinkControl,{className:"wp-block-navigation-link__inline-link-input",value:{url:s,opensInNewTab:v},onChange:({url:e="",opensInNewTab:t})=>{n({url:e}),v!==t&&function(e){const t=e?"_blank":void 0;let a=c;t&&!c?a="noreferrer noopener":t||"noreferrer noopener"!==c||(a=void 0),n({linkTarget:t,rel:a})}(t)},onRemove:()=>{O()},forceIsEditingLink:b})),Object(u.createElement)(d.InnerBlocks,{allowedBlocks:M,template:V}))},save:e=>Object(u.createElement)(d.InnerBlocks.Content,null)};var L=a(12),H={twitter:Object(u.createElement)(B.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",version:"1.1"},Object(u.createElement)(B.Path,{d:"M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z"})),instagram:Object(u.createElement)(B.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",version:"1.1"},Object(u.createElement)(B.Path,{d:"M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z"})),facebook:Object(u.createElement)(B.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",version:"1.1"},Object(u.createElement)(B.Path,{d:"M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"})),download:Object(u.createElement)(B.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",version:"1.1"},Object(u.createElement)(B.Path,{d:"M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"})),email:Object(u.createElement)(B.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",version:"1.1"},Object(u.createElement)(B.Path,{d:"M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm.5 12c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V9.8l7.5 5.6 7.5-5.6V17zm0-9.1L12 13.6 4.5 7.9V7c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v.9z"})),reddit:Object(u.createElement)(B.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",version:"1.1"},Object(u.createElement)(B.Path,{d:"M22 12.068a2.184 2.184 0 0 0-2.186-2.186c-.592 0-1.13.233-1.524.609-1.505-1.075-3.566-1.774-5.86-1.864l1.004-4.695 3.261.699A1.56 1.56 0 1 0 18.255 3c-.61-.001-1.147.357-1.398.877l-3.638-.77a.382.382 0 0 0-.287.053.348.348 0 0 0-.161.251l-1.112 5.233c-2.33.072-4.426.77-5.95 1.864a2.201 2.201 0 0 0-1.523-.61 2.184 2.184 0 0 0-.896 4.176c-.036.215-.053.43-.053.663 0 3.37 3.924 6.111 8.763 6.111s8.763-2.724 8.763-6.11c0-.216-.017-.449-.053-.664A2.207 2.207 0 0 0 22 12.068Zm-15.018 1.56a1.56 1.56 0 0 1 3.118 0c0 .86-.699 1.558-1.559 1.558-.86.018-1.559-.699-1.559-1.559Zm8.728 4.139c-1.076 1.075-3.119 1.147-3.71 1.147-.61 0-2.652-.09-3.71-1.147a.4.4 0 0 1 0-.573.4.4 0 0 1 .574 0c.68.68 2.114.914 3.136.914 1.022 0 2.473-.233 3.136-.914a.4.4 0 0 1 .574 0 .436.436 0 0 1 0 .573Zm-.287-2.563a1.56 1.56 0 0 1 0-3.118c.86 0 1.56.699 1.56 1.56 0 .841-.7 1.558-1.56 1.558Z"})),mastodon:Object(u.createElement)(B.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",version:"1.1"},Object(u.createElement)(B.Path,{d:"M23.193 7.879c0-5.206-3.411-6.732-3.411-6.732C18.062.357 15.108.025 12.041 0h-.076c-3.068.025-6.02.357-7.74 1.147 0 0-3.411 1.526-3.411 6.732 0 1.192-.023 2.618.015 4.129.124 5.092.934 10.109 5.641 11.355 2.17.574 4.034.695 5.535.612 2.722-.15 4.25-.972 4.25-.972l-.09-1.975s-1.945.613-4.129.539c-2.165-.074-4.449-.233-4.799-2.891a5.499 5.499 0 0 1-.048-.745s2.125.52 4.817.643c1.646.075 3.19-.097 4.758-.283 3.007-.359 5.625-2.212 5.954-3.905.517-2.665.475-6.507.475-6.507zm-4.024 6.709h-2.497V8.469c0-1.29-.543-1.944-1.628-1.944-1.2 0-1.802.776-1.802 2.312v3.349h-2.483v-3.35c0-1.536-.602-2.312-1.802-2.312-1.085 0-1.628.655-1.628 1.944v6.119H4.832V8.284c0-1.289.328-2.313.987-3.07.68-.758 1.569-1.146 2.674-1.146 1.278 0 2.246.491 2.886 1.474L12 6.585l.622-1.043c.64-.983 1.608-1.474 2.886-1.474 1.104 0 1.994.388 2.674 1.146.658.757.986 1.781.986 3.07v6.304z"}))};const G=["image"],R=[["core/image",{className:"share-image",sizeSlug:"social-medium",linkDestination:!1}]],U=["core/image"];var D=Object(u.createElement)(B.SVG,{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},Object(u.createElement)(B.Path,{d:"M18.2 17c0 .7-.6 1.2-1.2 1.2H7c-.7 0-1.2-.6-1.2-1.2V7c0-.7.6-1.2 1.2-1.2h3.2V4.2H7C5.5 4.2 4.2 5.5 4.2 7v10c0 1.5 1.2 2.8 2.8 2.8h10c1.5 0 2.8-1.2 2.8-2.8v-3.6h-1.5V17zM14.9 3v1.5h3.7l-6.4 6.4 1.1 1.1 6.4-6.4v3.7h1.5V3h-6.3z"}));const{name:F,category:J}=L,Z={icon:D,edit:e=>{var t,a,l,n,i,r,c,s,g,b,h,y;const{attributes:{title:v,message:O,url:k,id:_,alt:j,link:w,sizeSlug:x,sizes:N,twitter:E,placeholderTitle:S,placeholderUrl:C,placeholderMessage:B,instagram:z},isSelected:P,setAttributes:V,className:M}=e,I=Object(p.select)("core").getMedia(_),T=Object(d.useBlockProps)({className:f()(M,"social-post")}),{children:A,...L}=Object(d.useInnerBlocksProps)({className:"image-group"},{allowedBlocks:U,template:R,templateLock:"all"}),D=(Object(u.createElement)("img",{src:(null==I||null===(t=I.sizes)||void 0===t||null===(a=t[x])||void 0===a?void 0:a.url)||(null==I||null===(l=I.sizes)||void 0===l||null===(n=l[x])||void 0===n?void 0:n.url)||k,height:(null==I||null===(i=I.sizes)||void 0===i||null===(r=i[x])||void 0===r?void 0:r.height)||(null==I||null===(c=I.sizes)||void 0===c||null===(s=c[x])||void 0===s?void 0:s.height)||(null==I?void 0:I.height),width:(null==I||null===(g=I.sizes)||void 0===g||null===(b=g[x])||void 0===b?void 0:b.width)||(null==I||null===(h=I.sizes)||void 0===h||null===(y=h[x])||void 0===y?void 0:y.width)||(null==I?void 0:I.width)}),!!k&&Object(u.createElement)("img",{src:k,alt:j}),e=>{const t=e.toLowerCase().charAt(0).toUpperCase()+e.slice(1);return Object(u.createElement)("li",{className:"outermost-social-sharing-link outermost-social-sharing-link-"+e},Object(u.createElement)("a",{className:"wp-block-outermost-social-sharing-link-anchor",href:"#","data-vars-ga-category":Object(o.__)("Share Cards","site-functionality"),"aria-label":Object(o.__)("Share on "+t,"site-functionality")},H[e],Object(u.createElement)("span",{className:"wp-block-outermost-social-sharing-link-label screen-reader-text"},Object(o.__)("Share on "+t,"site-functionality"))))}),F=!!_&&Object(u.createElement)(u.Fragment,null,Object(u.createElement)("div",{className:"share-actions"},Object(u.createElement)("ul",{className:"wp-block-outermost-social-sharing is-style-logos-only"},D("twitter"),z&&D("instagram"),D("facebook"),D("download")))),J=Object(u.createElement)(u.Fragment,null,Object(u.createElement)(m.TextControl,{label:Object(o.__)("Title","site-functionality"),description:Object(o.__)("Title to add to share posting.","site-functionality"),value:v,className:"share-title",placeholder:S,type:"text",onChange:e=>V({title:e})}),Object(u.createElement)(m.TextControl,{label:Object(o.__)("Link","site-functionality"),description:Object(o.__)("URL to add to share posting.","site-functionality"),value:w,className:"share-link",placeholder:C,type:"url",onChange:e=>V({link:e})}),Object(u.createElement)(m.TextControl,{label:Object(o.__)("Instagram Link","site-functionality"),description:Object(o.__)("Instagram link to send users to.","site-functionality"),value:z,className:"instagram-link",placeholder:Object(o.__)("https://instagram.com/user","site-functionality"),type:"url",onChange:e=>V({instagram:e})}),Object(u.createElement)(m.TextareaControl,{label:Object(o.__)("Twitter Share Message","site-functionality"),value:O,onChange:e=>V({message:e}),placeholder:B,className:"share-message"})),Z=Object(u.createElement)(d.InspectorControls,null,Object(u.createElement)(m.PanelBody,{title:Object(o.__)("Block Settings","site-functionality"),initialOpen:!0},J)),W=Object(u.createElement)(d.BlockControls,null,Object(u.createElement)(d.MediaReplaceFlow,{mediaId:_,mediaURL:k,allowedTypes:G,accept:"image/*",onSelect:e=>{e&&e.id?V({id:e.id,url:e.url,alt:null==e?void 0:e.alt,sizes:null==e?void 0:e.sizes,placeholderTitle:null==e?void 0:e.title,placeholderUrl:e.link,placeholderMessage:null==e?void 0:e.description}):V({id:null,url:null,alt:null,sizes:[],placeholderUrl:null,placeholderMessage:null})},name:_?Object(o.__)("Replace Image","site-functionality"):Object(o.__)("Add Image","site-functionality")}));return Object(u.createElement)("article",T,Z,W,Object(u.createElement)("div",L,A),F)},save:e=>{const{attributes:{message:t,shareLinks:a,url:l,alt:n},isSelected:i,setAttributes:r,className:c}=e,o=d.useBlockProps.save({className:f()(c,"social-post")}),{children:s,...m}=d.useInnerBlocksProps.save({className:"image-group"});return Object(u.createElement)("article",o,Object(u.createElement)("div",m,s))}},W=[l,n,i,r],$=e=>{if(!e)return;const{name:t,settings:a}=e;Object(c.registerBlockType)(t,{...a})},q=()=>{W.forEach($)};q()}]);