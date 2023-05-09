!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.i18n},function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var l=a.apply(null,r);l&&e.push(l)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.primitives},function(e,t){e.exports=window.wp.keycodes},function(e,t){e.exports=window.wp.blocks},function(e){e.exports=JSON.parse('{"apiVersion":2,"version":"1.0.0","textdomain":"site-functionality","name":"site-functionality/defender","title":"Defender","category":"text","collection":"site-functionality","icon":"id","className":"defender","description":"Display a defender element on page","keywords":["defender","social"],"attributes":{"id":{"type":"number","default":0},"url":{"type":"string"},"alt":{"type":"string","source":"attribute","selector":"img","attribute":"alt","default":""},"tagName":{"type":"string","default":"article"},"layout":{"type":"constrained"}},"supports":{"align":true,"anchor":true,"color":{"background":true,"text":true,"gradients":false,"link":false},"customClassName":true,"spacing":{"padding":false,"margin":false,"blockGap":true,"__experimentalDefaultControls":{"padding":true,"blockGap":true}},"defaultStylePicker":false,"__experimentalLayout":false},"variations":[],"styles":[],"example":{},"style":"file:../../build/style-index.css","editorScript":"site-functionality","editorStyle":"file:../../build/index.css"}')},function(e){e.exports=JSON.parse('{"apiVersion":2,"version":"1.0.0","textdomain":"site-functionality","name":"site-functionality/page-nav","title":"Page Navigation","category":"text","collection":"site-functionality","icon":"button","className":"page-nav","description":"Display an internal page navigation element.","keywords":["navigation","page menu","button"],"attributes":{},"supports":{"align":true,"anchor":true,"color":{"background":false,"text":false,"gradients":false,"link":false},"customClassName":true,"defaultStylePicker":false,"__experimentalLayout":false,"multiple":false},"variations":[],"styles":[],"example":{},"style":"file:../../build/style-index.css","editorScript":"site-functionality","editorStyle":"file:../../build/index.css"}')},function(e){e.exports=JSON.parse('{"apiVersion":2,"version":"1.0.0","textdomain":"site-functionality","name":"site-functionality/link-group","title":"Link Group","icon":"admin-links","category":"text","collection":"site-functionality","description":"Display a linked group of blocks.","keywords":["callout","group","button"],"attributes":{"url":{"type":"string","default":""},"linkTarget":{"type":"string"},"rel":{"type":"string"},"className":{"type":"string","default":"link-group"},"anchor":{"type":"string"},"attributesForBlocks":{"title":"","data-vars-ga-label":"","data-vars-ga-category":""}},"supports":{"align":true,"anchor":true,"color":{"background":true,"text":true,"gradients":false,"link":false},"customClassName":true,"defaultStylePicker":false,"__experimentalLayout":false,"__experimentalStyle":false,"__experimentalBorder":false},"example":{"attributes":{"className":"link-group","url":"#"},"innerBlocks":[{"name":"core/group","attributes":{},"innerBlocks":[{"name":"core/image","attributes":{"className":"link-group__image","sizeSlug":"medium","url":"https://live.staticflickr.com/7271/6941148040_e7221059d9_b.jpg"}},{"name":"core/paragraph","attributes":{"className":"link-group__content","content":"Donate to the Uru-eu-Wau-Wau Association"}}]}]},"style":"file:../../build/style-index.css","editorScript":"site-functionality","editorStyle":"file:../../build/index.css"}')},function(e,t){e.exports=window.wp.data},function(e,t,n){"use strict";n.r(t),n.d(t,"registerBlocks",(function(){return M}));var r={};n.r(r),n.d(r,"name",(function(){return y})),n.d(r,"category",(function(){return k})),n.d(r,"settings",(function(){return v}));var a={};n.r(a),n.d(a,"name",(function(){return j})),n.d(a,"category",(function(){return w})),n.d(a,"settings",(function(){return x}));var o={};n.r(o),n.d(o,"name",(function(){return C})),n.d(o,"category",(function(){return T})),n.d(o,"settings",(function(){return H}));var l=n(7),i=n(2),c=n(8),s=n(0),u=n(1),d=n(4),p=(n(11),n(3)),m=n.n(p);const f=["image"],g=[["core/group",{className:"row",layout:{type:"flex",flexWrap:"nowrap",verticalAlignment:"top"}},[["core/group",{className:"defender__profile",layout:{type:"flex",orientation:"vertical"}},[["core/image",{className:"defender__profile-image",sizeSlug:"thumbnail"}],["core/heading",{className:"defender__profile-title",placeholder:Object(i.__)("Add Name...","site-functionality"),level:3}],["core/social-links",{className:"is-style-logos-only defender__social-links",iconColor:"green-dark",openInNewTab:!0,showLabels:!0,size:"has-normal-icon-size",layout:{type:"flex",orientation:"vertical"}},[["core/social-link",{url:"https://instagram.com/username",service:"instagram",label:"username"}],["core/social-link",{url:"https://twitter.com/handle",service:"twitter",label:"handle"}]]],["core/paragraph",{className:"defender__profile-content",placeholder:Object(i.__)("Add description...","site-functionality")}]]],["core/group",{className:"defender__location",layout:{type:"flex",orientation:"vertical"}},[["core/image",{className:"defender__location-image",sizeSlug:"medium"}],["core/heading",{className:"defender__location-title",placeholder:Object(i.__)("Add Location Name ...","site-functionality"),level:3}],["core/paragraph",{className:"defender__location-content",placeholder:Object(i.__)("Add description...","site-functionality")}]]]]]],b=["core/group","core/heading","core/paragraph","core/social-links"];const{name:y,category:k}=c,v={edit:e=>{const{attributes:{id:t,url:n,alt:r,tagName:a,layout:o},className:l,setAttributes:c}=e,p=e=>{e&&e.url?c({url:e.url,id:e.id,alt:null==e?void 0:e.alt}):c({url:null,id:null,alt:null})},y=!!n&&Object(s.createElement)("img",{src:n,alt:r}),k={backgroundImage:n?`url(${n})`:void 0},v=Object(u.useBlockProps)({className:m()(l,"defender"),style:k});return Object(s.createElement)("div",v,Object(s.createElement)(u.InspectorControls,null,Object(s.createElement)(d.PanelBody,{title:Object(i.__)("Background Image","site-functionality"),initialOpen:!0},Object(s.createElement)(u.MediaPlaceholder,{accept:"image/*",allowedTypes:f,onSelect:p,mediaPreview:y,multiple:!1,handleUpload:!0}))),Object(s.createElement)(u.BlockControls,null,Object(s.createElement)(u.MediaReplaceFlow,{mediaId:t,mediaURL:n,allowedTypes:f,accept:"image/*",onSelect:p,onSelectURL:e=>{c({url:e})},name:n?Object(i.__)("Replace Background Image","site-functionality"):Object(i.__)("Add Background Image","site-functionality")})),Object(s.createElement)(u.InnerBlocks,{allowedBlocks:b,template:g,templateLock:"all"}))},save:e=>{const{attributes:{id:t,url:n,alt:r,tagName:a,layout:o},className:l,setAttributes:i}=e,c={backgroundImage:n?`url(${n})`:void 0};return u.useBlockProps.save({className:m()(l,"defender"),style:c}),Object(s.createElement)("div",u.useBlockProps.save(),Object(s.createElement)(u.InnerBlocks.Content,null))}};var _=n(9);const h=[["core/buttons",{className:"menu"},[["core/button",{placeholder:Object(i.__)("Add Nav Item...","site-functionality"),className:"menu-item"},[]]],[["core/button",{placeholder:Object(i.__)("Add Nav Item...","site-functionality"),className:"menu-item"},[]]],[["core/button",{placeholder:Object(i.__)("Add Nav Item...","site-functionality"),className:"menu-item"},[]]]]],O=["core/buttons","core/button"];const{name:j,category:w}=_,x={edit:e=>{const{attributes:t,className:n,setAttributes:r}=e,a=Object(u.useBlockProps)({className:m()(n,"page-nav")});return Object(s.createElement)("div",a,Object(s.createElement)(u.InnerBlocks,{allowedBlocks:O,template:h}))},save:e=>Object(s.createElement)(u.InnerBlocks.Content,null)};var N=n(10),S=n(6),B=n(5),E=Object(s.createElement)(B.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(s.createElement)(B.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),P=Object(s.createElement)(B.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(s.createElement)(B.Path,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"}));const I=[["core/group",{className:"link-group__title"},[["core/image",{className:"link-group__image",sizeSlug:"medium"}],["core/paragraph",{className:"link-group__content",placeholder:Object(i.__)("Add content...","the-territory")}]]]],A=["core/group","core/heading","core/paragraph","core/image","core/buttons","core/list"];const{name:C,category:T}=N,H={edit:e=>{const{attributes:t,isSelected:n,onReplace:r,setAttributes:a,className:o}=e,{linkTarget:l,rel:c,url:p}=t,f=Object(u.useBlockProps)({className:m()(o,"link-group")}),g=Object(s.useRef)(),[b,y]=Object(s.useState)(!1),k=!!p,v="_blank"===l;function _(){a({url:"",linkTarget:void 0,rel:void 0}),y(!1)}return Object(s.useEffect)(()=>{n||y(!1)},[n]),Object(s.createElement)("div",f,Object(s.createElement)(u.BlockControls,{group:"block"},!k&&Object(s.createElement)(d.ToolbarButton,{name:"link",icon:E,title:Object(i.__)("Link","site-functionality"),shortcut:S.displayShortcut.primary("k"),onClick:function(e){e.preventDefault(),y(!0)}}),k&&Object(s.createElement)(d.ToolbarButton,{name:"link",icon:P,title:Object(i.__)("Unlink","site-functionality"),shortcut:S.displayShortcut.primaryShift("k"),onClick:_,isActive:!0})),n&&(b||k)&&Object(s.createElement)(d.Popover,{position:"bottom center",onClose:()=>{y(!1)},anchorRef:null==g?void 0:g.current,focusOnMount:!!b&&"firstElement"},Object(s.createElement)(u.__experimentalLinkControl,{className:"wp-block-navigation-link__inline-link-input",value:{url:p,opensInNewTab:v},onChange:({url:e="",opensInNewTab:t})=>{a({url:e}),v!==t&&function(e){const t=e?"_blank":void 0;let n=c;t&&!c?n="noreferrer noopener":t||"noreferrer noopener"!==c||(n=void 0),a({linkTarget:t,rel:n})}(t)},onRemove:()=>{_()},forceIsEditingLink:b})),Object(s.createElement)(u.InnerBlocks,{allowedBlocks:A,template:I}))},save:e=>Object(s.createElement)(u.InnerBlocks.Content,null)},L=[r,a,o],z=e=>{if(!e)return;const{name:t,settings:n}=e;Object(l.registerBlockType)(t,{...n})},M=()=>{L.forEach(z)};M()}]);