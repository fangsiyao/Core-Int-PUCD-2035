define(["require","exports","tslib","react","modules/clean/viewer","modules/clean/analytics","spectrum/dropdown_menu","spectrum/input","spectrum/tertiary_link","modules/core/i18n","spectrum/button","file-transfers/common/helpers","modules/core/notify","react-intl"],(function(e,i,t,n,s,a,l,o,r,d,c,u,p,m){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),n=t.__importDefault(n);var f=d.intl.formatMessage({id:"dWejC+",defaultMessage:"Choose how long it’ll work"}),g=new Map([[259200,{title:d.intl.formatMessage({id:"ZL/RTm",defaultMessage:"Link will work for 3 days"}),logTitle:"3d"}],[604800,{title:d.intl.formatMessage({id:"tqImHu",defaultMessage:"Link will work for 7 days"}),logTitle:"7d"}],[1209600,{title:d.intl.formatMessage({id:"wTppPX",defaultMessage:"Link will work for 14 days"}),logTitle:"14d"}],[2592e3,{title:d.intl.formatMessage({id:"6iUkVh",defaultMessage:"Link will work for 30 days"}),logTitle:"30d"}]]),_=[259200,604800,1209600,2592e3],v=(function(e){function i(i){var t=e.call(this,i)||this;return t.getDefaultSelectedItem=function(){return t.props.isNcct?2592e3:604800},t.onSelect=function(e){t.setState({selectedItem:e}),a.TeamsWebActionsLogger.log("invite_member_open_expiration_dropdown_pick",{expiration_period:g.get(e).logTitle})},t.onLinkExpirationMenuToggle=function(e){e.isOpen&&a.TeamsWebActionsLogger.log("invite_member_open_expiration_dropdown_open")},t.onCreateLinkClick=function(){var e=t.props.emails;t.setState({isCreating:!0}),t.props.teamRoutes.rpc("create_invite_link",{link_life_span:t.state.selectedItem},{subjectUserId:s.Viewer.get_viewer().work_user.id}).then((function(i){var n,s,l,o;null===(s=(n=t.props).onInviteLinkCreateEnd)||void 0===s||s.call(n,i.invite_link_url,i.time_expired,i.invite_token),null===(o=(l=t.props).onUpdateModal)||void 0===o||o.call(l,e),a.TeamsWebActionsLogger.log("invite_member_open_create_link",{expiration_period:g.get(t.state.selectedItem).logTitle,expires_on:i.time_expired,usage_limit:t.props.numRemainingLicenses,link_url:i.invite_link_url,trial_or_paid:t.props.isTrial?"trial":"paid"})})).catch((function(e){p.Notify.error(d.intl.formatMessage({id:"W7c2ld",defaultMessage:"Failed to create invite link."}))})).finally((function(){t.setState({isCreating:!1})}))},t.onCopyLink=function(e){t.copyInviteLinkToClipboard(e),a.TeamsWebActionsLogger.log("invite_member_open_copy_link",{expiration_period:g.get(t.state.selectedItem).logTitle,link_url:t.props.inviteLinkUrl,expires_on:t.props.inviteLinkExpiredTs,usage_limit:t.props.numRemainingLicenses,trial_or_paid:t.props.isTrial?"trial":"paid"})},t.onCopyLinkClick=function(){var e=t.props.inviteLinkUrl;e&&t.onCopyLink(e)},t.copyInviteLinkToClipboard=function(e){u.copyToClipboard(e),t.isJustInTimeLicensingEnabled?p.Notify.success(d.intl.formatMessage({id:"MeeqZ2",defaultMessage:"Link copied. We'll let you know when someone joins."})):p.Notify.success(d.intl.formatMessage({id:"JXoSfW",defaultMessage:"Link copied. Remember you’ll need 1 license for each member."}))},t.onDeleteClick=function(){var e=t.props,i=e.inviteToken,n=e.emails,l=e.inviteLinkUrl;null!=i&&(t.setState({isDeleting:!0}),t.props.teamRoutes.rpc("delete_invite_link",{invite_token:i},{subjectUserId:s.Viewer.get_viewer().work_user.id}).then((function(){var e,i,s,o;null===(i=(e=t.props).onInviteLinkDelete)||void 0===i||i.call(e),null===(o=(s=t.props).onUpdateModal)||void 0===o||o.call(s,n),a.TeamsWebActionsLogger.log("invite_member_open_delete_link",{link_url:l}),p.Notify.success(d.intl.formatMessage({id:"Z6+Jvy",defaultMessage:"Link deleted. People can no longer join your team with this link."}))})).catch((function(e){p.Notify.error(d.intl.formatMessage({id:"GfBT/H",defaultMessage:"Failed to delete invite link."}))})).finally((function(){t.setState({isDeleting:!1})})))},t.onAddMoreLicensesClick=function(){t.props.showAddLicenses&&(t.props.showAddLicenses(),a.TeamsWebActionsLogger.log("invite_member_open_add_more_licenses"))},t.state={selectedItem:t.getDefaultSelectedItem(),isCreating:!1,isDeleting:!1},t}return t.__extends(i,e),Object.defineProperty(i.prototype,"isInviteLinkDisabled",{get:function(){return this.props.isLoadingNumRemainingLicenses||this.teamNeedsLicensesToInvite},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"teamNeedsLicensesToInvite",{get:function(){return!this.hasAvailableLicenses&&!this.isJustInTimeLicensingEnabled},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"hasAvailableLicenses",{get:function(){return this.props.numRemainingLicenses>0},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"isJustInTimeLicensingEnabled",{get:function(){return this.props.isJustInTimeLicensingEnabled||this.props.isNcct},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"doesInviteLinkExist",{get:function(){return!this.state.isCreating&&null!=this.props.inviteLinkUrl&&null!=this.props.inviteLinkExpiredTs&&null!=this.props.inviteToken},enumerable:!0,configurable:!0}),i.prototype.componentDidUpdate=function(e){this.props.isNcct!==e.isNcct&&this.setState({selectedItem:this.getDefaultSelectedItem()})},i.prototype.getInviteLinkLifeSpanOptions=function(){var e=this;return _.map((function(i){var t=g.get(i).title;return n.default.createElement(l.MenuItem,{key:i,value:i,selected:i===e.state.selectedItem},t)}))},i.prototype.renderAddMoreLicensesCTA=function(){var e=this,i=d.intl.formatMessage({id:"O8AXV+",defaultMessage:"Add more licenses"});return d.intl.formatMessage(m.defineMessage({id:"9puzWn",defaultMessage:"To invite members with a link, <Link>add licenses</Link>."}),{Link:function(t){return n.default.createElement(r.TertiaryLink,{className:"invite-modal__invite_link_inline_action_button",onClick:e.onAddMoreLicensesClick,"aria-label":i},t)}})},i.prototype.getExpirationText=function(){var e=new Date(1e3*this.props.inviteLinkExpiredTs),i=d.intl.formatDate(e,{year:"numeric",month:"short",day:"numeric"});return this.isJustInTimeLicensingEnabled?d.intl.formatMessage({id:"YNXVtr",defaultMessage:"Members can join through this link until {expiration_date_time}."},{expiration_date_time:i}):d.intl.formatMessage({id:"OM+iN6",defaultMessage:"While licenses are available, members can join through this link until {expiration_date_time}."},{expiration_date_time:i})},i.prototype.renderInviteLinkNotCreated=function(){var e=this.state.selectedItem,i=d.intl.formatMessage({id:"Z/+b6+",defaultMessage:"Members can join your team through this link while licenses are available"});this.isJustInTimeLicensingEnabled&&(i=d.intl.formatMessage({id:"xpTFuT",defaultMessage:"Members can join your team through this link"})),this.isInviteLinkDisabled&&(i=this.renderAddMoreLicensesCTA());var t=d.intl.formatMessage({id:"Wod2T4",defaultMessage:"Create link"}),s=this.getInviteLinkLifeSpanOptions();return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"invite-modal__invite_link_action_bar"},n.default.createElement("div",{className:"invite-modal__invite_link_expiration"},n.default.createElement(l.DropdownMenu,{disabled:this.isInviteLinkDisabled,onSelection:this.onSelect,onMenuToggle:this.onLinkExpirationMenuToggle,fullWidth:!0},n.default.createElement(l.DropdownMenuButton,{fullWidth:!0},this.props.isLoadingNumRemainingLicenses?f:g.get(e).title),n.default.createElement(l.Menu,null,s))),n.default.createElement("div",{className:"invite-modal__invite_link_action_button"},n.default.createElement(c.Button,{onClick:this.onCreateLinkClick,variant:"secondary",title:t,disabled:this.isInviteLinkDisabled||this.state.isCreating||this.state.isDeleting},t))),!this.props.isLoadingNumRemainingLicenses&&n.default.createElement("div",{className:"invite-modal__invite_link_secondary_action_bar"},n.default.createElement("span",{className:"invite-modal__invite_link_description"},i)))},i.prototype.renderExistingInviteLink=function(){var e=this.props,i=e.inviteLinkUrl,t=null;null!=e.inviteLinkExpiredTs&&(t=this.isInviteLinkDisabled?this.renderAddMoreLicensesCTA():this.getExpirationText());var s=d.intl.formatMessage({id:"MWfAO9",defaultMessage:"Delete link"}),a=n.default.createElement(r.TertiaryLink,{className:"invite-modal__invite_link_inline_action_button--delete",onClick:this.onDeleteClick,"aria-label":s},s),l=d.intl.formatMessage({id:"RrWeUF",defaultMessage:"Copy link"});return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"invite-modal__invite_link_action_bar"},n.default.createElement(o.Input,{className:"invite-modal__invite_link","aria-label":d.intl.formatMessage({id:"wO7W4g",defaultMessage:"Invite link url"}),value:i,disabled:!0,fullWidth:!0}),n.default.createElement("div",{className:"invite-modal__invite_link_action_button"},n.default.createElement(c.Button,{onClick:this.onCopyLinkClick,variant:"secondary",title:l,disabled:this.isInviteLinkDisabled},l))),!this.props.isLoadingNumRemainingLicenses&&this.doesInviteLinkExist&&n.default.createElement("div",{className:"invite-modal__invite_link_secondary_action_bar"},n.default.createElement("span",{className:"invite-modal__invite_link_description"},t)," ",a))},i.prototype.render=function(){var e=this.doesInviteLinkExist?this.renderExistingInviteLink():this.renderInviteLinkNotCreated();return n.default.createElement("div",null,n.default.createElement("p",{className:"invite-modal__invite_link_header"},d.intl.formatMessage({id:"IsJ4O/",defaultMessage:"Invite with a link"})),e)},i.defaultProps={isLoadingNumRemainingLicenses:!1},i})(n.default.PureComponent);i.InviteLink=v}));
//# sourceMappingURL=invite_link.min.js-vflBIymX1.map