function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var i=o("eWCmQ");function l(e,t){return new Promise(((r,n)=>{const o=Math.random()>.3;setTimeout((t=>{o?r({position:e,delayEl:t}):n({position:e,delayEl:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();let r=Number(t.currentTarget.delay.value),n=Number(t.currentTarget.step.value),o=Number(t.currentTarget.amount.value);for(let t=1;t<=o;t+=1)l(t,r).then((({position:t,delayEl:r})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${r}ms`)})).catch((({position:t,delayEl:r})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${r}ms`)}));r+=n}));
//# sourceMappingURL=03-promises.18738a17.js.map
