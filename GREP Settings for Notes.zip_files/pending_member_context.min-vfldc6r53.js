define(["require","exports","tslib","react","react-intl","modules/core/i18n"],(function(e,a,t,r,o,l){"use strict";var n,s;Object.defineProperty(a,"__esModule",{value:!0}),r=t.__importDefault(r),(function(e){e.NumCollaborators="NUM_COLLABORATORS",e.NumSharedFolders="NUM_SHARED_FOLDERS",e.NumSharedFiles="NUM_SHARED_FILES",e.TopCollaborator="TOP_COLLABORATOR",e.SameDomain="SAME_DOMAIN"})(s||(s={})),a.PendingMemberContext=function(e){var t=e.interactionsInfo,o=e.email;if(void 0===t)return null;var l=a.getTopContext(t,o,3);return r.default.createElement("div",{className:"context__line-item"},l.map((function(e){var t=e[0],o=e[1];return r.default.createElement("div",{key:t},r.default.createElement("span",{className:"context__interpunct"},"•"),r.default.createElement("span",null,a.createContextDescription(t,o)," "))})))},a.PendingMemberContext.displayName="PendingMemberContext",a.getTopContext=function(e,a,t){var r=[],o=e.num_collaborators,l=e.num_shared_folders,n=e.num_shared_files,u=e.top_collaborator,i=e.same_domain;if(o>0&&r.push([s.NumCollaborators,o]),l>0&&r.push([s.NumSharedFolders,l]),n>0&&r.push([s.NumSharedFiles,n]),i){u&&r.push([s.TopCollaborator,u.name]);var m="@"+a.split("@")[1];r.push([s.SameDomain,m])}return t?r.slice(0,t):r},a.createContextDescription=function(e,a){var t=u[e];return l.intl.formatMessage(t,{value:a})};var u=o.defineMessages(((n={})[s.NumCollaborators]={id:"QeEkkz",defaultMessage:"{value, plural, one{1 member works with them} other{{value} members work with them}}"},n[s.NumSharedFolders]={id:"156+gh",defaultMessage:"{value, plural, one{1 folder shared with your team} other{{value} folders shared with your team}}"},n[s.NumSharedFiles]={id:"CX5lnx",defaultMessage:"{value, plural, one{1 file shared with your team} other{{value} files shared with your team}}"},n[s.TopCollaborator]={id:"/t9NTF",defaultMessage:"{value} regularly works with them"},n[s.SameDomain]={id:"vQ0ZP6",defaultMessage:"Their email is {value}"},n))}));
//# sourceMappingURL=pending_member_context.min.js-vflzwaLYq.map