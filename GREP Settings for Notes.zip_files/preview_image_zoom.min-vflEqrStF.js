define(["require","exports","tslib","react","modules/clean/photos/thumbnail_url_util","modules/clean/react/file_viewer/constants","modules/clean/react/file_viewer/full_screen_helpers","modules/clean/react/previews/image_helpers","modules/clean/react/previews/preview_zoom_container","modules/core/i18n","modules/core/notify","file-viewer/preview_image","file-viewer/core","file-viewer/assets-metaserver"],(function(e,t,i,o,n,r,l,a,s,c,d,u,p,v){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o=i.__importDefault(o),a=i.__importStar(a);var f=function(e){return function(t){return[o.default.createElement(u.ImageLayer,i.__assign({key:"image-layer"},e,t))]}};function w(){}var m=p.resolveAsset.bind(null,v.assets),h=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={fitScaleFactor:0,scaleFactor:0,windowWidth:0,windowHeight:0,dragDisabled:!0},t.onWindowResize=function(){t.setState({windowWidth:window.innerWidth,windowHeight:window.innerHeight})},t.logRenderSuccess=function(){t.logFilePreviewEvent(r.EventType.FilePreviewDownloadSucceeded),t.logFilePreviewEvent(r.EventType.FilePreviewRenderSucceeded),t.props.setRenderStatusSuccess()},t.logRenderFailure=function(){t.logFilePreviewEvent(r.EventType.FilePreviewDownloadFailed),t.props.onError&&t.props.onError()},t.viewActualSize=function(){t.setState({scaleFactor:1})},t.zoomIn=function(){t.zoomWithMultiplier(1.25)},t.zoomOut=function(){t.zoomWithMultiplier(.8)},t.onImageDoubleClick=function(){var e=t.state,i=e.scaleFactor,o=e.fitScaleFactor;t.setState({scaleFactor:i===o?1:o})},t.handleFitScaleFactorChange=function(e){t.setState({fitScaleFactor:e,scaleFactor:t.state.scaleFactor||e})},t}return i.__extends(t,e),t.prototype.componentDidMount=function(){this.logFilePreviewEvent(r.EventType.FilePreviewSupportConfirmed),this.logFilePreviewEvent(r.EventType.FilePreviewDownloadAttempted),d.Notify.info(c.intl.formatMessage({id:"kwHYHw",defaultMessage:"Press esc to exit fullscreen"}),3),window.addEventListener("resize",this.onWindowResize),this.onWindowResize()},t.prototype.componentWillReceiveProps=function(e){if(e.thumbnailUrlTmpl!==this.props.thumbnailUrlTmpl){var t=e.filePreviewSession;this.logFilePreviewEvent(r.EventType.FilePreviewSupportConfirmed,t),this.logFilePreviewEvent(r.EventType.FilePreviewDownloadAttempted,t),this.setState({scaleFactor:0,fitScaleFactor:0})}},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onWindowResize),d.Notify.clear()},t.prototype.logFilePreviewEvent=function(e,t){void 0===t&&(t=this.props.filePreviewSession),t&&t.recordEvent(e)},t.prototype.zoomWithMultiplier=function(e){var t=this.state,i=t.scaleFactor,o=t.fitScaleFactor;if(1!==e&&i){var n=.5*Math.round(i*e/.5);Math.abs(n-i)<.5&&(n+=e>1?.5:-.5),this.setState({scaleFactor:Math.min(Math.max(n,o||0),16)})}},t.prototype.render=function(){var e=this.props,t=e.currentMode,i=e.thumbnailUrlTmpl,r=e.contextMenuDisabled,d=e.fileId,v=this.state,h=v.scaleFactor,F=v.fitScaleFactor,S=v.windowWidth,g=v.windowHeight;return o.default.createElement(s.PreviewZoomContainer,{fileCount:this.props.fileCount,fileIndex:this.props.fileIndex,renderZoomControls:!0,onClose:l.exitFullScreen,onFlipNext:this.props.onFlipNext,onFlipPrevious:this.props.onFlipPrevious,onZoomOut:this.zoomOut,onZoomIn:this.zoomIn,onViewActualSize:this.viewActualSize,zoomInDisabled:16===h,zoomOutDisabled:h===F,dragDisabled:this.state.dragDisabled,scaleFactor:h},o.default.createElement(u.PreviewImage,{currentMode:t,previewMetadata:{content:{".tag":"image",default_src:a.getFallbackSrc(i),src_set:a.getSrcSet(i),full_size_src:n.fullSizeUrl(i),thumbnail_url_tmpl:i}},fileMetadata:{file_id:d,file_name:""},fileInfo:{file_id:d,ns_id:0,sj_id:0,bootstrap:{state:"ready"}},data:void 0,filePreviewUiData:{zoomScaleFactor:h,fitScaleFactor:F||0,isSidebarOpen:!1,isFullScreen:!1,isFidelitySurveyVisible:!1},coreFileViewerUiData:{isDocSidebarOpen:!1},fileViewerId:"",onInteractive:w,contextMenuDisabled:r,onRenderSucceeded:this.logRenderSuccess,onRenderFailed:this.logRenderFailure,onDoubleClick:this.onImageDoubleClick,config:p.DEFAULT_CONFIG,dispatch:w,intl:c.intl,width:S,height:g,onFitScaleFactorChanged:this.handleFitScaleFactorChange,layerRenderFn:f,resolveAsset:m}))},t})(o.default.Component);t.PreviewImageZoom=h}));
//# sourceMappingURL=preview_image_zoom.min.js-vflaUuX5r.map