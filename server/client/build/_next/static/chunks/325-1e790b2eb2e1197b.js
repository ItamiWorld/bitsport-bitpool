(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[325],{640:function(e,t,i){"use strict";var n=i(1742),s={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var i,l,a,r,c,o,d,A,m=!1;t||(t={}),a=t.debug||!1;try{if(c=n(),o=document.createRange(),d=document.getSelection(),(A=document.createElement("span")).textContent=e,A.ariaHidden="true",A.style.all="unset",A.style.position="fixed",A.style.top=0,A.style.clip="rect(0, 0, 0, 0)",A.style.whiteSpace="pre",A.style.webkitUserSelect="text",A.style.MozUserSelect="text",A.style.msUserSelect="text",A.style.userSelect="text",A.addEventListener("copy",function(i){if(i.stopPropagation(),t.format){if(i.preventDefault(),void 0===i.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var n=s[t.format]||s.default;window.clipboardData.setData(n,e)}else i.clipboardData.clearData(),i.clipboardData.setData(t.format,e)}t.onCopy&&(i.preventDefault(),t.onCopy(i.clipboardData))}),document.body.appendChild(A),o.selectNodeContents(A),d.addRange(o),!document.execCommand("copy"))throw Error("copy command was unsuccessful");m=!0}catch(n){a&&console.error("unable to copy using execCommand: ",n),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),m=!0}catch(n){a&&console.error("unable to copy using clipboardData: ",n),a&&console.error("falling back to prompt"),i="message"in t?t.message:"Copy to clipboard: #{key}, Enter",l=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",r=i.replace(/#{\s*key\s*}/g,l),window.prompt(r,e)}}finally{d&&("function"==typeof d.removeRange?d.removeRange(o):d.removeAllRanges()),A&&document.body.removeChild(A),c()}return m}},4310:function(e,t,i){"use strict";var n=i(691),s=i(1664),l=i.n(s),a=i(1163),r=i(5893),c=[{title:"Terms of User",url:"/terms"},{title:"Privacy",url:"/privacy"},{title:"Disclaimer",url:"/disclaimer"}];t.Z=function(){var e=(0,a.useRouter)().route.includes("/nft");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("footer",{className:"hidden mt-56 py-6 container mx-auto lg:flex lg:justify-between lg:items-center border-t border-primary-600",children:[(0,r.jsx)("div",{className:"font-Poppins text-primary-650 text-xl",children:"BitPool @ 2023 By BitSport"}),(0,r.jsx)("div",{className:"flex items-center gap-8",children:c.map(function(e){return(0,r.jsx)(l(),{href:e.url,className:"font-Poppins text-primary-650 text-lg",children:e.title},e.title)})})]},0),(0,r.jsx)("footer",{className:"lg:hidden flex justify-center ".concat(e?"mt-80":"mt-20"),children:(0,r.jsx)(n.HE,{})},1)]})}},8609:function(e,t,i){"use strict";i.d(t,{Z:function(){return x}});var n=i(5675),s=i.n(n),l=i(5426),a=i(691),r=i(4184),c=i.n(r),o=i(7294),d=i(2640),A=i(640),m=i.n(A),u=i(5893),x=function(e){var t,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,u.jsx)(a.CK,{}),i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,u.jsx)("div",{className:"text-xs text-white font-medium",children:"copied"}),n=o.useState(!1),s=(0,d.Z)(n,2),l=s[0],r=s[1],c=o.useCallback(function(e){"string"==typeof e||"number"==typeof e?(m()(e.toString()),r(!0)):(r(!1),console.error("Cannot copy typeof ".concat(typeof e," to clipboard, must be a string or number.")))},[]);return o.useEffect(function(){var t;return l&&e&&(t=setTimeout(function(){return r(!1)},e)),function(){clearTimeout(t)}},[l,e]),{isCopied:l,handleCopy:c,render:l?i:t}}(),n=i.handleCopy,r=i.render,A=(0,o.useState)({icon:e.icon,name:e.name}),x=A[0],h=A[1],g=(0,o.useState)(!1),f=g[0],p=g[1],b=function(){p(!f)},j=function(t){h({icon:t.icon,name:t.name}),e.handleChange&&e.handleChange(t.name),b()};return(0,o.useEffect)(function(){h({icon:e.icon,name:e.name})},[]),(0,u.jsxs)("div",{className:"relative w-full mb-7",children:[(0,u.jsx)("div",{className:c()("text-primary-1100 font-bold lg:text-base text-sm mb-1",{hidden:!e.label}),children:e.label}),(0,u.jsxs)("div",{className:"rounded px-5 xl:px-8 h-16 bg-secondary-400 outline-none flex items-center justify-between",children:[(0,u.jsxs)("div",{className:"flex items-center gap-4",children:[(0,u.jsx)(s(),{priority:!0,height:44,width:38,src:x.icon,alt:"icon",className:c()({hidden:!e.icon})}),(0,u.jsx)("div",{className:"text-white font-medium text-sm xl:text-lg",children:e.name})]}),e.hasCopy?(0,u.jsx)("div",{onClick:function(){return n(e.name)},className:"cursor-pointer pl-4",children:r}):(0,u.jsx)("div",{onClick:b,className:"cursor-pointer",children:(0,u.jsx)(a.Hd,{})})]}),f&&(0,u.jsx)(l.E.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.2},className:"absolute z-10 w-full bg-primary-800 p-4 rounded max-h-56 overflow-y-auto mt-2",children:null===(t=e.items)||void 0===t?void 0:t.map(function(e){return(0,u.jsxs)(l.E.div,{onClick:function(){return j(e)},transition:{duration:.2},className:"font-bold text-white hover:text-primary-100 flex items-center gap-4 text-base cursor-pointer p-2.5 rounded w-full hover:bg-primary-900",children:[e.icon&&(0,u.jsx)(s(),{priority:!0,height:44,width:38,src:e.icon,alt:"icon"}),(0,u.jsx)("div",{children:e.name})]},e.name)})})]})}},3674:function(e,t,i){"use strict";i.d(t,{zx:function(){return s.ZP},h4:function(){return n.Z},HY:function(){return x}});var n=i(6534),s=i(8467),l=i(691),a=i(5675),r=i.n(a),c=i(1700),o=i(9759),d={src:"/_next/static/media/success.9feb26f0.png",height:560,width:560,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA3UlEQVR42mMAAZW17ZpAfFB1bccvIP1LZ13nQWWgGFhSEchQX9fxDoj/AwX/a63r/M+wuuk/UOE7tXUdmgwa6zoOiq5p/S+8pvWn6Ybu/wwrav93HVv/M3HHrP8MqxoPMgitaf3ltXnif28gZlhc8r/p8Or/M05vB5uiua7jF4MgUIH35kn/55/b83/iic3/Z53Z+Z9hZQPIiv9qIAUgBzGsbv5vtaHnJ0iB7No2EP4JdBNI0SEG6bVtmlpAR4IkQParAiWgku9UYT5RgvjkoP76zl8gY0E6gV4GSwIA02iH7aMmVlMAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},A={src:"/_next/static/media/failed.18365ef1.png",height:596,width:596,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEX0RDfzRDf0QjXzQjX0QjXzQjX0QjXzQjX0QjXzQjX0QjXzQjX0QjXzQjX0QjXzQjX0QjX0QjXzQjX0QzbzQzbxrAXwAAAAE3RSTlMAAAAAanN0dK+vsLDDw9ra2+zsFAWl/AAAAD9JREFUeNolxskRgDAMA0A5J0cccKT+a4WZ7GuRUN07MuwQqdNQ9a542DAUpQR9Z/1pmhGTHbgo8TZka8O7pQ9mKwLZ6O38EAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},m=i(7294),u=i(5893),x=function(){var e=(0,m.useState)(0),t=e[0],i=e[1],n=function(e){void 0!==e?i(t-1):i(t+1)},s=[(0,u.jsx)(h,{next:n}),(0,u.jsx)(g,{next:n,isSuccessful:!0}),(0,u.jsx)(g,{next:n,isSuccessful:!1}),(0,u.jsx)(f,{})];return(0,u.jsx)("div",{className:"w-full xl:px-3",children:s[t]})},h=function(e){var t=e.next;return(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:"lg:text-2xl text-xl font-bold text-primary-900",children:"SWAP"}),(0,u.jsxs)("div",{className:"relative",children:[(0,u.jsxs)("div",{className:"mt-4 flex justify-between items-center",children:[(0,u.jsx)("div",{className:"lg:text-lg text-base font-bold text-primary-450",children:"SWAP TOKENS IN AN INSTANT"}),(0,u.jsx)(l.HY,{})]}),(0,u.jsx)("div",{className:"absolute opacity-40 right-0 lg:-left-8 mt-5 lg:w-modal w-full thin-line bg-white"})]}),(0,u.jsxs)("div",{className:"mt-24 flex items-center justify-between",children:[(0,u.jsx)(r(),{className:"h-7 w-9 lg:h-14 lg:w-16 object-contain",priority:!0,src:o.Z,alt:"crypto coin"}),(0,u.jsx)("div",{className:"font-medium text-sm text-white lg:text-xl",children:"BUSD"}),(0,u.jsx)(l.Hd,{}),(0,u.jsx)("input",{type:"number",placeholder:"0.00",className:"bg-secondary-400 text-xl text-right px-4 h-12 lg:w-60 lg:h-14 placeholder:text-white placeholder:font-medium font-medium text-white rounded border-none outline-none"})]}),(0,u.jsx)("div",{className:"flex justify-center items-center mt-14",children:(0,u.jsx)(l.Td,{})}),(0,u.jsxs)("div",{className:"mt-14 flex items-center justify-between",children:[(0,u.jsx)(r(),{className:"h-7 w-9 lg:h-14 lg:w-16 object-contain",priority:!0,src:c.Z,alt:"quest credit"}),(0,u.jsx)("div",{className:"font-medium text-sm text-white lg:text-xl",children:"QUEST"}),(0,u.jsx)(l.Hd,{}),(0,u.jsx)("input",{type:"number",placeholder:"0.00",className:"bg-secondary-400 text-xl text-right px-4 h-12 lg:w-60 lg:h-14 placeholder:text-white placeholder:font-medium font-medium text-white rounded border-none outline-none"})]}),(0,u.jsx)("button",{onClick:function(){return t()},className:"mt-14 bg-secondary-300 text-white w-full rounded font-bold text-xl h-14",children:"SWAP"})]})},g=function(e){var t=e.next,i=e.isSuccessful;return(0,u.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,u.jsxs)("div",{className:"lg:w-96 flex flex-col justify-center items-center",children:[(0,u.jsx)(r(),{className:"h-20 mt-10 w-20 lg:h-28 lg:w-28 object-contain",priority:!0,src:i?d:A,alt:"success"}),(0,u.jsx)("h3",{className:"text-primary-900 mt-10 font-bold text-3xl",children:i?"SWAP SUCCESSFUL":"SWAP UNSUCCESSFUL"}),(0,u.jsx)("p",{className:"mt-3 text-sm font-bold text-primary-450 text-center",children:"THE TRANSACTION HAS BEEN SUCCESSFULLY PROCESSED. THE TRANSFER MAY STILL BE IN PROCESS. PLEASE CHECK THE TRANSACTION RECORD LATER."}),(0,u.jsxs)("div",{className:"pb-7 gap-10 mt-3 flex justify-between px-5 items-center",children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("p",{className:"mt-3 text-left text-sm font-bold text-primary-450",children:"FROM"}),(0,u.jsx)("p",{className:"text-white font-medium lg:text-xl text-base",children:"0.00 BUSD"})]}),(0,u.jsx)(l.Ni,{}),(0,u.jsxs)("div",{children:[(0,u.jsx)("p",{className:"mt-3 text-left text-sm font-bold text-primary-450",children:"TO"}),(0,u.jsx)("p",{className:"text-white font-medium lg:text-xl text-base",children:"0.00 USDT"})]})]}),(0,u.jsx)("div",{className:"opacity-40 w-full thin-line bg-white"})]}),(0,u.jsxs)("div",{className:"mt-16 flex justify-between gap-5",children:[(0,u.jsx)("button",{onClick:function(){return t(0)},className:" bg-secondary-300 px-5 lg:px-8 rounded font-bold text-base h-12",children:"BACK TO SWAP"}),(0,u.jsx)("button",{onClick:function(){return t()},className:" bg-primary-1150 whitespace-nowrap px-5 lg:px-8 rounded font-bold text-base h-12",children:"VIEW SWAP HISTORY"})]})]})},f=function(){return(0,u.jsxs)("div",{className:"pb-32",children:[(0,u.jsx)("div",{className:"lg:text-2xl text-xl font-bold text-primary-900",children:"SWAP TO QUEST CREDIT"}),(0,u.jsxs)("div",{className:"relative",children:[(0,u.jsxs)("div",{className:"mt-4 flex justify-between items-center",children:[(0,u.jsx)("div",{className:"lg:text-lg text-base font-bold text-primary-450",children:"RECENT TRANSACTION"}),(0,u.jsx)(l.HY,{})]}),(0,u.jsx)("div",{className:"absolute opacity-40 right-0 lg:-left-8 mt-5 lg:w-modal w-full thin-line bg-white"})]}),(0,u.jsxs)("div",{className:"mt-14 w-full",children:[(0,u.jsxs)("div",{className:"flex gap-7 items-center font-bold text-xs text-primary-1100",children:[(0,u.jsx)("div",{className:"hidden lg:block",children:"COIN"}),(0,u.jsx)("div",{children:"COIN NAME"}),(0,u.jsx)("div",{children:"AMOUNT"}),(0,u.jsx)(l.Ni,{}),(0,u.jsx)("div",{className:"hidden lg:block",children:"COIN"}),(0,u.jsx)("div",{children:"COIN NAME"}),(0,u.jsx)("div",{children:"AMOUNT"})]}),(0,u.jsxs)("div",{className:"grid grid-cols-5 lg:grid-cols-7 mt-5 items-center font-medium text-sm text-white",children:[(0,u.jsx)(r(),{className:"h-6 hidden lg:block w-7 lg:h-8 lg:w-9 object-contain",priority:!0,src:o.Z,alt:"coin"}),(0,u.jsx)("div",{children:"BUSD"}),(0,u.jsx)("div",{className:"ml-4 lg:ml-3",children:"20.00"}),(0,u.jsx)("div",{className:"ml-2.5 lg:ml-3.5",children:(0,u.jsx)(l.Ni,{})}),(0,u.jsx)(r(),{className:"h-6 hidden lg:block w-7 lg:-ml-3 lg:h-8 lg:w-9 object-contain",priority:!0,src:c.Z,alt:"quest credit"}),(0,u.jsx)("div",{children:"QUEST"}),(0,u.jsx)("div",{children:"2.00"})]})]})]})}},6466:function(e,t){"use strict";t.Z={src:"/_next/static/media/bitp.3f6c9850.png",height:277,width:239,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAQAAACfDS2NAAAAYklEQVR42h3FsQ0BYQAG0O+cUayAqE2g09wmjECjNYDWEkQnwQ4aheRyxRUv9+fyihdRO/o6qCQabyczZx/b6CxltNbHTdRFVTzjISamIl7xt5FRo42Vu4uFa3kehb2fncgArO1K91+TxUYAAAAASUVORK5CYII=",blurWidth:7,blurHeight:8}},9759:function(e,t){"use strict";t.Z={src:"/_next/static/media/busd.41031c74.png",height:277,width:239,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAn0lEQVR42mMAgTe7GZnf7mbse7ub6TWQ7n2zm4ERJhEDFLzyZg/j5Nd7GcSB7LlABVeBOIIByPkOlDBiAIIPO7gdGYAAyHcAiv8CSR5jAIL3O7nqgfgFEFdDTGS6CJI8CZUsB+LXQNwFlbwCkvwENMYXYiyPNdTYSKD4F6AKRkug5ceBnJVv9jBoAtkbQXwgNmWAASCnFqjgA5CugYkBAOuRXY0KtFf1AAAAAElFTkSuQmCC",blurWidth:7,blurHeight:8}},8096:function(e,t){"use strict";t.Z={src:"/_next/static/media/paypal.481fc38e.png",height:277,width:239,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAtElEQVR42jVNPwtBcRQ98gXYZDNgkJGeTyAZjBZlZTYaGP0ZKJs3GV9mX4F6o2KQwWaSkkV+917Hq3fqdO45p+4BCDNLisjSOXlQF/SJuOio6ok6J9Pkiv5MbUNEPzxKADxgtKUW6T3mDnwVgihUZ0EmP7BUP7iAUJEjVC0qsy3/mpuGBv/WA/Gfgpq9zKQJbBqY3Osgvk66zN9Q1RqPA3fWZNmJ7qh75hXE4PZYVJ8shnH2A9gIh/n0s7WAAAAAAElFTkSuQmCC",blurWidth:7,blurHeight:8}},1700:function(e,t){"use strict";t.Z={src:"/_next/static/media/qc.ec077b38.png",height:277,width:239,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAlklEQVR42jXMsQqCUBTG8QvRM7UELYFu1VRRZE01hHcPqjeIwNnRJ3DSTQcHuVffwMVdRHD3f0EP/Dh85+NeYca11Bx/VPhhNhbaIRRsj32Aj5J8olQdNtjCwQoXyl5IW0XS0nsOV5SQOFJmpowpCeqGFE/X1jt2br5t8MAZH6x59UJLqZdIEFDcESIlL8Q0hC9qvKfbADpKZazihXUYAAAAAElFTkSuQmCC",blurWidth:7,blurHeight:8}},4014:function(e,t){"use strict";t.Z={src:"/_next/static/media/usdt.96355908.png",height:277,width:239,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAx0lEQVR42mP4//8/Q+D6qcxhG6ZPAOI3QNzvsWYSI0icwX/dlNiA9VOvKC7v7GRgYBDRWNE1Gaj4GlA8AiT5zWnNBFOgyhQgXgLECRareh2AGn4xeK6ddBgowPrrz2+vv//+Hvz796/rj9+/uL3WTj7H4LtuygmgJMO3nz/k/vz9ux7IlgBiRqD4JZBjPpmu7PUFCjAAcRIQM9iv7o8Cin8B2WkJZBwH2rGCoT9OC8jeCGQfB4qbglSDMVCgNmTDtA9AugYmBgDNWYsJDyPXfgAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8}},1742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,i=[],n=0;n<e.rangeCount;n++)i.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||i.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}}]);