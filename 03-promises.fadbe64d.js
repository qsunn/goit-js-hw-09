const e=document.querySelector(".form");function t(e,t){return new Promise(((o,n)=>{const l=Math.random()>.3;setTimeout((()=>l?o({position:e,delay:t}):n({position:e,delay:t})),t)})).then((({position:e,delay:t})=>console.log(`✅ Fulfilled promise ${e} in ${t}ms`))).catch((({position:e,delay:t})=>console.log(`❌ Rejected promise ${e} in ${t}ms`)))}e.addEventListener("submit",(o=>{o.preventDefault();const n=+e.elements.amount.value,l=+e.elements.step.value;let s=+e.elements.delay.value;for(let e=1;e<=n;e++)t(e,s),s+=l}));
//# sourceMappingURL=03-promises.fadbe64d.js.map
