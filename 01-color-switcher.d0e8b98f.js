!function(){var t,e=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");e.addEventListener("click",(function(){d.disabled=!1,e.disabled=!0,t=setInterval((function(){return document.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),d.disabled=!0,d.addEventListener("click",(function(){d.disabled=!0,e.disabled=!1,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.d0e8b98f.js.map
