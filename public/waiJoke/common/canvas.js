var nameSize=134,nameLineHeight=190,singleSize=104,singleLineHeight=175,mutiSize=88,mutiLineHeight=130;function renderJoke(I,t,s){function l(t){var e=0,i=0,n=[],r=[];b.font=nameSize+"px normal fonttt";var s=b.measureText(I).width;if(-1<t.indexOf("A")){for(var a=t.split("A"),o=0;o<a.length;o++)if(a[o]){0<o&&(e+=s,n.push({size:nameSize,start:i,width:s,str:I}),i+=s),b.font=singleSize+"px normal fonttt";var h=b.measureText(a[o]).width;e+=h,n.push({size:singleSize,start:i,width:h,str:a[o]}),i+=h}}else b.font=singleSize+"px normal fonttt",e=b.measureText(t).width,n.push({size:singleSize,start:i,width:e,str:t});if(j<e){for(var l=[],g=0,m=0;m<n.length;m++){var u=n[m].str,d=0,f=0,c=0,p=[];if(u==I){for(o=0;o<u.length;o++){b.font=nameSize+"px normal fonttt";var z=b.measureText(u[o]).width;g+(f+=z)<=j?p.push(u[o]):(l.push({size:nameSize,width:d,start:g,str:p.join("")}),d=g=0,(p=[]).push(u[o])),d+=z,c+=z}l.push({size:nameSize,width:d,start:g,str:p.join("")}),g+=d}else{for(o=0;o<u.length;o++){b.font=mutiSize+"px normal fonttt";var v=b.measureText(u[o]).width;if(g+(f+=v)<=j)p.push(u[o]);else{var w="",S=0;function x(t){if(function(t){if(/\，|\“|\”|\。|\、|\？|\！|\：|\；|\‘|\’|\《|\》|\/|\~/.test(t))return!0;return!1}(t)){var e=p.pop();b.font=mutiSize+"px normal fonttt";var i=b.measureText(e).width;S+=i,w=e+w,x(e)}}x(u[o]),c-=S,d-=S,l.push({size:mutiSize,width:d,start:g,str:p.join("")}),g=0,f=d=S,p=[],w?p=p.concat((w+u[o]).split("")):p.push(u[o])}d+=v,c+=v}l.push({size:mutiSize,width:d,start:g,str:p.join("")}),g+=d}g%=j,c}r=l}else{var y=(j-e)/2;for(m=0;m<n.length;m++)r.push({size:n[m].size,width:n[m].width,start:y,str:n[m].str}),y+=n[m].width}var H=[],L=[];for(m=0;m<r.length;m++)L.push(r[m]),r[m+1]?r[m].start>=r[m+1].start&&(H.push(L),L=[]):(H.push(L),L=[]);return H}var g=manJson[parseInt(Math.random()*manJson.length)];t||(g=womanJson[parseInt(Math.random()*womanJson.length)]);var a=document.getElementById("myCanvas"),b=a.getContext("2d");function m(t){for(var e=[],i=0;i<t.length;i++){for(var n=l(t[i]),r=[],s=0;s<n.length;s++){for(var a=0,o=0,h=0;h<n[s].length;h++)a+=n[s][h].str.length,o+=n[s][h].width;r.push({line:n[s],lineLength:a,lineWidth:o})}e=e.concat(r)}return e}var e,i,j=1160,u=1500,o=function(){for(var t=0,e=m(g),i=0;i<e.length;i++){for(var n=e[i].line,r=!1,s=!1,a=0;a<n.length;a++)n[a].size==nameSize?r=!0:n[a].size==mutiSize&&(s=!0);t+=r?nameLineHeight:s?mutiLineHeight:singleLineHeight}return t}()+900;a.width=u,a.height=o,b.fillStyle="rgba(255, 255, 255, 0)",b.fillRect(0,0,u,o),e=function(){!function(){for(var t=0,e=m(g),i=0;i<e.length;i++){for(var n=e[i],r=n.line,s=!1,a=!1,o=0;o<r.length;o++)r[o].size==nameSize?s=!0:r[o].size==mutiSize&&(a=!0);t+=s?nameLineHeight:a?mutiLineHeight:singleLineHeight;var h=(u-j)/2;for(o=0;o<r.length;o++){b.fillStyle="black",b.font=r[o].size+"px normal fonttt";var l=r[o].start+h;!a&&(n.lineLength<7||10<n.lineLength)&&(l=2*r[o].start+h),0==i&&(l=r[o].start-r[0].start+h),b.fillText(r[o].str,l,t)}}}();var t=new Image;t.setAttribute("crossOrigin","Anonymous"),t.src=imgHost+"/resource/images/scan_tips.png",t.onload=function(){b.drawImage(t,406,o-640,688,84);var r=new Image;r.setAttribute("crossOrigin","Anonymous"),r.src=imgHost+"/resource/images/qrocde.jpg",r.onload=function(){b.drawImage(r,550,o-480,400,400);var t=document.getElementById("joke-wrapper"),e=document.getElementById("joke-pic"),i=document.getElementById("joke");e.src=a.toDataURL("image/png"),e.width=.86*document.body.clientWidth;var n=e.width*o/u;setTimeout(function(){s&&s(),e.style.height=n+"px",t.style.width=e.width+"px",t.style.height=n+"px",n>document.body.clientHeight-.09*document.body.clientWidth?i.style.height=n+.14*document.body.clientWidth+"px":i.style.height="100%"})}}},(i=new Image).setAttribute("crossOrigin","Anonymous"),i.src=imgHost+"/resource/images/bg_repeat.jpg",i.onload=function(){for(var t=0;t<Math.ceil(o/408);t++)b.drawImage(i,0,408*t,1500,408);e&&e()}}