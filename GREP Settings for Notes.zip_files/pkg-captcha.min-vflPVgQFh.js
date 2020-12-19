define("modules/clean/abuse/captcha_helper",["require","exports","tslib","modules/constants/login_and_register","modules/constants/page_load","modules/clean/global_constants","modules/clean/web_timing_logger","modules/core/exception","modules/core/uri"],(function(e,t,a,r,n,c,o,s,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r=a.__importStar(r),s=a.__importStar(s);var l=!1;function u(){var e={onload:"recaptchaOnloadCallback",render:"explicit",hl:n.USER_LOCALE.replace("_","-")};return new i.URI({scheme:"https",authority:"www.google.com",path:"/recaptcha/api.js",query:e}).toString()}function p(){return new Promise((function(n,o){if(window.recaptchaOnloadCallback=function(){n(window.grecaptcha)},r.SHOULD_LOAD_FUNCAPTCHA&&l&&new Promise((function(t,a){e(["modules/clean/abuse/funcaptcha_modal"],t,a)})).then(a.__importStar).then((function(e){(0,e.loadFuncaptchaModal)()})),t.isTest())n(f);else{var i=document.createElement("script"),p=u();if(i.setAttribute("src",p),!c.GlobalConstants.CSP_SCRIPT_NONCE)return s.reportException({err:new Error("CSP nonce not set"),severity:s.SEVERITY.CRITICAL,tags:["product-safety-infra","recaptcha"]}),void o();i.setAttribute("nonce",c.GlobalConstants.CSP_SCRIPT_NONCE),document.body.appendChild(i)}}))}t.HasCaptchaLoaded=function(){return null!=t.captchaPromise},t.ClearCaptchaPromise=function(){t.captchaPromise=null},t.LoadRecaptcha=function(e,a){return void 0!==a&&(l=a),t.captchaPromise||(t.captchaPromise=e?new Promise((function(e,t){o.waitForTTI().then(e),setTimeout(e,2500)})).then(p):p()),t.captchaPromise},t.isTest=function(){return r.IS_SELENIUM_TEST},t.BuildRecaptchaURI=u;var d={},h={},m=0;t.DUMMY_RESPONSE="DUMMY-RESPONSE";var _=function(e){e.setAttribute("class","g-recaptcha-response"),e.setAttribute("name","g-recaptcha-response"),e.value=""},f={reset:function(e){var t=h[e].querySelector(".g-recaptcha-response");return _(t),!0},render:function(e,a,r){var n=m;m+=1,s.assert(null==e.querySelector(".g-recaptcha-response"),"can't render multiple recaptcha elements in same div");var c=document.createElement("textarea");return c.id="g-recaptcha-response-"+n,_(c),e.appendChild(c),h[n]=e,d[n]=function(){var e=t.DUMMY_RESPONSE;return c.value=e,a.callback&&a.callback(e),e},n},execute:function(e){return Promise.resolve(d[e]())}}}));
//# sourceMappingURL=pkg-captcha.min.js-vflwpy9xk.map