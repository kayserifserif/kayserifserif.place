(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();function m(t,a=!1){if(t.length===0)return"";if(t.length===1||t.length>1&&t.every(n=>n===t[0]))return t[0];const o=t.filter(n=>n!=="");return o.length===t.length-1?`(${o.join("|")})?`:a?`(${t.join("|")})`:t.join("|")}function C(t,a=!0){if(t.length===0)return"";if(t.length===1||t.length>1&&t.every(c=>c===t[0]))return t[0];const o=L(t),r=t.map(c=>p(c,Array.from(o).length));if(r.every(c=>Array.from(c).length===1))return a?o+`[${r.join("")}]`:o+`(${r.join("|")})`;const n=r.filter(c=>c!=="");return n.length===1?Array.from(n[0]).length===1?o+`${n[0]}?`:o+`(${n[0]})?`:o?n.length===r.length-1?o+`(${n.join("|")})?`:o+`(${r.join("|")})`:m(t)}function L(t){const a=t.toSorted((e,n)=>Array.from(e).length-Array.from(n).length);let o="";const r=Array.from(a[0]);for(let e=0;e<r.length;e++){const n=r[e];for(let i=1;i<a.length;i++){const c=Array.from(a[i])[e];if(c!==void 0&&n!==c)return o}o+=n}return o}function $(t,a=!0){if(t.length===0)return"";if(t.length===1||t.length>1&&t.every(c=>c===t[0]))return t[0];const o=E(t),r=t.map(c=>p(c,0,Array.from(c).length-Array.from(o).length));if(r.every(c=>Array.from(c).length===1))return a?`[${r.join("")}]`+o:`(${r.join("|")})`+o;const n=r.filter(c=>c!=="");return n.length===1?Array.from(n[0]).length===1?`${n[0]}?`+o:`(${n[0]})`+o:o?`(${r.join("|")})`+o:m(r)}function E(t){const a=t.toSorted((e,n)=>Array.from(e).length-Array.from(n).length);let o="";const r=Array.from(a[0]);for(let e=0;e<r.length;e++){const n=r[r.length-1-e];for(let i=1;i<a.length;i++){const s=Array.from(a[i]),c=s[s.length-1-e];if(c!==void 0&&n!==c)return o}o=n+o}return o}function A(t,a=!0,o=!1){if(t.length===0)return"";if(t.length===1||t.length>1&&t.every(l=>l===t[0]))return t[0];const r=L(t),e=E(t),n=t.map(l=>p(l,Array.from(r).length,Array.from(l).length-Array.from(e).length));if(n.every(l=>Array.from(l).length===1))return a?r+`[${n.join("")}]`+e:r+`(${n.join("|")})`+e;const s=n.filter(l=>l!=="");return s.length===1?Array.from(s[0]).length===1?r+`${s[0]}?`+e:r+`(${s[0]})?`+e:r||e?s.length===n.length-1?r+`(${s.join("|")})?`+e:r+`(${n.join("|")})`+e:m(t,o)}function M(t,a=!0){if(t.length===0)return"";if(t.length===1||t.length>1&&t.every(u=>u===t[0]))return t[0];const{string:o,positions:r}=x(t);if(console.log(o,r),!o)return m(t);const e=t.map((u,l)=>p(u,0,r[l])),n=t.map((u,l)=>p(u,r[l]+Array.from(o).length,Array.from(u).length));let i="";e.filter(u=>u!=="").length>0&&(i=A(e,a,!0));let s="";return n.filter(u=>u!=="").length>0&&(s=A(n,a,!0)),i+o+s}function x(t){const a=t.toSorted((e,n)=>Array.from(e).length-Array.from(n).length),o=a.map(e=>t.indexOf(e)),r=Array.from(a[0]);for(let e=r.length;e>0;e--)for(let n=0;n<=r.length-e;n++){const i=p(a[0],n,n+e);let s=!0;const c=Array(a.length).fill(0);c[o[0]]=n;for(let u=1;u<a.length;u++){const l=a[u].indexOf(i);l===-1?s=!1:c[o[u]]=l}if(s)return{string:i,positions:c}}return{string:"",positions:t.map(()=>-1)}}function p(t,a,o){return Array.from(t).slice(a,o).join("")}const b=document.querySelector(".saved-entry");b.remove();const H=document.querySelector(".output"),O=H.querySelector(".patterns"),P=document.querySelector(".switch-button");P.addEventListener("click",()=>{const t=Array.from(document.querySelectorAll(".string-input")),a=t.map(o=>o.value);a.length>=2&&(t[1].value=a[0],t[0].value=a[1]),y()});const j=document.querySelector(".add-button");j.addEventListener("click",()=>B());function B(){const t=document.querySelectorAll(".string-input-container"),a=document.querySelector(".string-input-container").cloneNode(!0),o=t.length+1,r=document.querySelector("button[type='submit']");r.innerHTML="Make a match set";const e=a.querySelector("label");e.setAttribute("for",`string${o}`),e.innerHTML=`String ${o}`;const n=a.querySelector("input");n.setAttribute("name",`string${o}`),n.setAttribute("id",`string${o}`),n.value="";const i=document.createElement("button");return a.appendChild(i),i.type="button",i.classList.add("remove-input-button"),i.innerHTML="Remove",i.addEventListener("click",()=>{a.remove();const s=document.querySelectorAll(".string-input-container");r.innerHTML=s.length>2?"Make a match set":"Make a match pair"}),t[t.length-1].insertAdjacentElement("afterend",a),a}const T=document.querySelectorAll("input[name='group']");T.forEach(t=>t.addEventListener("input",()=>{O.classList.contains("hidden")||y()}));const q=document.querySelector(".input-form");q.addEventListener("submit",t=>{t.preventDefault(),y()});const k=document.querySelectorAll(".save-button");k.forEach(t=>t.addEventListener("click",()=>{const a=t.closest(".pattern").querySelector("dd").textContent,o=Array.from(document.querySelectorAll(".string-input")).map(e=>e.value).filter(e=>e!==""),r=q.group.value==="brackets";w(a,o,r)}));const I=document.querySelector(".copy-button");I.addEventListener("click",F);function y(t,a){O.classList.remove("hidden");const o=Array.from(document.querySelectorAll(".string-input")),r=Array.from(new Set(o.map(h=>h.value).filter(h=>h!=="")));if(a!==void 0){const h=document.querySelector(`#group--${a?"brackets":"parentheses"}`);h.checked=!0}const e=q.group.value==="brackets",n=[],i=M(r,e);n.push(i);const s=document.querySelector("#pattern--middle");s.querySelector("dd").innerHTML=i;const c=m(r),u=document.querySelector("#pattern--alternation");n.includes(c)?u.classList.add("duplicate"):(u.classList.remove("duplicate"),n.push(c)),u.querySelector("dd").innerHTML=c;const l=A(r,e),d=document.querySelector("#pattern--begin-end");n.includes(l)?d.classList.add("duplicate"):(d.classList.remove("duplicate"),n.push(l)),d.querySelector("dd").innerHTML=l;const f=C(r,e),g=document.querySelector("#pattern--begin");n.includes(f)?g.classList.add("duplicate"):(g.classList.remove("duplicate"),n.push(f)),g.querySelector("dd").innerHTML=f;const S=$(r,e),v=document.querySelector("#pattern--end");n.includes(S)?v.classList.add("duplicate"):(v.classList.remove("duplicate"),n.push(S)),v.querySelector("dd").innerHTML=S}function w(t,a,o){const r=document.querySelector(".saved");r.classList.remove("hidden");const e=b.cloneNode(!0);e.setAttribute("data-group",o?"brackets":"parentheses"),r.appendChild(e);const n=e.querySelector(".entry-strings");a.forEach(u=>{const l=document.createElement("div");l.classList.add("saved-string"),l.innerHTML=u,n.appendChild(l)});const i=e.querySelector(".entry-pattern");i.innerHTML=t,e.querySelector(".load-button").addEventListener("click",()=>N(t,a,o)),e.querySelector(".remove-entry-button").addEventListener("click",()=>e.remove())}function N(t,a,o){const r=Array.from(document.querySelectorAll(".string-input-container"));if(r.length<a.length)for(let e=0;e<a.length-r.length;e++){const n=B();r.push(n)}else if(r.length>a.length)for(let e=r.length-1;e>a.length-1;e--)r[e].remove();for(let e=0;e<r.length;e++){const n=r[e].querySelector(".string-input");n.value=a[e]}y(t,o)}async function F(){const a=Array.from(document.querySelectorAll(".entry-pattern")).map(o=>o.textContent).join(`
`);try{await navigator.clipboard.writeText(a),console.log("Copied to clipboard:",a)}catch(o){console.error("Couldn't copy text:",o)}}