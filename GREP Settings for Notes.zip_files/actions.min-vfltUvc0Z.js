define(["require","exports","tslib","redux-actions","external/lodash","modules/clean/teams/admin/modals/modal_ajax/types","modules/clean/teams/admin/modals/modal_ajax/selectors","modules/clean/teams/admin/modals/modal_ajax/web_request_promise","modules/core/notify"],(function(e,t,r,n,i,o,a,s,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i=r.__importStar(i),t.createModalActions=function(e){var t=Object.keys(e).reduce((function(t,r){var n,i;return e[r].hasOwnProperty("fieldType")&&"array"===e[r].fieldType?t[r]=((n={})[o.FIELD_CHANGE]=function(e){return{fieldValue:e}},n[o.FIELD_ADD]=function(e){return{fieldValue:e}},n[o.FIELD_REMOVE]=function(e){return{fieldValue:e}},n):t[r]=((i={})[o.FIELD_CHANGE]=function(e){return{fieldValue:e}},i),t}),{});return n.createActions(t)},t.formActions=function(e,t,n,o){return{actionSubmit:function(c,d){return void 0===c&&(c=i.identity),void 0===d&&(d=i.identity),function(l,f){return r.__awaiter(void 0,void 0,void 0,(function(){var l,m;return r.__generator(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),i.isFunction(o)&&(t.data=o(a.selectFields(e,f()))),[4,s.WebRequestPromise(t)];case 1:return l=r.sent(),n&&u.Notify.success(n.successNotify),c(l),[3,3];case 2:return m=r.sent(),n&&n.errorNotify&&u.Notify.error(n.errorNotify),d(m),[3,3];case 3:return[2]}}))}))}}}}}));
//# sourceMappingURL=actions.min.js-vfleH0qvS.map