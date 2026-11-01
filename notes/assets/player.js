(function(){
'use strict';
var D=window.PODCAST;if(!D)return;
var $=function(id){return document.getElementById(id)};
var aud=$('aud'),seek=$('seek'),playB=$('play'),capEl=$('cap'),tsEl=$('ts'),chapsEl=$('chaps'),partsEl=$('parts'),trk=$('trk');
var KEY='pod:'+D.slug;
var NAMES={A:'Maya',B:'Dev'};
var cur=-1,cues=[],cueEls=[],idx=-1,follow=true,autoNext=true,subsOn=true,capz=1,wantPlay=false,scrolling=false;
var ICON_PLAY='<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
var ICON_PAUSE='<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>';

function get(k){try{return localStorage.getItem(k)}catch(e){return null}}
function set(k,v){try{localStorage.setItem(k,v)}catch(e){}}
function fmt(s){if(!isFinite(s)||s<0)s=0;s=Math.floor(s);var m=Math.floor(s/60),x=s%60;return m+':'+(x<10?'0':'')+x}
function el(tag,cls,html){var n=document.createElement(tag);if(cls)n.className=cls;if(html!=null)n.innerHTML=html;return n}
function esc(s){return s.replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}

/* parts list */
D.parts.forEach(function(p,i){
  var li=el('li');var b=el('button',null,'<span class="n">'+p.n+'</span><span class="t">'+esc(p.title)+'</span><span class="d">'+fmt(p.dur)+'</span>');
  b.type='button';b.onclick=function(){load(i,0,true)};li.appendChild(b);partsEl.appendChild(li);
});

function buildTranscript(p){
  tsEl.innerHTML='';cueEls=[];cues=p.cues;
  var ci=0,ch=p.chapters;
  p.cues.forEach(function(c,i){
    while(ci<ch.length&&c.t>=ch[ci].t-0.05){var h=el('h3',null,esc(ch[ci].n));h.id='ch'+ci;tsEl.appendChild(h);ci++}
    var d=el('p','cue '+c.s,'<b>'+NAMES[c.s]+'</b>'+esc(c.x));d.dataset.i=i;
    d.onclick=function(){seekTo(c.t+0.01);if(aud.paused)play()};
    tsEl.appendChild(d);cueEls.push(d);
  });
  chapsEl.innerHTML='';
  ch.forEach(function(c,i){var b=el('button','chipb',esc(c.n)+' <span class="mut" style="margin:0">'+fmt(c.t)+'</span>');b.type='button';b.onclick=function(){seekTo(c.t+0.01);if(aud.paused)play()};chapsEl.appendChild(b)});
}

function load(i,t,play){
  if(i<0||i>=D.parts.length)return;
  cur=i;var p=D.parts[i];idx=-1;
  aud.src=p.file;trk.src=p.file.replace(/\.mp3$/,'.vtt');
  $('plpart').textContent=D.topic+' · Part '+p.n+' of '+D.parts.length;
  $('plname').textContent=p.title;
  $('dlmp3').href=p.file;$('dlvtt').href=p.file.replace(/\.mp3$/,'.vtt');
  document.title=p.title+' | '+D.topic+' podcast';
  Array.prototype.forEach.call(partsEl.querySelectorAll('button'),function(b,k){b.classList.toggle('on',k===i);if(k===i)b.setAttribute('aria-current','true');else b.removeAttribute('aria-current')});
  buildTranscript(p);setCap(null);
  seek.max=p.dur;seek.value=t||0;$('tdur').textContent=fmt(p.dur);$('tcur').textContent=fmt(t||0);
  aud.load();
  aud.addEventListener('loadedmetadata',function f(){aud.removeEventListener('loadedmetadata',f);if(cur!==i)return;if(t>0)aud.currentTime=t;if(isFinite(aud.duration)){seek.max=aud.duration;$('tdur').textContent=fmt(aud.duration)}},{once:true});
  aud.playbackRate=parseFloat($('spd').value);
  if(play)playNow();
  if(history.replaceState)history.replaceState(null,'','#p'+p.n);
  if(window.MediaMetadata&&navigator.mediaSession){navigator.mediaSession.metadata=new MediaMetadata({title:'Part '+p.n+': '+p.title,artist:'Maya and Dev',album:D.topic+' Revision Podcast'})}
  setPlayIcon();
}
function playNow(){var pr=aud.play();if(pr&&pr.catch)pr.catch(function(){})}
function play(){playNow()}
function toggle(){aud.paused?playNow():aud.pause()}
function seekTo(t){aud.currentTime=Math.max(0,Math.min(t,(aud.duration||D.parts[cur].dur)-0.05));update(true)}
function setPlayIcon(){var pl=!aud.paused;playB.innerHTML=pl?ICON_PAUSE:ICON_PLAY;playB.setAttribute('aria-label',pl?'Pause':'Play')}

function setCap(c){
  if(!c){capEl.innerHTML='<span class="cap-empty">Press play to start. Subtitles appear here.</span>';return}
  capEl.innerHTML='<span><span class="spk '+c.s+'">'+NAMES[c.s]+'</span>'+esc(c.x)+'</span>';
}
function findCue(t){
  var lo=0,hi=cues.length-1,r=-1;
  while(lo<=hi){var m=(lo+hi)>>1;if(cues[m].t<=t){r=m;lo=m+1}else hi=m-1}
  return r;
}
function update(force){
  var t=aud.currentTime;
  if(!dragging){seek.value=t;}
  $('tcur').textContent=fmt(t);
  var i=findCue(t);
  if(i===idx&&!force)return;
  if(idx>=0&&cueEls[idx])cueEls[idx].classList.remove('on');
  idx=i;
  if(i>=0){
    setCap(cues[i]);
    var n=cueEls[i];n.classList.add('on');
    if(follow&&!aud.paused||force&&follow){
      var r=n.getBoundingClientRect(),pl=$('player').getBoundingClientRect();
      var top=pl.bottom+8,bot=window.innerHeight-20;
      if(r.top<top||r.bottom>bot){scrolling=true;window.scrollTo({top:window.scrollY+r.top-top-60,behavior:'smooth'});setTimeout(function(){scrolling=false},700)}
    }
  }
  save();
}
var lastSave=0;
function save(){var now=Date.now();if(now-lastSave<2000)return;lastSave=now;set(KEY,JSON.stringify({p:cur,t:Math.floor(aud.currentTime)}))}

var dragging=false;
seek.addEventListener('input',function(){dragging=true;$('tcur').textContent=fmt(seek.value)});
seek.addEventListener('change',function(){dragging=false;seekTo(parseFloat(seek.value))});
aud.addEventListener('timeupdate',function(){update(false)});
aud.addEventListener('seeked',function(){update(true)});
aud.addEventListener('play',setPlayIcon);aud.addEventListener('pause',function(){setPlayIcon();lastSave=0;save()});
aud.addEventListener('ended',function(){setPlayIcon();if(autoNext&&cur<D.parts.length-1)load(cur+1,0,true)});
aud.addEventListener('error',function(){capEl.innerHTML='<span class="cap-empty">The audio file could not be loaded.</span>'});
playB.onclick=toggle;
$('back').onclick=function(){seekTo(aud.currentTime-15)};
$('fwd').onclick=function(){seekTo(aud.currentTime+15)};
$('prev').onclick=function(){if(aud.currentTime>5)seekTo(0);else if(cur>0)load(cur-1,0,!aud.paused)};
$('next').onclick=function(){if(cur<D.parts.length-1)load(cur+1,0,!aud.paused)};
$('spd').onchange=function(){aud.playbackRate=parseFloat(this.value);set('pod:speed',this.value)};

/* preferences */
function setSubs(v,s){subsOn=v;document.body.classList.toggle('nosubs',!v);$('subs').setAttribute('aria-pressed',v);if(s)set('pod:subs',v?'1':'0')}
function setSize(z,s){capz=Math.max(.8,Math.min(1.8,z));$('player').style.setProperty('--capz',capz);if(s)set('pod:capz',capz)}
function setFollow(v,s){follow=v;$('follow').setAttribute('aria-pressed',v);if(s)set('pod:follow',v?'1':'0')}
function setAuto(v,s){autoNext=v;$('auto').setAttribute('aria-pressed',v);if(s)set('pod:auto',v?'1':'0')}
$('subs').onclick=function(){setSubs(!subsOn,true)};
$('szm').onclick=function(){setSize(capz-.1,true)};$('szp').onclick=function(){setSize(capz+.1,true)};
$('follow').onclick=function(){setFollow(!follow,true);if(follow)update(true)};
$('auto').onclick=function(){setAuto(!autoNext,true)};
setSubs(get('pod:subs')!=='0');setSize(parseFloat(get('pod:capz'))||1);setFollow(get('pod:follow')!=='0');setAuto(get('pod:auto')!=='0');
var sp=get('pod:speed');if(sp&&Array.prototype.some.call($('spd').options,function(o){return o.value===sp}))$('spd').value=sp;
/* a manual scroll pauses following until the user turns it back on */
window.addEventListener('wheel',function(){if(follow&&!scrolling&&!aud.paused){setFollow(false,false)}},{passive:true});
window.addEventListener('touchmove',function(){if(follow&&!scrolling&&!aud.paused){setFollow(false,false)}},{passive:true});

/* keyboard */
document.addEventListener('keydown',function(e){
  var t=e.target,tag=t&&t.tagName;
  if(e.ctrlKey||e.metaKey||e.altKey)return;
  if(tag==='INPUT'||tag==='SELECT'||tag==='TEXTAREA')return;
  if(e.key===' '&&tag!=='BUTTON'&&tag!=='A'){e.preventDefault();toggle()}
  else if(e.key==='ArrowLeft'){seekTo(aud.currentTime-10)}
  else if(e.key==='ArrowRight'){seekTo(aud.currentTime+10)}
  else if(e.key==='c'||e.key==='C'){setSubs(!subsOn,true)}
});

/* lock-screen / headset controls */
if(navigator.mediaSession){
  var ms=navigator.mediaSession;
  [['play',function(){playNow()}],['pause',function(){aud.pause()}],['seekbackward',function(){seekTo(aud.currentTime-15)}],['seekforward',function(){seekTo(aud.currentTime+15)}],
   ['previoustrack',function(){$('prev').click()}],['nexttrack',function(){$('next').click()}]].forEach(function(a){try{ms.setActionHandler(a[0],a[1])}catch(e){}});
}

/* start: #pN in the link wins, otherwise resume where the listener stopped */
var start=0,t0=0,m=/^#p(\d+)(?:&t=(\d+))?$/.exec(location.hash);
if(m){start=Math.min(Math.max(parseInt(m[1],10),1),D.parts.length)-1;t0=parseInt(m[2]||'0',10)}
else{try{var s=JSON.parse(get(KEY)||'null');if(s&&s.p>=0&&s.p<D.parts.length){start=s.p;t0=s.t||0}}catch(e){}}
load(start,t0,false);
window.addEventListener('hashchange',function(){var mm=/^#p(\d+)(?:&t=(\d+))?$/.exec(location.hash);if(mm){var k=parseInt(mm[1],10)-1,tt=parseInt(mm[2]||'0',10);if(k>=0&&k<D.parts.length){if(k!==cur)load(k,tt,true);else{seekTo(tt+0.01);playNow()}}}});
window.addEventListener('pagehide',function(){lastSave=0;save()});
})();
