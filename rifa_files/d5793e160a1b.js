__d(function(g,r,i,a,m,e,d){"use strict";function t({onFirstPhotoUpload:t}){var o;return a(d[0]).createElement(r(d[1]).ActivatorCard,{bodyText:a(d[2]).FIRST_PHOTO_BODY,buttonText:a(d[2]).FIRST_PHOTO_CTA,headerText:a(d[2]).FIRST_PHOTO_HEADER,icon:r(d[1]).ICONS.CAMERA_OUTLINE_24_GREY9,iconAlt:a(d[2]).FIRST_PHOTO_BODY,onClick:null!==(o=t)&&void 0!==o?o:i(d[3])})}function o(){const t=r(d[4]).useHistory();return a(d[0]).createElement(r(d[1]).ActivatorCard,{bodyText:a(d[2]).PHONE_BODY,buttonText:a(d[2]).PHONE_CTA,headerText:a(d[2]).PHONE_HEADER,icon:r(d[1]).ICONS.CALL_OUTLINE_24_GREY9,iconAlt:a(d[2]).PHONE_BODY,onClick:()=>t.push(r(d[5]).PHONE_CONFIRM_PATH)})}function n(){const t=r(d[4]).useHistory();return a(d[0]).createElement(r(d[1]).ActivatorCard,{bodyText:a(d[2]).EDIT_PROFILE_BODY,buttonText:a(d[2]).EDIT_PROFILE_CTA,headerText:a(d[2]).EDIT_PROFILE_HEADER,icon:r(d[1]).ICONS.USER_OUTLINE_24_GREY9,iconAlt:a(d[2]).EDIT_PROFILE_BODY,onClick:()=>t.push(r(d[5]).PROFILE_EDIT_PATH)})}function c({profilePicEditRef:t}){return a(d[0]).createElement(r(d[1]).ActivatorCard,{bodyText:a(d[2]).PROFILE_PHOTO_BODY,buttonText:a(d[2]).PROFILE_PHOTO_CTA,headerText:a(d[2]).PROFILE_PHOTO_HEADER,icon:r(d[1]).ICONS.CAMERA_OUTLINE_24_GREY9,iconAlt:a(d[2]).PROFILE_PHOTO_BODY,onClick:o=>{var n;null===t||void 0===t||null===(n=t.current)||void 0===n||n.handleEditProfilePic(o)}})}Object.defineProperty(e,'__esModule',{value:!0});const l=a(d[0]).forwardRef(function(t,o){return a(d[0]).createElement("div",{className:t.className},a(d[0]).createElement(r(d[1]).Deck,{cardType:"ACTIVATOR",hasBlur:!r(d[6]).isMobile(),headerText:a(d[2]).GETTING_STARTED},t.children),a(d[0]).createElement(i(d[7]),{analyticsContext:t.analyticsContext,hasExistingPic:!1,ref:o}))});var s=r(d[4]).withRouter(r(d[13]).connect(function(t){const o=r(d[11]).getViewer(t);return{canFBConnect:r(d[12]).shouldDisplayFacebookConnect(t),hasName:''!==(null===o||void 0===o?void 0:o.fullName),hasPhoneNumber:null===o||void 0===o?void 0:o.hasPhoneNumber,hasProfilePic:null===o||void 0===o?void 0:o.hasProfilePic,isNew:null===o||void 0===o?void 0:o.isNew,profilePicUploadIsInFlight:t.users.profilePicUploadIsInFlight}})(r(d[14]).withConnectedLifecycleLogging('NewUserActivatorsUnit')(class extends a(d[0]).Component{constructor(t){super(t),this.$NewUserActivatorsUnit1=a(d[0]).createRef(),this.$NewUserActivatorsUnit2={hideConnectToFB:!1}}render(){const{canFBConnect:s,className:E,fallbackComponent:T,hasName:u,hasPhoneNumber:O,hasProfilePic:P,isNew:_}=this.props;if(null==_||!1===_){var h;return null!==(h=T)&&void 0!==h?h:null}const f=[r(d[6]).isMobile()&&m===r(d[8]).MODULES.profile&&a(d[0]).createElement(t,{key:r(d[8]).KEYS.addFirstPhoto,onFirstPhotoUpload:this.props.onFirstPhotoUpload}),s&&!this.$NewUserActivatorsUnit2.hideConnectToFB&&a(d[0]).createElement(i(d[9]),{analyticsContext:i(d[10]).selfProfilePage,key:r(d[8]).KEYS.connectToFacebook,nuxType:"activator",onError:()=>{this.$NewUserActivatorsUnit2.hideConnectToFB=!0,this.forceUpdate()},returnURL:'/'}),!0!==O&&a(d[0]).createElement(o,{key:r(d[8]).KEYS.addPhone}),!0!==u&&a(d[0]).createElement(n,{key:r(d[8]).KEYS.editProfile}),!0!==P&&a(d[0]).createElement(c,{key:r(d[8]).KEYS.editProfilePhoto,profilePicEditRef:this.$NewUserActivatorsUnit1})].filter(t=>t);if(0===f.length){var A;return null!==(A=this.props.fallbackComponent)&&void 0!==A?A:null}return a(d[0]).createElement(l,{className:E,ref:this.$NewUserActivatorsUnit1},f)}})));e.default=s,e.ACTIVATOR_CARD_MODULES=r(d[8]).MODULES},13828096,[19791921,19791919,10354707,19791883,6,19726578,19726343,19792248,14155793,13828097,19726575,19726715,10354699,5,19791933]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({analyticsContext:t,nuxType:n="onboarding",onError:o=(()=>{}),returnURL:u}){return a(d[0]).createElement(a(d[0]).Fragment,null,'activator'===n?a(d[0]).createElement(i(d[1]),{onError:o,returnURL:u}):a(d[0]).createElement(i(d[2]),{returnURL:u}))}},13828097,[3,13828098,13828108]);
__d(function(g,r,i,a,m,e,d){"use strict";function n(n){return n?'ig_fb_nux_find_friends_msite':'ig_fb_nux_find_friends_web'}function t({children:n,onError:t}){var o;const u=r(d[0]).isMobile(),c=null===(o=r(d[12]).useSelector(r(d[13]).getViewer))||void 0===o?void 0:o.fbid;return a(d[9]).createElement(i(d[14]),{errorRenderer:n=>null,onError:(n,o)=>{t(n,i(d[11])(c),u)}},n)}function o(n,u){function c(o){return a(d[9]).createElement(t,{onError:u(o)},a(d[9]).createElement(n,o))}var l;return Object.defineProperty(c,'name',{value:`${o.name}(${null!==(l=n.name)&&void 0!==l?l:'Component'})`,writable:!1}),c}function u(n){function t(t){const o=r(d[7]).nuxActivatorCardAddAccountButtonUI({buttonText:a(d[8]).FACEBOOK_CTA,isButtonLoading:!0,onButtonClick:()=>{}});return a(d[9]).createElement(r(d[5]).Suspense,{fallback:o},a(d[9]).createElement(n,t))}var o;return Object.defineProperty(t,'name',{value:`${u.name}(${null!==(o=n.name)&&void 0!==o?o:'Component'})`,writable:!1}),t}Object.defineProperty(e,'__esModule',{value:!0});var c=o(u(function({onError:t,returnURL:o}){var u;const c=r(d[0]).isMobile(),l=c?'IG_NUX_MSITE':'IG_NUX_WEB',_=n(c),f=i(d[1])._("ig_fx_comet_master")?r(d[2]).appendQueryParams(r(d[3]).FX_ACCOUNTS_CENTER_ON_COMET_PROFILES_PATH,{flow:l,entry_point:_,next:o}):r(d[2]).appendQueryParams(r(d[3]).FX_ACCOUNTS_CENTER_PROFILES_PATH,{flow:l,entry_point:_}),s={flow:l,device_id:r(d[4]).getDeviceId(),ig_web_extra_data:f,interface:'IG_WEB'},[E,b]=r(d[5]).useState(null);return r(d[5]).useEffect(()=>{r(d[6]).queryWWWGraphQL('6195273177181542',s).then(({data:n,errors:o})=>{null!=o?t():(null!=n.fxcal_web_init.web_auth&&null==n.fxcal_web_init.error||t(),b(n))}).catch(n=>{t()})}),null==E?r(d[7]).nuxActivatorCardAddAccountButtonUI({buttonText:a(d[8]).FACEBOOK_CTA,isButtonLoading:!0,onButtonClick:()=>{}}):a(d[9]).createElement(i(d[10]),{buttonUI:r(d[7]).nuxActivatorCardAddAccountButtonUI,entryPoint:_,flow:l,returnURL:o,screenResources:i(d[11])(null===(u=E.fx_identity_management)||void 0===u?void 0:u.screen_resources),webAuthConfig:i(d[11])(E.fxcal_web_init)})}),t=>(o,u,c)=>{r(d[15]).logFXLinkingFlowEvent({event:'generic_error',initiatorAccountId:u,linkingFlowEntryPoint:n(c),debugData:o.stack}),t.onError()});e.default=c},13828098,[19726343,19726393,19726548,19726578,19726341,19791921,19726521,13828099,10354707,3,13828100,19791900,5,19726715,19792210,19529779]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.nuxActivatorCardAddAccountButtonUI=function({buttonText:t,isButtonLoading:n,onButtonClick:o}){return a(d[0]).createElement(r(d[1]).ActivatorCard,{bodyText:a(d[2]).FACEBOOK_BODY,buttonText:a(d[2]).FACEBOOK_CTA,headerText:a(d[2]).FACEBOOK_HEADER,icon:r(d[1]).ICONS.FACEBOOK_CIRCLE_OUTLINE_24_GREY9,iconAlt:a(d[2]).FACEBOOK_BODY,loading:n,onClick:o})},e.nuxOnboardingUnitAddAccountButtonUI=function({buttonText:t,isButtonLoading:n,onButtonClick:o}){const c=a(d[0]).createElement(r(d[1]).BorderedIcon,{alt:r(d[3])(3347),icon:r(d[1]).ICONS.FACEBOOK_CIRCLE_OUTLINE_24_GREY9,size:r(d[1]).CORE_CONSTANTS.AVATAR_SIZES.large});return a(d[0]).createElement(i(d[4]),{bodyText:r(d[3])(3922),buttonText:r(d[3])(2956),headerText:r(d[3])(2925),icon:c,isProcessing:n,onButtonClick:o})}},13828099,[3,19791919,10354707,19726396,11141239]);
__d(function(g,r,i,a,m,e,d){"use strict";function t(t){return'ig_fb_nux_find_friends_web'===t||'ig_fb_nux_find_friends_msite'===t?t:'ig_web_settings'}Object.defineProperty(e,'__esModule',{value:!0});var n=function({buttonUI:n,entryPoint:o="ig_web_settings",flow:l="IG_WEB_SETTINGS",returnURL:u=null,screenResources:_,webAuthConfig:c}){var s,f,v;const w=r(d[0]).useLocation(),b=r(d[1]).getQueryParams(w.search),[E,F]=a(d[2]).useState(!1),[I,k]=a(d[2]).useState(null),[L,y]=a(d[2]).useState(null),N=null===(s=r(d[3]).useSelector(r(d[4]).getViewer))||void 0===s?void 0:s.fbid,P=t(null!==(f=b.entry_point)&&void 0!==f?f:o),R=null===(v=c.web_auth)||void 0===v?void 0:v.url;return a(d[2]).createElement(a(d[2]).Fragment,null,n({isButtonLoading:E,onButtonClick:()=>{try{if(F(!0),r(d[5]).logFXLinkingFlowEvent({event:'linking_flow_initiated',initiatorAccountId:i(d[6])(N),linkingFlowEntryPoint:P}),null!=c.error)return void y(c.error);r(d[7]).redirect(i(d[6])(R)),r(d[5]).logFXLinkingFlowEvent({event:'web_auth_attempted',initiatorAccountId:i(d[6])(N),linkingFlowEntryPoint:P})}catch(t){r(d[5]).logFXLinkingFlowEvent({event:'generic_error',initiatorAccountId:i(d[6])(N),linkingFlowEntryPoint:P,debugData:t.stack}),k(r(d[8]).GENERIC_LINKING_FLOW_ERROR_DIALOG_CONTENT)}},buttonText:i(d[6])(_.add_button_text)}),E&&(I||L)&&a(d[2]).createElement(i(d[9]),{content:I,error:L,onClose:()=>{k(null),y(null),F(!1)},url:R}))};e.default=n},13828100,[6,19726548,3,5,19726715,19529779,19791900,19726753,13828101,13828102]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t=r(d[0])(4066),_={body:r(d[0])(691),button_label:r(d[1]).OK_TEXT,title:t},l={title:_.title,body:_.body,primary_button:{label:_.button_label,action:'EXIT_FLOW'}};e.GENERIC_LINKING_FLOW_ERROR_CONTENT=_,e.GENERIC_LINKING_FLOW_ERROR_DIALOG_CONTENT=l},13828101,[19726396,19726728]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({content:o,error:l,onClose:n,url:t}){function u(o){switch(o){case'WEB_AUTH':return()=>r(d[1]).redirect(i(d[2])(t));case'EXIT_FLOW':default:return n}}var v,c,b,_,s,y,f;null!=o||i(d[0])(0);const p=null!==(v=l)&&void 0!==v?v:o;return a(d[3]).createElement(i(d[4]),{body:i(d[2])(null===p||void 0===p?void 0:p.body),negativeButton:null!=(null===p||void 0===p?void 0:p.negative_button)?{label:i(d[2])(null===p||void 0===p?void 0:null===(c=p.negative_button)||void 0===c?void 0:c.label),onClick:u(i(d[2])(null===p||void 0===p?void 0:null===(b=p.negative_button)||void 0===b?void 0:b.action))}:void 0,primaryButton:{label:i(d[2])(null===p||void 0===p?void 0:null===(_=p.primary_button)||void 0===_?void 0:_.label),onClick:u(i(d[2])(null===p||void 0===p?void 0:null===(s=p.primary_button)||void 0===s?void 0:s.action))},secondaryButton:null!=(null===p||void 0===p?void 0:p.secondary_button)?{label:i(d[2])(null===p||void 0===p?void 0:null===(y=p.secondary_button)||void 0===y?void 0:y.label),onClick:u(i(d[2])(null===p||void 0===p?void 0:null===(f=p.secondary_button)||void 0===f?void 0:f.action))}:void 0,title:i(d[2])(null===p||void 0===p?void 0:p.title)})}},13828102,[9699437,19726753,19791900,3,13828103]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({body:l,disablePopInAnimation:o,isVisible:t,negativeButton:n,primaryButton:c,secondaryButton:u,title:b}){var s,v,y;return null!=n||null!=c||null!=u||i(d[0])(0),a(d[1]).createElement(i(d[2]),{body:l,disablePopInAnimation:o,isVisible:t,title:b},c&&a(d[1]).createElement(r(d[3]).DialogItem,{color:null!==(s=c.color)&&void 0!==s?s:'ig-primary-button',onClick:c.onClick},c.label),u&&a(d[1]).createElement(r(d[3]).DialogItem,{color:null!==(v=u.color)&&void 0!==v?v:'ig-secondary-button',onClick:u.onClick},u.label),n&&a(d[1]).createElement(r(d[3]).DialogItem,{color:null!==(y=n.color)&&void 0!==y?y:'ig-error-or-destructive',onClick:n.onClick},n.label))}},13828103,[9699437,3,13828104,19791919]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]),e.default=function({body:l,children:n,disablePopInAnimation:t,isVisible:s,media:c,onModalClose:o,size:u="default",title:E}){const b=!!c,f=null!=E||null!=l;return a(d[1]).createElement(i(d[2]),{disablePopInAnimation:t,isVisible:s,onClose:o,size:u},a(d[1]).createElement("div",{className:"rmWEa"},null!=c&&a(d[1]).createElement("div",{className:"BO6j9"},c),f&&a(d[1]).createElement("div",{className:"_12Ygk"},null!=E&&(b?a(d[1]).createElement(i(d[3]).Headline2,null,E):a(d[1]).createElement(i(d[3]).Title,null,E)),null!=l&&a(d[1]).createElement(i(d[3]).Body,{color:"ig-secondary-text"},l)),null!=n&&a(d[1]).createElement("div",{className:"bn3nC"},n)))}},13828104,[13828105,3,13828106,19791945]);
__d(function() {},13828105,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]),e.default=function({aboveContent:t,backgroundColor:n="DEPRECATED_white",children:l,closeButtonPosition:o="hidden",dangerouslySetClassName:c,disablePopInAnimation:s,enableModalPageView:u=!1,fixedHeight:E,fixedWidth:f=!0,isVisible:C=!0,onClose:w,size:_="default"}){function b(){if(!h.current){h.current=!0;const t=v.current;null!=t&&t.returnToEntry(),w&&w()}}const h=r(d[1]).useRef(!1),v=r(d[1]).useRef(null),y=i(d[3])(`u0HPA ${'DEPRECATED_transparent'===n?"sKZuL":""} ${!0===f&&'default'===_?"LIsOY":""} ${!0===f&&'extraLarge'===_?"_q0ro":""} ${!0===f&&'large'===_?"T0opj":""} ${!0===E?"_7AXOi":""} ${!0===s?"w7jYW":""}`,null===c||void 0===c?void 0:c.__className);return a(d[1]).createElement(i(d[4]),{isVisible:C,justifyContent:null!=t?'center':'space-around',onClose:b},a(d[1]).createElement(i(d[5]),{event:"keyup",handler:t=>{t.which===i(d[2]).ESC&&b()},target:window}),'background'===o&&a(d[1]).createElement("div",{className:"Ww9_-"},a(d[1]).createElement(r(d[6]).SVGIconButton,{onClick:b},a(d[1]).createElement(i(d[7]),{alt:r(d[8]).CLOSE_TEXT,color:"web-always-white",size:18}))),a(d[1]).createElement(r(d[9]).BodyScrollLock,{isEnabled:C},n=>a(d[1]).createElement(a(d[1]).Fragment,null,t,a(d[1]).createElement("div",{className:y,ref:n,role:"dialog"},'body'===o&&a(d[1]).createElement("div",{className:"lYkxw"},a(d[1]).createElement(r(d[6]).SVGIconButton,{onClick:b},a(d[1]).createElement(i(d[7]),{alt:r(d[8]).CLOSE_TEXT,color:"web-always-white",size:18}))),a(d[1]).createElement("div",{className:`FGErh ${u?"rsCNs":""}`},a(d[1]).Children.map(l,t=>(null===t||void 0===t?void 0:t.type)===i(d[10])?a(d[1]).cloneElement(t,{ref:v}):t))))))}},13828106,[13828107,3,19791998,19791925,19791996,19726837,19791919,19791971,19726728,19792001,19792002]);
__d(function() {},13828107,[]);
__d(function(g,r,i,a,m,e,d){"use strict";function n(n){return n?'ig_fb_nux_find_friends_msite':'ig_fb_nux_find_friends_web'}function t(n){function o(t){const o=r(d[7]).nuxOnboardingUnitAddAccountButtonUI({buttonText:a(d[8]).FACEBOOK_CTA,isButtonLoading:!0,onButtonClick:()=>{}});return a(d[9]).createElement(r(d[5]).Suspense,{fallback:o},a(d[9]).createElement(n,t))}var u;return Object.defineProperty(o,'name',{value:`${t.name}(${null!==(u=n.name)&&void 0!==u?u:'Component'})`,writable:!1}),o}Object.defineProperty(e,'__esModule',{value:!0});var o=r(d[12]).withFXNUXErrorBoundaryDialog(t(function({returnURL:t}){var o;const u=r(d[0]).isMobile(),_=u?'IG_NUX_MSITE':'IG_NUX_WEB',c=n(u),l=i(d[1])._("ig_fx_comet_master")?r(d[2]).appendQueryParams(r(d[3]).FX_ACCOUNTS_CENTER_ON_COMET_PROFILES_PATH,{flow:_,entry_point:c,next:t}):r(d[2]).appendQueryParams(r(d[3]).FX_ACCOUNTS_CENTER_PROFILES_PATH,{flow:_,entry_point:c}),s={flow:u?'IG_NUX_MSITE':'IG_NUX_WEB',device_id:r(d[4]).getDeviceId(),ig_web_extra_data:l,interface:'IG_WEB'},[f,E]=r(d[5]).useState(null),[C,b]=r(d[5]).useState(null);if(r(d[5]).useEffect(()=>{r(d[6]).queryWWWGraphQL('6195273177181542',s).then(({data:n,errors:t})=>{null!=t?b(t):E(n)}).catch(n=>{b(n)})}),null!=C)throw new Error('GraphQL fetch was not successful');return null==f?r(d[7]).nuxOnboardingUnitAddAccountButtonUI({buttonText:a(d[8]).FACEBOOK_CTA,isButtonLoading:!0,onButtonClick:()=>{}}):a(d[9]).createElement(i(d[10]),{buttonUI:r(d[7]).nuxOnboardingUnitAddAccountButtonUI,entryPoint:c,flow:_,returnURL:t,screenResources:i(d[11])(null===(o=f.fx_identity_management)||void 0===o?void 0:o.screen_resources),webAuthConfig:i(d[11])(f.fxcal_web_init)})}),{errorContent:r(d[13]).GENERIC_LINKING_FLOW_ERROR_CONTENT,onClick:({returnURL:n})=>{r(d[14]).redirect(n)},onError:t=>(t,o,u)=>{r(d[15]).logFXLinkingFlowEvent({event:'generic_error',initiatorAccountId:o,linkingFlowEntryPoint:n(u),debugData:t.stack})}});e.default=o},13828108,[19726343,19726393,19726548,19726578,19726341,19791921,19726521,13828099,10354707,3,13828100,19791900,13828109,13828101,19726753,19529779]);
__d(function(g,r,i,a,m,e,d){"use strict";function n({children:n,errorContent:o,onClick:t,onError:l=((n,o,t)=>{})}){var c;const u=i(d[0])(null===(c=r(d[1]).useSelector(r(d[2]).getViewer))||void 0===c?void 0:c.fbid),b=r(d[3]).isMobile();return a(d[4]).createElement(i(d[5]),{errorRenderer:n=>a(d[4]).createElement(i(d[6]),{body:o.body,primaryButton:{label:o.button_label,onClick:t},title:o.title}),onError:(n,o)=>{l(n,u,b)}},n)}function o(t,l){function c(o){return a(d[4]).createElement(n,{errorContent:l.errorContent,onClick:()=>l.onClick(o),onError:(n,t,c)=>{l.onError&&l.onError(o)(n,t,c)}},a(d[4]).createElement(t,o))}var u;return Object.defineProperty(c,'name',{value:`${o.name}(${null!==(u=t.name)&&void 0!==u?u:'Component'})`,writable:!1}),c}Object.defineProperty(e,'__esModule',{value:!0}),e.withFXNUXErrorBoundaryDialog=o},13828109,[19791900,5,19726715,19726343,19791921,19792210,13828103]);