$(document).ready(function(){!function(a){function e(a){String.prototype.filterUrl=function(){return this.replace(/#\//,"")},this.config=a,this.init=function(){var a=this;a._init(),window.addEventListener("hashchange",function(){a._init()})}}e.prototype={_init:function(){for(var a=location.hash.filterUrl().split("/"),e=document.getElementsByClassName("page"),t=0;t<e.length;t++)e[t].style.display="none";document.getElementById(a[0]||"home").style.display="block"}},new e([{url:"",templateId:"home"},{url:"join",templateId:"join"},{url:"search",templateId:"search"},{url:"detail",templateId:"detail"}]).init(),a&&a()}(function(){var u=this;function d(r){$(".players-wrapper").html("");for(var a=0;a<r.length;a++){for(var e=r[a].type=0,t="./resource/images/player_start_c.png",s=r[a],i=0;i<u.playerStaredList.length;i++){u.playerStaredList[i]==s.playerId&&(e=r[a].type=1,t="./resource/images/player_start_o.png")}$(".players-wrapper").append('                    <div class="player-wrapper hover-btn" data-playerid="'+s.playerId+'" data-type="'+e+'">                        <div class="player-avatar-wrapper">                            <img src="'+s.picUrl+'" class="player-avatar">                        </div>                        <div class="player-info">                            <div class="player-star-wrapper">                                <img class="player-start hover-btn" src="'+t+'"                                data-playerid="'+s.playerId+'" data-type="'+e+'">                                <span class="player-votes">'+s.like+'</span>                            </div>                            <span class="player-name">'+s.name+'</span>                            <span class="player-company">'+s.company+'</span>                            <span class="player-post">'+s.job+"</span>                        </div>                    </div>")}$(".player-wrapper").unbind("click"),$(".player-wrapper").click(function(a){for(var e,t=0;t<r.length;t++){r[t];a.currentTarget.dataset.playerid==r[t].playerId&&(e=r[t])}e.playerId&&(y(e),utils.goTo("detail"))}),$(".player-start").unbind("click"),$(".player-start").click(function(a){if(a.stopPropagation(),a.target==this){for(var e,t=0;t<r.length;t++){r[t];a.currentTarget.dataset.playerid==r[t].playerId&&(e=r[t])}e.playerId&&p(e)}})}function a(){utils.showLoading(),getPlayerList({sp:this.playerListSp,num:12},function(a){u.playerStaredList=a.myLike,0<a.players.length?(u.playerListSp=a.sp,u.playerList.push(a.players),d(a.players),e()):0==a.players.length&&(e(),0<u.playPage&&u.playPage--)})}function e(){0==u.playPage?$(".pagination-previous").hide():$(".pagination-previous").show(),u.playerList[u.playPage].length<12?$(".pagination-next").hide():$(".pagination-next").show()}function t(){var a=$(".players-wrapper").offset().top-15;$("html,body").animate({scrollTop:a},300)}function r(e){getMessageList({sp:u.mesListSp,num:20},function(a){0<a.items.length&&(u.mesListSp=a.sp,function(a,e){a&&$(".message-wrapper").html("");for(var t=0;t<e.length;t++){var r=e[t];$(".message-wrapper").append('                    <div class="message">'+r.content+"</div>                ")}}(e,a.items))})}this.playPage=0,this.playerList=[],this.playerStaredList=[],this.playerListSp=0,a(),$(".pagination-previous").click(function(){t(),u.playPage--,e(),d(u.playerList[u.playPage])}),$(".pagination-next").click(function(){t(),u.playPage++,u.playPage<u.playerList.length?(d(u.playerList[u.playPage]),e()):a()}),this.mesListSp=0,r();var s=0,i=0,n=$(".message-wrapper").height();function l(){u.searchRequestLock||($(".search-tips").html("加载中..."),u.searchRequestLock=!0,getPlayerSearchList({keyword:u.searchName,sp:u.searchSp,num:10},function(a){utils.hideLoading(),u.searchRequestLock=!1,0<a.items.length?(u.searchSp=a.sp,a.items.length<10?$(".search-tips").html("没有更多了"):$(".search-tips").html("加载中..."),function(a){u.searchList=u.searchList.concat(a);for(var e=0;e<a.length;e++){var t=a[e];$(".search-list-wrapper").append('                        <div class="search-item" data-playerid="'+t.playerId+'">                        <img src="'+t.picUrl+'" class="search-player-avatar">                        <span class="search-player-name">'+t.name+'</span>                        <span class="search-player-star">                        <span class="search-player-star-num">'+t.like+"</span>人喜欢</span>                    </div>")}$(".search-item").unbind("click"),$(".search-item").click(function(a){for(var e,t=0;t<u.searchList.length;t++)if(u.searchList[t],a.currentTarget.dataset.playerid==u.searchList[t].playerId)for(var r=(e=u.searchList[t]).type=0;r<u.playerStaredList.length;r++)u.playerStaredList[r].playerId==e.playerId&&(e.type=1);e&&(y(e),utils.goTo("detail"))})}(a.items)):0==u.searchSp?$(".search-tips").html("没有搜索到诶～"):$(".search-tips").html("没有更多了")}))}function y(a){$(".detail-avatar").attr("src",a.picUrl),$(".detail-info-star-btn").attr("src","1"==a.type?"./resource/images/player_start_o.png":"./resource/images/player_start_c.png"),$(".detail-name").html(a.name),$(".detail-company").html(a.company),$(".detail-job").html(a.job),a.playerId==u.ownPlayer.playerId?($(".detail-contact").html(a.contact),$(".detail-info-contact-wrapper").show()):$(".detail-info-contact-wrapper").hide(),$(".detail-info-star-num").html(a.like),$(".detail-info-star-btn").unbind("click"),$(".detail-info-star-btn").click(function(){p(a)})}function p(c,o){var h=c.playerId;"1"==(o=c.type)?utils.showLoading("取消点赞..."):utils.showLoading("点赞中..."),dotStar({playerId:h,type:"1"==o?0:1},function(a){if(200==a.status){for(var e,t,r=0;r<u.playerList.length;r++)for(var s=u.playerList[r],i=0;i<s.length;i++)s[i].playerId==h&&(t=i,e=r);var n=c.like,l=0;if("0"==o){var p=!1;for(i=0;i<u.playerStaredList.length;i++)u.playerStaredList[i]==h&&(p=!0);p||u.playerStaredList.push(h),n++,l=1}else{for(i=0;i<u.playerStaredList.length;i++)u.playerStaredList[i]==h&&u.playerStaredList.splice(i,1);n--,l=0}h==u.ownPlayer.playerId&&(u.ownPlayer.like=n,u.ownPlayer.type=l,g()),u.playerList[e]&&u.playerList[e][t]?(u.playerList[e][t].like=n,u.playerList[e][t].type=l,y(u.playerList[e][t]),d(u.playerList[u.playPage])):(c.like=n,c.type=l,y(c))}else 10002==a.status?($(".star-tips-wrapper").fadeIn(200),setTimeout(function(){$(".star-tips-wrapper").fadeOut(200)},1e3)):utils.showError(a.message)})}$(".message-wrapper").scroll(function(){s=$(this)[0].scrollHeight,i=$(this)[0].scrollTop,s-20<=i+n&&r()}),$(".send-btn").click(function(){var a=$(".send-input").val();a&&(utils.showLoading("发表中..."),sendMessage({content:a},function(){u.mesListSp=0,$(".send-input").val(""),r(!0)}))}),$("#home .search-btn").click(function(){u.searchSp=0,u.searchName=$(".search-input").val(),$(".search-input").val(u.searchName),u.searchName?(utils.showLoading("搜索中..."),$(".search-list-wrapper").html(""),u.searchList=[],utils.goTo("search"),u.searchCanLoadingMore=!0,l()):utils.showError("请输入名字")}),$(".join-btn").click(function(){utils.goTo("join")}),this.searchList=[],this.searchName,this.searchSp=0,this.searchRequestLock=!1,this.searchCanLoadingMore=!1,$(window).scroll(function(){$(document).scrollTop(),$(document).scrollTop()>=$(document).height()-$(window).height()-30&&u.searchCanLoadingMore&&l(u.searchName)}),window.addEventListener("hashchange",function(){"#/search"==window.location.hash?u.searchCanLoadingMore=!0:u.searchCanLoadingMore=!1}),$(".search-input-cancel").click(function(){$(".search-input").val(""),$(".search-input").focus()}),$(".search-cancel-btn").click(function(){$(".search-input").val(""),$(".search-list-wrapper").html(""),u.searchList=[],utils.back()}),$("#search .search-btn").click(function(){u.searchSp=0,u.searchName=$(".page3 .search-input").val(),u.searchName?(u.searchRequestLock=!1,$(".search-list-wrapper").html(""),u.searchList=[],l()):utils.showError("请输入名字")}),$(".page3 .search-input").focus(function(){u.searchRequestLock=!0,$(".search-list-wrapper").html(""),u.searchList=[],$(".search-input-cancel").show(),$(".search-tips").html("搜索最美同事，为他/她点赞")}),$(".page3 .search-input").blur(function(){});var c={};function o(a){for(var e,t=0,r=$.trim(a.val()),s=0;s<r.length;s++)1==(e=r.charAt(s),!/[u00-uff]/.test(e))?t+=2:t+=1;return t=Math.ceil(t)}function g(){var e=u.ownPlayer;$(".own-wrapper").html("");var a="./resource/images/player_start_c.png";"1"==e.type&&(a="./resource/images/player_start_o.png"),$(".own-wrapper").append('                <div class="own-player-wrapper hover-btn" data-playerid="'+e.playerId+'" data-type="'+e.type+'">                    <div class="player-avatar-wrapper">                        <img src="'+e.picUrl+'" class="player-avatar">                    </div>                    <div class="player-info">                        <div class="player-star-wrapper">                            <img class="own-player-start hover-btn" src="'+a+'"                            <span class="player-votes">'+e.like+'</span>                        </div>                        <span class="player-name">'+e.name+'</span>                        <span class="player-company">'+e.company+'</span>                        <span class="player-post">'+e.job+"</span>                    </div>                </div>"),$(".own-player-wrapper").unbind("click"),$(".own-player-wrapper").click(function(a){e.playerId&&(y(e),utils.goTo("detail"))}),$(".own-player-start").unbind("click"),$(".own-player-start").click(function(a){a.stopPropagation(),a.target==this&&e.playerId&&p(e)})}(new FileRead).changeFile("fileUpload",800,function(a){utils.showLoading(),setTimeout(function(){$(".join-cover-wrapper").show(),utils.hideLoading();try{c=new window.PGClip({wrap:"cutBox",image:"cutImg",src:a.src})}catch(a){}},1e3)}),$(".join-choose-btn").click(function(){c.draw(600,function(a){$(".addPic-wrapper").html('                    <img src="'+a+'" alt="" class="added-pic">                '),$(".join-cover-wrapper").hide()})}),$(".add-done-btn").click(function(){var a=$(".join-input-name").val(),e=$(".join-input-company").val(),t=$(".join-input-job").val(),r=$(".join-input-contact").val(),s=$(".added-pic").attr("src");if(a)if(16<o($(".join-input-name")))utils.showError("姓名长度过长");else if(e)if(16<o($(".join-input-company")))utils.showError("公司名长度过长");else if(t)if(16<o($(".join-input-job")))utils.showError("职位长度过长");else if(r)if(s){var i=function(a){var e;e=0<=a.split(",")[0].indexOf("base64")?atob(a.split(",")[1]):unescape(a.split(",")[1]);for(var t=a.split(",")[0].split(":")[1].split(";")[0],r=new Uint8Array(e.length),s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return new Blob([r],{type:t})}(s);utils.showLoading("报名中..."),playerJoin({name:a,company:e,job:t,contact:r,pic:i},function(a){utils.hideLoading(),200==a.status?($(".tips-wrapper").fadeIn(200),setTimeout(function(){$(".tips-wrapper").fadeOut(200),u.ownPlayer=a.data,u.ownPlayer.type=0,g(),utils.back()},1500)):10001==a.status&&utils.showError("你已经报过名了")})}else utils.showError("请输入上传照片");else utils.showError("请输入联系方式");else utils.showError("请输入职位");else utils.showError("请输入公司名");else utils.showError("请输入姓名")}),this.ownPlayer={},$(".hover-btn").on("touchstart",function(){$(this).css({opacity:.7})}),$(".hover-btn").on("touchend",function(){$(this).css({opacity:1})})}),getSig(location.href.split("#")[0]),wx.ready(function(){var a=location.href.split("#")[0],e="http://op.ekaogo.com/beautiful/resource/images/share.jpeg";wx.onMenuShareTimeline({title:"寻找身边颜值最高的同事\n上传公司的男神女神，赢取大奖！",link:a,imgUrl:e,success:function(){},cancel:function(){}}),wx.onMenuShareAppMessage({title:"寻找身边颜值最高的同事",desc:"上传公司的男神女神，赢取大奖！",link:a,imgUrl:e,type:"",dataUrl:"",success:function(){},cancel:function(){}})}),wx.error(function(a){console.log(a)})});