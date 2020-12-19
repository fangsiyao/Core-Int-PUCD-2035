define(["require","exports","tslib","react","spectrum/button","spectrum/modal","modules/clean/ajax","modules/clean/teams/constants","modules/clean/teams/admin/widgets/open_team_join_onboarding_modal/open_team_join_onboarding_modal","modules/clean/analytics","modules/clean/components/loading_indicator","modules/clean/contacts/contact","modules/clean/contacts/tokenizer","modules/clean/contacts/types","modules/clean/dbmodal_stack","react-modal","modules/clean/loggers/join_flow_logger","modules/clean/react/payments/update_individual_billing/update_individual_store_creator","modules/clean/payments/skus/subscription_diff","modules/clean/payments/skus/subscription_service","modules/clean/teams/admin/widgets/open_team_join_onboarding_modal/constants","modules/clean/payments/skus/subscription_status","modules/clean/teams/admin/widgets/update_billing_modal/update_billing_modal_loader","modules/clean/react/css","modules/clean/react/invite/invite_and_buy_text","modules/clean/react/invite/available_licenses_text","modules/clean/react/modal","modules/clean/stormcrow/experiment","modules/clean/viewer","modules/core/browser","modules/core/browser_detection","modules/core/html","modules/core/i18n","modules/core/notify","modules/clean/user_education/user_education_client","external/lodash","modules/clean/metrics/index","modules/clean/ux_analytics_modal_tracking","modules/clean/ux_analytics_utils","modules/clean/react/payments/common/adapters/setup_cash","modules/clean/teams/admin/widgets/invite_modal/invite_link","modules/clean/teams/admin/widgets/invite_modal/invite_modal_constants","modules/clean/teams/admin/api/admin_console_api_client","modules/clean/teams/admin/widgets/invite_modal/invite_modal_first_task/invite_modal_first_task","modules/clean/teams/admin/widgets/invite_modal/invite_modal_groups","modules/clean/react/member_sidebar_actions","modules/clean/growth/smb_funnel/smb_funnel_logger","modules/clean/react/admin/teams/onboarding/web/constants","modules/clean/api_v2/user_client","modules/clean/teams/admin/widgets/invite_modal/suggested_members","modules/clean/contacts/async_contact_validation","modules/clean/teams/admin/widgets/invite_modal/invite_validation_message","modules/clean/teams/admin/widgets/import_contacts_modal/import_contacts_modal","modules/clean/teams/admin/widgets/invite_modal/import_contacts_link"],(function(e,t,i,n,s,a,o,r,l,m,c,d,u,g,_,p,v,f,h,b,M,I,L,S,y,T,E,C,A,w,k,x,P,O,R,N,F,D,V,B,W,U,q,j,J,z,G,H,X,K,Q,Y,Z,$){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=i.__importDefault(n),o=i.__importStar(o),g=i.__importDefault(g),p=i.__importDefault(p),w=i.__importStar(w),k=i.__importStar(k),N=i.__importStar(N),q=i.__importDefault(q);t.getUpdateSubChangePlanError=function(e){return 0===e?U.NO_AVAILABLE_LICENSES_ERROR:(function(e){return P.intl.formatMessage({id:"J/4DT7",defaultMessage:"{count, plural, one{Can only send {count} invite.} other{Can only send {count} invites.}} Ask a team admin to add licenses."},{count:e})})(e)},p.default.setAppElement(document.body);var ee=(function(p){function S(e){var a=p.call(this,e)||this;if(a._isMounted=!1,a.logTTI=N.once((function(){a.componentTTITimer.record()})),a.closeModal=function(e){var t=a.props.onDismiss;window.setTimeout((function(){R.UEClient.sendEvent("InviteModal","Hide")}),2500),t?null==t||t(a.state.memberList):E.Modal.close(),e&&e(a.state.memberList)},a.onBillingClick=function(e){e.stopPropagation(),e.preventDefault();var s=a.state,o=s.emails,r=s.inviteMessage,l=function(){E.Modal.showInstance(n.default.createElement(t.InviteModal,i.__assign({},a.props,{emails:o,inviteMessage:r,onDismiss:void 0}))),_.DBModalStack.unregister(f.BILLING_INFO_UPDATED,l)};a.closeModal(),_.DBModalStack.register(f.BILLING_INFO_UPDATED,l),L.UpdateBillingModalLoader.showInstance(l)},a.launchImportModal=function(){var e=a.state,s=e.contacts,o=e.emails,r=e.inviteMessage;E.Modal.showInstance(n.default.createElement(Z.ImportContactsModal,{preselectedContacts:s,onClose:function(){E.Modal.showInstance(n.default.createElement(t.InviteModal,i.__assign({},a.props,{preLoadedContacts:s,emails:o,inviteMessage:r})))},onConfirmSelection:function(e,s){for(var o=i.__spreadArrays(e,s),l=e.filter((function(e){return e.email})).map((function(e){return e.email})),m=l,c=0,d=s;c<d.length;c++){var u=d[c];u.email&&m.push(u.email)}E.Modal.showInstance(n.default.createElement(t.InviteModal,i.__assign({},a.props,{preLoadedContacts:o,emails:m,inviteMessage:r,importedDomainContacts:l})))},width:U.inviteModalWidth}))},a.onSubServiceResponse=function(e,t,i,n){var s=a.props.isIMMRevampM1On,o=a.getInviteCount(a.props.isIMMRevampM1On?void 0:t);a.setState({emails:t,isMakingTransitionInfoRequest:!1,isPreparingForSubmit:!1,numRemainingLicenses:a.getRemainingLicensesCount(i,n,o)}),!0===s?e&&a.setState({subChangePlan:e}):a.setState({subChangePlan:e})},a.onContactsChanged=function(e,n){var s=a.state,o=s.isReseller,r=s.isSelfServe,l=s.numProvisionedLicenses,m=s.isLoading,c=s.emails,d=s.sentEmails,u=s.isMakingTransitionInfoRequest,g=a.props.isIMMRevampM1On;if(!m){a.setState({isEmailTextInputted:e.length>0||n.length>0,contacts:e});var _=e.map((function(e){return e.email})).filter((function(e){return void 0!==e})),p=t.InviteModal.countValidContacts(e),v=g?p:_.length,f=a.totalLicenses,h={emails:_,isPreparingForSubmit:!1,numRemainingLicenses:a.getRemainingLicensesCount(f,l,v,d.length)},b=v+l;(!0===g?a.isAsyncValidationDone(e):_.length!==c.length)&&!o&&r&&b>f?a.updateSubChangePlan(b,i.__assign(i.__assign({},h),{totalLicenses:f,numProvisionedLicenses:l})):a.setState(i.__assign(i.__assign({},h),{isMakingTransitionInfoRequest:!(b<=f)&&u}))}},a.onMessageChanged=function(e){a.setState({inviteMessage:e.target.value})},a.sendInviteAction=function(){if(a.contactsTokenizer){var e=a.state.emails,t=a.contactsTokenizer.getContacts();e.length!==t.length?a.setState({isPreparingForSubmit:!0},(function(){a.contactsTokenizer.tokenizeAll()})):a.sendMemberInvites()}else a.sendMemberInvites()},a.onPrimaryActionClick=function(){if(a.props.onPrimaryAction){var e=a.state,t=e.numRemainingLicenses,i=e.subChangePlan,n={charge_for_new_licenses:!0,expected_overage:String(t<0?-1*t:0),expected_price:"0"};return i&&i.tvm&&(n.expected_price=i.tvm.transition.expected_price),a.props.onPrimaryAction(n),void E.Modal.close()}!a.showInviteLink()&&!a.props.isAfterLicenseReclaim||a.props.isFirstTask?a.sendInviteAction():a.shouldRenderSendInviteAction?a.sendInviteAction():a.closeModal()},a.onSecondaryActionClick=function(){var e=a.state,t=e.emails,n=e.suggestedMembers,s=e.suggestedMembersSuggestId,o=e.numRemainingLicenses,r=i.__assign(i.__assign({},a.defaultLoggingExtras),{added_message:a.hasInviteMessage,invite_count:a.getInviteCount(),invite_or_buy:a.inviteOrBuyText});if(n&&n.length){var l=N.filter(n,(function(e){return-1!==t.indexOf(e.email)}));r.total_recommendations=n.length,r.num_selected_recommendations=l.length,r.suggest_id=s,r.num_licenses_available=o}m.TeamsWebActionsLogger.log("invite_member_open_cancel",r),a.closeModal()},a.logSmbFunnel=function(e,t){void 0===t&&(t={});var n=a.props.isFirstTask,s=a.growthActSmbGroupsFirst.isActive,o=a.growthActSmbMWInvites.isActive;(n||s||o)&&G.SMBFunnelLogger.log(e,i.__assign(i.__assign({},t),{first_task:String(n),groups_first:String(s),mv_invites:String(o)}))},a.sendMemberInvites=function(){var e=a.state,t=e.emails,n=e.groupIds,s=e.inviteMessage,l=e.numRemainingLicenses,c=e.subChangePlan,d=e.sentEmails,u=e.memberList,g=e.suggestedMembers,_=e.isInviteUninvitePerformanceOn,p=a.props,f=p.isIMMRevampM1On,h=p.importedDomainContacts,b=l<0?-1*l:0,I={charge_for_new_licenses:!0,custom_message:s,emails:t,group_ids:n,expected_overage:String(b),expected_price:"0",extra:JSON.stringify(i.__assign({},a.defaultLoggingExtras)),url:w.get_uri().path,invite_source:v.InviteSource.IMM_WEB,platform:v.Platform.WEB,skip_invalid_invitees:Boolean(f),poll_events_on_commit:!_};if(c&&c.tvm&&(I.expected_price=c.tvm.transition.expected_price),m.TeamsWebActionsLogger.log("invite_member_open_invite_click",i.__assign(i.__assign({},a.defaultLoggingExtras),{added_message:a.hasInviteMessage,expected_price:I.expected_price,invite_count:a.getInviteCount(),invite_or_buy:a.inviteOrBuyText,licenses_to_add:b,group_ids:n,imported_contact_count:h?h.length:0})),0===a.getInviteCount())return O.Notify.error(P.intl.formatMessage({id:"E/vNT2",defaultMessage:"You haven’t included anyone to invite! Please invite at least one person."})),void m.TeamsWebActionsLogger.log("invite_member_open_invite_error",i.__assign(i.__assign({},a.defaultLoggingExtras),{client:!0,error_reason:"no_invites",invite_or_buy:a.inviteOrBuyText,group_ids:n}));for(var L=0,S=t;L<S.length;L++){var y=S[L].toLowerCase().split("@",2)[1];if(-1!==["getdropbox.com","dropboxmail.com"].indexOf(y))return O.Notify.error(P.intl.formatMessage({id:"ffW3Dm",defaultMessage:"You are not allowed to invite a member with a {domain} email."},{domain:y})),void m.TeamsWebActionsLogger.log("invite_member_open_invite_error",i.__assign(i.__assign({},a.defaultLoggingExtras),{client:!0,error_reason:"invite with dropbox domain",invite_or_buy:a.inviteOrBuyText,group_ids:n}))}a.props.shouldNotToastOnSuccess||O.Notify.success(P.intl.formatMessage({id:"uBRRiV",defaultMessage:"Submitting..."})),a.setState({isSubmitting:!0},(function(){var e=Date.now(),s=A.Viewer.get_viewer().work_user,c={invite_source:v.InviteSource.IMM_WEB,added_message:a.hasInviteMessage,invite_count:a.getInviteCount(),invite_or_buy:a.inviteOrBuyText,expected_price:I.expected_price,licenses_to_add:b};o.FormWebRequest({url:"/account/team/add_users",data:I,subject_user:s,success:function(s){var _=JSON.parse(s);if(O.Notify.clear(),a.setState({isSubmitting:!1}),m.TeamsWebActionsLogger.log("team_admin_add_member_submit_time",i.__assign(i.__assign(i.__assign({},a.defaultLoggingExtras),{time_ms:Date.now()-e}),c)),_){var p=_.users,v=_.has_invalid_invites,b=Object.keys(p),I=b.length,L=b.map((function(e){return p[e].email})),S=t.filter((function(e){return-1===L.indexOf(e)})).length,y=_.show_open_team_join_onboarding_modal,T=_.team_domains;if(u.length&&(a.growthActSmbGroupsFirst.isActive||a.props.isFirstTask)&&!v){var E=u[0],C=u.slice(1),A=b.map((function(e){return{admin_role:r.ADMIN_ROLE.NONE,initials:p[e].email[0].toUpperCase(),photo_url:null,display_name:p[e].email,email:p[e].email,team_join_state:z.JoinState.PENDING,user_id:p[e].id}}));a.setState({numRemainingLicenses:l-d.length,sentEmails:d.concat(A),emails:[],memberList:i.__spreadArrays([E],A,C)},(function(){a.growthActSmbGroupsFirst.isActive?a.closeModal():a.shouldShowPostActionPaintedDoorModal()&&(a.closeModal(),a.openPostActionPaintedDoorModal(a.growthActSmbWorkflowsPd.variant))}))}else a.props.onInviteSuccess&&a.props.onInviteSuccess(_.num_invited,l<0?-1*l:0),!0===v?a.removeInvitedContactsAfterInvites(L):y?(a.closeModal(),a.openOpenTeamJoinOnboardingModal(M.OpenTeamJoinUserAction.ONBOARDING_MODAL_VIEW_AFTER_INVITE,T)):a.shouldShowPostActionPaintedDoorModal()?(a.closeModal(),a.openPostActionPaintedDoorModal(a.growthActSmbWorkflowsPd.variant)):a.closeModal();var w=!0===f?{valid_invite_count:I}:void 0;if(m.TeamsWebActionsLogger.log("invite_member_open_invite_success",i.__assign(i.__assign(i.__assign({},a.defaultLoggingExtras),{added_message:a.hasInviteMessage,invite_count:a.getInviteCount(),invite_or_buy:a.inviteOrBuyText,members_length:u.length,group_ids:n}),w)),a.logSmbFunnel(H.AMPMetrics.ACTIVATION_IMM_ADD_MEMBERS,{success:"true",numInvited:String(I),membersLength:String(u.length)}),a.props.showTeammateSuggestions&&g&&g.length)for(var k=0,x=N.filter(g,(function(e){return-1!==t.indexOf(e.email)}));k<x.length;k++){var R=x[k];m.TeamsWebActionsLogger.log("admin_invite_recommended_contact",{user_id:R.user_id,team_type:R.team_type,prediction_id:R.prediction_id,num_licenses_available:l,origin:"imm_recommendation",inviteModal:!0})}if(h){var F=h.filter((function(e){return L.includes(e)}));m.TeamsWebActionsLogger.log("google_directory_invited_contacts",{num_invited:F.length,contacts:F,num_licenses_available:l},void 0,void 0,!0),m.TeamsWebActionsLogger.log("google_directory_invited_contacts",{num_invited:F.length,num_licenses_available:l})}!0===v?0===I?O.Notify.error(P.intl.formatMessage({id:"LYHTOV",defaultMessage:"Invites couldn't be sent. Fix any issues, and try sending them again."})):O.Notify.warning(P.intl.formatMessage({id:"OtZGgm",defaultMessage:"Some invites sent. {count, plural, one{Fix any issues, and try the last {count} again.} other {Fix any issues, and try the last {count} again.}}"},{count:S})):a.props.shouldNotToastOnSuccess||(1===I?O.Notify.success(P.intl.formatMessage({id:"klqzm6",defaultMessage:"Invited {user_email}."},{user_email:p[b[0]].email})):I>1?O.Notify.success(P.intl.formatMessage({id:"A+luT2",defaultMessage:"Invited {user_count} people."},{user_count:I})):O.Notify.error(P.intl.formatMessage({id:"9fLrh/",defaultMessage:"{count, plural, one{Skipped {count} person who is already a member of the team.} other{Skipped {count} people who are already members of the team.}}"},{count:S}))),o.SilentBackgroundRequest({url:"/account/team/ajax_log_invites",data:{invitations:I}})}else a.props.onInviteError&&a.props.onInviteError(),O.Notify.error(P.intl.formatMessage({id:"bLA3rA",defaultMessage:"There was a problem completing this request."})),a.logSmbFunnel(H.AMPMetrics.ACTIVATION_IMM_ADD_MEMBERS,{success:"false",errorReason:"response_empty"})},error:function(t,s,o){O.Notify.clear(),a.setState({isSubmitting:!1}),m.TeamsWebActionsLogger.log("team_admin_add_member_submit_time",i.__assign(i.__assign(i.__assign({},a.defaultLoggingExtras),{time_ms:Date.now()-e,error:!0}),c)),a.logSmbFunnel(H.AMPMetrics.ACTIVATION_IMM_ADD_MEMBERS,{success:"false",errorReason:"request_error"});var r=P.intl.formatMessage({id:"/GekxI",defaultMessage:"There was a problem completing this request."});if(o)try{var l=JSON.parse(o).emails,d=void 0===l?{}:l;if(d.message_text){r=d.message_text;var u=i.__assign({err_msg:r.replace(U.EMAIL_REGEX,"***")},a.defaultLoggingExtras);m.TeamsWebActionsLogger.log("invite_member_open_invite_error",i.__assign(i.__assign({},u),{client:!0,error_reason:"form_input_invalid",invite_or_buy:a.inviteOrBuyText,group_ids:n}))}}catch(e){r=o}else m.TeamsWebActionsLogger.log("invite_member_open_invite_error",i.__assign(i.__assign({},a.defaultLoggingExtras),{client:!0,error_reason:"problem_request",invite_or_buy:a.inviteOrBuyText,group_ids:n}));a.props.onInviteError&&a.props.onInviteError(),O.Notify.error(new x.HTML(r))}})}))},a.isAsyncValidationDone=function(e){for(var t=0,i=e;t<i.length;t++){var n=i[t];if(void 0===n.invitability_state&&!0!==n.invalid)return!1}return!0},a.renderPrimaryAction=function(e,t){var i=a.state,o=i.isReseller,r=i.numRemainingLicenses,l=i.isSubmitting,m=i.isSelfServe,d=i.memberList,u=i.isEmailInviteJustInTimeLicensingEnabled,g=a.props.getPrimaryButtonText,_=a.isInviteButtonDisabled,p=P.intl.formatMessage({id:"yzFoXG",defaultMessage:"Send invites"});return r<0&&!o&&!a.isNCCT&&m&&!d.length&&(p=P.intl.formatMessage({id:"dljqTf",defaultMessage:"Invite and buy"})),u&&(p=P.intl.formatMessage({id:"L7+s23",defaultMessage:"{count, plural, one{Invite member} other{Invite members}}"},{count:a.getInviteCount()})),g&&(p=g(u)),!a.showInviteLink()&&!a.props.isAfterLicenseReclaim||a.shouldRenderSendInviteAction||a.props.isFirstTask||(p=P.intl.formatMessage({id:"XEaqiT",defaultMessage:"Done"}),_=!1),n.default.createElement(s.Button,{className:"invite-modal__send-invites",ref:t,variant:"primary",disabled:_,onClick:e},n.default.createElement("span",{className:"modal-button-wrapper"},p,l&&n.default.createElement("span",{className:"loading-indicator"},n.default.createElement(c.LoadingIndicator,{style:c.LoadingIndicator.LoadingIndicatorStyle.SPINNER}))))},a.renderSecondaryAction=function(e){var t=P.intl.formatMessage({id:"d9/SE1",defaultMessage:"Cancel"});return n.default.createElement(s.Button,{variant:"secondary",onClick:e},t)},a.contactFilter=function(e){return e.type===g.default.EMAIL&&!(a.props.isIMMRevampM1On&&e.on_team)},a.renderContactsTokenizer=function(e,t,i){if(void 0===t&&(t=P.intl.formatMessage({id:"Le5Iez",defaultMessage:"Name or email"})),void 0===i&&(i=8),e){var s,o=a.state,r=o.isLoading,l=o.contacts,m=o.emails,c=o.validatedContactMap,_=a.props.isIMMRevampM1On;s=m.map((function(e){return new d.Contact({name:e,email:e,type:g.default.EMAIL,invalid:!1,on_team:!1,pending:!0,query:e})}));var p=_?n.default.createElement(Y.InviteValidationMessage,{contacts:l}):null;return n.default.createElement("div",{className:"invite-modal__tokenizer"},n.default.createElement(u.ContactsTokenizer,{customClass:r?"disabled":"",customContactFilter:a.contactFilter,disabled:r,onContentsChange:a.onContactsChanged,placeholder:t,populatedInputData:{tokens:!0===_?l:s,value:""},ref:function(e){a.contactsTokenizer=e},showContactImport:!1,tokenSpacing:i,user:e,listHeight:81,tokenizeOnOutOfFocus:!0,asyncValidateContacts:!0===_?a.asyncEmailsValidation:void 0,customContactValidator:!0===_?a.contactValidator:void 0,validatedContactMap:!0===_?c:void 0}),p)}},a.checkboxCallback=function(e,t){var n=a.state,s=n.emails,o=n.isReseller,r=n.numProvisionedLicenses,l=n.sentEmails,c=n.suggestedMembers,u=n.numRemainingLicenses,_=n.contacts,p=n.isMakingTransitionInfoRequest,v=a.props.isIMMRevampM1On,f=N.find(c,(function(e){return e.email===t})),h=s.slice(),b=_.slice();if(e){h.push(t);var M=new d.Contact({name:t,email:t,type:g.default.EMAIL,invalid:!1,on_team:!1,pending:!0,query:t});b.push(M),!0===v&&Promise.resolve(a.asyncEmailsValidation([M])),m.TeamsWebActionsLogger.log("admin_select_recommended_contact",{user_id:f.user_id,team_type:f.team_type,prediction_id:f.prediction_id,num_licenses_available:u,origin:"imm_recommendation"})}else h=h.filter((function(e){return e!==t})),b=b.filter((function(e){return e.email!==t})),m.TeamsWebActionsLogger.log("admin_deselect_recommended_contact",{user_id:f.user_id,team_type:f.team_type,prediction_id:f.prediction_id,num_licenses_available:u,origin:"imm_recommendation"});a.setState({isEmailTextInputted:h.length>0,emails:h,contacts:b});var I={emails:h,isPreparingForSubmit:!1,numRemainingLicenses:a.getRemainingLicensesCount(a.totalLicenses,r,h.length,l.length)},L=h.length+r;!o&&L>a.totalLicenses&&!v?a.updateSubChangePlan(L,i.__assign(i.__assign({},I),{totalLicenses:a.totalLicenses,numProvisionedLicenses:r})):a.setState(i.__assign(i.__assign({},I),{isMakingTransitionInfoRequest:!(L<=a.totalLicenses)&&p}))},a.closeAndOpenCSVImportModal=function(){var e=a.props,t=e.onCSVImport,i=e.onDismiss;m.TeamsWebActionsLogger.log("import_csv_modal_open",a.defaultLoggingExtras),t&&(a.closeModal(i),t())},a.showInviteLink=function(){return a.state.doesUserHavePermissionsToManageInviteLink&&a.props.shouldShowInviteLink&&!a.state.isEmailTextInputted},a.contactValidator=function(e){return t.InviteModal.isContactInvalid(e)?{state:u.ContactTokenState.invalid,msg:U.InvitabilityWarnings.get(e.invitability_state||"")||U.INVALID_TOOLTIP}:{state:u.ContactTokenState.ok,msg:null}},a.asyncEmailsValidation=function(e){return i.__awaiter(a,void 0,Promise,(function(){var t,n;return i.__generator(this,(function(s){switch(s.label){case 0:return[4,Q.asyncInviteeEmailsValidation(e)];case 1:return t=s.sent(),!0===this._isMounted&&(n=this.state.validatedContactMap,this.setState({validatedContactMap:new Map(i.__spreadArrays(Array.from(n),Array.from(t)))})),[2]}}))}))},a.componentTTITimer=F.getMetricsReporter().createTimer({ns:U.AMP_INVITE_MODAL_NAMESPACE_NAME,name:U.AMP_INVITE_MODAL_TTI_METRIC_NAME}),a.subService=new b.SubscriptionService,a.apiClient=new q.default,a.state={emails:e.emails||[],groupIds:[],inviteMessage:e.inviteMessage||"",isEmailTextInputted:!!e.emails&&e.emails.length>0||!1,isLoading:!0,isMakingTransitionInfoRequest:!1,isPreparingForSubmit:!1,isSubmitting:!1,numProvisionedLicenses:0,numRemainingLicenses:0,showInviteLink:!1,showSidebar:!!e.memberList&&1===e.memberList.length&&!a.growthActSmbMWInvites.isActive,memberList:e.memberList||[],sentEmails:[],isJustInTimeLicensingEnabled:!1,isEmailInviteJustInTimeLicensingEnabled:!1,contacts:e.preLoadedContacts||[],validatedContactMap:new Map,doesUserHavePermissionsToManageInviteLink:!1,isInviteUninvitePerformanceOn:!1},Promise.resolve(a.asyncEmailsValidation(a.state.contacts)),a.defaultLoggingExtras={is_client:!1,origin:a.props.origin,groups:a.growthActSmbGroupsFirst.isActive},a.props.actionTrigger){a.defaultLoggingExtras.action_trigger=a.props.actionTrigger,a.defaultLoggingExtras.module_name="first_task_imm",a.defaultLoggingExtras.framework="team_setup_essential",a.defaultLoggingExtras.mobile_web=k.is_supported_mobile_browser();var l=a.defaultLoggingExtras.mobile_web?G.Platform.MOBILE_WEB:G.Platform.WEB;G.SMBFunnelLogger.setCommonTags({platform:l})}return a}return i.__extends(S,p),Object.defineProperty(S.prototype,"isInviteButtonDisabled",{get:function(){var e=this.state,t=e.isLoading,i=e.isMakingTransitionInfoRequest,n=e.isReseller,s=e.isSelfServe,a=e.isSubmitting,o=e.numRemainingLicenses;return t||i||a||n&&o<0||!s&&o<0||0===this.getInviteCount()&&this.contactsTokenizer&&0===this.contactsTokenizer.getInputValue().length},enumerable:!0,configurable:!0}),Object.defineProperty(S.prototype,"hasInviteMessage",{get:function(){return Boolean(this.state.inviteMessage)},enumerable:!0,configurable:!0}),Object.defineProperty(S.prototype,"inviteOrBuyText",{get:function(){return this.state.numRemainingLicenses<0?"invite_buy":"send_invites"},enumerable:!0,configurable:!0}),S.prototype.relaunchFirstTaskModal=function(e){var t=this.props.onDismiss;t&&t(e,!0)},S.prototype.componentDidUpdate=function(e,t){var i=this.state,n=i.isPreparingForSubmit,s=i.numRemainingLicenses;!1===i.isLoading&&!0===t.isLoading&&(this.props.logTTIOnLoaded?this.props.logTTIOnLoaded():this.logTTI()),s>=this.getInviteCount()&&t.isPreparingForSubmit&&!n&&this.sendMemberInvites()},S.prototype.componentWillUnmount=function(){this._isMounted=!1,V.dispatchModalClosed()},S.prototype.componentDidMount=function(){this._isMounted=!0,this.fetchViewModel()},S.prototype.fetchViewModel=function(){var e=this,t=this.props,n=t.onDismiss,s=t.isIMMRevampM1On;o.WebRequest({url:"/team/admin/members/invite_members_modal_view_model",subject_user:A.Viewer.get_viewer().work_user,success:function(t){var n,a,o=JSON.parse(t),r=o.isReseller,l=o.numActiveTeamMembers,c=o.provisionedLicenses,d=o.currencyToFormatMap,u=o.localeNumberFormat,g=o.isJustInTimeLicensingEnabled,_=o.isEmailInviteJustInTimeLicensingEnabled,p=o.doesUserHavePermissionsToManageInviteLink,v=o.isInviteUninvitePerformanceOn,f=void 0===o.isSelfServe||o.isSelfServe;if(e.setState({numActiveTeamMembers:l,numProvisionedLicenses:c,isJustInTimeLicensingEnabled:g,isEmailInviteJustInTimeLicensingEnabled:_,doesUserHavePermissionsToManageInviteLink:p,isInviteUninvitePerformanceOn:Boolean(v),isReseller:r,isSelfServe:f}),r){var h=o.resellerContact,b=o.serializedResellerSubSkuSet;a=b.licenseSkus[0].quantity,n=e.getRemainingLicensesCount(a,c),e.setState({isLoading:!1,numRemainingLicenses:n,resellerContact:h,serializedResellerSubSkuSet:b},(function(){var t;e.showInviteLink()&&(t=e.props.inviteLinkUrl?"ON":"OFF"),m.TeamsWebActionsLogger.log("invite_member_open",i.__assign(i.__assign({},e.defaultLoggingExtras),{invite_or_buy:e.inviteOrBuyText,license_limit:a,num_team_members:l,provisioned_licenses:c,url:w.get_uri().path,link_status:t})),e.setInitialSubChangePlan()}))}else{var M=I.SubscriptionStatus.deserialize(o.serializedSubStatus);a=!0===s?M.finalSubState.totalLicenses:M.subState.totalLicenses,n=e.getRemainingLicensesCount(a,c,e.getInviteCount(),e.state.sentEmails.length),e.props.showTeammateSuggestions&&e.fetchSuggestions(),e.setState({numRemainingLicenses:n,subStatus:M},(function(){var t;e.showInviteLink()&&(t=e.props.inviteLinkUrl?"ON":"OFF"),m.TeamsWebActionsLogger.log("invite_member_open",i.__assign(i.__assign({},e.defaultLoggingExtras),{invite_or_buy:e.inviteOrBuyText,license_limit:a,num_team_members:l,provisioned_licenses:c,url:w.get_uri().path,link_status:t})),e.setInitialSubChangePlan()}))}B.setupCash(u,d),V.dispatchModalOpened()},error:function(t){O.Notify.error(P.intl.formatMessage({id:"C2BKnZ",defaultMessage:"Failed to load modal."})),e.closeModal(n)}})},S.prototype.getRemainingLicensesCount=function(e,t,i,n){return void 0===i&&(i=0),void 0===n&&(n=0),e-t-i-n},Object.defineProperty(S.prototype,"totalLicenses",{get:function(){var e=this.state,t=e.isReseller,i=e.serializedResellerSubSkuSet,n=e.subStatus,s=this.props.isIMMRevampM1On;return t?i.licenseSkus[0].quantity:n?!0===s?n.finalSubState.totalLicenses:n.subState.totalLicenses:void 0},enumerable:!0,configurable:!0}),Object.defineProperty(S.prototype,"viewer",{get:function(){return A.Viewer.get_viewer()},enumerable:!0,configurable:!0}),S.prototype.openOpenTeamJoinOnboardingModal=function(e,t){if(t&&t.length){var i=this.viewer.work_user.id;E.Modal.showInstance(n.default.createElement(l.OpenTeamJoinOnboardingModal,{domains:t,userId:i,userActionToTrack:e}))}},S.prototype.setInitialSubChangePlan=function(){var e=this.props.emails,t=this.state.numProvisionedLicenses,i=this.getInviteCount();i+t>this.totalLicenses?this.updateSubChangePlan(i+t,{emails:e,numProvisionedLicenses:t,totalLicenses:this.totalLicenses},{isLoading:!1}):this.setState({isLoading:!1,isMakingTransitionInfoRequest:!1})},S.prototype.updateSubChangePlan=function(e,n,s){var a=this;void 0===s&&(s={});var o=n.emails,r=n.totalLicenses,l=n.numProvisionedLicenses,c=h.SubscriptionDiff.fromSubscriptionStatus(this.state.subStatus);c.setTotalLicenses(e),this.setState({isMakingTransitionInfoRequest:!0},(function(){var e=Date.now();a.subService.price(c).then((function(t){a.onSubServiceResponse(t,o,r,l),N.isEmpty(s)||a.setState(s),m.TeamsWebActionsLogger.log("invite_member_billing_load_time_new_imm",i.__assign(i.__assign({},a.defaultLoggingExtras),{time_ms:Date.now()-e}))})).catch((function(e){if(!1!==a.props.canChangeTeamBilling)throw e;var i=r-l;O.Notify.error(t.getUpdateSubChangePlanError(i))}))}))},S.prototype.removeInvitedContactsAfterInvites=function(e){var t=this.state,i=t.contacts,n=t.emails,s=i.filter((function(t){return t.email&&!e.includes(t.email)})),a=n.filter((function(t){return!e.includes(t)}));this.setState({contacts:s,emails:a,isLoading:!0}),this.fetchViewModel()},Object.defineProperty(S.prototype,"shouldRenderSendInviteAction",{get:function(){return this.state.isEmailTextInputted},enumerable:!0,configurable:!0}),S.prototype.renderAltAction=function(e){var t=this.state.numRemainingLicenses;return!this.isNCCT&&t&&t<0?this.renderPricingInformation():null},S.prototype.renderForm=function(){var e=this.state,t=e.inviteMessage,i=e.isLoading,s=e.isEmailTextInputted,a=e.emails,o=e.suggestedMembers,r=this.props.showTeammateSuggestions&&o&&!!o.length,l=this.showInviteLink(),m=!r&&!l||s,c=P.intl.formatMessage({id:"KM5lP0",defaultMessage:"Or invite with an email"});return n.default.createElement("form",{className:"invite-modal__form"},l&&n.default.createElement("p",{className:"invite-modal__form_title"},c),this.renderContactsTokenizer(this.viewer.work_user),m&&n.default.createElement("div",null,n.default.createElement("textarea",{className:"invite-modal__message-input",disabled:i,id:"message-input",onChange:this.onMessageChanged,placeholder:P.intl.formatMessage({id:"D4+6Xw",defaultMessage:"Add an optional message"}),value:t}),n.default.createElement("label",{className:"message-input-label",htmlFor:"message-input"},P.intl.formatMessage({id:"N6BsJQ",defaultMessage:"Invite message"}))),r&&n.default.createElement(K.SuggestedMembersCheckboxes,{emails:a,toggleCheckboxCallback:this.checkboxCallback,suggestions:o,disabled:this.state.isMakingTransitionInfoRequest}))},S.prototype.renderPricingInformation=function(){var e=this.state,t=e.numRemainingLicenses,i=e.subChangePlan,s=e.subStatus,a=e.isMakingTransitionInfoRequest,o=e.isEmailInviteJustInTimeLicensingEnabled,r=this.props,l=r.pricingInformationClassName,m=r.isIMMRevampM1On;return s&&i&&i.finalSubState.billingSchedule?a?n.default.createElement("div",{className:l},n.default.createElement(c.LoadingIndicator,{style:c.LoadingIndicator.LoadingIndicatorStyle.SPINNER})):i.tvm||!0===m?n.default.createElement("div",{className:l},n.default.createElement(y.InviteAndBuyText,{className:"invite-modal__invite-and-buy-text u-font-meta",textColor:"faint",textSize:"standard",additionalLicenses:-1*t,isTrial:s.isOnTrial,nextBillingDate:s.formattedNextBillingDate,subChangePlan:i,isEmailInviteJustInTimeLicensingEnabled:o}),o?null:n.default.createElement("a",{href:"#",className:"invite-modal__update-billing-link",onClick:this.onBillingClick},P.intl.formatMessage({id:"tbFeQQ",defaultMessage:"Update billing"}))):null:null},Object.defineProperty(S.prototype,"isNCCT",{get:function(){var e=this.state.subStatus;return!!e&&(e.isOnTrial&&C.Experiment(this.props.ncctVariant).variantIn("V1","V2","V3","V4","V5","V6","V7","V8","V9","V10","V11","V12","V13"))},enumerable:!0,configurable:!0}),S.prototype.fetchSuggestions=function(){var e=this,t=A.Viewer.get_viewer().work_user;t&&(new X.UserApiV2Client).ns("team_experience").rpc("teammate_suggestions/list",void 0,{subjectUserId:t.id}).then((function(t){var i=t.recommended_members.members.slice(0,2);m.TeamsWebActionsLogger.log("admin_recommendations_shown_imm",{num_recommendations:i.length,suggest_id:t.suggest_id,origin:e.props.origin});for(var n=0,s=i;n<s.length;n++){var a=s[n];m.TeamsWebActionsLogger.log("admin_display_recommended_contact",{user_id:a.user_id,team_type:a.team_type,prediction_id:a.prediction_id,origin:"imm_recommendation"})}e.setState({suggestedMembers:i,suggestedMembersSuggestId:t.suggest_id})}))},Object.defineProperty(S.prototype,"growthActSmbGroupsFirst",{get:function(){return C.Experiment(this.props.experiments.growthActSmbGroupsFirst)},enumerable:!0,configurable:!0}),Object.defineProperty(S.prototype,"growthActSmbMWInvites",{get:function(){return C.Experiment(this.props.experiments.growthActSmbMWInvites)},enumerable:!0,configurable:!0}),Object.defineProperty(S.prototype,"growthActSmbWorkflowsPd",{get:function(){return C.Experiment(this.props.experiments.growthActSmbWorkflowsPd)},enumerable:!0,configurable:!0}),S.prototype.sendGroupInvites=function(e,t){this.setState({emails:e,groupIds:t},this.sendMemberInvites)},S.isContactInvalid=function(e){return Boolean(!0===e.invalid||e.invitability_state&&U.InvitabilityWarnings.has(e.invitability_state))},S.countValidContacts=function(e){for(var i=0,n=0,s=e;n<s.length;n++){var a=s[n];t.InviteModal.isContactInvalid(a)||i++}return i},S.prototype.getInviteCount=function(e){if(void 0!==this.props.inviteCount)return this.props.inviteCount;var i=this.state,n=i.emails,s=i.contacts;return void 0!==e?e.length:this.props.isIMMRevampM1On?t.InviteModal.countValidContacts(s):n.length},Object.defineProperty(S.prototype,"inviteModalTitle",{get:function(){var e=this.props,t=e.isAfterLicenseReclaim,i=e.getTitle,n=this.state,s=n.isEmailInviteJustInTimeLicensingEnabled,a=n.numRemainingLicenses;return i?i(s,a):t?P.intl.formatMessage({id:"RwO5iU",defaultMessage:"Invite someone else to the team"}):P.intl.formatMessage({id:"/KqWDm",defaultMessage:"Invite members to your team"})},enumerable:!0,configurable:!0}),S.prototype.shouldShowPostActionPaintedDoorModal=function(){return this.growthActSmbWorkflowsPd.isActive},S.prototype.openPostActionPaintedDoorModal=function(t){return i.__awaiter(this,void 0,void 0,(function(){var n,s;return i.__generator(this,(function(a){switch(a.label){case 0:return[4,new Promise((function(t,i){e(["modules/clean/teams/post_action_painted_door_modal/util"],t,i)})).then(i.__importStar)];case 1:return n=a.sent(),s=n.ActionSource,(0,n.openModal)(s.INVITE,t),[2]}}))}))},S.prototype.render=function(){var e=this,t=this.props,i=t.isOpen,s=t.isFirstTask,o=t.customClass,r=t.inviteLinkUrl,l=t.inviteLinkExpiredTs,m=t.inviteToken,d=t.nextInviteLinkUrl,u=t.csvImportLabel,g=t.onCSVImport,_=t.tieredAdmin,p=t.width,v=void 0===p?U.inviteModalWidth:p,f=t.ncctNoBillingInfo,h=t.isInviteLinkEnabled,b=t.getBody,M=t.evhMaxDays,I=t.isAfterLicenseReclaim,L=t.shouldNotShowAvailableLicenses,S=this.state,y=S.numRemainingLicenses,E=S.emails,C=S.isSubmitting,A=S.memberList,w=S.showSidebar,k=S.sentEmails,x=S.isEmailInviteJustInTimeLicensingEnabled,O=this.showInviteLink(),R=this.inviteModalTitle,F=this.shouldRenderSendInviteAction||!O&&!I;if(this.growthActSmbGroupsFirst.isActive)return n.default.createElement(J.GroupsInviteModal,{open:!!i,isSubmitting:C,memberList:A,handleOnClose:this.closeModal,handleCSVImport:this.closeAndOpenCSVImportModal,sendInvites:function(t,i){return e.sendGroupInvites(t,i)}});if(s&&A.length){return n.default.createElement(j.FirstTaskInviteModal,{open:!!i,tieredAdmin:_,memberList:A,showSidebar:w,emails:E,sentEmails:k,handleOnClose:this.closeModal,onCSVImport:g,handleOnSubmit:this.onPrimaryActionClick,handleCSVImport:this.closeAndOpenCSVImportModal,renderInputForm:this.renderContactsTokenizer,renderSubmitBtn:this.renderPrimaryAction,loggingExtras:this.defaultLoggingExtras,evhMaxDays:M,relaunchModal:function(t){return e.relaunchFirstTaskModal(t)},updateMemberList:function(t){return e.setState({memberList:t})},showImportCSV:!1,growthActSmbMWInvitesActive:this.growthActSmbMWInvites.isActive,isInviteLinkEnabled:h})}var V=O?n.default.createElement(W.InviteLink,{numRemainingLicenses:y,inviteLinkUrl:r,inviteLinkExpiredTs:l,inviteToken:m,nextInviteLinkUrl:d,teamRoutes:this.apiClient.teamRoutes(),emails:E,onInviteLinkCreateStart:this.props.onInviteLinkCreateStart,onInviteLinkCreateEnd:this.props.onInviteLinkCreateEnd,onInviteLinkDelete:this.props.onInviteLinkDelete,onUpdateModal:this.props.onUpdateModal,isTrial:N.get(this.state.subStatus,"isOnTrial"),showAddLicenses:this.props.showAddLicenses,isNcct:this.isNCCT&&(null==f||f),isJustInTimeLicensingEnabled:this.state.isJustInTimeLicensingEnabled}):null,B=n.default.createElement("hr",{className:"invite-modal__invite_link_divider"}),q=n.default.createElement(n.default.Fragment,null,O&&n.default.createElement(n.default.Fragment,null,V,B),b&&this.getInviteCount(E)>0?b(x):this.renderForm(),this.props.linkToImportGsuiteContacts&&n.default.createElement($.ImportContactsLink,{launchImportModal:this.launchImportModal}),this.renderAltAction());return n.default.createElement(a.UtilityModal,{ariaLabel:P.intl.formatMessage({id:"TuViF7",defaultMessage:"Invite Members"}),className:"invite-modal "+o,onPrimaryAction:this.onPrimaryActionClick,onSecondaryAction:this.onSecondaryActionClick,open:!0,overlayClickClose:!0,primaryAction:this.state.isLoading?function(){return n.default.createElement(n.default.Fragment,null)}:this.renderPrimaryAction,secondaryAction:F?this.renderSecondaryAction:void 0,title:this.state.isLoading?"":R,width:v+"px",link:u,onLink:g?this.closeAndOpenCSVImportModal:void 0,overlayClassName:"file-viewer-modal-overlay"},this.state.isLoading&&n.default.createElement("div",{className:"invite-modal__loading-spinner"},n.default.createElement(c.LoadingIndicator,{style:c.LoadingIndicator.LoadingIndicatorStyle.DOTS})),!this.state.isLoading&&n.default.createElement(n.default.Fragment,null,n.default.createElement(D.UXAnalyticsModalTracking,{id:"invite-modal"}),n.default.createElement("div",{className:"invite-modal__content"},!0!==L&&n.default.createElement(T.AvailableLicensesText,{id:"invite-modal__form-license-msg",textColor:"standard",textSize:"standard",numInvitees:this.getInviteCount(),numRemainingLicenses:y,isSelfServe:this.state.isSelfServe,isReseller:this.state.isReseller,resellerContact:this.state.resellerContact,isNCCT:this.isNCCT,isEmailInviteJustInTimeLicensingEnabled:x}),q)))},S.defaultProps={isFirstTask:!1,experiments:{growthActSmbGroupsFirst:"OFF",growthActSmbMWInvites:"OFF",growthActSmbWorkflowsPd:"OFF",expTeamSuccessImportGsuiteMembers:"OFF"},inviteMessage:"",emails:[],pricingInformationClassName:"invite-modal__invite-and-buy--email-invite"},S})(n.default.Component);t.InviteModalView=ee,t.InviteModal=S.requireCssWithComponent(ee,["/static/css/spectrum/index.web-vfl6Z83yw.css","/static/js/spectrum-sharing/index.web-vflLsFCnb.css","/static/css/teams/admin/widgets/invite_modal/invite_modal-vfll_8psB.css","/static/css/notify-vflHqdPvq.css","/static/css/dig-components/index.web-vflK-0oPK.css"])}));
//# sourceMappingURL=invite_modal.min.js-vflnWV6TE.map