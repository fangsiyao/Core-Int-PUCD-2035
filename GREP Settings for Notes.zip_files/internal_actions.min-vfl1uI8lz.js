define(["require","exports","redux-actions"],(function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.internalActionPrefix="@@rondo",e.internalActionType=function(n){return e.internalActionPrefix+"/"+n},e.isInternalActionType=function(n){return 0===n.indexOf(e.internalActionPrefix)},e.actionInitBehavior=function(n){return e.internalActionType("INIT_"+n)},e.createActionInitBehavior=function(n){return{type:e.actionInitBehavior(n)}},e.ACTION_BEHAVIOR_FETCHED=e.internalActionType("ACTION_BEHAVIOR_FETCHED"),e.createActionBehaviorFetched=t.createAction(e.ACTION_BEHAVIOR_FETCHED,(function(n){return n}),(function(){return{__rondoInternal:!0}})),e.ACTION_MERGE=e.internalActionType("ACTION_MERGE"),e.createActionMerge=function(){return{type:e.ACTION_MERGE}},e.ACTION_BEHAVIOR_REFRESH=e.internalActionType("ACTION_BEHAVIOR_REFRESH"),e.createActionBehaviorRefresh=t.createAction(e.ACTION_BEHAVIOR_REFRESH,(function(n,e,t){return{behavior:n,replaceExistingReducer:e,refresh:t}}),(function(){return{__rondoInternal:!0}}))}));
//# sourceMappingURL=internal_actions.min.js-vfl-0glt4.map