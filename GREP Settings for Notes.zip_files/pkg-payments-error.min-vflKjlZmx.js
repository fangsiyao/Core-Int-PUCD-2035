define("modules/clean/react/payments/error/browser_update_required",["require","exports","tslib","react","modules/core/i18n","modules/clean/react/image","modules/clean/react/business/components/headers/logged_in_header","modules/clean/react/rebrand/elements/rebrand_buttons","modules/clean/static_urls"],(function(e,r,t,a,o,s,n,l,d){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var u=(function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),r.prototype.getDefaultProps=function(){return{renderForModal:!1}},r.prototype.renderPageHeader=function(){return a.default.createElement(n.LoggedInHeader,{className:"browser-error-page__nav",logoPlatform:"default",leftAlignLogo:!0})},r.prototype.renderPrimaryCTA=function(){var e="/help/desktop-web/system-requirements#purchase";return this.props.renderForModal?a.default.createElement("a",{className:"browser-error-modal__cta mc-button mc-button-primary",target:"_blank",rel:"noopener noreferrer",href:e},o.intl.formatMessage({id:"gk12sS",defaultMessage:"Learn more"})):a.default.createElement(l.RebrandButtonAnchor,{className:"browser-error-page__cta",href:e,size:"medium",width:"wide"},o.intl.formatMessage({id:"gk12sS",defaultMessage:"Learn more"}))},r.prototype.renderGoBackLink=function(){return a.default.createElement("button",{className:"browser-error-page__go-back",onClick:function(){return window.history.back()}},o.intl.formatMessage({id:"6EcS+/",defaultMessage:"Go back"}))},r.prototype.render=function(){var e=this.props.renderForModal,r=e?"browser-error-modal":"browser-error-page";return a.default.createElement("main",{className:r},!e&&this.renderPageHeader(),a.default.createElement("section",{className:r+"__content"},a.default.createElement(s.Image,{className:r+"__image",alt:o.intl.formatMessage({id:"f09DMy",defaultMessage:"​​A hand-drawn illustration depicts a white cartoon cat holding a colorful broken umbrella in the rain. The cat appears sad to be getting wet."}),src:d.static_url("/static/images/illustration_catalog/sickbox-illo_m1-vflgqFlmE.png"),srcHiRes:d.static_url("/static/images/illustration_catalog/sickbox-illo_m1@2x-vflLIwavU.png")}),a.default.createElement("h1",{className:r+"__title"},o.intl.formatMessage({id:"2NTBgG",defaultMessage:"Hmm... looks like your browser is not secure"})),a.default.createElement("p",{className:r+"__message"},o.intl.formatMessage({id:"142JRz",defaultMessage:"For your own security, you’ll need to update to a newer, more secure browser in order to access this page."})),this.renderPrimaryCTA(),!e&&this.renderGoBackLink()))},r})((a=t.__importDefault(a)).default.Component);r.BrowserUpdateRequiredPage=u})),define("modules/clean/react/payments/error/browser_update_required_modal",["require","exports","tslib","react","modules/clean/react/css","modules/clean/react/modal","modules/clean/react/payments/error/browser_update_required"],(function(e,r,t,a,o,s,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var l=(function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(o,e),o.showInstance=function(){s.Modal.showInstance(a.default.createElement(r.BrowserUpdateModalLoader,null))},o.prototype.render=function(){return a.default.createElement(s.Modal,{className:"browser-update-modal",autoClose:!1,acceptButtonText:null,dismissButtonText:null,style:"clean"},a.default.createElement(n.BrowserUpdateRequiredPage,{renderForModal:!0}))},o})((a=t.__importDefault(a)).default.Component);r.BrowserUpdateModalLoaderView=l,r.BrowserUpdateModalLoader=o.requireCssWithComponent(l,["/static/css/payments/browser_update_required-vfl93gEK2.css"])}));
//# sourceMappingURL=pkg-payments-error.min.js-vflrnINy3.map