const e=document.querySelector("[data-start]"),t=document.querySelector("[data-end]");e.addEventListener("click",(()=>{e.disabled=!0;setInterval((()=>document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`),1e3)})),t.addEventListener("click",(()=>{e.disabled=!1,clearInterval(interval)}));
//# sourceMappingURL=01-color-switcher.ec11af75.js.map
