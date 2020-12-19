define("prod_assets_web_modules/dig-components/avatar",["exports","../common/_commonjsHelpers","react","../classnames","../tslib","./typography"],(function(e,t,a,n,s,r){"use strict";var i=function(e){var t=e.backgroundColor,i=e.className,o=e.children,l=e.src,c=e.srcSet,d=e.alt,u=e.size,m=void 0===u?"standard":u,p=e.isInactive,v=void 0!==p&&p,g=e.hasNoOutline,f=s.__rest(e,["backgroundColor","className","children","src","srcSet","alt","size","isInactive","hasNoOutline"]),h=a.useState(!1),_=h[0],N=h[1],b=(l||c)&&!_,y=o&&"number"==typeof o,C=n.default(i,"dig-Avatar","dig-Avatar--"+m,{"dig-Avatar--hasNoOutline":g,"dig-Avatar--withImage":b}),E=n.default({"dig-Avatar-image":!0,"dig-Avatar-image--isInactive":v}),x=n.default({"dig-Avatar-text":!0,"dig-Avatar-text--isInactive":v,"dig-Avatar-text--isNumber":y}),I=y?{}:{background:""+t};return a.createElement("div",s.__assign({className:C,"aria-label":d},f),b?a.createElement("img",{alt:d,className:E,src:l,onError:function(){return N(!0)},srcSet:c}):a.createElement(r.Text,{size:m,className:x,inverse:!y,isBold:!0,style:I},o))};i.displayName="Avatar";var o=["#813BF6","#0077A7","#00866E","#127024","#0D2481","#005744","#B73B03","#9B0033","#AD1778","#61082B","#895F0A"];e.Avatar=i,e.avatarColorForUserIdentifier=function(e){for(var t=5381*e.length,a=0;a<e.length;a++)t=e.charCodeAt(a)+((t<<6)+(t<<16)-t);return t=Math.abs(t),o[t%o.length]},Object.defineProperty(e,"__esModule",{value:!0})})),define("prod_assets_web_modules/dig-components/badges",["exports","../common/_commonjsHelpers","react","../classnames","../tslib"],(function(e,t,a,n,s){"use strict";e.AccessoryBadge=function(e){var t=e.className,r=e.children,i=s.__rest(e,["className","children"]),o=n.default("dig-AccessoryBadge",t);return a.createElement("span",s.__assign({className:o},i),r)},e.NotificationBadge=function(e){var t=e.className,r=e.children,i=s.__rest(e,["className","children"]),o=n.default("dig-NotificationBadge",{"dig-NotificationBadge--dot":!r,"dig-NotificationBadge--label":!!r},t);return a.createElement("span",s.__assign({className:o},i),r)},Object.defineProperty(e,"__esModule",{value:!0})})),define("prod_assets_web_modules/dig-components/banner",["exports","../common/_commonjsHelpers","react","react-dom","../classnames","../focus-visible","../common/CSSTransition","../tslib","./typography","./icons","./icons/src","./progress_indicators","./buttons"],(function(e,t,a,n,s,r,i,o,l,c,d,u,m){"use strict";var p=function(e){var t=e.className,n=void 0===t?"":t,s=e.children;return a.createElement(l.Text,{className:n},s)};p.displayName="Banner.Message";var v=function(e){var t=e.className,n=void 0===t?"":t,r=e.children,i=o.__rest(e,["className","children"]);return a.createElement("span",o.__assign({className:s.default("dig-Banner-actions",n)},i),r)};v.displayName="Banner.Actions";var g=function(e){var t=e.variant,n=e.type,s=e.withLeftIcon,r=e.withLeftPictogram,i="dig-Banner-icon";return"basic"===t?!s||!0===s&&"neutral"===n?null:!0===s?a.createElement(c.UIIcon,{className:i,src:"attention"===n?d.InfoLine:d.WarningLine,size:"standard"}):(s.type!==c.UIIcon&&console.error("dig-components: The Banner component only accepts `<UIIcon />` in the withLeftIcon prop."),a.createElement("span",{className:i},s)):r?(r.type!==c.PictogramIcon&&console.error("dig-components: The Banner component only accepts `<PictogramIcon />` in the withLeftPictogram prop."),a.createElement("div",{className:i},r)):null};g.displayName="BannerIcon";var f=function(e){var t=e.children,n=e.className,r=e.type,i=void 0===r?"neutral":r,l=e.onRequestClose,u=e.withCloseButton,p=e.withLeftIcon,v=void 0===p||p,f=e.withLeftPictogram,h=e.variant,_=void 0===h?"basic":h,N=o.__rest(e,["children","className","type","onRequestClose","withCloseButton","withLeftIcon","withLeftPictogram","variant"]);return a.createElement("div",o.__assign({role:"alert",className:s.default("dig-Banner",n,"dig-Banner--"+i,"dig-Banner--"+_,{"dig-Banner--withCloseButton":u,"dig-Banner--withPictogram":f})},N),a.createElement(g,{variant:_,type:i,withLeftIcon:v,withLeftPictogram:f}),a.createElement("span",null,t),!!u&&a.createElement(m.IconButton,{variant:"transparent",className:"dig-Banner-close","aria-label":u,"data-testid":"digBannerCloseButton",onClick:l},a.createElement(c.UIIcon,{src:d.CloseLine})))};f.displayName="Banner",f.Actions=v,f.Message=p,e.Banner=f,Object.defineProperty(e,"__esModule",{value:!0})})),define("prod_assets_web_modules/dig-components/controls",["exports","../common/_commonjsHelpers","react","../classnames","../focus-visible","../tslib"],(function(e,t,a,n,s,r){"use strict";var i=a.forwardRef((function(e,t){var s=e.checked,i=e.className,c=e.isIndeterminate,d=void 0!==c&&c,u=e.inverse,m=void 0!==u&&u,p=e.style,v=void 0===p?{}:p,g=r.__rest(e,["checked","className","isIndeterminate","inverse","style"]),f=a.useState(!1),h=f[0],_=f[1],N=a.useRef(s);a.useEffect((function(){h||s===N.current||_(!0)}),[s,N,h]);var b=n.default("dig-Checkbox-input",{"dig-Checkbox--inverse":m,"dig-Checkbox--initiallyChecked":!h&&s}),y=n.default("dig-Checkbox",i),C=a.useRef();a.useEffect((function(){C.current&&(C.current.indeterminate=d)}),[d,t]);var E=void 0!==s?(function(e){return e.isIndeterminate?"mixed":e.checked?"true":"false"})({checked:s,isIndeterminate:d}):s;return a.createElement("span",{className:y,style:v},a.createElement("input",r.__assign({"aria-checked":E,checked:s,className:b,ref:function(e){C.current=e,t&&("function"==typeof t?t(e):t.current=e)},type:"checkbox"},g)),a.createElement("span",{className:"dig-Checkbox-styles"}),a.createElement(l,null),a.createElement(o,null))}));i.displayName="Checkbox";var o=function(){return a.createElement("svg",{className:"dig-Checkbox-checked-icon","aria-hidden":"true",width:"20px",height:"20px",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false"},a.createElement("path",{d:"M1 4L4.5 7.5L11 1",stroke:"currentColor",strokeWidth:"2",transform:"translate(4, 6)"}))};o.displayName="CheckedCheckboxIcon";var l=function(){return a.createElement("svg",{"aria-hidden":"true",width:"20px",height:"20px",viewBox:"0 0 20 20",version:"1.1",className:"dig-Checkbox-indeterminate-icon",focusable:"false"},a.createElement("rect",{x:"5px",y:"9px",width:"10px",height:"2px"}))};l.displayName="IndeterminateCheckboxIcon";var c=a.forwardRef((function(e,t){var s=e.className,i=(e.children,e.inverse),o=r.__rest(e,["className","children","inverse"]),l=n.default("dig-Radio",s,{"dig-Radio--inverse":i});return a.createElement("input",r.__assign({type:"radio",className:l,ref:t},o))}));c.displayName="RadioButton";var d={options:new Map},u=function(e,t){var a;switch(t.type){case"UPDATE_OPTION":var n=new Map(e.options);n.set(t.payload.key,t.payload.value),a={options:n};break;case"REMOVE_OPTION":var s=new Map(e.options);s.delete(t.payload.key),a={options:s}}return r.__assign(r.__assign({},e),a)},m=function(e,t){var a=-1;return void 0!==t&&e.has(t)&&(a=e.get(t)),a},p={setSelectedOption:function(){return!1},optionItems:{items:new Map,updateOption:function(){return!1},addOption:function(){return!1},removeOption:function(){return!1}},selectedOption:void 0},v=a.createContext(p),g=a.createContext(0),f=a.forwardRef((function(e,t){var s=e.children,i=e.disabled,o=e.value,l=e.role,c=void 0===l?"tab":l,d=e.onClick,u=r.__rest(e,["children","disabled","value","role","onClick"]),m=a.useContext(v),p=m.setSelectedOption,f=m.optionItems,h=a.useContext(g);(function(e,t){a.useEffect((function(){return t.addOption(e),function(){t.removeOption(e.value)}}),[]),a.useEffect((function(){t.updateOption(e)}),[e.value])})({value:o,index:h},f);var _=n.default("dig-SegmentedControl-option",{"dig-SegmentedControl-option--disabled":i});return a.createElement("button",r.__assign({role:c,className:_,disabled:i,ref:t,onClick:function(e){d&&d(e),p({value:o,index:h})}},u),s)}));f.displayName="SegmentedControl.Option";var h=function(e){var t=e.className,s=e.children,i=e.selectedValue,o=e.onSelection,l=e.onValueChange,c=e.inverse,p=void 0!==c&&c,f=r.__rest(e,["className","children","selectedValue","onSelection","onValueChange","inverse"]),h=a.useState(!1),_=h[0],N=h[1],b=(function(){var e=a.useReducer(u,d),t=e[0],n=e[1],s=function(e){var t=e.index,a=e.value;a&&n({type:"UPDATE_OPTION",payload:{key:a,value:t}})},r=s;return{items:t.options,updateOption:s,addOption:r,removeOption:function(e){e&&n({type:"REMOVE_OPTION",payload:{key:e}})}}})(),y=a.useState((function(){return m(b.items,i)})),C=y[0],E=y[1],x=n.default("dig-SegmentedControl",t,{"dig-SegmentedControl--inverse":p});a.useEffect((function(){_||N(!0)}),[]),a.useEffect((function(){E(m(b.items,i))}),[b.items,i]),a.useEffect((function(){_&&l&&l(i)}),[i]);var I={selectedOption:{value:i},setSelectedOption:function(e){E(e.index),l&&l(e.value),o&&o(e.value)},optionItems:b},w=-1!==C?32*C+2*C:0;return a.createElement(v.Provider,{value:I},a.createElement("div",r.__assign({role:"tablist",className:x},f),-1!==C&&a.createElement("span",{className:"dig-SegmentedControl-selector",style:{transform:"translateX("+w+"px)"}}),a.Children.map(s,(function(e,t){if(a.isValidElement(e))return a.createElement(g.Provider,{value:t},e)}))))};h.displayName="SegmentedControl",h.Option=f;var _=a.forwardRef((function(e,t){var s=e.isToggled,i=e.disabled,o=e.className,l=e.wrapperProps,c=e.inverse,d=r.__rest(e,["isToggled","disabled","className","wrapperProps","inverse"]),u=n.default(o,"dig-Toggle",{"dig-Toggle--isToggled":s,"dig-Toggle--disabled":i,"dig-Toggle--inverse":c});return a.createElement("label",r.__assign({className:u},l),a.createElement("input",r.__assign({role:"switch",type:"checkbox",className:"dig-Toggle-input",checked:s,disabled:i,ref:t},d)),a.createElement("span",{className:"dig-Toggle-track"}))}));_.displayName="Toggle",e.Checkbox=i,e.RadioButton=c,e.SegmentedControl=h,e.Toggle=_,Object.defineProperty(e,"__esModule",{value:!0})})),define("prod_assets_web_modules/dig-components/modal",["exports","../common/_commonjsHelpers","react","react-dom","../react-modal","../classnames","../focus-visible","../common/CSSTransition","../tslib","./layer","./icons","./icons/src","./progress_indicators","./buttons"],(function(e,t,a,n,s,r,i,o,l,c,d,u,m,p){"use strict";var v=function(e){var t=e.children,n=e.className,s=void 0===n?"":n,r=l.__rest(e,["children","className"]);return a.createElement("div",l.__assign({className:"dig-Modal-content "+s},r),t)},g=function(e){var t=e.hasBottomSpacing,n=void 0===t?"title-small":t,s=e.children,i=e.className,o=void 0===i?"":i,c=l.__rest(e,["hasBottomSpacing","children","className"]),d=r.default("dig-Modal-header",{"dig-Modal-header--margin-title-standard":"title-standard"===n},o);return a.createElement("div",l.__assign({className:d},c),s)};g.displayName="Header";var f=a.forwardRef((function(e,t){var n=e.children,s=e.className,i=void 0===s?"":s,o=e.hasVerticalSpacing,c=void 0!==o&&o,d=l.__rest(e,["children","className","hasVerticalSpacing"]),u=r.default("dig-Modal-body",i,{"dig-Modal-body--hasVerticalSpacing":c});return a.createElement("div",l.__assign({ref:t,className:u},d),n)}));f.displayName="Body";var h=function(e){var t=e.hasTopBorder,n=void 0!==t&&t,s=e.children,i=e.className,o=void 0===i?"":i,c=l.__rest(e,["hasTopBorder","children","className"]),d=r.default("dig-Modal-footer",{"dig-Modal-footer--hasTopBorder":n},o);return a.createElement("div",l.__assign({className:d},c),s)};h.displayName="Footer";var _=function(e){switch(e){case"small":return 450;case"standard":return 600;case"large":return 700}return e},N=function(e){var t=e.children,n=e.className,i=e.isCentered,o=void 0!==i&&i,m=e.withCloseButton,g=e.width,f=void 0===g?"standard":g,h=e.open,N=void 0!==h&&h,b=e.shouldCloseOnOverlayClick,y=void 0===b||b,C=e.onRequestClose,E=e.onAfterOpen,x=e.onAfterClose,I=e.overlayClassName,w=e.modalBaseIndex,T=void 0===w?c.MODAL_BASE_INDEX:w,S=l.__rest(e,["children","className","isCentered","withCloseButton","width","open","shouldCloseOnOverlayClick","onRequestClose","onAfterOpen","onAfterClose","overlayClassName","modalBaseIndex"]),A=r.default("dig-Modal",{"dig-Modal--isCentered":o},n),B=C;return a.createElement(s.default,l.__assign({},S,{isOpen:N,shouldCloseOnOverlayClick:y,onRequestClose:C,onAfterOpen:E,onAfterClose:x,className:A,bodyOpenClassName:"dig-Modal-body--open",htmlOpenClassName:"dig-Modal-html--open",overlayClassName:r.default("dig-Modal-overlay",I),closeTimeoutMS:200,style:{overlay:{zIndex:T},content:{width:_(f)}}}),a.createElement(c.LayerContext.Provider,{value:T},a.createElement(v,null,t),!!m&&a.createElement(p.IconButton,{variant:"transparent",className:"dig-Modal-close-btn","aria-label":m,"data-testid":"digModalCloseButton",onClick:B},a.createElement(d.UIIcon,{src:u.CloseLine}))))};N.Content=v,N.Header=g,N.Body=f,N.Footer=h,N.displayName="Modal",N.setAppElement=s.default.setAppElement,e.Modal=N,Object.defineProperty(e,"__esModule",{value:!0})})),define("prod_assets_web_modules/dig-components/snackbar",["exports","../common/_commonjsHelpers","react","react-dom","../classnames","../focus-visible","../common/CSSTransition","../common/TransitionGroup","../tslib","./_motion"],(function(e,t,a,n,s,r,i,o,l,c){"use strict";var d=function(e){var t=e.className,n=void 0===t?"":t,s=e.children,r=l.__rest(e,["className","children"]),i="dig-Snackbar-actions "+n;return a.createElement("div",l.__assign({className:i},r),s)};d.displayName="Snackbar.Actions";var u=function(e){var t=e.className,n=void 0===t?"":t,s=e.children,r=l.__rest(e,["className","children"]),i="dig-Snackbar-message "+n;return a.createElement("span",l.__assign({className:i},r),s)};u.displayName="Snackbar.Message";var m={transitions:[{property:"up",value:10},{property:"opacity",value:1}],easing:"out",duration:"faster",origin:[.5,1]},p={transitions:[{property:"opacity",value:0}],easing:"out",duration:"faster",origin:[.5,1]},v=function(e){var t=e.className,n=e.children,r=e.onRequestClose,i=e.open,d=e.timeout,u=void 0===d?5e3:d,v=l.__rest(e,["className","children","onRequestClose","open","timeout"]),g=s.default("dig-Snackbar",t);return a.useEffect((function(){if(u>0){var e=null;if(i){if(r)return e=window.setTimeout(r,u),function(){e&&clearTimeout(e)}}else e&&clearTimeout(e)}}),[r,i,u]),a.createElement(o.TransitionGroup,{component:null},i&&a.createElement(c.Motion,{transitionIn:m,transitionOut:p},(function(e){var t=e.style;return a.createElement("div",l.__assign({className:g,style:t,role:"alert"},v),n)})))};v.displayName="Snackbar",v.Actions=d,v.Message=u,e.Snackbar=v,Object.defineProperty(e,"__esModule",{value:!0})})),define("prod_assets_web_modules/dig-components/text_fields",["exports","../common/_commonjsHelpers","react","react-dom","../@popperjs/core","../classnames","../focus-visible","../common/CSSTransition","../tslib","./layer","./_motion","./typography","./icons","./icons/src","./overlay","./menu"],(function(e,t,a,n,s,r,i,o,l,c,d,u,m,p,v,g){"use strict";var f=function(e){var t=e.alignRight,n=void 0!==t&&t,s=e.isInvalid,i=e.children,o=r.default("dig-FormHelperText",{"dig-FormHelperText--alignRight":n,"dig-FormHelperText--isInvalid":s});return a.createElement("div",{className:o},i)};f.displayName="FormHelperText";var h=function(e){var t=e.children,n=e.className,s=e.htmlFor,i=void 0===s?"":s,o=e.subtext,l=e.tagName,c=void 0===l?"label":l,d=r.default("dig-FormLabel",n);return a.createElement(c,{className:d,htmlFor:i},t,o&&a.createElement("span",{className:"dig-FormLabel-subtext"},o))};h.displayName="FormLabel";var _=function(e){var t=e.split,n=void 0!==t&&t,s=e.variant,i=void 0===s?"input":s,o=e.children,l=r.default("dig-FormRow","dig-FormRow--"+i,{"dig-FormRow--split":n});return a.createElement("div",{className:l},o)};_.displayName="FormRow";var N=a.createContext({isNative:!1,selectedItem:{value:"",label:"",activeID:""},setActiveValue:function(){return!1},isControlled:!1,selectId:""}),b=function(e){e.withAccessory;var t=l.__rest(e,["withAccessory"]);return a.createElement("option",l.__assign({},t))},y=function(e){var t=e.value,n=e.withAccessory,s=l.__rest(e,["value","withAccessory"]),r=a.useContext(N),i=r.selectedItem,o=r.selectId,c=i.value===t;return a.createElement(g.Menu.SelectItem,l.__assign({role:"option",id:o+"-"+t,"aria-selected":c,selected:c,withRightAccessory:n,value:t},s))},C=function(e){var t=l.__rest(e,[]),n=a.useContext(N).isNative?b:y;return a.createElement(n,l.__assign({},t))};C.displayName="Select.Option";var E=function(e){var t=e.withLabel,n=e.children,s=a.useContext(N).isNative,r={};return t&&s&&(r={label:t}),s?a.createElement("optgroup",l.__assign({},r),n):a.createElement(g.Menu.Segment,{withLabel:t},n)},x=function(e){var t=e.children,n=e.placeholder,s=e.className,i=(e.size,e.disabled),o=(e.inverse,e.isInvalid,e.onChange),c=(e.isNative,l.__rest(e,["children","placeholder","className","size","disabled","inverse","isInvalid","onChange","isNative"])),d=a.useContext(N),u=d.selectedItem,v=d.setActiveValue,g=d.isControlled,f=a.useState(!u.value),h=f[0],_=f[1];return a.useEffect((function(){_(!u.value)}),[u.value]),a.createElement("span",{className:r.default(s,"dig-Select--native",{"dig-Select--isActive":!h})},a.createElement("select",l.__assign({className:r.default("dig-Select-trigger",{"dig-Select-trigger--hasPlaceholder":!!n&&h}),disabled:i,onChange:function(e){var t=e.currentTarget.value;g||v(t),o&&o(t,e)},value:u.value},c),n&&a.createElement("option",{value:"",disabled:c.required},n),t),a.createElement(m.UIIcon,{src:p.ChevronDownLine,className:"dig-Select-icon",size:"small"}))},I=function(e){var t=e.onChange,n=e.placeholder,s=e.children,i=e.className,o=(e.defaultValue,e.disabled),c=e.value,d=e.id,u=l.__rest(e,["onChange","placeholder","children","className","defaultValue","disabled","value","id"]),v=a.useContext(N),f=v.setActiveValue,h=v.selectedItem,_=v.isControlled;return a.createElement(g.Menu.Wrapper,{className:i,onSelection:function(e,a){_||f(e),t&&t(e,a)},matchContainingWidth:!0,shouldFocusDisabledRows:!1},(function(e){var t=e.getContentProps,i=e.getTriggerProps,v=o?{}:i();return a.createElement("div",null,a.createElement("input",{type:"hidden",value:h.value}),a.createElement("button",l.__assign({className:r.default("dig-Select-trigger",{"dig-Select-trigger--hasPlaceholder":!!n&&!c&&!h.value}),role:"combobox","aria-activedescendant":""+h.activeID,"aria-autocomplete":"none","aria-haspopup":"listbox","aria-labeledby":d,"aria-controls":d+"-listbox","aria-label":u["aria-label"],id:d,disabled:o},v),a.createElement("span",{className:"dig-Select-trigger__content"},h.label||n),a.createElement(m.UIIcon,{src:p.ChevronDownLine,className:"dig-Select-icon",size:"small"})),a.createElement(g.Menu.Content,l.__assign({},t()),a.createElement(g.Menu.Segment,{_withoutPadding:!0,role:"listbox",id:d+"-listbox",className:"dig-Select-menu"},s)))}))},w=function(e){var t=e.children,n=e.size,s=void 0===n?"standard":n,i=e.value,o=e.defaultValue,c=e.isNative,d=void 0!==c&&c,u=l.__rest(e,["children","size","value","defaultValue","isNative"]),m=r.default("dig-Select","dig-Select--"+s,{"dig-Select--isInvalid":u.isInvalid&&!u.disabled,"dig-Select--inverse":u.inverse,"dig-Select--disabled":u.disabled}),p=d?x:I,v=a.useState({value:"",label:"",activeID:""}),g=v[0],f=v[1],h=a.useMemo((function(){return a.Children.toArray(t).reduce((function(e,t){if(!a.isValidElement(t))return null;if(t.type===a.Fragment)throw new Error(["dig-components: The Select component doesn't accept a Fragment as a child.","Consider providing an array instead."].join("\n"));var n=t.type===E?t.props.children:t;return l.__spreadArrays(e,a.Children.toArray(n))}),[])}),[t]),_=a.useCallback((function(e){h.forEach((function(t){if(e===t.props.value){var n=t.props.children;t.props.withAccessory&&!d&&(n=a.createElement("span",{className:"dig-Select-trigger--withAccessory"},a.createElement("span",{className:"dig-Select-trigger-icon"},a.cloneElement(t.props.withAccessory,{size:s})),a.createElement("span",{className:"dig-Select-trigger-label"},n))),f({value:t.props.value,label:n,activeID:u.id+"-"+t.props.value})}}))}),[u.id,d,h,s]);a.useEffect((function(){var e=i||o;e&&_(e)}),[i,o,_]);var b={isNative:d,selectedItem:g,setActiveValue:_,isControlled:!!i,selectId:u.id};return a.createElement(N.Provider,{value:b},a.createElement(p,l.__assign({},u,{className:m}),t))};w.displayName="Select",w.Option=C,w.OptGroup=E;var T=a.forwardRef((function(e,t){var n=e.size,s=void 0===n?"standard":n,i=e.className,o=e.isTransparent,c=void 0!==o&&o,d=e.isInvalid,u=void 0!==d&&d,m=e.inverse,p=void 0!==m&&m,v=e.resizable,g=e.rows,f=void 0===g?3:g,h=l.__rest(e,["size","className","isTransparent","isInvalid","inverse","resizable","rows"]),_=r.default("dig-TextArea","dig-TextArea--"+s,{"dig-TextArea--transparent":c,"dig-TextArea--isInvalid":!!u&&!h.disabled,"dig-TextArea--resizable":"both"===v,"dig-TextArea--resizableHorizontal":"horizontal"===v,"dig-TextArea--resizableVertical":"vertical"===v,"dig-TextArea--inverse":p},i);return a.createElement("textarea",l.__assign({className:_,rows:f,ref:t},h))}));T.displayName="TextArea";var S=function(e){var t=e.size,n=void 0===t?"standard":t,s=e.className,i=e.disabled,o=e.isInvalid,c=e.inverse,d=e.onBlur,u=e.onFocus,m=e.isTransparent,p=l.__rest(e,["size","className","disabled","isInvalid","inverse","onBlur","onFocus","isTransparent"]),v=a.useState(!1),g=v[0],f=v[1],h=r.default("dig-TextInputContainer","dig-TextInputContainer--"+n,s,{"dig-TextInputContainer--isFocused":g,"dig-TextInputContainer--isInvalid":!!o&&!i,"dig-TextInputContainer--isTransparent":m,"dig-TextInputContainer--inverse":c,"dig-TextInputContainer--disabled":i});return a.createElement("span",l.__assign({className:h,onBlur:function(e){f(!1),d&&d(e)},onFocus:function(e){f(!0),u&&u(e)}},p))};S.displayName="TextInput.Container";var A=function(e){var t=e.children;return a.createElement("span",{className:"dig-TextInputAccessory"},t)};A.displayName="TextInput.Accessory";var B=function(e){return a.createElement("div",l.__assign({className:"dig-TextInput-chips-container"},e))};B.displayName="TextInput.ChipsContainer";var O=a.forwardRef((function(e,t){var n=e.className,s=l.__rest(e,["className"]),i=r.default("dig-TextInput-input",n);return a.createElement("input",l.__assign({type:"text",className:i,ref:t},s))}));O.displayName="TextInput.Input";var k=a.forwardRef((function(e,t){var n=e.size,s=void 0===n?"standard":n,r=e.disabled,i=e.isInvalid,o=e.inverse,c=e.withLeftAccessory,d=e.withRightAccessory,u=e.isTransparent,m=e.wrapperProps,p=void 0===m?{}:m,v=l.__rest(e,["size","disabled","isInvalid","inverse","withLeftAccessory","withRightAccessory","isTransparent","wrapperProps"]);return a.createElement(k.Container,l.__assign({disabled:r,isInvalid:i,inverse:o,isTransparent:u,size:s},p),c&&a.createElement(k.Accessory,null,c),a.createElement(k.Input,l.__assign({disabled:r,ref:t},v)),d&&a.createElement(k.Accessory,null,d))}));k.displayName="TextInput",k.Container=S,k.ChipsContainer=B,k.Accessory=A,k.Input=O,e.FormControlGroup=function(e){var t=e.className,n=e.children,s=l.__rest(e,["className","children"]),i=r.default("dig-FormControlGroup",t);return a.createElement("fieldset",l.__assign({className:i},s),n)},e.FormHelperText=f,e.FormLabel=h,e.FormRow=_,e.Select=w,e.TextArea=T,e.TextInput=k,e.TextInputAccessory=A,e.TextInputChipsContainer=B,e.TextInputContainer=S,e.TextInputInput=O,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=pkg-dig-a.min.js-vflxeNuk4.map