/* https://github.com/andria-dev/mini-debounce/releases/tag/1.0.0 */
export let debounce=(e,t)=>{let o;return(...r)=>(clearTimeout(o),o=setTimeout(()=>e(...r),t))};