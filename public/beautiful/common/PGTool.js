!function(){var t="",e=function(){},i=e.prototype;i.server=window.PGServer;var s=function(){var e=navigator.userAgent;return{ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:-1<e.indexOf("Android")||-1<e.indexOf("Linux"),weixin:-1<e.indexOf("MicroMessenger")}},c=function(){window.PG.setConfig({mode:"dev",channel:"native",appName:"demo",debug:!1})},f=function(e,t,o){var n={jsApiList:[t]};e.checkJsApi(n).then(function(e){var n=0;s().ios&&(n=e.checkResult[t]),s().android&&(n=e.apiResult[t]),o&&o(n)})},h=function(n,e){s().weixin?window.PG.setConfig({mode:"dev",channel:"wx",appName:"zipai",WXRegisterUrl:location.protocol+"//photobazaar.camera360.com/photoBazaar/oauth/getSignature",debug:!1}):c(),""==t?window.PG.ready().then(function(e){t=e,n&&n(e)}):n&&n(t)},d=function(e,n,t,o,i){var r,a,u=(r=new RegExp("(^|&)"+"fromOrigin"+"=([^&]*)(&|$)","i"),null!=(a=window.location.search.substr(1).match(r))?decodeURIComponent(a[2]):null);e.onWebShareDefault({title:u&&s().android?t:n,desc:u&&s().android?n:t,link:o,imgUrl:i,trigger:function(e){},success:function(e){},cancel:function(e){},fail:function(e){}}),e.onWebShareTimeline({title:s().weixin?t:n,desc:s().weixin?n:t,link:o,imgUrl:i,trigger:function(e){},success:function(e){},cancel:function(e){},fail:function(e){}})},u=function(e,n,t,o,i,r){n=n||"",t=t||"",o=o||location.href,i=i||"",r=r&&r.constructor==Array?r.join(","):"qq,wechat,wechatMoments,qqzone,weibo",c();var a="分享";("Netscape"==navigator.appName?navigator.language:navigator.userLanguage).toLowerCase().indexOf("zh")<0&&(a="Share");var u={toolBar:[{display:{text:a},action:"scheme://showShareDialog?chinnel="+r+"&title="+n+"&description="+t+"&url="+encodeURIComponent(o)+"&image="+encodeURIComponent(i)}]};d(e,n,t,o,i),e.configToolBar(u)};i.dealNativeUserInfo=function(e){var n={result:{mobile:"",uid:"",userToken:""}};return"object"!=typeof e&&void 0!==e&&(e=$.parseJSON(e)),s().android&&(null!=e.params?(n.result.uid=e.params.userId,n.result.userToken=e.params.token,null!=e.params.mobile&&(n.result.mobile=e.params.mobile)):null!=e.result.result?(n.result.uid=e.result.result.userId,n.result.userToken=e.result.result.token,null!=e.result.mobile&&(n.result.mobile=e.result.result.mobile)):(n.result.uid=e.result.userId,n.result.userToken=e.result.token,null!=e.result.mobile&&(n.result.mobile=e.result.mobile))),s().ios&&(null!=e.result.uid?(n.result.uid=e.result.uid,n.result.userToken=e.result.userToken):(n.result.uid=e.result.mUserId,n.result.userToken=e.result.mToken),n.result.mobile=e.result.mobile,null!=e.result.mobile&&(n.result.mobile=e.result.mobile)),n},i.shareUrl=function(t,o,i,r,a){h(function(n){s().weixin||f(n,"showShareChannelsMenuActionSheet",function(e){e?u(n,t,o,i,r,a):n.showMenuItems({list:[{name:"share",list:[{name:"wechat"},{name:"wechatMoments"}]}]}).then(function(e){})}),d(n,t,o,i,r)})},i.checkApis=function(n,t){h(function(e){f(e,n,function(e){t&&t(e)})})},i.PGSetReturnBtn=function(e){var t={};t=""==e?{action:"scheme://exit"}:{action:e},h(function(n){f(n,"configReturnBtn",function(e){e&&n.configReturnBtn(t)})})},i.getNativeInfo=function(n){h(function(e){e.getNativeInfo().then(function(e){n&&n(e)})})},i.pgLogin=function(n){h(function(e){e.login("").then(function(e){e.result.constructor===Object&&n&&n(e)})})},i.createSignature=function(n,t){h(function(e){e.createSignature(n).then(function(e){t&&t(e)})})},i.hideToolBar=function(n){var t={toolBar:[]};h(function(e){e.configToolBar(t).then(function(){n&&n()})})},i.configToolBar=function(n,t){h(function(e){e.configToolBar(n).then(function(){t&&t()})})},i.setPageShare=function(n,t,o,i,e){var r,a,u,c,l;s().android&&(h(function(e){d(e,n,t,o,i)}),e=e.constructor==Array?e.join(","):"wechat,wechatMoments,qqzone,weibo",location.href="scheme://showShareDialog?chinnel="+e),s().ios&&(e.constructor!=Array&&(e=["qq","qqzone","wechat","wechatMoments","weibo"]),r=n,a=t,u=o,c=i,l=e,h(function(n){f(n,"showShareChannelsMenuActionSheet",function(e){e&&n.showShareChannelsMenuActionSheet({shareChannels:l}).then(function(e){200==e.status&&n.shareUrl({channel:e.shareChannels,shareData:{title:r,desc:a,link:u,imgUrl:c}})})})}))},i.chooseImage=function(n,t){h(function(e){e.chooseImage({type:"all",imageSize:"w"+n}).then(function(e){t&&t(e)})})},i.navigateBack=function(){h(function(e){e.navigateBack()})},i.uploadImage=function(t,o){h(function(e){e.uploadImage(t).then(function(e){if(s().weixin){var n={media_id:e.serverId};i.server.getTicket(t.uploadUrl,n,function(e){o&&o(e)})}else e.data={serverId:e.serverId},o&&o(e)})})},i.saveImage=function(e,o){h(function(t){t.downloadImage({url:e}).then(function(e){var n={localId:e.localId};t.saveImage(n).then(function(e){o&&o(e)})})})},i.shareImage=function(e,o,i){h(function(t){t.downloadImage({url:e}).then(function(e){var n={localId:e.localId,desc:o};t.shareImage(n).then(function(e){i&&i(e)})})})},window.PGTool=e}();