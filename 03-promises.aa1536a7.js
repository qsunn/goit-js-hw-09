const e=document.querySelector(".form");function t(e,t){return new Promise(((o,n)=>{Math.random()>.3?setTimeout((()=>o({position:e,delay:t})),t):setTimeout((()=>n({position:e,delay:t})),t)})).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}e.addEventListener("submit",(o=>{o.preventDefault();const n=e.elements.amount.value,l=e.elements.step.value;let s=e.elements.delay.value;for(let e=1;e<=n;e++)t(e,s),s=+s+ +l}));
//# sourceMappingURL=03-promises.aa1536a7.js.map
