!function(){var e=document.querySelector(".form");function n(e,n){return new Promise((function(t,o){var i=Math.random()>.3;setTimeout((function(){return i?t({position:e,delay:n}):o({position:e,delay:n})}),n)})).then((function(e){var n=e.position,t=e.delay;return console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;return console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}e.addEventListener("submit",(function(t){t.preventDefault();for(var o=+e.elements.amount.value,i=+e.elements.step.value,a=+e.elements.delay.value,r=1;r<=o;r++)n(r,a),a+=i}))}();
//# sourceMappingURL=03-promises.3f5a8305.js.map