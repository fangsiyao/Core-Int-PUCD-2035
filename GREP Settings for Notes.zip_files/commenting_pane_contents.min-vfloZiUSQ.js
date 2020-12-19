define(["require","exports","tslib","react","react-redux","external/lodash","modules/clean/react/comments2/components/comments_pane","modules/clean/react/comments2/data/selectors","modules/clean/react/file_viewer_sidebar/utils/ensure_comments","modules/clean/react/css","modules/core/i18n","modules/clean/react/file_viewer/conversions/conversion_utils","modules/core/browser_detection","modules/clean/react/file_viewer/constants","modules/clean/react/file_viewer/logging","comments2/components/comment_stream/suggested_comments"],(function(e,t,n,s,o,r,i,m,a,c,l,u,d,g,p,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var _=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.onSuggestedCommentSubmitted=function(e){p.logUserAction(g.UserAction.AddSuggestedComment,g.UserActionContext.Sidebar,{label:e})},t.prototype.render=function(){var e=new Array(l.intl.formatMessage({id:"AR3sLa",defaultMessage:"Got it, thanks!"}),l.intl.formatMessage({id:"SVbyI1",defaultMessage:"Looks good"}),l.intl.formatMessage({id:"2p5Huq",defaultMessage:"Let’s discuss"})),t=u.shouldShowSuggestedTextComments()&&!d.is_mobile_or_tablet()&&this.props.user?{commentsList:e,onSuggestedCommentSubmitted:this.onSuggestedCommentSubmitted,variant:f.SuggestedCommentVariant.TEXT}:void 0;return this.props.context?s.default.createElement(i.CommentsPane,{fileSidebarDispatch:r.noop,collapsed:!1,isMobile:!1,suggestedComments:t,encryptionOptions:this.props.encryptionOptions}):null},t})((s=n.__importDefault(s)).default.PureComponent);t.UnconnectedCommentingPaneContents=_;var C=o.connect((function(e){return{context:m.getContext(e)}}))(_);t.CommentingPaneContents=c.requireCssWithComponent(a.ensureComments(C),["/static/css/comments2-files2-vflZGvwkK.css"])}));
//# sourceMappingURL=commenting_pane_contents.min.js-vflDFh6bP.map