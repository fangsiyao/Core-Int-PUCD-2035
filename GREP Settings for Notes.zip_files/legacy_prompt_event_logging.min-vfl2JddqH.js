define(["require","exports","tslib","modules/core/uri","modules/clean/ajax_minimal"],(function(e,r,t,o,n){"use strict";function i(e,r){var t={campaign_id:r.campaignId.toString()};if(r.versionId&&(t.version_id=r.versionId.toString()),"number"==typeof r.promptQueriedAtMs&&(t.prompt_queried_at_ms=r.promptQueriedAtMs.toString()),window&&window.performance&&window.performance.now){var n=Math.round(window.performance.now());t.delta_from_request_start_ms=n.toString()}return r.activeUserId&&(t._subject_uid=String(r.activeUserId)),r.requestId&&(t.prompt_parent_request_id=r.requestId),r.eventName&&(t.event_name=r.eventName),void 0!==r.remindMeLater&&(t.remind_me_later=(!!r.remindMeLater).toString()),r.csrfToken&&(t.csrf_token=encodeURIComponent(r.csrfToken)),r.csrfTokenType&&(t.csrf_token_type=encodeURIComponent(r.csrfTokenType)),new o.URI({path:e,query:t})}Object.defineProperty(r,"__esModule",{value:!0}),n=t.__importStar(n),r.LEGACY_EVENT_CONFIRM="db:prompt:confirm",r.LEGACY_EVENT_DISMISS="db:prompt:dismiss",r.LEGACY_EVENT_PRE_CONFIRM="db:prompt:pre-confirm",r.LEGACY_EVENT_PRE_DISMISS="db:prompt:pre-dismiss",r.LEGACY_EVENT_SHOW="db:prompt:show",r.getUpsellControllerURI=i;var s=(function(){function e(e){this.params=e}return e.prototype.logImpression=function(){var e=i("/prompt/log_impression",this.params);n.post(e.toString(),"")},e.prototype.logDismissal=function(){var e=i("/prompt/dismiss",this.params);n.post(e.toString(),"")},e})();r.LegacyEventLogger=s}));
//# sourceMappingURL=legacy_prompt_event_logging.min.js-vflhOBv-p.map