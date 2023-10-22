"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[97431],{931696:(e,t,a)=>{a.d(t,{Z:()=>g});var i=a(667294),s=a(867631),r=a.n(s),l=a(883119),n=a(563962),o=a(245410),h=a(282802),d=a(802071),c=a(499992),u=a(505204),p=a(886365),m=a(785893);function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}let S=(e,t)=>typeof e!=typeof t||(Array.isArray(t)?e.length!==t.length||t.some((t,a)=>!Array.isArray(e)||t.type!==e[a].type||t.src!==e[a].src):t!==e),b=(e,t)=>t?e.replace("v1.pinimg.com","control"===t?"v3.pinimg.com":"v2.pinimg.com"):e,f=(e,t)=>e[0].src&&t?[{...e[0],src:b(e[0].src,t)}]:e,P=(e,t)=>"string"==typeof e?b(e,t):Array.isArray(e)?f(e,t):e;class v extends i.PureComponent{constructor(...e){super(...e),y(this,"state",{canPlayVideo:!1,isManifestParsed:!1,playbackState:u.Cy.DEFAULT,videoStartTime:this.props.seekTime||0}),y(this,"errorRetryCount",1),y(this,"firstFragBuffered",!1),y(this,"hasPlaybackStarted",!1),y(this,"hasVideoSessionStarted",!1),y(this,"hasVideoSessionEnded",!1),y(this,"hls",null),y(this,"fragStartupTime",{}),y(this,"lastLevelSwitchKbps",null),y(this,"lastStallTime",null),y(this,"lastPauseTime",null),y(this,"logSessionStartOnNextPlay",!1),y(this,"playerId",""),y(this,"videoSessionId",""),y(this,"videoVisibleTime",null),y(this,"playbackPerformance",{canPlayTime:null,detailedErrors:"",downloadedKiloBytes:0,errorCode:0,errorName:"",errorReason:"",hasFatalError:!1,loadStartTime:null,numberOfStalls:0,numberOfSeeks:0,playbackStartTimestamp:null,segments:[],srcString:"string"==typeof this.props.src?b(this.props.src,this.props.quicExpGroup):b(this.props.src[0].src,this.props.quicExpGroup),totalStallDurationMs:0,totalPauseDurationMs:0,videoCreatedTime:null}),y(this,"initializeHls",()=>{this.destroyHls();let{src:e,hlsConfig:t,quicExpGroup:a}=this.props,i=new(r())(t),s=P(e,a);i.loadSource(s),this.videoPlayerRef&&i.attachMedia(this.videoPlayerRef.video),i.on(r().Events.FRAG_BUFFERED,this.handleHlsFragBuffered),i.on(r().Events.FRAG_CHANGED,this.handleHlsFragChanged),i.on(r().Events.FRAG_LOADING,this.handleHlsFragLoading),i.on(r().Events.FRAG_LOADED,this.handleHlsFragLoaded),i.on(r().Events.MANIFEST_PARSED,()=>{this.setState({isManifestParsed:!0})}),i.on(r().Events.LEVEL_SWITCHED,this.handleHlsLevelSwitched),i.on(r().Events.ERROR,this.handleHlsError),this.hls=i}),y(this,"destroyHls",()=>{let{hls:e}=this;e&&e.destroy()}),y(this,"addSegment",e=>{let{segments:t}=this.playbackPerformance,a=t&&t[t.length-1];if(this.hls&&t.length&&a&&a.uri!==e.url){this.updateWatchDurationForCurrentSegment();let a=this.videoPlayerRef&&this.videoPlayerRef.video,i=this.hls&&this.hls.levels||{},s="number"==typeof e.level?i[e.level]:{},r=this.fragStartupTime[e.url],l=-1;r&&r.startLoadTime&&r.endLoadTime&&(l=r.endLoadTime-r.startLoadTime);let n={indicatedKbps:s.bitrate/u.bR,duration:e.duration,level:e.level,lastStartPlayTime:this.getCurrentVideoTime(),numServerAddressChange:-1,observedKbps:this.hls&&this.hls.bandwidthEstimate/u.bR||-1,playbackStartDate:Date.now(),serverAddress:"",sn:e.sn,sourceWidth:s.width,sourceHeight:s.height,startupTimeMs:l,switchBitrateKbps:this.lastLevelSwitchKbps||-1,uri:e.url,viewportWidth:a&&a.clientWidth||-1,viewportHeight:a&&a.clientHeight||-1,watchedDurationMs:0};t.push(n)}}),y(this,"initializeSegments",e=>{let{contextLogData:t={}}=this.props,{is_closeup_video:a=!1}=t,{segments:i}=this.playbackPerformance;if(!i.length){if(!this.hls||!this.videoPlayerRef||!this.videoPlayerRef.video||!e){(0,c.tE)("initializeSegmentsFailed",!0,a);return}if(!i.length&&"number"==typeof e.level){let t=this.videoPlayerRef&&this.videoPlayerRef.video,{levels:a}=this.hls,s="number"==typeof e.level?a[e.level]:{},r=this.fragStartupTime[e.url],l=-1;r&&r.startLoadTime&&r.endLoadTime&&(l=r.endLoadTime-r.startLoadTime),this.lastLevelSwitchKbps=this.hls.bandwidthEstimate/u.bR;let n={indicatedKbps:s.bitrate/u.bR,duration:e.duration,level:e.level,lastStartPlayTime:null,numServerAddressChange:-1,observedKbps:this.hls.bandwidthEstimate/u.bR||-1,playbackStartDate:null,serverAddress:"",sn:e.sn,sourceWidth:s.width,sourceHeight:s.height,startupTimeMs:l,switchBitrateKbps:this.lastLevelSwitchKbps||-1,uri:e.url,viewportWidth:t.clientWidth,viewportHeight:t.clientHeight,watchedDurationMs:0};i.push(n)}}}),y(this,"getCurrentVideoTime",()=>this.videoPlayerRef&&this.videoPlayerRef.video?this.videoPlayerRef.video.currentTime*u.gJ:null),y(this,"handleCanPlayVideo",e=>{let{contextLogData:t={},onReady:a,playing:i}=this.props,{is_closeup_video:s=!1}=t,{canPlayVideo:r}=this.state;(0,c.tE)("handleCanPlayVideo",!0,s,{firstCanPlayEvent:!r,playing:i}),this.playbackPerformance.hasFatalError=!1,r||(this.playbackPerformance.canPlayTime=new Date),this.setState({canPlayVideo:!0}),a&&a(e)}),y(this,"handleEnded",e=>{let{loop:t,onEnded:a}=this.props,{segments:i}=this.playbackPerformance,s=i&&i[i.length-1];t&&this.videoPlayerRef&&this.videoPlayerRef.video?(this.updateWatchDurationForCurrentSegment(),s&&(s.lastStartPlayTime=0),this.fragStartupTime={}):t||this.logPlaybackPerformance(u.$f,{initiator:"videoEnded",loop:t}),this.setState({playbackState:u.Cy.ENDED}),a&&a(e)}),y(this,"handleHlsError",(e,t)=>{var a,i,s,l,n,o,h;let{contextLogData:d={}}=this.props,{is_closeup_video:p=!1}=d;if(this.playbackPerformance.detailedErrors+=`${this.playbackPerformance.detailedErrors.length>0?", ":""}${t.details}`,t.fatal){this.playbackPerformance.hasFatalError=!0,this.playbackPerformance.errorName=t.type,this.playbackPerformance.errorReason=t.details,this.playbackPerformance.errorCode=t.response&&t.response.code?t.response.code:0;let e={errorName:t.type,errorReason:t.details,errorRetryCount:this.errorRetryCount,errorMessage:(null===(i=t.err)||void 0===i?void 0:null===(s=i.message)||void 0===s?void 0:s.slice(0,50))||"unknown",errorResponse:(null===(l=t.response)||void 0===l?void 0:null===(n=l.text)||void 0===n?void 0:n.slice(0,50))||"unknown",playbackState:this.state.playbackState};if((0,c.tE)("fatalError",!0,p,e),this.errorRetryCount>0)switch(this.errorRetryCount-=1,t.type){case r().ErrorTypes.NETWORK_ERROR:if(t.details===r().ErrorDetails.MANIFEST_LOAD_ERROR||t.details===r().ErrorDetails.MANIFEST_LOAD_TIMEOUT||t.details===r().ErrorDetails.MANIFEST_LOAD_PARSING_ERROR){let{src:e,quicExpGroup:t}=this.props,a=P(e,t);null===(o=this.hls)||void 0===o||o.loadSource(a)}else null===(h=this.hls)||void 0===h||h.startLoad();break;case r().ErrorTypes.MEDIA_ERROR:null===(a=this.hls)||void 0===a||a.recoverMediaError()}}this.updateWatchDurationForCurrentSegment(),this.setState({playbackState:u.Cy.FAILED})}),y(this,"handleHlsFragBuffered",(e,t)=>{this.firstFragBuffered||(this.initializeSegments(t.frag),this.firstFragBuffered=!0)}),y(this,"handleHlsFragChanged",(e,t)=>{this.addSegment(t.frag)}),y(this,"handleHlsFragLoading",(e,t)=>{var a;let i=null===(a=t.frag)||void 0===a?void 0:a.url;i&&!this.fragStartupTime[i]&&(this.fragStartupTime[i]={startLoadTime:new Date})}),y(this,"handleHlsFragLoaded",(e,t)=>{var a;t.frag&&t.frag.loaded&&(this.playbackPerformance.downloadedKiloBytes+=t.frag.loaded/u.Fm);let i=null===(a=t.frag)||void 0===a?void 0:a.url;i&&this.fragStartupTime[i]&&this.fragStartupTime[i].startLoadTime&&(this.fragStartupTime[i].endLoadTime=new Date)}),y(this,"handleHlsLevelSwitched",()=>{this.hls&&this.hls.bandwidthEstimate&&(this.lastLevelSwitchKbps=this.hls.bandwidthEstimate/u.bR)}),y(this,"handleLoadedMetadata",()=>{this.setState({playbackState:u.Cy.LOADED_METADATA})}),y(this,"handleLoadStart",()=>{this.playbackPerformance.loadStartTime=new Date,this.setState({playbackState:u.Cy.LOAD_START})}),y(this,"handleLoadedData",()=>{this.setState({playbackState:u.Cy.LOADED_DATA})}),y(this,"handlePlaying",()=>{this.playbackPerformance.hasFatalError=!1,this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.updateStallDuration(),this.updatePauseDuration(),this.setState({playbackState:u.Cy.PLAYING}),this.props.clearSeekTime&&this.props.clearSeekTime()}),y(this,"handleUserPause",e=>{let{onControlsPause:t}=this.props;this.lastPauseTime=new Date,t&&t(e)}),y(this,"handleVideoPause",()=>{this.state.playbackState===u.Cy.STALLING||this.state.playbackState===u.Cy.SEEKING||(this.updateWatchDurationForCurrentSegment(),this.lastPauseTime||this.updateStallDuration()),this.setState({playbackState:u.Cy.PAUSED})}),y(this,"handleSeeking",()=>{this.playbackPerformance.numberOfSeeks+=1;let{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&(t.lastStartPlayTime=null),this.state.playbackState!==u.Cy.ENDED&&this.setState({playbackState:u.Cy.SEEKING})}),y(this,"handleStalled",()=>{null===this.lastStallTime&&this.state.playbackState!==u.Cy.ENDED&&(this.lastStallTime=new Date,this.playbackPerformance.numberOfStalls+=1),this.setState({playbackState:u.Cy.STALLING})}),y(this,"handleTimeUpdate",e=>{let{onTimeChange:t}=this.props;t&&t(e),this.state.playbackState===u.Cy.PLAYING&&(this.updateWatchDurationForCurrentSegment(),this.setLastSegmentStartPlayTime())}),y(this,"resetPlaybackMetrics",()=>{this.hasPlaybackStarted=!1,this.hasVideoSessionStarted=!1,this.hasVideoSessionEnded=!0,this.lastLevelSwitchKbps=null,this.lastStallTime=null,this.lastPauseTime=null,this.videoSessionId="",this.videoVisibleTime=null,this.logSessionStartOnNextPlay=!1;let e=this.playbackPerformance.segments[this.playbackPerformance.segments.length-1],t={...e,lastStartPlayTime:null,playbackStartDate:null,switchBitrateKbps:-1,watchedDurationMs:0};this.playbackPerformance.detailedErrors="",this.playbackPerformance.downloadedKiloBytes=0,this.playbackPerformance.errorCode=0,this.playbackPerformance.errorName="",this.playbackPerformance.errorReason="",this.playbackPerformance.hasFatalError=!1,this.playbackPerformance.numberOfStalls=0,this.playbackPerformance.numberOfSeeks=0,this.playbackPerformance.playbackStartTimestamp=null,this.playbackPerformance.totalStallDurationMs=0,this.playbackPerformance.segments=[t]}),y(this,"setLastSegmentStartPlayTime",()=>{let{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&null===t.lastStartPlayTime&&(t.lastStartPlayTime=this.getCurrentVideoTime())}),y(this,"setLastSegmentPlaybackStartDate",()=>{let{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&null===t.playbackStartDate&&(t.playbackStartDate=Date.now())}),y(this,"setPlaybackStartTime",()=>{this.hasPlaybackStarted||(this.playbackPerformance.playbackStartTimestamp=Date.now(),this.hasPlaybackStarted=!0)}),y(this,"setVideoPlayerRef",e=>{let{setVideoRef:t}=this.props;if(e&&(t&&t(e),this.videoPlayerRef=e,this.videoPlayerRef.video)){let e=this.videoPlayerRef.video;e.addEventListener("loadedmetadata",this.handleLoadedMetadata),e.addEventListener("loadeddata",this.handleLoadedData),e.addEventListener("pause",this.handleVideoPause),e.readyState>=3&&(this.setState({canPlayVideo:!0}),this.playbackPerformance.canPlayTime=new Date)}}),y(this,"updateStallDuration",()=>{null!==this.lastStallTime&&(this.playbackPerformance.totalStallDurationMs+=new Date-this.lastStallTime,this.lastStallTime=null)}),y(this,"updatePauseDuration",()=>{if(null!==this.lastPauseTime){let{lastPauseTime:e}=this;this.playbackPerformance.totalPauseDurationMs+=new Date-e,this.lastPauseTime=null}}),y(this,"updateWatchDurationForCurrentSegment",()=>{let{segments:e}=this.playbackPerformance,t=e&&e[e.length-1],a=t?t.lastStartPlayTime:null,i=this.getCurrentVideoTime();if(t&&null!==a&&"number"==typeof i&&"number"==typeof a){let e=i-a;e>0&&(t.watchedDurationMs+=e,t.lastStartPlayTime=null)}}),y(this,"logPlaybackPerformance",(e,t)=>{let{contextLogData:a={},userId:i,isAutoPlay:s,logContextEvent:r,preload:l}=this.props,{is_closeup_video:n=!1}=a,{canPlayTime:o,detailedErrors:h,downloadedKiloBytes:d,errorCode:p,errorName:m,errorReason:y,hasFatalError:S,playbackStartTimestamp:b,totalPauseDurationMs:f,totalStallDurationMs:P,segments:v,srcString:g,loadStartTime:k,numberOfStalls:D,numberOfSeeks:T}=this.playbackPerformance,E=this.videoPlayerRef&&this.videoPlayerRef.video,w=e===u.DR,R=w&&!this.hasVideoSessionStarted,L=!w&&!this.hasVideoSessionEnded&&this.hasVideoSessionStarted;if(this.hls&&E&&(R||L)){var C;let R=-1;o&&k&&(R=o>k?o-k:0);let L=-1;o&&this.videoVisibleTime&&(L=o>this.videoVisibleTime?o-this.videoVisibleTime:0),w&&(this.videoSessionId=(0,u.Y7)(i),this.playerId=this.playerId||(0,u.EB)());let _={autoplaying:s,averageVideoKbps:-1,detailedErrors:h,downloadedKiloBytes:d,isCellular:!1,errorCode:p,errorName:m,errorReason:y,fatalError:S,nativeVideoDurationMs:E.duration*u.gJ||-1,numberOfStalls:D,numberOfSeeks:T,overallPausedDurationMs:f,overallBufferDurationMs:P,overallWatchedDurationMs:-1,rebufferRate:-1,playbackSessionId:this.videoSessionId,playbackStartTimestamp:b||-1,segments:[],sessionMark:e,screenPixelScale:null!==(C=window)&&void 0!==C&&C.devicePixelRatio?window.devicePixelRatio:-1,startupPlayerWidth:E.clientWidth,startupPlayerHeight:E.clientHeight,startupTimeMs:R,startupLatencyMs:L,startupVariantKbps:-1,startupVariantWatchedDurationMs:-1,startupVariantWidth:E.videoWidth,startupVariantHeight:E.videoHeight,videoUrl:g,wasVideoPreloaded:"auto"===l};if(!w&&v.length){let{levels:e}=this.hls,t=v[0];this.updateWatchDurationForCurrentSegment(),this.updateStallDuration();let a=v.reduce((t,a)=>{if(!a||"number"!=typeof a.level||!e||!(e.length>0))return t;{let i=(e[a.level]||{}).bitrate,s=a.watchedDurationMs;return t+i*(s||0)/u.gJ}},0),i=v.reduce((e,t)=>e+(t.watchedDurationMs||0),0),s=null,r=0,l=0;do r+=v[l].watchedDurationMs,s=s||v[l].level,l+=1;while(l<v.length&&v[l].level===s)_.startupVariantKbps=t.indicatedKbps,_.startupVariantWatchedDurationMs=r,_.startupVariantWidth=t.sourceWidth,_.startupVariantHeight=t.sourceHeight,_.startupPlayerWidth=t.viewportWidth,_.startupPlayerHeight=t.viewportHeight,_.overallWatchedDurationMs=i,i>0?(_.averageVideoKbps=a/(i/u.gJ),_.rebufferRate=this.playbackPerformance.totalStallDurationMs/i):0===i&&(_.averageVideoKbps=-1,_.rebufferRate=-1,_.errorName="invalid_watch_duration"),_.segments=v}else _.errorName="invalid_watch_duration";(0,c.ZP)(_,!0,n,{playbackState:this.state.playbackState,...t});let{clientTrackingParams:A,component:V,durationNs:F,element:M,objectId:H,pairId:O,viewData:I,view:N,viewParameter:W,...$}=a;r({aux_data:{...$,is_closeup_video:n,playback_session_id:this.videoSessionId},clientTrackingParams:A,component:V,duration_ns:F,element:M,event_data:{videoPerformanceData:_},event_type:3606,object_id_str:H,pair_id:O,view_data:I,view_parameter:W,view_type:N}),w?(this.hasVideoSessionStarted=!0,this.hasVideoSessionEnded=!1):this.resetPlaybackMetrics(),(0,c.tE)(w?"sessionStart":"sessionEnd",!0,n,{playbackState:this.state.playbackState,...t})}})}componentDidMount(){let{contextLogData:e={},playing:t}=this.props,{is_closeup_video:a=!1}=e;this.playbackPerformance.videoCreatedTime=new Date,this.initializeHls(),(0,c.tE)("videoMounted",!0,a),t&&(this.videoVisibleTime=new Date,this.logPlaybackPerformance(u.DR,{initiator:"mount"}))}componentDidUpdate(e){let{loop:t,playing:a,src:i,visible:s,appInFocus:r,seekTime:l}=this.props;l&&l!==e.seekTime&&this.setState({videoStartTime:l}),S(e.src,i)&&this.initializeHls(),e.appInFocus&&!r&&(this.logPlaybackPerformance(u.$f,{initiator:"update",loop:t}),this.logSessionStartOnNextPlay=!0),e.visible&&!1===s&&(this.logSessionStartOnNextPlay=!1,this.updatePauseDuration(),this.logPlaybackPerformance(u.$f,{initiator:"update",loop:t})),!1===e.visible&&!0===s&&(this.videoVisibleTime=this.videoVisibleTime||new Date,a?(this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.logPlaybackPerformance(u.DR,{initiator:"update"})):this.logSessionStartOnNextPlay=!0),a&&r&&this.logSessionStartOnNextPlay&&(this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.logPlaybackPerformance(u.DR,{initiator:"update"}),this.logSessionStartOnNextPlay=!1)}componentWillUnmount(){let{loop:e}=this.props;this.updatePauseDuration(),this.logPlaybackPerformance(u.$f,{initiator:"unmount",loop:e}),this.destroyHls()}render(){let{aspectRatio:e,backgroundColor:t,captions:a,controls:i,loop:s,loopOverride:r,objectFit:n,onDurationChange:o,onFullscreenChange:h,onLoadedChange:d,onControlsPlay:c,onPlayheadDown:u,onPlayheadUp:p,onSeek:y,onVolumeChange:S,playbackRate:b,playing:f,playsInline:v,poster:g,preload:k,quicExpGroup:D,src:T,volume:E}=this.props,{canPlayVideo:w,isManifestParsed:R,videoStartTime:L}=this.state,C=P(T,D);return(0,m.jsx)(l.nk,{aspectRatio:e,backgroundColor:t,captions:a,controls:i,loop:void 0===r?s:r,objectFit:n,onDurationChange:o,onEnded:this.handleEnded,onFullscreenChange:h,onLoadStart:this.handleLoadStart,onLoadedChange:d,onControlsPause:this.handleUserPause,onControlsPlay:c,onPlaying:this.handlePlaying,onPlayheadDown:u,onPlayheadUp:p,onReady:this.handleCanPlayVideo,onSeek:y,onSeeking:this.handleSeeking,onStalled:this.handleStalled,onTimeChange:this.handleTimeUpdate,onVolumeChange:S,onWaiting:this.handleStalled,playbackRate:b,onPlay:()=>{},onPlayError:()=>{},playing:R&&w&&f,playsInline:v,poster:g,preload:k,ref:this.setVideoPlayerRef,src:C,startTime:L,volume:E})}}let g=(0,i.memo)(function(e){let{country:t,isAuthenticated:a,isBot:i,isSocialBot:s,unauthId:r,userAgent:l}=(0,h.B)(),u=(0,n.Z)(),y=(0,d.Z)(),{browserName:S,browserVersion:b,isMobile:f}=l,{contextLogData:P={}}=e,{is_closeup_video:g=!1,view:k,viewParameter:D}=P,{checkExperiment:T}=(0,o.F)(),E=null;a&&(E=T("web_video_quic").group.length?T("web_video_quic").group:null);let{appUI:w}=(0,p.I)(),R=T("web_video_fail_to_start_fix").anyEnabled?w.appInFocus:e.appInFocus;return(0,c.r$)({browserName:S,browserVersion:b,country:t,isAuthenticated:a,isBot:i,is_closeup_video:g,isMobile:f,isSocialBot:s,view:k,viewParameter:D}),(0,m.jsx)(v,{...e,userId:y.id||r,appInFocus:R,quicExpGroup:E,logContextEvent:u})})},499992:(e,t,a)=>{a.d(t,{ZP:()=>u,r$:()=>d,tE:()=>c});var i=a(40660),s=a(768337),r=a(505204);let l=["isCellular","videoUrl","sessionMark"],n={},o="",h=e=>e<0?"negative":0===e?"zero":e<200?"xs":e<400?"s":e<600?"m":e<800?"l":e<1e3?"xl":e<1200?"xxl":"over1200",d=e=>{let{browserName:t,browserVersion:a,country:i,isAuthenticated:r,isBot:l,isMobile:h,isSocialBot:d,view:c="unknown",viewParameter:u="unknown"}=e;o=d&&"socialBot"||l&&"bot"||"nonbot";let p=(0,s.Z)(i);n={browserName:t,browserVersion:(null==a?void 0:a.split(".")[0])||"0",isAuthenticated:r,isMobile:h,region:p,view:c,viewParameter:u}};function c(e,t,a,s={}){let r={...s,...n},l=`web.video.${t?"hls":"nonHls"}.${o}.${a?"closeup":"nonCloseup"}.${e}`;"nonbot"===o&&i.Z.increment(l,1,r)}function u(e,t,a,s={}){let d=a?"closeup":"nonCloseup",c=t?"hls":"nonHls",u=e.sessionMark===r.DR?"sessionStart":"sessionEnd",p={...s,...n};if("nonbot"===o&&(Object.entries(e).forEach(([t,a])=>{let s=`web.video.${c}.${o}.${d}.${u}.${t}`,r=parseInt(a,10),n="number"==typeof r?r:-1;if(!l.includes(t)){if(t.includes("fatalError")&&!0===a){let{errorCode:t,errorName:a,errorReason:r}=e;i.Z.increment(s,1,{errorCode:t,errorName:a,errorReason:r,...p})}else if(t.includes("Width")||t.includes("Height")){let e=h(n);i.Z.increment(s,1,{dimensionBucket:e,...p})}else if("numberOfStalls"===t){let e=a;n>1e3?e="over1000":n>10?e="over10":n<0&&(e="negative"),i.Z.increment(s,1,{numberOfStalls:e,...p})}else"screenPixelScale"===t?i.Z.increment(s,1,{screenPixelScale:a||-1,...p}):n>=0?(0===n&&i.Z.increment(`${s}.zero`,1,p),i.Z.timing(s,n,1)):n<0&&i.Z.increment(`${s}.negative`,1,p)}}),e.sessionMark!==r.DR)){let{rebufferRate:t,screenPixelScale:a,startupLatencyMs:s,startupVariantWidth:r,startupPlayerWidth:l}=e,n=`web.video.${c}.${o}.${d}.${u}`;"number"==typeof r&&"number"==typeof l&&"number"==typeof a&&i.Z.increment(`${n}.upscaled.${1.5*r>a*l?"good":"bad"}`,1,p),"number"==typeof s&&i.Z.increment(`${n}.startupLatency.${s<500?"good":"bad"}`,1,p),"number"==typeof t&&i.Z.increment(`${n}.rebufferRate.${t<.01?"good":"bad"}`,1,p)}}},714557:(e,t,a)=>{a.d(t,{V:()=>i,i:()=>s});let i=2,s=[0,.01,.02,.03,.04,.05,.06,.07,.08,.09,.1,.11,.12,.13,.14,.15,.16,.17,.18,.19,.2,.21,.22,.23,.24,.25,.26,.27,.28,.29,.3,.31,.32,.33,.34,.35,.36,.37,.38,.39,.4,.41,.42,.43,.44,.45,.46,.47,.48,.49,.5,.51,.52,.53,.54,.55,.56,.57,.58,.59,.6,.61,.62,.63,.64,.65,.66,.67,.68,.69,.7,.71,.72,.73,.74,.75,.76,.77,.78,.79,.8,.81,.82,.83,.84,.85,.86,.87,.88,.89,.9,.91,.92,.93,.94,.95,.96,.97,.98,.99,1]}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/97431-c9995349e8640a38.mjs.map