function getFormData(t){var a=new FormData;for(var e in t)a.append(e,t[e]);return a}function getDataStr(t){var a="";for(var e in t)a+=e+"="+t[e]+"&";return a}function getPlayerList(t,a){utils.server("beautiful/player/list",getDataStr(t),function(t){200==t.status&&t.data&&a&&a(t.data)},"POST")}function getPlayerSearchList(t,a){utils.server("beautiful/search",getDataStr(t),function(t){200==t.status&&a&&a(t.data)},"GET")}function playerJoin(t,a){utils.join("beautiful/player/join",getFormData(t),function(t){a&&a(t)},"POST")}function getMessageList(t,a){utils.server("beautiful/message/list",getDataStr(t),function(t){200==t.status&&a&&a(t.data)},"GET")}function sendMessage(t,a){utils.server("beautiful/message/send",getDataStr(t),function(t){200==t.status&&a&&a(t.data)},"GET")}function dotStar(t,a){utils.server("beautiful/like",getDataStr(t),function(t){a&&a(t)},"GET")}function getAccToken(t,a){utils.server("/wechat/accToken",getDataStr(t),function(t){a&&a(t)},"POST")}function getSig(e,t){getAccToken(null,function(t){var a="http://op.ekaogo.com/wechat/accToken/sig?url="+encodeURIComponent(e);$.ajax({url:a,type:"GET",processData:!1,dataType:"jsonp",async:!1,contentType:"application/jsonp; charset=utf-8",jsonp:"jsonpCallback",data:{}}).done(function(t){wx.config({debug:!1,appId:t.data.appId,timestamp:t.data.timestamp,nonceStr:t.data.nonceStr,signature:t.data.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage"]})}).fail(function(t){}).always(function(){})})}