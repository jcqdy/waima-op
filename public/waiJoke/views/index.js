var logStr="";function log(t){}function renderJoke(j,t,o){function a(t){var e=0,n=0,o=[],i=[];E.font="134px normal fonttt";var r=E.measureText(j).width;if(-1<t.indexOf("A")){for(var a=t.split("A"),s=0;s<a.length;s++)if(a[s]){0<s&&(e+=r,o.push({size:134,start:n,width:r,str:j}),n+=r),E.font="104px normal fonttt";var c=E.measureText(a[s]).width;e+=c,o.push({size:104,start:n,width:c,str:a[s]}),n+=c}}else E.font="104px normal fonttt",e=E.measureText(t).width,o.push({size:104,start:n,width:e,str:t});if(J<e){for(var l=[],u=0,h=0;h<o.length;h++){var m=o[h].str,g=0,d=0,f=0,p=[];if(m==j){for(s=0;s<m.length;s++){E.font="134px normal fonttt";var w=E.measureText(m[s]).width;u+(d+=w)<=J?p.push(m[s]):(l.push({size:134,width:g,start:u,str:p.join("")}),g=u=0,(p=[]).push(m[s])),g+=w,f+=w}l.push({size:134,width:g,start:u,str:p.join("")}),u+=g}else{for(s=0;s<m.length;s++){E.font="98px normal fonttt";var v=E.measureText(m[s]).width;if(u+(d+=v)<=J)p.push(m[s]);else{var k="",y=0;function x(t){if(z(t)){var e=p.pop();E.font="98px normal fonttt";var n=E.measureText(e).width;y+=n,k=e+k,x(e)}}x(m[s]),f-=y,g-=y,l.push({size:98,width:g,start:u,str:p.join("")}),u=0,d=g=y,p=[],k?p=p.concat((k+m[s]).split("")):p.push(m[s])}g+=v,f+=v}l.push({size:98,width:g,start:u,str:p.join("")}),u+=g}u%=J,f}i=l}else{var I=(J-e)/2;for(h=0;h<o.length;h++)i.push({size:o[h].size,start:I,str:o[h].str}),I+=o[h].width}return i}function z(t){return!!/\，|\“|\”|\。|\、|\？|\！|\：|\；|\‘|\’|\《|\》|\/|\~/.test(t)}var s=manJson[parseInt(Math.random()*manJson.length)];t||(s=womanJson[parseInt(Math.random()*womanJson.length)]);var i=document.getElementById("myCanvas"),E=i.getContext("2d"),c=80;var e,n,J=1160,l=1500,r=function(){for(var t=0,e=0;e<s.length;e++){for(var n=a(s[e]),o=!1,i=!1,r=0;r<n.length;r++)134==n[r].size?o=!0:98==n[r].size&&(i=!0);for(t+=o?180:i?150:165,r=0;r<n.length;r++)0<r&&0==n[r].start&&(t+=140)}return t}()+1e3;i.width=l,i.height=r,E.fillStyle="rgba(255, 255, 255, 0)",E.fillRect(0,0,l,r),e=function(){!function(){for(var t=0;t<s.length;t++){for(var e=a(s[t]),n=!1,o=!1,i=0;i<e.length;i++)134==e[i].size?n=!0:98==e[i].size&&(o=!0);c+=n?180:o?150:165;var r=(l-J)/2;for(i=0;i<e.length;i++)0<i&&0==e[i].start&&(c+=140),E.fillStyle="black",E.font=e[i].size+"px normal fonttt",E.fillText(e[i].str,e[i].start+r,c)}}();var t=new Image;t.setAttribute("crossOrigin","Anonymous"),t.src="http://op.ekaogo.com/waiJoke/resource/images/scan_tips.png",t.onload=function(){E.drawImage(t,(l-688)/2,r-640,688,84);var n=new Image;n.setAttribute("crossOrigin","Anonymous"),n.src="http://op.ekaogo.com/waiJoke/resource/images/qrocde.jpg",n.onload=function(){E.drawImage(n,(l-400)/2,r-480,400,400);var t=document.getElementById("joke-wrapper"),e=document.getElementById("joke-pic");e.src=i.toDataURL("image/png"),e.width=.86*document.body.clientWidth,setTimeout(function(){o&&o(),e.style.height=e.width*r/l+"px",t.style.width=e.width,t.style.height=e.width*r/l+"px"})}}},(n=new Image).setAttribute("crossOrigin","Anonymous"),n.src="http://op.ekaogo.com/waiJoke/resource/images/bg_repeat.jpg",n.onload=function(){for(var t=0;t<Math.ceil(r/408);t++)E.drawImage(n,0,408*t,1500,408);e&&e()}}function initRouter(t){function e(t){String.prototype.filterUrl=function(){return this.replace(/#\//,"")},this.config=t,this.init=function(){var t=this;t._init(),window.addEventListener("hashchange",function(){t._init()})}}e.prototype={_init:function(){for(var t=location.hash.filterUrl().split("/"),e=document.getElementsByClassName("page"),n=0;n<e.length;n++)e[n].style.display="none";document.getElementById(t[0]||"home").style.display="block"}};new e([{url:"",templateId:"home"},{url:"joke",templateId:"joke"}]).init(),t&&t()}initRouter(function(){var t=document.getElementById("man"),e=document.getElementById("woman"),n=document.getElementById("confirm"),o=document.getElementById("name"),i=1;t.addEventListener("click",function(){t.src="http://op.ekaogo.com/waiJoke/resource/images/man_checked.jpg",e.src="http://op.ekaogo.com/waiJoke/resource/images/woman.jpg",i=1},!1),e.addEventListener("click",function(){t.src="http://op.ekaogo.com/waiJoke/resource/images/man.jpg",e.src="http://op.ekaogo.com/waiJoke/resource/images/woman_checked.jpg",i=0},!1),n.addEventListener("click",function(){var t=o.value;t&&(utils.showLoading(),renderJoke(t,i,function(){utils.hideLoading(),utils.goTo("joke")}))},!1)}),utils.getSig(location.href.split("#")[0]),wx.ready(function(){var t=location.href.split("#")[0],e="http://op.ekaogo.com/beautiful/resource/images/share.jpeg";wx.onMenuShareTimeline({title:"歪段子\n你咋这么搞笑呢",link:t,imgUrl:e,success:function(){},cancel:function(){}}),wx.onMenuShareAppMessage({title:"歪段子",desc:"你咋这么搞笑呢",link:t,imgUrl:e,type:"",dataUrl:"",success:function(){},cancel:function(){}})}),wx.error(function(t){console.log(t)});