/*
 * @Author: jp
 * @Date: 2022-11-08 16:45:35
 * @LastEditors: jp
 * @LastEditTime: 2022-11-09 15:13:08
 * @Descripttion: 
 * @version: 
 */

var b = document.body;
var c = document.getElementById('low')
var a = c.getContext('2d');
eval(`
var M=Math,
n=M.pow,
i,E=2,
F="rgba(233,61,109,",d=M.cos,z=M.sin,L=1,u=30,
W=window,
w=c.width=(700),
h=c.height=(400),
r=_1){return M.random()*2-1},
y="px Arial",v="",q="♥",X=w/2,Y=h/2,T=4,p=_1)
{var e=this;e.g=_1)
{e.x=X;e.y=Y;e.k=0;e.l=0;e.t=M.random()*19000;e.c=e.t};e.d=_1){a.fillStyle=F+(e.c/e.t)+")";a.fillText(q,e.x,e.y);e.c-=50;e.x+=e.k;e.y+=e.l;e.k=e.k+r();e.l=e.l+r();if(e.c<0||e.x>w||e.x<0||e.y>h||e.y<0){e.g()}};e.g()},A,B;a.textAlign="center";a.strokeStyle="#000";a.lineWidth=2;for(i=0;i<350;i++){M[i]=new p()}setInterval(_1){a.clearRect(0,0,w,h);a.font=u+y;X=(w/6*n(z(T),3)+w/2);Y=0.8*(-h/40*(13*d(T)-5*d(2*T)-2*d(3*T)-d(4*T))+h/2.3);T+=(z(T)+3)/99;for(i=0;i<350;i++){with(M[i]){A=(x/w-0.5)*2,B=-(y/h-0.5);if(L&&(A*A+2*n((B-0.5*n(M.abs(A),0.5)),2))>0.11){k=l=0}d()}}a.font=120+y;if(E>0.1){if(E<1){a.fillStyle=F+E+")";a.fillText("",w/2,h/2)}E-=0.02}a.fillStyle="#E93D6D";a.fillText(v,X,Y+u);a.strokeText(v,X,Y+u)},50);b.bgColor="#FFEFF2";c.onmouseup=_1){L=(L)?0:1}`.replace(/(_1)/g, 'function('))


// w=c.width=(W.innerWidth*1),
// h=c.height=(W.innerHeight*0.6),