const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.querySelector("body");let a=0;t.disabled=!0,e.addEventListener("click",(function(o){a=setInterval((()=>{d.style=`background-color: #${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.disabled=!1,e.disabled=!0})),t.addEventListener("click",(function(){clearInterval(a),t.disabled=!0,e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.6e9684c7.js.map