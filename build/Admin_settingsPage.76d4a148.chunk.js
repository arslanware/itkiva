(self.webpackChunkiktva_strapi_api=self.webpackChunkiktva_strapi_api||[]).push([[5895],{62053:(x,L,t)=>{"use strict";t.r(L),t.d(L,{SettingsPage:()=>ce,default:()=>et});var e=t(67294),m=t(95489),p=t(25741),n=t(28702),E=t(97132),I=t(15482),P=t(48474),C=t(38683),te=t(15861),Z=t(64687),j=t.n(Z),N=t(23724),O=t(41363),$=t(87751),z=t(45697),i=t.n(z);const A=750,F=100,U=["image/jpeg","image/png","image/svg+xml"];var D=t(18172);const K={localImage:void 0},ge=(a=K,o)=>(0,D.default)(a,s=>{switch(o.type){case"SET_LOCAL_IMAGE":{s.localImage=o.value;break}default:return s}}),V=({onChangeLogo:a,customLogo:o,goTo:s,Component:l,modalTitle:r,next:f,prev:c,currentStep:g})=>{const[{localImage:u},d]=(0,e.useReducer)(ge,K),{formatMessage:y}=(0,E.useIntl)(),h=M=>{d({type:"SET_LOCAL_IMAGE",value:M})},S=()=>{s(null)};return g?e.createElement(n.ModalLayout,{labelledBy:"modal",onClose:S},e.createElement(n.ModalHeader,null,e.createElement(n.Typography,{fontWeight:"bold",as:"h2",id:"modal"},y(r))),e.createElement(l,{setLocalImage:h,goTo:s,next:f,prev:c,onClose:S,asset:u||o,onChangeLogo:a})):null};V.defaultProps={Component:void 0,currentStep:void 0,customLogo:void 0,modalTitle:void 0,next:null,prev:null},V.propTypes={Component:i().elementType,currentStep:i().string,customLogo:i().shape({name:i().string,url:i().string,width:i().number,height:i().number,ext:i().string}),goTo:i().func.isRequired,modalTitle:i().shape({id:i().string,defaultMessage:i().string}),next:i().string,onChangeLogo:i().func.isRequired,prev:i().string};const pe=V,ne={currentStep:void 0},fe=(a=ne,o)=>(0,D.default)(a,s=>{switch(o.type){case"GO_TO":{s.currentStep=o.to;break}default:return s}});var he=t(71893);const Ee={id:"Settings.application.customization.modal.upload.error-format",defaultMessage:"Wrong format uploaded (accepted formats only: jpeg, jpg, png, svg)."},oe={id:"Settings.application.customization.modal.upload.error-size",defaultMessage:"The file uploaded is too large (max dimension: {dimension}x{dimension}, max file size: {size}KB)"},ye=a=>new Promise(o=>{const s=new FileReader;s.onload=()=>{const l=new Image;l.onload=function(){o({width:l.width,height:l.height})},l.src=s.result},s.readAsDataURL(a)}),Le=(a,o)=>({ext:a.name.split(".").pop(),size:a.size/1e3,name:a.name,url:URL.createObjectURL(a),rawFile:a,width:o.width,height:o.height}),ae=async a=>{let o;if(!U.includes(a.type))throw o=new Error("File format"),o.displayMessage=Ee,o;const l=await ye(a);if(!(l.width<=A&&l.height<=A))throw o=new Error("File sizing"),o.displayMessage=oe,o;const f=Le(a,l);if(!(f.size<=F))throw o=new Error("File sizing"),o.displayMessage=oe,o;return f},Se=(0,he.default)(n.FieldInput)`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`,Q=({setLocalImage:a,goTo:o,next:s,onClose:l})=>{const{formatMessage:r}=(0,E.useIntl)(),[f,c]=(0,e.useState)(!1),[g,u]=(0,e.useState)(void 0),d=(0,e.useRef)(null),y=()=>c(!0),h=()=>c(!1),S=T=>{T.preventDefault(),d.current.click()},M=async()=>{h();const T=d.current.files[0];if(T)try{const R=await ae(T);a(R),o(s)}catch(R){if(R.displayMessage)u(r(R.displayMessage,{size:F,dimension:A})),d.current.focus();else throw R}},v=()=>f?"primary500":g?"danger600":"neutral300";return e.createElement(e.Fragment,null,e.createElement("form",null,e.createElement(n.Box,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6},e.createElement(n.Field,{name:"logo-upload",error:g},e.createElement("label",{htmlFor:"logo-upload"},e.createElement(n.Flex,{direction:"column",alignItems:"stretch",gap:2},e.createElement(n.Flex,{paddingTop:9,paddingBottom:7,hasRadius:!0,justifyContent:"center",direction:"column",background:f?"primary100":"neutral100",borderColor:v(),borderStyle:"dashed",borderWidth:"1px",position:"relative",onDragEnter:y,onDragLeave:h},e.createElement(n.Icon,{color:"primary600",width:`${60/16}rem`,height:`${60/16}rem`,as:O.PicturePlus,"aria-hidden":!0}),e.createElement(n.Box,{paddingTop:3,paddingBottom:5},e.createElement(n.Typography,{variant:"delta",as:"span"},r({id:"Settings.application.customization.modal.upload.drag-drop",defaultMessage:"Drag and Drop here or"}))),e.createElement(Se,{accept:U,cursor:"pointer",as:"input",type:"file",name:"files",tabIndex:-1,zIndex:1,onChange:M,ref:d,id:"logo-upload"}),e.createElement(n.Button,{type:"button",onClick:S},r({id:"Settings.application.customization.modal.upload.cta.browse",defaultMessage:"Browse files"})),e.createElement(n.Box,{paddingTop:6},e.createElement(n.Typography,{variant:"pi",textColor:"neutral600"},r({id:"Settings.application.customization.modal.upload.file-validation",defaultMessage:"Max dimension: {dimension}x{dimension}, Max size: {size}KB"},{size:F,dimension:A})))),e.createElement(n.FieldError,null)))))),e.createElement(n.ModalFooter,{startActions:e.createElement(n.Button,{onClick:l,variant:"tertiary"},r({id:"Settings.application.customization.modal.cancel",defaultMessage:"Cancel"}))}))};Q.defaultProps={next:null},Q.propTypes={goTo:i().func.isRequired,next:i().string,onClose:i().func.isRequired,setLocalImage:i().func.isRequired};const Me=Q;var ve=t(19325);const Ce=async a=>{try{const o=await ve.Z.get(a,{responseType:"blob",timeout:8e3});return new File([o.data],o.config.url,{type:o.headers["content-type"]})}catch(o){throw o.displayMessage={id:"Settings.application.customization.modal.upload.error-network",defaultMessage:"Network error"},o}},X=({goTo:a,next:o,onClose:s,setLocalImage:l})=>{const{formatMessage:r}=(0,E.useIntl)(),[f,c]=(0,e.useState)(""),[g,u]=(0,e.useState)(null),d=h=>{c(h.target.value)},y=async()=>{try{const h=await Ce(f),S=await ae(h);l(S),a(o)}catch(h){if(h.displayMessage)u(r(h.displayMessage,{size:F,dimension:A}));else throw h}};return e.createElement("form",{onSubmit:h=>{h.preventDefault(),y()}},e.createElement(n.Box,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6},e.createElement(n.TextInput,{label:r({id:"Settings.application.customization.modal.upload.from-url.input-label",defaultMessage:"URL"}),error:g,onChange:d,value:f,name:"logo-url"})),e.createElement(n.ModalFooter,{startActions:e.createElement(n.Button,{onClick:s,variant:"tertiary"},r({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(n.Button,{type:"submit"},r({id:"Settings.application.customization.modal.upload.next",defaultMessage:"Next"}))}))};X.defaultProps={next:null},X.propTypes={goTo:i().func.isRequired,next:i().string,onClose:i().func.isRequired,setLocalImage:i().func.isRequired};const Te=X,J=({setLocalImage:a,goTo:o,next:s,onClose:l})=>{const{formatMessage:r}=(0,E.useIntl)();return e.createElement(n.TabGroup,{label:r({id:"Settings.application.customization.modal.tab.label",defaultMessage:"How do you want to upload your assets?"}),variant:"simple"},e.createElement(n.Box,{paddingLeft:8,paddingRight:8},e.createElement(n.Tabs,null,e.createElement(n.Tab,null,r({id:"Settings.application.customization.modal.upload.from-computer",defaultMessage:"From computer"})),e.createElement(n.Tab,null,r({id:"Settings.application.customization.modal.upload.from-url",defaultMessage:"From url"}))),e.createElement(n.Divider,null)),e.createElement(n.TabPanels,null,e.createElement(n.TabPanel,null,e.createElement(Me,{onClose:l,setLocalImage:a,goTo:o,next:s})),e.createElement(n.TabPanel,null,e.createElement(Te,{onClose:l,setLocalImage:a,goTo:o,next:s}))))};J.defaultProps={next:null},J.propTypes={goTo:i().func.isRequired,next:i().string,onClose:i().func.isRequired,setLocalImage:i().func.isRequired};const Re=J,se=({asset:a})=>{const{formatMessage:o}=(0,E.useIntl)();return e.createElement(n.Card,null,e.createElement(n.CardHeader,null,e.createElement(n.CardAsset,{size:"S",src:a.url})),e.createElement(n.CardBody,null,e.createElement(n.CardContent,null,e.createElement(n.CardTitle,null,a.name),e.createElement(n.CardSubtitle,null,`${a.ext.toUpperCase()} - ${a.width}\u2715${a.height}`)),e.createElement(n.CardBadge,null,o({id:"Settings.application.customization.modal.pending.card-badge",defaultMessage:"image"}))))};se.propTypes={asset:i().shape({name:i().string,url:i().string,width:i().number,height:i().number,ext:i().string}).isRequired};const xe=se,Y=({onClose:a,asset:o,prev:s,next:l,goTo:r,setLocalImage:f,onChangeLogo:c})=>{const{formatMessage:g}=(0,E.useIntl)(),u=()=>{f(void 0),r(s)},d=()=>{c(o),r(l)};return e.createElement(e.Fragment,null,e.createElement(n.Box,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6},e.createElement(n.Flex,{justifyContent:"space-between",paddingBottom:6},e.createElement(n.Flex,{direction:"column",alignItems:"flex-start"},e.createElement(n.Typography,{variant:"pi",fontWeight:"bold"},g({id:"Settings.application.customization.modal.pending.title",defaultMessage:"Logo ready to upload"})),e.createElement(n.Typography,{variant:"pi",textColor:"neutral500"},g({id:"Settings.application.customization.modal.pending.subtitle",defaultMessage:"Manage the chosen logo before uploading it"}))),e.createElement(n.Button,{onClick:u,variant:"secondary"},g({id:"Settings.application.customization.modal.pending.choose-another",defaultMessage:"Choose another logo"}))),e.createElement(n.Box,{maxWidth:(0,m.pxToRem)(180)},e.createElement(xe,{asset:o}))),e.createElement(n.ModalFooter,{startActions:e.createElement(n.Button,{onClick:a,variant:"tertiary"},g({id:"Settings.application.customization.modal.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(n.Button,{onClick:d},g({id:"Settings.application.customization.modal.pending.upload",defaultMessage:"Upload logo"}))}))};Y.defaultProps={next:null,prev:null},Y.propTypes={goTo:i().func.isRequired,asset:i().shape({name:i().string,url:i().string,width:i().number,height:i().number,ext:i().string}).isRequired,next:i().string,onClose:i().func.isRequired,onChangeLogo:i().func.isRequired,prev:i().string,setLocalImage:i().func.isRequired};const Ie={upload:{Component:Re,modalTitle:{id:"Settings.application.customization.modal.upload",defaultMessage:"Upload logo"},next:"pending",prev:null},pending:{Component:Y,modalTitle:{id:"Settings.application.customization.modal.pending",defaultMessage:"Pending logo"},next:null,prev:"upload"}},w=({canUpdate:a,customLogo:o,defaultLogo:s,hint:l,label:r,onChangeLogo:f,onResetLogo:c})=>{const[{currentStep:g},u]=(0,e.useReducer)(fe,ne),{Component:d,next:y,prev:h,modalTitle:S}=Ie[g]||{},{formatMessage:M}=(0,E.useIntl)(),v=T=>{u({type:"GO_TO",to:T})};return e.createElement(e.Fragment,null,e.createElement(n.CarouselInput,{label:r,selectedSlide:0,hint:l,previousLabel:"",nextLabel:"",onNext:()=>{},onPrevious:()=>{},secondaryLabel:o?.name||"logo.png",actions:e.createElement(n.CarouselActions,null,e.createElement(n.IconButton,{disabled:!a,onClick:()=>v(o?"pending":"upload"),label:M({id:"Settings.application.customization.carousel.change-action",defaultMessage:"Change logo"}),icon:e.createElement(O.Plus,null)}),o&&e.createElement(n.IconButton,{disabled:!a,onClick:c,label:M({id:"Settings.application.customization.carousel.reset-action",defaultMessage:"Reset logo"}),icon:e.createElement(O.Refresh,null)}))},e.createElement(n.CarouselSlide,{label:M({id:"Settings.application.customization.carousel-slide.label",defaultMessage:"Logo slide"})},e.createElement(n.Box,{maxHeight:"40%",maxWidth:"40%",as:"img",src:o?.url||s,alt:M({id:"Settings.application.customization.carousel.title",defaultMessage:"Logo"})}))),e.createElement(pe,{Component:d,currentStep:g,onChangeLogo:f,customLogo:o,goTo:v,next:y,prev:h,modalTitle:S}))};w.defaultProps={canUpdate:!1,customLogo:null,hint:null},w.propTypes={canUpdate:i().bool,customLogo:i().shape({url:i().string,name:i().string}),label:i().string.isRequired,hint:i().string,defaultLogo:i().string.isRequired,onChangeLogo:i().func.isRequired,onResetLogo:i().func.isRequired};const ie=w,k={menuLogo:{display:null,submit:{rawFile:null,isReset:!1}},authLogo:{display:null,submit:{rawFile:null,isReset:!1}}},Ae=(a=k,o)=>(0,D.default)(a,s=>{switch(o.type){case"SET_CUSTOM_MENU_LOGO":{s.menuLogo.display=o.value,s.menuLogo.submit.rawFile=o.value.rawFile;break}case"SET_CUSTOM_AUTH_LOGO":{s.authLogo.display=o.value,s.authLogo.submit.rawFile=o.value.rawFile;break}case"RESET_CUSTOM_MENU_LOGO":{s.menuLogo.display=null,s.menuLogo.submit={rawFile:null,isReset:!0};break}case"RESET_CUSTOM_AUTH_LOGO":{s.authLogo.display=null,s.authLogo.submit={rawFile:null,isReset:!0};break}default:return s}});var Fe=t(82492),Oe=t.n(Fe);const Pe=(a,o)=>Oe()(a,{menuLogo:{display:o.menuLogo},authLogo:{display:o.authLogo}}),q=(0,e.forwardRef)(({canUpdate:a,projectSettingsStored:o},s)=>{const{formatMessage:l}=(0,E.useIntl)(),{trackUsage:r}=(0,m.useTracking)(),{logos:{menu:f,auth:c}}=(0,P.um)(),[{menuLogo:g,authLogo:u},d]=(0,e.useReducer)(Ae,k,()=>Pe(k,o)),y=v=>{d({type:"SET_CUSTOM_MENU_LOGO",value:v})},h=()=>{r("didClickResetLogo",{logo:"menu"}),d({type:"RESET_CUSTOM_MENU_LOGO"})},S=v=>{d({type:"SET_CUSTOM_AUTH_LOGO",value:v})},M=()=>{r("didClickResetLogo",{logo:"auth"}),d({type:"RESET_CUSTOM_AUTH_LOGO"})};return(0,e.useImperativeHandle)(s,()=>({getValues:()=>({menuLogo:g.submit,authLogo:u.submit})})),e.createElement(n.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7},e.createElement(n.Typography,{variant:"delta",as:"h3"},l({id:"Settings.application.customization",defaultMessage:"Customization"})),e.createElement(n.Typography,{variant:"pi",textColor:"neutral600"},l({id:"Settings.application.customization.size-details",defaultMessage:"Max dimension: {dimension}\xD7{dimension}, Max file size: {size}KB"},{dimension:A,size:F})),e.createElement(n.Grid,{paddingTop:4,gap:4},e.createElement(n.GridItem,{col:6,s:12},e.createElement(ie,{canUpdate:a,customLogo:g.display,defaultLogo:f.default,hint:l({id:"Settings.application.customization.menu-logo.carousel-hint",defaultMessage:"Replace the logo in the main navigation"}),label:l({id:"Settings.application.customization.carousel.menu-logo.title",defaultMessage:"Menu logo"}),onChangeLogo:y,onResetLogo:h})),e.createElement(n.GridItem,{col:6,s:12},e.createElement(ie,{canUpdate:a,customLogo:u.display,defaultLogo:c.default,hint:l({id:"Settings.application.customization.auth-logo.carousel-hint",defaultMessage:"Replace the logo in the authentication pages"}),label:l({id:"Settings.application.customization.carousel.auth-logo.title",defaultMessage:"Auth logo"}),onChangeLogo:S,onResetLogo:M}))))});q.defaultProps={canUpdate:!1,projectSettingsStored:null},q.propTypes={canUpdate:i().bool,projectSettingsStored:i().shape({menuLogo:i().shape({url:i().string,name:i().string})})};const ze=q;var Ue=t(68718),De=t.n(Ue);const le=a=>De()(a,(o,s,l)=>{s&&s.url?o[l]={...s,url:(0,m.prefixFileUrlWithBackendUrl)(s.url)}:o[l]=s},{}),Be=async()=>{const{get:a}=(0,m.getFetchClient)(),{data:o}=await a("/admin/project-settings");return le(o)},be=async a=>{const{post:o}=(0,m.getFetchClient)(),{data:s}=await o("/admin/project-settings",a,{headers:{"Content-Type":"multipart/form-data"}});return le(s)},Ge=a=>{const o=new FormData;return Object.entries(a).forEach(([s,l])=>{l&&l.rawFile instanceof File&&o.append(s,l.rawFile),l&&l.isReset&&o.append(s,null)}),o};var Ne=function(){return window&&window.strapi&&window.strapi.isEE?t(78413).Z:t(69767).Z}(),We=function(){var o=(0,e.useRef)(),s=(0,m.useNotification)(),l=(0,m.useTracking)(),r=l.trackUsage,f=(0,E.useIntl)(),c=f.formatMessage,g=(0,N.useQueryClient)();(0,m.useFocusWhenNavigate)();var u=(0,m.useAppInfos)(),d=u.latestStrapiReleaseTag,y=u.shouldUpdateStrapi,h=u.strapiVersion,S=(0,P.um)(),M=S.updateProjectSettings,v=(0,m.useRBAC)($.Z.settings["project-settings"]),T=v.allowedActions,R=T.canRead,_=T.canUpdate,tt=R&&_,nt=(0,N.useQuery)("project-settings",Be,{enabled:R}),ue=nt.data,ot=(0,N.useMutation)(function(ee){return be(ee)},{onSuccess:function(H){return(0,te.Z)(j().mark(function W(){var B,b;return j().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return B=H.menuLogo,b=H.authLogo,G.next=3,g.invalidateQueries("project-settings",{refetchActive:!0});case 3:M({menuLogo:B?.url,authLogo:b?.url});case 4:case"end":return G.stop()}},W)}))()}}),at=function(H){if(H.preventDefault(),!!_){var W=o.current.getValues(),B=Ge(W);ot.mutate(B,{onSuccess:function(){var me=W.menuLogo,G=W.authLogo;me.rawFile&&r("didChangeLogo",{logo:"menu"}),G.rawFile&&r("didChangeLogo",{logo:"auth"}),s({type:"success",message:c({id:"app",defaultMessage:"Saved"})})},onError:function(){s({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}})}};return e.createElement(n.Layout,null,e.createElement(m.SettingsPageTitle,{name:"Application"}),e.createElement(n.Main,null,e.createElement("form",{onSubmit:at},e.createElement(n.HeaderLayout,{title:c({id:"Settings.application.title",defaultMessage:"Overview"}),subtitle:c({id:"Settings.application.description",defaultMessage:"Administration panel\u2019s global information"}),primaryAction:tt&&e.createElement(n.Button,{type:"submit",startIcon:e.createElement(O.Check,null)},c({id:"global.save",defaultMessage:"Save"}))}),e.createElement(n.ContentLayout,null,e.createElement(n.Flex,{direction:"column",alignItems:"stretch",gap:6},e.createElement(n.Flex,{direction:"column",alignItems:"stretch",gap:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7},e.createElement(n.Typography,{variant:"delta",as:"h3"},c({id:"global.details",defaultMessage:"Details"})),e.createElement(n.Grid,{gap:5,as:"dl"},e.createElement(n.GridItem,{col:6,s:12},e.createElement(n.Typography,{variant:"sigma",textColor:"neutral600",as:"dt"},c({id:"Settings.application.strapiVersion",defaultMessage:"strapi version"})),e.createElement(n.Flex,{gap:3,direction:"column",alignItems:"start",as:"dd"},e.createElement(n.Typography,null,"v",h),y&&e.createElement(n.Link,{href:"https://github.com/strapi/strapi/releases/tag/".concat(d),isExternal:!0,endIcon:e.createElement(O.ExternalLink,null)},c({id:"Settings.application.link-upgrade",defaultMessage:"Upgrade your admin panel"})))),e.createElement(n.GridItem,{col:6,s:12},e.createElement(n.Typography,{variant:"sigma",textColor:"neutral600",as:"dt"},c({id:"Settings.application.edition-title",defaultMessage:"current plan"})),e.createElement(n.Flex,{gap:3,direction:"column",alignItems:"start",as:"dd"},e.createElement(n.Typography,null,c({id:"Settings.application.ee-or-ce",defaultMessage:"{communityEdition, select, true {Community Edition} other {Enterprise Edition}}"},{communityEdition:u.communityEdition})),e.createElement(n.Link,{href:"https://strapi.io/pricing-self-hosted",isExternal:!0,endIcon:e.createElement(O.ExternalLink,null)},c({id:"Settings.application.link-pricing",defaultMessage:"See all pricing plans"})))),e.createElement(n.GridItem,{col:6,s:12},e.createElement(n.Typography,{variant:"sigma",textColor:"neutral600",as:"dt"},c({id:"Settings.application.node-version",defaultMessage:"node version"})),e.createElement(n.Typography,{as:"dd"},u.nodeVersion)),e.createElement(Ne,null))),R&&ue&&e.createElement(ze,{canUpdate:_,ref:o,projectSettingsStored:ue}))))))};const je=We;var Ke=t(94654),He=t.n(Ke);const Ze=a=>He()(a,s=>s.links).map(s=>(0,C.ot)(s.Component,s.to,s.exact||!1)),$e=a=>a.filter(o=>!o.links.every(s=>s.isDisplayed===!1));var re=t(93433);const Ve=[{async Component(){return await Promise.all([t.e(3852),t.e(3455)]).then(t.bind(t,98906))},to:"/settings/roles",exact:!0},{async Component(){return await t.e(2544).then(t.bind(t,23341))},to:"/settings/roles/duplicate/:id",exact:!0},{async Component(){return await t.e(2544).then(t.bind(t,23341))},to:"/settings/roles/new",exact:!0},{async Component(){return await t.e(2544).then(t.bind(t,92100))},to:"/settings/roles/:id",exact:!0},{async Component(){return await t.e(5199).then(t.bind(t,37735))},to:"/settings/users",exact:!0},{async Component(){return await t.e(4263).then(t.bind(t,22282))},to:"/settings/users/:id",exact:!0},{async Component(){return await t.e(5162).then(t.bind(t,3672))},to:"/settings/webhooks/create",exact:!0},{async Component(){return await t.e(5162).then(t.bind(t,9311))},to:"/settings/webhooks/:id",exact:!0},{async Component(){return await t.e(4121).then(t.bind(t,6784))},to:"/settings/webhooks",exact:!0},{async Component(){return await t.e(8056).then(t.bind(t,87427))},to:"/settings/api-tokens",exact:!0},{async Component(){return await Promise.all([t.e(7314),t.e(4583),t.e(4299)]).then(t.bind(t,9683))},to:"/settings/api-tokens/create",exact:!0},{async Component(){return await Promise.all([t.e(7314),t.e(4583),t.e(92)]).then(t.bind(t,28465))},to:"/settings/api-tokens/:id",exact:!0},{async Component(){return await Promise.all([t.e(7314),t.e(3219),t.e(4816)]).then(t.bind(t,39987))},to:"/settings/transfer-tokens/create",exact:!0},{async Component(){return await t.e(9600).then(t.bind(t,70798))},to:"/settings/transfer-tokens",exact:!0},{async Component(){return await Promise.all([t.e(7314),t.e(3219),t.e(2492)]).then(t.bind(t,9452))},to:"/settings/transfer-tokens/:id",exact:!0}];var Qe=function(){return window&&window.strapi&&window.strapi.isEE?t(5420).Z:t(35301).Z}();const Xe=[].concat((0,re.Z)(Qe),(0,re.Z)(Ve));var Je=t(53192),Ye=t(42876),we=t(34446),ke=t(29489),qe=t(52305);const de=({menu:a})=>{const{formatMessage:o}=(0,E.useIntl)(),{trackUsage:s}=(0,m.useTracking)(),{pathname:l}=(0,p.useLocation)(),f=$e(a).map(u=>({...u,title:u.intlLabel,links:u.links.map(d=>({...d,title:d.intlLabel,name:d.id}))})),c=o({id:"global.settings",defaultMessage:"Settings"}),g=(u=null)=>{s("willNavigate",{from:l,to:u})};return e.createElement(Je.m,{ariaLabel:c},e.createElement(Ye.p,{label:c}),e.createElement(we.Z,null,f.map(u=>e.createElement(ke.D,{key:u.id,label:o(u.intlLabel)},u.links.map(d=>e.createElement(qe.E,{as:p.NavLink,withBullet:d.hasNotification,to:d.to,onClick:()=>g(d.to),key:d.id},o(d.intlLabel)))))))};de.propTypes={menu:i().array.isRequired};const _e=de;function ce(){const{settingId:a}=(0,p.useParams)(),{settings:o}=(0,m.useStrapiApp)(),{formatMessage:s}=(0,E.useIntl)(),{isLoading:l,menu:r}=(0,P.Te)(),f=(0,e.useMemo)(()=>(0,C.WW)(Xe.map(({to:u,Component:d,exact:y})=>(0,C.ot)(d,u,y))),[]),c=Ze(o);if(l)return e.createElement(m.LoadingIndicatorPage,null);if(!a)return e.createElement(p.Redirect,{to:"/settings/application-infos"});const g=s({id:"global.settings",defaultMessage:"Settings"});return e.createElement(n.Layout,{sideNav:e.createElement(_e,{menu:r})},e.createElement(I.Helmet,{title:g}),e.createElement(p.Switch,null,e.createElement(p.Route,{path:"/settings/application-infos",component:je,exact:!0}),f,c))}const et=(0,e.memo)(ce)},69767:(x,L,t)=>{"use strict";t.d(L,{Z:()=>m});const m=()=>null},35301:(x,L,t)=>{"use strict";t.d(L,{Z:()=>m});const m=[]},78413:(x,L,t)=>{"use strict";t.d(L,{Z:()=>$});var e=t(67294),m=t(97132),p=t(28702),n=t.n(p),E=t(36182),I=t(41363),P=t.n(I),C=t(95489),te=t.n(C),Z=t(90594);const j="https://cloud.strapi.io/profile/billing",N="https://strapi.io/billing/request-seats",$=()=>{const{formatMessage:z}=(0,m.useIntl)(),{license:i}=(0,Z.q5)(),{licenseLimitStatus:A,enforcementUserCount:F,permittedSeats:U,isHostedOnStrapiCloud:D}=i?.data??{};return U?e.createElement(p.GridItem,{col:6,s:12},e.createElement(p.Typography,{variant:"sigma",textColor:"neutral600"},z({id:"Settings.application.admin-seats",defaultMessage:"Admin seats"})),e.createElement(p.Flex,{gap:2},e.createElement(p.Flex,null,e.createElement(p.Typography,{as:"p"},z({id:"Settings.application.ee.admin-seats.count",defaultMessage:"<text>{enforcementUserCount}</text>/{permittedSeats}"},{permittedSeats:U,enforcementUserCount:F,text:K=>e.createElement(p.Typography,{fontWeight:"semiBold",textColor:F>U?"danger500":null},K)}))),A==="OVER_LIMIT"&&e.createElement(p.Tooltip,{description:z({id:"Settings.application.ee.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"})},e.createElement(p.Icon,{width:`${(0,C.pxToRem)(14)}rem`,height:`${(0,C.pxToRem)(14)}rem`,color:"danger500",as:I.ExclamationMarkCircle}))),e.createElement(E.r,{href:D?j:N,isExternal:!0,endIcon:e.createElement(I.ExternalLink,null)},z({id:"Settings.application.ee.admin-seats.add-seats",defaultMessage:"{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}"},{isHostedOnStrapiCloud:D}))):null}},5420:(x,L,t)=>{"use strict";t.d(L,{Z:()=>m});const e=[];strapi.features.isEnabled(strapi.features.SSO)&&e.push({async Component(){return await t.e(302).then(t.bind(t,40316))},to:"/settings/single-sign-on",exact:!0}),strapi.features.isEnabled(strapi.features.AUDIT_LOGS)&&e.push({async Component(){return await t.e(2812).then(t.bind(t,35915))},to:"/settings/audit-logs",exact:!0});const m=e},94654:(x,L,t)=>{var e=t(21078),m=t(35161);function p(n,E){return e(m(n,E),1)}x.exports=p},35161:(x,L,t)=>{var e=t(29932),m=t(67206),p=t(69199),n=t(1469);function E(I,P){var C=n(I)?e:p;return C(I,m(P,3))}x.exports=E}}]);
