define(["require","exports","tslib","react","external/lodash","classnames","comments2/components/thread","comments2/components/comment_stream/comment_stream_post_bar","comments2/components/comment","comments2/components/comment_editor/comment_utils","comments2/components/comment_editor/comment_editor","comments2/components/types","prop-types","comments2/components/comment_stream/unread_pill_wrapper","comments2/components/utils/calc_visibility_data","comments2/components/utils/visibility_aware_scroll_list","comments2/components/comment_editor/draft_utils","spectrum/tooltip","spectrum/icon_global","comments2/components/coachmark_location","comments2/components/comment_stream/cloud_doc_message","comments2/components/comment_stream/first_party_comment_advisory","comments2/components/comment_stream/suggested_comments"],(function(t,e,o,n,a,r,i,s,c,d,m,l,p,u,h,f,C,E,v,g,y,k,_){"use strict";function P(t,e){return t.map((function(t){return{item:t,ref:e[t.id]}})).filter((function(t){var e=t.item,o=t.ref;return!e.read&&o}))}Object.defineProperty(e,"__esModule",{value:!0}),n=o.__importStar(n),r=o.__importDefault(r),d=o.__importStar(d),p=o.__importStar(p);var T=function(){},b=(function(t){function e(){var e=t.apply(this,arguments)||this;return e.threadIdToRef={},e.editorHasChanges={},e.state={content:d.createEmptyContent(),editedComment:void 0,visibilityData:h.createEmptyVisibilityData(),trackedItems:[],coachmarkPositions:{location:null,target:null}},e.onThreadInteractedWith=function(t){var o=e.props,n=o.activeThreadID,a=o.collapsed,r=o.actionsAdapter,i=r.onThreadActivated,s=r.onInteractionWhileCollapsed;a&&s&&s(l.CollapsedInteraction.AVATAR_CLICK),n!==t.id&&i(t)},e.onVisibilityDataChange=function(t){e.setState({visibilityData:t})},e.updateTrackedItems=function(){e.setState({trackedItems:P(e.props.threads,e.threadIdToRef)})},e.createUpdateCoachmarkPosition=function(t){return function(n){e.setState((function(a){var r;return g.areCoachmarkPositionsEqual(e.state.coachmarkPositions[t],n)?null:{coachmarkPositions:o.__assign(o.__assign({},a.coachmarkPositions),(r={},r[t]=n,r))}}))}},e.coachmarkPropsCache={},e.onStartEdit=function(t){e.setState({editedComment:t})},e.onEndEdit=function(){e.setState({editedComment:void 0})},e.onLeaveACommentClick=function(){var t=e.props,o=t.collapsed,n=t.actionsAdapter.onInteractionWhileCollapsed;o&&(n&&n(l.CollapsedInteraction.LEAVE_COMMENT_CLICK),e.focusPrimaryEditor())},e.setDraftRef=function(t){e.draftRef=t},e.setThreadRef=function(t,o){e.threadIdToRef[t]=o&&o.innerRef},e.handleClick=function(t){t.target.classList.contains("sc-comment-stream-threads")&&(e.props.actionsAdapter.onAllThreadsDeactivated(),e.editorHasChanges.PRIMARY||e.props.actionsAdapter.onCommentDraftCancel())},e.onThreadReplyCancel=function(){e.props.actionsAdapter.onAllThreadsDeactivated()},e.onPrimaryEditorCancel=function(){document.activeElement&&e.blurElement(document.activeElement),e.props.actionsAdapter.onCommentDraftCancel(),e.setState({content:d.createEmptyContent(),editedComment:void 0})},e.onPrimaryEditorFocus=function(){e.props.actionsAdapter.onAllThreadsDeactivated(),e.props.actionsAdapter.onEditorFocused()},e.onEditorStateChange=function(t){return function(o){e.editorHasChanges[t]=!C.contentIsEmpty(o)}},e.onPrimaryEditorStateChange=function(t){e.onEditorStateChange("PRIMARY")(t),e.props.actionsAdapter.onEditorStateChange(t)},e.hasUnsavedChanges=function(){var t=e.props.threads;return e.editorHasChanges.PRIMARY||t.some((function(t){return e.editorHasChanges[t.id]||!!t.pending}))||void 0!==e.state.editedComment},e.promptBeforeCloseHandler=function(t){if(e.hasUnsavedChanges())return t.returnValue="",t.preventDefault(),""},e.createThreadActions=function(t){var o=e.props.actionsAdapter,n=o.onCommentDeleted,a=o.onCommentEdited,r=o.onClickTimeCode,i=o.onEditorFocused,s=o.onMentionsQueryUpdated,c=o.onThreadMarkedAsRead,d=o.onThreadMarkedAsUnread,m=o.onThreadRepliedTo,l=o.onThreadResolved,p=o.onThreadUnresolved,u=o.onThreadMouseEnter,h=void 0===u?T:u,f=o.onThreadMouseLeave,C=void 0===f?T:f,E=o.onThreadFocus,v=void 0===E?T:E,g=o.onThreadBlur,y=void 0===g?T:g,k=o.onClickOlderInfo;return{onClickTimeCode:r,onReply:function(e){return m(t,e)},onMarkAsRead:function(){return c(t)},onMarkAsUnread:function(){return d(t)},onResolve:function(){return l(t)},onUnresolve:function(){return p(t)},onMouseEnter:function(){return h(t)},onMouseLeave:function(){return C(t)},onFocus:function(){return v(t)},onBlur:function(){return y(t)},onEditorFocused:function(){return i(t)},onCommentDeleted:function(e){return n(e,t)},onCommentEdited:function(e,o){return a(e,o,t)},onMentionsQueryUpdated:s,onClickOlderInfo:void 0===k?T:k,onEditorStateChange:e.onEditorStateChange(t)}},e.renderPostBar=n.memo((function(t){return n.createElement(s.CommentStreamPostBar,Object.assign({coachmarkTargetProps:e.createCoachmarkProps("target")},t))})),e}return o.__extends(e,t),e.prototype.getChildContext=function(){return{localization:this.props.localization}},e.prototype.createCoachmarkProps=function(t){if(t in this.coachmarkPropsCache)return this.coachmarkPropsCache[t];var e=this.props.coachmarkData||{component:function(){return null}},n=o.__assign(o.__assign({},e),{updatePosition:this.createUpdateCoachmarkPosition(t),positions:this.state.coachmarkPositions});return this.coachmarkPropsCache[t]=n,n},e.prototype.clearCachedCoachmarkProps=function(){this.coachmarkPropsCache={}},e.prototype.componentDidMount=function(){window.addEventListener("beforeunload",this.promptBeforeCloseHandler),this.updateTrackedItems()},e.prototype.componentDidUpdate=function(t){var e=t.threads;this.props.threads!==e&&this.updateTrackedItems()},Object.defineProperty(e.prototype,"sortedThreads",{get:function(){var t=a.partition(this.props.threads,"isThirdParty"),e=t[0],n=t[1];return o.__spreadArrays(e,n)},enumerable:!0,configurable:!0}),e.prototype.componentWillUnmount=function(){window.removeEventListener("beforeunload",this.promptBeforeCloseHandler)},e.prototype.componentWillReceiveProps=function(t){t.coachmarkData!==this.props.coachmarkData&&(this.clearCachedCoachmarkProps(),this.setState({coachmarkPositions:{location:null,target:null}}))},e.prototype.focusPrimaryEditor=function(){this.draftRef&&this.draftRef.focusEditor()},e.prototype.blurElement=function(t){var e;"function"==typeof Event?e=new FocusEvent("blur"):(e=document.createEvent("Event")).initEvent("blur",!0,!0),t.dispatchEvent(e)},Object.defineProperty(e.prototype,"includeEditor",{get:function(){var t=this.props,e=t.isMobile;return t.settings.canShowEditor&&!e},enumerable:!0,configurable:!0}),e.prototype.render=function(){var t=this,e=this.props,o=e.actionsAdapter,a=o.onMentionsQueryUpdated,s=o.onThreadCreated,d=e.className,l=void 0===d?"":d,p=e.commentComponent,h=void 0===p?function(t){return n.createElement(c.Comment,Object.assign({},t))}:p,C=e.editorComponent,P=void 0===C?function(t){return n.createElement(m.CommentEditor,Object.assign({},t))}:C,T=e.enabled,b=e.user,M=e.mentionsMatches,A=e.activeThreadID,S=e.hoverThreadID,I=e.focusedThreadID,D=e.isGoogleDSS,R=e.isMobile,U=e.localization.intl,L=e.collapsed,O=void 0!==L&&L,W=e.coachmarkData,w=e.placeholderOverride,F=e.settings,B=e.showRevisionInfo,H=e.stickerPacks,j=e.thirdPartySource,N=e.initialEditorFocus,V=e.suggestedComments,x=e.hideOpenCloudDocMessage,z=r.default(l,{"sc-comment-stream":!0,"sc-comment-stream-enabled":T,"sc-comment-stream-all-changes-saved":!this.hasUnsavedChanges(),"sc-comment-stream-collapsed":O}),Q=null,q=null,Y=w||U.formatMessage({id:"DkHo17",defaultMessage:"Enter your thoughts here"});if(this.includeEditor)Q=P({a11yEditorLabel:Y,author:b,className:"sc-comment-stream-editor",content:this.state.content,placeholder:Y,postSignalComponent:this.renderPostBar,onCancel:this.onPrimaryEditorCancel,setDraftRef:this.setDraftRef,onPost:s,mentionsMatches:M,onMentionsQueryUpdated:a,onFocus:this.onPrimaryEditorFocus,onEditorStateChange:this.onPrimaryEditorStateChange,stickerPacks:H,shouldFocus:N,tagline:n.createElement(k.FirstPartyCommentAdvisory,{thirdPartySource:j,intl:U})});else if(!R){var G=D?"google_doc":j;Q=x?null:n.createElement(y.CloudDocMessage,{thirdPartySource:G,openWith:this.props.openWith,intl:U})}return O&&(q=n.createElement(E.Tooltip,{positioning:"left"},n.createElement(v.IconGlobal,{className:"sc-leave-a-comment-button",name:"comment",onClick:this.onLeaveACommentClick}))),n.createElement("div",{className:z,onClick:this.handleClick},q,Q,V&&n.createElement(_.SuggestedCommentsInput,{onPost:s,comments:V}),W&&n.createElement(g.CoachmarkLocation,Object.assign({name:g.CoachmarkLocations.ABOVE_COMMENT_STREAM},this.createCoachmarkProps("location"),{positions:this.state.coachmarkPositions})),n.createElement(u.UnreadPillWrapper,{showUnreadPill:this.props.showUnreadPill,visibilityData:this.state.visibilityData,countMsgFn:function(t){return U.formatMessage({id:"fkNHq+",defaultMessage:"{count} unread"},{count:t})},onItemActivated:this.onThreadInteractedWith},n.createElement(f.VisibilityAwareScrollList,{className:"sc-comment-stream-threads",trackedItems:this.state.trackedItems,onVisibilityDataChange:this.onVisibilityDataChange},this.sortedThreads.map((function(e){return n.createElement(i.Thread,{ref:function(o){return t.setThreadRef(e.id,o)},key:e.id,actions:t.createThreadActions(e.id),active:e.id===A,focused:e.id===S||e.id===I,commentComponent:h,editedComment:t.state.editedComment,onThreadInteractedWith:t.onThreadInteractedWith,onCancel:t.onThreadReplyCancel,onStartEdit:t.onStartEdit,onEndEdit:t.onEndEdit,isMobile:R,thread:e,user:b,mentionsMatches:M,showRevisionInfo:B,streamSettings:F,stickerPacks:H,thirdPartySource:t.props.thirdPartySource,openWith:t.props.openWith})})))),W&&n.createElement(g.CoachmarkLocation,Object.assign({name:g.CoachmarkLocations.BELOW_COMMENT_STREAM},this.createCoachmarkProps("location"),{positions:this.state.coachmarkPositions})))},e})(n.PureComponent);e.CommentStream=b,b.childContextTypes={localization:p.object}}));
//# sourceMappingURL=comment_stream.min.js-vflrCUFNt.map