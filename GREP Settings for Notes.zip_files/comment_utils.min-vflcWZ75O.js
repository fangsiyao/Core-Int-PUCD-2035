define(["require","exports","tslib","comments2/components/comment_editor/draft_utils"],(function(e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.truncateComment=function(e,t){void 0===t&&(t=100);var a=e.content.text;if(a.length<=t)return e;for(var s=a.split("\n").map(r.decodeUnicode),i=[],o=0,_=0;_<s.length&&o<t;_++){var c=s[_],d=t-o;d<c.length?(i=n.__spreadArrays(i,[c.slice(0,d)]),o=t):(i=n.__spreadArrays(i,[c]),o+=c.length)}var u=i.map(r.encodeUnicode).join("\n"),l=e.content.metadata;return n.__assign(n.__assign({},e),{content:{metadata:l.reduce((function(e,r){if("sticker"===r.type)return n.__spreadArrays(e,[r]);var a=r.location;return a.start<t?n.__spreadArrays(e,[n.__assign(n.__assign({},r),{location:n.__assign(n.__assign({},a),{end:Math.min(a.end,t)})})]):e}),[]),text:u+"…"}})}}));
//# sourceMappingURL=comment_utils.min.js-vfl_XvwqM.map