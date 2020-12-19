define("spectrum/icon_inline",["require","exports","tslib","react","spectrum/icon_templates/stateless","spectrum/svg_icon_bundle","spectrum/icon_inline/bundle"],(function(e,t,o,n,i,r,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=o.__importStar(n),t.ICONS=l.ICONS,t.IconInline=function(e){var t=e.name,o=n.createElement(r.SvgIconBundle,{focusable:"false",icon:l.ICONS[t]});return n.createElement(i.Component,Object.assign({icon:o},e))},t.IconInline.displayName="IconInline"})),define("spectrum/icon_inline/bundle",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ICONS=JSON.parse('\n    {"edit":{"attrs":{"width":"24","height":"24","viewBox":"0 0 24 24"},"dangerouslySetInnerIconHtml":"<g fill=\\"none\\" fill-rule=\\"evenodd\\"><g fill-rule=\\"nonzero\\" fill=\\"#637282\\"><path d=\\"M9.499 12.498L14.502 7.5l1.999 2-5 5.003zM8.454 13.137l2.43 2.407-1.388.958-2.496.5.498-2.5z\\"></path></g></g>"},"info":{"attrs":{"width":"24","height":"24","viewBox":"0 0 24 24"},"dangerouslySetInnerIconHtml":"<g fill=\\"none\\" fill-rule=\\"evenodd\\"><path d=\\"M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-1.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z\\" fill=\\"#B4BBC2\\"></path><path stroke=\\"#B4BBC2\\" d=\\"M11.5 12h1v3.5h-1zM11.5 8.5h1v1h-1z\\"></path></g>"}}\n  ')})),define("spectrum/portal",["require","exports","tslib","spectrum/portal/portal"],(function(e,t,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.__exportStar(n,t)})),define("spectrum/portal/portal",["require","exports","tslib","react","react-dom"],(function(e,t,o,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=o.__importStar(n),i=o.__importStar(i);var r=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.componentWillUnmount=function(){this.portalRootElement&&this.unMountPortal()},t.prototype.componentDidMount=function(){!this.portalRootElement&&this.props.isShowInitially&&this.mountPortal()},t.prototype.mountPortal=function(e){var t=this;if(!this.portalRootElement){this.portalRootElement=document.createElement("div"),(this.props.parentElement||document.body).appendChild(this.portalRootElement);var o=n.createElement("div",{"aria-hidden":!1,className:this.props.className||"mc-portal-content",id:this.props.id,role:this.props.role,ref:function(e){return t.portalContentElementRef=e}},this.props.children);i.render(o,this.portalRootElement,e)}},t.prototype.unMountPortal=function(){this.portalRootElement&&(i.unmountComponentAtNode(this.portalRootElement),(this.props.parentElement||document.body).removeChild(this.portalRootElement),this.portalRootElement=null,this.portalContentElementRef=null)},t.prototype.render=function(){return null},t})(n.Component);t.Portal=r})),define("spectrum/positioned_portal",["require","exports","tslib","spectrum/positioned_portal/positioned_portal","spectrum/positioned_portal/utils"],(function(e,t,o,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.__exportStar(n,t),o.__exportStar(i,t)})),define("spectrum/positioned_portal/positioned_portal",["require","exports","tslib","react","spectrum/positioned_portal/utils","spectrum/portal"],(function(e,t,o,n,i,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=o.__importStar(n);var l=(function(e){function t(t){var o=e.call(this,t)||this;return o.handleMouseOver=o.handleMouseOver.bind(o),o.handleMouseOut=o.handleMouseOut.bind(o),o.handleOnFocus=o.handleOnFocus.bind(o),o.handleOnBlur=o.handleOnBlur.bind(o),o.handleClick=o.handleClick.bind(o),o.closePortal=o.closePortal.bind(o),o.handleKeyEvent=o.handleKeyEvent.bind(o),o.handleScrollEvent=o.handleScrollEvent.bind(o),o.state={isShown:!!t.isShowInitially},o}return o.__extends(t,e),t.prototype.componentDidMount=function(){var e=this;this.state.isShown&&this.portalInstance.mountPortal((function(){e.resolvePortalPosition()}))},t.prototype.componentDidUpdate=function(){var e=this;this.state.isShown&&this.portalInstance?(this.mountListeners(),this.props.onWillShow&&this.props.onWillShow(),this.portalInstance.mountPortal((function(){e.props.onDidShow&&e.props.onDidShow(),e.resolvePortalPosition()}))):this.portalInstance&&(this.unMountListeners(),this.props.onWillClose&&this.props.onWillClose(),this.portalInstance.unMountPortal(),this.wrapperElementRef=null)},t.prototype.componentWillUnmount=function(){this.portalInstance&&this.portalInstance.unMountPortal()},t.prototype.mountListeners=function(){document.addEventListener("keydown",this.handleKeyEvent,!1),document.addEventListener("scroll",this.handleScrollEvent,!1)},t.prototype.unMountListeners=function(){document.removeEventListener("keydown",this.handleKeyEvent,!1),document.removeEventListener("scroll",this.handleScrollEvent,!1)},t.prototype.handleOnFocus=function(e){this.props.showOnClick||this.showPortal()},t.prototype.handleOnBlur=function(e){this.props.closeOnBlur&&this.closePortal()},t.prototype.handleMouseOver=function(e){this.props.showOnMouseMove&&this.showPortal()},t.prototype.handleMouseOut=function(e){this.props.showOnMouseMove&&this.hidePortal()},t.prototype.handleClick=function(e){this.props.showOnClick&&this.showPortal()},t.prototype.handleKeyEvent=function(e){27===e.keyCode&&this.closePortal()},t.prototype.handleScrollEvent=function(){this.state.isShown&&this.resolvePortalPosition()},t.prototype.closePortal=function(){this.hidePortal(),this.props.onDidClose&&this.props.onDidClose()},t.prototype.showPortal=function(){this.setState({isShown:!0})},t.prototype.hidePortal=function(){this.setState({isShown:!1})},t.prototype.resolvePortalPosition=function(){if(this.portalInstance&&this.wrapperElementRef){var e=this.wrapperElementRef.childElementCount<2&&this.wrapperElementRef.firstElementChild||this.wrapperElementRef,t=i.calculatePosition(e,this.portalInstance.portalContentElementRef,this.props.positioning||"above",this.props.positionOffset);this.portalInstance.portalContentElementRef.style.top=t.top+"px",this.portalInstance.portalContentElementRef.style.left=t.left+"px"}},t.prototype.render=function(){var e=this;return n.createElement("div",{"aria-describedby":this.props.id,onMouseOver:this.handleMouseOver,onMouseLeave:this.handleMouseOut,onFocusCapture:this.handleOnFocus,onBlur:this.handleOnBlur,onClick:this.handleClick,className:this.props.wrapperClassName?this.props.wrapperClassName:"mc-positioned-portal-wrapper",ref:function(t){return e.wrapperElementRef=t}},n.createElement(r.Portal,{ref:function(t){return e.portalInstance=t},className:"mc-positioned-portal-content",parentElement:this.props.portalParentElement},this.props.renderContent&&this.props.renderContent()||null),this.props.children)},t})(n.Component);t.PositionedPortal=l})),define("spectrum/positioned_portal/utils",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.calculatePosition=function(e,t,o,n){void 0===n&&(n=0);var i={top:0,left:0},r=e.getBoundingClientRect(),l=t.getBoundingClientRect();switch(o){case"below":i={top:r.top+r.height+n,left:r.left+r.width/2-l.width/2};break;case"left":i={top:r.top+r.height/2-l.height/2,left:r.left-l.width-n};break;case"right":i={top:r.top+r.height/2-l.height/2,left:r.left+r.width+n};break;case"above":i={top:r.top-l.height-n,left:r.left+r.width/2-l.width/2}}return i}})),define("spectrum/toggle",["require","exports","tslib","spectrum/toggle/toggle"],(function(e,t,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.__exportStar(n,t)})),define("spectrum/toggle/toggle",["require","exports","tslib","classnames","react"],(function(e,t,o,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=o.__importDefault(n);var r=(function(e){function t(){var t=e.apply(this,arguments)||this;return t.handleChange=function(e){t.props.onCheckedChange&&t.props.onCheckedChange(e.currentTarget.checked,e)},t}return o.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.disabled,r=e.interactive,l=e.checked,s=e.className,a=e.ariaLabel,p=e.labelContent,c=(e.onCheckedChange,e.inputProps),u=o.__rest(e,["disabled","interactive","checked","className","ariaLabel","labelContent","onCheckedChange","inputProps"]),d=n.default(s,"mc-toggle",{"mc-toggle-checked":l,"mc-toggle-disabled":t}),h=n.default(c?c.className:"","mc-toggle-input",{"mc-toggle-input-interactive":!!r});return i.createElement("label",Object.assign({className:d,"aria-label":a},u),p,i.createElement("span",{className:"mc-toggle-input-wrapper"},i.createElement("input",Object.assign({type:"checkbox"},c,{className:h,checked:l,disabled:t,onChange:this.handleChange})),i.createElement("i",{className:"mc-toggle-track"})))},t})((i=o.__importStar(i)).Component);t.Toggle=r,r.defaultProps={interactive:!0}})),define("spectrum/token",["require","exports","tslib","spectrum/token/token"],(function(e,t,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.__exportStar(n,t)})),define("spectrum/token/token",["require","exports","tslib","classnames","react","spectrum/tooltip"],(function(e,t,o,n,i,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=o.__importDefault(n),i=o.__importStar(i),t.Token=function(e){var t,l,s=e.children,a=e.className,p=e.dig2retrofit,c=e.focused,u=void 0!==c&&c,d=e.onClose,h=e.onClick,m=e.onKeyDown,f=e.onFocus,v=e.onBlur,_=e.selected,b=void 0!==_&&_,g=e.variant,y=void 0===g?"default":g,E=e.tabIndex,w=void 0===E?-1:E,C=e.tooltipContent,P=o.__rest(e,["children","className","dig2retrofit","focused","onClose","onClick","onKeyDown","onFocus","onBlur","selected","variant","tabIndex","tooltipContent"]),k=n.default(a,{"mc-token":!0,"mc-token-error":"error"===y,"mc-token-focused":u,"mc-token-selected":b,"mc-token-warning":"warning"===y,"mc-token-dig2":p}),S=e.id?"tooltip-for-"+e.id:void 0,O=i.createElement("svg",{width:13,height:13,viewBox:"0 0 24 24",className:"mc-token-close-icon"},i.createElement("title",null,"Delete Token"),i.createElement("path",{className:"mc-token-close-icon-x",d:"M12 10.586l-4.95-4.95L5.636 7.05l4.95\n        4.95-4.95 4.95 1.414 1.414 4.95-4.95\n        4.95 4.95 1.414-1.414-4.95-4.95\n        4.95-4.95-1.414-1.414z",fillRule:"evenodd"}));return i.createElement("div",Object.assign({className:k,onKeyDown:function(e){var t=e.key;"Backspace"===t&&d&&(e.preventDefault(),d(e)),"Enter"===t&&h&&h(e),m&&m(e)},role:"button",onClick:function(e){var o=e.target;t===o||t.contains(o)||h&&h(e)},onFocus:function(e){var o=e.target;t===o||t.contains(o)||(f&&f(e),l&&l.showTooltip())},onBlur:function(e){v&&v(e),l&&l.hideTooltip()},tabIndex:w},P),i.createElement(r.Tooltip,{tooltipContent:C,ref:function(e){return l=e},id:S},i.createElement("div",{className:"mc-token-inner-wrapper"},i.createElement("div",{className:"mc-token-content"},s),i.createElement("button",{className:"mc-token-close",onClick:function(e){d&&d(e)},tabIndex:-1,ref:function(e){return t=e}},O))))},t.Token.displayName="Token"})),define("spectrum/tokenized_input",["require","exports","tslib","spectrum/tokenized_input/tokenized_input"],(function(e,t,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.__exportStar(n,t)})),define("spectrum/tokenized_input/tokenized_input",["require","exports","tslib","classnames","react"],(function(e,t,o,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=o.__importDefault(n),i=o.__importStar(i);var r=function(e){var t=e.key;if("ArrowRight"===t){var o=e.currentTarget.nextElementSibling;o&&o.focus()}if("ArrowLeft"===t){var n=e.currentTarget.previousElementSibling;n&&n.focus()}};t.TokenizedInput=function(e){var t=e.className,o=e.dig2retrofit,l=e.inputElement,s=e.inputProps,a=e.tokens,p=n.default(t,{"mc-tokenized-input":!0,"mc-tokenized-input-dig2":o}),c=a.map((function(e){return i.cloneElement(e,{onKeyDown:r})}));return i.createElement("div",{className:p},c,i.cloneElement(l,s))},t.TokenizedInput.defaultProps={inputElement:i.createElement("input",{className:"mc-tokenized-input-input","aria-label":"typeAhead input",onKeyDown:function(e){var t=e.currentTarget.selectionStart,o=e.currentTarget.selectionEnd,n=e.key;if(0===t&&o===t&&("ArrowLeft"===n||"Backspace"===n)){e.preventDefault();var i=e.currentTarget.previousElementSibling;i&&i.focus()}},placeholder:"Type here"}),tokens:[]},t.TokenizedInput.displayName="TokenizedInput"})),define("spectrum/tooltip",["require","exports","tslib","spectrum/tooltip/tooltip"],(function(e,t,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.__exportStar(n,t)})),define("spectrum/tooltip/tooltip",["require","exports","tslib","classnames","react","spectrum/positioned_portal","spectrum/util/uuid_generator"],(function(e,t,o,n,i,r,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=o.__importDefault(n),i=o.__importStar(i),t.TOOLTIP_OFFSETS={above:12,below:12,left:14,right:14};var s=0,a=(function(e){function a(t){var o=e.call(this,t)||this;return o.renderContent=o.renderContent.bind(o),o.handlePortalWillClose=o.handlePortalWillClose.bind(o),o.handlePortalWillShow=o.handlePortalWillShow.bind(o),o.handleAnimationEnd=o.handleAnimationEnd.bind(o),o.tooltipWasVisible=!1,o.showTooltip=o.showTooltip.bind(o),o.hideTooltip=o.hideTooltip.bind(o),o}return o.__extends(a,e),a.prototype.handleAnimationEnd=function(e){"delayed-tooltip"===e.animationName&&(s=Date.now(),this.tooltipWasVisible=!0,this.props.onDidShow&&this.props.onDidShow())},a.prototype.shouldShowDelayed=function(){return s<Date.now()-3e3},a.prototype.handlePortalWillShow=function(){document.addEventListener("animationend",this.handleAnimationEnd),this.props.onWillShow&&this.props.onWillShow()},a.prototype.handlePortalWillClose=function(){document.removeEventListener("animationend",this.handleAnimationEnd),this.tooltipWasVisible&&(s=Date.now()),this.tooltipWasVisible=!1,this.props.onWillClose&&this.props.onWillClose()},a.prototype.showTooltip=function(){this.positionedPortalEl.showPortal()},a.prototype.hideTooltip=function(){this.positionedPortalEl.hidePortal()},a.prototype.renderContent=function(){if(this.props.tooltipContent){var e=this.props,t=e.positioning,o=void 0===t?"above":t,r=e.forceSingleLine,l=void 0!==r&&r,s=e.className,a=this.shouldShowDelayed(),p=n.default({"mc-tooltip":!0,"mc-tooltip-bottom":"below"===o,"mc-tooltip-top":"above"===o,"mc-tooltip-left":"left"===o,"mc-tooltip-right":"right"===o,"mc-tooltip-delay":a,"mc-tooltip-no-delay":!a,"mc-tooltip-single-line":l},s);return i.createElement("div",{className:p},i.createElement("div",{className:"mc-tooltip-body"},this.props.tooltipContent))}return null},a.prototype.render=function(){var e=this,n=this.props,s=n.renderContent,a=void 0===s?this.renderContent:s,p=n.showOnMouseMove,c=void 0===p||p,u=n.closeOnBlur,d=void 0===u||u,h=n.showOnClick,m=void 0!==h&&h,f=n.positioning,v=void 0===f?"above":f,_=n.id,b=void 0===_?l.generateUUID("tooltip"):_,g=(n.className,o.__rest(n,["renderContent","showOnMouseMove","closeOnBlur","showOnClick","positioning","id","className"]));return i.createElement(r.PositionedPortal,Object.assign({renderContent:a,showOnMouseMove:c,closeOnBlur:d,showOnClick:m,positioning:v,positionOffset:t.TOOLTIP_OFFSETS[v],id:b},g,{onWillShow:this.handlePortalWillShow,onWillClose:this.handlePortalWillClose,role:"tooltip",ref:function(t){return e.positionedPortalEl=t}}),this.props.children)},a})(i.Component);t.Tooltip=a})),define("modules/clean/redux/types",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),(function(e){e.Fetch="Fetch",e.Request="Request",e.Success="Success",e.Error="Error"})(t.ApiClientStatus||(t.ApiClientStatus={}))}));
//# sourceMappingURL=pkg-spectrum.min.js-vflv_vdUT.map