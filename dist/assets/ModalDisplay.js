import{r as o,k as P,s as x,n as D,R as E,o as K,K as I,j as t,b as C,m as V,e as oe,f as ie,a as re,t as N,g as se,p as le,h as ce}from"./index.js";import{o as de}from"./use-portal.js";const G=n=>{const[i,e]=o.useState(()=>typeof n=="function"?n():n),a=o.useRef(n);return o.useEffect(()=>{a.current=i},[i]),[i,s=>{const l=typeof s=="function"?s(a.current):s;a.current=l,e(l)},a]},ue={scrollLayer:!1},B=new Map,O=n=>!!(n.touches&&n.touches.length>1)||(n.preventDefault(),!1),me=(n,i)=>{if(typeof document>"u")return[!1,c=>c];const e=n||o.useRef(document.body),[a,s]=o.useState(!1),l={...ue,...i||{}},r=()=>!l.scrollLayer&&!(typeof window>"u"||!window.navigator)&&/iP(ad|hone|od)/.test(window.navigator.platform);return o.useEffect(()=>{if(!e||!e.current)return;const c=e.current.style.overflow;if(a)return B.has(e.current)?void 0:(r()?document.addEventListener("touchmove",O,{passive:!1}):e.current.style.overflow="hidden",void B.set(e.current,{last:c}));if(B.has(e.current)){if(r())document.removeEventListener("touchmove",O);else{const u=B.get(e.current);e.current.style.overflow=u.last}B.delete(e.current)}},[a,e]),[a,s]},pe=P({"0%":{opacity:0},"60%":{opacity:.75},"100%":{opacity:1}}),F=P({"0%":{opacity:0}}),fe=P({"0%":{backdropFilter:"saturate(0%) blur(0)"}}),J=x("div",{position:"relative",display:"inline-block",zIndex:"$max",outline:"none",width:"100%",margin:"$9 auto",verticalAlign:"middle","@sm":{width:"90%",maxWidth:"90%"},variants:{animated:{true:{"&":{animationName:pe,animationDuration:"200ms",animationTimingFunction:"ease-in",animationDirection:"normal"}},false:{transition:"none"}}}}),U=x("div",{position:"fixed",top:0,left:0,right:0,bottom:0,size:"100%",pe:"none",zIndex:"$max","@motion":{transition:"none"},variants:{blur:{true:{bg:"$black",opacity:"$$backdropOpacity","@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))":{opacity:1,backdropFilter:"saturate(180%) blur(20px)",animationName:`${fe}, ${F}`,bg:"rgba(0, 0, 0, 0.1)"}},false:{bg:"$black",opacity:"$$backdropOpacity",animationName:`${F}`,animationDuration:"0.2s",animationTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)"}},animated:{true:{animationName:`${F}`,animationDuration:"0.2s",animationTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)"},false:{transition:"none"}}}}),he=x("div",{position:"fixed",top:0,left:0,right:0,bottom:0,overflow:"auto",zIndex:"$max",WebkitOverflowScrolling:"touch",boxSizing:"border-box",textAlign:"center","&:before":{content:"",display:"inline-block",width:0,height:"100%",verticalAlign:"middle"},".nextui-backdrop-wrapper-enter .nextui-backdrop-layer-default":{opacity:0},".nextui-backdrop-wrapper-enter-active .nextui-backdrop-layer-default":{opacity:"$$backdropOpacity"},".nextui-backdrop-wrapper-leave .nextui-backdrop-layer-default":{opacity:"$$backdropOpacity"},".nextui-backdrop-wrapper-leave-active .nextui-backdrop-layer-default":{opacity:0},".nextui-backdrop-wrapper-enter .nextui-backdrop-layer-blur":{bg:"rgba(0, 0, 0, 0.1)"},".nextui-backdrop-wrapper-enter-active .nextui-backdrop-layer-blur":{bg:"rgba(0, 0, 0, 0.4)"},".nextui-backdrop-wrapper-leave .nextui-backdrop-layer-blur":{bg:"rgba(0, 0, 0, 0.4)"},".nextui-backdrop-wrapper-leave-active .nextui-backdrop-layer-blur":{bg:"rgba(0, 0, 0, 0.1)"},variants:{fullScreen:{true:{display:"inline-flex",overflow:"hidden",[`& ${J}`]:{width:"100vw",maxWidth:"100vw",height:"100vh",margin:0},[`& ${U}`]:{display:"none"}}}},defaultVariants:{fullScreen:!1}}),y="nextui-backdrop",_=E.memo(({children:n,onClick:i,onKeyPress:e,visible:a,maxWidth:s,blur:l,animated:r,opacity:c,preventDefault:u,className:w,css:b,...p})=>{const[,f,g]=G(!1),k=d=>{g.current||i&&i(d)},j=o.useCallback(d=>{d.stopPropagation()},[]),M=()=>{if(!g.current)return;const d=setTimeout(()=>{f(!1),clearTimeout(d)},0)},{bindings:S}=K(d=>{e&&e(d)},[I.Escape,I.Space],{disableGlobalEvent:!0,preventDefault:u}),v=o.useMemo(()=>a?"open":"closed",[a]),m=o.useMemo(()=>t.jsxs(he,{"aria-hidden":!0,className:C(y,`${y}--${v}`,w),css:{$$backdropOpacity:c,...b},"data-state":v,role:"button",tabIndex:-1,onClick:k,onMouseUp:M,...S,...p,children:[t.jsx(U,{animated:r,blur:l,className:C(`${y}-layer`,l?`${y}-layer-blur`:`${y}-layer-default`)}),t.jsx(J,{animated:r,className:`${y}-content`,css:{maxWidth:s},onClick:j,onMouseDown:()=>f(!0),children:n})]}),[n]);return t.jsx(t.Fragment,{children:r?t.jsx(V,{clearTime:150,enterTime:20,leaveTime:20,name:`${y}-wrapper`,visible:a,children:m}):a?m:null})});_.toString=()=>".nextui-backdrop";const xe=D(_,{onClick:()=>{},visible:!1,blur:!1,animated:!0,preventDefault:!0,opacity:.5,className:""}),be=({size:n,fill:i,plain:e,width:a,height:s,className:l,...r})=>t.jsx("svg",e?{className:l,fill:"none",height:n||s,stroke:i,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",width:n||a,...r,children:t.jsx("path",{d:"M18 6L6 18M6 6l12 12"})}:{className:l,height:n||s,viewBox:"0 0 24 24",width:n||a,...r,children:t.jsx("path",{d:"M12 2a10 10 0 1010 10A10.016 10.016 0 0012 2zm3.36 12.3a.754.754 0 010 1.06.748.748 0 01-1.06 0l-2.3-2.3-2.3 2.3a.748.748 0 01-1.06 0 .754.754 0 010-1.06l2.3-2.3-2.3-2.3A.75.75 0 019.7 8.64l2.3 2.3 2.3-2.3a.75.75 0 011.06 1.06l-2.3 2.3z",fill:i})}),ge=o.memo(be),ve=D(ge,{width:24,height:24,plain:!1,className:""}),ye=P({"0%":{transform:"scale(0.95)"},"40%":{transform:"scale(1.02)"},"80%":{transform:"scale(0.98)"},"100%":{transform:"scale(1)"}}),$e=P({"0%":{opacity:0,transform:"scale(0.95)"},"60%":{opacity:.75,transform:"scale(1.02)"},"100%":{opacity:1,transform:"scale(1)"}}),we=P({"0%":{opacity:1,transform:"scale(1)"},"100%":{opacity:0,transform:"scale(0.95)"}}),R=x("div",{outline:"none",overflow:"hidden",width:0,height:0,opacity:0}),q=x("button",{position:"absolute",background:"transparent",border:"none",zIndex:"$1",top:"$space$3",right:"$space$2",margin:0,d:"inline-flex",ai:"center",height:"auto",cursor:"pointer",boxSizing:"border-box",transition:"$default",padding:"calc($space$sm * 0.5)",color:"$accents4",br:"$space$5",svg:{color:"currentColor"},"&:hover":{svg:{opacity:.8}},variants:{disabled:{true:{cursor:"not-allowed"}}}},oe),ke=x("div",{display:"flex",flexShrink:0,ai:"center",ov:"hidden",color:"inherit",padding:"$sm $10",fs:"$xs",variants:{noPadding:{true:{padding:0}},autoMargin:{true:{"> *:first-child":{mt:0},"> *:last-child":{mb:0}}}}}),je=x("div",{display:"flex",flexDirection:"column",flex:"1 1 auto",padding:"$sm $10",oy:"auto",position:"relative",ta:"left",variants:{noPadding:{true:{flex:1,padding:0}},autoMargin:{true:{"> *:first-child":{mt:0},"> *":{mb:"$8"},"> *:last-child":{mb:0}}}}}),Me=x("div",{d:"flex",flexWrap:"wrap",flexShrink:0,overflow:"hidden",color:"inherit",ai:"center",fs:"$xs",padding:"$sm $lg",variants:{noPadding:{true:{padding:0}},autoMargin:{true:{"> *":{m:"$2"}}}}}),Se=x("section",{maxWidth:"100%",verticalAlign:"middle",overflow:"hidden",height:"fit-content(20em)",maxHeight:"inherit",display:"flex",outline:"none",flexDirection:"column",position:"relative",boxSizing:"border-box",color:"$foreground",br:"$lg",boxShadow:"$lg",bg:"$backgroundContrast",animationFillMode:"forwards","@motion":{transition:"none"},"&.nextui-modal-wrapper-enter:not(.nextui-modal-rendered)":{animationName:$e,animationDuration:"200ms",animationTimingFunction:"ease-in",animationDirection:"normal"},"&.nextui-modal-wrapper-leave":{animationName:we,animationDuration:"50ms",animationTimingFunction:"ease-out"},variants:{fullScreen:{true:{size:"100%",maxHeight:"100%"},false:{"&.nextui-modal-rebound":{animationDuration:"250ms",animationName:ye,animationTimingFunction:"ease",animationFillMode:"forwards"}}},scroll:{true:{maxHeight:"calc(100vh - 200px)"}},closeButton:{true:{paddingTop:"$lg",[`& ${q}`]:{svg:{size:"$10"}}}}},compoundVariants:[{scroll:!0,fullScreen:!0,css:{maxHeight:"100%"}}]}),Q=({onClick:n,...i})=>t.jsx(q,{"aria-label":"Close",className:"nextui-modal-close-icon",type:"button",onClick:e=>{e.preventDefault(),e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),n&&n(e)},...i,children:t.jsx(ve,{plain:!0,"aria-hidden":!0,className:"nextui-modal-close-icon-svg",fill:"currentColor",size:18})});Q.toString=()=>".nextui-modal-close-icon";const Ne=E.memo(Q),Ce=Ne,h="nextui-modal",X=({className:n,children:i,visible:e,fullScreen:a,closeButton:s,rebound:l,animated:r,onCloseButtonClick:c,scroll:u,...w})=>{const b=o.useRef(null),p=o.useRef(null),f=o.useRef(null),[g,k]=o.useState(!1);o.useEffect(()=>{const m=setTimeout(()=>{k(!0),clearTimeout(m)},300);return()=>clearTimeout(m)},[]),o.useEffect(()=>{if(!e)return;const m=document.activeElement;ie(b.current,m)||p.current&&p.current.focus()},[e]);const j=m=>{const d=m.keyCode===I.Tab;if(!e||!d)return;const T=document.activeElement;m.shiftKey?T===p.current&&f.current&&f.current.focus():T===f.current&&p.current&&p.current.focus()},M=()=>{c&&c()},S=o.useMemo(()=>e?"open":"closed",[e]),v=o.useMemo(()=>t.jsxs(Se,{ref:b,"aria-modal":e,className:C(h,`${h}--${S}`,{[`${h}-fullscreen`]:a,[`${h}-with-close-button`]:s,[`${h}-rebound`]:l,[`${h}-rendered`]:g},n),closeButton:s,"data-state":S,fullScreen:a,role:"dialog",scroll:u,tabIndex:-1,...w,onKeyDown:j,children:[t.jsx(R,{ref:p,"aria-hidden":"true",className:`${h}-hide-tab`,role:"button",tabIndex:0}),s&&t.jsx(Ce,{onClick:M}),i,t.jsx(R,{ref:f,"aria-hidden":"true",className:`${h}-hide-tab`,role:"button",tabIndex:0})]}),[l,i]);return t.jsx(t.Fragment,{children:r?t.jsx(V,{clearTime:300,enterTime:20,leaveTime:20,name:`${h}-wrapper`,visible:e,children:v}):e?v:null})};X.toString=()=>".nextui-modal-wrapper";const Pe=D(X,{className:"",visible:!1,rebound:!1}),De={},z=E.createContext(De),A=({children:n,onClose:i,onOpen:e,open:a,autoMargin:s,width:l,className:r,preventClose:c,blur:u,animated:w,fullScreen:b,noPadding:p,...f})=>{const g=de("modal"),[,k]=me(null,{scrollLayer:!0}),[j,M,S]=G(!1),[v,m]=o.useState(!1),d=()=>{i&&i(),M(!1),k(!1)};o.useEffect(()=>{a!==void 0&&(a&&e&&e(),!a&&S.current&&i&&i(),M(a),k(a))},[a]);const T=()=>{m(!0);const ne=setTimeout(()=>{m(!1),clearTimeout(ne)},300)},{bindings:te}=K(()=>{c?T():d()},I.Escape,{disableGlobalEvent:!0,preventDefault:!0}),ae=o.useMemo(()=>({close:d,autoMargin:s,noPadding:p}),[]);return g?re.createPortal(t.jsx(z.Provider,{value:ae,children:t.jsx(xe,{animated:w,blur:u,fullScreen:b,maxWidth:l,visible:j,onClick:()=>{c?T():d()},...te,children:t.jsx(Pe,{animated:w,className:r,fullScreen:b,rebound:v,visible:j,onCloseButtonClick:d,...f,children:n})})}),g):null};A.toString=()=>".nextui-modal",A.defaultProps={width:"400px",className:"",preventClose:!1,fullScreen:!1,closeButton:!1,animated:!0,blur:!1,scroll:!1,noPadding:!1};const $=A,H="nextui-modal-header",Y=({children:n,className:i,justify:e,autoMargin:a,css:s,...l})=>{const{autoMargin:r,noPadding:c}=o.useContext(z),u=o.useMemo(()=>r!==void 0?r:a,[a,r]);return t.jsx(ke,{autoMargin:u,className:C(H,{[`${H}-auto-margin`]:u,[`${H}-no-padding`]:c},i),css:{justifyContent:e,...s},noPadding:c,...l,children:n})};Y.toString=()=>".nextui-modal-header";const Ee=E.memo(Y),Te=D(Ee,{className:"",justify:"center",autoMargin:!0}),L="nextui-modal-body",Z=({className:n,children:i,autoMargin:e,...a})=>{const{autoMargin:s,noPadding:l}=o.useContext(z),r=o.useMemo(()=>s!==void 0?s:e,[e,s]);return t.jsx(je,{autoMargin:r,className:C(L,{[`${L}-auto-margin`]:r,[`${L}-no-padding`]:l},n),noPadding:l,...a,children:i})};Z.toString=()=>".nextui-modal-body";const Be=E.memo(Z),Ie=D(Be,{className:"",autoMargin:!0}),W="nextui-modal-footer",ee=({children:n,className:i,justify:e,autoMargin:a,css:s,...l})=>{const{autoMargin:r,noPadding:c}=o.useContext(z),u=o.useMemo(()=>r!==void 0?r:a,[a,r]);return t.jsx(Me,{autoMargin:u,className:C(W,{[`${W}-auto-margin`]:u,[`${W}-no-padding`]:c},i),css:{justifyContent:e,...s},noPadding:c,...l,children:n})};ee.toString=()=>".nextui-modal-footer";const ze=E.memo(ee),Fe=D(ze,{className:"",justify:"flex-end",autoMargin:!0});$.Header=Te,$.Body=Ie,$.Footer=Fe;const We=()=>{const[n,i]=o.useState(!1),[e,a]=o.useState(!1);o.useEffect(()=>{(async()=>{try{const r=await le();i(r),a(r)}catch(r){console.error("Error fetching switch data:",r)}})()},[]);const s=()=>{ce(),a(!1)};return n&&t.jsxs($,{closeButton:!0,blur:!0,"aria-labelledby":"modal-title",open:e,onClose:s,className:"max-h-[440px]",children:[t.jsxs($.Header,{className:"absolute flex flex-col items-start top-0",children:[t.jsx(N,{className:"font-semibold",size:16,children:"What's New In 1.6.13"}),t.jsx(N,{className:"text-[12px]",children:"June 17, 2023"})]}),t.jsxs($.Body,{className:"mt-[50px]",children:[t.jsx(N,{className:"added mb-4",children:"Increased Performance"}),t.jsxs(N,{className:"text-[13px] mb-2",children:["I have changed the way the extension hides videos and other elements, opting to use stylesheets over javascript logic, this should result in;",t.jsxs("ul",{children:[t.jsx("li",{children:"Significantly less system resource usage"}),t.jsx("li",{children:"Videos and other elements being hidden long before the page finishes loading"}),t.jsx("li",{children:"The ability to toggle options on/off and see the changes in real time, without needing to refresh the page"}),t.jsx("li",{children:"A much nicer user experience overall 🙂"})]}),"If you have any issues at all, please feel free to join the Discord support server by ",t.jsx("a",{href:"https://discord.gg/HAFP4P7Dfr",target:"_blank",children:"clicking here"})]}),t.jsx(N,{className:"removed mb-4",children:"Statistics Tab"}),t.jsx(N,{className:"text-[13px] mb-2",children:"I decided to remove the statistics tab as it will no longer work with the changes mentioned above"})]}),t.jsx($.Footer,{children:t.jsx(se,{flat:!0,color:"none",className:"w-full",onPress:s,children:"Close"})})]})};export{We as default};
