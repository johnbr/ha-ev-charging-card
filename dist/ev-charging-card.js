function t(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new n(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,f=globalThis,m=f.trustedTypes,g=m?m.emptyScript:"",_=f.reactiveElementPolyfillSupport,$=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!l(t,e),b={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...d(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),r=e.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=s;const n=r.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const n=this.constructor;if(!1===s&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??y)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[$("elementProperties")]=new Map,A[$("finalized")]=new Map,_?.({ReactiveElement:A}),(f.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,E=t=>t,C=w.trustedTypes,x=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+P,O=`<${k}>`,U=document,M=()=>U.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,H="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,j=/>/g,z=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,I=/"/g,W=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),F=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),V=new WeakMap,X=U.createTreeWalker(U,129);function G(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}const J=(t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=R;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(o.lastIndex=h,l=o.exec(i),null!==l);)h=o.lastIndex,o===R?"!--"===l[1]?o=L:void 0!==l[1]?o=j:void 0!==l[2]?(W.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=z):void 0!==l[3]&&(o=z):o===z?">"===l[0]?(o=r??R,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?z:'"'===l[3]?I:D):o===I||o===D?o=z:o===L||o===j?o=R:(o=z,r=void 0);const d=o===z&&t[e+1].startsWith("/>")?" ":"";n+=o===R?i+O:c>=0?(s.push(a),i.slice(0,c)+S+i.slice(c)+P+d):i+P+(-2===c?e:d)}return[G(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[l,c]=J(t,e);if(this.el=K.createElement(l,i),X.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=X.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(S)){const e=c[n++],i=s.getAttribute(t).split(P),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?et:"?"===o[1]?it:"@"===o[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(P)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(W.test(s.tagName)){const t=s.textContent.split(P),e=t.length-1;if(e>0){s.textContent=C?C.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],M()),X.nextNode(),a.push({type:2,index:++r});s.append(t[e],M())}}}else if(8===s.nodeType)if(s.data===k)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(P,t+1));)a.push({type:7,index:r}),t+=P.length-1}r++}}static createElement(t,e){const i=U.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,s){if(e===F)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=T(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=Z(t,r._$AS(t,e.values),r,s)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??U).importNode(e,!0);X.currentNode=s;let r=X.nextNode(),n=0,o=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Y(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new rt(r,this,t)),this._$AV.push(e),a=i[++o]}n!==a?.index&&(r=X.nextNode(),n++)}return X.currentNode=U,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),T(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Q(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new K(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new Y(this.O(M()),this.O(M()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=E(t).nextSibling;E(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=Z(this,t,e,0),n=!T(t)||t!==this._$AH&&t!==F,n&&(this._$AH=t);else{const s=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=Z(this,s[i+o],e,o),a===F&&(a=this._$AH[o]),n||=!T(a)||a!==this._$AH[o],a===q?t=q:t!==q&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class st extends tt{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??q)===F)return;const i=this._$AH,s=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==q&&(i===q||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const nt=w.litHtmlPolyfillSupport;nt?.(K,Y),(w.litHtmlVersions??=[]).push("3.3.3");const ot=globalThis;class at extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new Y(e.insertBefore(M(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}at._$litElement$=!0,at.finalized=!0,ot.litElementHydrateSupport?.({LitElement:at});const lt=ot.litElementPolyfillSupport;lt?.({LitElement:at}),(ot.litElementVersions??=[]).push("4.2.2");const ct={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},ht=(t=ct,e,i)=>{const{kind:s,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};function dt(t){return(e,i)=>"object"==typeof i?ht(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ut(t){return dt({...t,state:!0,attribute:!1})}const pt="ev-charging-card",ft="ev-charging-card-editor",mt={Supercharger:"Supercharging",Fast:"Supercharging",CHAdeMO:"DC Fast Charging",Combo:"DC Fast Charging",GB:"DC Fast Charging",AC:"Charging",default:"Charging"},gt=new Set(["on","true","charging","starting"]),_t=new Set(["unavailable","unknown","none",""]),$t=o`
  :host {
    display: block;
  }

  ha-card {
    padding: 4px 16px 6px;
  }

  .title {
    font-size: var(--ha-card-header-font-size, 1.1em);
    font-weight: 500;
    color: var(--success-color, #43a047);
    margin-bottom: 0;
    text-align: center;
  }

  .row {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .bolt {
    width: 28px;
    height: 28px;
    flex: 0 0 auto;
    color: var(--disabled-text-color);
    transition: color 200ms ease;
  }

  .bolt svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  .bolt[data-active='true'] {
    color: var(--warning-color, #ffa500);
    animation: bolt-pulse 1.2s ease-in-out infinite;
    filter: drop-shadow(0 0 4px var(--warning-color, #ffa500));
  }

  .bar-block {
    flex: 1 1 auto;
    min-width: 0;
    display: flex;
    flex-direction: column;
  }

  .bar {
    position: relative;
    width: 100%;
    height: 32px;
    border-radius: 16px;
    background: var(--secondary-background-color);
    overflow: hidden;
  }

  .fill {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: var(--primary-color);
    border-radius: 16px 0 0 16px;
    transition: width 400ms ease;
    overflow: hidden;
  }

  .fill[data-full='true'] {
    border-radius: 16px;
  }

  .shimmer {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    pointer-events: none;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.35) 50%,
      transparent 100%
    );
    transform: translateX(-100%);
  }

  .shimmer[data-active='true'] {
    animation: shimmer-sweep 2s linear infinite;
  }

  .metrics {
    position: absolute;
    inset: 0;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    column-gap: 8px;
    padding: 0 12px;
    pointer-events: none;
    z-index: 2;
  }

  .metric {
    font-size: 0.85em;
    font-weight: 600;
    color: #ffffff;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.9), 0 1px 2px rgba(0, 0, 0, 0.6);
    white-space: nowrap;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .metric-left {
    grid-column: 1;
    justify-self: start;
  }

  .metric-center {
    grid-column: 2;
    justify-self: center;
  }

  .metric-right {
    grid-column: 3;
    justify-self: end;
  }

  .soc-marker,
  .limit-marker {
    position: absolute;
    top: -2px;
    bottom: -2px;
    width: 2px;
    pointer-events: none;
    z-index: 3;
    transform: translateX(-50%);
  }

  .soc-marker {
    background: var(--primary-text-color);
    opacity: 0.85;
  }

  .limit-marker {
    background: var(--accent-color, #ff9800);
  }

  .limit-marker::after {
    content: '';
    position: absolute;
    top: -4px;
    left: -3px;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid var(--accent-color, #ff9800);
  }

  .above-bar,
  .below-bar {
    position: relative;
    min-height: 1.2em;
    font-size: 0.8em;
  }

  .above-bar {
    margin-bottom: 2px;
  }

  .below-bar {
    margin-top: 4px;
  }

  .above-bar > div,
  .below-bar > div {
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    white-space: nowrap;
    line-height: 1.2em;
  }

  .limit-above {
    color: var(--accent-color, #ff9800);
    font-weight: 500;
  }

  .soc-below {
    color: var(--primary-text-color);
    font-weight: 600;
  }


  hui-warning {
    display: block;
  }

  @keyframes bolt-pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.1); }
  }

  @keyframes shimmer-sweep {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  @media (prefers-reduced-motion: reduce) {
    .bolt[data-active='true'] {
      animation: none;
    }
    .shimmer[data-active='true'] {
      animation: none;
      opacity: 0;
    }
  }
`;function vt(t,e){if(!t||!e)return null;const i=t.states[e];if(!i)return null;const s=i.state,r=!_t.has(String(s).toLowerCase()),n=r?parseFloat(s):NaN;return{available:r,state:s,numeric:Number.isFinite(n)?n:null,unit:i.attributes?.unit_of_measurement}}function yt(t){return null!=t&&Number.isFinite(t)?t<0?0:t>100?100:t:0}function bt(t){if(!t||!t.available)return null;const e=function(t){if(null!=t.numeric){const e=(t.unit??"").toString().toLowerCase();return"h"===e||"hr"===e||"hour"===e||"hours"===e?60*t.numeric:"s"===e||"sec"===e||"seconds"===e?t.numeric/60:t.numeric}const e=/^(\d+):(\d{2})(?::(\d{2}))?$/.exec(String(t.state).trim());if(e){return 60*parseInt(e[1],10)+parseInt(e[2],10)}return null}(t);if(null==e||e<=0)return null;const i=Math.floor(e/60),s=Math.round(e%60);return 0===i?`${s}m`:0===s?`${i}h`:`${i}h ${s}m`}const At=B`
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M13 2L4.5 13.5h6L9 22l8.5-11.5h-6L13 2z"
    />
  </svg>
`,wt=window;wt.customCards=wt.customCards??[],wt.customCards.some(t=>t.type===pt)||(wt.customCards.push({type:pt,name:"EV Charging Card",description:"Compact card showing an EV charging session — power, energy added, SoC, limit, ETA.",preview:!0,documentationURL:"https://github.com/johnbr/ha-ev-charging-card"}),console.info("%c EV-CHARGING-CARD %c v0.2.0 ","color: white; background: #2c5282; font-weight: 700;","color: #2c5282; background: white; font-weight: 700;"));class Et extends at{static async getConfigElement(){return await Promise.resolve().then(function(){return St}),document.createElement(ft)}static getStubConfig(t,e){const i=e.find(t=>t.startsWith("sensor.")&&/battery/.test(t));return{type:`custom:${pt}`,state_of_charge:i??""}}setConfig(t){if(!t)throw new Error("Invalid configuration");if(!t.state_of_charge)throw new Error("`state_of_charge` entity is required");this._config=t}getCardSize(){return 1}render(){if(!this._config||!this.hass)return q;const t=vt(this.hass,this._config.state_of_charge);if(!t||!t.available)return B`
        <ha-card>
          ${this._renderTitle(!1)}
          <hui-warning>State of charge unavailable</hui-warning>
        </ha-card>
      `;const e=yt(t.numeric),i=function(t,e){const i=Number(t);return Number.isFinite(i)?Math.min(3,Math.max(0,Math.trunc(i))):e}(this._config.soc_precision,1),s=vt(this.hass,this._config.charge_limit),r=s&&s.available?yt(s.numeric):null,n=vt(this.hass,this._config.charging_state),o=!(!(a=n)||!a.available)&&gt.has(String(a.state).toLowerCase());var a;const l=o?function(t){if(!t||!t.available||null==t.numeric)return null;const e="w"===(t.unit??"kW").toString().toLowerCase()?t.numeric/1e3:t.numeric,i=Math.abs(e)>=10?0:1;return`${e.toFixed(i)} kW`}(vt(this.hass,this._config.power)):null,c=o?function(t){return t&&t.available&&null!=t.numeric?`${("wh"===(t.unit??"kWh").toString().toLowerCase()?t.numeric/1e3:t.numeric).toFixed(1)} kWh`:null}(vt(this.hass,this._config.energy_added)):null,h=o?bt(vt(this.hass,this._config.time_remaining)):null;return B`
      <ha-card>
        ${this._renderTitle(o)}
        <div class="row">
          <div class="bolt" data-active="${o}">${At}</div>
          <div class="bar-block">
            <div class="above-bar">
              ${null!=r?B`<div class="limit-above" style="left: ${r}%">${r.toFixed(0)}%</div>`:q}
            </div>
            <div
              class="bar"
              role="progressbar"
              aria-valuenow="${e}"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="fill" data-full="${e>=99.5}" style="width: ${e}%">
                <div class="shimmer" data-active="${o}"></div>
              </div>
              ${o&&(l||h||c)?B`<div class="metrics">
                    ${l?B`<div class="metric metric-left">${l}</div>`:q}
                    ${h?B`<div class="metric metric-center">ETA ${h}</div>`:q}
                    ${c?B`<div class="metric metric-right">${c}</div>`:q}
                  </div>`:q}
              <div class="soc-marker" style="left: ${e}%"></div>
              ${null!=r?B`<div class="limit-marker" style="left: ${r}%"></div>`:q}
            </div>
            <div class="below-bar">
              <div class="soc-below" style="left: ${e}%">${e.toFixed(i)}%</div>
            </div>
          </div>
        </div>
      </ha-card>
    `}_renderTitle(t){if(!this._config)return q;const e=this._config.name??function(t,e,i){if(t.title_override)return t.title_override;if(!i)return t.idle_title??"Not Plugged In";const s=t.charging_type_map??mt,r=s.default??mt.default??"Charging";if(!t.charging_type)return r;const n=vt(e,t.charging_type);return n&&n.available?s[n.state]??r:r}(this._config,this.hass,t);return e?B`<div class="title">${e}</div>`:q}}Et.styles=$t,t([dt({attribute:!1})],Et.prototype,"hass",void 0),t([ut()],Et.prototype,"_config",void 0),customElements.get(pt)||customElements.define(pt,Et);const Ct=[{name:"name",selector:{text:{}}},{name:"state_of_charge",required:!0,selector:{entity:{domain:["sensor"],device_class:"battery"}}},{name:"soc_precision",selector:{number:{min:0,max:3,step:1,mode:"box"}}},{name:"charge_limit",selector:{entity:{domain:["number","input_number","sensor"]}}},{name:"power",selector:{entity:{domain:["sensor"],device_class:"power"}}},{name:"energy_added",selector:{entity:{domain:["sensor"],device_class:"energy"}}},{name:"time_remaining",selector:{entity:{domain:["sensor"]}}},{name:"charging_state",selector:{entity:{domain:["binary_sensor","sensor"]}}},{name:"charging_type",selector:{entity:{domain:["sensor"]}}},{name:"title_override",selector:{text:{}}},{name:"idle_title",selector:{text:{}}}];class xt extends at{constructor(){super(...arguments),this._computeLabel=t=>({name:"Card title (optional override)",state_of_charge:"State of charge (%)",soc_precision:"State-of-charge decimals (0–3)",charge_limit:"Charge limit / target (number entity updates fastest)",power:"Charging power (kW)",energy_added:"Energy added (kWh)",time_remaining:"Time remaining",charging_state:"Charging active sensor",charging_type:"Charging type sensor (for dynamic title)",title_override:"Title override (static)",idle_title:"Idle title (when not charging)"}[t.name]??t.name)}setConfig(t){this._config=t}render(){return this.hass&&this._config?B`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Ct}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:q}_valueChanged(t){const e=t.detail,i=new CustomEvent("config-changed",{detail:{config:e.value},bubbles:!0,composed:!0});this.dispatchEvent(i)}}xt.styles=o`
    :host { display: block; }
    ha-form { display: block; }
  `,t([dt({attribute:!1})],xt.prototype,"hass",void 0),t([ut()],xt.prototype,"_config",void 0),customElements.get(ft)||customElements.define(ft,xt);var St=Object.freeze({__proto__:null,EvChargingCardEditor:xt});export{Et as EvChargingCard};
