define(["require","exports","modules/clean/react/comments2/video_annotations/annotation_helper","modules/clean/react/comments2/video_annotations/constants","modules/clean/react/comments2/video_annotations/video_preview_event_emitter"],(function(e,t,n,o,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createTimecodeActionsAdapter=function(e,t){var r=t.onEditorFocused;return{onClickTimeCode:function(t,r){if(r&&e){var c=n.VideoAnnotationHelper.unitConvertDomainObjectTimeToSeconds(t);i.videoPreviewEventEmitter.emit(o.EventTypes.SEEK_POSITION_AND_PAUSE,c)}},onEditorFocused:function(){r(),i.videoPreviewEventEmitter.emit(o.EventTypes.PAUSE)}}}}));
//# sourceMappingURL=timecode.min.js-vflz3eA_6.map