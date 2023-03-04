(()=>{var n={896:()=>{const n=document.querySelector(".header__dark-mode"),r=document.querySelector("html"),t=(document.querySelector("body"),localStorage.getItem("mode")?localStorage.getItem("mode"):null);t&&r.classList.add("dark"),n.addEventListener("click",(()=>{r.classList.toggle("dark"),t?localStorage.setItem("mode",""):localStorage.setItem("mode","dark")}))},668:(n,r,t)=>{"use strict";t.d(r,{Z:()=>m});var e=t(81),o=t.n(e),a=t(645),i=t.n(a),s=t(667),l=t.n(s),d=new URL(t(478),t.b),c=i()(o());c.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@100;200;300;400;500;600;800;900&display=swap);"]);var p=l()(d);c.push([n.id,'/*\n! tailwindcss v3.2.7 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n5. Use the user\'s configured `sans` font-feature-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\r\n.container {\n  width: 100%;\n}\r\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\r\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\r\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\r\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\r\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\r\n.fixed {\n  position: fixed;\n}\r\n.absolute {\n  position: absolute;\n}\r\n.relative {\n  position: relative;\n}\r\n.bottom-\\[-4px\\] {\n  bottom: -4px;\n}\r\n.left-0 {\n  left: 0px;\n}\r\n.top-0 {\n  top: 0px;\n}\r\n.z-\\[1\\] {\n  z-index: 1;\n}\r\n.mx-0 {\n  margin-left: 0px;\n  margin-right: 0px;\n}\r\n.my-\\[4\\.8rem\\] {\n  margin-top: 4.8rem;\n  margin-bottom: 4.8rem;\n}\r\n.my-\\[5rem\\] {\n  margin-top: 5rem;\n  margin-bottom: 5rem;\n}\r\n.mb-\\[0\\.8rem\\] {\n  margin-bottom: 0.8rem;\n}\r\n.mb-\\[2\\.3rem\\] {\n  margin-bottom: 2.3rem;\n}\r\n.mb-\\[6\\.5rem\\] {\n  margin-bottom: 6.5rem;\n}\r\n.mr-\\[0\\.5rem\\] {\n  margin-right: 0.5rem;\n}\r\n.mr-\\[0\\.8rem\\] {\n  margin-right: 0.8rem;\n}\r\n.mr-\\[1rem\\] {\n  margin-right: 1rem;\n}\r\n.mr-\\[2rem\\] {\n  margin-right: 2rem;\n}\r\n.mr-auto {\n  margin-right: auto;\n}\r\n.block {\n  display: block;\n}\r\n.flex {\n  display: flex;\n}\r\n.inline-flex {\n  display: inline-flex;\n}\r\n.grid {\n  display: grid;\n}\r\n.hidden {\n  display: none;\n}\r\n.h-\\[170px\\] {\n  height: 170px;\n}\r\n.h-\\[20px\\] {\n  height: 20px;\n}\r\n.h-\\[400px\\] {\n  height: 400px;\n}\r\n.h-auto {\n  height: auto;\n}\r\n.h-full {\n  height: 100%;\n}\r\n.max-h-\\[170px\\] {\n  max-height: 170px;\n}\r\n.w-\\[200px\\] {\n  width: 200px;\n}\r\n.w-\\[20px\\] {\n  width: 20px;\n}\r\n.w-\\[480px\\] {\n  width: 480px;\n}\r\n.w-\\[560px\\] {\n  width: 560px;\n}\r\n.w-full {\n  width: 100%;\n}\r\n.min-w-\\[96px\\] {\n  min-width: 96px;\n}\r\n.max-w-\\[598px\\] {\n  max-width: 598px;\n}\r\n.grow {\n  flex-grow: 1;\n}\r\n.translate-y-full {\n  --tw-translate-y: 100%;\n  transform: translate(var(--tw-translate-x), 100%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.cursor-pointer {\n  cursor: pointer;\n}\r\n.grid-cols-4 {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\r\n.flex-col {\n  flex-direction: column;\n}\r\n.flex-wrap {\n  flex-wrap: wrap;\n}\r\n.items-start {\n  align-items: flex-start;\n}\r\n.items-center {\n  align-items: center;\n}\r\n.justify-center {\n  justify-content: center;\n}\r\n.justify-between {\n  justify-content: space-between;\n}\r\n.gap-\\[1rem\\] {\n  gap: 1rem;\n}\r\n.gap-\\[7\\.5rem\\] {\n  gap: 7.5rem;\n}\r\n.overflow-hidden {\n  overflow: hidden;\n}\r\n.scroll-smooth {\n  scroll-behavior: smooth;\n}\r\n.rounded-\\[10px\\] {\n  border-radius: 10px;\n}\r\n.rounded-\\[5px\\] {\n  border-radius: 5px;\n}\r\n.rounded-\\[6px\\] {\n  border-radius: 6px;\n}\r\n.border {\n  border-width: 1px;\n}\r\n.bg-\\[\\#fafafa\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgba(250, 250, 250, 1);\n  background-color: rgb(250 250 250 / var(--tw-bg-opacity));\n}\r\n.bg-\\[\\#ffffff\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, 1);\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\r\n.bg-transparent {\n  background-color: transparent;\n}\r\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, 1);\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\r\n.bg-\\[url\\(\\\'\\.\\.\\/images\\/svg\\/search-icon\\.svg\\\'\\)\\] {\n  background-image: url('+p+");\n}\r\n.bg-\\[length\\:18px_18px\\] {\n  background-size: 18px 18px;\n}\r\n.bg-\\[top_19px_left_32px\\] {\n  background-position: top 19px left 32px;\n}\r\n.bg-no-repeat {\n  background-repeat: no-repeat;\n}\r\n.fill-\\[\\#111517\\] {\n  fill: #111517;\n}\r\n.stroke-\\[\\#111517\\] {\n  stroke: #111517;\n}\r\n.object-cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\r\n.object-center {\n  -o-object-position: center;\n     object-position: center;\n}\r\n.px-0 {\n  padding-left: 0px;\n  padding-right: 0px;\n}\r\n.px-\\[1rem\\] {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\r\n.px-\\[2\\.4rem\\] {\n  padding-left: 2.4rem;\n  padding-right: 2.4rem;\n}\r\n.py-\\[0\\.4rem\\] {\n  padding-top: 0.4rem;\n  padding-bottom: 0.4rem;\n}\r\n.py-\\[0\\.5rem\\] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\r\n.py-\\[1\\.2rem\\] {\n  padding-top: 1.2rem;\n  padding-bottom: 1.2rem;\n}\r\n.py-\\[1\\.8rem\\] {\n  padding-top: 1.8rem;\n  padding-bottom: 1.8rem;\n}\r\n.py-\\[1rem\\] {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\r\n.py-\\[2\\.4rem\\] {\n  padding-top: 2.4rem;\n  padding-bottom: 2.4rem;\n}\r\n.py-\\[2\\.6rem\\] {\n  padding-top: 2.6rem;\n  padding-bottom: 2.6rem;\n}\r\n.pb-\\[4\\.5rem\\] {\n  padding-bottom: 4.5rem;\n}\r\n.pl-\\[2\\.4rem\\] {\n  padding-left: 2.4rem;\n}\r\n.pl-\\[3\\.2rem\\] {\n  padding-left: 3.2rem;\n}\r\n.pl-\\[7\\.4rem\\] {\n  padding-left: 7.4rem;\n}\r\n.pr-\\[1rem\\] {\n  padding-right: 1rem;\n}\r\n.pr-\\[3\\.9rem\\] {\n  padding-right: 3.9rem;\n}\r\n.pt-\\[2\\.4rem\\] {\n  padding-top: 2.4rem;\n}\r\n.pt-\\[8rem\\] {\n  padding-top: 8rem;\n}\r\n.text-center {\n  text-align: center;\n}\r\n.font-\\[\\'Nunito_Sans\\'\\] {\n  font-family: 'Nunito Sans';\n}\r\n.text-\\[1\\.4rem\\] {\n  font-size: 1.4rem;\n}\r\n.text-\\[1\\.6rem\\] {\n  font-size: 1.6rem;\n}\r\n.text-\\[2\\.4rem\\] {\n  font-size: 2.4rem;\n}\r\n.text-\\[3\\.2rem\\] {\n  font-size: 3.2rem;\n}\r\n.text-\\[62\\.5\\%\\] {\n  font-size: 62.5%;\n}\r\n.font-bold {\n  font-weight: 700;\n}\r\n.font-extrabold {\n  font-weight: 800;\n}\r\n.font-light {\n  font-weight: 300;\n}\r\n.font-normal {\n  font-weight: 400;\n}\r\n.font-semibold {\n  font-weight: 600;\n}\r\n.leading-\\[1\\.14rem\\] {\n  line-height: 1.14rem;\n}\r\n.leading-\\[1\\.31\\] {\n  line-height: 1.31;\n}\r\n.leading-\\[1\\.36\\] {\n  line-height: 1.36;\n}\r\n.leading-\\[1\\.4\\] {\n  line-height: 1.4;\n}\r\n.text-\\[\\#111517\\] {\n  --tw-text-opacity: 1;\n  color: rgba(17, 21, 23, 1);\n  color: rgb(17 21 23 / var(--tw-text-opacity));\n}\r\n.shadow-\\[0_-4px_4px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.0562443\\)\\] {\n  --tw-shadow: 0 -4px 4px rgba(0,0,0,0.0562443);\n  --tw-shadow-colored: 0 -4px 4px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 -4px 4px rgba(0,0,0,0.0562443);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.shadow-\\[0_0_4px_1px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.104931\\)\\] {\n  --tw-shadow: 0 0 4px 1px rgba(0,0,0,0.104931);\n  --tw-shadow-colored: 0 0 4px 1px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 0 4px 1px rgba(0,0,0,0.104931);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.shadow-\\[0_0_7px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.293139\\)\\] {\n  --tw-shadow: 0 0 7px rgba(0,0,0,0.293139);\n  --tw-shadow-colored: 0 0 7px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 0 7px rgba(0,0,0,0.293139);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.shadow-\\[0_0px_7px_2px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.027\\)\\] {\n  --tw-shadow: 0 0px 7px 2px rgba(0,0,0,0.027);\n  --tw-shadow-colored: 0 0px 7px 2px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 0px 7px 2px rgba(0,0,0,0.027);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.shadow-\\[0_2px_4px_-15px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.0562443\\)\\] {\n  --tw-shadow: 0 2px 4px -15px rgba(0,0,0,0.0562443);\n  --tw-shadow-colored: 0 2px 4px -15px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 2px 4px -15px rgba(0,0,0,0.0562443);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.shadow-\\[0_2px_9px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.0532439\\)\\] {\n  --tw-shadow: 0 2px 9px rgba(0,0,0,0.0532439);\n  --tw-shadow-colored: 0 2px 9px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 2px 9px rgba(0,0,0,0.0532439);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\r\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\r\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.duration-100 {\n  transition-duration: 100ms;\n}\r\n.duration-300 {\n  transition-duration: 300ms;\n}\r\n.ease-in {\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\r\n\r\n/* GLOBAL STYLES */\r\n*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n* :focus {\r\n  outline: 2px solid var(--blue-bg-color);\r\n  outline-offset: 4px;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n  max-width: 1280px;\r\n  margin: 0 auto;\r\n  padding: 0 2rem;\r\n}\r\n\r\n.lds-roller {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n.lds-roller div {\r\n  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n  transform-origin: 40px 40px;\r\n}\r\n.lds-roller div:after {\r\n  content: \" \";\r\n  display: block;\r\n  position: absolute;\r\n  width: 7px;\r\n  height: 7px;\r\n  border-radius: 50%;\r\n  background: #fff;\r\n  margin: -4px 0 0 -4px;\r\n}\r\n.lds-roller div:nth-child(1) {\r\n  animation-delay: -0.036s;\r\n}\r\n.lds-roller div:nth-child(1):after {\r\n  top: 63px;\r\n  left: 63px;\r\n}\r\n.lds-roller div:nth-child(2) {\r\n  animation-delay: -0.072s;\r\n}\r\n.lds-roller div:nth-child(2):after {\r\n  top: 68px;\r\n  left: 56px;\r\n}\r\n.lds-roller div:nth-child(3) {\r\n  animation-delay: -0.108s;\r\n}\r\n.lds-roller div:nth-child(3):after {\r\n  top: 71px;\r\n  left: 48px;\r\n}\r\n.lds-roller div:nth-child(4) {\r\n  animation-delay: -0.144s;\r\n}\r\n.lds-roller div:nth-child(4):after {\r\n  top: 72px;\r\n  left: 40px;\r\n}\r\n.lds-roller div:nth-child(5) {\r\n  animation-delay: -0.18s;\r\n}\r\n.lds-roller div:nth-child(5):after {\r\n  top: 71px;\r\n  left: 32px;\r\n}\r\n.lds-roller div:nth-child(6) {\r\n  animation-delay: -0.216s;\r\n}\r\n.lds-roller div:nth-child(6):after {\r\n  top: 68px;\r\n  left: 24px;\r\n}\r\n.lds-roller div:nth-child(7) {\r\n  animation-delay: -0.252s;\r\n}\r\n.lds-roller div:nth-child(7):after {\r\n  top: 63px;\r\n  left: 17px;\r\n}\r\n.lds-roller div:nth-child(8) {\r\n  animation-delay: -0.288s;\r\n}\r\n.lds-roller div:nth-child(8):after {\r\n  top: 56px;\r\n  left: 12px;\r\n}\r\n@keyframes lds-roller {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.loader {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n@media only screen and (max-width: 576px) {\r\n  .container {\r\n    padding: 0 1rem;\r\n  }\r\n}\r\n\r\n.placeholder\\:text-\\[1\\.4rem\\]::-moz-placeholder {\n  font-size: 1.4rem;\n}\r\n\r\n.placeholder\\:text-\\[1\\.4rem\\]::placeholder {\n  font-size: 1.4rem;\n}\r\n\r\n.placeholder\\:font-normal::-moz-placeholder {\n  font-weight: 400;\n}\r\n\r\n.placeholder\\:font-normal::placeholder {\n  font-weight: 400;\n}\r\n\r\n.placeholder\\:leading-\\[1\\.42\\]::-moz-placeholder {\n  line-height: 1.42;\n}\r\n\r\n.placeholder\\:leading-\\[1\\.42\\]::placeholder {\n  line-height: 1.42;\n}\r\n\r\n.placeholder\\:text-\\[\\#848484\\]::-moz-placeholder {\n  --tw-text-opacity: 1;\n  color: rgba(132, 132, 132, 1);\n  color: rgb(132 132 132 / var(--tw-text-opacity));\n}\r\n\r\n.placeholder\\:text-\\[\\#848484\\]::placeholder {\n  --tw-text-opacity: 1;\n  color: rgba(132, 132, 132, 1);\n  color: rgb(132 132 132 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:bg-\\[\\#fafafa\\]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(250, 250, 250, 1);\n  background-color: rgb(250 250 250 / var(--tw-bg-opacity));\n}\r\n\r\n.focus\\:shadow-\\[0_5px_15px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.0532439\\)\\]:focus {\n  --tw-shadow: 0 5px 15px rgba(0,0,0,0.0532439);\n  --tw-shadow-colored: 0 5px 15px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 5px 15px rgba(0,0,0,0.0532439);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n\r\n.dark .dark\\:bg-\\[\\#202c36\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgba(32, 44, 54, 1);\n  background-color: rgb(32 44 54 / var(--tw-bg-opacity));\n}\r\n\r\n.dark .dark\\:bg-\\[\\#2B3844\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgba(43, 56, 68, 1);\n  background-color: rgb(43 56 68 / var(--tw-bg-opacity));\n}\r\n\r\n.dark .dark\\:bg-\\[\\#2b3844\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgba(43, 56, 68, 1);\n  background-color: rgb(43 56 68 / var(--tw-bg-opacity));\n}\r\n\r\n.dark .dark\\:fill-\\[\\#ffffff\\] {\n  fill: #ffffff;\n}\r\n\r\n.dark .dark\\:stroke-\\[\\#ffffff\\] {\n  stroke: #ffffff;\n}\r\n\r\n.dark .dark\\:text-\\[\\#ffffff\\] {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, 1);\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n\r\n.dark .dark\\:hover\\:bg-\\[\\#202c36\\]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(32, 44, 54, 1);\n  background-color: rgb(32 44 54 / var(--tw-bg-opacity));\n}\r\n\r\n@media (max-width: 1200px) {\n\n  .max-\\[1200px\\]\\:mb-\\[5rem\\] {\n    margin-bottom: 5rem;\n  }\n\n  .max-\\[1200px\\]\\:mr-0 {\n    margin-right: 0px;\n  }\n\n  .max-\\[1200px\\]\\:flex-col {\n    flex-direction: column;\n  }\n}\r\n\r\n@media (max-width: 1065px) {\n\n  .max-\\[1065px\\]\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\r\n\r\n@media (max-width: 790px) {\n\n  .max-\\[790px\\]\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\r\n\r\n@media (max-width: 768px) {\n\n  .max-\\[768px\\]\\:mb-\\[4rem\\] {\n    margin-bottom: 4rem;\n  }\n\n  .max-\\[768px\\]\\:flex-col {\n    flex-direction: column;\n  }\n\n  .max-\\[768px\\]\\:items-start {\n    align-items: flex-start;\n  }\n}\r\n\r\n@media (max-width: 576px) {\n\n  .max-\\[576px\\]\\:mx-0 {\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n\n  .max-\\[576px\\]\\:mb-\\[6rem\\] {\n    margin-bottom: 6rem;\n  }\n\n  .max-\\[576px\\]\\:mt-\\[4rem\\] {\n    margin-top: 4rem;\n  }\n\n  .max-\\[576px\\]\\:h-auto {\n    height: auto;\n  }\n\n  .max-\\[576px\\]\\:w-full {\n    width: 100%;\n  }\n\n  .max-\\[576px\\]\\:gap-\\[4rem\\] {\n    gap: 4rem;\n  }\n\n  .max-\\[576px\\]\\:px-0 {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n\n  .max-\\[576px\\]\\:py-\\[3rem\\] {\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n  }\n\n  .max-\\[576px\\]\\:pb-\\[6\\.5rem\\] {\n    padding-bottom: 6.5rem;\n  }\n\n  .max-\\[576px\\]\\:pl-\\[8\\%\\] {\n    padding-left: 8%;\n  }\n\n  .max-\\[576px\\]\\:pr-\\[8\\%\\] {\n    padding-right: 8%;\n  }\n\n  .max-\\[576px\\]\\:text-\\[1\\.5rem\\] {\n    font-size: 1.5rem;\n  }\n}\r\n\r\n@media (max-width: 543px) {\n\n  .max-\\[543px\\]\\:grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n}\r\n\r\n@media (max-width: 450px) {\n\n  .max-\\[450px\\]\\:mb-\\[1\\.6rem\\] {\n    margin-bottom: 1.6rem;\n  }\n\n  .max-\\[450px\\]\\:mb-\\[3rem\\] {\n    margin-bottom: 3rem;\n  }\n\n  .max-\\[450px\\]\\:mb-\\[4rem\\] {\n    margin-bottom: 4rem;\n  }\n\n  .max-\\[450px\\]\\:flex-col {\n    flex-direction: column;\n  }\n}\r\n",""]);const m=c},645:n=>{"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t="",e=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),e&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=n(r),e&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(n,t,e,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(e)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);e&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),r.push(c))}},r}},667:n=>{"use strict";n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{"use strict";n.exports=function(n){return n[1]}},379:n=>{"use strict";var r=[];function t(n){for(var t=-1,e=0;e<r.length;e++)if(r[e].identifier===n){t=e;break}return t}function e(n,e){for(var a={},i=[],s=0;s<n.length;s++){var l=n[s],d=e.base?l[0]+e.base:l[0],c=a[d]||0,p="".concat(d," ").concat(c);a[d]=c+1;var m=t(p),g={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)r[m].references++,r[m].updater(g);else{var h=o(g,e);e.byIndex=s,r.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(n,r){var t=r.domAPI(r);return t.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;t.update(n=r)}else t.remove()}}n.exports=function(n,o){var a=e(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);r[s].references--}for(var l=e(n,o),d=0;d<a.length;d++){var c=t(a[d]);0===r[c].references&&(r[c].updater(),r.splice(c,1))}a=l}}},569:n=>{"use strict";var r={};n.exports=function(n,t){var e=function(n){if(void 0===r[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}r[n]=t}return r[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},216:n=>{"use strict";n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,t)=>{"use strict";n.exports=function(n){var r=t.nc;r&&n.setAttribute("nonce",r)}},795:n=>{"use strict";n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(t){!function(n,r,t){var e="";t.supports&&(e+="@supports (".concat(t.supports,") {")),t.media&&(e+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(e+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),e+=t.css,o&&(e+="}"),t.media&&(e+="}"),t.supports&&(e+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(e,n,r.options)}(r,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{"use strict";n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},478:(n,r,t)=>{"use strict";n.exports=t.p+"71f446f2ba2230ee2061.svg"}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={id:e,exports:{}};return n[e](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return t.d(r,{a:r}),r},t.d=(n,r)=>{for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var r=t.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var e=r.getElementsByTagName("script");e.length&&(n=e[e.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";var n=t(379),r=t.n(n),e=t(795),o=t.n(e),a=t(569),i=t.n(a),s=t(565),l=t.n(s),d=t(216),c=t.n(d),p=t(589),m=t.n(p),g=t(668),h={};h.styleTagTransform=m(),h.setAttributes=l(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=c(),r()(g.Z,h),g.Z&&g.Z.locals&&g.Z.locals,t(896);const b=document.querySelector(".loader"),f=n=>{n?b.classList.remove("hidden"):b.classList.add("hidden")},w=(document.querySelector(".cards"),document.querySelector(".country-info")),x=window.location.search;(async n=>{f(!0);const r=await fetch(n);if(!r.ok)throw new Error("Something went wrong :(");const t=await r.json();return f(!1),t})(`https://restcountries.com/v3.1/${new URLSearchParams(x).get("country")}`).then((n=>{(n=>{const{population:r,flags:t,borders:e,capital:o,name:a,region:i,tld:s,currencies:l,languages:d,subregion:c}=n,p=Object.values(a.nativeName)[0].official,m=Object.values(l)[0].name,g=Object.values(d);w.innerHTML=`\n  <img\n            class="country-info__img w-[560px] h-[400px] rounded-[10px] block object-cover object-center mr-[2rem] max-[1200px]:mr-0 max-[1200px]:mb-[5rem] max-[576px]:w-full max-[576px]:h-auto max-[450px]:mb-[4rem]"\n            src=${t.svg}\n            alt=${t.alt}\n            width="560"\n            height="400"\n          />\n          <div\n            class="country-info__content w-full max-w-[598px] max-[1200px]:mb-[5rem]"\n          >\n            <h2\n              class="text-[3.2rem] leading-[1.36] font-bold mb-[2.3rem] max-[450px]:mb-[1.6rem]"\n            >\n            ${a.common}\n            </h2>\n            <ul\n              class="country-info__list flex items-start justify-between mb-[6.5rem] max-[450px]:flex-col max-[450px]:mb-[3rem]"\n            >\n              <li class="country-info__item max-[450px]:mb-[3rem]">\n                <p class="name mb-[0.8rem] font-semibold">\n                  Native Name:\n                  <span class="font-light">${p}</span>\n                </p>\n                <p class="population mb-[0.8rem] font-semibold">\n                  Population:\n                  <span class="font-light">${r}</span>\n                </p>\n                <p class="region mb-[0.8rem] font-semibold">\n                  Region:\n                  <span class="font-light">${i}</span>\n                </p>\n                <p class="sub-region mb-[0.8rem] font-semibold">\n                  Sub Region:\n                  <span class="font-light">${c}</span>\n                </p>\n                <p class="capital font-semibold">\n                  Capital:\n                  <span class="font-light">${o}</span>\n                </p>\n              </li>\n              <li class="country-info__item">\n                <p class="name mb-[0.8rem] font-semibold">\n                  Top Level Domain:\n                  <span class="font-light">${s}</span>\n                </p>\n                <p class="population mb-[0.8rem] font-semibold">\n                  Currencies:\n                  <span class="font-light">${m}</span>\n                </p>\n                <p class="region font-semibold">\n                  Languages:\n                  <span class="font-light">${g}</span>\n                </p>\n              </li>\n            </ul>\n\n            <div\n              class="country-info__borders flex items-center flex-wrap gap-[1rem]"\n            >\n              <h3 class="font-semibold mr-[0.5rem]">Border Countries:</h3>\n              ${e?e.map((n=>`\n                      <a\n                      class="min-w-[96px] py-[0.5rem] px-[1rem] inline-flex justify-center shadow-[0_0_4px_1px_rgba(0,0,0,0.104931)] font-light text-[1.4rem] leading-[1.4]"\n                      href="./about.html?country=/alpha/${n}"\n                      >${n}</a\n                    >\n                `)):"No Borders"}\n            </div>\n          </div>\n        </div>\n  `})(n[0])})).catch((n=>{alert(n.message)}))})()})();