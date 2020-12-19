define(["require","exports","tslib","react-intl","modules/core/i18n","modules/clean/datetime","modules/clean/previews/util","modules/clean/react/pass/constants","modules/constants/file_viewer","modules/clean/react/teams/team_discovery/data/model","modules/core/window","modules/clean/analytics","modules/clean/react/modal","modules/clean/teams/suggest_invites_modal","modules/clean/contacts/contact","modules/clean/react/pass/utils","react","modules/clean/viewer","modules/clean/teams/admin/widgets/invite_modal/invite_modal","modules/clean/api_v2/user_client","modules/clean/react/pass/actions"],(function(e,t,a,n,s,i,o,r,d,u,l,m,c,f,g,_,M,p,v,w,E){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),M=a.__importDefault(M),t.buildSeenStateMessage=function(e){return e.isActive?s.intl.formatMessage({id:"EhtH9U",defaultMessage:"Viewing now"}):null!=e.whenLastSeen?(function(e){var t=i.ago(1e3*e.whenLastSeen,!1),a=s.intl.formatMessage({id:"03+wm0",defaultMessage:"Viewed {timeAgo}"},{timeAgo:t});if(o.shouldShowPlatformInfo()){var n=e.platformType;n===r.PassPlatform.DESKTOP?a=s.intl.formatMessage({id:"UaiFvq",defaultMessage:"Viewed {timeAgo} on desktop"},{timeAgo:t}):n===r.PassPlatform.WEB?a=s.intl.formatMessage({id:"xK2zMz",defaultMessage:"Viewed {timeAgo} on web"},{timeAgo:t}):n===r.PassPlatform.MOBILE&&(a=s.intl.formatMessage({id:"OmxUNA",defaultMessage:"Viewed {timeAgo} on mobile"},{timeAgo:t}))}return a})(e):(function(e){switch(e){case"owner":return s.intl.formatMessage({id:"/i1m6q",defaultMessage:"Owner"});case"writer":return s.intl.formatMessage({id:"yH9Gqv",defaultMessage:"Can edit"});case"reader":return s.intl.formatMessage({id:"y7bSVp",defaultMessage:"Can comment"});case"reader_no_comment":case void 0:return s.intl.formatMessage({id:"Xoza1y",defaultMessage:"Can view"})}})(e.accessLevel)},t.getOnVsOffTeamExperiment=function(){return["ON","LIMITED"].includes(d.ON_VS_OFF_TEAM_PREVIEWS_EXPERIMENT)},t.getOnVsOffTeamLimitedVariant=function(){return"LIMITED"===d.ON_VS_OFF_TEAM_PREVIEWS_EXPERIMENT};var h=n.defineMessage({id:"cIE9zv",defaultMessage:"Outside {teamname}"}),T=s.intl.formatMessage({id:"L3BzP5",defaultMessage:"Invite to team"}),I=s.intl.formatMessage({id:"XfAovr",defaultMessage:"Join team"}),A=n.defineMessage({id:"qRTK38",defaultMessage:"Member of {teamname}"}),P=s.intl.formatMessage({id:"DOjvpK",defaultMessage:"Sending request..."}),S=s.intl.formatMessage({id:"FomW4x",defaultMessage:"Request sent"}),x=s.intl.formatMessage({id:"Q6HGJm",defaultMessage:"Joined"});t.buildTeamExpandReasons=function(e){var t=[];return e&&(t.push(s.intl.formatMessage({id:"jDD++i",defaultMessage:"Content stays within the team"})),t.push(s.intl.formatMessage({id:"/a4H7F",defaultMessage:"They’ll get instant access to files"})),t.push(s.intl.formatMessage({id:"LL9D7n",defaultMessage:"Enough space to do their work"}))),t},t.buildInviteToTeamProps=function(e,t,a){var n=a.team_name,i=a.team_id;return{teamExpandPrimaryText:s.intl.formatMessage(h,{teamname:n}),teamExpandButtonText:T,teamExpandButtonHandler:function(){l.sendBrowserAgnosticEvent(window,"resize"),c.Modal.showInstance(M.default.createElement(v.InviteModal,{emails:e.email?[e.email]:[],origin:"pass"})),m.TeamsWebActionsLogger.log("pass_invite_user",{user_id:t.id,team_id:i})}}},t.buildSuggestToJoinProps=function(e,t,a){var n=a.team_id,i=a.team_type,o=a.team_name;return{teamExpandPrimaryText:s.intl.formatMessage(h,{teamname:o}),teamExpandButtonText:T,teamExpandButtonHandler:function(){n&&i?(l.sendBrowserAgnosticEvent(window,"resize"),c.Modal.showInstance(M.default.createElement(f.SuggestInvitesModal,{teamId:n,teamType:i,populatedContacts:e.email?[g.Contact.buildFromRawEmail(e.email)]:[],source:"pass"}))):_.navigateToSuggestModal(e.email?[e.email]:[]),m.TeamsWebActionsLogger.log("pass_suggested_user",{user_id:t.id,team_id:n,team_type:i})}}},t.buildRequestJoinProps=function(e,t,a,n){for(var i=a.find((function(e){return e.requestState===u.RequestState.PendingApproval})),o=function(a){for(var i=0,o=a.members;i<o.length;i++){var r=o[i];if(e.userId===r.memberId){var d=a.requestState;return{value:{teamExpandPrimaryText:s.intl.formatMessage(A,{teamname:a.name}),teamExpandButtonText:d?d===u.RequestState.Sending?P:d===u.RequestState.PendingApproval?S:x:I,teamExpandButtonHandler:function(){l.sendBrowserAgnosticEvent(window,"resize"),n(a),m.TeamsWebActionsLogger.log("pass_requested_access_to_team",{user_id:t.id,team_id:a.id})},showCompanyIcon:!0,isTeamExpandButtonDisabled:d===u.RequestState.PendingApproval||d===u.RequestState.Sending||d===u.RequestState.Joined}}}}},r=0,d=void 0!==i?[i]:a;r<d.length;r++){var c=o(d[r]);if("object"==typeof c)return c.value}return{}},t.fetchInteractionsInfo=function(e,t,n,s){return a.__awaiter(void 0,void 0,void 0,(function(){var i,o,r,d,u,l;return a.__generator(this,(function(a){switch(a.label){case 0:if(!(i=p.Viewer.get_viewer()).work_user||0===e.length)return[2];for(o=[],r=function(e){if(e in n)return"continue";var a=t.seen_states.map((function(e){return e.seen_state_user})).find((function(t){return t.user_id===e}));if(!a||a.same_team)return"continue";o.push(e)},d=0,u=e;d<u.length;d++)l=u[d],r(l);return 0===o.length?[2]:[4,(new w.UserApiV2Client).ns("user_to_team").rpc("get_interaction_info",{dbx_account_ids:o,team_id:i.team_id},{subjectUserId:i.work_user.id}).then((function(e){var t={};if(!e||0===e.result.length)throw Error();for(var a=0,n=e.result;a<n.length;a++){var i=n[a];t[i.dbx_account_id]=i}E.PassActions.updateUserTeamInteractionInfo(s,t)})).catch((function(e){for(var t={},a=0,n=o;a<n.length;a++){t[n[a]]=null}E.PassActions.updateUserTeamInteractionInfo(s,t)}))];case 1:return a.sent(),[2]}}))}))}}));
//# sourceMappingURL=tooltip_helpers.min.js-vflU-MzTU.map