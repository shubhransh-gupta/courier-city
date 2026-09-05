(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const da="174",eh=0,Ua=1,nh=2,rl=1,al=2,Bn=3,ti=0,Je=1,Mn=2,Jn=0,Ki=1,Fa=2,Oa=3,Ba=4,ih=5,vi=100,sh=101,oh=102,rh=103,ah=104,ch=200,lh=201,hh=202,dh=203,yr=204,Mr=205,uh=206,fh=207,ph=208,mh=209,gh=210,xh=211,vh=212,wh=213,_h=214,Sr=0,Er=1,br=2,Qi=3,Tr=4,Ar=5,Cr=6,Rr=7,cl=0,yh=1,Mh=2,Qn=0,Sh=1,Eh=2,bh=3,ll=4,Th=5,Ah=6,Ch=7,hl=300,ts=301,es=302,Pr=303,Lr=304,bo=306,He=1e3,yi=1001,Ir=1002,xn=1003,Rh=1004,Os=1005,Sn=1006,Do=1007,Mi=1008,Gn=1009,dl=1010,ul=1011,Cs=1012,ua=1013,Si=1014,zn=1015,Is=1016,fa=1017,pa=1018,ns=1020,fl=35902,pl=1021,ml=1022,mn=1023,gl=1024,xl=1025,$i=1026,is=1027,vl=1028,ma=1029,wl=1030,ga=1031,xa=1033,fo=33776,po=33777,mo=33778,go=33779,Dr=35840,Nr=35841,Ur=35842,Fr=35843,Or=36196,Br=37492,zr=37496,kr=37808,Vr=37809,Gr=37810,Hr=37811,Wr=37812,Xr=37813,qr=37814,Yr=37815,Zr=37816,jr=37817,Kr=37818,$r=37819,Jr=37820,Qr=37821,xo=36492,ta=36494,ea=36495,_l=36283,na=36284,ia=36285,sa=36286,Ph=3200,Lh=3201,va=0,Ih=1,$n="",cn="srgb",ss="srgb-linear",wo="linear",ge="srgb",Ii=7680,za=519,Dh=512,Nh=513,Uh=514,yl=515,Fh=516,Oh=517,Bh=518,zh=519,ka=35044,Va="300 es",kn=2e3,_o=2001;class rs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],No=Math.PI/180,yo=180/Math.PI;function as(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[r&255]+Be[r>>8&255]+Be[r>>16&255]+Be[r>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function ie(r,t,e){return Math.max(t,Math.min(e,r))}function kh(r,t){return(r%t+t)%t}function Uo(r,t,e){return(1-e)*r+e*t}function fs(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function je(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(t,e,n,i,s,o,a,c,l){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l)}set(t,e,n,i,s,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=i[0],g=i[3],p=i[6],v=i[1],_=i[4],w=i[7],b=i[2],E=i[5],C=i[8];return s[0]=o*x+a*v+c*b,s[3]=o*g+a*_+c*E,s[6]=o*p+a*w+c*C,s[1]=l*x+h*v+u*b,s[4]=l*g+h*_+u*E,s[7]=l*p+h*w+u*C,s[2]=d*x+f*v+m*b,s[5]=d*g+f*_+m*E,s[8]=d*p+f*w+m*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*s,f=l*s-o*c,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=u*x,t[1]=(i*l-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*c)*x,t[5]=(i*s-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Fo.makeScale(t,e)),this}rotate(t){return this.premultiply(Fo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fo=new Qt;function Ml(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Mo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Vh(){const r=Mo("canvas");return r.style.display="block",r}const Ga={};function pi(r){r in Ga||(Ga[r]=!0,console.warn(r))}function Gh(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Hh(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Wh(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ha=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wa=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xh(){const r={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ge&&(i.r=Vn(i.r),i.g=Vn(i.g),i.b=Vn(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ge&&(i.r=Ji(i.r),i.g=Ji(i.g),i.b=Ji(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===$n?wo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[ss]:{primaries:t,whitePoint:n,transfer:wo,toXYZ:Ha,fromXYZ:Wa,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:t,whitePoint:n,transfer:ge,toXYZ:Ha,fromXYZ:Wa,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),r}const le=Xh();function Vn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ji(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Di;class qh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Di===void 0&&(Di=Mo("canvas")),Di.width=t.width,Di.height=t.height;const n=Di.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Di}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Mo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Vn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vn(e[n]/255)*255):e[n]=Vn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yh=0;class wa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=as(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Oo(i[o].image)):s.push(Oo(i[o]))}else s=Oo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Oo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?qh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zh=0;class We extends rs{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=yi,i=yi,s=Sn,o=Mi,a=mn,c=Gn,l=We.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=as(),this.name="",this.source=new wa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case He:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case Ir:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case He:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case Ir:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=hl;We.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,i=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,w=(f+1)/2,b=(p+1)/2,E=(h+d)/4,C=(u+x)/4,P=(m+g)/4;return _>w&&_>b?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=E/n,s=C/n):w>b?w<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(w),n=E/i,s=P/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=C/s,i=P/s),this.set(n,i,s,e),this}let v=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jh extends rs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new We(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new wa(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends jh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Sl extends We{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kh extends We{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Ds=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],m=s[o+2],x=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(u!==x||c!==d||l!==f||h!==m){let g=1-a;const p=c*d+l*f+h*m+u*x,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const b=Math.sqrt(_),E=Math.atan2(b,p*v);g=Math.sin(g*E)/b,a=Math.sin(a*E)/b}const w=a*v;if(c=c*g+d*w,l=l*g+f*w,h=h*g+m*w,u=u*g+x*w,g===1-a){const b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),f=c(i/2),m=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=i+c*u+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bo.copy(this).projectOnVector(t),this.sub(Bo)}reflect(t){return this.sub(Bo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bo=new U,Xa=new Ds;class Ns{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hn):hn.fromBufferAttribute(s,o),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(t.matrixWorld),this.union(Bs)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ps),zs.subVectors(this.max,ps),Ni.subVectors(t.a,ps),Ui.subVectors(t.b,ps),Fi.subVectors(t.c,ps),Wn.subVectors(Ui,Ni),Xn.subVectors(Fi,Ui),ri.subVectors(Ni,Fi);let e=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-ri.z,ri.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,ri.z,0,-ri.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-ri.y,ri.x,0];return!zo(e,Ni,Ui,Fi,zs)||(e=[1,0,0,0,1,0,0,0,1],!zo(e,Ni,Ui,Fi,zs))?!1:(ks.crossVectors(Wn,Xn),e=[ks.x,ks.y,ks.z],zo(e,Ni,Ui,Fi,zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Cn=[new U,new U,new U,new U,new U,new U,new U,new U],hn=new U,Bs=new Ns,Ni=new U,Ui=new U,Fi=new U,Wn=new U,Xn=new U,ri=new U,ps=new U,zs=new U,ks=new U,ai=new U;function zo(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ai.fromArray(r,s);const a=i.x*Math.abs(ai.x)+i.y*Math.abs(ai.y)+i.z*Math.abs(ai.z),c=t.dot(ai),l=e.dot(ai),h=n.dot(ai);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const $h=new Ns,ms=new U,ko=new U;class _a{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):$h.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ms.subVectors(t,this.center);const e=ms.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ms,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ms.copy(t.center).add(ko)),this.expandByPoint(ms.copy(t.center).sub(ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new U,Vo=new U,Vs=new U,qn=new U,Go=new U,Gs=new U,Ho=new U;let El=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Vo.copy(t).add(e).multiplyScalar(.5),Vs.copy(e).sub(t).normalize(),qn.copy(this.origin).sub(Vo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Vs),a=qn.dot(this.direction),c=-qn.dot(Vs),l=qn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=s*h,u>=0)if(d>=-m)if(d<=m){const x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Vo).addScaledVector(Vs,d),f}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);const n=Rn.dot(this.direction),i=Rn.dot(Rn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,i,s){Go.subVectors(e,t),Gs.subVectors(n,t),Ho.crossVectors(Go,Gs);let o=this.direction.dot(Ho),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qn.subVectors(this.origin,t);const c=a*this.direction.dot(Gs.crossVectors(qn,Gs));if(c<0)return null;const l=a*this.direction.dot(Go.cross(qn));if(l<0||c+l>o)return null;const h=-a*qn.dot(Ho);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ye{constructor(t,e,n,i,s,o,a,c,l,h,u,d,f,m,x,g){ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l,h,u,d,f,m,x,g)}set(t,e,n,i,s,o,a,c,l,h,u,d,f,m,x,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Oi.setFromMatrixColumn(t,0).length(),s=1/Oi.setFromMatrixColumn(t,1).length(),o=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,f=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d+x*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-x*u}else if(t.order==="XZY"){const d=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jh,t,Qh)}lookAt(t,e,n){const i=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),Yn.crossVectors(n,tn),Yn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),Yn.crossVectors(n,tn)),Yn.normalize(),Hs.crossVectors(tn,Yn),i[0]=Yn.x,i[4]=Hs.x,i[8]=tn.x,i[1]=Yn.y,i[5]=Hs.y,i[9]=tn.y,i[2]=Yn.z,i[6]=Hs.z,i[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],v=n[3],_=n[7],w=n[11],b=n[15],E=i[0],C=i[4],P=i[8],S=i[12],M=i[1],L=i[5],k=i[9],N=i[13],B=i[2],z=i[6],F=i[10],Y=i[14],G=i[3],J=i[7],ht=i[11],gt=i[15];return s[0]=o*E+a*M+c*B+l*G,s[4]=o*C+a*L+c*z+l*J,s[8]=o*P+a*k+c*F+l*ht,s[12]=o*S+a*N+c*Y+l*gt,s[1]=h*E+u*M+d*B+f*G,s[5]=h*C+u*L+d*z+f*J,s[9]=h*P+u*k+d*F+f*ht,s[13]=h*S+u*N+d*Y+f*gt,s[2]=m*E+x*M+g*B+p*G,s[6]=m*C+x*L+g*z+p*J,s[10]=m*P+x*k+g*F+p*ht,s[14]=m*S+x*N+g*Y+p*gt,s[3]=v*E+_*M+w*B+b*G,s[7]=v*C+_*L+w*z+b*J,s[11]=v*P+_*k+w*F+b*ht,s[15]=v*S+_*N+w*Y+b*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+s*c*u-i*l*u-s*a*d+n*l*d+i*a*f-n*c*f)+x*(+e*c*f-e*l*d+s*o*d-i*o*f+i*l*h-s*c*h)+g*(+e*l*u-e*a*f-s*o*u+n*o*f+s*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],v=u*g*l-x*d*l+x*c*f-a*g*f-u*c*p+a*d*p,_=m*d*l-h*g*l-m*c*f+o*g*f+h*c*p-o*d*p,w=h*x*l-m*u*l+m*a*f-o*x*f-h*a*p+o*u*p,b=m*u*c-h*x*c-m*a*d+o*x*d+h*a*g-o*u*g,E=e*v+n*_+i*w+s*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=v*C,t[1]=(x*d*s-u*g*s-x*i*f+n*g*f+u*i*p-n*d*p)*C,t[2]=(a*g*s-x*c*s+x*i*l-n*g*l-a*i*p+n*c*p)*C,t[3]=(u*c*s-a*d*s-u*i*l+n*d*l+a*i*f-n*c*f)*C,t[4]=_*C,t[5]=(h*g*s-m*d*s+m*i*f-e*g*f-h*i*p+e*d*p)*C,t[6]=(m*c*s-o*g*s-m*i*l+e*g*l+o*i*p-e*c*p)*C,t[7]=(o*d*s-h*c*s+h*i*l-e*d*l-o*i*f+e*c*f)*C,t[8]=w*C,t[9]=(m*u*s-h*x*s-m*n*f+e*x*f+h*n*p-e*u*p)*C,t[10]=(o*x*s-m*a*s+m*n*l-e*x*l-o*n*p+e*a*p)*C,t[11]=(h*a*s-o*u*s-h*n*l+e*u*l+o*n*f-e*a*f)*C,t[12]=b*C,t[13]=(h*x*i-m*u*i+m*n*d-e*x*d-h*n*g+e*u*g)*C,t[14]=(m*a*i-o*x*i-m*n*c+e*x*c+o*n*g-e*a*g)*C,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,d=s*l,f=s*h,m=s*u,x=o*h,g=o*u,p=a*u,v=c*l,_=c*h,w=c*u,b=n.x,E=n.y,C=n.z;return i[0]=(1-(x+p))*b,i[1]=(f+w)*b,i[2]=(m-_)*b,i[3]=0,i[4]=(f-w)*E,i[5]=(1-(d+p))*E,i[6]=(g+v)*E,i[7]=0,i[8]=(m+_)*C,i[9]=(g-v)*C,i[10]=(1-(d+x))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Oi.set(i[0],i[1],i[2]).length();const o=Oi.set(i[4],i[5],i[6]).length(),a=Oi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],dn.copy(this);const l=1/s,h=1/o,u=1/a;return dn.elements[0]*=l,dn.elements[1]*=l,dn.elements[2]*=l,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=u,dn.elements[9]*=u,dn.elements[10]*=u,e.setFromRotationMatrix(dn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=kn){const c=this.elements,l=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,m;if(a===kn)f=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===_o)f=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=kn){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-s),d=(e+t)*l,f=(n+i)*h;let m,x;if(a===kn)m=(o+s)*u,x=-2*u;else if(a===_o)m=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Oi=new U,dn=new ye,Jh=new U(0,0,0),Qh=new U(1,1,1),Yn=new U,Hs=new U,tn=new U,qa=new ye,Ya=new Ds;class bn{constructor(t=0,e=0,n=0,i=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ie(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ya.setFromEuler(this),this.setFromQuaternion(Ya,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class ya{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let td=0;const Za=new U,Bi=new Ds,Pn=new ye,Ws=new U,gs=new U,ed=new U,nd=new Ds,ja=new U(1,0,0),Ka=new U(0,1,0),$a=new U(0,0,1),Ja={type:"added"},id={type:"removed"},zi={type:"childadded",child:null},Wo={type:"childremoved",child:null};class Te extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new U,e=new bn,n=new Ds,i=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ye},normalMatrix:{value:new Qt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.premultiply(Bi),this}rotateX(t){return this.rotateOnAxis(ja,t)}rotateY(t){return this.rotateOnAxis(Ka,t)}rotateZ(t){return this.rotateOnAxis($a,t)}translateOnAxis(t,e){return Za.copy(t).applyQuaternion(this.quaternion),this.position.add(Za.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ja,t)}translateY(t){return this.translateOnAxis(Ka,t)}translateZ(t){return this.translateOnAxis($a,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ws.copy(t):Ws.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(gs,Ws,this.up):Pn.lookAt(Ws,gs,this.up),this.quaternion.setFromRotationMatrix(Pn),i&&(Pn.extractRotation(i.matrixWorld),Bi.setFromRotationMatrix(Pn),this.quaternion.premultiply(Bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ja),zi.child=t,this.dispatchEvent(zi),zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(id),Wo.child=t,this.dispatchEvent(Wo),Wo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ja),zi.child=t,this.dispatchEvent(zi),zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,t,ed),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,nd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Te.DEFAULT_UP=new U(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new U,Ln=new U,Xo=new U,In=new U,ki=new U,Vi=new U,Qa=new U,qo=new U,Yo=new U,Zo=new U,jo=new xe,Ko=new xe,$o=new xe;class pn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),un.subVectors(t,e),i.cross(un);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){un.subVectors(i,e),Ln.subVectors(n,e),Xo.subVectors(t,e);const o=un.dot(un),a=un.dot(Ln),c=un.dot(Xo),l=Ln.dot(Ln),h=Ln.dot(Xo),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,In)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,In.x),c.addScaledVector(o,In.y),c.addScaledVector(a,In.z),c)}static getInterpolatedAttribute(t,e,n,i,s,o){return jo.setScalar(0),Ko.setScalar(0),$o.setScalar(0),jo.fromBufferAttribute(t,e),Ko.fromBufferAttribute(t,n),$o.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(jo,s.x),o.addScaledVector(Ko,s.y),o.addScaledVector($o,s.z),o}static isFrontFacing(t,e,n,i){return un.subVectors(n,e),Ln.subVectors(t,e),un.cross(Ln).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),un.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return pn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;ki.subVectors(i,n),Vi.subVectors(s,n),qo.subVectors(t,n);const c=ki.dot(qo),l=Vi.dot(qo);if(c<=0&&l<=0)return e.copy(n);Yo.subVectors(t,i);const h=ki.dot(Yo),u=Vi.dot(Yo);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ki,o);Zo.subVectors(t,s);const f=ki.dot(Zo),m=Vi.dot(Zo);if(m>=0&&f<=m)return e.copy(s);const x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Vi,a);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Qa.subVectors(s,i),a=(u-h)/(u-h+(f-m)),e.copy(i).addScaledVector(Qa,a);const p=1/(g+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(ki,o).addScaledVector(Vi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function Jo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class se{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=kh(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Jo(o,s,t+1/3),this.g=Jo(o,s,t),this.b=Jo(o,s,t-1/3)}return le.toWorkingColorSpace(this,i),this}setStyle(t,e=cn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){const n=bl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return le.fromWorkingColorSpace(ze.copy(this),t),Math.round(ie(ze.r*255,0,255))*65536+Math.round(ie(ze.g*255,0,255))*256+Math.round(ie(ze.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(ze.copy(this),e);const n=ze.r,i=ze.g,s=ze.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=cn){le.fromWorkingColorSpace(ze.copy(this),t);const e=ze.r,n=ze.g,i=ze.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(Xs);const n=Uo(Zn.h,Xs.h,e),i=Uo(Zn.s,Xs.s,e),s=Uo(Zn.l,Xs.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new se;se.NAMES=bl;let sd=0,cs=class extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=as(),this.name="",this.type="Material",this.blending=Ki,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yr,this.blendDst=Mr,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=za,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yr&&(n.blendSrc=this.blendSrc),this.blendDst!==Mr&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==za&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};class Bt extends cs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new U,qs=new ft;let od=0;class En{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:od++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ka,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qs.fromBufferAttribute(this,e),qs.applyMatrix3(t),this.setXY(e,qs.x,qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=je(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fs(e,this.array)),e}setX(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fs(e,this.array)),e}setY(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fs(e,this.array)),e}setW(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),i=je(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),i=je(i,this.array),s=je(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ka&&(t.usage=this.usage),t}}class Tl extends En{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Al extends En{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class pe extends En{constructor(t,e,n){super(new Float32Array(t),e,n)}}let rd=0;const an=new ye,Qo=new Te,Gi=new U,en=new Ns,xs=new Ns,Ue=new U;class Xe extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ml(t)?Al:Tl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return Qo.lookAt(t),Qo.updateMatrix(),this.applyMatrix4(Qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pe(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];en.setFromBufferAttribute(s),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _a);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(en.min,xs.min),en.expandByPoint(Ue),Ue.addVectors(en.max,xs.max),en.expandByPoint(Ue)):(en.expandByPoint(xs.min),en.expandByPoint(xs.max))}en.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ue.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ue));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ue.fromBufferAttribute(a,l),c&&(Gi.fromBufferAttribute(t,l),Ue.add(Gi)),i=Math.max(i,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new U,c[P]=new U;const l=new U,h=new U,u=new U,d=new ft,f=new ft,m=new ft,x=new U,g=new U;function p(P,S,M){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(s,P),f.fromBufferAttribute(s,S),m.fromBufferAttribute(s,M),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(L),a[P].add(x),a[S].add(x),a[M].add(x),c[P].add(g),c[S].add(g),c[M].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let P=0,S=v.length;P<S;++P){const M=v[P],L=M.start,k=M.count;for(let N=L,B=L+k;N<B;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const _=new U,w=new U,b=new U,E=new U;function C(P){b.fromBufferAttribute(i,P),E.copy(b);const S=a[P];_.copy(S),_.sub(b.multiplyScalar(b.dot(S))).normalize(),w.crossVectors(E,S);const L=w.dot(c[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,L)}for(let P=0,S=v.length;P<S;++P){const M=v[P],L=M.start,k=M.count;for(let N=L,B=L+k;N<B;N+=3)C(t.getX(N+0)),C(t.getX(N+1)),C(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new U,s=new U,o=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new En(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Xe,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tc=new ye,ci=new El,Ys=new _a,ec=new U,Zs=new U,js=new U,Ks=new U,tr=new U,$s=new U,nc=new U,Js=new U;class y extends Te{constructor(t=new Xe,e=new Bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){$s.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(tr.fromBufferAttribute(u,t),o?$s.addScaledVector(tr,h):$s.addScaledVector(tr.sub(e),h))}e.add($s)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(s),ci.copy(t.ray).recast(t.near),!(Ys.containsPoint(ci.origin)===!1&&(ci.intersectSphere(Ys,ec)===null||ci.origin.distanceToSquared(ec)>(t.far-t.near)**2))&&(tc.copy(s).invert(),ci.copy(t.ray).applyMatrix4(tc),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let w=v,b=_;w<b;w+=3){const E=a.getX(w),C=a.getX(w+1),P=a.getX(w+2);i=Qs(this,p,t,n,l,h,u,E,C,P),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const v=a.getX(g),_=a.getX(g+1),w=a.getX(g+2);i=Qs(this,o,t,n,l,h,u,v,_,w),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),_=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let w=v,b=_;w<b;w+=3){const E=w,C=w+1,P=w+2;i=Qs(this,p,t,n,l,h,u,E,C,P),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const v=g,_=g+1,w=g+2;i=Qs(this,o,t,n,l,h,u,v,_,w),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function ad(r,t,e,n,i,s,o,a){let c;if(t.side===Je?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===ti,a),c===null)return null;Js.copy(a),Js.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Js);return l<e.near||l>e.far?null:{distance:l,point:Js.clone(),object:r}}function Qs(r,t,e,n,i,s,o,a,c,l){r.getVertexPosition(a,Zs),r.getVertexPosition(c,js),r.getVertexPosition(l,Ks);const h=ad(r,t,e,n,Zs,js,Ks,nc);if(h){const u=new U;pn.getBarycoord(nc,Zs,js,Ks,u),i&&(h.uv=pn.getInterpolatedAttribute(i,a,c,l,u,new ft)),s&&(h.uv1=pn.getInterpolatedAttribute(s,a,c,l,u,new ft)),o&&(h.normal=pn.getInterpolatedAttribute(o,a,c,l,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new U,materialIndex:0};pn.getNormal(Zs,js,Ks,d.normal),h.face=d,h.barycoord=u}return h}class O extends Xe{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(u,2));function m(x,g,p,v,_,w,b,E,C,P,S){const M=w/C,L=b/P,k=w/2,N=b/2,B=E/2,z=C+1,F=P+1;let Y=0,G=0;const J=new U;for(let ht=0;ht<F;ht++){const gt=ht*L-N;for(let ct=0;ct<z;ct++){const qt=ct*M-k;J[x]=qt*v,J[g]=gt*_,J[p]=B,l.push(J.x,J.y,J.z),J[x]=0,J[g]=0,J[p]=E>0?1:-1,h.push(J.x,J.y,J.z),u.push(ct/C),u.push(1-ht/P),Y+=1}}for(let ht=0;ht<P;ht++)for(let gt=0;gt<C;gt++){const ct=d+gt+z*ht,qt=d+gt+z*(ht+1),K=d+(gt+1)+z*(ht+1),rt=d+(gt+1)+z*ht;c.push(ct,qt,rt),c.push(qt,K,rt),G+=6}a.addGroup(f,G,S),f+=G,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new O(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function os(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ge(r){const t={};for(let e=0;e<r.length;e++){const n=os(r[e]);for(const i in n)t[i]=n[i]}return t}function cd(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Cl(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const ld={clone:os,merge:Ge};var hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends cs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hd,this.fragmentShader=dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=cd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Rl extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new U,ic=new ft,sc=new ft;class $e extends Rl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=yo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yo*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,ic,sc),e.subVectors(sc,ic)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(No*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hi=-90,Wi=1;class ud extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $e(Hi,Wi,t,e);i.layers=this.layers,this.add(i);const s=new $e(Hi,Wi,t,e);s.layers=this.layers,this.add(s);const o=new $e(Hi,Wi,t,e);o.layers=this.layers,this.add(o);const a=new $e(Hi,Wi,t,e);a.layers=this.layers,this.add(a);const c=new $e(Hi,Wi,t,e);c.layers=this.layers,this.add(c);const l=new $e(Hi,Wi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===_o)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Pl extends We{constructor(t,e,n,i,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ts,super(t,e,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fd extends Ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Pl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new O(5,5,5),s=new ei({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:Jn});s.uniforms.tEquirect.value=e;const o=new y(i,s),a=e.minFilter;return e.minFilter===Mi&&(e.minFilter=Sn),new ud(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}class St extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pd={type:"move"};class er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pd)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new St;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ma{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new se(t),this.density=e}clone(){return new Ma(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class md extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const nr=new U,gd=new U,xd=new Qt;let mi=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=nr.subVectors(n,e).cross(gd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(nr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||xd.getNormalMatrix(t),i=this.coplanarPoint(nr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const li=new _a,to=new U;class Sa{constructor(t=new mi,e=new mi,n=new mi,i=new mi,s=new mi,o=new mi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],m=i[9],x=i[10],g=i[11],p=i[12],v=i[13],_=i[14],w=i[15];if(n[0].setComponents(c-s,d-l,g-f,w-p).normalize(),n[1].setComponents(c+s,d+l,g+f,w+p).normalize(),n[2].setComponents(c+o,d+h,g+m,w+v).normalize(),n[3].setComponents(c-o,d-h,g-m,w-v).normalize(),n[4].setComponents(c-a,d-u,g-x,w-_).normalize(),e===kn)n[5].setComponents(c+a,d+u,g+x,w+_).normalize();else if(e===_o)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(to.x=i.normal.x>0?t.max.x:t.min.x,to.y=i.normal.y>0?t.max.y:t.min.y,to.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(to)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Se extends We{constructor(t,e,n,i,s,o,a,c,l){super(t,e,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ll extends We{constructor(t,e,n,i,s,o,a,c,l,h=$i){if(h!==$i&&h!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===$i&&(n=Si),n===void 0&&h===is&&(n=ns),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:xn,this.minFilter=c!==void 0?c:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new wa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Tn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),c=e||(o.isVector2?new ft:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new U,i=[],s=[],o=[],a=new U,c=new ye;for(let f=0;f<=t;f++){const m=f/t;i[f]=this.getTangentAt(m,new U)}s[0]=new U,o[0]=new U;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(ie(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(ie(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let m=1;m<=t;m++)s[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ea extends Tn{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ft){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class vd extends Ea{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ba(){let r=0,t=0,e=0,n=0;function i(s,o,a,c){r=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){i(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const eo=new U,ir=new ba,sr=new ba,or=new ba;class wd extends Tn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new U){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%s]:(eo.subVectors(i[0],i[1]).add(i[0]),l=eo);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(eo.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=eo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),ir.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,x,g),sr.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,x,g),or.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(ir.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),sr.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),or.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(ir.calc(c),sr.calc(c),or.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new U().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function oc(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,c=r*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*r+e}function _d(r,t){const e=1-r;return e*e*t}function yd(r,t){return 2*(1-r)*r*t}function Md(r,t){return r*r*t}function Es(r,t,e,n){return _d(r,t)+yd(r,e)+Md(r,n)}function Sd(r,t){const e=1-r;return e*e*e*t}function Ed(r,t){const e=1-r;return 3*e*e*r*t}function bd(r,t){return 3*(1-r)*r*r*t}function Td(r,t){return r*r*r*t}function bs(r,t,e,n,i){return Sd(r,t)+Ed(r,e)+bd(r,n)+Td(r,i)}class Il extends Tn{constructor(t=new ft,e=new ft,n=new ft,i=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ft){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(bs(t,i.x,s.x,o.x,a.x),bs(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ad extends Tn{constructor(t=new U,e=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new U){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(bs(t,i.x,s.x,o.x,a.x),bs(t,i.y,s.y,o.y,a.y),bs(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Dl extends Tn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cd extends Tn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nl extends Tn{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Es(t,i.x,s.x,o.x),Es(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rd extends Tn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Es(t,i.x,s.x,o.x),Es(t,i.y,s.y,o.y),Es(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ul extends Tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(oc(a,c.x,l.x,h.x,u.x),oc(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ft().fromArray(i))}return this}}var oa=Object.freeze({__proto__:null,ArcCurve:vd,CatmullRomCurve3:wd,CubicBezierCurve:Il,CubicBezierCurve3:Ad,EllipseCurve:Ea,LineCurve:Dl,LineCurve3:Cd,QuadraticBezierCurve:Nl,QuadraticBezierCurve3:Rd,SplineCurve:Ul});class Pd extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new oa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new oa[i.type]().fromJSON(i))}return this}}class rc extends Pd{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Dl(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Nl(this.currentPoint.clone(),new ft(t,e),new ft(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new Il(this.currentPoint.clone(),new ft(t,e),new ft(n,i),new ft(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ul(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,s,o,a,c),this}absellipse(t,e,n,i,s,o,a,c){const l=new Ea(t,e,n,i,s,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ta extends Xe{constructor(t=[new ft(0,-.5),new ft(.5,0),new ft(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ie(i,0,Math.PI*2);const s=[],o=[],a=[],c=[],l=[],h=1/e,u=new U,d=new ft,f=new U,m=new U,x=new U;let g=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(m)}for(let v=0;v<=e;v++){const _=n+v*h*i,w=Math.sin(_),b=Math.cos(_);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*w,u.y=t[E].y,u.z=t[E].x*b,o.push(u.x,u.y,u.z),d.x=v/e,d.y=E/(t.length-1),a.push(d.x,d.y);const C=c[3*E+0]*w,P=c[3*E+1],S=c[3*E+0]*b;l.push(C,P,S)}}for(let v=0;v<e;v++)for(let _=0;_<t.length-1;_++){const w=_+v*t.length,b=w,E=w+t.length,C=w+t.length+1,P=w+1;s.push(b,E,P),s.push(C,P,E)}this.setIndex(s),this.setAttribute("position",new pe(o,3)),this.setAttribute("uv",new pe(a,2)),this.setAttribute("normal",new pe(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ta(t.points,t.segments,t.phiStart,t.phiLength)}}class Us extends Xe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],c=[],l=new U,h=new ft;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(a,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Us(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class et extends Xe{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let m=0;const x=[],g=n/2;let p=0;v(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(d,3)),this.setAttribute("uv",new pe(f,2));function v(){const w=new U,b=new U;let E=0;const C=(e-t)/n;for(let P=0;P<=s;P++){const S=[],M=P/s,L=M*(e-t)+t;for(let k=0;k<=i;k++){const N=k/i,B=N*c+a,z=Math.sin(B),F=Math.cos(B);b.x=L*z,b.y=-M*n+g,b.z=L*F,u.push(b.x,b.y,b.z),w.set(z,C,F).normalize(),d.push(w.x,w.y,w.z),f.push(N,1-M),S.push(m++)}x.push(S)}for(let P=0;P<i;P++)for(let S=0;S<s;S++){const M=x[S][P],L=x[S+1][P],k=x[S+1][P+1],N=x[S][P+1];(t>0||S!==0)&&(h.push(M,L,N),E+=3),(e>0||S!==s-1)&&(h.push(L,k,N),E+=3)}l.addGroup(p,E,0),p+=E}function _(w){const b=m,E=new ft,C=new U;let P=0;const S=w===!0?t:e,M=w===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),m++;const L=m;for(let k=0;k<=i;k++){const B=k/i*c+a,z=Math.cos(B),F=Math.sin(B);C.x=S*F,C.y=g*M,C.z=S*z,u.push(C.x,C.y,C.z),d.push(0,M,0),E.x=z*.5+.5,E.y=F*.5*M+.5,f.push(E.x,E.y),m++}for(let k=0;k<i;k++){const N=b+k,B=L+k;w===!0?h.push(B,B+1,N):h.push(B+1,B,N),P+=3}l.addGroup(p,P,w===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new et(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _e extends et{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new _e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Aa extends Xe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),l(n),h(),this.setAttribute("position",new pe(s,3)),this.setAttribute("normal",new pe(s.slice(),3)),this.setAttribute("uv",new pe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const _=new U,w=new U,b=new U;for(let E=0;E<e.length;E+=3)f(e[E+0],_),f(e[E+1],w),f(e[E+2],b),c(_,w,b,v)}function c(v,_,w,b){const E=b+1,C=[];for(let P=0;P<=E;P++){C[P]=[];const S=v.clone().lerp(w,P/E),M=_.clone().lerp(w,P/E),L=E-P;for(let k=0;k<=L;k++)k===0&&P===E?C[P][k]=S:C[P][k]=S.clone().lerp(M,k/L)}for(let P=0;P<E;P++)for(let S=0;S<2*(E-P)-1;S++){const M=Math.floor(S/2);S%2===0?(d(C[P][M+1]),d(C[P+1][M]),d(C[P][M])):(d(C[P][M+1]),d(C[P+1][M+1]),d(C[P+1][M]))}}function l(v){const _=new U;for(let w=0;w<s.length;w+=3)_.x=s[w+0],_.y=s[w+1],_.z=s[w+2],_.normalize().multiplyScalar(v),s[w+0]=_.x,s[w+1]=_.y,s[w+2]=_.z}function h(){const v=new U;for(let _=0;_<s.length;_+=3){v.x=s[_+0],v.y=s[_+1],v.z=s[_+2];const w=g(v)/2/Math.PI+.5,b=p(v)/Math.PI+.5;o.push(w,1-b)}m(),u()}function u(){for(let v=0;v<o.length;v+=6){const _=o[v+0],w=o[v+2],b=o[v+4],E=Math.max(_,w,b),C=Math.min(_,w,b);E>.9&&C<.1&&(_<.2&&(o[v+0]+=1),w<.2&&(o[v+2]+=1),b<.2&&(o[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,_){const w=v*3;_.x=t[w+0],_.y=t[w+1],_.z=t[w+2]}function m(){const v=new U,_=new U,w=new U,b=new U,E=new ft,C=new ft,P=new ft;for(let S=0,M=0;S<s.length;S+=9,M+=6){v.set(s[S+0],s[S+1],s[S+2]),_.set(s[S+3],s[S+4],s[S+5]),w.set(s[S+6],s[S+7],s[S+8]),E.set(o[M+0],o[M+1]),C.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),b.copy(v).add(_).add(w).divideScalar(3);const L=g(b);x(E,M+0,v,L),x(C,M+2,_,L),x(P,M+4,w,L)}}function x(v,_,w,b){b<0&&v.x===1&&(o[_]=v.x-1),w.x===0&&w.z===0&&(o[_]=b/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Aa(t.vertices,t.indices,t.radius,t.details)}}class nn extends Aa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new nn(t.radius,t.detail)}}let Fl=class extends rc{constructor(t){super(t),this.uuid=as(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new rc().fromJSON(i))}return this}};class Ld{static triangulate(t,e,n=2){const i=e&&e.length,s=i?e[0]*n:t.length;let o=Ol(t,0,s,n,!0);const a=[];if(!o||o.next===o.prev)return a;let c,l,h,u,d,f,m;if(i&&(o=Fd(t,e,o,n)),t.length>80*n){c=h=t[0],l=u=t[1];for(let x=n;x<s;x+=n)d=t[x],f=t[x+1],d<c&&(c=d),f<l&&(l=f),d>h&&(h=d),f>u&&(u=f);m=Math.max(h-c,u-l),m=m!==0?32767/m:0}return Rs(o,a,n,c,l,m,0),a}}function Ol(r,t,e,n,i){let s,o;if(i===Yd(r,t,e,n)>0)for(s=t;s<e;s+=n)o=ac(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=ac(s,r[s],r[s+1],o);return o&&To(o,o.next)&&(Ls(o),o=o.next),o}function bi(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(To(e,e.next)||Ee(e.prev,e,e.next)===0)){if(Ls(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Rs(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Vd(r,n,i,s);let a=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?Dd(r,n,i,s):Id(r)){t.push(c.i/e|0),t.push(r.i/e|0),t.push(l.i/e|0),Ls(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=Nd(bi(r),t,e),Rs(r,t,e,n,i,s,2)):o===2&&Ud(r,t,e,n,i,s):Rs(bi(r),t,e,n,i,s,1);break}}}function Id(r){const t=r.prev,e=r,n=r.next;if(Ee(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<c?a<l?a:l:c<l?c:l,d=i>s?i>o?i:o:s>o?s:o,f=a>c?a>l?a:l:c>l?c:l;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Zi(i,a,s,c,o,l,m.x,m.y)&&Ee(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Dd(r,t,e,n){const i=r.prev,s=r,o=r.next;if(Ee(i,s,o)>=0)return!1;const a=i.x,c=s.x,l=o.x,h=i.y,u=s.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,x=a>c?a>l?a:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=ra(f,m,t,e,n),v=ra(x,g,t,e,n);let _=r.prevZ,w=r.nextZ;for(;_&&_.z>=p&&w&&w.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&Zi(a,h,c,u,l,d,_.x,_.y)&&Ee(_.prev,_,_.next)>=0||(_=_.prevZ,w.x>=f&&w.x<=x&&w.y>=m&&w.y<=g&&w!==i&&w!==o&&Zi(a,h,c,u,l,d,w.x,w.y)&&Ee(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&Zi(a,h,c,u,l,d,_.x,_.y)&&Ee(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;w&&w.z<=v;){if(w.x>=f&&w.x<=x&&w.y>=m&&w.y<=g&&w!==i&&w!==o&&Zi(a,h,c,u,l,d,w.x,w.y)&&Ee(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function Nd(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!To(i,s)&&Bl(i,n,n.next,s)&&Ps(i,s)&&Ps(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Ls(n),Ls(n.next),n=r=s),n=n.next}while(n!==r);return bi(n)}function Ud(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Wd(o,a)){let c=zl(o,a);o=bi(o,o.next),c=bi(c,c.next),Rs(o,t,e,n,i,s,0),Rs(c,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Fd(r,t,e,n){const i=[];let s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*n,c=s<o-1?t[s+1]*n:r.length,l=Ol(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Hd(l));for(i.sort(Od),s=0;s<i.length;s++)e=Bd(i[s],e);return e}function Od(r,t){return r.x-t.x}function Bd(r,t){const e=zd(r,t);if(!e)return t;const n=zl(e,r);return bi(n,n.next),bi(e,e.next)}function zd(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;e=i;do s>=e.x&&e.x>=c&&s!==e.x&&Zi(o<l?s:n,o,c,l,o<l?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),Ps(e,r)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&kd(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function kd(r,t){return Ee(r.prev,r,t.prev)<0&&Ee(t.next,r,r.next)<0}function Vd(r,t,e,n){let i=r;do i.z===0&&(i.z=ra(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Gd(i)}function Gd(r){let t,e,n,i,s,o,a,c,l=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,l*=2}while(o>1);return r}function ra(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Hd(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Zi(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function Wd(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Xd(r,t)&&(Ps(r,t)&&Ps(t,r)&&qd(r,t)&&(Ee(r.prev,r,t.prev)||Ee(r,t.prev,t))||To(r,t)&&Ee(r.prev,r,r.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function To(r,t){return r.x===t.x&&r.y===t.y}function Bl(r,t,e,n){const i=io(Ee(r,t,e)),s=io(Ee(r,t,n)),o=io(Ee(e,n,r)),a=io(Ee(e,n,t));return!!(i!==s&&o!==a||i===0&&no(r,e,t)||s===0&&no(r,n,t)||o===0&&no(e,r,n)||a===0&&no(e,t,n))}function no(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function io(r){return r>0?1:r<0?-1:0}function Xd(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Bl(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Ps(r,t){return Ee(r.prev,r,r.next)<0?Ee(r,t,r.next)>=0&&Ee(r,r.prev,t)>=0:Ee(r,t,r.prev)<0||Ee(r,r.next,t)<0}function qd(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function zl(r,t){const e=new aa(r.i,r.x,r.y),n=new aa(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function ac(r,t,e,n){const i=new aa(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ls(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function aa(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Yd(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Ts{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Ts.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];cc(t),lc(n,t);let o=t.length;e.forEach(cc);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,lc(n,e[c]);const a=Ld.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function cc(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function lc(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Ca extends Xe{constructor(t=new Fl([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new pe(i,3)),this.setAttribute("uv",new pe(s,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Zd;let _,w=!1,b,E,C,P;p&&(_=p.getSpacedPoints(h),w=!0,d=!1,b=p.computeFrenetFrames(h,!1),E=new U,C=new U,P=new U),d||(g=0,f=0,m=0,x=0);const S=a.extractPoints(l);let M=S.shape;const L=S.holes;if(!Ts.isClockWise(M)){M=M.reverse();for(let at=0,ot=L.length;at<ot;at++){const D=L[at];Ts.isClockWise(D)&&(L[at]=D.reverse())}}const N=Ts.triangulateShape(M,L),B=M;for(let at=0,ot=L.length;at<ot;at++){const D=L[at];M=M.concat(D)}function z(at,ot,D){return ot||console.error("THREE.ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(ot,D)}const F=M.length,Y=N.length;function G(at,ot,D){let Ft,lt,At;const ut=at.x-ot.x,kt=at.y-ot.y,_t=D.x-at.x,I=D.y-at.y,T=ut*ut+kt*kt,q=ut*I-kt*_t;if(Math.abs(q)>Number.EPSILON){const tt=Math.sqrt(T),st=Math.sqrt(_t*_t+I*I),Q=ot.x-kt/tt,Dt=ot.y+ut/tt,vt=D.x-I/st,Tt=D.y+_t/st,Yt=((vt-Q)*I-(Tt-Dt)*_t)/(ut*I-kt*_t);Ft=Q+ut*Yt-at.x,lt=Dt+kt*Yt-at.y;const it=Ft*Ft+lt*lt;if(it<=2)return new ft(Ft,lt);At=Math.sqrt(it/2)}else{let tt=!1;ut>Number.EPSILON?_t>Number.EPSILON&&(tt=!0):ut<-Number.EPSILON?_t<-Number.EPSILON&&(tt=!0):Math.sign(kt)===Math.sign(I)&&(tt=!0),tt?(Ft=-kt,lt=ut,At=Math.sqrt(T)):(Ft=ut,lt=kt,At=Math.sqrt(T/2))}return new ft(Ft/At,lt/At)}const J=[];for(let at=0,ot=B.length,D=ot-1,Ft=at+1;at<ot;at++,D++,Ft++)D===ot&&(D=0),Ft===ot&&(Ft=0),J[at]=G(B[at],B[D],B[Ft]);const ht=[];let gt,ct=J.concat();for(let at=0,ot=L.length;at<ot;at++){const D=L[at];gt=[];for(let Ft=0,lt=D.length,At=lt-1,ut=Ft+1;Ft<lt;Ft++,At++,ut++)At===lt&&(At=0),ut===lt&&(ut=0),gt[Ft]=G(D[Ft],D[At],D[ut]);ht.push(gt),ct=ct.concat(gt)}for(let at=0;at<g;at++){const ot=at/g,D=f*Math.cos(ot*Math.PI/2),Ft=m*Math.sin(ot*Math.PI/2)+x;for(let lt=0,At=B.length;lt<At;lt++){const ut=z(B[lt],J[lt],Ft);dt(ut.x,ut.y,-D)}for(let lt=0,At=L.length;lt<At;lt++){const ut=L[lt];gt=ht[lt];for(let kt=0,_t=ut.length;kt<_t;kt++){const I=z(ut[kt],gt[kt],Ft);dt(I.x,I.y,-D)}}}const qt=m+x;for(let at=0;at<F;at++){const ot=d?z(M[at],ct[at],qt):M[at];w?(C.copy(b.normals[0]).multiplyScalar(ot.x),E.copy(b.binormals[0]).multiplyScalar(ot.y),P.copy(_[0]).add(C).add(E),dt(P.x,P.y,P.z)):dt(ot.x,ot.y,0)}for(let at=1;at<=h;at++)for(let ot=0;ot<F;ot++){const D=d?z(M[ot],ct[ot],qt):M[ot];w?(C.copy(b.normals[at]).multiplyScalar(D.x),E.copy(b.binormals[at]).multiplyScalar(D.y),P.copy(_[at]).add(C).add(E),dt(P.x,P.y,P.z)):dt(D.x,D.y,u/h*at)}for(let at=g-1;at>=0;at--){const ot=at/g,D=f*Math.cos(ot*Math.PI/2),Ft=m*Math.sin(ot*Math.PI/2)+x;for(let lt=0,At=B.length;lt<At;lt++){const ut=z(B[lt],J[lt],Ft);dt(ut.x,ut.y,u+D)}for(let lt=0,At=L.length;lt<At;lt++){const ut=L[lt];gt=ht[lt];for(let kt=0,_t=ut.length;kt<_t;kt++){const I=z(ut[kt],gt[kt],Ft);w?dt(I.x,I.y+_[h-1].y,_[h-1].x+D):dt(I.x,I.y,u+D)}}}K(),rt();function K(){const at=i.length/3;if(d){let ot=0,D=F*ot;for(let Ft=0;Ft<Y;Ft++){const lt=N[Ft];Ut(lt[2]+D,lt[1]+D,lt[0]+D)}ot=h+g*2,D=F*ot;for(let Ft=0;Ft<Y;Ft++){const lt=N[Ft];Ut(lt[0]+D,lt[1]+D,lt[2]+D)}}else{for(let ot=0;ot<Y;ot++){const D=N[ot];Ut(D[2],D[1],D[0])}for(let ot=0;ot<Y;ot++){const D=N[ot];Ut(D[0]+F*h,D[1]+F*h,D[2]+F*h)}}n.addGroup(at,i.length/3-at,0)}function rt(){const at=i.length/3;let ot=0;xt(B,ot),ot+=B.length;for(let D=0,Ft=L.length;D<Ft;D++){const lt=L[D];xt(lt,ot),ot+=lt.length}n.addGroup(at,i.length/3-at,1)}function xt(at,ot){let D=at.length;for(;--D>=0;){const Ft=D;let lt=D-1;lt<0&&(lt=at.length-1);for(let At=0,ut=h+g*2;At<ut;At++){const kt=F*At,_t=F*(At+1),I=ot+Ft+kt,T=ot+lt+kt,q=ot+lt+_t,tt=ot+Ft+_t;Ht(I,T,q,tt)}}}function dt(at,ot,D){c.push(at),c.push(ot),c.push(D)}function Ut(at,ot,D){Mt(at),Mt(ot),Mt(D);const Ft=i.length/3,lt=v.generateTopUV(n,i,Ft-3,Ft-2,Ft-1);oe(lt[0]),oe(lt[1]),oe(lt[2])}function Ht(at,ot,D,Ft){Mt(at),Mt(ot),Mt(Ft),Mt(ot),Mt(D),Mt(Ft);const lt=i.length/3,At=v.generateSideWallUV(n,i,lt-6,lt-3,lt-2,lt-1);oe(At[0]),oe(At[1]),oe(At[3]),oe(At[1]),oe(At[2]),oe(At[3])}function Mt(at){i.push(c[at*3+0]),i.push(c[at*3+1]),i.push(c[at*3+2])}function oe(at){s.push(at.x),s.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return jd(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new oa[i.type]().fromJSON(i)),new Ca(n,t.options)}}const Zd={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new ft(s,o),new ft(a,c),new ft(l,h)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],m=t[i*3+2],x=t[s*3],g=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ft(o,1-c),new ft(l,1-u),new ft(d,1-m),new ft(x,1-p)]:[new ft(a,1-c),new ft(h,1-u),new ft(f,1-m),new ft(g,1-p)]}};function jd(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Kt extends Xe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){const v=p*d-o;for(let _=0;_<l;_++){const w=_*u-s;m.push(w,-v,0),x.push(0,0,1),g.push(_/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const _=v+l*p,w=v+l*(p+1),b=v+1+l*(p+1),E=v+1+l*p;f.push(_,w,E),f.push(w,b,E)}this.setIndex(f),this.setAttribute("position",new pe(m,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kt(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ra extends Xe{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/i,f=new U,m=new ft;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){const p=s+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<i;x++){const g=x*(n+1);for(let p=0;p<n;p++){const v=p+g,_=v,w=v+n+1,b=v+n+2,E=v+1;a.push(_,w,E),a.push(w,b,E)}}this.setIndex(a),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ra(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class re extends Xe{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new U,d=new U,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){const v=[],_=p/n;let w=0;p===0&&o===0?w=.5/e:p===n&&c===Math.PI&&(w=-.5/e);for(let b=0;b<=e;b++){const E=b/e;u.x=-t*Math.cos(i+E*s)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(i+E*s)*Math.sin(o+_*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(E+w,1-_),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const _=h[p][v+1],w=h[p][v],b=h[p+1][v],E=h[p+1][v+1];(p!==0||o>0)&&f.push(_,w,E),(p!==n-1||c<Math.PI)&&f.push(w,b,E)}this.setIndex(f),this.setAttribute("position",new pe(m,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new re(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class So extends Xe{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new U,u=new U,d=new U;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const x=m/i*s,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const x=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,v=(i+1)*f+m;o.push(x,g,v),o.push(g,p,v)}this.setIndex(o),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(c,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new So(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class H extends cs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class gi extends cs{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new se(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Kd extends cs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $d extends cs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ao extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Jd extends Ao{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const rr=new ye,hc=new U,dc=new U;class Pa{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sa,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;hc.setFromMatrixPosition(t.matrixWorld),e.position.copy(hc),dc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dc),e.updateMatrixWorld(),rr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Qd extends Pa{constructor(){super(new $e(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=yo*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class ca extends Ao{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Qd}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const uc=new ye,vs=new U,ar=new U;class tu extends Pa{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),vs.setFromMatrixPosition(t.matrixWorld),n.position.copy(vs),ar.copy(n.position),ar.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ar),n.updateMatrixWorld(),i.makeTranslation(-vs.x,-vs.y,-vs.z),uc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uc)}}class cr extends Ao{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new tu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class kl extends Rl{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class eu extends Pa{constructor(){super(new kl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nu extends Ao{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new eu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class iu extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}const fc=new ye;class su{constructor(t,e,n=0,i=1/0){this.ray=new El(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ya,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return fc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fc),this}intersectObject(t,e=!0,n=[]){return la(t,this,n,e),n.sort(pc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)la(t[i],this,n,e);return n.sort(pc),n}}function pc(r,t){return r.distance-t.distance}function la(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)la(s[o],t,e,!0)}}function mc(r,t,e,n){const i=ou(n);switch(e){case pl:return r*t;case gl:return r*t;case xl:return r*t*2;case vl:return r*t/i.components*i.byteLength;case ma:return r*t/i.components*i.byteLength;case wl:return r*t*2/i.components*i.byteLength;case ga:return r*t*2/i.components*i.byteLength;case ml:return r*t*3/i.components*i.byteLength;case mn:return r*t*4/i.components*i.byteLength;case xa:return r*t*4/i.components*i.byteLength;case fo:case po:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case mo:case go:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Nr:case Fr:return Math.max(r,16)*Math.max(t,8)/4;case Dr:case Ur:return Math.max(r,8)*Math.max(t,8)/2;case Or:case Br:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case zr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case kr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Vr:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Gr:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Hr:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Wr:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Xr:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case qr:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Yr:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Zr:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case jr:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Kr:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case $r:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Jr:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Qr:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case xo:case ta:case ea:return Math.ceil(r/4)*Math.ceil(t/4)*16;case _l:case na:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ia:case sa:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ou(r){switch(r){case Gn:case dl:return{byteLength:1,components:1};case Cs:case ul:case Is:return{byteLength:2,components:1};case fa:case pa:return{byteLength:2,components:4};case Si:case ua:case zn:return{byteLength:4,components:1};case fl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=da);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vl(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function ru(r){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,a),u.length===0)r.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const x=u[f];r.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(r.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}var au=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,du=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_u=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Au=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ru=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Pu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Iu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Du=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ou="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ku=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ju=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ku=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$u=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ju=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ef=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,of=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,af=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,df=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ff=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_f=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ef=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,If=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Df=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ff=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Of=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Wf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$f=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ep=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,np=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ap=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_p=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ep=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ap=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ip=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Np=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Up=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Op=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ee={alphahash_fragment:au,alphahash_pars_fragment:cu,alphamap_fragment:lu,alphamap_pars_fragment:hu,alphatest_fragment:du,alphatest_pars_fragment:uu,aomap_fragment:fu,aomap_pars_fragment:pu,batching_pars_vertex:mu,batching_vertex:gu,begin_vertex:xu,beginnormal_vertex:vu,bsdfs:wu,iridescence_fragment:_u,bumpmap_pars_fragment:yu,clipping_planes_fragment:Mu,clipping_planes_pars_fragment:Su,clipping_planes_pars_vertex:Eu,clipping_planes_vertex:bu,color_fragment:Tu,color_pars_fragment:Au,color_pars_vertex:Cu,color_vertex:Ru,common:Pu,cube_uv_reflection_fragment:Lu,defaultnormal_vertex:Iu,displacementmap_pars_vertex:Du,displacementmap_vertex:Nu,emissivemap_fragment:Uu,emissivemap_pars_fragment:Fu,colorspace_fragment:Ou,colorspace_pars_fragment:Bu,envmap_fragment:zu,envmap_common_pars_fragment:ku,envmap_pars_fragment:Vu,envmap_pars_vertex:Gu,envmap_physical_pars_fragment:Qu,envmap_vertex:Hu,fog_vertex:Wu,fog_pars_vertex:Xu,fog_fragment:qu,fog_pars_fragment:Yu,gradientmap_pars_fragment:Zu,lightmap_pars_fragment:ju,lights_lambert_fragment:Ku,lights_lambert_pars_fragment:$u,lights_pars_begin:Ju,lights_toon_fragment:tf,lights_toon_pars_fragment:ef,lights_phong_fragment:nf,lights_phong_pars_fragment:sf,lights_physical_fragment:of,lights_physical_pars_fragment:rf,lights_fragment_begin:af,lights_fragment_maps:cf,lights_fragment_end:lf,logdepthbuf_fragment:hf,logdepthbuf_pars_fragment:df,logdepthbuf_pars_vertex:uf,logdepthbuf_vertex:ff,map_fragment:pf,map_pars_fragment:mf,map_particle_fragment:gf,map_particle_pars_fragment:xf,metalnessmap_fragment:vf,metalnessmap_pars_fragment:wf,morphinstance_vertex:_f,morphcolor_vertex:yf,morphnormal_vertex:Mf,morphtarget_pars_vertex:Sf,morphtarget_vertex:Ef,normal_fragment_begin:bf,normal_fragment_maps:Tf,normal_pars_fragment:Af,normal_pars_vertex:Cf,normal_vertex:Rf,normalmap_pars_fragment:Pf,clearcoat_normal_fragment_begin:Lf,clearcoat_normal_fragment_maps:If,clearcoat_pars_fragment:Df,iridescence_pars_fragment:Nf,opaque_fragment:Uf,packing:Ff,premultiplied_alpha_fragment:Of,project_vertex:Bf,dithering_fragment:zf,dithering_pars_fragment:kf,roughnessmap_fragment:Vf,roughnessmap_pars_fragment:Gf,shadowmap_pars_fragment:Hf,shadowmap_pars_vertex:Wf,shadowmap_vertex:Xf,shadowmask_pars_fragment:qf,skinbase_vertex:Yf,skinning_pars_vertex:Zf,skinning_vertex:jf,skinnormal_vertex:Kf,specularmap_fragment:$f,specularmap_pars_fragment:Jf,tonemapping_fragment:Qf,tonemapping_pars_fragment:tp,transmission_fragment:ep,transmission_pars_fragment:np,uv_pars_fragment:ip,uv_pars_vertex:sp,uv_vertex:op,worldpos_vertex:rp,background_vert:ap,background_frag:cp,backgroundCube_vert:lp,backgroundCube_frag:hp,cube_vert:dp,cube_frag:up,depth_vert:fp,depth_frag:pp,distanceRGBA_vert:mp,distanceRGBA_frag:gp,equirect_vert:xp,equirect_frag:vp,linedashed_vert:wp,linedashed_frag:_p,meshbasic_vert:yp,meshbasic_frag:Mp,meshlambert_vert:Sp,meshlambert_frag:Ep,meshmatcap_vert:bp,meshmatcap_frag:Tp,meshnormal_vert:Ap,meshnormal_frag:Cp,meshphong_vert:Rp,meshphong_frag:Pp,meshphysical_vert:Lp,meshphysical_frag:Ip,meshtoon_vert:Dp,meshtoon_frag:Np,points_vert:Up,points_frag:Fp,shadow_vert:Op,shadow_frag:Bp,sprite_vert:zp,sprite_frag:kp},yt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},yn={basic:{uniforms:Ge([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Ge([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new se(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Ge([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Ge([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Ge([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new se(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Ge([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Ge([yt.points,yt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Ge([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Ge([yt.common,yt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Ge([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Ge([yt.sprite,yt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:Ge([yt.common,yt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:Ge([yt.lights,yt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};yn.physical={uniforms:Ge([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const so={r:0,b:0,g:0},hi=new bn,Vp=new ye;function Gp(r,t,e,n,i,s,o){const a=new se(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function m(_){let w=_.isScene===!0?_.background:null;return w&&w.isTexture&&(w=(_.backgroundBlurriness>0?e:t).get(w)),w}function x(_){let w=!1;const b=m(_);b===null?p(a,c):b&&b.isColor&&(p(b,1),w=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(_,w){const b=m(w);b&&(b.isCubeTexture||b.mapping===bo)?(h===void 0&&(h=new y(new O(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:os(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),hi.copy(w.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Vp.makeRotationFromEuler(hi)),h.material.toneMapped=le.getTransfer(b.colorSpace)!==ge,(u!==b||d!==b.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,f=r.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new y(new Kt(2,2),new ei({name:"BackgroundMaterial",uniforms:os(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=le.getTransfer(b.colorSpace)!==ge,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,f=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,w){_.getRGB(so,Cl(r)),n.buffers.color.setClear(so.r,so.g,so.b,w,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,w=1){a.set(_),c=w,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(a,c)},render:x,addToRenderList:g,dispose:v}}function Hp(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(M,L,k,N,B){let z=!1;const F=u(N,k,L);s!==F&&(s=F,l(s.object)),z=f(M,N,k,B),z&&m(M,N,k,B),B!==null&&t.update(B,r.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,w(M,L,k,N),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return r.createVertexArray()}function l(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function u(M,L,k){const N=k.wireframe===!0;let B=n[M.id];B===void 0&&(B={},n[M.id]=B);let z=B[L.id];z===void 0&&(z={},B[L.id]=z);let F=z[N];return F===void 0&&(F=d(c()),z[N]=F),F}function d(M){const L=[],k=[],N=[];for(let B=0;B<e;B++)L[B]=0,k[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:N,object:M,attributes:{},index:null}}function f(M,L,k,N){const B=s.attributes,z=L.attributes;let F=0;const Y=k.getAttributes();for(const G in Y)if(Y[G].location>=0){const ht=B[G];let gt=z[G];if(gt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(gt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(gt=M.instanceColor)),ht===void 0||ht.attribute!==gt||gt&&ht.data!==gt.data)return!0;F++}return s.attributesNum!==F||s.index!==N}function m(M,L,k,N){const B={},z=L.attributes;let F=0;const Y=k.getAttributes();for(const G in Y)if(Y[G].location>=0){let ht=z[G];ht===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor));const gt={};gt.attribute=ht,ht&&ht.data&&(gt.data=ht.data),B[G]=gt,F++}s.attributes=B,s.attributesNum=F,s.index=N}function x(){const M=s.newAttributes;for(let L=0,k=M.length;L<k;L++)M[L]=0}function g(M){p(M,0)}function p(M,L){const k=s.newAttributes,N=s.enabledAttributes,B=s.attributeDivisors;k[M]=1,N[M]===0&&(r.enableVertexAttribArray(M),N[M]=1),B[M]!==L&&(r.vertexAttribDivisor(M,L),B[M]=L)}function v(){const M=s.newAttributes,L=s.enabledAttributes;for(let k=0,N=L.length;k<N;k++)L[k]!==M[k]&&(r.disableVertexAttribArray(k),L[k]=0)}function _(M,L,k,N,B,z,F){F===!0?r.vertexAttribIPointer(M,L,k,B,z):r.vertexAttribPointer(M,L,k,N,B,z)}function w(M,L,k,N){x();const B=N.attributes,z=k.getAttributes(),F=L.defaultAttributeValues;for(const Y in z){const G=z[Y];if(G.location>=0){let J=B[Y];if(J===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),J!==void 0){const ht=J.normalized,gt=J.itemSize,ct=t.get(J);if(ct===void 0)continue;const qt=ct.buffer,K=ct.type,rt=ct.bytesPerElement,xt=K===r.INT||K===r.UNSIGNED_INT||J.gpuType===ua;if(J.isInterleavedBufferAttribute){const dt=J.data,Ut=dt.stride,Ht=J.offset;if(dt.isInstancedInterleavedBuffer){for(let Mt=0;Mt<G.locationSize;Mt++)p(G.location+Mt,dt.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Mt=0;Mt<G.locationSize;Mt++)g(G.location+Mt);r.bindBuffer(r.ARRAY_BUFFER,qt);for(let Mt=0;Mt<G.locationSize;Mt++)_(G.location+Mt,gt/G.locationSize,K,ht,Ut*rt,(Ht+gt/G.locationSize*Mt)*rt,xt)}else{if(J.isInstancedBufferAttribute){for(let dt=0;dt<G.locationSize;dt++)p(G.location+dt,J.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let dt=0;dt<G.locationSize;dt++)g(G.location+dt);r.bindBuffer(r.ARRAY_BUFFER,qt);for(let dt=0;dt<G.locationSize;dt++)_(G.location+dt,gt/G.locationSize,K,ht,gt*rt,gt/G.locationSize*dt*rt,xt)}}else if(F!==void 0){const ht=F[Y];if(ht!==void 0)switch(ht.length){case 2:r.vertexAttrib2fv(G.location,ht);break;case 3:r.vertexAttrib3fv(G.location,ht);break;case 4:r.vertexAttrib4fv(G.location,ht);break;default:r.vertexAttrib1fv(G.location,ht)}}}}v()}function b(){P();for(const M in n){const L=n[M];for(const k in L){const N=L[k];for(const B in N)h(N[B].object),delete N[B];delete L[k]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const k in L){const N=L[k];for(const B in N)h(N[B].object),delete N[B];delete L[k]}delete n[M.id]}function C(M){for(const L in n){const k=n[L];if(k[M.id]===void 0)continue;const N=k[M.id];for(const B in N)h(N[B].object),delete N[B];delete k[M.id]}}function P(){S(),o=!0,s!==i&&(s=i,l(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function Wp(r,t,e){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];e.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Xp(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==mn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===Is&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Gn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==zn&&!P)}function c(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=m>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:w,vertexTextures:b,maxSamples:E}}function qp(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new mi,a=new Qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=r.get(u);if(!i||m===null||m.length===0||s&&!g)s?h(null):l();else{const v=s?0:n,_=v*4;let w=p.clippingState||null;c.value=w,w=h(m,d,_,f);for(let b=0;b!==_;++b)w[b]=e[b];p.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=c.value,m!==!0||g===null){const p=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,w=f;_!==x;++_,w+=4)o.copy(u[_]).applyMatrix4(v,a),o.normal.toArray(g,w),g[w+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Yp(r){let t=new WeakMap;function e(o,a){return a===Pr?o.mapping=ts:a===Lr&&(o.mapping=es),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Pr||a===Lr)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new fd(c.height);return l.fromEquirectangularTexture(r,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const ji=4,gc=[.125,.215,.35,.446,.526,.582],wi=20,lr=new kl,xc=new se;let hr=null,dr=0,ur=0,fr=!1;const xi=(1+Math.sqrt(5))/2,Xi=1/xi,vc=[new U(-xi,Xi,0),new U(xi,Xi,0),new U(-Xi,0,xi),new U(Xi,0,xi),new U(0,xi,-Xi),new U(0,xi,Xi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Zp=new U;class wc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,s={}){const{size:o=256,position:a=Zp}=s;hr=this._renderer.getRenderTarget(),dr=this._renderer.getActiveCubeFace(),ur=this._renderer.getActiveMipmapLevel(),fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hr,dr,ur),this._renderer.xr.enabled=fr,t.scissorTest=!1,oo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ts||t.mapping===es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hr=this._renderer.getRenderTarget(),dr=this._renderer.getActiveCubeFace(),ur=this._renderer.getActiveMipmapLevel(),fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Is,format:mn,colorSpace:ss,depthBuffer:!1},i=_c(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_c(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jp(s)),this._blurMaterial=Kp(s,t,e)}return i}_compileMaterial(t){const e=new y(this._lodPlanes[0],t);this._renderer.compile(e,lr)}_sceneToCubeUV(t,e,n,i,s){const c=new $e(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(xc),u.toneMapping=Qn,u.autoClear=!1;const m=new Bt({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),x=new y(new O,m);let g=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,g=!0):(m.color.copy(xc),g=!0);for(let v=0;v<6;v++){const _=v%3;_===0?(c.up.set(0,l[v],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[v],s.y,s.z)):_===1?(c.up.set(0,0,l[v]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[v],s.z)):(c.up.set(0,l[v],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[v]));const w=this._cubeSize;oo(i,_*w,v>2?w:0,w,w),u.setRenderTarget(i),g&&u.render(x,c),u.render(t,c)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ts||t.mapping===es;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new y(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;oo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,lr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=vc[(i-s-1)%vc.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new y(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*wi-1),x=s/m,g=isFinite(s)?1+Math.floor(h*x):wi;g>wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${wi}`);const p=[];let v=0;for(let C=0;C<wi;++C){const P=C/x,S=Math.exp(-P*P/2);p.push(S),C===0?v+=S:C<g&&(v+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;const w=this._sizeLods[i],b=3*w*(i>_-ji?i-_+ji:0),E=4*(this._cubeSize-w);oo(e,b,E,3*w,2*w),c.setRenderTarget(e),c.render(u,lr)}}function jp(r){const t=[],e=[],n=[];let i=r;const s=r-ji+1+gc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-ji?c=gc[o-r+ji-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,v=new Float32Array(x*m*f),_=new Float32Array(g*m*f),w=new Float32Array(p*m*f);for(let E=0;E<f;E++){const C=E%3*2/3-1,P=E>2?0:-1,S=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];v.set(S,x*m*E),_.set(d,g*m*E);const M=[E,E,E,E,E,E];w.set(M,p*m*E)}const b=new Xe;b.setAttribute("position",new En(v,x)),b.setAttribute("uv",new En(_,g)),b.setAttribute("faceIndex",new En(w,p)),t.push(b),i>ji&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function _c(r,t,e){const n=new Ei(r,t,e);return n.texture.mapping=bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oo(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Kp(r,t,e){const n=new Float32Array(wi),i=new U(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function yc(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Mc(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function La(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $p(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Pr||c===Lr,h=c===ts||c===es;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new wc(r)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new wc(r)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Jp(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&pi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Qp(r,t,e,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)t.update(d[f],r.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,m=u.attributes.position;let x=0;if(f!==null){const v=f.array;x=f.version;for(let _=0,w=v.length;_<w;_+=3){const b=v[_+0],E=v[_+1],C=v[_+2];d.push(b,E,E,C,C,b)}}else if(m!==void 0){const v=m.array;x=m.version;for(let _=0,w=v.length/3-1;_<w;_+=3){const b=_+0,E=_+1,C=_+2;d.push(b,E,E,C,C,b)}}else return;const g=new(Ml(d)?Al:Tl)(d,1);g.version=x;const p=s.get(u);p&&t.remove(p),s.set(u,g)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function t0(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*o),e.update(f,n,1)}function l(d,f,m){m!==0&&(r.drawElementsInstanced(n,f,s,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,x){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,x,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*x[v];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function e0(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function n0(r,t,e){const n=new WeakMap,i=new xe;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let w=0;m===!0&&(w=1),x===!0&&(w=2),g===!0&&(w=3);let b=a.attributes.position.count*w,E=1;b>t.maxTextureSize&&(E=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const C=new Float32Array(b*E*4*u),P=new Sl(C,b,E,u);P.type=zn,P.needsUpdate=!0;const S=w*4;for(let L=0;L<u;L++){const k=p[L],N=v[L],B=_[L],z=b*E*4*L;for(let F=0;F<k.count;F++){const Y=F*S;m===!0&&(i.fromBufferAttribute(k,F),C[z+Y+0]=i.x,C[z+Y+1]=i.y,C[z+Y+2]=i.z,C[z+Y+3]=0),x===!0&&(i.fromBufferAttribute(N,F),C[z+Y+4]=i.x,C[z+Y+5]=i.y,C[z+Y+6]=i.z,C[z+Y+7]=0),g===!0&&(i.fromBufferAttribute(B,F),C[z+Y+8]=i.x,C[z+Y+9]=i.y,C[z+Y+10]=i.z,C[z+Y+11]=B.itemSize===4?i.w:1)}}d={count:u,texture:P,size:new ft(b,E)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const x=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(r,"morphTargetBaseInfluence",x),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function i0(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const Gl=new We,Sc=new Ll(1,1),Hl=new Sl,Wl=new Kh,Xl=new Pl,Ec=[],bc=[],Tc=new Float32Array(16),Ac=new Float32Array(9),Cc=new Float32Array(4);function ls(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Ec[i];if(s===void 0&&(s=new Float32Array(i),Ec[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function De(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ne(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Co(r,t){let e=bc[t];e===void 0&&(e=new Int32Array(t),bc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function s0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function o0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;r.uniform2fv(this.addr,t),Ne(e,t)}}function r0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;r.uniform3fv(this.addr,t),Ne(e,t)}}function a0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;r.uniform4fv(this.addr,t),Ne(e,t)}}function c0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;Cc.set(n),r.uniformMatrix2fv(this.addr,!1,Cc),Ne(e,n)}}function l0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;Ac.set(n),r.uniformMatrix3fv(this.addr,!1,Ac),Ne(e,n)}}function h0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;Tc.set(n),r.uniformMatrix4fv(this.addr,!1,Tc),Ne(e,n)}}function d0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function u0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;r.uniform2iv(this.addr,t),Ne(e,t)}}function f0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;r.uniform3iv(this.addr,t),Ne(e,t)}}function p0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;r.uniform4iv(this.addr,t),Ne(e,t)}}function m0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function g0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;r.uniform2uiv(this.addr,t),Ne(e,t)}}function x0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;r.uniform3uiv(this.addr,t),Ne(e,t)}}function v0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;r.uniform4uiv(this.addr,t),Ne(e,t)}}function w0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Sc.compareFunction=yl,s=Sc):s=Gl,e.setTexture2D(t||s,i)}function _0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Wl,i)}function y0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Xl,i)}function M0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Hl,i)}function S0(r){switch(r){case 5126:return s0;case 35664:return o0;case 35665:return r0;case 35666:return a0;case 35674:return c0;case 35675:return l0;case 35676:return h0;case 5124:case 35670:return d0;case 35667:case 35671:return u0;case 35668:case 35672:return f0;case 35669:case 35673:return p0;case 5125:return m0;case 36294:return g0;case 36295:return x0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return _0;case 35680:case 36300:case 36308:case 36293:return y0;case 36289:case 36303:case 36311:case 36292:return M0}}function E0(r,t){r.uniform1fv(this.addr,t)}function b0(r,t){const e=ls(t,this.size,2);r.uniform2fv(this.addr,e)}function T0(r,t){const e=ls(t,this.size,3);r.uniform3fv(this.addr,e)}function A0(r,t){const e=ls(t,this.size,4);r.uniform4fv(this.addr,e)}function C0(r,t){const e=ls(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function R0(r,t){const e=ls(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function P0(r,t){const e=ls(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function L0(r,t){r.uniform1iv(this.addr,t)}function I0(r,t){r.uniform2iv(this.addr,t)}function D0(r,t){r.uniform3iv(this.addr,t)}function N0(r,t){r.uniform4iv(this.addr,t)}function U0(r,t){r.uniform1uiv(this.addr,t)}function F0(r,t){r.uniform2uiv(this.addr,t)}function O0(r,t){r.uniform3uiv(this.addr,t)}function B0(r,t){r.uniform4uiv(this.addr,t)}function z0(r,t,e){const n=this.cache,i=t.length,s=Co(e,i);De(n,s)||(r.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Gl,s[o])}function k0(r,t,e){const n=this.cache,i=t.length,s=Co(e,i);De(n,s)||(r.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Wl,s[o])}function V0(r,t,e){const n=this.cache,i=t.length,s=Co(e,i);De(n,s)||(r.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Xl,s[o])}function G0(r,t,e){const n=this.cache,i=t.length,s=Co(e,i);De(n,s)||(r.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Hl,s[o])}function H0(r){switch(r){case 5126:return E0;case 35664:return b0;case 35665:return T0;case 35666:return A0;case 35674:return C0;case 35675:return R0;case 35676:return P0;case 5124:case 35670:return L0;case 35667:case 35671:return I0;case 35668:case 35672:return D0;case 35669:case 35673:return N0;case 5125:return U0;case 36294:return F0;case 36295:return O0;case 36296:return B0;case 35678:case 36198:case 36298:case 36306:case 35682:return z0;case 35679:case 36299:case 36307:return k0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return G0}}class W0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=S0(e.type)}}class X0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=H0(e.type)}}class q0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const pr=/(\w+)(\])?(\[|\.)?/g;function Rc(r,t){r.seq.push(t),r.map[t.id]=t}function Y0(r,t,e){const n=r.name,i=n.length;for(pr.lastIndex=0;;){const s=pr.exec(n),o=pr.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Rc(e,l===void 0?new W0(a,r,t):new X0(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new q0(a),Rc(e,u)),e=u}}}class vo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Y0(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Pc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Z0=37297;let j0=0;function K0(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Lc=new Qt;function $0(r){le._getMatrix(Lc,le.workingColorSpace,r);const t=`mat3( ${Lc.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(r)){case wo:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Ic(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+K0(r.getShaderSource(t),o)}else return i}function J0(r,t){const e=$0(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Q0(r,t){let e;switch(t){case Sh:e="Linear";break;case Eh:e="Reinhard";break;case bh:e="Cineon";break;case ll:e="ACESFilmic";break;case Ah:e="AgX";break;case Ch:e="Neutral";break;case Th:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ro=new U;function tm(){le.getLuminanceCoefficients(ro);const r=ro.x.toFixed(4),t=ro.y.toFixed(4),e=ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function em(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function nm(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function im(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Ss(r){return r!==""}function Dc(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const sm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ha(r){return r.replace(sm,rm)}const om=new Map;function rm(r,t){let e=ee[t];if(e===void 0){const n=om.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ha(e)}const am=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uc(r){return r.replace(am,cm)}function cm(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Fc(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function lm(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===rl?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===al?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function hm(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ts:case es:t="ENVMAP_TYPE_CUBE";break;case bo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dm(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case es:t="ENVMAP_MODE_REFRACTION";break}return t}function um(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case cl:t="ENVMAP_BLENDING_MULTIPLY";break;case yh:t="ENVMAP_BLENDING_MIX";break;case Mh:t="ENVMAP_BLENDING_ADD";break}return t}function fm(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function pm(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=lm(e),l=hm(e),h=dm(e),u=um(e),d=fm(e),f=em(e),m=nm(s),x=i.createProgram();let g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ss).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ss).join(`
`),p.length>0&&(p+=`
`)):(g=[Fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),p=[Fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?ee.tonemapping_pars_fragment:"",e.toneMapping!==Qn?Q0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,J0("linearToOutputTexel",e.outputColorSpace),tm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ss).join(`
`)),o=ha(o),o=Dc(o,e),o=Nc(o,e),a=ha(a),a=Dc(a,e),a=Nc(a,e),o=Uc(o),a=Uc(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Va?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Va?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=v+g+o,w=v+p+a,b=Pc(i,i.VERTEX_SHADER,_),E=Pc(i,i.FRAGMENT_SHADER,w);i.attachShader(x,b),i.attachShader(x,E),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(L){if(r.debug.checkShaderErrors){const k=i.getProgramInfoLog(x).trim(),N=i.getShaderInfoLog(b).trim(),B=i.getShaderInfoLog(E).trim();let z=!0,F=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,b,E);else{const Y=Ic(i,b,"vertex"),G=Ic(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+Y+`
`+G)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(N===""||B==="")&&(F=!1);F&&(L.diagnostics={runnable:z,programLog:k,vertexShader:{log:N,prefix:g},fragmentShader:{log:B,prefix:p}})}i.deleteShader(b),i.deleteShader(E),P=new vo(i,x),S=im(i,x)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,Z0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=j0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=E,this}let mm=0;class gm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new xm(t),e.set(t,n)),n}}class xm{constructor(t){this.id=mm++,this.code=t,this.usedTimes=0}}function vm(r,t,e,n,i,s,o){const a=new ya,c=new gm,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,M,L,k,N){const B=k.fog,z=N.geometry,F=S.isMeshStandardMaterial?k.environment:null,Y=(S.isMeshStandardMaterial?e:t).get(S.envMap||F),G=Y&&Y.mapping===bo?Y.image.height:null,J=m[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ht=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,gt=ht!==void 0?ht.length:0;let ct=0;z.morphAttributes.position!==void 0&&(ct=1),z.morphAttributes.normal!==void 0&&(ct=2),z.morphAttributes.color!==void 0&&(ct=3);let qt,K,rt,xt;if(J){const te=yn[J];qt=te.vertexShader,K=te.fragmentShader}else qt=S.vertexShader,K=S.fragmentShader,c.update(S),rt=c.getVertexShaderID(S),xt=c.getFragmentShaderID(S);const dt=r.getRenderTarget(),Ut=r.state.buffers.depth.getReversed(),Ht=N.isInstancedMesh===!0,Mt=N.isBatchedMesh===!0,oe=!!S.map,at=!!S.matcap,ot=!!Y,D=!!S.aoMap,Ft=!!S.lightMap,lt=!!S.bumpMap,At=!!S.normalMap,ut=!!S.displacementMap,kt=!!S.emissiveMap,_t=!!S.metalnessMap,I=!!S.roughnessMap,T=S.anisotropy>0,q=S.clearcoat>0,tt=S.dispersion>0,st=S.iridescence>0,Q=S.sheen>0,Dt=S.transmission>0,vt=T&&!!S.anisotropyMap,Tt=q&&!!S.clearcoatMap,Yt=q&&!!S.clearcoatNormalMap,it=q&&!!S.clearcoatRoughnessMap,Rt=st&&!!S.iridescenceMap,Gt=st&&!!S.iridescenceThicknessMap,Wt=Q&&!!S.sheenColorMap,Ct=Q&&!!S.sheenRoughnessMap,ne=!!S.specularMap,$t=!!S.specularColorMap,he=!!S.specularIntensityMap,V=Dt&&!!S.transmissionMap,mt=Dt&&!!S.thicknessMap,$=!!S.gradientMap,nt=!!S.alphaMap,Et=S.alphaTest>0,wt=!!S.alphaHash,Zt=!!S.extensions;let ve=Qn;S.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(ve=r.toneMapping);const Ae={shaderID:J,shaderType:S.type,shaderName:S.name,vertexShader:qt,fragmentShader:K,defines:S.defines,customVertexShaderID:rt,customFragmentShaderID:xt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Mt,batchingColor:Mt&&N._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&N.instanceColor!==null,instancingMorph:Ht&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:dt===null?r.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:ss,alphaToCoverage:!!S.alphaToCoverage,map:oe,matcap:at,envMap:ot,envMapMode:ot&&Y.mapping,envMapCubeUVHeight:G,aoMap:D,lightMap:Ft,bumpMap:lt,normalMap:At,displacementMap:d&&ut,emissiveMap:kt,normalMapObjectSpace:At&&S.normalMapType===Ih,normalMapTangentSpace:At&&S.normalMapType===va,metalnessMap:_t,roughnessMap:I,anisotropy:T,anisotropyMap:vt,clearcoat:q,clearcoatMap:Tt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:it,dispersion:tt,iridescence:st,iridescenceMap:Rt,iridescenceThicknessMap:Gt,sheen:Q,sheenColorMap:Wt,sheenRoughnessMap:Ct,specularMap:ne,specularColorMap:$t,specularIntensityMap:he,transmission:Dt,transmissionMap:V,thicknessMap:mt,gradientMap:$,opaque:S.transparent===!1&&S.blending===Ki&&S.alphaToCoverage===!1,alphaMap:nt,alphaTest:Et,alphaHash:wt,combine:S.combine,mapUv:oe&&x(S.map.channel),aoMapUv:D&&x(S.aoMap.channel),lightMapUv:Ft&&x(S.lightMap.channel),bumpMapUv:lt&&x(S.bumpMap.channel),normalMapUv:At&&x(S.normalMap.channel),displacementMapUv:ut&&x(S.displacementMap.channel),emissiveMapUv:kt&&x(S.emissiveMap.channel),metalnessMapUv:_t&&x(S.metalnessMap.channel),roughnessMapUv:I&&x(S.roughnessMap.channel),anisotropyMapUv:vt&&x(S.anisotropyMap.channel),clearcoatMapUv:Tt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&x(S.sheenRoughnessMap.channel),specularMapUv:ne&&x(S.specularMap.channel),specularColorMapUv:$t&&x(S.specularColorMap.channel),specularIntensityMapUv:he&&x(S.specularIntensityMap.channel),transmissionMapUv:V&&x(S.transmissionMap.channel),thicknessMapUv:mt&&x(S.thicknessMap.channel),alphaMapUv:nt&&x(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(At||T),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(oe||nt),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ut,skinning:N.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:ct,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:ve,decodeVideoTexture:oe&&S.map.isVideoTexture===!0&&le.getTransfer(S.map.colorSpace)===ge,decodeVideoTextureEmissive:kt&&S.emissiveMap.isVideoTexture===!0&&le.getTransfer(S.emissiveMap.colorSpace)===ge,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Mn,flipSided:S.side===Je,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Zt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&S.extensions.multiDraw===!0||Mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(v(M,S),_(M,S),M.push(r.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function v(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function _(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function w(S){const M=m[S.type];let L;if(M){const k=yn[M];L=ld.clone(k.uniforms)}else L=S.uniforms;return L}function b(S,M){let L;for(let k=0,N=h.length;k<N;k++){const B=h[k];if(B.cacheKey===M){L=B,++L.usedTimes;break}}return L===void 0&&(L=new pm(r,M,S,s),h.push(L)),L}function E(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function C(S){c.remove(S)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:w,acquireProgram:b,releaseProgram:E,releaseShaderCache:C,programs:h,dispose:P}}function wm(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function _m(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Oc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Bc(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,m,x,g){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),t++,p}function a(u,d,f,m,x,g){const p=o(u,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,m,x,g){const p=o(u,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||_m),n.length>1&&n.sort(d||Oc),i.length>1&&i.sort(d||Oc)}function h(){for(let u=t,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function ym(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Bc,r.set(n,[o])):i>=s.length?(o=new Bc,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Mm(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new se};break;case"SpotLight":e={position:new U,direction:new U,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new U,halfWidth:new U,halfHeight:new U};break}return r[t.id]=e,e}}}function Sm(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Em=0;function bm(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Tm(r){const t=new Mm,e=Sm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const i=new U,s=new ye,o=new ye;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,v=0,_=0,w=0,b=0,E=0,C=0;l.sort(bm);for(let S=0,M=l.length;S<M;S++){const L=l[S],k=L.color,N=L.intensity,B=L.distance,z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=k.r*N,u+=k.g*N,d+=k.b*N;else if(L.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(L.sh.coefficients[F],N);C++}else if(L.isDirectionalLight){const F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Y=L.shadow,G=e.get(L);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=L.shadow.matrix,v++}n.directional[f]=F,f++}else if(L.isSpotLight){const F=t.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(k).multiplyScalar(N),F.distance=B,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,n.spot[x]=F;const Y=L.shadow;if(L.map&&(n.spotLightMap[b]=L.map,b++,Y.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[x]=Y.matrix,L.castShadow){const G=e.get(L);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=z,w++}x++}else if(L.isRectAreaLight){const F=t.get(L);F.color.copy(k).multiplyScalar(N),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=F,g++}else if(L.isPointLight){const F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),F.distance=L.distance,F.decay=L.decay,L.castShadow){const Y=L.shadow,G=e.get(L);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=z,n.pointShadowMatrix[m]=L.shadow.matrix,_++}n.point[m]=F,m++}else if(L.isHemisphereLight){const F=t.get(L);F.skyColor.copy(L.color).multiplyScalar(N),F.groundColor.copy(L.groundColor).multiplyScalar(N),n.hemi[p]=F,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==m||P.spotLength!==x||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==v||P.numPointShadows!==_||P.numSpotShadows!==w||P.numSpotMaps!==b||P.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=w+b-E,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,P.directionalLength=f,P.pointLength=m,P.spotLength=x,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=v,P.numPointShadows=_,P.numSpotShadows=w,P.numSpotMaps=b,P.numLightProbes=C,n.version=Em++)}function c(l,h){let u=0,d=0,f=0,m=0,x=0;const g=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const _=l[p];if(_.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),u++}else if(_.isSpotLight){const w=n.spot[f];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),f++}else if(_.isRectAreaLight){const w=n.rectArea[m];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),o.identity(),s.copy(_.matrixWorld),s.premultiply(g),o.extractRotation(s),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){const w=n.hemi[x];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function zc(r){const t=new Tm(r),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Am(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new zc(r),t.set(i,[a])):s>=o.length?(a=new zc(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Cm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Pm(r,t,e){let n=new Sa;const i=new ft,s=new ft,o=new xe,a=new Kd({depthPacking:Lh}),c=new $d,l={},h=e.maxTextureSize,u={[ti]:Je,[Je]:ti,[Mn]:Mn},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Cm,fragmentShader:Rm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Xe;m.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new y(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rl;let p=this.type;this.render=function(E,C,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const S=r.getRenderTarget(),M=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),k=r.state;k.setBlending(Jn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const N=p!==Bn&&this.type===Bn,B=p===Bn&&this.type!==Bn;for(let z=0,F=E.length;z<F;z++){const Y=E[z],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const J=G.getFrameExtents();if(i.multiply(J),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/J.x),i.x=s.x*J.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/J.y),i.y=s.y*J.y,G.mapSize.y=s.y)),G.map===null||N===!0||B===!0){const gt=this.type!==Bn?{minFilter:xn,magFilter:xn}:{};G.map!==null&&G.map.dispose(),G.map=new Ei(i.x,i.y,gt),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const ht=G.getViewportCount();for(let gt=0;gt<ht;gt++){const ct=G.getViewport(gt);o.set(s.x*ct.x,s.y*ct.y,s.x*ct.z,s.y*ct.w),k.viewport(o),G.updateMatrices(Y,gt),n=G.getFrustum(),w(C,P,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===Bn&&v(G,P),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(S,M,L)};function v(E,C){const P=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ei(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(C,null,P,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(C,null,P,f,x,null)}function _(E,C,P,S){let M=null;const L=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)M=L;else if(M=P.isPointLight===!0?c:a,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const k=M.uuid,N=C.uuid;let B=l[k];B===void 0&&(B={},l[k]=B);let z=B[N];z===void 0&&(z=M.clone(),B[N]=z,C.addEventListener("dispose",b)),M=z}if(M.visible=C.visible,M.wireframe=C.wireframe,S===Bn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=r.properties.get(M);k.light=P}return M}function w(E,C,P,S,M){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Bn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const N=t.update(E),B=E.material;if(Array.isArray(B)){const z=N.groups;for(let F=0,Y=z.length;F<Y;F++){const G=z[F],J=B[G.materialIndex];if(J&&J.visible){const ht=_(E,J,S,M);E.onBeforeShadow(r,E,C,P,N,ht,G),r.renderBufferDirect(P,null,N,ht,E,G),E.onAfterShadow(r,E,C,P,N,ht,G)}}}else if(B.visible){const z=_(E,B,S,M);E.onBeforeShadow(r,E,C,P,N,z,null),r.renderBufferDirect(P,null,N,z,E,null),E.onAfterShadow(r,E,C,P,N,z,null)}}const k=E.children;for(let N=0,B=k.length;N<B;N++)w(k[N],C,P,S,M)}function b(E){E.target.removeEventListener("dispose",b);for(const P in l){const S=l[P],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Lm={[Sr]:Er,[br]:Cr,[Tr]:Rr,[Qi]:Ar,[Er]:Sr,[Cr]:br,[Rr]:Tr,[Ar]:Qi};function Im(r,t){function e(){let V=!1;const mt=new xe;let $=null;const nt=new xe(0,0,0,0);return{setMask:function(Et){$!==Et&&!V&&(r.colorMask(Et,Et,Et,Et),$=Et)},setLocked:function(Et){V=Et},setClear:function(Et,wt,Zt,ve,Ae){Ae===!0&&(Et*=ve,wt*=ve,Zt*=ve),mt.set(Et,wt,Zt,ve),nt.equals(mt)===!1&&(r.clearColor(Et,wt,Zt,ve),nt.copy(mt))},reset:function(){V=!1,$=null,nt.set(-1,0,0,0)}}}function n(){let V=!1,mt=!1,$=null,nt=null,Et=null;return{setReversed:function(wt){if(mt!==wt){const Zt=t.get("EXT_clip_control");mt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);const ve=Et;Et=null,this.setClear(ve)}mt=wt},getReversed:function(){return mt},setTest:function(wt){wt?dt(r.DEPTH_TEST):Ut(r.DEPTH_TEST)},setMask:function(wt){$!==wt&&!V&&(r.depthMask(wt),$=wt)},setFunc:function(wt){if(mt&&(wt=Lm[wt]),nt!==wt){switch(wt){case Sr:r.depthFunc(r.NEVER);break;case Er:r.depthFunc(r.ALWAYS);break;case br:r.depthFunc(r.LESS);break;case Qi:r.depthFunc(r.LEQUAL);break;case Tr:r.depthFunc(r.EQUAL);break;case Ar:r.depthFunc(r.GEQUAL);break;case Cr:r.depthFunc(r.GREATER);break;case Rr:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}nt=wt}},setLocked:function(wt){V=wt},setClear:function(wt){Et!==wt&&(mt&&(wt=1-wt),r.clearDepth(wt),Et=wt)},reset:function(){V=!1,$=null,nt=null,Et=null,mt=!1}}}function i(){let V=!1,mt=null,$=null,nt=null,Et=null,wt=null,Zt=null,ve=null,Ae=null;return{setTest:function(te){V||(te?dt(r.STENCIL_TEST):Ut(r.STENCIL_TEST))},setMask:function(te){mt!==te&&!V&&(r.stencilMask(te),mt=te)},setFunc:function(te,me,qe){($!==te||nt!==me||Et!==qe)&&(r.stencilFunc(te,me,qe),$=te,nt=me,Et=qe)},setOp:function(te,me,qe){(wt!==te||Zt!==me||ve!==qe)&&(r.stencilOp(te,me,qe),wt=te,Zt=me,ve=qe)},setLocked:function(te){V=te},setClear:function(te){Ae!==te&&(r.clearStencil(te),Ae=te)},reset:function(){V=!1,mt=null,$=null,nt=null,Et=null,wt=null,Zt=null,ve=null,Ae=null}}}const s=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,_=null,w=null,b=null,E=null,C=new se(0,0,0),P=0,S=!1,M=null,L=null,k=null,N=null,B=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,Y=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(G)[1]),F=Y>=1):G.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),F=Y>=2);let J=null,ht={};const gt=r.getParameter(r.SCISSOR_BOX),ct=r.getParameter(r.VIEWPORT),qt=new xe().fromArray(gt),K=new xe().fromArray(ct);function rt(V,mt,$,nt){const Et=new Uint8Array(4),wt=r.createTexture();r.bindTexture(V,wt),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Zt=0;Zt<$;Zt++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(mt,0,r.RGBA,1,1,nt,0,r.RGBA,r.UNSIGNED_BYTE,Et):r.texImage2D(mt+Zt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Et);return wt}const xt={};xt[r.TEXTURE_2D]=rt(r.TEXTURE_2D,r.TEXTURE_2D,1),xt[r.TEXTURE_CUBE_MAP]=rt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[r.TEXTURE_2D_ARRAY]=rt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xt[r.TEXTURE_3D]=rt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),dt(r.DEPTH_TEST),o.setFunc(Qi),lt(!1),At(Ua),dt(r.CULL_FACE),D(Jn);function dt(V){h[V]!==!0&&(r.enable(V),h[V]=!0)}function Ut(V){h[V]!==!1&&(r.disable(V),h[V]=!1)}function Ht(V,mt){return u[V]!==mt?(r.bindFramebuffer(V,mt),u[V]=mt,V===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=mt),V===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=mt),!0):!1}function Mt(V,mt){let $=f,nt=!1;if(V){$=d.get(mt),$===void 0&&($=[],d.set(mt,$));const Et=V.textures;if($.length!==Et.length||$[0]!==r.COLOR_ATTACHMENT0){for(let wt=0,Zt=Et.length;wt<Zt;wt++)$[wt]=r.COLOR_ATTACHMENT0+wt;$.length=Et.length,nt=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,nt=!0);nt&&r.drawBuffers($)}function oe(V){return m!==V?(r.useProgram(V),m=V,!0):!1}const at={[vi]:r.FUNC_ADD,[sh]:r.FUNC_SUBTRACT,[oh]:r.FUNC_REVERSE_SUBTRACT};at[rh]=r.MIN,at[ah]=r.MAX;const ot={[ch]:r.ZERO,[lh]:r.ONE,[hh]:r.SRC_COLOR,[yr]:r.SRC_ALPHA,[gh]:r.SRC_ALPHA_SATURATE,[ph]:r.DST_COLOR,[uh]:r.DST_ALPHA,[dh]:r.ONE_MINUS_SRC_COLOR,[Mr]:r.ONE_MINUS_SRC_ALPHA,[mh]:r.ONE_MINUS_DST_COLOR,[fh]:r.ONE_MINUS_DST_ALPHA,[xh]:r.CONSTANT_COLOR,[vh]:r.ONE_MINUS_CONSTANT_COLOR,[wh]:r.CONSTANT_ALPHA,[_h]:r.ONE_MINUS_CONSTANT_ALPHA};function D(V,mt,$,nt,Et,wt,Zt,ve,Ae,te){if(V===Jn){x===!0&&(Ut(r.BLEND),x=!1);return}if(x===!1&&(dt(r.BLEND),x=!0),V!==ih){if(V!==g||te!==S){if((p!==vi||w!==vi)&&(r.blendEquation(r.FUNC_ADD),p=vi,w=vi),te)switch(V){case Ki:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fa:r.blendFunc(r.ONE,r.ONE);break;case Oa:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ba:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ki:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fa:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Oa:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ba:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}v=null,_=null,b=null,E=null,C.set(0,0,0),P=0,g=V,S=te}return}Et=Et||mt,wt=wt||$,Zt=Zt||nt,(mt!==p||Et!==w)&&(r.blendEquationSeparate(at[mt],at[Et]),p=mt,w=Et),($!==v||nt!==_||wt!==b||Zt!==E)&&(r.blendFuncSeparate(ot[$],ot[nt],ot[wt],ot[Zt]),v=$,_=nt,b=wt,E=Zt),(ve.equals(C)===!1||Ae!==P)&&(r.blendColor(ve.r,ve.g,ve.b,Ae),C.copy(ve),P=Ae),g=V,S=!1}function Ft(V,mt){V.side===Mn?Ut(r.CULL_FACE):dt(r.CULL_FACE);let $=V.side===Je;mt&&($=!$),lt($),V.blending===Ki&&V.transparent===!1?D(Jn):D(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const nt=V.stencilWrite;a.setTest(nt),nt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),kt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?dt(r.SAMPLE_ALPHA_TO_COVERAGE):Ut(r.SAMPLE_ALPHA_TO_COVERAGE)}function lt(V){M!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),M=V)}function At(V){V!==eh?(dt(r.CULL_FACE),V!==L&&(V===Ua?r.cullFace(r.BACK):V===nh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ut(r.CULL_FACE),L=V}function ut(V){V!==k&&(F&&r.lineWidth(V),k=V)}function kt(V,mt,$){V?(dt(r.POLYGON_OFFSET_FILL),(N!==mt||B!==$)&&(r.polygonOffset(mt,$),N=mt,B=$)):Ut(r.POLYGON_OFFSET_FILL)}function _t(V){V?dt(r.SCISSOR_TEST):Ut(r.SCISSOR_TEST)}function I(V){V===void 0&&(V=r.TEXTURE0+z-1),J!==V&&(r.activeTexture(V),J=V)}function T(V,mt,$){$===void 0&&(J===null?$=r.TEXTURE0+z-1:$=J);let nt=ht[$];nt===void 0&&(nt={type:void 0,texture:void 0},ht[$]=nt),(nt.type!==V||nt.texture!==mt)&&(J!==$&&(r.activeTexture($),J=$),r.bindTexture(V,mt||xt[V]),nt.type=V,nt.texture=mt)}function q(){const V=ht[J];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function tt(){try{r.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function st(){try{r.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Q(){try{r.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Dt(){try{r.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function vt(){try{r.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Tt(){try{r.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Yt(){try{r.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function it(){try{r.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Rt(){try{r.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Gt(){try{r.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Wt(V){qt.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),qt.copy(V))}function Ct(V){K.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),K.copy(V))}function ne(V,mt){let $=l.get(mt);$===void 0&&($=new WeakMap,l.set(mt,$));let nt=$.get(V);nt===void 0&&(nt=r.getUniformBlockIndex(mt,V.name),$.set(V,nt))}function $t(V,mt){const nt=l.get(mt).get(V);c.get(mt)!==nt&&(r.uniformBlockBinding(mt,nt,V.__bindingPointIndex),c.set(mt,nt))}function he(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},J=null,ht={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,_=null,w=null,b=null,E=null,C=new se(0,0,0),P=0,S=!1,M=null,L=null,k=null,N=null,B=null,qt.set(0,0,r.canvas.width,r.canvas.height),K.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:dt,disable:Ut,bindFramebuffer:Ht,drawBuffers:Mt,useProgram:oe,setBlending:D,setMaterial:Ft,setFlipSided:lt,setCullFace:At,setLineWidth:ut,setPolygonOffset:kt,setScissorTest:_t,activeTexture:I,bindTexture:T,unbindTexture:q,compressedTexImage2D:tt,compressedTexImage3D:st,texImage2D:Rt,texImage3D:Gt,updateUBOMapping:ne,uniformBlockBinding:$t,texStorage2D:Yt,texStorage3D:it,texSubImage2D:Q,texSubImage3D:Dt,compressedTexSubImage2D:vt,compressedTexSubImage3D:Tt,scissor:Wt,viewport:Ct,reset:he}}function Dm(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ft,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,T){return f?new OffscreenCanvas(I,T):Mo("canvas")}function x(I,T,q){let tt=1;const st=_t(I);if((st.width>q||st.height>q)&&(tt=q/Math.max(st.width,st.height)),tt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Q=Math.floor(tt*st.width),Dt=Math.floor(tt*st.height);u===void 0&&(u=m(Q,Dt));const vt=T?m(Q,Dt):u;return vt.width=Q,vt.height=Dt,vt.getContext("2d").drawImage(I,0,0,Q,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+Q+"x"+Dt+")."),vt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),I;return I}function g(I){return I.generateMipmaps}function p(I){r.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function _(I,T,q,tt,st=!1){if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Q=T;if(T===r.RED&&(q===r.FLOAT&&(Q=r.R32F),q===r.HALF_FLOAT&&(Q=r.R16F),q===r.UNSIGNED_BYTE&&(Q=r.R8)),T===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(Q=r.R8UI),q===r.UNSIGNED_SHORT&&(Q=r.R16UI),q===r.UNSIGNED_INT&&(Q=r.R32UI),q===r.BYTE&&(Q=r.R8I),q===r.SHORT&&(Q=r.R16I),q===r.INT&&(Q=r.R32I)),T===r.RG&&(q===r.FLOAT&&(Q=r.RG32F),q===r.HALF_FLOAT&&(Q=r.RG16F),q===r.UNSIGNED_BYTE&&(Q=r.RG8)),T===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(Q=r.RG8UI),q===r.UNSIGNED_SHORT&&(Q=r.RG16UI),q===r.UNSIGNED_INT&&(Q=r.RG32UI),q===r.BYTE&&(Q=r.RG8I),q===r.SHORT&&(Q=r.RG16I),q===r.INT&&(Q=r.RG32I)),T===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),q===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),q===r.UNSIGNED_INT&&(Q=r.RGB32UI),q===r.BYTE&&(Q=r.RGB8I),q===r.SHORT&&(Q=r.RGB16I),q===r.INT&&(Q=r.RGB32I)),T===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),q===r.UNSIGNED_INT&&(Q=r.RGBA32UI),q===r.BYTE&&(Q=r.RGBA8I),q===r.SHORT&&(Q=r.RGBA16I),q===r.INT&&(Q=r.RGBA32I)),T===r.RGB&&q===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),T===r.RGBA){const Dt=st?wo:le.getTransfer(tt);q===r.FLOAT&&(Q=r.RGBA32F),q===r.HALF_FLOAT&&(Q=r.RGBA16F),q===r.UNSIGNED_BYTE&&(Q=Dt===ge?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function w(I,T){let q;return I?T===null||T===Si||T===ns?q=r.DEPTH24_STENCIL8:T===zn?q=r.DEPTH32F_STENCIL8:T===Cs&&(q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Si||T===ns?q=r.DEPTH_COMPONENT24:T===zn?q=r.DEPTH_COMPONENT32F:T===Cs&&(q=r.DEPTH_COMPONENT16),q}function b(I,T){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==xn&&I.minFilter!==Sn?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function E(I){const T=I.target;T.removeEventListener("dispose",E),P(T),T.isVideoTexture&&h.delete(T)}function C(I){const T=I.target;T.removeEventListener("dispose",C),M(T)}function P(I){const T=n.get(I);if(T.__webglInit===void 0)return;const q=I.source,tt=d.get(q);if(tt){const st=tt[T.__cacheKey];st.usedTimes--,st.usedTimes===0&&S(I),Object.keys(tt).length===0&&d.delete(q)}n.remove(I)}function S(I){const T=n.get(I);r.deleteTexture(T.__webglTexture);const q=I.source,tt=d.get(q);delete tt[T.__cacheKey],o.memory.textures--}function M(I){const T=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(T.__webglFramebuffer[tt]))for(let st=0;st<T.__webglFramebuffer[tt].length;st++)r.deleteFramebuffer(T.__webglFramebuffer[tt][st]);else r.deleteFramebuffer(T.__webglFramebuffer[tt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[tt])}else{if(Array.isArray(T.__webglFramebuffer))for(let tt=0;tt<T.__webglFramebuffer.length;tt++)r.deleteFramebuffer(T.__webglFramebuffer[tt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let tt=0;tt<T.__webglColorRenderbuffer.length;tt++)T.__webglColorRenderbuffer[tt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[tt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const q=I.textures;for(let tt=0,st=q.length;tt<st;tt++){const Q=n.get(q[tt]);Q.__webglTexture&&(r.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(q[tt])}n.remove(I)}let L=0;function k(){L=0}function N(){const I=L;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),L+=1,I}function B(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function z(I,T){const q=n.get(I);if(I.isVideoTexture&&ut(I),I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){const tt=I.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(q,I,T);return}}e.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+T)}function F(I,T){const q=n.get(I);if(I.version>0&&q.__version!==I.version){K(q,I,T);return}e.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+T)}function Y(I,T){const q=n.get(I);if(I.version>0&&q.__version!==I.version){K(q,I,T);return}e.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+T)}function G(I,T){const q=n.get(I);if(I.version>0&&q.__version!==I.version){rt(q,I,T);return}e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+T)}const J={[He]:r.REPEAT,[yi]:r.CLAMP_TO_EDGE,[Ir]:r.MIRRORED_REPEAT},ht={[xn]:r.NEAREST,[Rh]:r.NEAREST_MIPMAP_NEAREST,[Os]:r.NEAREST_MIPMAP_LINEAR,[Sn]:r.LINEAR,[Do]:r.LINEAR_MIPMAP_NEAREST,[Mi]:r.LINEAR_MIPMAP_LINEAR},gt={[Dh]:r.NEVER,[zh]:r.ALWAYS,[Nh]:r.LESS,[yl]:r.LEQUAL,[Uh]:r.EQUAL,[Bh]:r.GEQUAL,[Fh]:r.GREATER,[Oh]:r.NOTEQUAL};function ct(I,T){if(T.type===zn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Sn||T.magFilter===Do||T.magFilter===Os||T.magFilter===Mi||T.minFilter===Sn||T.minFilter===Do||T.minFilter===Os||T.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,J[T.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,J[T.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,J[T.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,ht[T.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,ht[T.minFilter]),T.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,gt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===xn||T.minFilter!==Os&&T.minFilter!==Mi||T.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function qt(I,T){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",E));const tt=T.source;let st=d.get(tt);st===void 0&&(st={},d.set(tt,st));const Q=B(T);if(Q!==I.__cacheKey){st[Q]===void 0&&(st[Q]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,q=!0),st[Q].usedTimes++;const Dt=st[I.__cacheKey];Dt!==void 0&&(st[I.__cacheKey].usedTimes--,Dt.usedTimes===0&&S(T)),I.__cacheKey=Q,I.__webglTexture=st[Q].texture}return q}function K(I,T,q){let tt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(tt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(tt=r.TEXTURE_3D);const st=qt(I,T),Q=T.source;e.bindTexture(tt,I.__webglTexture,r.TEXTURE0+q);const Dt=n.get(Q);if(Q.version!==Dt.__version||st===!0){e.activeTexture(r.TEXTURE0+q);const vt=le.getPrimaries(le.workingColorSpace),Tt=T.colorSpace===$n?null:le.getPrimaries(T.colorSpace),Yt=T.colorSpace===$n||vt===Tt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let it=x(T.image,!1,i.maxTextureSize);it=kt(T,it);const Rt=s.convert(T.format,T.colorSpace),Gt=s.convert(T.type);let Wt=_(T.internalFormat,Rt,Gt,T.colorSpace,T.isVideoTexture);ct(tt,T);let Ct;const ne=T.mipmaps,$t=T.isVideoTexture!==!0,he=Dt.__version===void 0||st===!0,V=Q.dataReady,mt=b(T,it);if(T.isDepthTexture)Wt=w(T.format===is,T.type),he&&($t?e.texStorage2D(r.TEXTURE_2D,1,Wt,it.width,it.height):e.texImage2D(r.TEXTURE_2D,0,Wt,it.width,it.height,0,Rt,Gt,null));else if(T.isDataTexture)if(ne.length>0){$t&&he&&e.texStorage2D(r.TEXTURE_2D,mt,Wt,ne[0].width,ne[0].height);for(let $=0,nt=ne.length;$<nt;$++)Ct=ne[$],$t?V&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,Ct.width,Ct.height,Rt,Gt,Ct.data):e.texImage2D(r.TEXTURE_2D,$,Wt,Ct.width,Ct.height,0,Rt,Gt,Ct.data);T.generateMipmaps=!1}else $t?(he&&e.texStorage2D(r.TEXTURE_2D,mt,Wt,it.width,it.height),V&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,it.width,it.height,Rt,Gt,it.data)):e.texImage2D(r.TEXTURE_2D,0,Wt,it.width,it.height,0,Rt,Gt,it.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){$t&&he&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,Wt,ne[0].width,ne[0].height,it.depth);for(let $=0,nt=ne.length;$<nt;$++)if(Ct=ne[$],T.format!==mn)if(Rt!==null)if($t){if(V)if(T.layerUpdates.size>0){const Et=mc(Ct.width,Ct.height,T.format,T.type);for(const wt of T.layerUpdates){const Zt=Ct.data.subarray(wt*Et/Ct.data.BYTES_PER_ELEMENT,(wt+1)*Et/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,wt,Ct.width,Ct.height,1,Rt,Zt)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,Ct.width,Ct.height,it.depth,Rt,Ct.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,Wt,Ct.width,Ct.height,it.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?V&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,Ct.width,Ct.height,it.depth,Rt,Gt,Ct.data):e.texImage3D(r.TEXTURE_2D_ARRAY,$,Wt,Ct.width,Ct.height,it.depth,0,Rt,Gt,Ct.data)}else{$t&&he&&e.texStorage2D(r.TEXTURE_2D,mt,Wt,ne[0].width,ne[0].height);for(let $=0,nt=ne.length;$<nt;$++)Ct=ne[$],T.format!==mn?Rt!==null?$t?V&&e.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,Ct.width,Ct.height,Rt,Ct.data):e.compressedTexImage2D(r.TEXTURE_2D,$,Wt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?V&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,Ct.width,Ct.height,Rt,Gt,Ct.data):e.texImage2D(r.TEXTURE_2D,$,Wt,Ct.width,Ct.height,0,Rt,Gt,Ct.data)}else if(T.isDataArrayTexture)if($t){if(he&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,Wt,it.width,it.height,it.depth),V)if(T.layerUpdates.size>0){const $=mc(it.width,it.height,T.format,T.type);for(const nt of T.layerUpdates){const Et=it.data.subarray(nt*$/it.data.BYTES_PER_ELEMENT,(nt+1)*$/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,nt,it.width,it.height,1,Rt,Gt,Et)}T.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,Rt,Gt,it.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Wt,it.width,it.height,it.depth,0,Rt,Gt,it.data);else if(T.isData3DTexture)$t?(he&&e.texStorage3D(r.TEXTURE_3D,mt,Wt,it.width,it.height,it.depth),V&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,Rt,Gt,it.data)):e.texImage3D(r.TEXTURE_3D,0,Wt,it.width,it.height,it.depth,0,Rt,Gt,it.data);else if(T.isFramebufferTexture){if(he)if($t)e.texStorage2D(r.TEXTURE_2D,mt,Wt,it.width,it.height);else{let $=it.width,nt=it.height;for(let Et=0;Et<mt;Et++)e.texImage2D(r.TEXTURE_2D,Et,Wt,$,nt,0,Rt,Gt,null),$>>=1,nt>>=1}}else if(ne.length>0){if($t&&he){const $=_t(ne[0]);e.texStorage2D(r.TEXTURE_2D,mt,Wt,$.width,$.height)}for(let $=0,nt=ne.length;$<nt;$++)Ct=ne[$],$t?V&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,Rt,Gt,Ct):e.texImage2D(r.TEXTURE_2D,$,Wt,Rt,Gt,Ct);T.generateMipmaps=!1}else if($t){if(he){const $=_t(it);e.texStorage2D(r.TEXTURE_2D,mt,Wt,$.width,$.height)}V&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Rt,Gt,it)}else e.texImage2D(r.TEXTURE_2D,0,Wt,Rt,Gt,it);g(T)&&p(tt),Dt.__version=Q.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function rt(I,T,q){if(T.image.length!==6)return;const tt=qt(I,T),st=T.source;e.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+q);const Q=n.get(st);if(st.version!==Q.__version||tt===!0){e.activeTexture(r.TEXTURE0+q);const Dt=le.getPrimaries(le.workingColorSpace),vt=T.colorSpace===$n?null:le.getPrimaries(T.colorSpace),Tt=T.colorSpace===$n||Dt===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Yt=T.isCompressedTexture||T.image[0].isCompressedTexture,it=T.image[0]&&T.image[0].isDataTexture,Rt=[];for(let nt=0;nt<6;nt++)!Yt&&!it?Rt[nt]=x(T.image[nt],!0,i.maxCubemapSize):Rt[nt]=it?T.image[nt].image:T.image[nt],Rt[nt]=kt(T,Rt[nt]);const Gt=Rt[0],Wt=s.convert(T.format,T.colorSpace),Ct=s.convert(T.type),ne=_(T.internalFormat,Wt,Ct,T.colorSpace),$t=T.isVideoTexture!==!0,he=Q.__version===void 0||tt===!0,V=st.dataReady;let mt=b(T,Gt);ct(r.TEXTURE_CUBE_MAP,T);let $;if(Yt){$t&&he&&e.texStorage2D(r.TEXTURE_CUBE_MAP,mt,ne,Gt.width,Gt.height);for(let nt=0;nt<6;nt++){$=Rt[nt].mipmaps;for(let Et=0;Et<$.length;Et++){const wt=$[Et];T.format!==mn?Wt!==null?$t?V&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et,0,0,wt.width,wt.height,Wt,wt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et,ne,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et,0,0,wt.width,wt.height,Wt,Ct,wt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et,ne,wt.width,wt.height,0,Wt,Ct,wt.data)}}}else{if($=T.mipmaps,$t&&he){$.length>0&&mt++;const nt=_t(Rt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,mt,ne,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(it){$t?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Rt[nt].width,Rt[nt].height,Wt,Ct,Rt[nt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ne,Rt[nt].width,Rt[nt].height,0,Wt,Ct,Rt[nt].data);for(let Et=0;Et<$.length;Et++){const Zt=$[Et].image[nt].image;$t?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et+1,0,0,Zt.width,Zt.height,Wt,Ct,Zt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et+1,ne,Zt.width,Zt.height,0,Wt,Ct,Zt.data)}}else{$t?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Wt,Ct,Rt[nt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ne,Wt,Ct,Rt[nt]);for(let Et=0;Et<$.length;Et++){const wt=$[Et];$t?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et+1,0,0,Wt,Ct,wt.image[nt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et+1,ne,Wt,Ct,wt.image[nt])}}}g(T)&&p(r.TEXTURE_CUBE_MAP),Q.__version=st.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function xt(I,T,q,tt,st,Q){const Dt=s.convert(q.format,q.colorSpace),vt=s.convert(q.type),Tt=_(q.internalFormat,Dt,vt,q.colorSpace),Yt=n.get(T),it=n.get(q);if(it.__renderTarget=T,!Yt.__hasExternalTextures){const Rt=Math.max(1,T.width>>Q),Gt=Math.max(1,T.height>>Q);st===r.TEXTURE_3D||st===r.TEXTURE_2D_ARRAY?e.texImage3D(st,Q,Tt,Rt,Gt,T.depth,0,Dt,vt,null):e.texImage2D(st,Q,Tt,Rt,Gt,0,Dt,vt,null)}e.bindFramebuffer(r.FRAMEBUFFER,I),At(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,tt,st,it.__webglTexture,0,lt(T)):(st===r.TEXTURE_2D||st>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,tt,st,it.__webglTexture,Q),e.bindFramebuffer(r.FRAMEBUFFER,null)}function dt(I,T,q){if(r.bindRenderbuffer(r.RENDERBUFFER,I),T.depthBuffer){const tt=T.depthTexture,st=tt&&tt.isDepthTexture?tt.type:null,Q=w(T.stencilBuffer,st),Dt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,vt=lt(T);At(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,vt,Q,T.width,T.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,vt,Q,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Q,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Dt,r.RENDERBUFFER,I)}else{const tt=T.textures;for(let st=0;st<tt.length;st++){const Q=tt[st],Dt=s.convert(Q.format,Q.colorSpace),vt=s.convert(Q.type),Tt=_(Q.internalFormat,Dt,vt,Q.colorSpace),Yt=lt(T);q&&At(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt,Tt,T.width,T.height):At(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Yt,Tt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Tt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ut(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(T.depthTexture);tt.__renderTarget=T,(!tt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),z(T.depthTexture,0);const st=tt.__webglTexture,Q=lt(T);if(T.depthTexture.format===$i)At(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,st,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,st,0);else if(T.depthTexture.format===is)At(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,st,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Ht(I){const T=n.get(I),q=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const tt=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),tt){const st=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,tt.removeEventListener("dispose",st)};tt.addEventListener("dispose",st),T.__depthDisposeCallback=st}T.__boundDepthTexture=tt}if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Ut(T.__webglFramebuffer,I)}else if(q){T.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[tt]),T.__webglDepthbuffer[tt]===void 0)T.__webglDepthbuffer[tt]=r.createRenderbuffer(),dt(T.__webglDepthbuffer[tt],I,!1);else{const st=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=T.__webglDepthbuffer[tt];r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,st,r.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),dt(T.__webglDepthbuffer,I,!1);else{const tt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,st=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,st),r.framebufferRenderbuffer(r.FRAMEBUFFER,tt,r.RENDERBUFFER,st)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Mt(I,T,q){const tt=n.get(I);T!==void 0&&xt(tt.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&Ht(I)}function oe(I){const T=I.texture,q=n.get(I),tt=n.get(T);I.addEventListener("dispose",C);const st=I.textures,Q=I.isWebGLCubeRenderTarget===!0,Dt=st.length>1;if(Dt||(tt.__webglTexture===void 0&&(tt.__webglTexture=r.createTexture()),tt.__version=T.version,o.memory.textures++),Q){q.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[vt]=[];for(let Tt=0;Tt<T.mipmaps.length;Tt++)q.__webglFramebuffer[vt][Tt]=r.createFramebuffer()}else q.__webglFramebuffer[vt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let vt=0;vt<T.mipmaps.length;vt++)q.__webglFramebuffer[vt]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(Dt)for(let vt=0,Tt=st.length;vt<Tt;vt++){const Yt=n.get(st[vt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=r.createTexture(),o.memory.textures++)}if(I.samples>0&&At(I)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let vt=0;vt<st.length;vt++){const Tt=st[vt];q.__webglColorRenderbuffer[vt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[vt]);const Yt=s.convert(Tt.format,Tt.colorSpace),it=s.convert(Tt.type),Rt=_(Tt.internalFormat,Yt,it,Tt.colorSpace,I.isXRRenderTarget===!0),Gt=lt(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Gt,Rt,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,q.__webglColorRenderbuffer[vt])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),dt(q.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){e.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture),ct(r.TEXTURE_CUBE_MAP,T);for(let vt=0;vt<6;vt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Tt=0;Tt<T.mipmaps.length;Tt++)xt(q.__webglFramebuffer[vt][Tt],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Tt);else xt(q.__webglFramebuffer[vt],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);g(T)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let vt=0,Tt=st.length;vt<Tt;vt++){const Yt=st[vt],it=n.get(Yt);e.bindTexture(r.TEXTURE_2D,it.__webglTexture),ct(r.TEXTURE_2D,Yt),xt(q.__webglFramebuffer,I,Yt,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,0),g(Yt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let vt=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(vt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(vt,tt.__webglTexture),ct(vt,T),T.mipmaps&&T.mipmaps.length>0)for(let Tt=0;Tt<T.mipmaps.length;Tt++)xt(q.__webglFramebuffer[Tt],I,T,r.COLOR_ATTACHMENT0,vt,Tt);else xt(q.__webglFramebuffer,I,T,r.COLOR_ATTACHMENT0,vt,0);g(T)&&p(vt),e.unbindTexture()}I.depthBuffer&&Ht(I)}function at(I){const T=I.textures;for(let q=0,tt=T.length;q<tt;q++){const st=T[q];if(g(st)){const Q=v(I),Dt=n.get(st).__webglTexture;e.bindTexture(Q,Dt),p(Q),e.unbindTexture()}}}const ot=[],D=[];function Ft(I){if(I.samples>0){if(At(I)===!1){const T=I.textures,q=I.width,tt=I.height;let st=r.COLOR_BUFFER_BIT;const Q=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Dt=n.get(I),vt=T.length>1;if(vt)for(let Tt=0;Tt<T.length;Tt++)e.bindFramebuffer(r.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Tt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Tt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Tt=0;Tt<T.length;Tt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(st|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(st|=r.STENCIL_BUFFER_BIT)),vt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Dt.__webglColorRenderbuffer[Tt]);const Yt=n.get(T[Tt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Yt,0)}r.blitFramebuffer(0,0,q,tt,0,0,q,tt,st,r.NEAREST),c===!0&&(ot.length=0,D.length=0,ot.push(r.COLOR_ATTACHMENT0+Tt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ot.push(Q),D.push(Q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ot))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),vt)for(let Tt=0;Tt<T.length;Tt++){e.bindFramebuffer(r.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Tt,r.RENDERBUFFER,Dt.__webglColorRenderbuffer[Tt]);const Yt=n.get(T[Tt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Tt,r.TEXTURE_2D,Yt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const T=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function lt(I){return Math.min(i.maxSamples,I.samples)}function At(I){const T=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ut(I){const T=o.render.frame;h.get(I)!==T&&(h.set(I,T),I.update())}function kt(I,T){const q=I.colorSpace,tt=I.format,st=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==ss&&q!==$n&&(le.getTransfer(q)===ge?(tt!==mn||st!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),T}function _t(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=k,this.setTexture2D=z,this.setTexture2DArray=F,this.setTexture3D=Y,this.setTextureCube=G,this.rebindTextures=Mt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=At}function Nm(r,t){function e(n,i=$n){let s;const o=le.getTransfer(i);if(n===Gn)return r.UNSIGNED_BYTE;if(n===fa)return r.UNSIGNED_SHORT_4_4_4_4;if(n===pa)return r.UNSIGNED_SHORT_5_5_5_1;if(n===fl)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===dl)return r.BYTE;if(n===ul)return r.SHORT;if(n===Cs)return r.UNSIGNED_SHORT;if(n===ua)return r.INT;if(n===Si)return r.UNSIGNED_INT;if(n===zn)return r.FLOAT;if(n===Is)return r.HALF_FLOAT;if(n===pl)return r.ALPHA;if(n===ml)return r.RGB;if(n===mn)return r.RGBA;if(n===gl)return r.LUMINANCE;if(n===xl)return r.LUMINANCE_ALPHA;if(n===$i)return r.DEPTH_COMPONENT;if(n===is)return r.DEPTH_STENCIL;if(n===vl)return r.RED;if(n===ma)return r.RED_INTEGER;if(n===wl)return r.RG;if(n===ga)return r.RG_INTEGER;if(n===xa)return r.RGBA_INTEGER;if(n===fo||n===po||n===mo||n===go)if(o===ge)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===fo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===fo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===po)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===go)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dr||n===Nr||n===Ur||n===Fr)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Dr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ur)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fr)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Or||n===Br||n===zr)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Or||n===Br)return o===ge?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===zr)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kr||n===Vr||n===Gr||n===Hr||n===Wr||n===Xr||n===qr||n===Yr||n===Zr||n===jr||n===Kr||n===$r||n===Jr||n===Qr)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===kr)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vr)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gr)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hr)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wr)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xr)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qr)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yr)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zr)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jr)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kr)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$r)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jr)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qr)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xo||n===ta||n===ea)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===xo)return o===ge?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ta)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ea)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_l||n===na||n===ia||n===sa)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===xo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===na)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ia)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const Um=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Om{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new We,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ei({vertexShader:Um,fragmentShader:Fm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new y(new Kt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bm extends rs{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const x=new Om,g=e.getContextAttributes();let p=null,v=null;const _=[],w=[],b=new ft;let E=null;const C=new $e;C.viewport=new xe;const P=new $e;P.viewport=new xe;const S=[C,P],M=new iu;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let rt=_[K];return rt===void 0&&(rt=new er,_[K]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(K){let rt=_[K];return rt===void 0&&(rt=new er,_[K]=rt),rt.getGripSpace()},this.getHand=function(K){let rt=_[K];return rt===void 0&&(rt=new er,_[K]=rt),rt.getHandSpace()};function N(K){const rt=w.indexOf(K.inputSource);if(rt===-1)return;const xt=_[rt];xt!==void 0&&(xt.update(K.inputSource,K.frame,l||o),xt.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",z);for(let K=0;K<_.length;K++){const rt=w[K];rt!==null&&(w[K]=null,_[K].disconnect(rt))}L=null,k=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,v=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",B),i.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(b),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,dt=null,Ut=null;g.depth&&(Ut=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=g.stencil?is:$i,dt=g.stencil?ns:Si);const Ht={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Ht),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Ei(d.textureWidth,d.textureHeight,{format:mn,type:Gn,depthTexture:new Ll(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const xt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,xt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ei(f.framebufferWidth,f.framebufferHeight,{format:mn,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),qt.setContext(i),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function z(K){for(let rt=0;rt<K.removed.length;rt++){const xt=K.removed[rt],dt=w.indexOf(xt);dt>=0&&(w[dt]=null,_[dt].disconnect(xt))}for(let rt=0;rt<K.added.length;rt++){const xt=K.added[rt];let dt=w.indexOf(xt);if(dt===-1){for(let Ht=0;Ht<_.length;Ht++)if(Ht>=w.length){w.push(xt),dt=Ht;break}else if(w[Ht]===null){w[Ht]=xt,dt=Ht;break}if(dt===-1)break}const Ut=_[dt];Ut&&Ut.connect(xt)}}const F=new U,Y=new U;function G(K,rt,xt){F.setFromMatrixPosition(rt.matrixWorld),Y.setFromMatrixPosition(xt.matrixWorld);const dt=F.distanceTo(Y),Ut=rt.projectionMatrix.elements,Ht=xt.projectionMatrix.elements,Mt=Ut[14]/(Ut[10]-1),oe=Ut[14]/(Ut[10]+1),at=(Ut[9]+1)/Ut[5],ot=(Ut[9]-1)/Ut[5],D=(Ut[8]-1)/Ut[0],Ft=(Ht[8]+1)/Ht[0],lt=Mt*D,At=Mt*Ft,ut=dt/(-D+Ft),kt=ut*-D;if(rt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(kt),K.translateZ(ut),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ut[10]===-1)K.projectionMatrix.copy(rt.projectionMatrix),K.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const _t=Mt+ut,I=oe+ut,T=lt-kt,q=At+(dt-kt),tt=at*oe/I*_t,st=ot*oe/I*_t;K.projectionMatrix.makePerspective(T,q,tt,st,_t,I),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function J(K,rt){rt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(rt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let rt=K.near,xt=K.far;x.texture!==null&&(x.depthNear>0&&(rt=x.depthNear),x.depthFar>0&&(xt=x.depthFar)),M.near=P.near=C.near=rt,M.far=P.far=C.far=xt,(L!==M.near||k!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,k=M.far),C.layers.mask=K.layers.mask|2,P.layers.mask=K.layers.mask|4,M.layers.mask=C.layers.mask|P.layers.mask;const dt=K.parent,Ut=M.cameras;J(M,dt);for(let Ht=0;Ht<Ut.length;Ht++)J(Ut[Ht],dt);Ut.length===2?G(M,C,P):M.projectionMatrix.copy(C.projectionMatrix),ht(K,M,dt)};function ht(K,rt,xt){xt===null?K.matrix.copy(rt.matrixWorld):(K.matrix.copy(xt.matrixWorld),K.matrix.invert(),K.matrix.multiply(rt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(rt.projectionMatrix),K.projectionMatrixInverse.copy(rt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=yo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let gt=null;function ct(K,rt){if(h=rt.getViewerPose(l||o),m=rt,h!==null){const xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let dt=!1;xt.length!==M.cameras.length&&(M.cameras.length=0,dt=!0);for(let Mt=0;Mt<xt.length;Mt++){const oe=xt[Mt];let at=null;if(f!==null)at=f.getViewport(oe);else{const D=u.getViewSubImage(d,oe);at=D.viewport,Mt===0&&(t.setRenderTargetTextures(v,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(v))}let ot=S[Mt];ot===void 0&&(ot=new $e,ot.layers.enable(Mt),ot.viewport=new xe,S[Mt]=ot),ot.matrix.fromArray(oe.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(oe.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(at.x,at.y,at.width,at.height),Mt===0&&(M.matrix.copy(ot.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),dt===!0&&M.cameras.push(ot)}const Ut=i.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const Mt=u.getDepthInformation(xt[0]);Mt&&Mt.isValid&&Mt.texture&&x.init(t,Mt,i.renderState)}}for(let xt=0;xt<_.length;xt++){const dt=w[xt],Ut=_[xt];dt!==null&&Ut!==void 0&&Ut.update(dt,rt,l||o)}gt&&gt(K,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),m=null}const qt=new Vl;qt.setAnimationLoop(ct),this.setAnimationLoop=function(K){gt=K},this.dispose=function(){}}}const di=new bn,zm=new ye;function km(r,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Cl(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,_,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,w)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),x(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,v,_):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Je&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Je&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=t.get(p),_=v.envMap,w=v.envMapRotation;_&&(g.envMap.value=_,di.copy(w),di.x*=-1,di.y*=-1,di.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),g.envMapRotation.value.setFromMatrix4(zm.makeRotationFromEuler(di)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=_*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Vm(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,_){const w=_.program;n.uniformBlockBinding(v,w)}function l(v,_){let w=i[v.id];w===void 0&&(m(v),w=h(v),i[v.id]=w,v.addEventListener("dispose",g));const b=_.program;n.updateUBOMapping(v,b);const E=t.render.frame;s[v.id]!==E&&(d(v),s[v.id]=E)}function h(v){const _=u();v.__bindingPointIndex=_;const w=r.createBuffer(),b=v.__size,E=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,b,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,w),w}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=i[v.id],w=v.uniforms,b=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let E=0,C=w.length;E<C;E++){const P=Array.isArray(w[E])?w[E]:[w[E]];for(let S=0,M=P.length;S<M;S++){const L=P[S];if(f(L,E,S,b)===!0){const k=L.__offset,N=Array.isArray(L.value)?L.value:[L.value];let B=0;for(let z=0;z<N.length;z++){const F=N[z],Y=x(F);typeof F=="number"||typeof F=="boolean"?(L.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,k+B,L.__data)):F.isMatrix3?(L.__data[0]=F.elements[0],L.__data[1]=F.elements[1],L.__data[2]=F.elements[2],L.__data[3]=0,L.__data[4]=F.elements[3],L.__data[5]=F.elements[4],L.__data[6]=F.elements[5],L.__data[7]=0,L.__data[8]=F.elements[6],L.__data[9]=F.elements[7],L.__data[10]=F.elements[8],L.__data[11]=0):(F.toArray(L.__data,B),B+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,_,w,b){const E=v.value,C=_+"_"+w;if(b[C]===void 0)return typeof E=="number"||typeof E=="boolean"?b[C]=E:b[C]=E.clone(),!0;{const P=b[C];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return b[C]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function m(v){const _=v.uniforms;let w=0;const b=16;for(let C=0,P=_.length;C<P;C++){const S=Array.isArray(_[C])?_[C]:[_[C]];for(let M=0,L=S.length;M<L;M++){const k=S[M],N=Array.isArray(k.value)?k.value:[k.value];for(let B=0,z=N.length;B<z;B++){const F=N[B],Y=x(F),G=w%b,J=G%Y.boundary,ht=G+J;w+=J,ht!==0&&b-ht<Y.storage&&(w+=b-ht),k.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=w,w+=Y.storage}}}const E=w%b;return E>0&&(w+=b-E),v.__size=w,v.__cache={},this}function x(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function g(v){const _=v.target;_.removeEventListener("dispose",g);const w=o.indexOf(_.__bindingPointIndex);o.splice(w,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}class Gm{constructor(t={}){const{canvas:e=Vh(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),x=new Int32Array(4);let g=null,p=null;const v=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=Qn,this.toneMappingExposure=1;const w=this;let b=!1,E=0,C=0,P=null,S=-1,M=null;const L=new xe,k=new xe;let N=null;const B=new se(0);let z=0,F=e.width,Y=e.height,G=1,J=null,ht=null;const gt=new xe(0,0,F,Y),ct=new xe(0,0,F,Y);let qt=!1;const K=new Sa;let rt=!1,xt=!1;this.transmissionResolutionScale=1;const dt=new ye,Ut=new ye,Ht=new U,Mt=new xe,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function ot(){return P===null?G:1}let D=n;function Ft(R,W){return e.getContext(R,W)}try{const R={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${da}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",wt,!1),D===null){const W="webgl2";if(D=Ft(W,R),D===null)throw Ft(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let lt,At,ut,kt,_t,I,T,q,tt,st,Q,Dt,vt,Tt,Yt,it,Rt,Gt,Wt,Ct,ne,$t,he,V;function mt(){lt=new Jp(D),lt.init(),$t=new Nm(D,lt),At=new Xp(D,lt,t,$t),ut=new Im(D,lt),At.reverseDepthBuffer&&d&&ut.buffers.depth.setReversed(!0),kt=new e0(D),_t=new wm,I=new Dm(D,lt,ut,_t,At,$t,kt),T=new Yp(w),q=new $p(w),tt=new ru(D),he=new Hp(D,tt),st=new Qp(D,tt,kt,he),Q=new i0(D,st,tt,kt),Wt=new n0(D,At,I),it=new qp(_t),Dt=new vm(w,T,q,lt,At,he,it),vt=new km(w,_t),Tt=new ym,Yt=new Am(lt),Gt=new Gp(w,T,q,ut,Q,f,c),Rt=new Pm(w,Q,At),V=new Vm(D,kt,At,ut),Ct=new Wp(D,lt,kt),ne=new t0(D,lt,kt),kt.programs=Dt.programs,w.capabilities=At,w.extensions=lt,w.properties=_t,w.renderLists=Tt,w.shadowMap=Rt,w.state=ut,w.info=kt}mt();const $=new Bm(w,D);this.xr=$,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const R=lt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=lt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(R){R!==void 0&&(G=R,this.setSize(F,Y,!1))},this.getSize=function(R){return R.set(F,Y)},this.setSize=function(R,W,Z=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,Y=W,e.width=Math.floor(R*G),e.height=Math.floor(W*G),Z===!0&&(e.style.width=R+"px",e.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(F*G,Y*G).floor()},this.setDrawingBufferSize=function(R,W,Z){F=R,Y=W,G=Z,e.width=Math.floor(R*Z),e.height=Math.floor(W*Z),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(L)},this.getViewport=function(R){return R.copy(gt)},this.setViewport=function(R,W,Z,j){R.isVector4?gt.set(R.x,R.y,R.z,R.w):gt.set(R,W,Z,j),ut.viewport(L.copy(gt).multiplyScalar(G).round())},this.getScissor=function(R){return R.copy(ct)},this.setScissor=function(R,W,Z,j){R.isVector4?ct.set(R.x,R.y,R.z,R.w):ct.set(R,W,Z,j),ut.scissor(k.copy(ct).multiplyScalar(G).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(R){ut.setScissorTest(qt=R)},this.setOpaqueSort=function(R){J=R},this.setTransparentSort=function(R){ht=R},this.getClearColor=function(R){return R.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor(...arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,Z=!0){let j=0;if(R){let X=!1;if(P!==null){const pt=P.texture.format;X=pt===xa||pt===ga||pt===ma}if(X){const pt=P.texture.type,bt=pt===Gn||pt===Si||pt===Cs||pt===ns||pt===fa||pt===pa,Pt=Gt.getClearColor(),Nt=Gt.getClearAlpha(),jt=Pt.r,Jt=Pt.g,zt=Pt.b;bt?(m[0]=jt,m[1]=Jt,m[2]=zt,m[3]=Nt,D.clearBufferuiv(D.COLOR,0,m)):(x[0]=jt,x[1]=Jt,x[2]=zt,x[3]=Nt,D.clearBufferiv(D.COLOR,0,x))}else j|=D.COLOR_BUFFER_BIT}W&&(j|=D.DEPTH_BUFFER_BIT),Z&&(j|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),Gt.dispose(),Tt.dispose(),Yt.dispose(),_t.dispose(),T.dispose(),q.dispose(),Q.dispose(),he.dispose(),V.dispose(),Dt.dispose(),$.dispose(),$.removeEventListener("sessionstart",hs),$.removeEventListener("sessionend",ds),Ye.stop()};function nt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const R=kt.autoReset,W=Rt.enabled,Z=Rt.autoUpdate,j=Rt.needsUpdate,X=Rt.type;mt(),kt.autoReset=R,Rt.enabled=W,Rt.autoUpdate=Z,Rt.needsUpdate=j,Rt.type=X}function wt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Zt(R){const W=R.target;W.removeEventListener("dispose",Zt),ve(W)}function ve(R){Ae(R),_t.remove(R)}function Ae(R){const W=_t.get(R).programs;W!==void 0&&(W.forEach(function(Z){Dt.releaseProgram(Z)}),R.isShaderMaterial&&Dt.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,Z,j,X,pt){W===null&&(W=oe);const bt=X.isMesh&&X.matrixWorld.determinant()<0,Pt=si(R,W,Z,j,X);ut.setMaterial(j,bt);let Nt=Z.index,jt=1;if(j.wireframe===!0){if(Nt=st.getWireframeAttribute(Z),Nt===void 0)return;jt=2}const Jt=Z.drawRange,zt=Z.attributes.position;let ae=Jt.start*jt,ue=(Jt.start+Jt.count)*jt;pt!==null&&(ae=Math.max(ae,pt.start*jt),ue=Math.min(ue,(pt.start+pt.count)*jt)),Nt!==null?(ae=Math.max(ae,0),ue=Math.min(ue,Nt.count)):zt!=null&&(ae=Math.max(ae,0),ue=Math.min(ue,zt.count));const Ce=ue-ae;if(Ce<0||Ce===1/0)return;he.setup(X,j,Pt,Z,Nt);let be,ce=Ct;if(Nt!==null&&(be=tt.get(Nt),ce=ne,ce.setIndex(be)),X.isMesh)j.wireframe===!0?(ut.setLineWidth(j.wireframeLinewidth*ot()),ce.setMode(D.LINES)):ce.setMode(D.TRIANGLES);else if(X.isLine){let Vt=j.linewidth;Vt===void 0&&(Vt=1),ut.setLineWidth(Vt*ot()),X.isLineSegments?ce.setMode(D.LINES):X.isLineLoop?ce.setMode(D.LINE_LOOP):ce.setMode(D.LINE_STRIP)}else X.isPoints?ce.setMode(D.POINTS):X.isSprite&&ce.setMode(D.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)pi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ce.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))ce.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Vt=X._multiDrawStarts,Fe=X._multiDrawCounts,fe=X._multiDrawCount,ln=Nt?tt.get(Nt).bytesPerElement:1,Li=_t.get(j).currentProgram.getUniforms();for(let Qe=0;Qe<fe;Qe++)Li.setValue(D,"_gl_DrawID",Qe),ce.render(Vt[Qe]/ln,Fe[Qe])}else if(X.isInstancedMesh)ce.renderInstances(ae,Ce,X.count);else if(Z.isInstancedBufferGeometry){const Vt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Fe=Math.min(Z.instanceCount,Vt);ce.renderInstances(ae,Ce,Fe)}else ce.render(ae,Ce)};function te(R,W,Z){R.transparent===!0&&R.side===Mn&&R.forceSinglePass===!1?(R.side=Je,R.needsUpdate=!0,Oe(R,W,Z),R.side=ti,R.needsUpdate=!0,Oe(R,W,Z),R.side=Mn):Oe(R,W,Z)}this.compile=function(R,W,Z=null){Z===null&&(Z=R),p=Yt.get(Z),p.init(W),_.push(p),Z.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),R!==Z&&R.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const j=new Set;return R.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const pt=X.material;if(pt)if(Array.isArray(pt))for(let bt=0;bt<pt.length;bt++){const Pt=pt[bt];te(Pt,Z,X),j.add(Pt)}else te(pt,Z,X),j.add(pt)}),p=_.pop(),j},this.compileAsync=function(R,W,Z=null){const j=this.compile(R,W,Z);return new Promise(X=>{function pt(){if(j.forEach(function(bt){_t.get(bt).currentProgram.isReady()&&j.delete(bt)}),j.size===0){X(R);return}setTimeout(pt,10)}lt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let me=null;function qe(R){me&&me(R)}function hs(){Ye.stop()}function ds(){Ye.start()}const Ye=new Vl;Ye.setAnimationLoop(qe),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(R){me=R,$.setAnimationLoop(R),R===null?Ye.stop():Ye.start()},$.addEventListener("sessionstart",hs),$.addEventListener("sessionend",ds),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(W),W=$.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,W,P),p=Yt.get(R,_.length),p.init(W),_.push(p),Ut.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),K.setFromProjectionMatrix(Ut),xt=this.localClippingEnabled,rt=it.init(this.clippingPlanes,xt),g=Tt.get(R,v.length),g.init(),v.push(g),$.enabled===!0&&$.isPresenting===!0){const pt=w.xr.getDepthSensingMesh();pt!==null&&ni(pt,W,-1/0,w.sortObjects)}ni(R,W,0,w.sortObjects),g.finish(),w.sortObjects===!0&&g.sort(J,ht),at=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,at&&Gt.addToRenderList(g,R),this.info.render.frame++,rt===!0&&it.beginShadows();const Z=p.state.shadowsArray;Rt.render(Z,R,W),rt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=g.opaque,X=g.transmissive;if(p.setupLights(),W.isArrayCamera){const pt=W.cameras;if(X.length>0)for(let bt=0,Pt=pt.length;bt<Pt;bt++){const Nt=pt[bt];Ot(j,X,R,Nt)}at&&Gt.render(R);for(let bt=0,Pt=pt.length;bt<Pt;bt++){const Nt=pt[bt];Ti(g,R,Nt,Nt.viewport)}}else X.length>0&&Ot(j,X,R,W),at&&Gt.render(R),Ti(g,R,W);P!==null&&C===0&&(I.updateMultisampleRenderTarget(P),I.updateRenderTargetMipmap(P)),R.isScene===!0&&R.onAfterRender(w,R,W),he.resetDefaultState(),S=-1,M=null,_.pop(),_.length>0?(p=_[_.length-1],rt===!0&&it.setGlobalState(w.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function ni(R,W,Z,j){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||K.intersectsSprite(R)){j&&Mt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ut);const bt=Q.update(R),Pt=R.material;Pt.visible&&g.push(R,bt,Pt,Z,Mt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||K.intersectsObject(R))){const bt=Q.update(R),Pt=R.material;if(j&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Mt.copy(R.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Mt.copy(bt.boundingSphere.center)),Mt.applyMatrix4(R.matrixWorld).applyMatrix4(Ut)),Array.isArray(Pt)){const Nt=bt.groups;for(let jt=0,Jt=Nt.length;jt<Jt;jt++){const zt=Nt[jt],ae=Pt[zt.materialIndex];ae&&ae.visible&&g.push(R,bt,ae,Z,Mt.z,zt)}}else Pt.visible&&g.push(R,bt,Pt,Z,Mt.z,null)}}const pt=R.children;for(let bt=0,Pt=pt.length;bt<Pt;bt++)ni(pt[bt],W,Z,j)}function Ti(R,W,Z,j){const X=R.opaque,pt=R.transmissive,bt=R.transparent;p.setupLightsView(Z),rt===!0&&it.setGlobalState(w.clippingPlanes,Z),j&&ut.viewport(L.copy(j)),X.length>0&&Xt(X,W,Z),pt.length>0&&Xt(pt,W,Z),bt.length>0&&Xt(bt,W,Z),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Ot(R,W,Z,j){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Ei(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?Is:Gn,minFilter:Mi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));const pt=p.state.transmissionRenderTarget[j.id],bt=j.viewport||L;pt.setSize(bt.z*w.transmissionResolutionScale,bt.w*w.transmissionResolutionScale);const Pt=w.getRenderTarget();w.setRenderTarget(pt),w.getClearColor(B),z=w.getClearAlpha(),z<1&&w.setClearColor(16777215,.5),w.clear(),at&&Gt.render(Z);const Nt=w.toneMapping;w.toneMapping=Qn;const jt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),rt===!0&&it.setGlobalState(w.clippingPlanes,j),Xt(R,Z,j),I.updateMultisampleRenderTarget(pt),I.updateRenderTargetMipmap(pt),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let zt=0,ae=W.length;zt<ae;zt++){const ue=W[zt],Ce=ue.object,be=ue.geometry,ce=ue.material,Vt=ue.group;if(ce.side===Mn&&Ce.layers.test(j.layers)){const Fe=ce.side;ce.side=Je,ce.needsUpdate=!0,ke(Ce,Z,j,be,ce,Vt),ce.side=Fe,ce.needsUpdate=!0,Jt=!0}}Jt===!0&&(I.updateMultisampleRenderTarget(pt),I.updateRenderTargetMipmap(pt))}w.setRenderTarget(Pt),w.setClearColor(B,z),jt!==void 0&&(j.viewport=jt),w.toneMapping=Nt}function Xt(R,W,Z){const j=W.isScene===!0?W.overrideMaterial:null;for(let X=0,pt=R.length;X<pt;X++){const bt=R[X],Pt=bt.object,Nt=bt.geometry,jt=j===null?bt.material:j,Jt=bt.group;Pt.layers.test(Z.layers)&&ke(Pt,W,Z,Nt,jt,Jt)}}function ke(R,W,Z,j,X,pt){R.onBeforeRender(w,W,Z,j,X,pt),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(w,W,Z,j,R,pt),X.transparent===!0&&X.side===Mn&&X.forceSinglePass===!1?(X.side=Je,X.needsUpdate=!0,w.renderBufferDirect(Z,W,j,X,R,pt),X.side=ti,X.needsUpdate=!0,w.renderBufferDirect(Z,W,j,X,R,pt),X.side=Mn):w.renderBufferDirect(Z,W,j,X,R,pt),R.onAfterRender(w,W,Z,j,X,pt)}function Oe(R,W,Z){W.isScene!==!0&&(W=oe);const j=_t.get(R),X=p.state.lights,pt=p.state.shadowsArray,bt=X.state.version,Pt=Dt.getParameters(R,X.state,pt,W,Z),Nt=Dt.getProgramCacheKey(Pt);let jt=j.programs;j.environment=R.isMeshStandardMaterial?W.environment:null,j.fog=W.fog,j.envMap=(R.isMeshStandardMaterial?q:T).get(R.envMap||j.environment),j.envMapRotation=j.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,jt===void 0&&(R.addEventListener("dispose",Zt),jt=new Map,j.programs=jt);let Jt=jt.get(Nt);if(Jt!==void 0){if(j.currentProgram===Jt&&j.lightsStateVersion===bt)return Hn(R,Pt),Jt}else Pt.uniforms=Dt.getUniforms(R),R.onBeforeCompile(Pt,w),Jt=Dt.acquireProgram(Pt,Nt),jt.set(Nt,Jt),j.uniforms=Pt.uniforms;const zt=j.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(zt.clippingPlanes=it.uniform),Hn(R,Pt),j.needsLights=Ci(R),j.lightsStateVersion=bt,j.needsLights&&(zt.ambientLightColor.value=X.state.ambient,zt.lightProbe.value=X.state.probe,zt.directionalLights.value=X.state.directional,zt.directionalLightShadows.value=X.state.directionalShadow,zt.spotLights.value=X.state.spot,zt.spotLightShadows.value=X.state.spotShadow,zt.rectAreaLights.value=X.state.rectArea,zt.ltc_1.value=X.state.rectAreaLTC1,zt.ltc_2.value=X.state.rectAreaLTC2,zt.pointLights.value=X.state.point,zt.pointLightShadows.value=X.state.pointShadow,zt.hemisphereLights.value=X.state.hemi,zt.directionalShadowMap.value=X.state.directionalShadowMap,zt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,zt.spotShadowMap.value=X.state.spotShadowMap,zt.spotLightMatrix.value=X.state.spotLightMatrix,zt.spotLightMap.value=X.state.spotLightMap,zt.pointShadowMap.value=X.state.pointShadowMap,zt.pointShadowMatrix.value=X.state.pointShadowMatrix),j.currentProgram=Jt,j.uniformsList=null,Jt}function ii(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=vo.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Hn(R,W){const Z=_t.get(R);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.batchingColor=W.batchingColor,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.instancingMorph=W.instancingMorph,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function si(R,W,Z,j,X){W.isScene!==!0&&(W=oe),I.resetTextureUnits();const pt=W.fog,bt=j.isMeshStandardMaterial?W.environment:null,Pt=P===null?w.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ss,Nt=(j.isMeshStandardMaterial?q:T).get(j.envMap||bt),jt=j.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Jt=!!Z.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),zt=!!Z.morphAttributes.position,ae=!!Z.morphAttributes.normal,ue=!!Z.morphAttributes.color;let Ce=Qn;j.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ce=w.toneMapping);const be=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ce=be!==void 0?be.length:0,Vt=_t.get(j),Fe=p.state.lights;if(rt===!0&&(xt===!0||R!==M)){const Ve=R===M&&j.id===S;it.setState(j,R,Ve)}let fe=!1;j.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Fe.state.version||Vt.outputColorSpace!==Pt||X.isBatchedMesh&&Vt.batching===!1||!X.isBatchedMesh&&Vt.batching===!0||X.isBatchedMesh&&Vt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Vt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Vt.instancing===!1||!X.isInstancedMesh&&Vt.instancing===!0||X.isSkinnedMesh&&Vt.skinning===!1||!X.isSkinnedMesh&&Vt.skinning===!0||X.isInstancedMesh&&Vt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Vt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Vt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Vt.instancingMorph===!1&&X.morphTexture!==null||Vt.envMap!==Nt||j.fog===!0&&Vt.fog!==pt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==it.numPlanes||Vt.numIntersection!==it.numIntersection)||Vt.vertexAlphas!==jt||Vt.vertexTangents!==Jt||Vt.morphTargets!==zt||Vt.morphNormals!==ae||Vt.morphColors!==ue||Vt.toneMapping!==Ce||Vt.morphTargetsCount!==ce)&&(fe=!0):(fe=!0,Vt.__version=j.version);let ln=Vt.currentProgram;fe===!0&&(ln=Oe(j,W,X));let Li=!1,Qe=!1,us=!1;const Me=ln.getUniforms(),on=Vt.uniforms;if(ut.useProgram(ln.program)&&(Li=!0,Qe=!0,us=!0),j.id!==S&&(S=j.id,Qe=!0),Li||M!==R){ut.buffers.depth.getReversed()?(dt.copy(R.projectionMatrix),Hh(dt),Wh(dt),Me.setValue(D,"projectionMatrix",dt)):Me.setValue(D,"projectionMatrix",R.projectionMatrix),Me.setValue(D,"viewMatrix",R.matrixWorldInverse);const Ze=Me.map.cameraPosition;Ze!==void 0&&Ze.setValue(D,Ht.setFromMatrixPosition(R.matrixWorld)),At.logarithmicDepthBuffer&&Me.setValue(D,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Me.setValue(D,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,Qe=!0,us=!0)}if(X.isSkinnedMesh){Me.setOptional(D,X,"bindMatrix"),Me.setOptional(D,X,"bindMatrixInverse");const Ve=X.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),Me.setValue(D,"boneTexture",Ve.boneTexture,I))}X.isBatchedMesh&&(Me.setOptional(D,X,"batchingTexture"),Me.setValue(D,"batchingTexture",X._matricesTexture,I),Me.setOptional(D,X,"batchingIdTexture"),Me.setValue(D,"batchingIdTexture",X._indirectTexture,I),Me.setOptional(D,X,"batchingColorTexture"),X._colorsTexture!==null&&Me.setValue(D,"batchingColorTexture",X._colorsTexture,I));const rn=Z.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&Wt.update(X,Z,ln),(Qe||Vt.receiveShadow!==X.receiveShadow)&&(Vt.receiveShadow=X.receiveShadow,Me.setValue(D,"receiveShadow",X.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(on.envMap.value=Nt,on.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&W.environment!==null&&(on.envMapIntensity.value=W.environmentIntensity),Qe&&(Me.setValue(D,"toneMappingExposure",w.toneMappingExposure),Vt.needsLights&&Ai(on,us),pt&&j.fog===!0&&vt.refreshFogUniforms(on,pt),vt.refreshMaterialUniforms(on,j,G,Y,p.state.transmissionRenderTarget[R.id]),vo.upload(D,ii(Vt),on,I)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(vo.upload(D,ii(Vt),on,I),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Me.setValue(D,"center",X.center),Me.setValue(D,"modelViewMatrix",X.modelViewMatrix),Me.setValue(D,"normalMatrix",X.normalMatrix),Me.setValue(D,"modelMatrix",X.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Ve=j.uniformsGroups;for(let Ze=0,Io=Ve.length;Ze<Io;Ze++){const oi=Ve[Ze];V.update(oi,ln),V.bind(oi,ln)}}return ln}function Ai(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Ci(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,W,Z){_t.get(R.texture).__webglTexture=W,_t.get(R.depthTexture).__webglTexture=Z;const j=_t.get(R);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Z===void 0,j.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,W){const Z=_t.get(R);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0};const Ri=D.createFramebuffer();this.setRenderTarget=function(R,W=0,Z=0){P=R,E=W,C=Z;let j=!0,X=null,pt=!1,bt=!1;if(R){const Nt=_t.get(R);if(Nt.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(D.FRAMEBUFFER,null),j=!1;else if(Nt.__webglFramebuffer===void 0)I.setupRenderTarget(R);else if(Nt.__hasExternalTextures)I.rebindTextures(R,_t.get(R.texture).__webglTexture,_t.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const zt=R.depthTexture;if(Nt.__boundDepthTexture!==zt){if(zt!==null&&_t.has(zt)&&(R.width!==zt.image.width||R.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(R)}}const jt=R.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(bt=!0);const Jt=_t.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Jt[W])?X=Jt[W][Z]:X=Jt[W],pt=!0):R.samples>0&&I.useMultisampledRTT(R)===!1?X=_t.get(R).__webglMultisampledFramebuffer:Array.isArray(Jt)?X=Jt[Z]:X=Jt,L.copy(R.viewport),k.copy(R.scissor),N=R.scissorTest}else L.copy(gt).multiplyScalar(G).floor(),k.copy(ct).multiplyScalar(G).floor(),N=qt;if(Z!==0&&(X=Ri),ut.bindFramebuffer(D.FRAMEBUFFER,X)&&j&&ut.drawBuffers(R,X),ut.viewport(L),ut.scissor(k),ut.setScissorTest(N),pt){const Nt=_t.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+W,Nt.__webglTexture,Z)}else if(bt){const Nt=_t.get(R.texture),jt=W;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Nt.__webglTexture,Z,jt)}else if(R!==null&&Z!==0){const Nt=_t.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Nt.__webglTexture,Z)}S=-1},this.readRenderTargetPixels=function(R,W,Z,j,X,pt,bt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=_t.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&bt!==void 0&&(Pt=Pt[bt]),Pt){ut.bindFramebuffer(D.FRAMEBUFFER,Pt);try{const Nt=R.texture,jt=Nt.format,Jt=Nt.type;if(!At.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-j&&Z>=0&&Z<=R.height-X&&D.readPixels(W,Z,j,X,$t.convert(jt),$t.convert(Jt),pt)}finally{const Nt=P!==null?_t.get(P).__webglFramebuffer:null;ut.bindFramebuffer(D.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(R,W,Z,j,X,pt,bt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=_t.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&bt!==void 0&&(Pt=Pt[bt]),Pt){const Nt=R.texture,jt=Nt.format,Jt=Nt.type;if(!At.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=R.width-j&&Z>=0&&Z<=R.height-X){ut.bindFramebuffer(D.FRAMEBUFFER,Pt);const zt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,zt),D.bufferData(D.PIXEL_PACK_BUFFER,pt.byteLength,D.STREAM_READ),D.readPixels(W,Z,j,X,$t.convert(jt),$t.convert(Jt),0);const ae=P!==null?_t.get(P).__webglFramebuffer:null;ut.bindFramebuffer(D.FRAMEBUFFER,ae);const ue=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Gh(D,ue,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,zt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,pt),D.deleteBuffer(zt),D.deleteSync(ue),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,W=null,Z=0){R.isTexture!==!0&&(pi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1]);const j=Math.pow(2,-Z),X=Math.floor(R.image.width*j),pt=Math.floor(R.image.height*j),bt=W!==null?W.x:0,Pt=W!==null?W.y:0;I.setTexture2D(R,0),D.copyTexSubImage2D(D.TEXTURE_2D,Z,0,0,bt,Pt,X,pt),ut.unbindTexture()};const Pi=D.createFramebuffer(),An=D.createFramebuffer();this.copyTextureToTexture=function(R,W,Z=null,j=null,X=0,pt=null){R.isTexture!==!0&&(pi("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,R=arguments[1],W=arguments[2],pt=arguments[3]||0,Z=null),pt===null&&(X!==0?(pi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=X,X=0):pt=0);let bt,Pt,Nt,jt,Jt,zt,ae,ue,Ce;const be=R.isCompressedTexture?R.mipmaps[pt]:R.image;if(Z!==null)bt=Z.max.x-Z.min.x,Pt=Z.max.y-Z.min.y,Nt=Z.isBox3?Z.max.z-Z.min.z:1,jt=Z.min.x,Jt=Z.min.y,zt=Z.isBox3?Z.min.z:0;else{const rn=Math.pow(2,-X);bt=Math.floor(be.width*rn),Pt=Math.floor(be.height*rn),R.isDataArrayTexture?Nt=be.depth:R.isData3DTexture?Nt=Math.floor(be.depth*rn):Nt=1,jt=0,Jt=0,zt=0}j!==null?(ae=j.x,ue=j.y,Ce=j.z):(ae=0,ue=0,Ce=0);const ce=$t.convert(W.format),Vt=$t.convert(W.type);let Fe;W.isData3DTexture?(I.setTexture3D(W,0),Fe=D.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(I.setTexture2DArray(W,0),Fe=D.TEXTURE_2D_ARRAY):(I.setTexture2D(W,0),Fe=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,W.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,W.unpackAlignment);const fe=D.getParameter(D.UNPACK_ROW_LENGTH),ln=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Li=D.getParameter(D.UNPACK_SKIP_PIXELS),Qe=D.getParameter(D.UNPACK_SKIP_ROWS),us=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,be.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,be.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,jt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Jt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,zt);const Me=R.isDataArrayTexture||R.isData3DTexture,on=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const rn=_t.get(R),Ve=_t.get(W),Ze=_t.get(rn.__renderTarget),Io=_t.get(Ve.__renderTarget);ut.bindFramebuffer(D.READ_FRAMEBUFFER,Ze.__webglFramebuffer),ut.bindFramebuffer(D.DRAW_FRAMEBUFFER,Io.__webglFramebuffer);for(let oi=0;oi<Nt;oi++)Me&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_t.get(R).__webglTexture,X,zt+oi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_t.get(W).__webglTexture,pt,Ce+oi)),D.blitFramebuffer(jt,Jt,bt,Pt,ae,ue,bt,Pt,D.DEPTH_BUFFER_BIT,D.NEAREST);ut.bindFramebuffer(D.READ_FRAMEBUFFER,null),ut.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(X!==0||R.isRenderTargetTexture||_t.has(R)){const rn=_t.get(R),Ve=_t.get(W);ut.bindFramebuffer(D.READ_FRAMEBUFFER,Pi),ut.bindFramebuffer(D.DRAW_FRAMEBUFFER,An);for(let Ze=0;Ze<Nt;Ze++)Me?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,rn.__webglTexture,X,zt+Ze):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,rn.__webglTexture,X),on?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ve.__webglTexture,pt,Ce+Ze):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ve.__webglTexture,pt),X!==0?D.blitFramebuffer(jt,Jt,bt,Pt,ae,ue,bt,Pt,D.COLOR_BUFFER_BIT,D.NEAREST):on?D.copyTexSubImage3D(Fe,pt,ae,ue,Ce+Ze,jt,Jt,bt,Pt):D.copyTexSubImage2D(Fe,pt,ae,ue,jt,Jt,bt,Pt);ut.bindFramebuffer(D.READ_FRAMEBUFFER,null),ut.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else on?R.isDataTexture||R.isData3DTexture?D.texSubImage3D(Fe,pt,ae,ue,Ce,bt,Pt,Nt,ce,Vt,be.data):W.isCompressedArrayTexture?D.compressedTexSubImage3D(Fe,pt,ae,ue,Ce,bt,Pt,Nt,ce,be.data):D.texSubImage3D(Fe,pt,ae,ue,Ce,bt,Pt,Nt,ce,Vt,be):R.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,pt,ae,ue,bt,Pt,ce,Vt,be.data):R.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,pt,ae,ue,be.width,be.height,ce,be.data):D.texSubImage2D(D.TEXTURE_2D,pt,ae,ue,bt,Pt,ce,Vt,be);D.pixelStorei(D.UNPACK_ROW_LENGTH,fe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ln),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Li),D.pixelStorei(D.UNPACK_SKIP_ROWS,Qe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,us),pt===0&&W.generateMipmaps&&D.generateMipmap(Fe),ut.unbindTexture()},this.copyTextureToTexture3D=function(R,W,Z=null,j=null,X=0){return R.isTexture!==!0&&(pi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,j=arguments[1]||null,R=arguments[2],W=arguments[3],X=arguments[4]||0),pi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,Z,j,X)},this.initRenderTarget=function(R){_t.get(R).__webglFramebuffer===void 0&&I.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),ut.unbindTexture()},this.resetState=function(){E=0,C=0,P=null,ut.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}class gn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new A);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new A);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new gn);const n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],c=n[2],l=n[3],h=n[4],u=n[5],d=n[6],f=n[7],m=n[8],x=i[0],g=i[1],p=i[2],v=i[3],_=i[4],w=i[5],b=i[6],E=i[7],C=i[8];return s[0]=o*x+a*v+c*b,s[1]=o*g+a*_+c*E,s[2]=o*p+a*w+c*C,s[3]=l*x+h*v+u*b,s[4]=l*g+h*_+u*E,s[5]=l*p+h*w+u*C,s[6]=d*x+f*v+m*b,s[7]=d*g+f*_+m*E,s[8]=d*p+f*w+m*C,e}scale(t,e){e===void 0&&(e=new gn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new A);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3]=t.x,s[7]=t.y,s[11]=t.z;let c=3;const l=c;let h;const u=4;let d;do{if(o=l-c,s[o+i*o]===0){for(a=o+1;a<l;a++)if(s[o+i*a]!==0){h=u;do d=u-h,s[d+i*o]+=s[d+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<l;a++){const f=s[o+i*a]/s[o+i*o];h=u;do d=u-h,s[d+i*a]=d<=o?0:s[d+i*a]-s[d+i*o]*f;while(--h)}}while(--c);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";for(let n=0;n<9;n++)t+=this.elements[n]+",";return t}reverse(t){t===void 0&&(t=new gn);const e=3,n=6,i=Hm;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3;const c=a;let l;const h=n;let u;do{if(s=c-a,i[s+n*s]===0){for(o=s+1;o<c;o++)if(i[s+n*o]!==0){l=h;do u=h-l,i[u+n*s]+=i[u+n*o];while(--l);break}}if(i[s+n*s]!==0)for(o=s+1;o<c;o++){const d=i[s+n*o]/i[s+n*s];l=h;do u=h-l,i[u+n*o]=u<=s?0:i[u+n*o]-i[u+n*s]*d;while(--l)}}while(--a);s=2;do{o=s-1;do{const d=i[s+n*o]/i[s+n*s];l=n;do u=n-l,i[u+n*o]=i[u+n*o]-i[u+n*s]*d;while(--l)}while(o--)}while(--s);s=2;do{const d=1/i[s+n*s];l=n;do u=n-l,i[u+n*s]=i[u+n*s]*d;while(--l)}while(s--);s=2;do{o=2;do{if(u=i[e+o+n*s],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,u)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,c=i+i,l=e*o,h=e*a,u=e*c,d=n*a,f=n*c,m=i*c,x=s*o,g=s*a,p=s*c,v=this.elements;return v[0]=1-(d+m),v[1]=h-p,v[2]=u+g,v[3]=h+p,v[4]=1-(l+m),v[5]=f-x,v[6]=u-g,v[7]=f+x,v[8]=1-(l+d),this}transpose(t){t===void 0&&(t=new gn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const Hm=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class A{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new A);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z;return e.x=a*s-c*i,e.y=c*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new A(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new A(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new gn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new A);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new A);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new A),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new A),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new A),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=Wm,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=Xm;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(kc),kc.almostEquals(t,e)}clone(){return new A(this.x,this.y,this.z)}}A.ZERO=new A(0,0,0);A.UNIT_X=new A(1,0,0);A.UNIT_Y=new A(0,1,0);A.UNIT_Z=new A(0,0,1);const Wm=new A,Xm=new A,kc=new A;class sn{constructor(t){t===void 0&&(t={}),this.lowerBound=new A,this.upperBound=new A,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,Vc),l=Vc),l.x>o.x&&(o.x=l.x),l.x<s.x&&(s.x=l.x),l.y>o.y&&(o.y=l.y),l.y<s.y&&(s.y=l.y),l.z>o.z&&(o.z=l.z),l.z<s.z&&(s.z=l.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new sn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,c=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&c}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,c){const l=this.lowerBound,h=this.upperBound;t.copy(l),e.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),s.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(t,e){const n=Gc,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7];this.getCorners(i,s,o,a,c,l,h,u);for(let d=0;d!==8;d++){const f=n[d];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Gc,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7];this.getCorners(i,s,o,a,c,l,h,u);for(let d=0;d!==8;d++){const f=n[d];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,u=(this.lowerBound.z-n.z)*o,d=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(u,d)),m=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(u,d));return!(m<0||f>m)}}const Vc=new A,Gc=[new A,new A,new A,new A,new A,new A,new A,new A];class Hc{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class ql{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class Le{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new A),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=qm,i=Ym;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Le);const n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,c=t.y,l=t.z,h=t.w;return e.x=n*h+o*a+i*l-s*c,e.y=i*h+o*c+s*a-n*l,e.z=s*h+o*l+n*c-i*a,e.w=o*h-n*a-i*c-s*l,e}inverse(t){t===void 0&&(t=new Le);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Le),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new A);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z,l=this.w,h=l*n+a*s-c*i,u=l*i+c*n-o*s,d=l*s+o*i-a*n,f=-o*n-a*i-c*s;return e.x=h*l+f*-o+u*-c-d*-a,e.y=u*l+f*-a+d*-o-h*-c,e.z=d*l+f*-c+h*-a-u*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":const h=o*a+c*l;if(h>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,s=0),n===void 0){const u=o*o,d=a*a,f=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*d-2*f),i=Math.asin(2*h),s=Math.atan2(2*o*l-2*a*c,1-2*u-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=c*o*a+s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a-c*l*h):i==="YXZ"?(this.x=c*o*a+s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a+c*l*h):i==="ZXY"?(this.x=c*o*a-s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a-c*l*h):i==="ZYX"?(this.x=c*o*a-s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a+c*l*h):i==="YZX"?(this.x=c*o*a+s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a-c*l*h):i==="XZY"&&(this.x=c*o*a-s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a+c*l*h),this}clone(){return new Le(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Le);const i=this.x,s=this.y,o=this.z,a=this.w;let c=t.x,l=t.y,h=t.z,u=t.w,d,f,m,x,g;return f=i*c+s*l+o*h+a*u,f<0&&(f=-f,c=-c,l=-l,h=-h,u=-u),1-f>1e-6?(d=Math.acos(f),m=Math.sin(d),x=Math.sin((1-e)*d)/m,g=Math.sin(e*d)/m):(x=1-e,g=e),n.x=x*i+g*c,n.y=x*s+g*l,n.z=x*o+g*h,n.w=x*a+g*u,n}integrate(t,e,n,i){i===void 0&&(i=new Le);const s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,h=this.z,u=this.w,d=e*.5;return i.x+=d*(s*u+o*h-a*l),i.y+=d*(o*u+a*c-s*h),i.z+=d*(a*u+s*l-o*c),i.w+=d*(-s*c-o*l-a*h),i}}const qm=new A,Ym=new A,Zm={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Lt{constructor(t){t===void 0&&(t={}),this.id=Lt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Lt.idCounter=0;Lt.types=Zm;class de{constructor(t){t===void 0&&(t={}),this.position=new A,this.quaternion=new Le,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return de.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return de.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new A),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new A),n.vsub(t,i),e.conjugate(Wc),Wc.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new A),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new A),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new A),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const Wc=new Le;class As extends Lt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:Lt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new A;for(let s=0;s!==t.length;s++){const o=t[s],a=o.length;for(let c=0;c!==a;c++){const l=(c+1)%a;e[o[c]].vsub(e[o[l]],i),i.normalize();let h=!1;for(let u=0;u!==n.length;u++)if(n[u].almostEquals(i)||n[u].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new A;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];As.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new A,o=new A;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,c,l){const h=new A;let u=-1,d=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){h.copy(n.faceNormals[m]),s.vmult(h,h);const x=h.dot(o);x>d&&(d=x,u=m)}const f=[];for(let m=0;m<n.faces[u].length;m++){const x=n.vertices[n.faces[u][m]],g=new A;g.copy(x),s.vmult(g,g),i.vadd(g,g),f.push(g)}u>=0&&this.clipFaceAgainstHull(o,t,e,f,a,c,l)}findSeparatingAxis(t,e,n,i,s,o,a,c){const l=new A,h=new A,u=new A,d=new A,f=new A,m=new A;let x=Number.MAX_VALUE;const g=this;if(g.uniqueAxes)for(let p=0;p!==g.uniqueAxes.length;p++){n.vmult(g.uniqueAxes[p],l);const v=g.testSepAxis(l,t,e,n,i,s);if(v===!1)return!1;v<x&&(x=v,o.copy(l))}else{const p=a?a.length:g.faces.length;for(let v=0;v<p;v++){const _=a?a[v]:v;l.copy(g.faceNormals[_]),n.vmult(l,l);const w=g.testSepAxis(l,t,e,n,i,s);if(w===!1)return!1;w<x&&(x=w,o.copy(l))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){s.vmult(t.uniqueAxes[p],h);const v=g.testSepAxis(h,t,e,n,i,s);if(v===!1)return!1;v<x&&(x=v,o.copy(h))}else{const p=c?c.length:t.faces.length;for(let v=0;v<p;v++){const _=c?c[v]:v;h.copy(t.faceNormals[_]),s.vmult(h,h);const w=g.testSepAxis(h,t,e,n,i,s);if(w===!1)return!1;w<x&&(x=w,o.copy(h))}}for(let p=0;p!==g.uniqueEdges.length;p++){n.vmult(g.uniqueEdges[p],d);for(let v=0;v!==t.uniqueEdges.length;v++)if(s.vmult(t.uniqueEdges[v],f),d.cross(f,m),!m.almostZero()){m.normalize();const _=g.testSepAxis(m,t,e,n,i,s);if(_===!1)return!1;_<x&&(x=_,o.copy(m))}}return i.vsub(e,u),u.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const a=this;As.project(a,t,n,i,mr),As.project(e,t,s,o,gr);const c=mr[0],l=mr[1],h=gr[0],u=gr[1];if(c<u||h<l)return!1;const d=c-u,f=h-l;return d<f?d:f}calculateLocalInertia(t,e){const n=new A,i=new A;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){const c=new A,l=new A,h=new A,u=new A,d=new A,f=new A,m=new A,x=new A,g=this,p=[],v=i,_=p;let w=-1,b=Number.MAX_VALUE;for(let M=0;M<g.faces.length;M++){c.copy(g.faceNormals[M]),n.vmult(c,c);const L=c.dot(t);L<b&&(b=L,w=M)}if(w<0)return;const E=g.faces[w];E.connectedFaces=[];for(let M=0;M<g.faces.length;M++)for(let L=0;L<g.faces[M].length;L++)E.indexOf(g.faces[M][L])!==-1&&M!==w&&E.connectedFaces.indexOf(M)===-1&&E.connectedFaces.push(M);const C=E.length;for(let M=0;M<C;M++){const L=g.vertices[E[M]],k=g.vertices[E[(M+1)%C]];L.vsub(k,l),h.copy(l),n.vmult(h,h),e.vadd(h,h),u.copy(this.faceNormals[w]),n.vmult(u,u),e.vadd(u,u),h.cross(u,d),d.negate(d),f.copy(L),n.vmult(f,f),e.vadd(f,f);const N=E.connectedFaces[M];m.copy(this.faceNormals[N]);const B=this.getPlaneConstantOfFace(N);x.copy(m),n.vmult(x,x);const z=B-x.dot(e);for(this.clipFaceAgainstPlane(v,_,x,z);v.length;)v.shift();for(;_.length;)v.push(_.shift())}m.copy(this.faceNormals[w]);const P=this.getPlaneConstantOfFace(w);x.copy(m),n.vmult(x,x);const S=P-x.dot(e);for(let M=0;M<v.length;M++){let L=x.dot(v[M])+S;if(L<=s&&(console.log(`clamped: depth=${L} to minDist=${s}`),L=s),L<=o){const k=v[M];if(L<=1e-6){const N={point:k,normal:x,depth:L};a.push(N)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];s=n.dot(c)+i;for(let h=0;h<a;h++){if(l=t[h],o=n.dot(l)+i,s<0)if(o<0){const u=new A;u.copy(l),e.push(u)}else{const u=new A;c.lerp(l,s/(s-o),u),e.push(u)}else if(o<0){const u=new A;c.lerp(l,s/(s-o),u),e.push(u),e.push(l)}c=l,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new A);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new A);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,a,c,l,h,u,d=new A;for(let f=0;f<s.length;f++){d.copy(s[f]),e.vmult(d,d),t.vadd(d,d);const m=d;(o===void 0||m.x<o)&&(o=m.x),(l===void 0||m.x>l)&&(l=m.x),(a===void 0||m.y<a)&&(a=m.y),(h===void 0||m.y>h)&&(h=m.y),(c===void 0||m.z<c)&&(c=m.z),(u===void 0||m.z>u)&&(u=m.z)}n.set(o,a,c),i.set(l,h,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new A);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new A;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let a=i[o];const c=e[n[o][0]],l=new A;t.vsub(c,l);const h=a.dot(l),u=new A;s.vsub(c,u);const d=a.dot(u);if(h<0&&d>0||h>0&&d<0)return!1}return-1}static project(t,e,n,i,s){const o=t.vertices.length,a=jm;let c=0,l=0;const h=Km,u=t.vertices;h.setZero(),de.vectorToLocalFrame(n,i,e,a),de.pointToLocalFrame(n,i,h,h);const d=h.dot(a);l=c=u[0].dot(a);for(let f=1;f<o;f++){const m=u[f].dot(a);m>c&&(c=m),m<l&&(l=m)}if(l-=d,c-=d,l>c){const f=l;l=c,c=f}s[0]=c,s[1]=l}}const mr=[],gr=[];new A;const jm=new A,Km=new A;class Ro extends Lt{constructor(t){super({type:Lt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=A,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new As({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new A),Ro.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)Kn.set(s[o][0],s[o][1],s[o][2]),e.vmult(Kn,Kn),t.vadd(Kn,Kn),n(Kn.x,Kn.y,Kn.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;vn[0].set(s.x,s.y,s.z),vn[1].set(-s.x,s.y,s.z),vn[2].set(-s.x,-s.y,s.z),vn[3].set(-s.x,-s.y,-s.z),vn[4].set(s.x,-s.y,-s.z),vn[5].set(s.x,s.y,-s.z),vn[6].set(-s.x,s.y,-s.z),vn[7].set(s.x,-s.y,s.z);const o=vn[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const c=vn[a];e.vmult(c,c),t.vadd(c,c);const l=c.x,h=c.y,u=c.z;l>i.x&&(i.x=l),h>i.y&&(i.y=h),u>i.z&&(i.z=u),l<n.x&&(n.x=l),h<n.y&&(n.y=h),u<n.z&&(n.z=u)}}}const Kn=new A,vn=[new A,new A,new A,new A,new A,new A,new A,new A],Ia={DYNAMIC:1,STATIC:2,KINEMATIC:4},Da={AWAKE:0,SLEEPY:1,SLEEPING:2};class It extends ql{constructor(t){t===void 0&&(t={}),super(),this.id=It.idCounter++,this.index=-1,this.world=null,this.vlambda=new A,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new A,this.previousPosition=new A,this.interpolatedPosition=new A,this.initPosition=new A,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new A,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new A,this.force=new A;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?It.STATIC:It.DYNAMIC,typeof t.type==typeof It.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=It.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new A,this.quaternion=new Le,this.initQuaternion=new Le,this.previousQuaternion=new Le,this.interpolatedQuaternion=new Le,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new A,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new A,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new A,this.invInertia=new A,this.invInertiaWorld=new gn,this.invMassSolve=0,this.invInertiaSolve=new A,this.invInertiaWorldSolve=new gn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new A(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new A(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new sn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new A,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=It.AWAKE,this.wakeUpAfterNarrowphase=!1,t===It.SLEEPING&&this.dispatchEvent(It.wakeupEvent)}sleep(){this.sleepState=It.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===It.AWAKE&&n<i?(this.sleepState=It.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(It.sleepyEvent)):e===It.SLEEPY&&n>i?this.wakeUp():e===It.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(It.sleepEvent))}}updateSolveMassProperties(){this.sleepState===It.SLEEPING||this.type===It.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new A),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new A),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new A),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new A),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new A,s=new Le;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const a=e[s].length(),c=o.boundingSphereRadius;a+c>i&&(i=a+c)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=$m,o=Jm,a=this.quaternion,c=this.aabb,l=Qm;for(let h=0;h!==i;h++){const u=t[h];a.vmult(e[h],s),s.vadd(this.position,s),a.mult(n[h],o),u.calculateWorldAABB(s,o,l.lowerBound,l.upperBound),h===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=tg,i=eg;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new A),this.type!==It.DYNAMIC)return;this.sleepState===It.SLEEPING&&this.wakeUp();const n=ng;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new A),this.type!==It.DYNAMIC)return;const n=ig,i=sg;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===It.DYNAMIC&&(this.sleepState===It.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new A),this.type!==It.DYNAMIC)return;this.sleepState===It.SLEEPING&&this.wakeUp();const n=e,i=og;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=rg;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new A),this.type!==It.DYNAMIC)return;const n=ag,i=cg;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=lg;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Ro.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new A;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===It.DYNAMIC||this.type===It.KINEMATIC)||this.sleepState===It.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,h=this.invMass,u=this.invInertiaWorld,d=this.linearFactor,f=h*t;i.x+=a.x*f*d.x,i.y+=a.y*f*d.y,i.z+=a.z*f*d.z;const m=u.elements,x=this.angularFactor,g=c.x*x.x,p=c.y*x.y,v=c.z*x.z;s.x+=t*(m[0]*g+m[1]*p+m[2]*v),s.y+=t*(m[3]*g+m[4]*p+m[5]*v),s.z+=t*(m[6]*g+m[7]*p+m[8]*v),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}It.idCounter=0;It.COLLIDE_EVENT_NAME="collide";It.DYNAMIC=Ia.DYNAMIC;It.STATIC=Ia.STATIC;It.KINEMATIC=Ia.KINEMATIC;It.AWAKE=Da.AWAKE;It.SLEEPY=Da.SLEEPY;It.SLEEPING=Da.SLEEPING;It.wakeupEvent={type:"wakeup"};It.sleepyEvent={type:"sleepy"};It.sleepEvent={type:"sleep"};const $m=new A,Jm=new Le,Qm=new sn,tg=new gn,eg=new gn;new gn;const ng=new A,ig=new A,sg=new A,og=new A,rg=new A,ag=new A,cg=new A,lg=new A;class hg{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&It.STATIC)!==0||t.sleepState===It.SLEEPING)&&((e.type&It.STATIC)!==0||e.sleepState===It.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=dg;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=ug,i=fg,s=pg,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const c=i[a].id,l=s[a].id,h=c<l?`${c},${l}`:`${l},${c}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const c=n.keys.pop(),l=n[c];t.push(i[l]),e.push(s[l]),delete n[c]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new A;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const dg=new A;new A;new Le;new A;const ug={keys:[]},fg=[],pg=[];new A;new A;new A;class Yl extends hg{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,a;for(let c=0;c!==s;c++)for(let l=0;l!==c;l++)o=i[c],a=i[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class Eo{constructor(){this.rayFromWorld=new A,this.rayToWorld=new A,this.hitNormalWorld=new A,this.hitPointWorld=new A,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let Zl,jl,Kl,$l,Jl,Ql,th;const Na={CLOSEST:1,ANY:2,ALL:4};Zl=Lt.types.SPHERE;jl=Lt.types.PLANE;Kl=Lt.types.BOX;$l=Lt.types.CYLINDER;Jl=Lt.types.CONVEXPOLYHEDRON;Ql=Lt.types.HEIGHTFIELD;th=Lt.types.TRIMESH;class Pe{get[Zl](){return this._intersectSphere}get[jl](){return this._intersectPlane}get[Kl](){return this._intersectBox}get[$l](){return this._intersectConvex}get[Jl](){return this._intersectConvex}get[Ql](){return this._intersectHeightfield}get[th](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new A),e===void 0&&(e=new A),this.from=t.clone(),this.to=e.clone(),this.direction=new A,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Pe.ANY,this.result=new Eo,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Pe.ANY,this.result=e.result||new Eo,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Xc),xr.length=0,t.broadphase.aabbQuery(t,Xc,xr),this.intersectBodies(xr),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=mg,s=gg;for(let o=0,a=t.shapes.length;o<a;o++){const c=t.shapes[o];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(c,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(Pg(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,a=this.to,c=this.direction,l=new A(0,0,1);e.vmult(l,l);const h=new A;o.vsub(n,h);const u=h.dot(l);a.vsub(n,h);const d=h.dot(l);if(u*d>0||o.distanceTo(a)<u)return;const f=l.dot(c);if(Math.abs(f)<this.precision)return;const m=new A,x=new A,g=new A;o.vsub(n,m);const p=-l.dot(m)/f;c.scale(p,x),o.vadd(x,g),this.reportIntersection(l,g,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=xg;o.from.copy(this.from),o.to.copy(this.to),de.pointToLocalFrame(n,e,o.from,o.from),de.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=vg;let c,l,h,u;c=l=0,h=u=t.data.length-1;const d=new sn;o.getAABB(d),t.getIndexOfPosition(d.lowerBound.x,d.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(d.upperBound.x,d.upperBound.y,a,!0),h=Math.min(h,a[0]+1),u=Math.min(u,a[1]+1);for(let f=c;f<h;f++)for(let m=l;m<u;m++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,m,d),!!d.overlapsRay(o)){if(t.getConvexTrianglePillar(f,m,!1),de.pointToWorldFrame(n,e,t.pillarOffset,ao),this._intersectConvex(t.pillarConvex,e,ao,i,s,qc),this.result.shouldStop)return;t.getConvexTrianglePillar(f,m,!0),de.pointToWorldFrame(n,e,t.pillarOffset,ao),this._intersectConvex(t.pillarConvex,e,ao,i,s,qc)}}}_intersectSphere(t,e,n,i,s){const o=this.from,a=this.to,c=t.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),u=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,d=h**2-4*l*u,f=wg,m=_g;if(!(d<0))if(d===0)o.lerp(a,d,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1);else{const x=(-h-Math.sqrt(d))/(2*l),g=(-h+Math.sqrt(d))/(2*l);if(x>=0&&x<=1&&(o.lerp(a,x,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1)),this.result.shouldStop)return;g>=0&&g<=1&&(o.lerp(a,g,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const a=yg,c=Yc,l=o&&o.faceList||null,h=t.faces,u=t.vertices,d=t.faceNormals,f=this.direction,m=this.from,x=this.to,g=m.distanceTo(x),p=l?l.length:h.length,v=this.result;for(let _=0;!v.shouldStop&&_<p;_++){const w=l?l[_]:_,b=h[w],E=d[w],C=e,P=n;c.copy(u[b[0]]),C.vmult(c,c),c.vadd(P,c),c.vsub(m,c),C.vmult(E,a);const S=f.dot(a);if(Math.abs(S)<this.precision)continue;const M=a.dot(c)/S;if(!(M<0)){f.scale(M,Ke),Ke.vadd(m,Ke),fn.copy(u[b[0]]),C.vmult(fn,fn),P.vadd(fn,fn);for(let L=1;!v.shouldStop&&L<b.length-1;L++){wn.copy(u[b[L]]),_n.copy(u[b[L+1]]),C.vmult(wn,wn),C.vmult(_n,_n),P.vadd(wn,wn),P.vadd(_n,_n);const k=Ke.distanceTo(m);!(Pe.pointInTriangle(Ke,fn,wn,_n)||Pe.pointInTriangle(Ke,wn,fn,_n))||k>g||this.reportIntersection(a,Ke,s,i,w)}}}}_intersectTrimesh(t,e,n,i,s,o){const a=Mg,c=Cg,l=Rg,h=Yc,u=Sg,d=Eg,f=bg,m=Ag,x=Tg,g=t.indices;t.vertices;const p=this.from,v=this.to,_=this.direction;l.position.copy(n),l.quaternion.copy(e),de.vectorToLocalFrame(n,e,_,u),de.pointToLocalFrame(n,e,p,d),de.pointToLocalFrame(n,e,v,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,d.x*=t.scale.x,d.y*=t.scale.y,d.z*=t.scale.z,f.vsub(d,u),u.normalize();const w=d.distanceSquared(f);t.tree.rayQuery(this,l,c);for(let b=0,E=c.length;!this.result.shouldStop&&b!==E;b++){const C=c[b];t.getNormal(C,a),t.getVertex(g[C*3],fn),fn.vsub(d,h);const P=u.dot(a),S=a.dot(h)/P;if(S<0)continue;u.scale(S,Ke),Ke.vadd(d,Ke),t.getVertex(g[C*3+1],wn),t.getVertex(g[C*3+2],_n);const M=Ke.distanceSquared(d);!(Pe.pointInTriangle(Ke,wn,fn,_n)||Pe.pointInTriangle(Ke,fn,wn,_n))||M>w||(de.vectorToWorldFrame(e,a,x),de.pointToWorldFrame(n,e,Ke,m),this.reportIntersection(x,m,s,i,C))}c.length=0}reportIntersection(t,e,n,i,s){const o=this.from,a=this.to,c=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Pe.ALL:this.hasHit=!0,l.set(o,a,t,e,n,i,c),l.hasHit=!0,this.callback(l);break;case Pe.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c));break;case Pe.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,_i),n.vsub(e,ws),t.vsub(e,vr);const s=_i.dot(_i),o=_i.dot(ws),a=_i.dot(vr),c=ws.dot(ws),l=ws.dot(vr);let h,u;return(h=c*a-o*l)>=0&&(u=s*l-o*a)>=0&&h+u<s*c-o*o}}Pe.CLOSEST=Na.CLOSEST;Pe.ANY=Na.ANY;Pe.ALL=Na.ALL;const Xc=new sn,xr=[],ws=new A,vr=new A,mg=new A,gg=new Le,Ke=new A,fn=new A,wn=new A,_n=new A;new A;new Eo;const qc={faceList:[0]},ao=new A,xg=new Pe,vg=[],wg=new A,_g=new A,yg=new A;new A;new A;const Yc=new A,Mg=new A,Sg=new A,Eg=new A,bg=new A,Tg=new A,Ag=new A;new sn;const Cg=[],Rg=new de,_i=new A,co=new A;function Pg(r,t,e){e.vsub(r,_i);const n=_i.dot(t);return t.scale(n,co),co.vadd(r,co),e.distanceTo(co)}class Lg{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Zc{constructor(){this.spatial=new A,this.rotational=new A}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Fs{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Fs.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Zc,this.jacobianElementB=new Zc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,c=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,h=i.invMassSolve;return s.scale(l,jc),a.scale(h,Kc),n.invInertiaWorldSolve.vmult(o,$c),i.invInertiaWorldSolve.vmult(c,Jc),t.multiplyVectors(jc,$c)+e.multiplyVectors(Kc,Jc)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve;let l=s+o;return a.vmult(t.rotational,lo),l+=lo.dot(t.rotational),c.vmult(e.rotational,lo),l+=lo.dot(e.rotational),l}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=Ig;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Fs.idCounter=0;const jc=new A,Kc=new A,$c=new A,Jc=new A,lo=new A,Ig=new A;class Dg extends Fs{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new A,this.rj=new A,this.ni=new A}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,c=Ng,l=Ug,h=i.velocity,u=i.angularVelocity;i.force,i.torque;const d=s.velocity,f=s.angularVelocity;s.force,s.torque;const m=Fg,x=this.jacobianElementA,g=this.jacobianElementB,p=this.ni;o.cross(p,c),a.cross(p,l),p.negate(x.spatial),c.negate(x.rotational),g.spatial.copy(p),g.rotational.copy(l),m.copy(s.position),m.vadd(a,m),m.vsub(i.position,m),m.vsub(o,m);const v=p.dot(m),_=this.restitution+1,w=_*d.dot(p)-_*h.dot(p)+f.dot(l)-u.dot(c),b=this.computeGiMf();return-v*e-w*n-t*b}getImpactVelocityAlongNormal(){const t=Og,e=Bg,n=zg,i=kg,s=Vg;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const Ng=new A,Ug=new A,Fg=new A,Og=new A,Bg=new A,zg=new A,kg=new A,Vg=new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;class Qc extends Fs{constructor(t,e,n){super(t,e,-n,n),this.ri=new A,this.rj=new A,this.t=new A}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=Gg,o=Hg,a=this.t;n.cross(a,s),i.cross(a,o);const c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),s.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);const h=this.computeGW(),u=this.computeGiMf();return-h*e-t*u}}const Gg=new A,Hg=new A;class Po{constructor(t,e,n){n=Lg.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Po.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Po.idCounter=0;class Lo{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Lo.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Lo.idCounter=0;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new Pe;new A;new A;new A;new A(1,0,0),new A(0,1,0),new A(0,0,1);new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;class Wg extends Lt{constructor(){super({type:Lt.types.PLANE}),this.worldNormal=new A,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new A),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){Dn.set(0,0,1),e.vmult(Dn,Dn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),Dn.x===1?i.x=t.x:Dn.x===-1&&(n.x=t.x),Dn.y===1?i.y=t.y:Dn.y===-1&&(n.y=t.y),Dn.z===1?i.z=t.z:Dn.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Dn=new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new sn;new A;new sn;new A;new A;new A;new A;new A;new A;new A;new sn;new A;new de;new sn;class Xg{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class qg extends Xg{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=e.bodies,l=c.length,h=t;let u,d,f,m,x,g;if(a!==0)for(let w=0;w!==l;w++)c[w].updateSolveMassProperties();const p=Zg,v=jg,_=Yg;p.length=a,v.length=a,_.length=a;for(let w=0;w!==a;w++){const b=o[w];_[w]=0,v[w]=b.computeB(h),p[w]=1/b.computeC()}if(a!==0){for(let E=0;E!==l;E++){const C=c[E],P=C.vlambda,S=C.wlambda;P.set(0,0,0),S.set(0,0,0)}for(n=0;n!==i;n++){m=0;for(let E=0;E!==a;E++){const C=o[E];u=v[E],d=p[E],g=_[E],x=C.computeGWlambda(),f=d*(u-x-C.eps*g),g+f<C.minForce?f=C.minForce-g:g+f>C.maxForce&&(f=C.maxForce-g),_[E]+=f,m+=f>0?f:-f,C.addToWlambda(f)}if(m*m<s)break}for(let E=0;E!==l;E++){const C=c[E],P=C.velocity,S=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),P.vadd(C.vlambda,P),C.wlambda.vmul(C.angularFactor,C.wlambda),S.vadd(C.wlambda,S)}let w=o.length;const b=1/h;for(;w--;)o[w].multiplier=_[w]*b}return n}}const Yg=[],Zg=[],jg=[];class Kg{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class $g extends Kg{constructor(){super(...arguments),this.type=A}constructObject(){return new A}}const we={sphereSphere:Lt.types.SPHERE,spherePlane:Lt.types.SPHERE|Lt.types.PLANE,boxBox:Lt.types.BOX|Lt.types.BOX,sphereBox:Lt.types.SPHERE|Lt.types.BOX,planeBox:Lt.types.PLANE|Lt.types.BOX,convexConvex:Lt.types.CONVEXPOLYHEDRON,sphereConvex:Lt.types.SPHERE|Lt.types.CONVEXPOLYHEDRON,planeConvex:Lt.types.PLANE|Lt.types.CONVEXPOLYHEDRON,boxConvex:Lt.types.BOX|Lt.types.CONVEXPOLYHEDRON,sphereHeightfield:Lt.types.SPHERE|Lt.types.HEIGHTFIELD,boxHeightfield:Lt.types.BOX|Lt.types.HEIGHTFIELD,convexHeightfield:Lt.types.CONVEXPOLYHEDRON|Lt.types.HEIGHTFIELD,sphereParticle:Lt.types.PARTICLE|Lt.types.SPHERE,planeParticle:Lt.types.PLANE|Lt.types.PARTICLE,boxParticle:Lt.types.BOX|Lt.types.PARTICLE,convexParticle:Lt.types.PARTICLE|Lt.types.CONVEXPOLYHEDRON,cylinderCylinder:Lt.types.CYLINDER,sphereCylinder:Lt.types.SPHERE|Lt.types.CYLINDER,planeCylinder:Lt.types.PLANE|Lt.types.CYLINDER,boxCylinder:Lt.types.BOX|Lt.types.CYLINDER,convexCylinder:Lt.types.CONVEXPOLYHEDRON|Lt.types.CYLINDER,heightfieldCylinder:Lt.types.HEIGHTFIELD|Lt.types.CYLINDER,particleCylinder:Lt.types.PARTICLE|Lt.types.CYLINDER,sphereTrimesh:Lt.types.SPHERE|Lt.types.TRIMESH,planeTrimesh:Lt.types.PLANE|Lt.types.TRIMESH};class Jg{get[we.sphereSphere](){return this.sphereSphere}get[we.spherePlane](){return this.spherePlane}get[we.boxBox](){return this.boxBox}get[we.sphereBox](){return this.sphereBox}get[we.planeBox](){return this.planeBox}get[we.convexConvex](){return this.convexConvex}get[we.sphereConvex](){return this.sphereConvex}get[we.planeConvex](){return this.planeConvex}get[we.boxConvex](){return this.boxConvex}get[we.sphereHeightfield](){return this.sphereHeightfield}get[we.boxHeightfield](){return this.boxHeightfield}get[we.convexHeightfield](){return this.convexHeightfield}get[we.sphereParticle](){return this.sphereParticle}get[we.planeParticle](){return this.planeParticle}get[we.boxParticle](){return this.boxParticle}get[we.convexParticle](){return this.convexParticle}get[we.cylinderCylinder](){return this.convexConvex}get[we.sphereCylinder](){return this.sphereConvex}get[we.planeCylinder](){return this.planeConvex}get[we.boxCylinder](){return this.boxConvex}get[we.convexCylinder](){return this.convexConvex}get[we.heightfieldCylinder](){return this.heightfieldCylinder}get[we.particleCylinder](){return this.particleCylinder}get[we.sphereTrimesh](){return this.sphereTrimesh}get[we.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new $g,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new Dg(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=n.material||t.material,h=i.material||e.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(a.restitution=l.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,c=this.currentContactMaterial;let l=c.friction;const h=s.material||n.material,u=o.material||i.material;if(h&&u&&h.friction>=0&&u.friction>=0&&(l=h.friction*u.friction),l>0){const d=l*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const m=this.frictionEquationPool,x=m.length?m.pop():new Qc(n,i,d*f),g=m.length?m.pop():new Qc(n,i,d*f);return x.bi=g.bi=n,x.bj=g.bj=i,x.minForce=g.minForce=-d*f,x.maxForce=g.maxForce=d*f,x.ri.copy(t.ri),x.rj.copy(t.rj),g.ri.copy(t.ri),g.rj.copy(t.rj),t.ni.tangents(x.t,g.t),x.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),g.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),x.enabled=g.enabled=t.enabled,e.push(x,g),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];ui.setZero(),qi.setZero(),Yi.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(ui.vadd(e.ni,ui),qi.vadd(e.ri,qi),Yi.vadd(e.rj,Yi)):(ui.vsub(e.ni,ui),qi.vadd(e.rj,qi),Yi.vadd(e.ri,Yi));const o=1/t;qi.scale(o,n.ri),Yi.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),ui.normalize(),ui.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const c=ex,l=nx,h=Qg,u=tx;for(let d=0,f=t.length;d!==f;d++){const m=t[d],x=e[d];let g=null;m.material&&x.material&&(g=n.getContactMaterial(m.material,x.material)||null);const p=m.type&It.KINEMATIC&&x.type&It.STATIC||m.type&It.STATIC&&x.type&It.KINEMATIC||m.type&It.KINEMATIC&&x.type&It.KINEMATIC;for(let v=0;v<m.shapes.length;v++){m.quaternion.mult(m.shapeOrientations[v],c),m.quaternion.vmult(m.shapeOffsets[v],h),h.vadd(m.position,h);const _=m.shapes[v];for(let w=0;w<x.shapes.length;w++){x.quaternion.mult(x.shapeOrientations[w],l),x.quaternion.vmult(x.shapeOffsets[w],u),u.vadd(x.position,u);const b=x.shapes[w];if(!(_.collisionFilterMask&b.collisionFilterGroup&&b.collisionFilterMask&_.collisionFilterGroup)||h.distanceTo(u)>_.boundingSphereRadius+b.boundingSphereRadius)continue;let E=null;_.material&&b.material&&(E=n.getContactMaterial(_.material,b.material)||null),this.currentContactMaterial=E||g||n.defaultContactMaterial;const C=_.type|b.type,P=this[C];if(P){let S=!1;_.type<b.type?S=P.call(this,_,b,h,u,c,l,m,x,_,b,p):S=P.call(this,b,_,u,h,l,c,x,m,_,b,p),S&&p&&(n.shapeOverlapKeeper.set(_.id,b.id),n.bodyOverlapKeeper.set(m.id,x.id))}}}}}sphereSphere(t,e,n,i,s,o,a,c,l,h,u){if(u)return n.distanceSquared(i)<(t.radius+e.radius)**2;const d=this.createContactEquation(a,c,t,e,l,h);i.vsub(n,d.ni),d.ni.normalize(),d.ri.copy(d.ni),d.rj.copy(d.ni),d.ri.scale(t.radius,d.ri),d.rj.scale(-e.radius,d.rj),d.ri.vadd(n,d.ri),d.ri.vsub(a.position,d.ri),d.rj.vadd(i,d.rj),d.rj.vsub(c.position,d.rj),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,c,l,h,u){const d=this.createContactEquation(a,c,t,e,l,h);if(d.ni.set(0,0,1),o.vmult(d.ni,d.ni),d.ni.negate(d.ni),d.ni.normalize(),d.ni.scale(t.radius,d.ri),n.vsub(i,ho),d.ni.scale(d.ni.dot(ho),tl),ho.vsub(tl,d.rj),-ho.dot(d.ni)<=t.radius){if(u)return!0;const f=d.ri,m=d.rj;f.vadd(n,f),f.vsub(a.position,f),m.vadd(i,m),m.vsub(c.position,m),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,c,l,h,u){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,u)}sphereBox(t,e,n,i,s,o,a,c,l,h,u){const d=this.v3pool,f=Cx;n.vsub(i,uo),e.getSideNormals(f,o);const m=t.radius;let x=!1;const g=Px,p=Lx,v=Ix;let _=null,w=0,b=0,E=0,C=null;for(let F=0,Y=f.length;F!==Y&&x===!1;F++){const G=bx;G.copy(f[F]);const J=G.length();G.normalize();const ht=uo.dot(G);if(ht<J+m&&ht>0){const gt=Tx,ct=Ax;gt.copy(f[(F+1)%3]),ct.copy(f[(F+2)%3]);const qt=gt.length(),K=ct.length();gt.normalize(),ct.normalize();const rt=uo.dot(gt),xt=uo.dot(ct);if(rt<qt&&rt>-qt&&xt<K&&xt>-K){const dt=Math.abs(ht-J-m);if((C===null||dt<C)&&(C=dt,b=rt,E=xt,_=J,g.copy(G),p.copy(gt),v.copy(ct),w++,u))return!0}}}if(w){x=!0;const F=this.createContactEquation(a,c,t,e,l,h);g.scale(-m,F.ri),F.ni.copy(g),F.ni.negate(F.ni),g.scale(_,g),p.scale(b,p),g.vadd(p,g),v.scale(E,v),g.vadd(v,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.vadd(i,F.rj),F.rj.vsub(c.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}let P=d.get();const S=Rx;for(let F=0;F!==2&&!x;F++)for(let Y=0;Y!==2&&!x;Y++)for(let G=0;G!==2&&!x;G++)if(P.set(0,0,0),F?P.vadd(f[0],P):P.vsub(f[0],P),Y?P.vadd(f[1],P):P.vsub(f[1],P),G?P.vadd(f[2],P):P.vsub(f[2],P),i.vadd(P,S),S.vsub(n,S),S.lengthSquared()<m*m){if(u)return!0;x=!0;const J=this.createContactEquation(a,c,t,e,l,h);J.ri.copy(S),J.ri.normalize(),J.ni.copy(J.ri),J.ri.scale(m,J.ri),J.rj.copy(P),J.ri.vadd(n,J.ri),J.ri.vsub(a.position,J.ri),J.rj.vadd(i,J.rj),J.rj.vsub(c.position,J.rj),this.result.push(J),this.createFrictionEquationsFromContact(J,this.frictionResult)}d.release(P),P=null;const M=d.get(),L=d.get(),k=d.get(),N=d.get(),B=d.get(),z=f.length;for(let F=0;F!==z&&!x;F++)for(let Y=0;Y!==z&&!x;Y++)if(F%3!==Y%3){f[Y].cross(f[F],M),M.normalize(),f[F].vadd(f[Y],L),k.copy(n),k.vsub(L,k),k.vsub(i,k);const G=k.dot(M);M.scale(G,N);let J=0;for(;J===F%3||J===Y%3;)J++;B.copy(n),B.vsub(N,B),B.vsub(L,B),B.vsub(i,B);const ht=Math.abs(G),gt=B.length();if(ht<f[J].length()&&gt<m){if(u)return!0;x=!0;const ct=this.createContactEquation(a,c,t,e,l,h);L.vadd(N,ct.rj),ct.rj.copy(ct.rj),B.negate(ct.ni),ct.ni.normalize(),ct.ri.copy(ct.rj),ct.ri.vadd(i,ct.ri),ct.ri.vsub(n,ct.ri),ct.ri.normalize(),ct.ri.scale(m,ct.ri),ct.ri.vadd(n,ct.ri),ct.ri.vsub(a.position,ct.ri),ct.rj.vadd(i,ct.rj),ct.rj.vsub(c.position,ct.rj),this.result.push(ct),this.createFrictionEquationsFromContact(ct,this.frictionResult)}}d.release(M,L,k,N,B)}planeBox(t,e,n,i,s,o,a,c,l,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,u)}convexConvex(t,e,n,i,s,o,a,c,l,h,u,d,f){const m=Yx;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,m,d,f)){const x=[],g=Zx;t.clipAgainstHull(n,s,e,i,o,m,-100,100,x);let p=0;for(let v=0;v!==x.length;v++){if(u)return!0;const _=this.createContactEquation(a,c,t,e,l,h),w=_.ri,b=_.rj;m.negate(_.ni),x[v].normal.negate(g),g.scale(x[v].depth,g),x[v].point.vadd(g,w),b.copy(x[v].point),w.vsub(n,w),b.vsub(i,b),w.vadd(n,w),w.vsub(a.position,w),b.vadd(i,b),b.vsub(c.position,b),this.result.push(_),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,i,s,o,a,c,l,h,u){const d=this.v3pool;n.vsub(i,Dx);const f=e.faceNormals,m=e.faces,x=e.vertices,g=t.radius;let p=!1;for(let v=0;v!==x.length;v++){const _=x[v],w=Ox;o.vmult(_,w),i.vadd(w,w);const b=Fx;if(w.vsub(n,b),b.lengthSquared()<g*g){if(u)return!0;p=!0;const E=this.createContactEquation(a,c,t,e,l,h);E.ri.copy(b),E.ri.normalize(),E.ni.copy(E.ri),E.ri.scale(g,E.ri),w.vsub(i,E.rj),E.ri.vadd(n,E.ri),E.ri.vsub(a.position,E.ri),E.rj.vadd(i,E.rj),E.rj.vsub(c.position,E.rj),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult);return}}for(let v=0,_=m.length;v!==_&&p===!1;v++){const w=f[v],b=m[v],E=Bx;o.vmult(w,E);const C=zx;o.vmult(x[b[0]],C),C.vadd(i,C);const P=kx;E.scale(-g,P),n.vadd(P,P);const S=Vx;P.vsub(C,S);const M=S.dot(E),L=Gx;if(n.vsub(C,L),M<0&&L.dot(E)>0){const k=[];for(let N=0,B=b.length;N!==B;N++){const z=d.get();o.vmult(x[b[N]],z),i.vadd(z,z),k.push(z)}if(Ex(k,E,n)){if(u)return!0;p=!0;const N=this.createContactEquation(a,c,t,e,l,h);E.scale(-g,N.ri),E.negate(N.ni);const B=d.get();E.scale(-M,B);const z=d.get();E.scale(-g,z),n.vsub(i,N.rj),N.rj.vadd(z,N.rj),N.rj.vadd(B,N.rj),N.rj.vadd(i,N.rj),N.rj.vsub(c.position,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),d.release(B),d.release(z),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(let F=0,Y=k.length;F!==Y;F++)d.release(k[F]);return}else for(let N=0;N!==b.length;N++){const B=d.get(),z=d.get();o.vmult(x[b[(N+1)%b.length]],B),o.vmult(x[b[(N+2)%b.length]],z),i.vadd(B,B),i.vadd(z,z);const F=Nx;z.vsub(B,F);const Y=Ux;F.unit(Y);const G=d.get(),J=d.get();n.vsub(B,J);const ht=J.dot(Y);Y.scale(ht,G),G.vadd(B,G);const gt=d.get();if(G.vsub(n,gt),ht>0&&ht*ht<F.lengthSquared()&&gt.lengthSquared()<g*g){if(u)return!0;const ct=this.createContactEquation(a,c,t,e,l,h);G.vsub(i,ct.rj),G.vsub(n,ct.ni),ct.ni.normalize(),ct.ni.scale(g,ct.ri),ct.rj.vadd(i,ct.rj),ct.rj.vsub(c.position,ct.rj),ct.ri.vadd(n,ct.ri),ct.ri.vsub(a.position,ct.ri),this.result.push(ct),this.createFrictionEquationsFromContact(ct,this.frictionResult);for(let qt=0,K=k.length;qt!==K;qt++)d.release(k[qt]);d.release(B),d.release(z),d.release(G),d.release(gt),d.release(J);return}d.release(B),d.release(z),d.release(G),d.release(gt),d.release(J)}for(let N=0,B=k.length;N!==B;N++)d.release(k[N])}}}planeConvex(t,e,n,i,s,o,a,c,l,h,u){const d=Hx,f=Wx;f.set(0,0,1),s.vmult(f,f);let m=0;const x=Xx;for(let g=0;g!==e.vertices.length;g++)if(d.copy(e.vertices[g]),o.vmult(d,d),i.vadd(d,d),d.vsub(n,x),f.dot(x)<=0){if(u)return!0;const v=this.createContactEquation(a,c,t,e,l,h),_=qx;f.scale(f.dot(x),_),d.vsub(_,_),_.vsub(n,v.ri),v.ni.copy(f),d.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(c.position,v.rj),this.result.push(v),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(t,e,n,i,s,o,a,c,l,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,u)}sphereHeightfield(t,e,n,i,s,o,a,c,l,h,u){const d=e.data,f=t.radius,m=e.elementSize,x=rv,g=ov;de.pointToLocalFrame(i,o,n,g);let p=Math.floor((g.x-f)/m)-1,v=Math.ceil((g.x+f)/m)+1,_=Math.floor((g.y-f)/m)-1,w=Math.ceil((g.y+f)/m)+1;if(v<0||w<0||p>d.length||_>d[0].length)return;p<0&&(p=0),v<0&&(v=0),_<0&&(_=0),w<0&&(w=0),p>=d.length&&(p=d.length-1),v>=d.length&&(v=d.length-1),w>=d[0].length&&(w=d[0].length-1),_>=d[0].length&&(_=d[0].length-1);const b=[];e.getRectMinMax(p,_,v,w,b);const E=b[0],C=b[1];if(g.z-f>C||g.z+f<E)return;const P=this.result;for(let S=p;S<v;S++)for(let M=_;M<w;M++){const L=P.length;let k=!1;if(e.getConvexTrianglePillar(S,M,!1),de.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(k=this.sphereConvex(t,e.pillarConvex,n,x,s,o,a,c,t,e,u)),u&&k||(e.getConvexTrianglePillar(S,M,!0),de.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(k=this.sphereConvex(t,e.pillarConvex,n,x,s,o,a,c,t,e,u)),u&&k))return!0;if(P.length-L>2)return}}boxHeightfield(t,e,n,i,s,o,a,c,l,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,u)}convexHeightfield(t,e,n,i,s,o,a,c,l,h,u){const d=e.data,f=e.elementSize,m=t.boundingSphereRadius,x=iv,g=sv,p=nv;de.pointToLocalFrame(i,o,n,p);let v=Math.floor((p.x-m)/f)-1,_=Math.ceil((p.x+m)/f)+1,w=Math.floor((p.y-m)/f)-1,b=Math.ceil((p.y+m)/f)+1;if(_<0||b<0||v>d.length||w>d[0].length)return;v<0&&(v=0),_<0&&(_=0),w<0&&(w=0),b<0&&(b=0),v>=d.length&&(v=d.length-1),_>=d.length&&(_=d.length-1),b>=d[0].length&&(b=d[0].length-1),w>=d[0].length&&(w=d[0].length-1);const E=[];e.getRectMinMax(v,w,_,b,E);const C=E[0],P=E[1];if(!(p.z-m>P||p.z+m<C))for(let S=v;S<_;S++)for(let M=w;M<b;M++){let L=!1;if(e.getConvexTrianglePillar(S,M,!1),de.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,n,x,s,o,a,c,null,null,u,g,null)),u&&L||(e.getConvexTrianglePillar(S,M,!0),de.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,n,x,s,o,a,c,null,null,u,g,null)),u&&L))return!0}}sphereParticle(t,e,n,i,s,o,a,c,l,h,u){const d=Jx;if(d.set(0,0,1),i.vsub(n,d),d.lengthSquared()<=t.radius*t.radius){if(u)return!0;const m=this.createContactEquation(c,a,e,t,l,h);d.normalize(),m.rj.copy(d),m.rj.scale(t.radius,m.rj),m.ni.copy(d),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,c,l,h,u){const d=jx;d.set(0,0,1),a.quaternion.vmult(d,d);const f=Kx;if(i.vsub(a.position,f),d.dot(f)<=0){if(u)return!0;const x=this.createContactEquation(c,a,e,t,l,h);x.ni.copy(d),x.ni.negate(x.ni),x.ri.set(0,0,0);const g=$x;d.scale(d.dot(i),g),i.vsub(g,g),x.rj.copy(g),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,c,l,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,u)}convexParticle(t,e,n,i,s,o,a,c,l,h,u){let d=-1;const f=tv,m=ev;let x=null;const g=Qx;if(g.copy(i),g.vsub(n,g),s.conjugate(el),el.vmult(g,g),t.pointIsInside(g)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let p=0,v=t.faces.length;p!==v;p++){const _=[t.worldVertices[t.faces[p][0]]],w=t.worldFaceNormals[p];i.vsub(_[0],nl);const b=-w.dot(nl);if(x===null||Math.abs(b)<Math.abs(x)){if(u)return!0;x=b,d=p,f.copy(w)}}if(d!==-1){const p=this.createContactEquation(c,a,e,t,l,h);f.scale(x,m),m.vadd(i,m),m.vsub(n,m),p.rj.copy(m),f.negate(p.ni),p.ri.set(0,0,0);const v=p.ri,_=p.rj;v.vadd(i,v),v.vsub(c.position,v),_.vadd(n,_),_.vsub(a.position,_),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,c,l,h,u){return this.convexHeightfield(e,t,i,n,o,s,c,a,l,h,u)}particleCylinder(t,e,n,i,s,o,a,c,l,h,u){return this.convexParticle(e,t,i,n,o,s,c,a,l,h,u)}sphereTrimesh(t,e,n,i,s,o,a,c,l,h,u){const d=hx,f=dx,m=ux,x=fx,g=px,p=mx,v=wx,_=lx,w=ax,b=_x;de.pointToLocalFrame(i,o,n,g);const E=t.radius;v.lowerBound.set(g.x-E,g.y-E,g.z-E),v.upperBound.set(g.x+E,g.y+E,g.z+E),e.getTrianglesInAABB(v,b);const C=cx,P=t.radius*t.radius;for(let N=0;N<b.length;N++)for(let B=0;B<3;B++)if(e.getVertex(e.indices[b[N]*3+B],C),C.vsub(g,w),w.lengthSquared()<=P){if(_.copy(C),de.pointToWorldFrame(i,o,_,C),C.vsub(n,w),u)return!0;let z=this.createContactEquation(a,c,t,e,l,h);z.ni.copy(w),z.ni.normalize(),z.ri.copy(z.ni),z.ri.scale(t.radius,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(a.position,z.ri),z.rj.copy(C),z.rj.vsub(c.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}for(let N=0;N<b.length;N++)for(let B=0;B<3;B++){e.getVertex(e.indices[b[N]*3+B],d),e.getVertex(e.indices[b[N]*3+(B+1)%3],f),f.vsub(d,m),g.vsub(f,p);const z=p.dot(m);g.vsub(d,p);let F=p.dot(m);if(F>0&&z<0&&(g.vsub(d,p),x.copy(m),x.normalize(),F=p.dot(x),x.scale(F,p),p.vadd(d,p),p.distanceTo(g)<t.radius)){if(u)return!0;const G=this.createContactEquation(a,c,t,e,l,h);p.vsub(g,G.ni),G.ni.normalize(),G.ni.scale(t.radius,G.ri),G.ri.vadd(n,G.ri),G.ri.vsub(a.position,G.ri),de.pointToWorldFrame(i,o,p,p),p.vsub(c.position,G.rj),de.vectorToWorldFrame(o,G.ni,G.ni),de.vectorToWorldFrame(o,G.ri,G.ri),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}}const S=gx,M=xx,L=vx,k=rx;for(let N=0,B=b.length;N!==B;N++){e.getTriangleVertices(b[N],S,M,L),e.getNormal(b[N],k),g.vsub(S,p);let z=p.dot(k);if(k.scale(z,p),g.vsub(p,p),z=p.distanceTo(g),Pe.pointInTriangle(p,S,M,L)&&z<t.radius){if(u)return!0;let F=this.createContactEquation(a,c,t,e,l,h);p.vsub(g,F.ni),F.ni.normalize(),F.ni.scale(t.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),de.pointToWorldFrame(i,o,p,p),p.vsub(c.position,F.rj),de.vectorToWorldFrame(o,F.ni,F.ni),de.vectorToWorldFrame(o,F.ri,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}b.length=0}planeTrimesh(t,e,n,i,s,o,a,c,l,h,u){const d=new A,f=ix;f.set(0,0,1),s.vmult(f,f);for(let m=0;m<e.vertices.length/3;m++){e.getVertex(m,d);const x=new A;x.copy(d),de.pointToWorldFrame(i,o,x,d);const g=sx;if(d.vsub(n,g),f.dot(g)<=0){if(u)return!0;const v=this.createContactEquation(a,c,t,e,l,h);v.ni.copy(f);const _=ox;f.scale(g.dot(f),_),d.vsub(_,_),v.ri.copy(_),v.ri.vsub(a.position,v.ri),v.rj.copy(d),v.rj.vsub(c.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const ui=new A,qi=new A,Yi=new A,Qg=new A,tx=new A,ex=new Le,nx=new Le,ix=new A,sx=new A,ox=new A,rx=new A,ax=new A;new A;const cx=new A,lx=new A,hx=new A,dx=new A,ux=new A,fx=new A,px=new A,mx=new A,gx=new A,xx=new A,vx=new A,wx=new sn,_x=[],ho=new A,tl=new A,yx=new A,Mx=new A,Sx=new A;function Ex(r,t,e){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=yx;r[(s+1)%i].vsub(o,a);const c=Mx;a.cross(t,c);const l=Sx;e.vsub(o,l);const h=c.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const uo=new A,bx=new A,Tx=new A,Ax=new A,Cx=[new A,new A,new A,new A,new A,new A],Rx=new A,Px=new A,Lx=new A,Ix=new A,Dx=new A,Nx=new A,Ux=new A,Fx=new A,Ox=new A,Bx=new A,zx=new A,kx=new A,Vx=new A,Gx=new A;new A;new A;const Hx=new A,Wx=new A,Xx=new A,qx=new A,Yx=new A,Zx=new A,jx=new A,Kx=new A,$x=new A,Jx=new A,el=new Le,Qx=new A;new A;const tv=new A,nl=new A,ev=new A,nv=new A,iv=new A,sv=[0],ov=new A,rv=new A;class il{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let c=0;c<s;c++){let l=!1;const h=n[c];for(;h>i[a];)a++;l=h===i[a],l||sl(t,h)}a=0;for(let c=0;c<o;c++){let l=!1;const h=i[c];for(;h>n[a];)a++;l=n[a]===h,l||sl(e,h)}}}function sl(r,t){r.push((t&4294901760)>>16,t&65535)}const wr=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`;class av{constructor(){this.data={keys:[]}}get(t,e){const n=wr(t,e);return this.data[n]}set(t,e,n){const i=wr(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=wr(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class cv extends ql{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new A,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new A,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Yl,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new qg,this.constraints=[],this.narrowphase=new Jg(this),this.collisionMatrix=new Hc,this.collisionMatrixPrevious=new Hc,this.bodyOverlapKeeper=new il,this.shapeOverlapKeeper=new il,this.contactmaterials=[],this.contactMaterialTable=new av,this.defaultMaterial=new Lo("default"),this.defaultContactMaterial=new Po(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Eo?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=Pe.ALL,n.from=t,n.to=e,n.callback=i,_r.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=Pe.ANY,n.from=t,n.to=e,n.result=i,_r.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=Pe.CLOSEST,n.from=t,n.to=e,n.result=i,_r.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof It&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Ie.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=Ie.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(Ie.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=fv,i=pv,s=this.bodies.length,o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,h=this.profile,u=It.DYNAMIC;let d=-1/0;const f=this.constraints,m=uv;c.length();const x=c.x,g=c.y,p=c.z;let v=0;for(l&&(d=Ie.now()),v=0;v!==s;v++){const N=o[v];if(N.type===u){const B=N.force,z=N.mass;B.x+=z*x,B.y+=z*g,B.z+=z*p}}for(let N=0,B=this.subsystems.length;N!==B;N++)this.subsystems[N].update();l&&(d=Ie.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(h.broadphase=Ie.now()-d);let _=f.length;for(v=0;v!==_;v++){const N=f[v];if(!N.collideConnected)for(let B=n.length-1;B>=0;B-=1)(N.bodyA===n[B]&&N.bodyB===i[B]||N.bodyB===n[B]&&N.bodyA===i[B])&&(n.splice(B,1),i.splice(B,1))}this.collisionMatrixTick(),l&&(d=Ie.now());const w=dv,b=e.length;for(v=0;v!==b;v++)w.push(e[v]);e.length=0;const E=this.frictionEquations.length;for(v=0;v!==E;v++)m.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,w,this.frictionEquations,m),l&&(h.narrowphase=Ie.now()-d),l&&(d=Ie.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const C=e.length;for(let N=0;N!==C;N++){const B=e[N],z=B.bi,F=B.bj,Y=B.si,G=B.sj;let J;if(z.material&&F.material?J=this.getContactMaterial(z.material,F.material)||this.defaultContactMaterial:J=this.defaultContactMaterial,J.friction,z.material&&F.material&&(z.material.friction>=0&&F.material.friction>=0&&z.material.friction*F.material.friction,z.material.restitution>=0&&F.material.restitution>=0&&(B.restitution=z.material.restitution*F.material.restitution)),a.addEquation(B),z.allowSleep&&z.type===It.DYNAMIC&&z.sleepState===It.SLEEPING&&F.sleepState===It.AWAKE&&F.type!==It.STATIC){const ht=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),gt=F.sleepSpeedLimit**2;ht>=gt*2&&(z.wakeUpAfterNarrowphase=!0)}if(F.allowSleep&&F.type===It.DYNAMIC&&F.sleepState===It.SLEEPING&&z.sleepState===It.AWAKE&&z.type!==It.STATIC){const ht=z.velocity.lengthSquared()+z.angularVelocity.lengthSquared(),gt=z.sleepSpeedLimit**2;ht>=gt*2&&(F.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(z,F,!0),this.collisionMatrixPrevious.get(z,F)||(_s.body=F,_s.contact=B,z.dispatchEvent(_s),_s.body=z,F.dispatchEvent(_s)),this.bodyOverlapKeeper.set(z.id,F.id),this.shapeOverlapKeeper.set(Y.id,G.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=Ie.now()-d,d=Ie.now()),v=0;v!==s;v++){const N=o[v];N.wakeUpAfterNarrowphase&&(N.wakeUp(),N.wakeUpAfterNarrowphase=!1)}for(_=f.length,v=0;v!==_;v++){const N=f[v];N.update();for(let B=0,z=N.equations.length;B!==z;B++){const F=N.equations[B];a.addEquation(F)}}a.solve(t,this),l&&(h.solve=Ie.now()-d),a.removeAllEquations();const P=Math.pow;for(v=0;v!==s;v++){const N=o[v];if(N.type&u){const B=P(1-N.linearDamping,t),z=N.velocity;z.scale(B,z);const F=N.angularVelocity;if(F){const Y=P(1-N.angularDamping,t);F.scale(Y,F)}}}this.dispatchEvent(hv),l&&(d=Ie.now());const M=this.stepnumber%(this.quatNormalizeSkip+1)===0,L=this.quatNormalizeFast;for(v=0;v!==s;v++)o[v].integrate(t,M,L);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=Ie.now()-d),this.stepnumber+=1,this.dispatchEvent(lv);let k=!0;if(this.allowSleep)for(k=!1,v=0;v!==s;v++){const N=o[v];N.sleepTick(this.time),N.sleepState!==It.SLEEPING&&(k=!0)}this.hasActiveBodies=k}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Nn,Un),t){for(let s=0,o=Nn.length;s<o;s+=2)ys.bodyA=this.getBodyById(Nn[s]),ys.bodyB=this.getBodyById(Nn[s+1]),this.dispatchEvent(ys);ys.bodyA=ys.bodyB=null}if(e){for(let s=0,o=Un.length;s<o;s+=2)Ms.bodyA=this.getBodyById(Un[s]),Ms.bodyB=this.getBodyById(Un[s+1]),this.dispatchEvent(Ms);Ms.bodyA=Ms.bodyB=null}Nn.length=Un.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Nn,Un),n){for(let s=0,o=Nn.length;s<o;s+=2){const a=this.getShapeById(Nn[s]),c=this.getShapeById(Nn[s+1]);Fn.shapeA=a,Fn.shapeB=c,a&&(Fn.bodyA=a.body),c&&(Fn.bodyB=c.body),this.dispatchEvent(Fn)}Fn.bodyA=Fn.bodyB=Fn.shapeA=Fn.shapeB=null}if(i){for(let s=0,o=Un.length;s<o;s+=2){const a=this.getShapeById(Un[s]),c=this.getShapeById(Un[s+1]);On.shapeA=a,On.shapeB=c,a&&(On.bodyA=a.body),c&&(On.bodyB=c.body),this.dispatchEvent(On)}On.bodyA=On.bodyB=On.shapeA=On.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new sn;const _r=new Pe,Ie=globalThis.performance||{};if(!Ie.now){let r=Date.now();Ie.timing&&Ie.timing.navigationStart&&(r=Ie.timing.navigationStart),Ie.now=()=>Date.now()-r}new A;const lv={type:"postStep"},hv={type:"preStep"},_s={type:It.COLLIDE_EVENT_NAME,body:null,contact:null},dv=[],uv=[],fv=[],pv=[],Nn=[],Un=[],ys={type:"beginContact",bodyA:null,bodyB:null},Ms={type:"endContact",bodyA:null,bodyB:null},Fn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},On={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class mv{constructor(){this.world=new cv,this.world.gravity.set(0,-20,0),this.world.broadphase=new Yl,this.world.solver.iterations=10,this.world.defaultContactMaterial.friction=.35,this.world.defaultContactMaterial.restitution=.05,this.obstacles=[],this.ramps=[],this.flyovers=[],this.flyoverRamps=[];const t=new Wg,e=new It({mass:0,shape:t});e.quaternion.setFromAxisAngle(new A(1,0,0),-Math.PI/2),this.world.addBody(e),this.groundBody=e}step(t){this.world.step(1/60,t,3)}addStaticBox(t,e,n,i,s,o,a=!1){const c=new Ro(new A(i,s,o)),l=new It({mass:0,position:new A(t,e,n),shape:c});return this.world.addBody(l),this.obstacles.push({x:t,y:e,z:n,hx:i,hy:s,hz:o,isRamp:a}),l}addRampTrigger(t,e,n,i,s,o=0){this.ramps.push({x:t,z:e,width:n,length:i,height:s,rotY:o})}addFlyover(t,e,n,i,s,o,a="X"){const c=i/2,l=s/2,h=a==="X"?e-c:e-l,u=a==="X"?e+c:e+l,d=a==="X"?n-l:n-c,f=a==="X"?n+l:n+c;this.flyovers.push({id:t,x:e,z:n,length:i,width:s,height:o,axis:a,minX:h,maxX:u,minZ:d,maxZ:f})}addFlyoverRamp(t,e,n,i,s,o,a,c){this.flyoverRamps.push({id:t,axis:e,startCoord:n,endCoord:i,fixedCoord:s,width:o,startHeight:a,endHeight:c})}getFlyoverAt(t,e,n=0){for(const i of this.flyoverRamps)if(i.axis==="X"){if(Math.abs(e-i.fixedCoord)<=i.width/2+.5){const s=Math.min(i.startCoord,i.endCoord),o=Math.max(i.startCoord,i.endCoord);if(t>=s-1.5&&t<=o+1.5){const a=Math.max(0,Math.min(1,(t-i.startCoord)/(i.endCoord-i.startCoord))),c=i.startHeight+(i.endHeight-i.startHeight)*a;if(Math.abs(n-c)<7||n<=c+2)return{type:"ramp",ramp:i,currentSurfaceH:c}}}}else if(i.axis==="Z"&&Math.abs(t-i.fixedCoord)<=i.width/2+.5){const s=Math.min(i.startCoord,i.endCoord),o=Math.max(i.startCoord,i.endCoord);if(e>=s-1.5&&e<=o+1.5){const a=Math.max(0,Math.min(1,(e-i.startCoord)/(i.endCoord-i.startCoord))),c=i.startHeight+(i.endHeight-i.startHeight)*a;if(Math.abs(n-c)<7||n<=c+2)return{type:"ramp",ramp:i,currentSurfaceH:c}}}for(const i of this.flyovers)if(t>=i.minX-1&&t<=i.maxX+1&&e>=i.minZ-1&&e<=i.maxZ+1&&(n>=i.height-3.5||Math.abs(n-i.height)<6))return{type:"deck",deck:i,currentSurfaceH:i.height};return null}constrainToFlyover(t,e,n=0,i=1){let s=t,o=e,a=!1;if(n<1)return{x:s,z:o,constrained:!1};for(const c of this.flyoverRamps)if(c.axis==="X"){const l=Math.min(c.startCoord,c.endCoord),h=Math.max(c.startCoord,c.endCoord);if(t>=l-.5&&t<=h+.5){const u=Math.max(0,Math.min(1,(t-c.startCoord)/(c.endCoord-c.startCoord))),d=c.startHeight+(c.endHeight-c.startHeight)*u;if(Math.abs(n-d)<5){const f=c.width/2-i*.4,m=c.fixedCoord-f,x=c.fixedCoord+f;return o<m?(o=m,a=!0):o>x&&(o=x,a=!0),{x:s,z:o,constrained:a}}}}else if(c.axis==="Z"){const l=Math.min(c.startCoord,c.endCoord),h=Math.max(c.startCoord,c.endCoord);if(e>=l-.5&&e<=h+.5){const u=Math.max(0,Math.min(1,(e-c.startCoord)/(c.endCoord-c.startCoord))),d=c.startHeight+(c.endHeight-c.startHeight)*u;if(Math.abs(n-d)<5){const f=c.width/2-i*.4,m=c.fixedCoord-f,x=c.fixedCoord+f;return s<m?(s=m,a=!0):s>x&&(s=x,a=!0),{x:s,z:o,constrained:a}}}}for(const c of this.flyovers)if(Math.abs(n-c.height)<4||n>=c.height-1.5){if(c.axis==="X"){if(s>=c.minX-3&&s<=c.maxX+3){const l=c.width/2-i*.4,h=c.z-l,u=c.z+l;o<h?(o=h,a=!0):o>u&&(o=u,a=!0)}}else if(c.axis==="Z"&&o>=c.minZ-3&&o<=c.maxZ+3){const l=c.width/2-i*.4,h=c.x-l,u=c.x+l;s<h?(s=h,a=!0):s>u&&(s=u,a=!0)}}return{x:s,z:o,constrained:a}}getSurfaceHeight(t,e,n=0){let i=0;for(const s of this.flyoverRamps)if(s.axis==="X"){if(Math.abs(e-s.fixedCoord)<=s.width/2+.8){const o=Math.min(s.startCoord,s.endCoord),a=Math.max(s.startCoord,s.endCoord);if(t>=o-1.5&&t<=a+1.5){const c=Math.max(0,Math.min(1,(t-s.startCoord)/(s.endCoord-s.startCoord))),l=s.startHeight+(s.endHeight-s.startHeight)*c;(Math.abs(n-l)<8||n<=l+2.5)&&l>i&&(i=l)}}}else if(s.axis==="Z"&&Math.abs(t-s.fixedCoord)<=s.width/2+.8){const o=Math.min(s.startCoord,s.endCoord),a=Math.max(s.startCoord,s.endCoord);if(e>=o-1.5&&e<=a+1.5){const c=Math.max(0,Math.min(1,(e-s.startCoord)/(s.endCoord-s.startCoord))),l=s.startHeight+(s.endHeight-s.startHeight)*c;(Math.abs(n-l)<8||n<=l+2.5)&&l>i&&(i=l)}}for(const s of this.flyovers)t>=s.minX-1&&t<=s.maxX+1&&e>=s.minZ-1&&e<=s.maxZ+1&&(n>=s.height-3||Math.abs(n-s.height)<6.5)&&s.height>i&&(i=s.height);return i}removeBody(t){this.world.removeBody(t)}}class gv{constructor(){this.keys={},this.mouse={x:0,y:0,dx:0,dy:0,down:!1,rightDown:!1},window.addEventListener("keydown",n=>{this.keys[n.code]=!0}),window.addEventListener("keyup",n=>{this.keys[n.code]=!1}),window.addEventListener("mousedown",n=>{n.button===0&&(this.mouse.down=!0),n.button===2&&(this.mouse.rightDown=!0)}),window.addEventListener("mouseup",n=>{n.button===0&&(this.mouse.down=!1),n.button===2&&(this.mouse.rightDown=!1)}),window.addEventListener("mousemove",n=>{(this.mouse.down||this.mouse.rightDown)&&(this.mouse.dx=n.movementX||0,this.mouse.dy=n.movementY||0)});let t=0,e=0;window.addEventListener("touchstart",n=>{n.touches.length>0&&(t=n.touches[0].clientX,e=n.touches[0].clientY)},{passive:!0}),window.addEventListener("touchmove",n=>{n.touches.length>0&&(this.mouse.dx=(n.touches[0].clientX-t)*.5,this.mouse.dy=(n.touches[0].clientY-e)*.5,t=n.touches[0].clientX,e=n.touches[0].clientY)},{passive:!0}),window.addEventListener("contextmenu",n=>n.preventDefault())}isDown(t){return!!this.keys[t]}getForward(){let t=0;return(this.isDown("KeyW")||this.isDown("ArrowUp"))&&(t+=1),(this.isDown("KeyS")||this.isDown("ArrowDown"))&&(t-=1),t}getTurn(){let t=0;return(this.isDown("KeyD")||this.isDown("ArrowRight"))&&(t+=1),(this.isDown("KeyA")||this.isDown("ArrowLeft"))&&(t-=1),t}isSprinting(){return this.isDown("ShiftLeft")||this.isDown("ShiftRight")}isJumping(){return this.isDown("Space")}clearDelta(){this.mouse.dx=0,this.mouse.dy=0}}class xv{constructor(t,e){this.camera=t,this.domElement=e,this.viewMode="chase",this.yaw=0,this.pitch=.785,this.minPitch=.35,this.maxPitch=1.45,this.distance=12,this.targetDistance=12,this.eyeHeight=2,this.currentPosition=new U(0,10,92),this.currentLookAt=new U(0,1,80),this.isDragging=!1,this.lastMouseX=0,this.lastMouseY=0,this.keys={up:!1,down:!1,left:!1,right:!1},this.initInputListeners()}initInputListeners(){window.addEventListener("mousedown",t=>{t.target.tagName==="CANVAS"&&(this.isDragging=!0,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY)}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),window.addEventListener("mousemove",t=>{if(this.isDragging){const e=t.clientX-this.lastMouseX,n=t.clientY-this.lastMouseY;this.yaw-=e*.005,this.pitch=Math.max(this.minPitch,Math.min(this.maxPitch,this.pitch+n*.005)),this.lastMouseX=t.clientX,this.lastMouseY=t.clientY}}),window.addEventListener("contextmenu",t=>{t.target.tagName==="CANVAS"&&t.preventDefault()}),window.addEventListener("wheel",t=>{this.targetDistance=Math.max(3.5,Math.min(45,this.targetDistance+t.deltaY*.012))},{passive:!0}),window.addEventListener("keydown",t=>{t.code==="ArrowUp"||t.code==="KeyI"?this.keys.up=!0:t.code==="ArrowDown"||t.code==="KeyK"?this.keys.down=!0:t.code==="ArrowLeft"||t.code==="KeyJ"?this.keys.left=!0:t.code==="ArrowRight"||t.code==="KeyL"?this.keys.right=!0:t.code==="KeyV"&&this.toggleViewMode()}),window.addEventListener("keyup",t=>{t.code==="ArrowUp"||t.code==="KeyI"?this.keys.up=!1:t.code==="ArrowDown"||t.code==="KeyK"?this.keys.down=!1:t.code==="ArrowLeft"||t.code==="KeyJ"?this.keys.left=!1:(t.code==="ArrowRight"||t.code==="KeyL")&&(this.keys.right=!1)})}toggleViewMode(){this.viewMode==="chase"?(this.viewMode="topDown",this.pitch=1.38,this.targetDistance=28):this.viewMode==="topDown"?(this.viewMode="free",this.pitch=.785,this.targetDistance=12):(this.viewMode="chase",this.pitch=.785,this.targetDistance=12)}setMode(t){t==="vehicle"?(this.targetDistance=14.5,this.eyeHeight=2,this.viewMode==="chase"&&(this.pitch=.785)):t==="airplane"||t==="helicopter"?(this.targetDistance=34,this.eyeHeight=3,this.pitch=.75):(this.targetDistance=11,this.eyeHeight=1.8,this.viewMode==="chase"&&(this.pitch=.785))}update(t,e,n=0,i=0){if(!e||!Number.isFinite(e.x))return;if(this.viewMode==="chase"&&!this.isDragging&&!this.keys.left&&!this.keys.right){let E=n-Math.PI-this.yaw;for(;E<-Math.PI;)E+=Math.PI*2;for(;E>Math.PI;)E-=Math.PI*2;this.yaw+=E*Math.min(1,t*6.5)}const s=2;this.keys.up&&(this.pitch=Math.max(this.minPitch,this.pitch-s*t)),this.keys.down&&(this.pitch=Math.min(this.maxPitch,this.pitch+s*t)),this.keys.left&&(this.yaw+=s*t),this.keys.right&&(this.yaw-=s*t),this.distance+=(this.targetDistance-this.distance)*Math.min(1,t*6);const o=Number.isFinite(i)&&i>0?i:0,a=54,c=Math.min(o*.14,15),l=Number.isFinite(this.camera.fov)&&this.camera.fov>10?this.camera.fov:a;this.camera.fov=l+(a+c-l)*Math.min(1,t*4),this.camera.updateProjectionMatrix();const h=Math.max(this.minPitch,Math.min(this.maxPitch,this.pitch)),u=Math.cos(h),d=Math.sin(h),f=Math.sin(this.yaw)*u*this.distance,m=d*this.distance+this.eyeHeight,x=Math.cos(this.yaw)*u*this.distance,g=e.y+2.5,p=e.y+m,v=new U(e.x+f,Math.max(g,p),e.z+x);this.currentPosition.lerp(v,Math.min(1,t*12)),this.camera.position.copy(this.currentPosition);const _=e.y+Math.min(1.2,this.eyeHeight*.6),w=new U(e.x,_,e.z);this.currentLookAt.lerp(w,Math.min(1,t*14)),this.camera.lookAt(this.currentLookAt)}}class vv{constructor(){this.ctx=null,this.engineOsc=null,this.engineGain=null,this.isAudioStarted=!1,this.radioPlaying=!1;const t=()=>{this.isAudioStarted||(this.init(),this.isAudioStarted=!0),window.removeEventListener("click",t),window.removeEventListener("keydown",t)};window.addEventListener("click",t),window.addEventListener("keydown",t)}init(){try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t}catch(t){console.warn("AudioContext not supported",t)}}playFootstep(){if(!this.ctx)return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(80+Math.random()*40,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(30,this.ctx.currentTime+.08),e.gain.setValueAtTime(.12,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.08),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.08)}playJump(){if(!this.ctx)return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(200,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(450,this.ctx.currentTime+.2),e.gain.setValueAtTime(.2,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.2),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.2)}playHonk(){if(!this.ctx)return;const t=this.ctx.currentTime;[440,554].forEach(e=>{const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(e,t),i.gain.setValueAtTime(.18,t),i.gain.linearRampToValueAtTime(.18,t+.25),i.gain.exponentialRampToValueAtTime(.001,t+.35),n.connect(i),i.connect(this.ctx.destination),n.start(t),n.stop(t+.35)})}playDoor(){if(!this.ctx)return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(140,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(60,this.ctx.currentTime+.15),e.gain.setValueAtTime(.25,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.15),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.15)}startEngine(){if(!(!this.ctx||this.engineOsc))try{this.engineOsc=this.ctx.createOscillator(),this.engineGain=this.ctx.createGain(),this.engineOsc.type="sawtooth",this.engineOsc.frequency.setValueAtTime(45,this.ctx.currentTime),this.engineGain.gain.setValueAtTime(.05,this.ctx.currentTime);const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.setValueAtTime(280,this.ctx.currentTime),this.engineOsc.connect(t),t.connect(this.engineGain),this.engineGain.connect(this.ctx.destination),this.engineOsc.start()}catch(t){console.warn(t)}}updateEngine(t){if(!this.engineOsc||!this.ctx)return;const e=45+Math.min(t*140,180);this.engineOsc.frequency.setTargetAtTime(e,this.ctx.currentTime,.1),this.engineGain.gain.setTargetAtTime(.05+t*.08,this.ctx.currentTime,.1)}stopEngine(){if(this.engineOsc){try{this.engineOsc.stop(),this.engineOsc.disconnect()}catch{}this.engineOsc=null,this.engineGain=null}}}class wv{constructor(t){this.scene=t,this.particles=[],this.bloodMat=new Bt({color:14037041}),this.splatMat=new Bt({color:9109504,transparent:!0,opacity:.85,depthWrite:!1}),this.splatGeo=new Us(.35,10)}spawnHit(t,e=new U(0,1,0)){for(let s=0;s<22;s++){const o=.08+Math.random()*.12,a=new y(new nn(o,0),this.bloodMat);a.position.set(t.x+(Math.random()-.5)*.4,t.y+.8+(Math.random()-.5)*.5,t.z+(Math.random()-.5)*.4);const c=Math.random()*Math.PI*2,l=3.5+Math.random()*6.5,h=Math.cos(c)*l+e.x*4,u=2.5+Math.random()*5,d=Math.sin(c)*l+e.z*4;this.particles.push({mesh:a,vx:h,vy:u,vz:d,life:1,decay:.8+Math.random()*.6}),this.scene.add(a)}const n=new y(this.splatGeo,this.splatMat.clone());n.rotation.x=-Math.PI/2,n.position.set(t.x+(Math.random()-.5)*.5,.035,t.z+(Math.random()-.5)*.5);const i=.8+Math.random()*1.4;n.scale.set(i,i,i),this.scene.add(n),setTimeout(()=>{let s=.85;const o=setInterval(()=>{s-=.05,n.material&&(n.material.opacity=s),s<=0&&(clearInterval(o),this.scene.remove(n))},100)},15e3)}update(t){for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];n.life-=n.decay*t,n.vy-=22*t,n.mesh.position.x+=n.vx*t,n.mesh.position.y+=n.vy*t,n.mesh.position.z+=n.vz*t,n.mesh.position.y<=.04&&(n.mesh.position.y=.04,n.vx*=.5,n.vz*=.5),n.life<=0&&(this.scene.remove(n.mesh),this.particles.splice(e,1))}}}class _v{constructor(t,e,n,i){this.scene=t,this.physicsWorld=e,this.audioManager=n,this.bloodVfx=i,this.position=new U(0,0,80),this.velocity=new U(0,0,0),this.rotation=0,this.movementAngle=0,this.isDriving=!1,this.currentVehicle=null,this.health=100,this.isRagdoll=!1,this.ragdollTimer=0,this.injuryStumble=0,this.walkSpeed=6.2,this.runSpeed=12,this.jumpVelocity=10.5,this.gravity=28,this.isGrounded=!0,this.footstepTimer=0,this.radius=.45,this.initMesh()}initMesh(){this.group=new St,this.group.position.copy(this.position),this.skinMat=new gi({color:16765868}),this.capMat=new gi({color:16729943}),this.coatMat=new gi({color:2270899}),this.pantsMat=new gi({color:3160402}),this.bagMat=new gi({color:15965202}),this.shoeMat=new gi({color:1976110});const t=new et(.32,.28,.72,10);this.torso=new y(t,this.coatMat),this.torso.position.y=.86,this.torso.castShadow=!0,this.torso.receiveShadow=!0,this.group.add(this.torso);const e=new O(.32,.38,.16),n=new y(e,this.bagMat);n.position.set(.24,.82,-.18),n.rotation.set(.25,.35,-.3),n.castShadow=!0,this.group.add(n);const i=new re(.28,14,12);this.head=new y(i,this.skinMat),this.head.position.y=1.45,this.head.castShadow=!0,this.group.add(this.head);const s=new re(.3,14,10,0,Math.PI*2,0,Math.PI*.52),o=new y(s,this.capMat);o.position.y=1.52,this.group.add(o);const a=new O(.26,.04,.18),c=new y(a,this.capMat);c.position.set(0,1.49,.27),c.rotation.x=-.12,this.group.add(c);const l=new re(.045,6,6),h=new Bt({color:1976110}),u=new y(l,h);u.position.set(-.09,1.46,.255);const d=new y(l,h);d.position.set(.09,1.46,.255),this.group.add(u,d),this.leftLeg=this.createLimb(.12,.55,this.pantsMat,this.shoeMat),this.leftLeg.position.set(-.16,.55,0),this.group.add(this.leftLeg),this.rightLeg=this.createLimb(.12,.55,this.pantsMat,this.shoeMat),this.rightLeg.position.set(.16,.55,0),this.group.add(this.rightLeg),this.leftArm=this.createArm(.1,.5,this.coatMat,this.skinMat),this.leftArm.position.set(-.4,1.1,0),this.group.add(this.leftArm),this.rightArm=this.createArm(.1,.5,this.coatMat,this.skinMat),this.rightArm.position.set(.4,1.1,0),this.group.add(this.rightArm);const f=new Us(.48,16),m=new Bt({color:1976110,transparent:!0,opacity:.35,depthWrite:!1});this.shadowMesh=new y(f,m),this.shadowMesh.rotation.x=-Math.PI/2,this.shadowMesh.position.y=.02,this.scene.add(this.shadowMesh),this.scene.add(this.group)}createLimb(t,e,n,i){const s=new St,o=new et(t,t*.85,e,8);o.translate(0,-e/2,0);const a=new y(o,n);a.castShadow=!0,s.add(a);const c=new O(t*2,.12,t*2.6),l=new y(c,i);return l.position.set(0,-e,.06),l.castShadow=!0,s.add(l),s}createArm(t,e,n,i){const s=new St,o=new et(t,t*.85,e*.75,8);o.translate(0,-e*.38,0);const a=new y(o,n);a.castShadow=!0,s.add(a);const c=new re(t*.9,8,8),l=new y(c,i);return l.position.set(0,-e*.85,0),s.add(l),s}hitByCar(t){}update(t,e,n,i=[]){if(this.isDriving){this.group.visible=!1,this.shadowMesh.visible=!1,this.currentVehicle&&this.position.copy(this.currentVehicle.position);return}if(this.group.visible=!0,this.shadowMesh.visible=!0,this.isRagdoll){this.ragdollTimer-=t,this.group.rotation.z=Math.PI/2,this.group.rotation.x=Math.PI/4,this.velocity.y-=this.gravity*t,this.velocity.x*=Math.max(0,1-4*t),this.velocity.z*=Math.max(0,1-4*t),this.position.x+=this.velocity.x*t,this.position.y+=this.velocity.y*t,this.position.z+=this.velocity.z*t,this.position.y<=0&&(this.position.y=0,this.velocity.y=0),this.group.position.copy(this.position),this.shadowMesh.position.set(this.position.x,.03,this.position.z),this.ragdollTimer<=0&&(this.isRagdoll=!1,this.group.rotation.z=0,this.group.rotation.x=0);return}this.injuryStumble>0&&(this.injuryStumble-=t);const s=e.getForward(),o=e.getTurn(),a=e.isSprinting(),c=e.isJumping();let l=a?this.runSpeed:this.walkSpeed;this.injuryStumble>0&&(l*=.65);const h=s!==0||o!==0;let u=0,d=0;if(h){const b=-Math.sin(n),E=-Math.cos(n),C=Math.cos(n),P=-Math.sin(n),S=b*s+C*o,M=E*s+P*o,L=Math.sqrt(S*S+M*M);if(L>.001){u=S/L*l,d=M/L*l;const k=Math.atan2(u,d);this.movementAngle=k;let N=k-this.rotation;for(;N<-Math.PI;)N+=Math.PI*2;for(;N>Math.PI;)N-=Math.PI*2;this.rotation+=N*Math.min(1,t*16)}this.footstepTimer+=t*(a?1.6:1),this.footstepTimer>.36&&this.isGrounded&&(this.audioManager.playFootstep(),this.footstepTimer=0)}this.velocity.x+=(u-this.velocity.x)*Math.min(1,t*22),this.velocity.z+=(d-this.velocity.z)*Math.min(1,t*22),c&&this.isGrounded&&(this.velocity.y=this.jumpVelocity,this.isGrounded=!1,this.audioManager.playJump()),this.isGrounded||(this.velocity.y-=this.gravity*t);const f=this.position.x+this.velocity.x*t,m=this.position.y+this.velocity.y*t,x=this.position.z+this.velocity.z*t;for(const b of i){if(b===this.currentVehicle)continue;if(this.position.distanceTo(b.position)<2&&Math.abs(b.currentSpeed)>3){const C=new U(Math.sin(b.yaw)*b.currentSpeed,0,Math.cos(b.yaw)*b.currentSpeed);this.hitByCar(C);break}}let g=f,p=x;if(this.physicsWorld.constrainToFlyover&&this.position.y>1){const b=this.physicsWorld.constrainToFlyover(g,p,this.position.y,this.radius);g=b.x,p=b.z}const v=this.physicsWorld.getSurfaceHeight?this.physicsWorld.getSurfaceHeight(g,p,this.position.y):0,_=this.resolveCollisions(g,m,p,i);this.position.x=_.x,this.position.z=_.z,_.y<=v?(this.position.y=v,this.velocity.y=0,this.isGrounded=!0):(this.position.y=_.y,_.grounded&&(this.velocity.y=0,this.isGrounded=!0)),this.group.position.copy(this.position),this.group.rotation.y=this.rotation,this.shadowMesh.position.set(this.position.x,v+.03,this.position.z);const w=Math.max(.4,1-(this.position.y-v)*.15);this.shadowMesh.scale.set(w,w,w),this.animateLimbs(t,h,a)}resolveCollisions(t,e,n,i=[]){let s=t,o=e,a=n,c=!1;const l=this.physicsWorld.getSurfaceHeight?this.physicsWorld.getSurfaceHeight(t,n,e):0;o<=l&&(o=l,c=!0);const h=this.physicsWorld.obstacles||[],u=this.radius;for(const d of h){const f=d.y-d.hy,m=d.y+d.hy;if(o>=m-.4&&o<=m+.8&&s>=d.x-d.hx-.1&&s<=d.x+d.hx+.1&&a>=d.z-d.hz-.1&&a<=d.z+d.hz+.1){o=Math.max(o,m),c=!0;continue}if(o+1.8<f||o>m+.5)continue;const x=s>=d.x-d.hx&&s<=d.x+d.hx,g=a>=d.z-d.hz&&a<=d.z+d.hz;if(x&&g){const p=s-(d.x-d.hx),v=d.x+d.hx-s,_=a-(d.z-d.hz),w=d.z+d.hz-a,b=Math.min(p,v,_,w);b===p?s=d.x-d.hx-u:b===v?s=d.x+d.hx+u:b===_?a=d.z-d.hz-u:a=d.z+d.hz+u}else{const p=Math.max(d.x-d.hx,Math.min(s,d.x+d.hx)),v=Math.max(d.z-d.hz,Math.min(a,d.z+d.hz)),_=s-p,w=a-v,b=_*_+w*w;if(b<u*u){const E=Math.sqrt(b);if(E>1e-4){const C=u-E;s+=_/E*C,a+=w/E*C}else s>=d.x}}}for(const d of i){if(d===this.currentVehicle)continue;const f=d.position.x,m=d.position.z,x=1.35,g=s-f,p=a-m,v=g*g+p*p,_=u+x;if(v<_*_){const w=Math.sqrt(v);if(w>1e-4){const b=_-w;s+=g/w*b,a+=p/w*b}else s+=_}}return{x:s,y:o,z:a,grounded:c}}animateLimbs(t,e,n){if(e&&this.isGrounded){const i=n?18:11,s=performance.now()*.001*i,o=Math.sin(s)*(n?.95:.6),a=-Math.sin(s)*(n?.8:.45);this.leftLeg.rotation.x=o,this.rightLeg.rotation.x=-o,this.leftArm.rotation.x=a,this.rightArm.rotation.x=-a,this.group.position.y=this.position.y+Math.abs(Math.sin(s*2))*.04}else{const i=performance.now()*.002;this.leftLeg.rotation.x*=.8,this.rightLeg.rotation.x*=.8,this.leftArm.rotation.x=Math.sin(i)*.08,this.rightArm.rotation.x=-Math.sin(i)*.08,this.group.position.y=this.position.y}}enterVehicle(t){this.isDriving=!0,this.currentVehicle=t,this.velocity.set(0,0,0),this.audioManager.playDoor()}exitVehicle(){if(!this.currentVehicle)return;this.isDriving=!1;const t=this.currentVehicle.getExitPosition();this.position.set(t.x,0,t.z),this.velocity.set(0,0,0),this.isGrounded=!0,this.currentVehicle=null,this.audioManager.playDoor()}}class ol{constructor(t,e,n,i=new U(0,0,0),s=16729943){this.scene=t,this.physicsWorld=e,this.audioManager=n,this.color=s,this.position=new U(i.x,0,i.z),this.velocity=new U(0,0,0),this.yaw=0,this.pitch=0,this.roll=0,this.currentSpeed=0,this.speed=0,this.speedKmh=0,this.verticalVelocity=0,this.isAirborne=!1,this.gravity=25,this.maxSpeed=28,this.boostMaxSpeed=42,this.acceleration=22,this.reverseMaxSpeed=12,this.braking=32,this.friction=6,this.steerAngle=0,this.maxSteerAngle=.55,this.turnRate=2.6,this.headlightsOn=!1,this.radius=1.35,this.initMesh()}initMesh(){this.mesh=new St,this.mesh.position.copy(this.position);const t=new H({color:this.color,metalness:.55,roughness:.28}),e=new H({color:1119781,metalness:.7,roughness:.2}),n=new H({color:1976110,roughness:.6}),i=new H({color:15856374,metalness:.95,roughness:.1}),s=new H({color:988970,roughness:.1,metalness:.9,transparent:!0,opacity:.85}),o=new Bt({color:16775781}),a=new Bt({color:16723502}),c=new H({color:1974306,roughness:.9}),l=new H({color:14870768,metalness:.85,roughness:.2}),h=new O(2.1,.55,4.4),u=new y(h,t);u.position.y=.5,u.castShadow=!0,u.receiveShadow=!0,this.mesh.add(u);const d=new y(new O(2.15,.08,.4),n);d.position.set(0,.24,2.15),this.mesh.add(d);const f=new O(1.9,.35,1.4),m=new y(f,t);m.position.set(0,.62,1.25),m.rotation.x=-.08,this.mesh.add(m);const x=new O(1.68,.62,2.3),g=new y(x,e);g.position.set(0,1.05,-.2),g.castShadow=!0,this.mesh.add(g);const p=new y(new O(1.55,.58,.05),s);p.position.set(0,1.05,.98),p.rotation.x=.45,this.mesh.add(p);const v=new y(new O(1.55,.58,.05),s);v.position.set(0,1.05,-1.38),v.rotation.x=-.45,this.mesh.add(v);const _=new O(.05,.42,1.6),w=new y(_,s);w.position.set(-.85,1.05,-.2);const b=new y(_,s);b.position.set(.85,1.05,-.2),this.mesh.add(w,b);const E=new O(.28,.16,.12),C=new y(E,t);C.position.set(-.98,.95,.85);const P=new y(E,t);P.position.set(.98,.95,.85),this.mesh.add(C,P);const S=new O(1.8,.08,.35),M=new y(S,n);M.position.set(0,1.05,-2.2),this.mesh.add(M);const L=new y(new O(.08,.28,.1),n);L.position.set(-.6,.9,-2.2);const k=new y(new O(.08,.28,.1),n);k.position.set(.6,.9,-2.2),this.mesh.add(L,k),[-.55,-.35,.35,.55].forEach(J=>{const ht=new y(new et(.08,.08,.3,8),i);ht.rotation.x=Math.PI/2,ht.position.set(J,.34,-2.25),this.mesh.add(ht)});const N=new O(.42,.15,.06),B=new y(N,o);B.position.set(-.72,.58,2.21),B.rotation.y=-.15;const z=new y(N,o);z.position.set(.72,.58,2.21),z.rotation.y=.15,this.mesh.add(B,z),this.leftSpot=new ca(16775781,0,40,Math.PI/5,.4,1),this.leftSpot.position.set(-.72,.58,2.2),this.leftSpotTarget=new Te,this.leftSpotTarget.position.set(-.72,.1,18),this.mesh.add(this.leftSpot,this.leftSpotTarget),this.leftSpot.target=this.leftSpotTarget,this.rightSpot=new ca(16775781,0,40,Math.PI/5,.4,1),this.rightSpot.position.set(.72,.58,2.2),this.rightSpotTarget=new Te,this.rightSpotTarget.position.set(.72,.1,18),this.mesh.add(this.rightSpot,this.rightSpotTarget),this.rightSpot.target=this.rightSpotTarget;const F=new y(new O(1.8,.1,.06),a);F.position.set(0,.62,-2.21),this.mesh.add(F),this.frontLeftWheel=this.createWheelMesh(c,l),this.frontLeftWheel.position.set(-1.08,.38,1.3),this.frontRightWheel=this.createWheelMesh(c,l),this.frontRightWheel.position.set(1.08,.38,1.3),this.frontRightWheel.rotation.y=Math.PI,this.rearLeftWheel=this.createWheelMesh(c,l),this.rearLeftWheel.position.set(-1.08,.38,-1.3),this.rearRightWheel=this.createWheelMesh(c,l),this.rearRightWheel.position.set(1.08,.38,-1.3),this.rearRightWheel.rotation.y=Math.PI,this.mesh.add(this.frontLeftWheel,this.frontRightWheel,this.rearLeftWheel,this.rearRightWheel);const Y=new Kt(2.6,5),G=new Bt({color:1976110,transparent:!0,opacity:.35,depthWrite:!1});this.shadow=new y(Y,G),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.03,this.scene.add(this.shadow),this.mesh.userData={vehicle:this},this.scene.add(this.mesh)}createWheelMesh(t,e){const n=new St,i=new et(.42,.42,.32,16);i.rotateZ(Math.PI/2);const s=new y(i,t);s.castShadow=!0,n.add(s);const o=new et(.26,.26,.34,8);o.rotateZ(Math.PI/2);const a=new y(o,e);return n.add(a),n}setHeadlights(t){this.headlightsOn=t;const e=t?4.5:0;this.leftSpot.intensity=e,this.rightSpot.intensity=e}update(t,e,n){if(n){const s=e.getForward(),o=e.getTurn(),a=e.isJumping(),c=e.isSprinting(),l=c?this.boostMaxSpeed:this.maxSpeed;s>0?this.currentSpeed<0?this.currentSpeed+=this.braking*t:this.currentSpeed<l&&(this.currentSpeed+=this.acceleration*(c?1.6:1)*t):s<0?this.currentSpeed>0?this.currentSpeed-=this.braking*t:this.currentSpeed>-this.reverseMaxSpeed&&(this.currentSpeed-=this.acceleration*.75*t):this.currentSpeed>0?this.currentSpeed=Math.max(0,this.currentSpeed-this.friction*t):this.currentSpeed<0&&(this.currentSpeed=Math.min(0,this.currentSpeed+this.friction*t)),a&&(this.currentSpeed*=Math.max(0,1-3*t));const h=-o*this.maxSteerAngle;if(this.steerAngle+=(h-this.steerAngle)*Math.min(1,t*10),Math.abs(this.currentSpeed)>.3){const E=this.currentSpeed>=0?1:-1,C=a?1.8:1;this.yaw+=this.steerAngle*this.turnRate*E*C*t}const u=Math.sin(this.yaw),d=Math.cos(this.yaw),f=this.position.x+u*this.currentSpeed*t,m=this.position.z+d*this.currentSpeed*t,x=this.physicsWorld.getSurfaceHeight?this.physicsWorld.getSurfaceHeight(f,m,this.position.y):0,g=this.checkRamps(f,m),p=this.physicsWorld.getFlyoverAt?this.physicsWorld.getFlyoverAt(f,m,this.position.y):null;if(g.onRamp)this.position.y=g.height,this.pitch=-g.slope,this.isAirborne=!1,this.verticalVelocity=this.currentSpeed*Math.sin(g.slope);else if(x>.05)if(this.position.y=x,this.verticalVelocity=0,this.isAirborne=!1,p&&p.type==="ramp"){const E=p.ramp,C=E.endHeight-E.startHeight,P=E.endCoord-E.startCoord,S=Math.atan2(C,Math.abs(P)),M=E.axis==="X"?Math.sin(this.yaw):Math.cos(this.yaw),L=(P>0?1:-1)*(C>0?1:-1),k=-S*M*L*.7;this.pitch+=(k-this.pitch)*Math.min(1,t*10)}else this.pitch*=Math.max(0,1-6*t);else this.isAirborne||this.position.y>x+.05?(this.isAirborne=!0,this.verticalVelocity-=this.gravity*t,this.position.y+=this.verticalVelocity*t,this.position.y<=x&&(this.position.y=x,this.verticalVelocity=0,this.isAirborne=!1,this.pitch=0)):(this.position.y=x,this.pitch*=Math.max(0,1-6*t));let v=f,_=m;if(this.physicsWorld.constrainToFlyover&&(this.position.y>1||x>1)){const E=this.physicsWorld.constrainToFlyover(f,m,this.position.y,this.radius);v=E.x,_=E.z,E.constrained&&(this.currentSpeed*=.96)}const w=this.resolveCollisions(v,_);this.position.x=w.x,this.position.z=w.z,w.collided&&(this.currentSpeed*=.35);const b=Math.abs(this.currentSpeed)/this.maxSpeed;this.audioManager.updateEngine(b),e.isDown("KeyH")&&this.audioManager.playHonk()}this.speed=Math.abs(this.currentSpeed),this.speedKmh=Math.round(this.speed*3.6),this.mesh.position.copy(this.position),this.mesh.rotation.set(this.pitch,this.yaw,this.roll);const i=this.currentSpeed*t/.42;if(this.frontLeftWheel.rotation.x+=i,this.frontRightWheel.rotation.x-=i,this.rearLeftWheel.rotation.x+=i,this.rearRightWheel.rotation.x-=i,this.frontLeftWheel.rotation.y=this.steerAngle,this.frontRightWheel.rotation.y=Math.PI+this.steerAngle,this.shadow){this.shadow.position.set(this.position.x,this.position.y+.03,this.position.z);const s=Math.max(.4,1-this.position.y*.15);this.shadow.scale.set(s,s,s)}}checkRamps(t,e){const n=this.physicsWorld.ramps||[];for(const i of n){const s=t-i.x,o=e-i.z;if(i.rotY===0){if(Math.abs(s)<=i.width/2&&o>=-i.length/2&&o<=i.length/2){const c=(o+i.length/2)/i.length*i.height,l=Math.atan2(i.height,i.length);return{onRamp:!0,height:c,slope:l}}}else if(Math.abs(o)<=i.width/2&&s>=-i.length/2&&s<=i.length/2){const c=(s+i.length/2)/i.length*i.height,l=Math.atan2(i.height,i.length);return{onRamp:!0,height:c,slope:l}}}return{onRamp:!1,height:0,slope:0}}resolveCollisions(t,e){let n=t,i=e,s=!1;const o=this.physicsWorld.obstacles||[],a=this.radius,c=this.position.y;for(const l of o){if(l.isRamp)continue;const h=l.y-l.hy,u=l.y+l.hy;if(c+1.4<h||c>u+.5)continue;const d=Math.max(l.x-l.hx,Math.min(n,l.x+l.hx)),f=Math.max(l.z-l.hz,Math.min(i,l.z+l.hz)),m=n-d,x=i-f,g=m*m+x*x;if(g<a*a){s=!0;const p=Math.sqrt(g);if(p>1e-4){const v=a-p;n+=m/p*v,i+=x/p*v}else n+=a}}return{x:n,z:i,collided:s}}getExitPosition(){const t=new U(-2.4,0,0).applyAxisAngle(new U(0,1,0),this.yaw);return new U(this.position.x+t.x,this.position.y,this.position.z+t.z)}}class yv{constructor(t,e,n=new U(320,.4,-380)){this.scene=t,this.audioManager=e,this.color=16726072,this.position=new U(n.x,.4,n.z),this.velocity=new U(0,0,0),this.yaw=0,this.pitch=0,this.roll=0,this.speed=0,this.speedKmh=0,this.maxSpeed=46,this.takeoffSpeed=10,this.altitude=.4,this.maxAltitude=160,this.isAirborne=!1,this.propeller=null,this.isAirplane=!0,this.radius=3.6,this.initMesh()}initMesh(){this.mesh=new St,this.mesh.position.copy(this.position);const t=new H({color:16316922,roughness:.35,metalness:.1}),e=new H({color:16726072,roughness:.4,metalness:.2}),n=new H({color:2240318,roughness:.8}),i=new H({color:623843,roughness:.1,metalness:.9,transparent:!0,opacity:.8}),s=new et(.75,.42,8.5,14);s.rotateX(Math.PI/2);const o=new y(s,t);o.position.y=1.1,o.castShadow=!0,this.mesh.add(o);const a=new _e(.75,1.6,14);a.rotateX(-Math.PI/2);const c=new y(a,e);c.position.set(0,1.1,4.8),this.mesh.add(c);const l=new re(.72,14,12);l.scale(1,.72,2);const h=new y(l,i);h.position.set(0,1.7,1.4),this.mesh.add(h);const u=new O(13.2,.14,1.9),d=new y(u,t);d.position.set(0,1.1,.7),d.castShadow=!0,this.mesh.add(d),[-6.6,6.6].forEach(M=>{const L=new y(new O(.14,.6,1.9),e);L.position.set(M,1.4,.7),this.mesh.add(L)});const f=new y(new O(4.2,.1,1.1),e);f.position.set(0,1.35,-3.6),this.mesh.add(f);const m=new y(new O(.12,1.9,1.4),e);m.position.set(0,2.2,-3.7),this.mesh.add(m),this.propeller=new St,this.propeller.position.set(0,1.1,5.65);const x=new y(new _e(.25,.5,10),e);x.rotateX(-Math.PI/2),this.propeller.add(x);const g=new O(.16,2.6,.04),p=new y(g,n),v=new y(g,n);v.rotation.z=Math.PI/2,this.propeller.add(p,v),this.mesh.add(this.propeller);const _=new H({color:1976110,roughness:.9}),w=new et(.35,.35,.22,12);w.rotateZ(Math.PI/2);const b=new y(w,_);b.position.set(-1.6,.35,.7);const E=new y(w,_);E.position.set(1.6,.35,.7);const C=new y(w,_);C.position.set(0,.35,3.8),this.mesh.add(b,E,C);const P=new Kt(9,9),S=new Bt({color:1976110,transparent:!0,opacity:.3,depthWrite:!1});this.shadow=new y(P,S),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.03,this.scene.add(this.shadow),this.mesh.userData={vehicle:this,isAirplane:!0},this.scene.add(this.mesh)}update(t,e,n){if(n){const i=e.getForward(),s=e.getTurn(),o=e.isDown("Space")||e.isDown("ArrowDown"),a=e.isDown("ShiftLeft")||e.isDown("ArrowUp"),c=e.isSprinting();if(i>0){const u=c?this.maxSpeed:this.maxSpeed*.85;this.speed=Math.min(u,this.speed+16*t)}else i<0?this.speed=Math.max(0,this.speed-18*t):this.isAirborne?this.speed+=(26-this.speed)*Math.min(1,t*1.2):this.speed=Math.max(0,this.speed-5*t);if(this.speed>this.takeoffSpeed&&(o||this.altitude>1)&&(this.isAirborne=!0),this.isAirborne){if(o?(this.pitch=Math.min(.42,this.pitch+.9*t),this.altitude=Math.min(this.maxAltitude,this.altitude+(16+this.speed*.35)*t)):a?(this.pitch=Math.max(-.42,this.pitch-.9*t),this.altitude=Math.max(.4,this.altitude-16*t)):this.pitch*=Math.max(0,1-3.5*t),s!==0){this.yaw-=s*1.6*t;const d=-s*.55;this.roll+=(d-this.roll)*Math.min(1,t*6)}else this.roll*=Math.max(0,1-4.5*t);this.altitude<=.45&&(this.altitude=.4,this.pitch=0,this.roll=0,this.speed<this.takeoffSpeed&&(this.isAirborne=!1))}else this.yaw-=s*2.2*t,this.pitch=0,this.roll=0,this.altitude=.4;const l=Math.sin(this.yaw)*Math.cos(this.pitch),h=Math.cos(this.yaw)*Math.cos(this.pitch);this.position.x+=l*this.speed*t,this.position.y=this.altitude,this.position.z+=h*this.speed*t,this.speedKmh=Math.round(this.speed*3.6),this.audioManager.updateEngine(Math.max(.1,this.speed/this.maxSpeed))}if(this.propeller){const i=(this.speed+12)*2.5;this.propeller.rotation.z+=i*t}if(this.mesh.position.copy(this.position),this.mesh.rotation.set(this.pitch,this.yaw,this.roll),this.shadow){this.shadow.position.set(this.position.x,.04,this.position.z);const i=Math.max(.2,1-this.position.y*.012);this.shadow.scale.set(i,i,i),this.shadow.material.opacity=Math.max(.05,.35-this.position.y*.003)}}getExitPosition(){const t=new U(-3.8,0,0).applyAxisAngle(new U(0,1,0),this.yaw);return new U(this.position.x+t.x,.1,this.position.z+t.z)}}class Mv{constructor(t,e,n=new U(340,.4,-360)){this.scene=t,this.audioManager=e,this.color=16096779,this.position=new U(n.x,.4,n.z),this.velocity=new U(0,0,0),this.yaw=0,this.pitch=0,this.roll=0,this.altitude=.4,this.speed=0,this.speedKmh=0,this.maxSpeed=38,this.isAirborne=!1,this.isHelicopter=!0,this.radius=3.2,this.initMesh()}initMesh(){this.mesh=new St,this.mesh.position.copy(this.position);const t=new H({color:165063,metalness:.6,roughness:.3}),e=new H({color:1976635,roughness:.8}),n=new H({color:988970,roughness:.1,metalness:.9,transparent:!0,opacity:.82}),i=new H({color:14870768,metalness:.9,roughness:.2}),s=new re(1.6,16,12);s.scale(1,.95,1.8);const o=new y(s,t);o.position.y=1.6,o.castShadow=!0,this.mesh.add(o);const a=new y(new re(1.52,14,12,0,Math.PI,0,Math.PI/1.5),n);a.rotation.x=Math.PI/2,a.position.set(0,1.6,.8),this.mesh.add(a);const c=new et(.24,.42,6.2,10);c.rotateX(Math.PI/2);const l=new y(c,t);l.position.set(0,1.8,-4.2),l.castShadow=!0,this.mesh.add(l);const h=new y(new O(.12,1.8,1.2),t);h.position.set(0,2.3,-7.2),this.mesh.add(h);const u=new y(new O(2.4,.08,.6),e);u.position.set(0,1.9,-6.5),this.mesh.add(u),this.mainRotor=new St,this.mainRotor.position.set(0,3.2,0);const d=new y(new et(.12,.12,.8,8),i);d.position.y=-.3,this.mainRotor.add(d);const f=new y(new et(.4,.4,.15,10),e);this.mainRotor.add(f);for(let _=0;_<4;_++){const w=_/4*Math.PI*2,b=new y(new O(.22,.03,5.2),e);b.position.set(Math.sin(w)*2.6,0,Math.cos(w)*2.6),b.rotation.y=w,this.mainRotor.add(b)}this.mesh.add(this.mainRotor),this.tailRotor=new St,this.tailRotor.position.set(.22,2.3,-7.2);for(let _=0;_<2;_++){const w=new y(new O(.08,1.2,.02),e);w.rotation.z=_/2*Math.PI,this.tailRotor.add(w)}this.mesh.add(this.tailRotor);const m=new et(.09,.09,4.4,8);m.rotateX(Math.PI/2);const x=new y(m,e);x.position.set(-1.25,.25,0);const g=new y(m,e);g.position.set(1.25,.25,0),[-.9,.9].forEach(_=>{[-1.25,1.25].forEach(w=>{const b=new y(new et(.06,.06,1.1,8),e);b.position.set(w*.85,.75,_),b.rotation.z=w>0?-.28:.28,this.mesh.add(b)})}),this.mesh.add(x,g),this.searchlight=new ca(16775781,0,80,Math.PI/6,.5,1.2),this.searchlight.position.set(0,.6,1.5),this.searchlightTarget=new Te,this.searchlightTarget.position.set(0,-20,10),this.mesh.add(this.searchlight,this.searchlightTarget),this.searchlight.target=this.searchlightTarget;const p=new Kt(8,8),v=new Bt({color:1976110,transparent:!0,opacity:.35,depthWrite:!1});this.shadow=new y(p,v),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.03,this.scene.add(this.shadow),this.mesh.userData={vehicle:this,isHelicopter:!0},this.scene.add(this.mesh)}update(t,e,n){if(n){const s=e.getForward(),o=e.getTurn(),a=e.isDown("Space"),c=e.isDown("ShiftLeft"),l=e.isSprinting();if(a?(this.altitude=Math.min(180,this.altitude+14*(l?1.5:1)*t),this.isAirborne=!0):c&&(this.altitude=Math.max(.4,this.altitude-12*t),this.altitude<=.45&&(this.altitude=.4,this.isAirborne=!1)),this.isAirborne){const h=-s*.32;this.pitch+=(h-this.pitch)*Math.min(1,t*4);const u=-o*.28;this.roll+=(u-this.roll)*Math.min(1,t*4),this.yaw-=o*1.8*t;const d=l?this.maxSpeed*1.3:this.maxSpeed;Math.abs(s)>.01?this.speed+=(s*d-this.speed)*Math.min(1,t*3.5):this.speed*=Math.max(0,1-2.5*t);const f=Math.sin(this.yaw),m=Math.cos(this.yaw);this.position.x+=f*this.speed*t,this.position.z+=m*this.speed*t}else this.pitch=0,this.roll=0,this.speed=0;this.position.y=this.altitude,this.speedKmh=Math.round(Math.abs(this.speed)*3.6),this.searchlight.intensity=this.isAirborne?4:0,this.audioManager.updateEngine(this.isAirborne?.85:.2)}const i=n?28:this.isAirborne?20:6;if(this.mainRotor.rotation.y+=i*t,this.tailRotor.rotation.x+=i*1.5*t,this.mesh.position.copy(this.position),this.mesh.rotation.set(this.pitch,this.yaw,this.roll),this.shadow){this.shadow.position.set(this.position.x,.04,this.position.z);const s=Math.max(.25,1-this.position.y*.01);this.shadow.scale.set(s,s,s),this.shadow.material.opacity=Math.max(.05,.4-this.position.y*.003)}}getExitPosition(){const t=new U(-3.2,0,0).applyAxisAngle(new U(0,1,0),this.yaw);return new U(this.position.x+t.x,this.position.y,this.position.z+t.z)}}class fi{static createMarbleTexture(t=512){const e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d");n.fillStyle="#f8f9fa",n.fillRect(0,0,t,t);const i=n.getImageData(0,0,t,t),s=i.data;for(let a=0;a<t;a++)for(let c=0;c<t;c++){const l=(a*t+c)*4,h=Math.sin(c*.04)*Math.cos(a*.04)*8+(Math.random()-.5)*6;s[l]=Math.min(255,Math.max(240,248+h)),s[l+1]=Math.min(255,Math.max(240,248+h)),s[l+2]=Math.min(255,Math.max(242,250+h))}n.putImageData(i,0,0),n.lineWidth=1.5;for(let a=0;a<6;a++){n.strokeStyle=a%2===0?"rgba(180, 185, 192, 0.22)":"rgba(215, 198, 175, 0.18)",n.beginPath();let c=Math.random()*t,l=0;for(n.moveTo(c,l);l<t;)c+=(Math.random()-.5)*28+Math.sin(l*.05)*12,l+=Math.random()*20+8,n.lineTo(c,l);n.stroke()}const o=new Se(e);return o.wrapS=He,o.wrapT=He,o}static createSandstoneTexture(t="#b33939",e=512,n=!0){const i=document.createElement("canvas");i.width=e,i.height=e;const s=i.getContext("2d");s.fillStyle=t,s.fillRect(0,0,e,e);const o=s.getImageData(0,0,e,e),a=o.data;for(let u=0;u<e;u++){const d=Math.sin(u*.08)*10;for(let f=0;f<e;f++){const m=(u*e+f)*4,x=(Math.random()-.5)*18+d;a[m]=Math.min(255,Math.max(0,a[m]+x)),a[m+1]=Math.min(255,Math.max(0,a[m+1]+x*.8)),a[m+2]=Math.min(255,Math.max(0,a[m+2]+x*.6))}}s.putImageData(o,0,0),s.strokeStyle=n?"rgba(70, 20, 20, 0.35)":"rgba(120, 95, 60, 0.35)",s.lineWidth=2;const c=32,l=64;for(let u=0;u<e;u+=c){s.beginPath(),s.moveTo(0,u),s.lineTo(e,u),s.stroke();const d=u/c%2===0?0:l/2;for(let f=d;f<e;f+=l)s.beginPath(),s.moveTo(f,u),s.lineTo(f,u+c),s.stroke()}const h=new Se(i);return h.wrapS=He,h.wrapT=He,h}static createAsphaltTexture(t=512){const e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d");n.fillStyle="#2d3436",n.fillRect(0,0,t,t);const i=n.getImageData(0,0,t,t),s=i.data;for(let a=0;a<s.length;a+=4){const c=(Math.random()-.5)*24;s[a]=Math.min(255,Math.max(20,s[a]+c)),s[a+1]=Math.min(255,Math.max(20,s[a+1]+c)),s[a+2]=Math.min(255,Math.max(20,s[a+2]+c))}n.putImageData(i,0,0),n.strokeStyle="#f1c40f",n.lineWidth=10,n.setLineDash([40,30]),n.beginPath(),n.moveTo(t/2,0),n.lineTo(t/2,t),n.stroke(),n.strokeStyle="#ffffff",n.lineWidth=6,n.setLineDash([]),n.beginPath(),n.moveTo(24,0),n.lineTo(24,t),n.moveTo(t-24,0),n.lineTo(t-24,t),n.stroke();const o=new Se(e);return o.wrapS=He,o.wrapT=He,o}static createCobblestoneTexture(t=512){const e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d");n.fillStyle="#dfe4ea",n.fillRect(0,0,t,t),n.strokeStyle="rgba(116, 125, 140, 0.4)",n.lineWidth=2.5;const i=32;for(let o=0;o<t;o+=i){const a=o/i%2===0?0:i/2;for(let c=0;c<t;c+=i){const l=220+Math.floor(Math.random()*25);n.fillStyle=`rgb(${l}, ${l-2}, ${l-6})`,n.fillRect(c+a+2,o+2,i-4,i-4),n.strokeRect(c+a+2,o+2,i-4,i-4)}}const s=new Se(e);return s.wrapS=He,s.wrapT=He,s}static createCopperPatinaTexture(t=256){const e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d");n.fillStyle="#48b59e",n.fillRect(0,0,t,t);const i=n.getImageData(0,0,t,t),s=i.data;for(let a=0;a<s.length;a+=4){const c=(Math.random()-.5)*32;s[a]=Math.min(255,Math.max(40,72+c*.7)),s[a+1]=Math.min(255,Math.max(120,181+c)),s[a+2]=Math.min(255,Math.max(110,158+c*.8))}n.putImageData(i,0,0);const o=new Se(e);return o.wrapS=He,o.wrapT=He,o}static createRockTexture(t=256){const e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d");n.fillStyle="#57606f",n.fillRect(0,0,t,t);const i=n.getImageData(0,0,t,t),s=i.data;for(let a=0;a<s.length;a+=4){const c=(Math.random()-.5)*45;s[a]=Math.min(255,Math.max(40,87+c)),s[a+1]=Math.min(255,Math.max(40,96+c)),s[a+2]=Math.min(255,Math.max(40,111+c))}n.putImageData(i,0,0);const o=new Se(e);return o.wrapS=He,o.wrapT=He,o}}class Sv{constructor(t,e){this.scene=t,this.physicsWorld=e,this.textures={marble:fi.createMarbleTexture(512),redSandstone:fi.createSandstoneTexture("#9e2a2b",512,!0),buffSandstone:fi.createSandstoneTexture("#d4a373",512,!1),asphalt:fi.createAsphaltTexture(512),cobble:fi.createCobblestoneTexture(512),copper:fi.createCopperPatinaTexture(256),rock:fi.createRockTexture(256)},this.textures.marble.repeat.set(6,6),this.textures.redSandstone.repeat.set(6,6),this.textures.buffSandstone.repeat.set(6,6),this.textures.cobble.repeat.set(12,12),this.textures.rock.repeat.set(6,6),this.observationElevators=[],this.initMaterials(),this.buildWorld()}initMaterials(){this.materials={grass:new H({color:8366436,roughness:.9}),sand:new H({color:15325350,roughness:.95}),water:new H({color:693142,roughness:.15,metalness:.25,transparent:!0,opacity:.88}),road:new H({color:2829099,roughness:.85,metalness:.1}),roadMarking:new Bt({color:16765286}),roadWhite:new Bt({color:16777215}),sidewalk:new H({map:this.textures.cobble,roughness:.8}),tajMarble:new H({map:this.textures.marble,color:16777215,roughness:.25,metalness:.08}),goldTrim:new H({color:16032353,roughness:.3,metalness:.8}),redSandstone:new H({map:this.textures.redSandstone,roughness:.75}),buffSandstone:new H({map:this.textures.buffSandstone,roughness:.75}),eiffelIron:new H({color:6511957,roughness:.65,metalness:.7}),copperDome:new H({map:this.textures.copper,roughness:.5,metalness:.35}),statueCopper:new H({map:this.textures.copper,roughness:.45,metalness:.35}),rock:new H({map:this.textures.rock,roughness:.95}),snow:new H({color:16777215,roughness:.3,metalness:.1}),bridgeMetal:new H({color:15087942,roughness:.4,metalness:.5})}}buildWorld(){this.createLandscapeAndRiver(),this.createHimalayanMountains(),this.createYetiAndPolarBears(),this.createCityZoo(),this.createBankAndSchoolDistricts(),this.createGasStationAndHospital(),this.createRoadNetwork(),this.createAirportRunwayAndHelipad(),this.buildIndiaGate(),this.buildTajMahal(),this.buildRedFort(),this.buildRashtrapatiBhavan(),this.buildEiffelTower(),this.buildStatueOfLiberty(),this.createNightclubDistrict(),this.createHighwayFlyovers(),this.buildVidhanaSoudha(),this.buildUBCity(),this.buildOrionMall(),this.buildLalbaghGardens(),this.buildNandiHills(),this.buildTownHall(),this.createBangaloreDistricts(),this.createCityVegetation(),this.createJumpRamps()}createLandscapeAndRiver(){const t=new Kt(1200,1200,32,32),e=new y(t,this.materials.grass);e.rotation.x=-Math.PI/2,e.receiveShadow=!0,this.scene.add(e);const n=new Kt(75,1200),i=new y(n,this.materials.water);i.rotation.x=-Math.PI/2,i.position.set(380,.08,0),i.receiveShadow=!0,this.scene.add(i);const s=new O(4,.4,1200),o=new y(s,this.materials.rock);o.position.set(340,.16,0);const a=new y(s,this.materials.rock);a.position.set(420,.16,0),this.scene.add(o,a);const c=new Kt(35,1200),l=new y(c,this.materials.sand);l.rotation.x=-Math.PI/2,l.position.set(320,.1,0),l.receiveShadow=!0,this.scene.add(l),this.createYacht(380,220,16734558),this.createYacht(390,0,1671876),this.createYacht(375,-280,16763450),this.createRiverBridge(380,80)}createRiverBridge(t,e){const n=new St;n.position.set(t,0,e);const i=new O(100,1.4,16),s=new y(i,this.materials.road);s.position.y=4.2,s.castShadow=!0,s.receiveShadow=!0,n.add(s),[-38,38].forEach(c=>{const l=new y(new O(3.5,26,18),this.materials.bridgeMetal);l.position.set(c,13,0),l.castShadow=!0,n.add(l)});const o=new y(new O(40,1.2,16),this.materials.road);o.position.set(-68,2.1,0),o.rotation.z=.1;const a=new y(new O(40,1.2,16),this.materials.road);a.position.set(68,2.1,0),a.rotation.z=-.1,n.add(o,a),this.scene.add(n),this.physicsWorld.addStaticBox(t,4.2,e,50,.7,8)}createYacht(t,e,n){const i=new St;i.position.set(t,.35,e);const s=new H({color:n,roughness:.35}),o=new H({color:16777215,roughness:.2}),a=new y(new O(5.2,1.8,14),s);a.castShadow=!0,i.add(a);const c=new y(new O(3.8,2,7.5),o);c.position.set(0,1.8,-.8),c.castShadow=!0,i.add(c);const l=new y(new et(.1,.1,7),o);l.position.set(0,4.5,-1.2),i.add(l),this.scene.add(i)}createHimalayanMountains(){const s=new Kt(1100,260,54,24);s.rotateX(-Math.PI/2);const o=s.attributes.position;for(let l=0;l<o.count;l++){const h=o.getX(l),u=o.getZ(l),d=1-Math.min(1,Math.max(0,(u+260/2)/260));let f=Math.sin(h*.012)*55+Math.cos(h*.027)*35;f+=Math.sin(h*.051+u*.033)*22,f+=Math.cos(h*.088)*12;const m=Math.max(0,(115+f)*Math.pow(d,1.4));o.setY(l,m)}s.computeVertexNormals();const a=new y(s,this.materials.rock);a.position.set(0,0,-510),a.castShadow=!0,a.receiveShadow=!0,this.scene.add(a),[{x:-440,z:-530,scale:[90,160,85],rotY:.3},{x:-310,z:-550,scale:[110,185,100],rotY:.8},{x:-160,z:-520,scale:[95,155,85],rotY:1.2},{x:0,z:-560,scale:[130,205,115],rotY:.4},{x:150,z:-530,scale:[100,165,90],rotY:2.1},{x:290,z:-555,scale:[115,180,105],rotY:1.5},{x:430,z:-520,scale:[95,150,80],rotY:.6}].forEach(l=>{const h=new nn(1,1),u=new y(h,this.materials.rock);u.scale.set(l.scale[0],l.scale[1],l.scale[2]),u.rotation.set(.1,l.rotY,-.08),u.position.set(l.x,l.scale[1]*.48,l.z),u.castShadow=!0,u.receiveShadow=!0,this.scene.add(u);const d=new nn(1,1),f=new y(d,this.materials.snow);f.scale.set(l.scale[0]*.58,l.scale[1]*.46,l.scale[2]*.58),f.rotation.set(.08,l.rotY+.2,-.06),f.position.set(l.x,l.scale[1]*.76,l.z),f.castShadow=!0,this.scene.add(f),this.physicsWorld.addStaticBox(l.x,30,l.z,l.scale[0]*.5,30,l.scale[2]*.5)})}createYetiAndPolarBears(){const t=new St;t.position.set(35,0,-485);const e=new H({color:9741240,roughness:.9});new H({color:16317180,roughness:.3});const n=new H({color:3718648,roughness:.1,metalness:.2,transparent:!0,opacity:.85});for(let k=0;k<=Math.PI;k+=Math.PI/5){const N=Math.cos(k)*7.5,B=Math.sin(k)*7.5+2.5,z=new y(new nn(2.4,0),e);z.position.set(N,B,(Math.random()-.5)*2.5),z.rotation.set(Math.random(),Math.random(),Math.random()),t.add(z);const F=new y(new _e(.35,2.2,5),n);F.rotation.x=Math.PI,F.position.set(N*.85,B-1.2,0),t.add(F)}const i=new St;i.position.set(0,0,0);const s=new H({color:14870768,roughness:.95}),o=new H({color:6583435,roughness:.8}),a=new Bt({color:3718648}),c=new H({color:16777215,roughness:.2}),l=new y(new O(.85,2.2,.9),s);l.position.set(-.75,1.1,0),i.add(l);const h=new y(new O(.85,2.2,.9),s);h.position.set(.75,1.1,0),i.add(h);const u=new y(new O(.95,.45,1.4),o);u.position.set(-.75,.22,.35),i.add(u);const d=new y(new O(.95,.45,1.4),o);d.position.set(.75,.22,.35),i.add(d);const f=new y(new O(2.4,2.6,1.7),s);f.position.set(0,3.2,0),i.add(f);const m=new y(new O(1.6,1.5,.35),o);m.position.set(0,3.4,.85),i.add(m);const x=new y(new O(.75,2.4,.75),s);x.position.set(-1.6,3.5,.2),x.rotation.z=.45,x.rotation.x=-.3,i.add(x);const g=new y(new O(.75,2.4,.75),s);g.position.set(1.6,3.5,.2),g.rotation.z=-.45,g.rotation.x=-.3,i.add(g);const p=new y(new O(.7,.6,.7),o);p.position.set(-2.1,4.4,.5),i.add(p);const v=new y(new O(.7,.6,.7),o);v.position.set(2.1,4.4,.5),i.add(v);const _=new y(new O(1.4,1.4,1.4),s);_.position.set(0,4.8,.2),i.add(_);const w=new y(new O(1,.9,.2),o);w.position.set(0,4.75,.9),i.add(w);const b=new y(new re(.12,8,8),a);b.position.set(-.3,4.95,1.02),i.add(b);const E=new y(new re(.12,8,8),a);E.position.set(.3,4.95,1.02),i.add(E);const C=new y(new O(.6,.2,.15),new Bt({color:1976635}));C.position.set(0,4.55,1),i.add(C);const P=new y(new _e(.06,.25,4),c);P.rotation.x=Math.PI,P.position.set(-.2,4.5,1.02),i.add(P);const S=new y(new _e(.06,.25,4),c);S.rotation.x=Math.PI,S.position.set(.2,4.5,1.02),i.add(S);const M=new y(new _e(.18,1.1,5),n);M.position.set(-.7,5.4,.1),M.rotation.z=-.55,M.rotation.x=-.2,i.add(M);const L=new y(new _e(.18,1.1,5),n);L.position.set(.7,5.4,.1),L.rotation.z=.55,L.rotation.x=-.2,i.add(L),t.add(i),this.scene.add(t),this.physicsWorld.addStaticBox(35,3.5,-485,4.5,3.5,4.5),this.createPolarBear(-85,-475,.6),this.createPolarBear(120,-480,-.4)}createPolarBear(t,e,n){const i=new St;i.position.set(t,0,e),i.rotation.y=n;const s=new y(new et(14,15,.4,16),new H({color:12248829,roughness:.15,metalness:.3}));s.position.y=.2,i.add(s);const o=new y(new et(2.5,2.5,.45,12),new H({color:223649,roughness:.1,metalness:.5}));o.position.set(5.5,.22,2.5),i.add(o);const a=new St,c=new H({color:16317180,roughness:.88}),l=new H({color:988970,roughness:.4}),h=new y(new O(2.8,1.7,1.8),c);h.position.set(0,1.6,0),h.castShadow=!0,a.add(h);const u=new y(new O(1.6,1.8,1.7),c);u.position.set(-1.4,1.7,0),u.castShadow=!0,a.add(u);const d=new et(.32,.38,1.3,8);[[-1.4,.65,-.7],[-1.4,.65,.7],[1,.65,-.7],[1,.65,.7]].forEach(([E,C,P])=>{const S=new y(d,c);S.position.set(E,C,P),S.castShadow=!0,a.add(S)});const m=new y(new O(1.2,1.1,1.1),c);m.position.set(1.7,2.1,0),a.add(m);const x=new y(new O(.85,.6,.7),c);x.position.set(2.45,1.85,0),a.add(x);const g=new y(new O(.25,.25,.28),l);g.position.set(2.9,1.9,0),a.add(g);const p=new y(new re(.2,6,6),c);p.position.set(1.5,2.7,-.45),a.add(p);const v=new y(new re(.2,6,6),c);v.position.set(1.5,2.7,.45),a.add(v);const _=new y(new re(.08,6,6),l);_.position.set(2,2.25,-.45),a.add(_);const w=new y(new re(.08,6,6),l);w.position.set(2,2.25,.45),a.add(w);const b=new y(new re(.25,6,6),c);b.position.set(-2.25,2,0),a.add(b),i.add(a),this.scene.add(i),this.physicsWorld.addStaticBox(t,1.5,e,2.5,1.5,2)}createAirportRunwayAndHelipad(){const t=new St;t.position.set(300,.06,-380);const e=new Kt(280,24),n=new H({color:2040865,roughness:.9}),i=new y(e,n);i.rotation.x=-Math.PI/2,i.receiveShadow=!0,t.add(i);const s=new Bt({color:16777215});for(let g=-125;g<=125;g+=20){const p=new y(new Kt(12,1),s);p.rotation.x=-Math.PI/2,p.position.set(g,.02,0),t.add(p)}const o=new H({color:14870768,roughness:.3}),a=new y(new et(3.5,4.8,36,14),o);a.position.set(-100,18,-32),a.castShadow=!0,t.add(a);const c=new y(new et(6.8,4.5,6.5,14),new H({color:165063,transparent:!0,opacity:.8,metalness:.9}));c.position.set(-100,36,-32),t.add(c);const l=new Us(12,24),h=new H({color:3359061,roughness:.8}),u=new y(l,h);u.rotation.x=-Math.PI/2,u.position.set(40,.08,28),t.add(u);const d=new Bt({color:16436245}),f=new y(new Kt(1.2,10),d);f.rotation.x=-Math.PI/2,f.position.set(37,.1,28);const m=new y(new Kt(1.2,10),d);m.rotation.x=-Math.PI/2,m.position.set(43,.1,28);const x=new y(new Kt(6,1.2),d);x.rotation.x=-Math.PI/2,x.position.set(40,.1,28),t.add(f,m,x),this.scene.add(t),this.physicsWorld.addStaticBox(200,18,-412,4.5,18,4.5)}createRoadNetwork(){this.addHighway(0,0,16,1100,0),this.addHighway(0,0,1100,16,0),this.addHighway(-200,0,16,1100,0),this.addHighway(200,0,16,1100,0),this.addHighway(0,-200,1100,16,0),this.addHighway(0,200,1100,16,0)}addHighway(t,e,n,i,s){const o=new St;o.position.set(t,.04,e),o.rotation.y=s;const a=new y(new Kt(n,i),this.materials.road);a.rotation.x=-Math.PI/2,a.receiveShadow=!0,o.add(a);const c=n>i,l=Math.max(n,i),h=Math.floor(l/8),u=c?new Kt(4.5,.45):new Kt(.45,4.5);for(let m=-h/2;m<=h/2;m++){const x=new y(u,this.materials.roadMarking);x.rotation.x=-Math.PI/2,x.position.y=.008,c?x.position.x=m*8:x.position.z=m*8,o.add(x)}const d=2.5,f=.22;c?(this.addCurb(t,e+n/2+d/2,i,d,f),this.addCurb(t,e-n/2-d/2,i,d,f)):(this.addCurb(t+n/2+d/2,e,d,i,f),this.addCurb(t-n/2-d/2,e,d,i,f)),this.scene.add(o)}addCurb(t,e,n,i,s){const o=new y(new O(n,s,i),this.materials.sidewalk);o.position.set(t,s/2,e),o.receiveShadow=!0,this.scene.add(o)}buildTajMahal(){const t=new St,e=320,n=-180;t.position.set(e,0,n);const i=this.materials.tajMarble,s=this.materials.goldTrim,o=new y(new O(36,3,36),i);o.position.y=1.5,o.castShadow=!0,o.receiveShadow=!0,t.add(o);for(let x=0;x<6;x++){const g=new y(new O(10,.5,1.2),i);g.position.set(0,.25+x*.5,18.6+(5-x)*1.2),g.receiveShadow=!0,t.add(g)}const a=new y(new O(22,14,22),i);a.position.y=10,a.castShadow=!0,t.add(a);const c=new y(new O(6.5,9,5),new H({color:3355443}));c.position.set(0,7.5,11.2),t.add(c);const l=[];l.push(new ft(4,0)),l.push(new ft(4,2.5)),l.push(new ft(5.4,4.6)),l.push(new ft(5.8,6.6)),l.push(new ft(5.2,8.8)),l.push(new ft(3.4,10.6)),l.push(new ft(1.4,12.4)),l.push(new ft(.1,13.8));const h=new y(new Ta(l,24),i);h.position.y=17,h.castShadow=!0,t.add(h);const u=new y(new et(.15,.4,4.2,8),s);u.position.y=32.5,t.add(u);const d=new y(new O(23.5,.6,23.5),i);d.position.y=17,t.add(d);const f=new y(new O(24.2,1.2,24.2),s);f.position.y=17.6,t.add(f),[-15,15].forEach(x=>{[-15,15].forEach(g=>{const p=new y(new et(1,1.4,26,12),i);p.position.set(x,16,g),p.castShadow=!0,t.add(p);const v=new y(new re(1.3,10,10,0,Math.PI*2,0,Math.PI/2),i);v.position.set(x,29.5,g),v.scale.set(1,1.4,1),t.add(v)})});const m=new y(new Kt(12,55),this.materials.water);m.rotation.x=-Math.PI/2,m.position.set(0,.12,48),t.add(m),this.scene.add(t),this.physicsWorld.addStaticBox(e,1.5,n,18,1.5,18),this.physicsWorld.addStaticBox(e,10,n,11,7,11),this.physicsWorld.addStaticBox(e,17.3,n,11.5,.3,11.5),this.createObservationElevator("Taj Mahal Dome Terrace",new U(e-14,3.2,n-14),new U(e-6,17.4,n-6))}buildIndiaGate(){const t=new St,e=0,n=-140;t.position.set(e,0,n);const i=this.materials.redSandstone,s=this.materials.buffSandstone;[-8.5,8.5].forEach(u=>{const d=new y(new O(6.8,22,11),i);d.position.set(u,11,0),d.castShadow=!0,t.add(d);const f=new y(new O(7,2.5,11.2),s);f.position.set(u,14,0),t.add(f)});const o=new y(new O(24,8,11.2),s);o.position.set(0,26,0),o.castShadow=!0,t.add(o);const a=new y(new O(22,5,10),i);a.position.set(0,32.5,0),t.add(a);const c=new y(new O(2.5,.8,2.5),new H({color:1118481,roughness:.2,metalness:.8}));c.position.set(0,.4,0),t.add(c);const l=new y(new _e(.35,1.4,8),new Bt({color:16753920}));l.position.set(0,1.4,0),t.add(l);const h=new cr(16750848,3.5,20);h.position.set(0,1.8,0),t.add(h),this.scene.add(t),this.physicsWorld.addStaticBox(e-8.5,11,n,3.4,11,5.5),this.physicsWorld.addStaticBox(e+8.5,11,n,3.4,11,5.5)}buildRedFort(){const t=new St,e=-320,n=-260;t.position.set(e,0,n);const i=this.materials.redSandstone,s=this.materials.tajMarble,o=new y(new O(64,14,9),i);o.position.y=7,o.castShadow=!0,t.add(o);for(let h=-30;h<=30;h+=3){const u=new y(new O(1.6,2,9.2),i);u.position.set(h,15,0),t.add(u)}[-18,18].forEach(h=>{const u=new y(new et(5.2,5.8,20,8),i);u.position.set(h,10,2.5),u.castShadow=!0,t.add(u);const d=new y(new re(2.8,10,10,0,Math.PI*2,0,Math.PI/2),s);d.position.set(h,21,2.5),d.scale.set(1,1.3,1),t.add(d)});const a=new y(new O(9,10,9.4),new H({color:2236962}));a.position.set(0,5,0),t.add(a);const c=new y(new et(.1,.14,14),this.materials.buffSandstone);c.position.set(0,21,0),t.add(c);const l=new y(new Kt(4.2,2.4),new Bt({color:16750899}));l.position.set(2.1,26,0),t.add(l),this.scene.add(t),this.physicsWorld.addStaticBox(e-18,7,n,14,7,4.5),this.physicsWorld.addStaticBox(e+18,7,n,14,7,4.5)}buildRashtrapatiBhavan(){const t=new St,e=-340,n=240;t.position.set(e,0,n);const i=this.materials.redSandstone,s=this.materials.buffSandstone,o=this.materials.copperDome,a=new y(new O(68,12,28),s);a.position.y=6,a.castShadow=!0,t.add(a);const c=new y(new O(70,2.2,30),i);c.position.y=1.1,t.add(c);for(let f=-22;f<=22;f+=4){const m=new y(new et(.5,.58,11.5,12),s);m.position.set(f,6,15.5),m.castShadow=!0,t.add(m)}const l=new y(new et(10.5,10.8,5.5,20),s);l.position.set(0,14.5,0),t.add(l);const h=new y(new re(10.2,20,16,0,Math.PI*2,0,Math.PI/2),o);h.position.set(0,17.2,0),h.scale.set(1,.88,1),t.add(h);const u=new y(new et(.8,1.2,20,12),s);u.position.set(0,10,36),t.add(u);const d=new y(new nn(1.2),this.materials.goldTrim);d.position.set(0,21,36),t.add(d),this.scene.add(t),this.physicsWorld.addStaticBox(e,6,n,34,6,14)}buildEiffelTower(){const t=new St,e=180,n=260;t.position.set(e,0,n);const i=this.materials.eiffelIron,s=[{lx:-13,lz:-13,rotY:Math.PI/4},{lx:13,lz:-13,rotY:-Math.PI/4},{lx:13,lz:13,rotY:-3*Math.PI/4},{lx:-13,lz:13,rotY:3*Math.PI/4}];s.forEach(x=>{const g=new y(new O(4.2,24,4.2),i);g.position.set(x.lx,11,x.lz),g.rotation.y=x.rotY,g.rotation.x=x.lz>0?-.16:.16,g.rotation.z=x.lx>0?-.16:.16,g.castShadow=!0,t.add(g)}),[-13,13].forEach(x=>{const g=new y(new et(10,10,3.5,16,1,!1,0,Math.PI),i);g.rotation.z=Math.PI/2,g.position.set(x,6,0),t.add(g)});const o=new y(new O(26,2,26),i);o.position.y=21,o.castShadow=!0,t.add(o);const a=new y(new O(26.6,1.2,26.6),i);a.position.y=22.6,t.add(a);const c=new y(new et(6.5,10.5,22,4),i);c.rotation.y=Math.PI/4,c.position.y=33,c.castShadow=!0,t.add(c);const l=new y(new O(16,1.6,16),i);l.position.y=45,t.add(l);const h=new y(new et(2,5.5,40,4),i);h.rotation.y=Math.PI/4,h.position.y=66,h.castShadow=!0,t.add(h);const u=new y(new et(4.5,4.5,1.2,12),i);u.position.y=87.5,t.add(u);const d=new y(new et(4.8,4.8,1.2,12),this.materials.goldTrim);d.position.y=88.7,t.add(d);const f=new y(new re(1.2,8,8),new Bt({color:16777215}));f.position.y=92,t.add(f);const m=new y(new _e(.6,6,8),i);m.position.y=95,t.add(m),this.scene.add(t),s.forEach(x=>{this.physicsWorld.addStaticBox(e+x.lx,11,n+x.lz,2.5,11,2.5)}),this.physicsWorld.addStaticBox(e,21,n,13,1,13),this.physicsWorld.addStaticBox(e,45,n,8,.8,8),this.physicsWorld.addStaticBox(e,87.5,n,4,.6,4),this.createObservationElevator("Eiffel Tower Summit (90m)",new U(e,.5,n),new U(e,88.5,n))}buildStatueOfLiberty(){const t=new St,e=440,n=80;t.position.set(e,0,n);const i=new H({color:13162213,roughness:.8}),s=this.materials.statueCopper,o=this.materials.goldTrim,a=new y(new et(28,32,4,18),i);a.position.y=2,a.castShadow=!0,a.receiveShadow=!0,t.add(a);const c=new y(new et(16,20,6,11),i);c.position.y=7,c.castShadow=!0,t.add(c);const l=new y(new O(14,14,14),i);l.position.y=17,l.castShadow=!0,t.add(l);const h=new y(new O(15.5,1.2,15.5),i);h.position.y=24.5,t.add(h);const u=new y(new et(3.2,4.8,17,14),s);u.position.y=33.5,u.castShadow=!0,t.add(u);const d=new y(new re(1.8,12,12),s);d.position.y=43.5,t.add(d);for(let p=0;p<7;p++){const v=(p-3)/7*(Math.PI*.75),_=new y(new _e(.24,2.2,6),s);_.position.set(Math.sin(v)*1.8,44.8,Math.cos(v)*1.1),_.rotation.z=-v*.8,t.add(_)}const f=new y(new et(.55,.65,9.5,8),s);f.position.set(3.2,43.5,.8),f.rotation.z=-.34,t.add(f);const m=new y(new et(1.6,.8,1.5,10),o);m.position.set(4.9,48.5,.8),t.add(m);const x=new y(new _e(.9,2.8,8),new Bt({color:16758531}));x.position.set(4.9,50.8,.8),t.add(x);const g=new cr(16758531,4,40);g.position.set(4.9,51,.8),t.add(g),this.scene.add(t),this.physicsWorld.addStaticBox(e,2,n,15,2,15),this.physicsWorld.addStaticBox(e,17,n,7,7,7),this.physicsWorld.addStaticBox(e,24.5,n,7.5,.6,7.5),this.physicsWorld.addStaticBox(e+4.9,48.5,n+.8,1.6,.75,1.6),this.createObservationElevator("Statue of Liberty Torch Deck",new U(e,4.2,n+12),new U(e+4.2,49.5,n+.8))}createObservationElevator(t,e,n){const i=new H({color:3718648,roughness:.2,metalness:.8,emissive:165063,emissiveIntensity:.6}),s=new y(new et(1.8,2,.3,16),i);s.position.copy(e),this.scene.add(s);const o=new y(new et(1.8,2,.3,16),i);o.position.copy(n),o.position.y-=.15,this.scene.add(o),this.observationElevators.push({name:t,groundPos:e.clone(),topPos:n.clone(),radius:2.8})}createJumpRamps(){const t=new H({color:16219904,roughness:.5,metalness:.2});this.buildInteractiveRamp(0,120,9,16,4.2,0,t),this.buildInteractiveRamp(120,0,9,16,4.2,Math.PI/2,t),this.buildInteractiveRamp(-160,0,9,16,4.2,-Math.PI/2,t)}buildInteractiveRamp(t,e,n,i,s,o,a){const c=new St;c.position.set(t,0,e),c.rotation.y=o;const l=new Fl;l.moveTo(0,0),l.lineTo(0,s),l.lineTo(i,0),l.closePath();const h=new Ca(l,{depth:n,bevelEnabled:!1});h.translate(-i/2,0,-n/2),h.rotateY(Math.PI/2);const u=new y(h,a);u.castShadow=!0,u.receiveShadow=!0,c.add(u),this.scene.add(c),this.physicsWorld.addRampTrigger(t,e,n,i,s,o)}createNightclubDistrict(){const t=new St,e=-80,n=-60;t.position.set(e,0,n);const i=new H({color:988970,roughness:.6}),s=new H({color:959977,roughness:.1,metalness:.9,transparent:!0,opacity:.85}),o=new Bt({color:16711807});new Bt({color:62932});const a=new H({color:8072383,roughness:.2,metalness:.6}),c=new y(new O(26,7.5,24),i);c.position.y=3.75,c.castShadow=!0,c.receiveShadow=!0,t.add(c);const l=new y(new O(24,6,.4),s);l.position.set(0,3.5,12.1),t.add(l);const h=new y(new O(16,2.2,.6),i);h.position.set(0,6.5,12.3),t.add(h);const u=new y(new O(14,1.2,.2),o);u.position.set(0,6.5,12.7),t.add(u);const d=new y(new O(25,.4,23),a);d.position.y=7.5,t.add(d);const f=new y(new O(25.4,1.2,23.4),s);f.position.y=8.1,t.add(f);const m=new y(new O(4.2,1.3,1.8),i);m.position.set(0,8.15,-8.5),t.add(m),[-3.2,3.2].forEach(p=>{const v=new y(new O(1.2,2.4,1.2),i);v.position.set(p,8.7,-8.5),t.add(v)}),this.partyLights=[],[16711765,65484,10027263,16763904].forEach((p,v)=>{const _=new cr(p,2.5,18);_.position.set(-6+v*4,11,-4),t.add(_),this.partyLights.push(_)});const g=new y(new O(1.2,1.1,7),i);g.position.set(9.5,8.05,2),t.add(g),this.scene.add(t),this.physicsWorld.addStaticBox(e,3.75,n,13,3.75,12),this.physicsWorld.addStaticBox(e,7.5,n,12.5,.2,11.5)}createHighwayFlyovers(){const t=new St,e=new H({color:2040865,roughness:.85}),n=new H({color:9741240,roughness:.6}),i=new H({color:14870768,roughness:.4,metalness:.7});new H({color:2829099,roughness:.85});const s=(Ot,Xt,ke,Oe,ii,Hn,si)=>{const Ai=Math.abs(ke-Xt),Ci=(Xt+ke)/2,Ri=(Hn+si)/2+.9,Pi=ii/2;if(Ot==="X"){const An=new y(new O(Ai,1.1,.4),i);An.position.set(Ci,Ri,Oe-Pi),An.rotation.z=Math.atan2(si-Hn,ke-Xt);const R=new y(new O(Ai,1.1,.4),i);R.position.set(Ci,Ri,Oe+Pi),R.rotation.z=Math.atan2(si-Hn,ke-Xt),t.add(An,R)}else if(Ot==="Z"){const An=new y(new O(.4,1.1,Ai),i);An.position.set(Oe-Pi,Ri,Ci),An.rotation.x=-Math.atan2(si-Hn,ke-Xt);const R=new y(new O(.4,1.1,Ai),i);R.position.set(Oe+Pi,Ri,Ci),R.rotation.x=-Math.atan2(si-Hn,ke-Xt),t.add(An,R)}},o=260,a=14,c=11.5,l=new y(new O(o,1.2,a),e);l.position.set(0,c,-50),l.castShadow=!0,l.receiveShadow=!0,t.add(l);const h=new y(new O(o,1.1,.4),i);h.position.set(0,c+.9,-50-a/2);const u=new y(new O(o,1.1,.4),i);u.position.set(0,c+.9,-50+a/2),t.add(h,u);for(let Ot=-100;Ot<=100;Ot+=50){const Xt=new y(new et(1.4,1.8,c,12),n);Xt.position.set(Ot,c/2,-50),Xt.castShadow=!0,t.add(Xt),this.physicsWorld.addStaticBox(Ot,c/2,-50,1.4,c/2,1.4)}const d=70,f=new y(new O(d,1,a),e);f.position.set(-130-d/2,c/2,-50),f.rotation.z=Math.atan2(c,d),t.add(f),s("X",-200,-130,-50,a,0,c);const m=new y(new O(d,1,a),e);m.position.set(130+d/2,c/2,-50),m.rotation.z=-Math.atan2(c,d),t.add(m),s("X",130,200,-50,a,c,0),this.physicsWorld.addFlyover("koramangala_flyover",0,-50,o,a,c,"X"),this.physicsWorld.addFlyoverRamp("k_ramp_west","X",-200,-130,-50,a,0,c),this.physicsWorld.addFlyoverRamp("k_ramp_east","X",130,200,-50,a,c,0);const x=300,g=14,p=8.5,v=new y(new O(x,1.2,g),e);v.position.set(0,p,20),v.castShadow=!0,v.receiveShadow=!0,t.add(v);const _=new y(new O(x,1.1,.4),i);_.position.set(0,p+.9,20-g/2);const w=new y(new O(x,1.1,.4),i);w.position.set(0,p+.9,20+g/2),t.add(_,w);const b=70,E=new y(new O(b,1,g),e);E.position.set(-150-b/2,p/2,20),E.rotation.z=Math.atan2(p,b),t.add(E),s("X",-220,-150,20,g,0,p);const C=new y(new O(b,1,g),e);C.position.set(150+b/2,p/2,20),C.rotation.z=-Math.atan2(p,b),t.add(C),s("X",150,220,20,g,p,0),this.physicsWorld.addFlyover("silkboard_l1",0,20,x,g,p,"X"),this.physicsWorld.addFlyoverRamp("sb_ramp_west","X",-220,-150,20,g,0,p),this.physicsWorld.addFlyoverRamp("sb_ramp_east","X",150,220,20,g,p,0);const P=320,S=14,M=16.5,L=new y(new O(S,1.4,P),e);L.position.set(0,M,20),L.castShadow=!0,L.receiveShadow=!0,t.add(L);const k=new y(new O(.4,1.1,P),i);k.position.set(-S/2,M+1,20);const N=new y(new O(.4,1.1,P),i);N.position.set(S/2,M+1,20),t.add(k,N);const B=70,z=new y(new O(S,1,B),e);z.position.set(0,M/2,-140-B/2),z.rotation.x=-Math.atan2(M,B),t.add(z),s("Z",-210,-140,0,S,0,M);const F=new y(new O(S,1,B),e);F.position.set(0,M/2,180+B/2),F.rotation.x=Math.atan2(M,B),t.add(F),s("Z",180,250,0,S,M,0),this.physicsWorld.addFlyover("silkboard_l2",0,20,P,S,M,"Z"),this.physicsWorld.addFlyoverRamp("sb_ramp_north","Z",-210,-140,0,S,0,M),this.physicsWorld.addFlyoverRamp("sb_ramp_south","Z",180,250,0,S,M,0);for(let Ot=-120;Ot<=160;Ot+=60)if(Math.abs(Ot-20)>15){[-7.2,7.2].forEach(ke=>{const Oe=new y(new et(1.2,1.5,M,12),n);Oe.position.set(ke,M/2,Ot),Oe.castShadow=!0,t.add(Oe),this.physicsWorld.addStaticBox(ke,M/2,Ot,1.2,M/2,1.2)});const Xt=new y(new O(15.5,1.4,2.4),n);Xt.position.set(0,M-1.2,Ot),Xt.castShadow=!0,t.add(Xt)}const Y=document.createElement("canvas");Y.width=1024,Y.height=256;const G=Y.getContext("2d");G.fillStyle="#15803d",G.fillRect(0,0,1024,256),G.strokeStyle="#ffffff",G.lineWidth=10,G.strokeRect(12,12,1e3,232),G.fillStyle="#ffffff",G.font='bold 44px "Inter", sans-serif',G.textAlign="center",G.fillText("ಸಾರಿಗೆ ಜಂಕ್ಷನ್ • SILK BOARD JUNCTION",512,85),G.font='32px "Inter", sans-serif',G.fillText("⬆ ELECTRONIC CITY FLYOVER   ⬅ KORAMANGALA   ➡ HSR LAYOUT",512,155),G.fillText("⬇ BTM LAYOUT 2ND STAGE & BANNERGHATTA ROAD",512,210);const J=new Se(Y),ht=new y(new O(22,5.5,.4),new Bt({map:J}));ht.position.set(0,22,20),t.add(ht);const gt=new H({color:6583435,metalness:.8});[-10,10].forEach(Ot=>{const Xt=new y(new et(.35,.35,6,8),gt);Xt.position.set(Ot,20,20),t.add(Xt)});const ct=new y(new O(7,1.5,240),new H({color:6583435,roughness:.7}));ct.position.set(24,12.5,20),t.add(ct);for(let Ot=-80;Ot<=120;Ot+=45){const Xt=new y(new et(1.2,1.5,12.5,10),n);Xt.position.set(24,6.25,Ot),t.add(Xt),this.physicsWorld.addStaticBox(24,6.25,Ot,1.2,6.25,1.2)}const qt=new St;qt.position.set(24,14.5,10);const K=new H({color:16317180,roughness:.3}),rt=new H({color:8266446,roughness:.4}),xt=new H({color:1483594,roughness:.4}),dt=new H({color:165063,roughness:.1,metalness:.9});for(let Ot=-1;Ot<=1;Ot++){const Xt=new y(new O(3.6,3.2,22),K);Xt.position.set(0,0,Ot*24),qt.add(Xt);const ke=new y(new O(3.65,.4,22),rt);ke.position.set(0,-.4,Ot*24),qt.add(ke);const Oe=new y(new O(3.65,.3,22),xt);Oe.position.set(0,.4,Ot*24),qt.add(Oe);const ii=new y(new O(3.7,1,18),dt);ii.position.set(0,.5,Ot*24),qt.add(ii)}t.add(qt),this.createBmtcBus(t,-18,0,0),this.createAutoRickshaw(t,18,-12,.3),this.createAutoRickshaw(t,22,-14,.5);const Ut=260,Ht=14,Mt=10,oe=new y(new O(Ht,1.2,Ut),e);oe.position.set(200,Mt,-250),oe.castShadow=!0,oe.receiveShadow=!0,t.add(oe);const at=new y(new O(.4,1.1,Ut),i);at.position.set(200-Ht/2,Mt+.9,-250);const ot=new y(new O(.4,1.1,Ut),i);ot.position.set(200+Ht/2,Mt+.9,-250),t.add(at,ot);for(let Ot=-360;Ot<=-140;Ot+=50){const Xt=new y(new et(1.4,1.8,Mt,10),n);Xt.position.set(200,Mt/2,Ot),Xt.castShadow=!0,t.add(Xt),this.physicsWorld.addStaticBox(200,Mt/2,Ot,1.4,Mt/2,1.4)}const D=70,Ft=new y(new O(Ht,1,D),e);Ft.position.set(200,Mt/2,-120+D/2),Ft.rotation.x=Math.atan2(Mt,D),t.add(Ft),s("Z",-50,-120,200,Ht,0,Mt);const lt=new y(new O(Ht,1,D),e);lt.position.set(200,Mt/2,-380-D/2),lt.rotation.x=-Math.atan2(Mt,D),t.add(lt),s("Z",-380,-450,200,Ht,Mt,0),this.physicsWorld.addFlyover("hebbal_flyover",200,-250,Ut,Ht,Mt,"Z"),this.physicsWorld.addFlyoverRamp("hebbal_ramp_south","Z",-50,-120,200,Ht,0,Mt),this.physicsWorld.addFlyoverRamp("hebbal_ramp_north","Z",-380,-450,200,Ht,Mt,0);const At=document.createElement("canvas");At.width=512,At.height=128;const ut=At.getContext("2d");ut.fillStyle="#15803d",ut.fillRect(0,0,512,128),ut.fillStyle="#ffffff",ut.font='bold 32px "Inter", sans-serif',ut.textAlign="center",ut.fillText("ಹೆಬ್ಬಾಳ ಫ್ಲೈಓವರ್ • HEBBAL FLYOVER",256,50),ut.font='22px "Inter", sans-serif',ut.fillText("⬆ AIRPORT & NANDI HILLS  |  ⬇ CITY CENTER",256,95);const kt=new y(new Kt(16,3.2),new Bt({map:new Se(At)}));kt.position.set(200,15,-135),t.add(kt);const _t=180,I=14,T=9,q=new y(new O(I,1.2,_t),e);q.position.set(40,T,180),q.castShadow=!0,q.receiveShadow=!0,t.add(q);const tt=new y(new O(.4,1.1,_t),i);tt.position.set(40-I/2,T+.9,180);const st=new y(new O(.4,1.1,_t),i);st.position.set(40+I/2,T+.9,180),t.add(tt,st);for(let Ot=110;Ot<=250;Ot+=45){const Xt=new y(new et(1.3,1.6,T,10),n);Xt.position.set(40,T/2,Ot),Xt.castShadow=!0,t.add(Xt),this.physicsWorld.addStaticBox(40,T/2,Ot,1.3,T/2,1.3)}const Q=60,Dt=new y(new O(I,1,Q),e);Dt.position.set(40,T/2,90-Q/2),Dt.rotation.x=-Math.atan2(T,Q),t.add(Dt),s("Z",30,90,40,I,0,T);const vt=new y(new O(I,1,Q),e);vt.position.set(40,T/2,270+Q/2),vt.rotation.x=Math.atan2(T,Q),t.add(vt),s("Z",270,330,40,I,T,0),this.physicsWorld.addFlyover("double_road_flyover",40,180,_t,I,T,"Z"),this.physicsWorld.addFlyoverRamp("dr_ramp_north","Z",30,90,40,I,0,T),this.physicsWorld.addFlyoverRamp("dr_ramp_south","Z",270,330,40,I,T,0);const Tt=180,Yt=14,it=10.5,Rt=new y(new O(Yt,1.2,Tt),e);Rt.position.set(240,it,280),Rt.castShadow=!0,Rt.receiveShadow=!0,t.add(Rt);const Gt=new y(new O(.4,1.1,Tt),i);Gt.position.set(240-Yt/2,it+.9,280);const Wt=new y(new O(.4,1.1,Tt),i);Wt.position.set(240+Yt/2,it+.9,280),t.add(Gt,Wt);for(let Ot=210;Ot<=350;Ot+=45){const Xt=new y(new et(1.4,1.7,it,10),n);Xt.position.set(240,it/2,Ot),Xt.castShadow=!0,t.add(Xt),this.physicsWorld.addStaticBox(240,it/2,Ot,1.4,it/2,1.4)}const Ct=60,ne=new y(new O(Yt,1,Ct),e);ne.position.set(240,it/2,190-Ct/2),ne.rotation.x=-Math.atan2(it,Ct),t.add(ne),s("Z",130,190,240,Yt,0,it);const $t=new y(new O(Yt,1,Ct),e);$t.position.set(240,it/2,370+Ct/2),$t.rotation.x=Math.atan2(it,Ct),t.add($t),s("Z",370,430,240,Yt,it,0),this.physicsWorld.addFlyover("yeshwanthpur_flyover",240,280,Tt,Yt,it,"Z"),this.physicsWorld.addFlyoverRamp("yp_ramp_north","Z",130,190,240,Yt,0,it),this.physicsWorld.addFlyoverRamp("yp_ramp_south","Z",370,430,240,Yt,it,0);const he=160,V=14,mt=9.5,$=new y(new O(he,1.2,V),e);$.position.set(-150,mt,-70),$.castShadow=!0,$.receiveShadow=!0,t.add($);const nt=new y(new O(he,1.1,.4),i);nt.position.set(-150,mt+.9,-70-V/2);const Et=new y(new O(he,1.1,.4),i);Et.position.set(-150,mt+.9,-70+V/2),t.add(nt,Et);for(let Ot=-210;Ot<=-90;Ot+=40){const Xt=new y(new et(1.3,1.6,mt,10),n);Xt.position.set(Ot,mt/2,-70),Xt.castShadow=!0,t.add(Xt),this.physicsWorld.addStaticBox(Ot,mt/2,-70,1.3,mt/2,1.3)}const wt=60,Zt=new y(new O(wt,1,V),e);Zt.position.set(-230-wt/2,mt/2,-70),Zt.rotation.z=Math.atan2(mt,wt),t.add(Zt),s("X",-290,-230,-70,V,0,mt);const ve=new y(new O(wt,1,V),e);ve.position.set(-70+wt/2,mt/2,-70),ve.rotation.z=-Math.atan2(mt,wt),t.add(ve),s("X",-70,-10,-70,V,mt,0),this.physicsWorld.addFlyover("vidhana_ub_link",-150,-70,he,V,mt,"X"),this.physicsWorld.addFlyoverRamp("vub_ramp_west","X",-290,-230,-70,V,0,mt),this.physicsWorld.addFlyoverRamp("vub_ramp_east","X",-70,-10,-70,V,mt,0);const Ae=140,te=14,me=8,qe=new y(new O(Ae,1.2,te),e);qe.position.set(-90,me,140),qe.castShadow=!0,qe.receiveShadow=!0,t.add(qe);const hs=new y(new O(Ae,1.1,.4),i);hs.position.set(-90,me+.9,140-te/2);const ds=new y(new O(Ae,1.1,.4),i);ds.position.set(-90,me+.9,140+te/2),t.add(hs,ds);for(let Ot=-140;Ot<=-40;Ot+=35){const Xt=new y(new et(1.2,1.5,me,10),n);Xt.position.set(Ot,me/2,140),Xt.castShadow=!0,t.add(Xt),this.physicsWorld.addStaticBox(Ot,me/2,140,1.2,me/2,1.2)}const Ye=50,ni=new y(new O(Ye,1,te),e);ni.position.set(-160-Ye/2,me/2,140),ni.rotation.z=Math.atan2(me,Ye),t.add(ni),s("X",-210,-160,140,te,0,me);const Ti=new y(new O(Ye,1,te),e);Ti.position.set(-20+Ye/2,me/2,140),Ti.rotation.z=-Math.atan2(me,Ye),t.add(Ti),s("X",-20,30,140,te,me,0),this.physicsWorld.addFlyover("btm_jayadeva_flyover",-90,140,Ae,te,me,"X"),this.physicsWorld.addFlyoverRamp("btm_ramp_west","X",-210,-160,140,te,0,me),this.physicsWorld.addFlyoverRamp("btm_ramp_east","X",-20,30,140,te,me,0),this.scene.add(t)}createCityZoo(){const t=new St;t.position.set(-160,0,-140);const e=new y(new Kt(110,85),new H({color:6319160,roughness:.9}));e.rotation.x=-Math.PI/2,e.position.set(0,.04,0),e.receiveShadow=!0,t.add(e);const n=new H({color:7893356,roughness:.8}),i=new H({color:5779214,roughness:.85}),s=new y(new O(2.4,9,2.4),n);s.position.set(-9,4.5,38),t.add(s);const o=new y(new O(2.4,9,2.4),n);o.position.set(9,4.5,38),t.add(o);const a=new y(new O(22,2.2,1.6),i);a.position.set(0,8.8,38),t.add(a);const c=document.createElement("canvas");c.width=512,c.height=128;const l=c.getContext("2d");l.fillStyle="#283618",l.fillRect(0,0,512,128),l.fillStyle="#fefae0",l.font='bold 36px "Inter", sans-serif',l.textAlign="center",l.fillText("🦁 SAFARI & CITY ZOO 🦒",256,75);const h=new Se(c),u=new y(new Kt(16,1.8),new Bt({map:h}));u.position.set(0,8.8,38.9),t.add(u);const d=new H({color:13935475,roughness:.7}),f=new y(new O(3.5,3.2,3),d);f.position.set(-14,1.6,38),t.add(f);const m=new y(new O(3.5,3.2,3),d);m.position.set(14,1.6,38),t.add(m);const x=new H({color:8736014,roughness:.9});for(let B=-50;B<=50;B+=10)if(Math.abs(B)>10){const z=new y(new et(.2,.2,2.4,6),x);z.position.set(B,1.2,40),t.add(z);const F=new y(new O(10,.25,.2),x);F.position.set(B-5,1.5,40),t.add(F)}const g=new H({color:11051678,roughness:.92}),p=new y(new nn(8,1),g);p.scale.set(1.6,.8,1.4),p.position.set(-30,3.5,-10),t.add(p);const v=new St;v.position.set(-30,8.2,-10),v.rotation.y=.8;const _=new H({color:13935475,roughness:.8}),w=new H({color:4528643,roughness:.9}),b=new y(new O(2.4,1.3,1.2),_);b.position.y=1.2,v.add(b);const E=new et(.18,.2,1.1,6);[[-.9,.55,-.4],[-.9,.55,.4],[.9,.55,-.4],[.9,.55,.4]].forEach(([B,z,F])=>{const Y=new y(E,_);Y.position.set(B,z,F),v.add(Y)});const C=new y(new re(1,8,8),w);C.scale.set(1.1,1.3,1.1),C.position.set(1.4,1.8,0),v.add(C);const P=new y(new O(.8,.7,.7),_);P.position.set(1.7,1.8,0),v.add(P);const S=new y(new O(.5,.4,.4),_);S.position.set(2.2,1.7,0),v.add(S);const M=new y(new et(.06,.08,1.6,4),_);M.rotation.z=-1.1,M.position.set(-1.8,1.2,0),v.add(M);const L=new y(new re(.18,4,4),w);L.position.set(-2.4,.6,0),v.add(L),t.add(v);const k=new y(new Kt(45,45),new H({color:14530706,roughness:.95}));k.rotation.x=-Math.PI/2,k.position.set(25,.05,-10),t.add(k),this.createAcaciaTree(t,15,-20),this.createAcaciaTree(t,38,-5),this.createGiraffe(t,20,-12,.4),this.createGiraffe(t,32,-18,-.6),this.createZebra(t,24,0,1.2),this.createZebra(t,34,5,-1.8);const N=new y(new et(14,15,.6,18),new H({color:165063,roughness:.15,metalness:.3}));N.position.set(0,.2,-20),t.add(N),this.createElephant(t,-3,-16,.2),this.scene.add(t),this.physicsWorld.addStaticBox(-190,4,-150,12,4,12),this.physicsWorld.addStaticBox(-160,4.5,-102,12,4.5,2),this.physicsWorld.addStaticBox(-160,2,-185,55,2,2),this.physicsWorld.addStaticBox(-215,2,-140,2,2,45),this.physicsWorld.addStaticBox(-105,2,-140,2,2,45)}createAcaciaTree(t,e,n){const i=new St;i.position.set(e,0,n);const s=new H({color:5779214,roughness:.9}),o=new H({color:4881497,roughness:.8}),a=new y(new et(.35,.6,8,7),s);a.position.set(0,4,0),a.rotation.z=.12,i.add(a);const c=new y(new et(4.5,4,.9,10),o);c.position.set(.6,8.2,0),i.add(c);const l=new y(new et(2.8,2.2,.7,8),o);l.position.set(1.5,9.1,.4),i.add(l),t.add(i)}createGiraffe(t,e,n,i){const s=new St;s.position.set(e,0,n),s.rotation.y=i;const o=new H({color:13273604,roughness:.75}),a=new H({color:7421714,roughness:.85}),c=new et(.16,.2,3.4,6);[[-.6,1.7,-.4],[-.6,1.7,.4],[.6,1.7,-.4],[.6,1.7,.4]].forEach(([x,g,p])=>{const v=new y(c,o);v.position.set(x,g,p),s.add(v)});const l=new y(new O(1.8,1.4,1.1),o);l.position.set(0,3.8,0),l.rotation.z=.25,s.add(l);const h=new y(new et(.24,.38,4.2,7),o);h.position.set(.9,5.8,0),h.rotation.z=-.3,s.add(h);const u=new y(new O(.8,.5,.45),o);u.position.set(1.7,7.8,0),s.add(u);const d=new y(new O(.4,.3,.35),a);d.position.set(2.2,7.7,0),s.add(d);const f=new y(new et(.05,.05,.4),a);f.position.set(1.6,8.2,-.15),s.add(f);const m=new y(new et(.05,.05,.4),a);m.position.set(1.6,8.2,.15),s.add(m),t.add(s)}createZebra(t,e,n,i){const s=new St;s.position.set(e,0,n),s.rotation.y=i;const o=new H({color:16317180,roughness:.6}),a=new H({color:988970,roughness:.7}),c=new y(new O(2.1,1.2,1),o);c.position.set(0,1.5,0),s.add(c);for(let f=-.7;f<=.7;f+=.28){const m=new y(new O(.12,1.24,1.05),a);m.position.set(f,1.5,0),s.add(m)}const l=new et(.14,.16,1.2,6);[[-.8,.6,-.35],[-.8,.6,.35],[.8,.6,-.35],[.8,.6,.35]].forEach(([f,m,x])=>{const g=new y(l,o);g.position.set(f,m,x),s.add(g)});const h=new y(new O(.5,1.2,.5),o);h.position.set(.9,2.2,0),h.rotation.z=-.4,s.add(h);const u=new y(new O(.7,.5,.45),o);u.position.set(1.4,2.7,0),s.add(u);const d=new y(new O(.35,.3,.35),a);d.position.set(1.8,2.6,0),s.add(d),t.add(s)}createElephant(t,e,n,i){const s=new St;s.position.set(e,0,n),s.rotation.y=i;const o=new H({color:6583435,roughness:.9}),a=new H({color:16707722,roughness:.3}),c=new y(new O(3.6,2.5,2.3),o);c.position.set(0,2.4,0),s.add(c);const l=new et(.42,.46,1.6,8);[[-1.3,.8,-.8],[-1.3,.8,.8],[1.3,.8,-.8],[1.3,.8,.8]].forEach(([v,_,w])=>{const b=new y(l,o);b.position.set(v,_,w),s.add(b)});const h=new y(new O(1.6,1.6,1.6),o);h.position.set(2.3,2.9,0),s.add(h);const u=new O(.15,1.8,1.4),d=new y(u,o);d.position.set(2,3.1,-1.5),d.rotation.y=-.3,s.add(d);const f=new y(u,o);f.position.set(2,3.1,1.5),f.rotation.y=.3,s.add(f);const m=new y(new et(.3,.38,1.6,8),o);m.position.set(3.1,2.3,0),m.rotation.z=-.8,s.add(m);const x=new y(new et(.2,.28,1.4,8),o);x.position.set(3.8,3.1,0),x.rotation.z=.6,s.add(x);const g=new y(new _e(.12,1.5,6),a);g.position.set(3.1,2.2,-.5),g.rotation.z=-.5,s.add(g);const p=new y(new _e(.12,1.5,6),a);p.position.set(3.1,2.2,.5),p.rotation.z=-.5,s.add(p),t.add(s)}createBankAndSchoolDistricts(){const t=new St;t.position.set(-60,0,40);const e=new H({color:16317180,roughness:.35}),n=new H({color:9741240,roughness:.8}),i=new H({color:16096779,roughness:.25,metalness:.85}),s=new y(new O(40,2.2,30),n);s.position.y=1.1,s.receiveShadow=!0,t.add(s);const o=new y(new O(36,14,24),e);o.position.set(0,9.2,-2),o.castShadow=!0,t.add(o);const a=new et(.9,1.1,13,14);for(let K=-14;K<=14;K+=5.6){const rt=new y(a,e);rt.position.set(K,8.7,10.5),rt.castShadow=!0,t.add(rt)}const c=new y(new _e(22,5.5,4),e);c.rotation.y=Math.PI/4,c.position.set(0,18,5),t.add(c);const l=new y(new et(2.2,2.2,.4,16),i);l.rotation.x=Math.PI/2,l.position.set(0,17.5,11),t.add(l);const h=document.createElement("canvas");h.width=512,h.height=96;const u=h.getContext("2d");u.fillStyle="#0f172a",u.fillRect(0,0,512,96),u.fillStyle="#f59e0b",u.font='bold 32px "Inter", sans-serif',u.textAlign="center",u.fillText("🏛️ GRAND RESERVE BANK",256,60);const d=new Se(h),f=new y(new Kt(18,2.2),new Bt({map:d}));f.position.set(0,14.8,10.8),t.add(f);const m=new y(new O(5.5,7.5,.4),new H({color:7877903,roughness:.4,metalness:.8}));m.position.set(0,5.9,10.2),t.add(m);const x=new St;x.position.set(16,0,18),x.rotation.y=.35;const g=new H({color:3359061,roughness:.5,metalness:.7}),p=new H({color:1409085,roughness:.3}),v=new y(new O(3.2,2.8,6.8),g);v.position.y=1.8,v.castShadow=!0,x.add(v);const _=new y(new O(3.25,.4,6.85),p);_.position.y=1.8,x.add(_);const w=new et(.55,.55,.4,12);w.rotateZ(Math.PI/2);const b=new H({color:988970,roughness:.9});[[-1.6,.55,-2],[1.6,.55,-2],[-1.6,.55,2],[1.6,.55,2]].forEach(([K,rt,xt])=>{const dt=new y(w,b);dt.position.set(K,rt,xt),x.add(dt)});const E=new H({color:5779214,roughness:.85}),C=new y(new O(1.8,.25,1.8),E);C.position.set(0,.15,-4.5),x.add(C);const P=new O(.5,.2,.3);for(let K=-.5;K<=.5;K+=.5)for(let rt=-.5;rt<=.5;rt+=.4){const xt=new y(P,i);xt.position.set(K,.4,-4.5+rt),x.add(xt)}t.add(x),this.scene.add(t),this.physicsWorld.addStaticBox(-60,8,38,19,8,14);const S=new St;S.position.set(-180,0,120);const M=new H({color:10033947,roughness:.85});new H({color:16317180,roughness:.4});const L=new H({color:1013358,roughness:.6,metalness:.4}),k=new y(new O(46,14,22),M);k.position.y=7,k.castShadow=!0,S.add(k);const N=new y(new O(9,24,9),M);N.position.set(0,12,5),S.add(N);const B=new y(new et(2,2,.3,16),new Bt({color:16777215}));B.rotation.x=Math.PI/2,B.position.set(0,21,9.6),S.add(B);const z=new y(new _e(5.5,8,4),L);z.rotation.y=Math.PI/4,z.position.set(0,28,5),S.add(z);const F=document.createElement("canvas");F.width=512,F.height=96;const Y=F.getContext("2d");Y.fillStyle="#1e3a8a",Y.fillRect(0,0,512,96),Y.fillStyle="#facc15",Y.font='bold 30px "Inter", sans-serif',Y.textAlign="center",Y.fillText("🏫 SPRINGFIELD HIGH ACADEMY",256,60);const G=new y(new Kt(18,2.2),new Bt({map:new Se(F)}));G.position.set(0,10.5,11.2),S.add(G),this.createSchoolBus(S,-16,22,0),this.createSchoolBus(S,16,22,0);const J=new y(new Kt(68,44),new H({color:2976335,roughness:.85}));J.rotation.x=-Math.PI/2,J.position.set(55,.05,-5),S.add(J);const ht=new Bt({color:16777215}),gt=new y(new Ra(6.5,6.8,24),ht);gt.rotation.x=-Math.PI/2,gt.position.set(55,.07,-5),S.add(gt);const ct=new H({color:16777215,roughness:.3});[[-30,0],[30,Math.PI]].forEach(([K,rt])=>{const xt=new St;xt.position.set(55+K,0,-5),xt.rotation.y=rt;const dt=new y(new et(.12,.12,3.2),ct);dt.position.set(0,1.6,-3.5),xt.add(dt);const Ut=new y(new et(.12,.12,3.2),ct);Ut.position.set(0,1.6,3.5),xt.add(Ut);const Ht=new y(new et(.12,.12,7),ct);Ht.rotation.x=Math.PI/2,Ht.position.set(0,3.2,0),xt.add(Ht),S.add(xt)});const qt=new y(new O(42,4.5,8),new H({color:4674921,roughness:.8}));qt.position.set(55,2.25,-32),S.add(qt),this.scene.add(S),this.physicsWorld.addStaticBox(-180,7,120,24,7,12),this.physicsWorld.addStaticBox(-125,2.25,88,22,2.5,5)}createSchoolBus(t,e,n,i){const s=new St;s.position.set(e,0,n),s.rotation.y=i;const o=new H({color:16096779,roughness:.4}),a=new H({color:1120295,roughness:.8}),c=new H({color:3718648,roughness:.1,metalness:.8}),l=new y(new O(3,3,9.5),o);l.position.y=2.1,s.add(l);const h=new y(new O(2.6,1.8,2.5),o);h.position.set(0,1.5,5.2),s.add(h);const u=new y(new O(3.05,.25,9.6),a);u.position.y=1.4,s.add(u);const d=new y(new Kt(2.6,1.2),c);d.position.set(0,2.8,4.8),s.add(d);const f=new et(.65,.65,.45,14);f.rotateZ(Math.PI/2),[[-1.5,.65,-2.8],[1.5,.65,-2.8],[-1.5,.65,3],[1.5,.65,3]].forEach(([m,x,g])=>{const p=new y(f,a);p.position.set(m,x,g),s.add(p)}),t.add(s)}createGasStationAndHospital(){const t=new St;t.position.set(-100,0,20);const e=new y(new O(24,1.6,16),new H({color:14427686,roughness:.5}));e.position.set(0,6.2,0),t.add(e);const n=new y(new O(24.4,.4,16.4),new H({color:16436245,roughness:.3}));n.position.set(0,6.2,0),t.add(n);const i=new et(.35,.35,6,8),s=new H({color:14870768,roughness:.3,metalness:.6});[[-8,-5],[8,-5],[-8,5],[8,5]].forEach(([Y,G])=>{const J=new y(i,s);J.position.set(Y,3,G),t.add(J)});const o=new H({color:16777215,roughness:.4});[[-8,-5],[8,-5],[-8,5],[8,5]].forEach(([Y,G])=>{const J=new y(new O(2.4,.35,3.8),s);J.position.set(Y,.18,G),t.add(J);const ht=new y(new O(1.2,2.4,1.8),o);ht.position.set(Y,1.4,G),t.add(ht)});const a=new y(new O(22,5.5,12),new H({color:15857145,roughness:.8}));a.position.set(0,2.75,-18),t.add(a);const c=new St;c.position.set(0,6.5,-18);const l=new H({color:14251782,roughness:.7}),h=new H({color:4528643,roughness:.9}),u=new Bt({color:16436245}),d=new Bt({color:2278750}),f=new y(new et(2.2,2,.5,14),l);f.position.y=.25,c.add(f);const m=new y(new et(2.3,2.3,.45,14),h);m.position.y=.7,c.add(m);const x=new y(new O(3,.1,3),u);x.position.y=.95,x.rotation.y=.4,c.add(x);const g=new y(new et(2.4,2.4,.2,12),d);g.position.y=1.1,c.add(g);const p=new y(new re(2.2,14,8),l);p.position.y=1.2,p.scale.set(1,.55,1),c.add(p),t.add(c),this.scene.add(t),this.physicsWorld.addStaticBox(-100,3,2,12,3,7);const v=new St;v.position.set(60,0,140);const _=new y(new O(34,26,24),new H({color:16777215,roughness:.35}));_.position.y=13,_.castShadow=!0,v.add(_);const w=new Bt({color:15680580}),b=new y(new O(6,1.8,.4),w);b.position.set(0,21,12.3),v.add(b);const E=new y(new O(1.8,6,.4),w);E.position.set(0,21,12.3),v.add(E);const C=new y(new et(8,8,.4,16),new H({color:3359061,roughness:.8}));C.position.set(0,26.2,0),v.add(C);const P=new St;P.position.set(14,0,18);const S=new H({color:16317180,roughness:.4}),M=new y(new O(2.8,2.6,6.2),S);M.position.y=1.6,P.add(M);const L=new y(new O(2.85,.4,6.25),w);L.position.y=1.5,P.add(L);const k=new y(new O(1.6,.25,.5),new Bt({color:3900150}));k.position.set(0,3,1.2),P.add(k),v.add(P);const N=new y(new O(20,12,18),new H({color:1976635,roughness:.85}));N.position.set(-28,6,0),v.add(N);const B=new y(new O(12,1.8,.3),new Bt({color:1920728}));B.position.set(-28,9,9.2),v.add(B);const z=new y(new et(.12,.25,16,6),s);z.position.set(-28,20,0),v.add(z);const F=new y(new re(.3,6,6),new Bt({color:15680580}));F.position.set(-28,28,0),v.add(F),this.scene.add(v),this.physicsWorld.addStaticBox(60,13,140,18,13,13),this.physicsWorld.addStaticBox(32,6,140,11,6,10)}createCityVegetation(){const t=[{cx:-50,cz:-60,count:55,radius:65,types:["cherry","oak","maple"]},{cx:235,cz:-80,count:65,radius:95,types:["willow","palm","cherry"]},{cx:0,cz:-360,count:90,radius:150,types:["pine","oak"]},{cx:-200,cz:80,count:60,radius:80,types:["maple","oak","pine"]},{cx:160,cz:180,count:50,radius:75,types:["cherry","maple","oak"]},{cx:-160,cz:-140,count:35,radius:45,types:["palm","oak"]}];let e=42;function n(){return e=(e*9301+49297)%233280,e/233280}t.forEach(i=>{for(let s=0;s<i.count;s++){const o=n()*Math.PI*2,a=Math.sqrt(n())*i.radius,c=i.cx+Math.cos(o)*a,l=i.cz+Math.sin(o)*a;if(Math.abs(c)<14||Math.abs(l)<14||c>140&&c<450&&l<-260)continue;const h=i.types[Math.floor(n()*i.types.length)],u=.85+n()*.45;switch(h){case"oak":this.createOakTree(c,l,u);break;case"maple":this.createMapleTree(c,l,u);break;case"cherry":this.createCherryBlossomTree(c,l,u);break;case"pine":this.createPineTree(c,l,u);break;case"willow":this.createWillowTree(c,l,u);break;case"palm":this.createPalmTree(c,l,u);break}}}),this.createStreetFurniture()}createOakTree(t,e,n=1){const i=new St;i.position.set(t,0,e),i.scale.set(n,n,n);const s=new y(new et(.35,.55,4.2,7),new H({color:6045747,roughness:.9}));s.position.y=2.1,s.castShadow=!0,i.add(s);const o=new H({color:2976335,roughness:.75}),a=new y(new re(2.4,8,8),o);a.position.y=4.8,a.scale.set(1.2,.9,1.2),a.castShadow=!0,i.add(a);const c=new y(new re(1.8,7,7),o);c.position.set(.6,6.2,.3),c.castShadow=!0,i.add(c),this.scene.add(i)}createMapleTree(t,e,n=1){const i=new St;i.position.set(t,0,e),i.scale.set(n,n,n);const s=new y(new et(.3,.48,4,7),new H({color:4863269,roughness:.9}));s.position.y=2,s.castShadow=!0,i.add(s);const o=new H({color:14239759,roughness:.75}),a=new y(new nn(2.3,1),o);a.position.y=4.6,a.castShadow=!0,i.add(a);const c=new y(new nn(1.6,1),new H({color:15764480}));c.position.set(.3,6,-.2),c.castShadow=!0,i.add(c),this.scene.add(i)}createCherryBlossomTree(t,e,n=1){const i=new St;i.position.set(t,0,e),i.scale.set(n,n,n);const s=new y(new et(.28,.42,3.8,7),new H({color:4008735,roughness:.9}));s.position.y=1.9,s.rotation.z=.08,s.castShadow=!0,i.add(s);const o=new H({color:16020150,roughness:.8}),a=new y(new re(2.2,8,8),o);a.position.set(0,4.4,0),a.scale.set(1.2,.85,1.2),a.castShadow=!0,i.add(a);const c=new H({color:16502760,roughness:.8}),l=new y(new re(1.6,7,7),c);l.position.set(-.4,5.5,.4),l.castShadow=!0,i.add(l),this.scene.add(i)}createPineTree(t,e,n=1){const i=new St;i.position.set(t,0,e),i.scale.set(n,n,n);const s=new y(new et(.28,.45,5,7),new H({color:4333574,roughness:.95}));s.position.y=2.5,s.castShadow=!0,i.add(s);const o=new H({color:1332013,roughness:.85}),a=new y(new _e(2.4,3.2,7),o);a.position.y=4.2,a.castShadow=!0,i.add(a);const c=new y(new _e(1.8,2.8,7),o);c.position.y=6.2,c.castShadow=!0,i.add(c);const l=new y(new _e(1.2,2.2,7),o);l.position.y=7.8,l.castShadow=!0,i.add(l),this.scene.add(i)}createWillowTree(t,e,n=1){const i=new St;i.position.set(t,0,e),i.scale.set(n,n,n);const s=new y(new et(.4,.6,4.5,7),new H({color:6045747,roughness:.9}));s.position.y=2.25,s.castShadow=!0,i.add(s);const o=new H({color:5405039,roughness:.8}),a=new y(new et(2.6,1.8,3.8,8),o);a.position.y=4.8,a.castShadow=!0,i.add(a),this.scene.add(i)}createPalmTree(t,e,n=1){const i=new St;i.position.set(t,0,e),i.scale.set(n,n,n);const s=new H({color:7893356,roughness:.85}),o=new y(new et(.22,.38,7.5,7),s);o.position.set(.4,3.75,0),o.rotation.z=-.12,o.castShadow=!0,i.add(o);const a=new H({color:1483594,roughness:.7,side:Mn});for(let c=0;c<6;c++){const l=c/6*Math.PI*2,h=new y(new Kt(.9,3.2),a);h.position.set(.8+Math.cos(l)*1.5,7.4,Math.sin(l)*1.5),h.rotation.set(.7,l,.4),i.add(h)}this.scene.add(i)}createStreetFurniture(){const t=new H({color:3359061,roughness:.4,metalness:.8}),e=new Bt({color:16707722});[[-12,-90],[12,-90],[-12,-40],[12,-40],[-12,40],[12,40],[-12,90],[12,90],[-90,-12],[-90,12],[-40,-12],[-40,12],[40,-12],[40,12],[90,-12],[90,12]].forEach(([a,c])=>{const l=new St;l.position.set(a,0,c);const h=new y(new et(.12,.16,7.5,8),t);h.position.y=3.75,l.add(h);const u=new y(new O(.12,.12,1.8),t);u.position.set(0,7.4,.8),l.add(u);const d=new y(new O(.4,.2,.6),e);d.position.set(0,7.3,1.6),l.add(d),this.scene.add(l)});const i=new H({color:7877903,roughness:.8}),s=new H({color:1976635,roughness:.6,metalness:.7});for(let a=-70;a<=70;a+=28)[-15,15].forEach(c=>{const l=new St;l.position.set(c,0,a),l.rotation.y=c>0?-Math.PI/2:Math.PI/2;const h=new y(new O(2.4,.1,.7),i);h.position.y=.45,l.add(h);const u=new y(new O(2.4,.6,.1),i);u.position.set(0,.8,-.3),l.add(u);const d=new y(new O(.1,.5,.7),s);d.position.set(-1,.25,0),l.add(d);const f=new y(new O(.1,.5,.7),s);f.position.set(1,.25,0),l.add(f),this.scene.add(l)});[{x:-28,z:-35,rotY:.2,title:"🥤 SPRUNK",text:"A Taste Of Things To Come!",bg:"#15803d",fg:"#facc15"},{x:28,z:35,rotY:-.2,title:"🍗 CLUCKIN BELL",text:"Taste The Cock-a-Doodle-Doo!",bg:"#b91c1c",fg:"#ffffff"},{x:-55,z:80,rotY:1.5,title:"🏦 MAZE BANK",text:"Invest in Your Future Today",bg:"#0369a1",fg:"#ffffff"},{x:55,z:-80,rotY:-1.5,title:"✈️ FLYUS",text:"Non-Stop Direct To Liberty City",bg:"#1d4ed8",fg:"#ffffff"}].forEach(a=>{this.createBillboard(a.x,a.z,a.rotY,a.title,a.text,a.bg,a.fg)})}createBillboard(t,e,n,i,s,o,a){const c=new St;c.position.set(t,0,e),c.rotation.y=n;const l=new y(new et(.4,.5,12,8),new H({color:4674921,roughness:.5,metalness:.8}));l.position.y=6,l.castShadow=!0,c.add(l);const h=document.createElement("canvas");h.width=512,h.height=256;const u=h.getContext("2d");u.fillStyle=o,u.fillRect(0,0,512,256),u.strokeStyle=a,u.lineWidth=8,u.strokeRect(10,10,492,236),u.fillStyle=a,u.font='bold 44px "Inter", sans-serif',u.textAlign="center",u.fillText(i,256,110),u.font='22px "Inter", sans-serif',u.fillText(s,256,170);const d=new Se(h),f=new Bt({map:d}),m=new y(new O(16,8,.8),f);m.position.y=15,m.castShadow=!0,c.add(m),this.scene.add(c),this.physicsWorld.addStaticBox(t,6,e,1,6,1)}createAutoRickshaw(t,e,n,i){const s=new St;s.position.set(e,0,n),s.rotation.y=i;const o=new H({color:16436245,roughness:.35}),a=new H({color:1409085,roughness:.4}),c=new H({color:988970,roughness:.85}),l=new H({color:14870768,roughness:.2,metalness:.8}),h=new H({color:3718648,roughness:.1,metalness:.8,transparent:!0,opacity:.75}),u=new y(new O(1.6,.7,2.6),a);u.position.y=.65,s.add(u);const d=new y(new O(1.55,.6,2.5),o);d.position.set(0,1.6,.05),s.add(d);const f=new et(.04,.04,.8,6);[[-.7,-1.1],[.7,-1.1],[-.7,1.1],[.7,1.1]].forEach(([b,E])=>{const C=new y(f,c);C.position.set(b,1.2,E),s.add(C)});const m=new y(new Kt(1.4,.65),h);m.position.set(0,1.3,1.25),s.add(m);const x=new et(.32,.32,.22,12);x.rotateZ(Math.PI/2);const g=new y(x,c);g.position.set(0,.32,1.2),s.add(g);const p=new y(x,c);p.position.set(-.75,.32,-.7),s.add(p);const v=new y(x,c);v.position.set(.75,.32,-.7),s.add(v);const _=new y(new et(.12,.12,.1,8),l);_.rotation.x=Math.PI/2,_.position.set(0,.7,1.36),s.add(_);const w=new y(new O(.18,.12,.1),new Bt({color:15680580}));w.position.set(.35,1,.8),s.add(w),t.add(s)}createBmtcBus(t,e,n,i){const s=new St;s.position.set(e,0,n),s.rotation.y=i;const o=new H({color:165063,roughness:.35}),a=new H({color:2278750,roughness:.35}),c=new H({color:988970,roughness:.1,metalness:.85}),l=new H({color:1976635,roughness:.9}),h=new y(new O(3.2,3.2,11.5),o);h.position.y=1.9,s.add(h);const u=new y(new O(3.25,.5,11.55),a);u.position.y=1.6,s.add(u);const d=new y(new O(3.3,1.1,10.5),c);d.position.y=2.4,s.add(d);const f=document.createElement("canvas");f.width=512,f.height=96;const m=f.getContext("2d");m.fillStyle="#0f172a",m.fillRect(0,0,512,96),m.fillStyle="#f59e0b",m.font='bold 36px "Inter", monospace',m.textAlign="center",m.fillText("500D • SILK BOARD - E-CITY",256,60);const x=new y(new Kt(2.6,.5),new Bt({map:new Se(f)}));x.position.set(0,3.1,5.78),s.add(x);const g=new et(.65,.65,.45,14);g.rotateZ(Math.PI/2),[[-1.6,.65,-3.2],[1.6,.65,-3.2],[-1.6,.65,3.2],[1.6,.65,3.2]].forEach(([p,v,_])=>{const w=new y(g,l);w.position.set(p,v,_),s.add(w)}),t.add(s)}buildVidhanaSoudha(){const t=new St;t.position.set(-240,0,-40);const e=new H({color:14870768,roughness:.65}),n=new H({color:9741240,roughness:.8}),i=new H({color:16096779,roughness:.25,metalness:.85}),s=new y(new O(45,3.5,26),n);s.position.set(0,1.75,12),s.receiveShadow=!0,t.add(s);const o=new y(new O(68,18,28),e);o.position.set(0,11,-4),o.castShadow=!0,t.add(o);const a=new et(1,1.2,15,14);for(let w=-20;w<=20;w+=3.6){const b=new y(a,e);b.position.set(w,10.5,10),b.castShadow=!0,t.add(b)}const c=new y(new O(46,2.5,8),e);c.position.set(0,18.5,10),t.add(c);const l=document.createElement("canvas");l.width=1024,l.height=128;const h=l.getContext("2d");h.fillStyle="#0f172a",h.fillRect(0,0,1024,128),h.fillStyle="#f59e0b",h.font='bold 36px "Inter", sans-serif',h.textAlign="center",h.fillText("ಸರ್ಕಾರದ ಕೆಲಸ ದೇವರ ಕೆಲಸ  •  GOVERNMENT WORK IS GOD'S WORK",512,75);const u=new y(new Kt(36,2.2),new Bt({map:new Se(l)}));u.position.set(0,18.5,14.1),t.add(u);const d=new y(new et(9,9.5,6,24),e);d.position.set(0,23,-4),t.add(d);const f=new y(new re(9,24,16,0,Math.PI*2,0,Math.PI/2),e);f.position.set(0,26,-4),t.add(f);const m=new y(new et(1.5,1.2,4.5,8),i);m.position.set(0,37,-4),t.add(m),[[-30,-14],[30,-14],[-30,6],[30,6]].forEach(([w,b])=>{const E=new y(new O(8,24,8),e);E.position.set(w,12,b),t.add(E);const C=new y(new re(4,14,8,0,Math.PI*2,0,Math.PI/2),i);C.position.set(w,24,b),t.add(C)});const x=new H({color:16777215,metalness:.8}),g=new y(new et(.15,.25,18),x);g.position.set(-6,9,23),t.add(g);const p=new y(new Kt(4,2.4),new Bt({color:16347926}));p.position.set(-4,16,23),t.add(p);const v=new y(new et(.15,.25,18),x);v.position.set(6,9,23),t.add(v);const _=new y(new Kt(4,2.4),new Bt({color:15381256}));_.position.set(8,16,23),t.add(_),this.createAutoRickshaw(t,24,24,.8),this.scene.add(t),this.physicsWorld.addStaticBox(-240,11,-44,35,11,15)}buildUBCity(){const t=new St;t.position.set(-60,0,-100);const e=new H({color:13938487,roughness:.15,metalness:.9}),n=new H({color:165063,roughness:.15,metalness:.85}),i=new H({color:15857145,roughness:.3}),s=new y(new O(60,1.2,50),i);s.position.y=.6,s.receiveShadow=!0,t.add(s);const o=new y(new et(6,6,.8,16),new H({color:165063,roughness:.1,metalness:.6}));o.position.set(0,.8,10),t.add(o);const a=new y(new O(26,110,24),e);a.position.set(0,55,-12),a.castShadow=!0,t.add(a);const c=new y(new O(18,10,16),e);c.position.set(0,115,-12),t.add(c);const l=new y(new _e(2,14,8),new H({color:16096779,metalness:.9}));l.position.set(0,126,-12),t.add(l);const h=new y(new et(8,8,.4,18),new H({color:1976635,roughness:.8}));h.position.set(0,120,-12),t.add(h);const u=new y(new O(18,75,18),n);u.position.set(-24,37.5,-6),t.add(u);const d=new y(new O(18,75,18),n);d.position.set(24,37.5,-6),t.add(d);const f=document.createElement("canvas");f.width=512,f.height=96;const m=f.getContext("2d");m.fillStyle="#0f172a",m.fillRect(0,0,512,96),m.fillStyle="#f59e0b",m.font='bold 34px "Inter", sans-serif',m.textAlign="center",m.fillText("💎 UB CITY  •  THE COLLECTION",256,60);const x=new y(new Kt(24,3.2),new Bt({map:new Se(f)}));x.position.set(0,14,.2),t.add(x),this.scene.add(t),this.physicsWorld.addStaticBox(-60,55,-112,14,55,13),this.physicsWorld.addStaticBox(-84,37.5,-106,10,37.5,10),this.physicsWorld.addStaticBox(-36,37.5,-106,10,37.5,10)}buildOrionMall(){const t=new St;t.position.set(240,0,320);const e=new H({color:3718648,roughness:.15,metalness:.85}),n=new H({color:16317180,roughness:.4}),i=new H({color:165063,roughness:.1,metalness:.9}),s=new y(new O(60,18,36),n);s.position.y=9,s.castShadow=!0,t.add(s);const o=new y(new O(45,14,2),e);o.position.set(0,9,18.5),t.add(o);const a=document.createElement("canvas");a.width=512,a.height=96;const c=a.getContext("2d");c.fillStyle="#1e1b4b",c.fillRect(0,0,512,96),c.fillStyle="#ec4899",c.font='bold 36px "Inter", sans-serif',c.textAlign="center",c.fillText("🛍️ ORION MALL • BRIGADE GATEWAY",256,60);const l=new y(new Kt(28,3.2),new Bt({map:new Se(a)}));l.position.set(0,15,19.5),t.add(l);const h=new y(new O(22,92,22),i);h.position.set(-36,46,0),h.castShadow=!0,t.add(h);const u=new y(new _e(2,16,8),new H({color:14870768,metalness:.9}));u.position.set(-36,100,0),t.add(u);const d=new y(new Kt(65,12),new H({color:7877903,roughness:.8}));d.rotation.x=-Math.PI/2,d.position.set(0,.08,28),t.add(d),this.scene.add(t),this.physicsWorld.addStaticBox(240,9,320,31,9,19),this.physicsWorld.addStaticBox(204,46,320,12,46,12)}buildLalbaghGardens(){const t=new St;t.position.set(-140,0,280);const e=new H({color:1332013,roughness:.7,metalness:.5}),n=new H({color:10875900,transparent:!0,opacity:.55,roughness:.1,metalness:.8}),i=new H({color:7893356,roughness:.95}),s=new y(new O(42,6,26),n);s.position.set(0,3,0),t.add(s);const o=new y(new et(13,13,42,20,1,!1,0,Math.PI),n);o.rotation.z=Math.PI/2,o.position.set(0,6,0),t.add(o);for(let p=-20;p<=20;p+=5){const v=new y(new So(13,.25,8,24,Math.PI),e);v.rotation.y=Math.PI/2,v.position.set(p,6,0),t.add(v)}const a=new H({color:15680580,roughness:.8}),c=new H({color:16436245,roughness:.8});for(let p=-16;p<=16;p+=8){const v=new y(new O(6,.4,4),a);v.position.set(p,.2,-6),t.add(v);const _=new y(new O(6,.4,4),c);_.position.set(p,.2,6),t.add(_)}const l=new y(new nn(12,1),i);l.scale.set(1.8,.7,1.6),l.position.set(36,4,-20),t.add(l);const h=new St;h.position.set(36,8.5,-20);const u=new H({color:11051678,roughness:.8}),d=new et(.3,.35,3.5,6);[[-1.8,-1.8],[1.8,-1.8],[-1.8,1.8],[1.8,1.8]].forEach(([p,v])=>{const _=new y(d,u);_.position.set(p,1.75,v),h.add(_)});const f=new y(new _e(3.5,2.5,4),new H({color:12131356}));f.rotation.y=Math.PI/4,f.position.y=4.75,h.add(f),t.add(h);const m=document.createElement("canvas");m.width=512,m.height=96;const x=m.getContext("2d");x.fillStyle="#14532d",x.fillRect(0,0,512,96),x.fillStyle="#fef08a",x.font='bold 36px "Inter", sans-serif',x.textAlign="center",x.fillText("🌿 LALBAGH ROYAL GLASS HOUSE",256,60);const g=new y(new Kt(24,2.4),new Bt({map:new Se(m)}));g.position.set(0,6,13.5),t.add(g),this.scene.add(t),this.physicsWorld.addStaticBox(-140,6,280,22,6,14),this.physicsWorld.addStaticBox(-104,5,260,14,5,14)}buildNandiHills(){const t=new St;t.position.set(440,0,-460);const e=new H({color:6583435,roughness:.95});new H({color:2829099,roughness:.85});const n=new H({color:14870768,roughness:.7}),i=new y(new nn(55,1),e);i.scale.set(1.3,1.4,1.2),i.position.set(0,38,0),t.add(i);const s=new y(new et(28,30,2.5,18),n);s.position.set(0,75,0),t.add(s);for(let d=0;d<Math.PI*2;d+=Math.PI/8){const f=Math.cos(d)*27,m=Math.sin(d)*27,x=new y(new O(.8,1.2,.8),n);x.position.set(f,76.8,m),t.add(x)}const o=new St;o.position.set(0,76.25,0);for(let d=0;d<6;d++){const f=d/6*Math.PI*2,m=new y(new et(.3,.35,5,8),n);m.position.set(Math.cos(f)*7,2.5,Math.sin(f)*7),o.add(m)}const a=new y(new _e(9,4.5,6),new H({color:10033947}));a.position.y=7,o.add(a);const c=document.createElement("canvas");c.width=512,c.height=128;const l=c.getContext("2d");l.fillStyle="#7f1d1d",l.fillRect(0,0,512,128),l.fillStyle="#ffffff",l.font='bold 36px "Inter", sans-serif',l.textAlign="center",l.fillText("⛰️ NANDI HILLS • TIPU'S DROP (75m)",256,75);const h=new y(new Kt(16,2.4),new Bt({map:new Se(c)}));h.position.set(0,78,26),t.add(h);const u=new H({color:16777215,transparent:!0,opacity:.55,roughness:.9});for(let d=0;d<4;d++){const f=d/4*Math.PI*2,m=new y(new re(14,8,8),u);m.scale.set(1.6,.4,1.2),m.position.set(Math.cos(f)*35,72,Math.sin(f)*35),t.add(m)}t.add(o),this.physicsWorld.addFlyoverRamp("nandi_ghat_ramp","X",320,440,-460,24,0,75),this.physicsWorld.addFlyover("nandi_summit",440,-460,56,56,75,"X"),this.scene.add(t),this.physicsWorld.addStaticBox(440,38,-460,48,38,48)}buildTownHall(){const t=new St;t.position.set(40,0,200);const e=new H({color:16116704,roughness:.65});new H({color:11022898,roughness:.7});const n=new y(new O(42,14,24),e);n.position.y=7,n.castShadow=!0,t.add(n);const i=new et(.85,1,12,12);for(let h=-14;h<=14;h+=4){const u=new y(i,e);u.position.set(h,7,13),u.castShadow=!0,t.add(u)}const s=new y(new _e(18,5,4),e);s.rotation.y=Math.PI/4,s.position.set(0,15.5,10),t.add(s);const o=new y(new et(1.6,1.6,.3,16),new Bt({color:16777215}));o.rotation.x=Math.PI/2,o.position.set(0,15.2,14),t.add(o);const a=document.createElement("canvas");a.width=512,a.height=96;const c=a.getContext("2d");c.fillStyle="#0f172a",c.fillRect(0,0,512,96),c.fillStyle="#f59e0b",c.font='bold 30px "Inter", sans-serif',c.textAlign="center",c.fillText("🏛️ SIR K.P. PUTTANNA CHETTY TOWN HALL",256,60);const l=new y(new Kt(24,2.4),new Bt({map:new Se(a)}));l.position.set(0,12.5,13.5),t.add(l),this.scene.add(t),this.physicsWorld.addStaticBox(40,7,200,22,7,14)}createBangaloreDistricts(){const t=new St;t.position.set(-120,0,80);const e=new y(new O(24,8,18),new H({color:1841431,roughness:.7}));e.position.set(0,4,0),t.add(e);const n=document.createElement("canvas");n.width=512,n.height=128;const i=n.getContext("2d");i.fillStyle="#451a03",i.fillRect(0,0,512,128),i.fillStyle="#fed7aa",i.font='bold 36px "Inter", sans-serif',i.textAlign="center",i.fillText("☕ THIRD WAVE COFFEE",256,55),i.font='24px "Inter", sans-serif',i.fillText("KORAMANGALA 5TH BLOCK • 80FT ROAD",256,100);const s=new y(new Kt(16,3.5),new Bt({map:new Se(n)}));s.position.set(0,8.5,9.2),t.add(s),this.createAutoRickshaw(t,16,12,.4),this.scene.add(t),this.physicsWorld.addStaticBox(-120,4,80,13,4,10);const o=new St;o.position.set(60,0,60);const a=document.createElement("canvas");a.width=512,a.height=96;const c=a.getContext("2d");c.fillStyle="#065f46",c.fillRect(0,0,512,96),c.fillStyle="#fef08a",c.font='bold 36px "Inter", sans-serif',c.textAlign="center",c.fillText("🌳 HSR LAYOUT • 27TH MAIN ROAD",256,60);const l=new y(new Kt(18,2.5),new Bt({map:new Se(a)}));l.position.set(0,5,0),o.add(l);const h=new H({color:7893356,roughness:.7}),u=new y(new O(1.5,6,1.5),h);u.position.set(-10,3,0),o.add(u);const d=new y(new O(1.5,6,1.5),h);d.position.set(10,3,0),o.add(d),this.scene.add(o);const f=new St;f.position.set(-80,0,160);const m=document.createElement("canvas");m.width=512,m.height=128;const x=m.getContext("2d");x.fillStyle="#991b1b",x.fillRect(0,0,512,128),x.fillStyle="#fef08a",x.font='bold 34px "Inter", sans-serif',x.textAlign="center",x.fillText("🍛 SRI KRISHNA SAGAR DOSA",256,55),x.font='24px "Inter", sans-serif',x.fillText("BTM 2ND STAGE • FILTER COFFEE",256,100);const g=new y(new Kt(16,3.5),new Bt({map:new Se(m)}));g.position.set(0,6,0),f.add(g);const p=new y(new O(18,5,12),new H({color:16116704,roughness:.7}));p.position.set(0,2.5,-6),f.add(p),this.createAutoRickshaw(f,12,4,1.2),this.scene.add(f),this.physicsWorld.addStaticBox(-80,2.5,154,10,2.5,7),this.createBangaloreStatues()}createBangaloreStatues(){const t=new H({color:7029795,roughness:.55,metalness:.45}),e=new H({color:9741240,roughness:.8}),n=new H({color:15857145,roughness:.35,metalness:.05}),i=new H({color:16096779,roughness:.25,metalness:.85});[{name:"Kempegowda",pos:[0,0,-20],height:8,baseMat:e,figureMat:t,sword:!0},{name:"Tipu Sultan",pos:[-160,0,-120],height:7,baseMat:e,figureMat:t,sword:!0},{name:"Mahatma Gandhi",pos:[40,0,200],height:6.5,baseMat:n,figureMat:t,staff:!0},{name:"Sir M. Visvesvaraya",pos:[-240,0,-40],height:7,baseMat:e,figureMat:t},{name:"Swami Vivekananda",pos:[100,0,-80],height:7.5,baseMat:n,figureMat:t},{name:"Dr. B.R. Ambedkar",pos:[-80,0,-160],height:7,baseMat:e,figureMat:t},{name:"Subhas Chandra Bose",pos:[180,0,100],height:7,baseMat:e,figureMat:t,sword:!0},{name:"Queen Victoria",pos:[-140,0,280],height:6,baseMat:n,figureMat:n},{name:"Mark Cubbon",pos:[-100,0,250],height:5.5,baseMat:e,figureMat:t},{name:"Basaveshwara",pos:[60,0,-200],height:8,baseMat:e,figureMat:t},{name:"Nandi Bull",pos:[400,0,-420],height:5,baseMat:e,figureMat:i,isBull:!0}].forEach(h=>{const u=new St;u.position.set(h.pos[0],h.pos[1],h.pos[2]);const d=new y(new O(5,.6,5),h.baseMat);d.position.y=.3,d.receiveShadow=!0,u.add(d);const f=new y(new O(4,.5,4),h.baseMat);f.position.y=.85,u.add(f);const m=new y(new O(3,2.5,3),h.baseMat);if(m.position.y=2.35,m.castShadow=!0,u.add(m),h.isBull){const v=new y(new O(2.5,1.8,4),h.figureMat);v.position.y=4.5,v.castShadow=!0,u.add(v);const _=new y(new re(.9,10,8),h.figureMat);_.position.set(0,5.2,2.3),u.add(_);const w=new et(.08,.15,1.2,6),b=new y(w,h.figureMat);b.position.set(-.5,5.8,2.4),b.rotation.z=.5,u.add(b);const E=new y(w,h.figureMat);E.position.set(.5,5.8,2.4),E.rotation.z=-.5,u.add(E)}else{const v=h.height-3.6,_=new et(.22,.25,v*.45,8),w=new y(_,h.figureMat);w.position.set(-.3,3.6+v*.22,0),w.castShadow=!0,u.add(w);const b=new y(_,h.figureMat);b.position.set(.3,3.6+v*.22,0),b.castShadow=!0,u.add(b);const E=new y(new et(.45,.4,v*.35,10),h.figureMat);E.position.y=3.6+v*.62,E.castShadow=!0,u.add(E);const C=new y(new re(.35,12,10),h.figureMat);if(C.position.y=3.6+v*.88,C.castShadow=!0,u.add(C),h.sword){const P=new y(new O(.08,v*.55,.08),i);P.position.set(.7,3.6+v*.45,0),P.rotation.z=.3,u.add(P)}if(h.staff){const P=new y(new et(.04,.04,v*.9,6),new H({color:5779214,roughness:.85}));P.position.set(.6,3.6+v*.4,.2),P.rotation.z=.08,u.add(P)}}const x=document.createElement("canvas");x.width=512,x.height=128;const g=x.getContext("2d");g.fillStyle="#1e293b",g.fillRect(0,0,512,128),g.fillStyle="#f1f5f9",g.font='bold 32px "Inter", sans-serif',g.textAlign="center",g.fillText(h.name,256,70);const p=new y(new Kt(2.5,.6),new Bt({map:new Se(x)}));p.position.set(0,2,1.52),u.add(p),this.scene.add(u),this.physicsWorld.addStaticBox(h.pos[0],2,h.pos[2],2.5,2,2.5)});const o=new St;o.position.set(-235,0,-70);const a=new y(new et(.8,1,14,12),e);a.position.y=7,a.castShadow=!0,o.add(a);const c=new y(new et(1.2,.8,3.5,10),i);c.position.y=15.5,c.castShadow=!0,o.add(c);const l=new y(new So(1,.12,8,24),i);l.position.y=17.5,l.rotation.x=Math.PI/2,o.add(l),this.scene.add(o),this.physicsWorld.addStaticBox(-235,7,-70,1,7,1)}}class Ev{constructor(t){this.scene=t,this.pedestrians=[],this.palette={clothes:[3900150,15680580,1096065,16096779,9133302,15485081,440020,1976635],pants:[1976635,3359061,4674921,6583435,988970],skin:[16767916,15843965,14724201,13010498,9262372]},this.spawnCrowds()}spawnCrowds(){for(let e=0;e<22;e++){const i=Math.random()>.5?9.5+Math.random()*2:-9.5-Math.random()*2,s=(Math.random()-.5)*220;this.createPedestrian(i,s,"walking",s>0?-1:1)}[{x:18,z:18},{x:-18,z:18},{x:18,z:-18},{x:-18,z:-18},{x:28,z:4},{x:-28,z:4}].forEach(e=>{const n=2+Math.floor(Math.random()*3);for(let i=0;i<n;i++){const s=i/n*Math.PI*2,o=e.x+Math.cos(s)*1.5,a=e.z+Math.sin(s)*1.5;this.createPedestrian(o,a,"idle",0,s+Math.PI)}});for(let e=0;e<18;e++){const n=-80+(Math.random()-.5)*16,i=-60+(Math.random()-.5)*16;this.createPedestrian(n,i,"dancing",0,Math.random()*Math.PI*2,7.5)}}createPedestrian(t,e,n="walking",i=1,s=0,o=0){const a=new St;a.position.set(t,o,e);const c=this.palette.clothes[Math.floor(Math.random()*this.palette.clothes.length)],l=this.palette.pants[Math.floor(Math.random()*this.palette.pants.length)],h=this.palette.skin[Math.floor(Math.random()*this.palette.skin.length)],u=new H({color:c,roughness:.7}),d=new H({color:l,roughness:.8}),f=new H({color:h,roughness:.6}),m=new H({color:1710618,roughness:.9}),x=new y(new et(.24,.28,.72,8),u);x.position.y=1.05,x.castShadow=!0,a.add(x);const g=new y(new re(.2,8,8),f);g.position.y=1.55,a.add(g);const p=new y(new re(.21,8,8,0,Math.PI*2,0,Math.PI/1.7),m);p.position.y=1.58,a.add(p);const v=new y(new et(.08,.08,.7,6),d);v.position.set(-.12,.35,0);const _=new y(new et(.08,.08,.7,6),d);_.position.set(.12,.35,0),a.add(v,_);const w=new y(new et(.06,.06,.6,6),u);w.position.set(-.32,1,0);const b=new y(new et(.06,.06,.6,6),u);b.position.set(.32,1,0),a.add(w,b),this.scene.add(a),this.pedestrians.push({mesh:a,leftLeg:v,rightLeg:_,leftArm:w,rightArm:b,state:n,dir:i,speed:1.2+Math.random()*.4,animPhase:Math.random()*Math.PI*2,baseY:o,baseX:t,baseZ:e})}update(t){const e=performance.now()*.001;this.pedestrians.forEach(n=>{if(n.animPhase+=t*(n.state==="dancing"?8:4.5),n.state==="walking"){n.mesh.position.z+=n.dir*n.speed*t,n.mesh.rotation.y=n.dir>0?0:Math.PI,Math.abs(n.mesh.position.z)>220&&(n.dir*=-1);const i=Math.sin(n.animPhase)*.55;n.leftLeg.rotation.x=i,n.rightLeg.rotation.x=-i,n.leftArm.rotation.x=-i*.7,n.rightArm.rotation.x=i*.7,n.mesh.position.y=n.baseY+Math.abs(Math.sin(n.animPhase*2))*.04}else if(n.state==="dancing"){const i=Math.sin(n.animPhase)*.4,s=Math.cos(n.animPhase)*.8;n.mesh.rotation.y=Math.sin(n.animPhase*.5)*.6,n.mesh.position.y=n.baseY+Math.abs(Math.sin(n.animPhase*2))*.12,n.leftArm.rotation.x=-1.2+s,n.rightArm.rotation.x=-1.2-s,n.leftLeg.rotation.x=i*.5,n.rightLeg.rotation.x=-i*.5}else{const i=Math.sin(e*1.5+n.animPhase)*.02;n.mesh.position.y=n.baseY+i,n.leftArm.rotation.x=Math.sin(e+n.animPhase)*.1,n.rightArm.rotation.x=-Math.sin(e+n.animPhase)*.1}})}}class bv{constructor(t,e){this.scene=t,this.renderer=e,this.isNight=!1,this.clouds=[],this.initLights(),this.initAtmosphere(),this.initClouds()}initLights(){this.hemiLight=new Jd(16775917,8514796,.95),this.scene.add(this.hemiLight),this.sunLight=new nu(16774102,1.5),this.sunLight.position.set(40,60,35),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048,this.sunLight.shadow.camera.near=1,this.sunLight.shadow.camera.far=250;const t=80;this.sunLight.shadow.camera.left=-t,this.sunLight.shadow.camera.right=t,this.sunLight.shadow.camera.top=t,this.sunLight.shadow.camera.bottom=-t,this.sunLight.shadow.bias=-3e-4,this.scene.add(this.sunLight)}initAtmosphere(){this.daySkyColor=new se(8308963),this.nightSkyColor=new se(988970),this.scene.background=this.daySkyColor.clone(),this.scene.fog=new Ma(8308963,.0018)}initClouds(){const t=new gi({color:16777215,transparent:!0,opacity:.9});for(let e=0;e<20;e++){const n=this.createPuffyCloud(t),i=e/20*Math.PI*2+Math.random(),s=60+Math.random()*90;n.position.set(Math.cos(i)*s,38+Math.random()*18,Math.sin(i)*s),this.clouds.push(n),this.scene.add(n)}}createPuffyCloud(t){const e=new St,n=3+Math.floor(Math.random()*3);for(let i=0;i<n;i++){const s=3.8+Math.random()*2.2,o=new nn(s,1),a=new y(o,t);a.position.set((i-n/2)*3.4,Math.sin(i)*.9,(Math.random()-.5)*2),e.add(a)}return e}toggleDayNight(){this.isNight=!this.isNight;const t=this.isNight?this.nightSkyColor:this.daySkyColor;return this.scene.background.copy(t),this.scene.fog.color.copy(t),this.isNight?(this.sunLight.intensity=.25,this.sunLight.color.setHex(6058652),this.hemiLight.intensity=.4,this.hemiLight.color.setHex(3094080)):(this.sunLight.intensity=1.5,this.sunLight.color.setHex(16774102),this.hemiLight.intensity=.95,this.hemiLight.color.setHex(16775917)),this.isNight}update(t,e){this.sunLight.position.x=e.x+40,this.sunLight.position.z=e.z+35,this.sunLight.target.position.copy(e),this.sunLight.target.updateMatrixWorld(),this.clouds.forEach(n=>{n.position.x+=t*1.4,n.position.x>180&&(n.position.x=-180)})}}class Tv{constructor(t){this.canvas=document.getElementById(t),this.canvas&&(this.ctx=this.canvas.getContext("2d"),this.width=this.canvas.width,this.height=this.canvas.height,this.range=180,this.landmarks=[{name:"Taj",x:320,z:-180,color:"#f8fafc"},{name:"India Gate",x:0,z:-140,color:"#f59e0b"},{name:"Red Fort",x:-320,z:-260,color:"#ef4444"},{name:"Rashtrapati",x:-340,z:240,color:"#d97706"},{name:"Eiffel",x:180,z:260,color:"#64748b"},{name:"Liberty",x:440,z:80,color:"#10b981"},{name:"Airport",x:300,z:-380,color:"#3b82f6"}])}update(t,e,n){if(!this.ctx)return;const i=this.ctx,s=this.width,o=this.height,a=s/2,c=o/2;i.clearRect(0,0,s,o),i.save(),i.beginPath(),i.arc(a,c,s/2-2,0,Math.PI*2),i.fillStyle="#f8fafc",i.fill(),i.lineWidth=2,i.strokeStyle="#cbd5e1",i.stroke(),i.clip(),i.translate(a,c),i.rotate(-e);const l=s/2/this.range;i.fillStyle="#cbd5e1";const h=16*l,u=1100*l,d=t.x*l,f=t.z*l;i.fillRect(-d-u/2,-f-h/2,u,h),i.fillRect(-d-h/2,-f-u/2,h,u),[-200,200].forEach(m=>{const x=m*l;i.fillRect(-d-u/2,-f+x-h/2,u,h),i.fillRect(-d+x-h/2,-f-u/2,h,u)}),i.fillStyle="#99f6e4",i.fillRect(380*l-d-35*l,-f-600*l,70*l,1200*l),this.landmarks.forEach(m=>{const x=(m.x-t.x)*l,g=(m.z-t.z)*l;i.save(),i.translate(x,g),i.fillStyle=m.color,i.beginPath(),i.arc(0,0,5,0,Math.PI*2),i.fill(),i.strokeStyle="#1e293b",i.lineWidth=1.2,i.stroke(),i.fillStyle="#0f172a",i.font="8px Inter, sans-serif",i.textAlign="center",i.fillText(m.name,0,-7),i.restore()}),n.forEach(m=>{const x=(m.position.x-t.x)*l,g=(m.position.z-t.z)*l;i.save(),i.translate(x,g),i.fillStyle="#"+m.color.toString(16).padStart(6,"0"),i.beginPath(),i.arc(0,0,4,0,Math.PI*2),i.fill(),i.lineWidth=1.2,i.strokeStyle="#ffffff",i.stroke(),i.restore()}),i.restore(),i.save(),i.translate(a,c),i.fillStyle="#ff4757",i.beginPath(),i.moveTo(0,-6),i.lineTo(4.5,4.5),i.lineTo(0,2.5),i.lineTo(-4.5,4.5),i.closePath(),i.fill(),i.strokeStyle="#ffffff",i.lineWidth=1.2,i.stroke(),i.restore()}}class Av{constructor(t,e){this.scene=t,this.vehicles=e.filter(n=>!n.isAirplane&&!n.isHelicopter),this.routes=[{waypoints:[new U(3.5,0,450),new U(3.5,0,-450)],speed:14},{waypoints:[new U(-3.5,0,-450),new U(-3.5,0,450)],speed:14},{waypoints:[new U(450,0,3.5),new U(-450,0,3.5)],speed:14},{waypoints:[new U(-450,0,-3.5),new U(450,0,-3.5)],speed:14},{waypoints:[new U(200,0,-400),new U(200,0,400)],speed:16},{waypoints:[new U(-200,0,400),new U(-200,0,-400)],speed:16}],this.carStates=[],this.vehicles.forEach((n,i)=>{const s=this.routes[i%this.routes.length];this.carStates.push({vehicle:n,targetIndex:0,waypoints:s.waypoints,speed:s.speed,honkCooldown:0})})}update(t,e,n=null){const i=n?n.position:null,s=n?n.isDriving:!1;this.carStates.forEach(o=>{const a=o.vehicle;if(!a||a===e)return;o.honkCooldown>0&&(o.honkCooldown-=t);const c=a.position;let l=!1;if(i&&!s){const x=i.x-c.x,g=i.z-c.z,p=Math.sqrt(x*x+g*g);if(p<9.5){const v=Math.sin(a.yaw),_=Math.cos(a.yaw);(x*v+g*_)/p>.4&&(l=!0,o.honkCooldown<=0&&a.audioManager&&(a.audioManager.playHonk(),o.honkCooldown=3.5))}}if(l){a.currentSpeed=Math.max(0,a.currentSpeed-35*t),a.speedKmh=0;return}const h=o.waypoints[o.targetIndex],u=h.x-c.x,d=h.z-c.z;Math.sqrt(u*u+d*d)<6&&(o.targetIndex=(o.targetIndex+1)%o.waypoints.length);const m=Math.atan2(u,d);if(a.yaw=m,a.currentSpeed=o.speed,a.speedKmh=Math.round(o.speed*3.6),a.position.x+=Math.sin(m)*o.speed*t,a.position.z+=Math.cos(m)*o.speed*t,a.mesh.position.copy(a.position),a.mesh.rotation.y=a.yaw,a.frontLeftWheel){const x=o.speed*t/.42;a.frontLeftWheel.rotation.x+=x,a.frontRightWheel.rotation.x-=x,a.rearLeftWheel.rotation.x+=x,a.rearRightWheel.rotation.x-=x}})}}class Cv{constructor(){this.modeBadge=document.getElementById("mode-badge"),this.clockDisplay=document.getElementById("clock-display"),this.toggleTimeBtn=document.getElementById("toggle-time-btn"),this.interactionPrompt=document.getElementById("interaction-prompt"),this.speedoContainer=document.getElementById("speedo-container"),this.speedVal=document.getElementById("speed-val"),this.toastMessage=document.getElementById("toast-message"),this.viewModeLabel=document.getElementById("view-mode-label"),this.gpsWidget=document.getElementById("gps-nav-widget"),this.gpsIcon=document.getElementById("gps-icon"),this.gpsText=document.getElementById("gps-text"),this.gpsArrow=document.getElementById("gps-arrow"),this.controlsModal=document.getElementById("controls-modal"),this.isControlsOpen=!1,this.initClock(),this.initControlsModal()}initClock(){const t=()=>{if(!this.clockDisplay)return;const e=new Date;this.clockDisplay.textContent=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1})};t(),setInterval(t,1e3)}initControlsModal(){const t=document.getElementById("toggle-controls-btn"),e=document.getElementById("close-controls-btn"),n=document.getElementById("dismiss-controls-btn");t&&t.addEventListener("click",()=>this.toggleControls()),e&&e.addEventListener("click",()=>this.toggleControls(!1)),n&&n.addEventListener("click",()=>this.toggleControls(!1)),window.addEventListener("keydown",i=>{i.code==="KeyH"&&this.toggleControls()})}toggleControls(t=null){this.controlsModal&&(this.isControlsOpen=t!==null?t:!this.isControlsOpen,this.isControlsOpen?this.controlsModal.classList.remove("controls-modal-hidden"):this.controlsModal.classList.add("controls-modal-hidden"))}updateViewMode(t){if(!this.viewModeLabel)return;const e={chase:"Chase",free:"Free",topDown:"Top"};this.viewModeLabel.textContent=e[t]||t}updateGps(t,e=0){if(!(!this.gpsWidget||!t)&&(this.gpsIcon&&(this.gpsIcon.textContent=t.icon||"✈️"),this.gpsText&&(this.gpsText.textContent=`${t.name.split(" ")[1]||"Target"}: ${t.distance}m`),this.gpsArrow)){let n=t.angle-e;const i=Math.round(n*180/Math.PI);this.gpsArrow.style.transform=`rotate(${i}deg)`}}setMode(t){this.modeBadge&&(t==="vehicle"?(this.modeBadge.textContent="Drive",this.speedoContainer.classList.remove("hidden")):(this.modeBadge.textContent="Explore",this.speedoContainer.classList.add("hidden")))}showPrompt(t){if(!this.interactionPrompt)return;const e=this.interactionPrompt.querySelector(".prompt-text");e&&(e.innerHTML=t),this.interactionPrompt.classList.remove("hidden")}showInteraction(){this.showPrompt("Click or press <kbd>F</kbd> to enter vehicle")}hideInteraction(){this.interactionPrompt&&this.interactionPrompt.classList.add("hidden")}updateSpeed(t){this.speedVal&&(this.speedVal.textContent=t)}showToast(t,e=3e3){this.toastMessage&&(this.toastMessage.textContent=t,this.toastMessage.style.opacity="1",this.toastMessage.style.transform="translate(-50%, 0)",clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>{this.toastMessage.style.opacity="0",this.toastMessage.style.transform="translate(-50%, -10px)"},e))}}class Rv{constructor(t){this.game=t,this.isOpen=!1,this.landmarks=[{id:"silkboard",name:"🌉 Silk Board Flyover Interchange",x:0,z:20,icon:"🌉",color:"#10b981",desc:"Famous 2-tier flyover interchange, E-City Expressway & Namma Metro!"},{id:"vidhana",name:"🏛️ Vidhana Soudha",x:-240,z:-40,icon:"🏛️",color:"#f59e0b",desc:"Karnataka State Legislature with grand dome & Ashoka Lion Capital!"},{id:"ubcity",name:"🏙️ UB City Tower (120m)",x:-60,z:-100,icon:"🏙️",color:"#eab308",desc:"Luxury skyscraper, rooftop helipad & boutique amphitheatre piazza!"},{id:"orion",name:"🛍️ Orion Mall & WTC Bangalore",x:240,z:320,icon:"🛍️",color:"#ec4899",desc:"Contemporary glass shopping mall, 92m WTC tower & lake boardwalk!"},{id:"lalbagh",name:"🌿 Lalbagh Royal Glass House",x:-140,z:280,icon:"🌿",color:"#16a34a",desc:"Crystal Palace conservatory, flower shows & Kempegowda rock tower!"},{id:"nandihills",name:"⛰️ Nandi Hills Ghats & Viewpoint",x:440,z:-460,icon:"⛰️",color:"#8b5cf6",desc:"Drive/walk 75m winding ghat road to panoramic sunrise cliff!"},{id:"townhall",name:"🏛️ Bangalore Town Hall",x:40,z:200,icon:"🏛️",color:"#f97316",desc:"Historic 1935 neoclassical landmark with Tuscan colonnade columns!"},{id:"koramangala",name:"☕ Koramangala Startup Hub",x:-120,z:80,icon:"☕",color:"#b45309",desc:"Third Wave Coffee, tech startup garages & 80 Feet Road!"},{id:"hsr",name:"🌳 HSR Layout (27th Main)",x:60,z:60,icon:"🌳",color:"#059669",desc:"Planned residential sectors, pink Tabebuia blooms & startup garages!"},{id:"btm",name:"🍛 BTM Layout Food Street",x:-80,z:160,icon:"🍛",color:"#dc2626",desc:"BTM 2nd Stage, Sri Krishna Sagar dosa & filter coffee street!"},{id:"airport",name:"✈️ International Airport & Runway",x:300,z:-380,icon:"✈️",color:"#2563eb",desc:"Take off in airplanes down the 280m runway!"},{id:"helipad",name:"🚁 Airport Helipad",x:340,z:-352,icon:"🚁",color:"#f59e0b",desc:"Board the executive helicopter for vertical lift off!"},{id:"zoo",name:"🦁 Wildlife Safari & City Zoo",x:-160,z:-140,icon:"🦁",color:"#65a30d",desc:"Lion pride rock, giraffes, zebras and elephant pool!"},{id:"bank",name:"🏦 Grand Reserve Bank",x:-60,z:40,icon:"🏦",color:"#d97706",desc:"Neoclassical vaults and armored cash transit truck!"},{id:"school",name:"🏫 Springfield High Academy",x:-180,z:120,icon:"🏫",color:"#b91c1c",desc:"Red-brick academy, clock tower, buses and athletic field!"},{id:"gas",name:"⛽ Ron Oil & Burger Diner",x:-100,z:20,icon:"⛽",color:"#e11d48",desc:"Gas pumps, 24/7 convenience mart and giant rooftop burger!"},{id:"hospital",name:"🏥 Emergency Hospital & Police",x:60,z:140,icon:"🏥",color:"#0ea5e9",desc:"Metro hospital helipad, ER ambulances and police cruisers!"},{id:"yeti",name:"❄️ Yeti Cave & Glaciers",x:35,z:-485,icon:"❄️",color:"#0284c7",desc:"Mythical 4.2m Yeti in ice cavern & roaming polar bears!"},{id:"eiffel",name:"🗼 Eiffel Tower (95m)",x:180,z:260,icon:"🗼",color:"#475569",desc:"Ascend by lift to the 90m summit observation deck!"},{id:"taj",name:"🕌 Taj Mahal",x:320,z:-180,icon:"🕌",color:"#0284c7",desc:"Marble masterpiece with reflecting pools & dome terrace!"},{id:"liberty",name:"🗽 Statue of Liberty",x:440,z:80,icon:"🗽",color:"#10b981",desc:"Liberty Island fortress with 48m torch balcony!"},{id:"indiagate",name:"🏛️ India Gate",x:0,z:-140,icon:"🏛️",color:"#d97706",desc:"42m Triumphal Arch with Amar Jawan Jyoti eternal flame!"}],this.gpsTarget=this.landmarks[0],this.createDom(),this.initEvents()}createDom(){this.overlay=document.createElement("div"),this.overlay.id="full-map-overlay",this.overlay.className="map-overlay-hidden",this.overlay.innerHTML=`
      <div class="map-modal">
        <div class="map-header">
          <div class="map-title-group">
            <span class="map-badge">NAMMA BENGALURU GPS</span>
            <h2>City Navigation Map</h2>
          </div>
          <button id="close-map-btn" class="map-close-btn">&times;</button>
        </div>

        <div class="map-canvas-wrapper">
          <canvas id="fullscreen-map-canvas" width="760" height="760"></canvas>
          <div id="map-tooltip" class="map-tooltip hidden"></div>
        </div>

        <div class="map-footer">
          <div class="map-legend">
            <span><span class="legend-dot" style="background:#10b981;"></span> 🌉 Silk Board</span>
            <span><span class="legend-dot" style="background:#f59e0b;"></span> 🏛️ Vidhana Soudha</span>
            <span><span class="legend-dot" style="background:#eab308;"></span> 🏙️ UB City</span>
            <span><span class="legend-dot" style="background:#ec4899;"></span> 🛍️ Orion</span>
            <span><span class="legend-dot" style="background:#16a34a;"></span> 🌿 Lalbagh</span>
            <span><span class="legend-dot" style="background:#8b5cf6;"></span> ⛰️ Nandi Hills</span>
            <span><span class="legend-dot" style="background:#b45309;"></span> ☕ Koramangala</span>
            <span><span class="legend-dot" style="background:#2563eb;"></span> ✈️ Airport</span>
          </div>
          <div class="map-hint">Click any landmark to set GPS navigation &middot; Press <kbd>M</kbd> to close</div>
        </div>
      </div>
    `,document.body.appendChild(this.overlay),this.canvas=document.getElementById("fullscreen-map-canvas"),this.ctx=this.canvas.getContext("2d")}initEvents(){window.addEventListener("keydown",e=>{e.code==="KeyM"&&this.toggle()});const t=document.getElementById("close-map-btn");t&&t.addEventListener("click",()=>this.toggle(!1)),this.canvas.addEventListener("click",e=>{const n=this.canvas.getBoundingClientRect(),i=(e.clientX-n.left)*(this.canvas.width/n.width),s=(e.clientY-n.top)*(this.canvas.height/n.height),o=this.canvas.width/1300,a=this.canvas.width/2,c=this.canvas.height/2;for(const l of this.landmarks){const h=a+l.x*o,u=c+l.z*o;if((i-h)*(i-h)+(s-u)*(s-u)<484){this.gpsTarget=l,this.game.hud.showToast(`GPS set to ${l.name}!`),this.render();break}}})}toggle(t=null){this.isOpen=t!==null?t:!this.isOpen,this.isOpen?(this.overlay.classList.remove("map-overlay-hidden"),this.render()):this.overlay.classList.add("map-overlay-hidden")}render(){if(!this.isOpen||!this.ctx)return;const t=this.ctx,e=this.canvas.width,n=this.canvas.height,i=e/2,s=n/2,o=e/1300;if(t.fillStyle="#e2e8f0",t.fillRect(0,0,e,n),t.fillStyle="#99f6e4",t.fillRect(i+340*o,0,80*o,n),t.fillStyle="#94a3b8",t.fillRect(i-10*o,0,20*o,n),t.fillRect(0,s-10*o,e,20*o),[-200,200].forEach(a=>{t.fillRect(i+(a-8)*o,0,16*o,n),t.fillRect(0,s+(a-8)*o,e,16*o)}),t.fillStyle="#6366f1",t.fillRect(i-130*o,s-56*o,260*o,12*o),t.fillStyle="#1e293b",t.fillRect(i+160*o,s-390*o,280*o,24*o),this.landmarks.forEach(a=>{const c=i+a.x*o,l=s+a.z*o,h=this.gpsTarget&&this.gpsTarget.id===a.id;(a.id==="airport"||h)&&(t.beginPath(),t.arc(c,l,18,0,Math.PI*2),t.fillStyle=h?"rgba(239, 68, 68, 0.25)":"rgba(37, 99, 235, 0.25)",t.fill()),t.beginPath(),t.arc(c,l,11,0,Math.PI*2),t.fillStyle=a.color,t.fill(),t.lineWidth=2.5,t.strokeStyle="#ffffff",t.stroke(),t.fillStyle="#0f172a",t.font="bold 11px Inter, sans-serif",t.textAlign="center",t.fillText(`${a.icon} ${a.name.split(" ")[1]||a.name}`,c,l-15)}),this.game&&this.game.player){const a=this.game.player.position,c=this.game.player.rotation,l=i+a.x*o,h=s+a.z*o;t.save(),t.translate(l,h),t.rotate(-c),t.beginPath(),t.arc(0,0,8,0,Math.PI*2),t.fillStyle="#ef4444",t.fill(),t.lineWidth=2,t.strokeStyle="#ffffff",t.stroke(),t.beginPath(),t.moveTo(0,-12),t.lineTo(6,6),t.lineTo(0,3),t.lineTo(-6,6),t.closePath(),t.fillStyle="#dc2626",t.fill(),t.restore()}}getGpsDirection(t){if(!this.gpsTarget||!t)return null;const e=this.gpsTarget.x-t.x,n=this.gpsTarget.z-t.z,i=Math.round(Math.sqrt(e*e+n*n)),s=Math.atan2(e,n);return{name:this.gpsTarget.name,icon:this.gpsTarget.icon,distance:i,angle:s}}}class Pv{constructor(){this.canvas=document.getElementById("webgl-canvas"),this.raycaster=new su,this.mouse=new ft,this.initRenderer(),this.initScene(),this.initSystems(),this.hud.updateViewMode(this.cameraController.viewMode),this.initEntities(),this.initEvents(),this.lastTime=performance.now(),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate),this.hud.showToast("Follow the GPS arrow to the ✈️ Airport or press [M] to open Navigation Map!")}initRenderer(){this.renderer=new Gm({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=al,this.renderer.toneMapping=ll,this.renderer.toneMappingExposure=1.15}initScene(){this.scene=new md,this.camera=new $e(54,window.innerWidth/window.innerHeight,.1,1600),this.camera.position.set(0,4.5,9)}initSystems(){this.physicsWorld=new mv,this.input=new gv,this.cameraController=new xv(this.camera,this.canvas),this.audioManager=new vv,this.bloodVfx=new wv(this.scene),this.environment=new bv(this.scene,this.renderer),this.cityBuilder=new Sv(this.scene,this.physicsWorld),this.crowdSystem=new Ev(this.scene),this.minimap=new Tv("radar-canvas"),this.hud=new Cv,this.fullMapOverlay=new Rv(this)}initEntities(){this.player=new _v(this.scene,this.physicsWorld,this.audioManager,this.bloodVfx),this.vehicles=[],[{pos:new U(3.5,0,80),color:16729943},{pos:new U(-4.5,0,95),color:3718648},{pos:new U(45,0,4.5),color:2278750},{pos:new U(-45,0,-4.5),color:16096779},{pos:new U(0,0,-100),color:11032055},{pos:new U(160,0,240),color:15680580},{pos:new U(260,0,-160),color:440020}].forEach(e=>{const n=new ol(this.scene,this.physicsWorld,this.audioManager,e.pos,e.color);this.vehicles.push(n)}),this.airplane=new yv(this.scene,this.audioManager,new U(220,.4,-380)),this.vehicles.push(this.airplane),this.helicopter=new Mv(this.scene,this.audioManager,new U(340,.4,-352)),this.vehicles.push(this.helicopter),this.trafficSystem=new Av(this.scene,this.vehicles.filter(e=>!e.isAirborne&&!e.isAirplane&&!e.isHelicopter)),this.activeVehicle=null,this.nearbyVehicle=null,this.interactionCooldown=!1}initEvents(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)});const t=document.getElementById("toggle-map-btn");t&&t.addEventListener("click",()=>this.fullMapOverlay.toggle());const e=document.getElementById("gps-nav-widget");e&&e.addEventListener("click",()=>this.fullMapOverlay.toggle());const n=document.getElementById("toggle-view-btn");n&&n.addEventListener("click",()=>{this.cameraController.toggleViewMode(),this.hud.updateViewMode(this.cameraController.viewMode),this.hud.showToast(`Camera: ${this.cameraController.viewMode.toUpperCase()}`)});const i=document.getElementById("toggle-time-btn");i&&i.addEventListener("click",()=>{const s=this.environment.toggleDayNight(),o=document.getElementById("ambience-label");o&&(o.textContent=s?"Night":"Day"),this.vehicles.forEach(a=>{a.setHeadlights&&a.setHeadlights(s)}),this.hud.showToast(s?"Night ambience":"Day ambience")}),window.addEventListener("click",s=>{var c,l;if(s.target.closest(".messenger-header, .messenger-actions, .bottom-hint, #radar-container, #gps-nav-widget, #full-map-overlay"))return;this.mouse.x=s.clientX/window.innerWidth*2-1,this.mouse.y=-(s.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const o=this.vehicles.map(h=>h.mesh),a=this.raycaster.intersectObjects(o,!0);if(a.length>0){let h=a[0].object;for(;h&&!((c=h.userData)!=null&&c.vehicle)&&h.parent;)h=h.parent;if(h&&((l=h.userData)!=null&&l.vehicle)){const u=h.userData.vehicle;this.player.position.distanceTo(u.position)<18?this.enterVehicle(u):this.hud.showToast("Walk closer to enter")}}}),window.addEventListener("keydown",s=>{if(s.code==="KeyL"&&this.activeVehicle&&this.activeVehicle.setHeadlights){const o=!this.activeVehicle.headlightsOn;this.activeVehicle.setHeadlights(o),this.hud.showToast(`Headlights ${o?"on":"off"}`)}s.code==="KeyC"&&this.spawnCarNearPlayer()})}spawnCarNearPlayer(){const t=this.player.isDriving&&this.activeVehicle?this.activeVehicle.position:this.player.position,e=[16729943,3718648,2278750,16436245,11032055,16347926],n=e[Math.floor(Math.random()*e.length)],i=new U(t.x+3.5,0,t.z+2),s=new ol(this.scene,this.physicsWorld,this.audioManager,i,n);this.vehicles.push(s),this.hud.showToast("Vehicle spawned nearby")}handleVehicleInteractions(){const t=this.input.isDown("KeyF");if(this.player.isDriving&&this.activeVehicle){this.hud.showPrompt("Press <kbd>F</kbd> to exit vehicle"),t&&!this.interactionCooldown&&(this.interactionCooldown=!0,this.exitVehicle(),setTimeout(()=>{this.interactionCooldown=!1},400));return}let e=null,n=6.5;for(const i of this.vehicles){const s=this.player.position.distanceTo(i.position);s<n&&(n=s,e=i)}if(this.nearbyVehicle=e,e){const i=e.isAirplane?"pilot airplane":e.isHelicopter?"fly helicopter":"drive car";this.hud.showPrompt(`Press <kbd>F</kbd> to ${i}`),t&&!this.interactionCooldown&&(this.interactionCooldown=!0,this.enterVehicle(e),setTimeout(()=>{this.interactionCooldown=!1},400))}else this.hud.hideInteraction()}handleObservationElevators(){if(this.player.isDriving)return;const t=this.cityBuilder.observationElevators||[];let e=null,n=!1;for(const i of t){const s=this.player.position.distanceTo(i.groundPos),o=this.player.position.distanceTo(i.topPos);if(s<i.radius){e=i,n=!1;break}else if(o<i.radius){e=i,n=!0;break}}if(e){const i=n?"Press <kbd>E</kbd> to descend to ground":`Press <kbd>E</kbd> to ascend to ${e.name}`;if(this.hud.showPrompt(i),this.input.isDown("KeyE")&&!this.interactionCooldown){this.interactionCooldown=!0;const s=n?e.groundPos:e.topPos;this.player.position.copy(s),this.player.velocity.set(0,0,0),this.audioManager.playDoor(),this.hud.showToast(n?"Returned to ground level":`Reached ${e.name}! Enjoy the view!`),setTimeout(()=>{this.interactionCooldown=!1},500)}}}enterVehicle(t){if(this.activeVehicle===t)return;this.activeVehicle=t,this.player.enterVehicle(t);const e=t.isAirplane?"airplane":t.isHelicopter?"helicopter":"vehicle";this.cameraController.setMode(e),this.hud.setMode("vehicle"),this.audioManager.startEngine(),t.isAirplane?this.hud.showToast("Airplane: Hold W to throttle, SPACE to climb into sky, A/D to steer!"):t.isHelicopter?this.hud.showToast("Helicopter: Hold SPACE to ascend/lift off, SHIFT to descend, WASD to fly!"):this.hud.showToast("Driving: W to Accelerate, A/D to Steer, Space for Drift/Brake")}exitVehicle(){this.activeVehicle&&(this.audioManager.stopEngine(),this.player.exitVehicle(),this.activeVehicle=null,this.cameraController.setMode("player"),this.hud.setMode("player"))}animate(t){requestAnimationFrame(this.animate);const e=Math.min((t-this.lastTime)*.001,.08);this.lastTime=t,this.trafficSystem.update(e,this.activeVehicle,this.player),this.crowdSystem.update(e),this.handleVehicleInteractions(),this.handleObservationElevators();const n=this.cameraController.yaw;this.player.update(e,this.input,n,this.vehicles),this.vehicles.forEach(a=>{const c=a===this.activeVehicle;a.update(e,this.input,c)}),this.bloodVfx.update(e);const i=this.player.isDriving&&this.activeVehicle?this.activeVehicle.position:this.player.position,s=this.player.isDriving&&this.activeVehicle?this.activeVehicle.yaw:this.player.rotation;if(this.player.isDriving&&this.activeVehicle){const a=this.activeVehicle.speedKmh!==void 0?this.activeVehicle.speedKmh:this.activeVehicle.speed?Math.round(this.activeVehicle.speed*3.6):0,c=Number.isFinite(a)?Math.max(0,Math.round(a)):0;this.cameraController.update(e,i,s,c),this.hud.updateSpeed(c)}else this.cameraController.update(e,i,s,0);this.environment.update(e,i),this.minimap.update(i,s,this.vehicles);const o=this.fullMapOverlay.getGpsDirection(i);this.hud.updateGps(o,s),this.hud.updateViewMode(this.cameraController.viewMode),this.input.clearDelta(),this.renderer.render(this.scene,this.camera)}}window.addEventListener("DOMContentLoaded",()=>{new Pv});
