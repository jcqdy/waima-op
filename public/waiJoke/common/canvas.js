var nameSize=134,nameLineHeight=190,singleSize=104,singleLineHeight=175,mutiSize=88,mutiLineHeight=130;function renderJoke(b,t,s){function l(t){var e=0,i=0,n=[],r=[];T.font=nameSize+"px normal fonttt";var s=T.measureText(b).width;if(-1<t.indexOf("A")){for(var a=t.split("A"),o=0;o<a.length;o++)if(a[o]){0<o&&(e+=s,n.push({size:nameSize,start:i,width:s,str:b}),i+=s),T.font=singleSize+"px normal fonttt";var h=T.measureText(a[o]).width;e+=h,n.push({size:singleSize,start:i,width:h,str:a[o]}),i+=h}}else T.font=singleSize+"px normal fonttt",e=T.measureText(t).width,n.push({size:singleSize,start:i,width:e,str:t});if(j<e){for(var l=[],m=0,g=0;g<n.length;g++){var u=n[g].str,d=0,f=0,c=0,p=[];if(u==b){for(o=0;o<u.length;o++){T.font=nameSize+"px normal fonttt";var z=T.measureText(u[o]).width;m+(f+=z)<=j?p.push(u[o]):(l.push({size:nameSize,width:d,start:m,str:p.join("")}),d=m=0,(p=[]).push(u[o])),d+=z,c+=z}l.push({size:nameSize,width:d,start:m,str:p.join("")}),m+=d}else{for(o=0;o<u.length;o++){T.font=mutiSize+"px normal fonttt";var v=T.measureText(u[o]).width;if(m+(f+=v)<=j)p.push(u[o]);else{var w="",S=0;function x(t){if(I(t)){var e=p.pop();T.font=mutiSize+"px normal fonttt";var i=T.measureText(e).width;S+=i,w=e+w,x(e)}}x(u[o]),c-=S,d-=S,l.push({size:mutiSize,width:d,start:m,str:p.join("")}),m=0,f=d=S,p=[],w?p=p.concat((w+u[o]).split("")):p.push(u[o])}d+=v,c+=v}l.push({size:mutiSize,width:d,start:m,str:p.join("")}),m+=d}m%=j,c}r=l}else{var y=(j-e)/2;for(g=0;g<n.length;g++)r.push({size:n[g].size,width:n[g].width,start:y,str:n[g].str}),y+=n[g].width}var H=[],L=[];for(g=0;g<r.length;g++)L.push(r[g]),r[g+1]?r[g].start>=r[g+1].start&&(H.push(L),L=[]):(H.push(L),L=[]);return H}function I(t){return!!/\，|\“|\”|\。|\、|\？|\！|\：|\；|\‘|\’|\《|\》|\/|\~/.test(t)}var m=manJson[parseInt(Math.random()*manJson.length)];t||(m=womanJson[parseInt(Math.random()*womanJson.length)]);var a=document.getElementById("myCanvas"),T=a.getContext("2d");function g(t){for(var e=[],i=0;i<t.length;i++){for(var n=l(t[i]),r=[],s=0;s<n.length;s++){for(var a=0,o=0,h=0;h<n[s].length;h++)a+=n[s][h].str.length,o+=n[s][h].width;r.push({line:n[s],lineLength:a,lineWidth:o})}e=e.concat(r)}return e}var e,i,j=1160,u=1500,d=function(){for(var t=0,e=g(m),i=0;i<e.length;i++){for(var n=e[i].line,r=!1,s=!1,a=0;a<n.length;a++)n[a].size==nameSize?r=!0:n[a].size==mutiSize&&(s=!0);t+=r?nameLineHeight:s?mutiLineHeight:singleLineHeight}return t}()+1e3;a.width=u,a.height=d,T.fillStyle="rgba(255, 255, 255, 0)",T.fillRect(0,0,u,d),e=function(){!function(){for(var t=0,e=g(m),i=0;i<e.length;i++){for(var n=e[i],r=n.line,s=!1,a=!1,o=0;o<r.length;o++)r[o].size==nameSize?s=!0:r[o].size==mutiSize&&(a=!0);t+=s?nameLineHeight:a?mutiLineHeight:singleLineHeight;var h=(u-j)/2;for(o=0;o<r.length;o++){T.fillStyle="black",T.font=r[o].size+"px normal fonttt";var l=r[o].start+h;!a&&(n.lineLength<7||10<n.lineLength)&&(l=r[o].start+(j-n.lineWidth)/2+h),0==i&&(l=r[o].start-r[0].start+h),T.fillText(r[o].str,l,t)}}T.fillStyle="black",T.font="normal bolder 48px arial",T.fillText("公众号“歪马剧本”",j-100,d-80)}();var t=new Image;t.setAttribute("crossOrigin","Anonymous"),t.src=imgHost+"/resource/images/scan_tips.png",t.onload=function(){T.drawImage(t,(u-688)/2,d-740,688,84);var r=new Image;r.setAttribute("crossOrigin","Anonymous"),r.src=imgHost+"/resource/images/qrcode.png?time=12345",r.onload=function(){T.drawImage(r,(u-400)/2,d-580,400,400);var t=document.getElementById("joke-wrapper"),e=document.getElementById("joke-pic"),i=document.getElementById("joke");e.src=a.toDataURL("image/png"),e.width=.86*document.body.clientWidth;var n=e.width*d/u;setTimeout(function(){s&&s(),e.style.height=n+"px",t.style.width=e.width+"px",t.style.height=n+"px",n>document.body.clientHeight-.09*document.body.clientWidth?i.style.height=n+.14*document.body.clientWidth+"px":i.style.height="100%"})}}},(i=new Image).setAttribute("crossOrigin","Anonymous"),i.src=imgHost+"/resource/images/bg_repeat.jpg",i.onload=function(){for(var t=0;t<Math.ceil(d/408);t++)T.drawImage(i,0,408*t,1500,408);e&&e()}}