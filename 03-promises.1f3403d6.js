function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var l=r("eWCmQ");const u={formEl:document.querySelector(".form"),delayEL:document.querySelector('input[name="delay"]'),stepEl:document.querySelector('input[name="step"]'),amountEl:document.querySelector('input[name="amount"]')};function i(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((t=>{r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}u.formEl.addEventListener("submit",(function(t){t.preventDefault();let{delay:n,step:o,amount:r}={delay:Number(u.delayEL.value),step:Number(u.stepEl.value),amount:Number(u.amountEl.value)};for(let t=1;t<=r;t+=1)i(t,n).then((({position:t,delay:n})=>{e(l).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(l).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),n+=o}));
//# sourceMappingURL=03-promises.1f3403d6.js.map
