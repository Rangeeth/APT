(function(){
'use strict';
var CS=document.currentScript;
var root=document.documentElement;
function isDark(){var t=root.dataset.theme;if(t==='dark')return true;if(t==='light')return false;return window.matchMedia&&matchMedia('(prefers-color-scheme:dark)').matches}
var sun='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
var moon='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
var th=document.getElementById('th');
function paint(){th.innerHTML=isDark()?sun+'Light':moon+'Dark'}
if(th){paint();th.onclick=function(){var t=isDark()?'light':'dark';root.dataset.theme=t;try{localStorage.setItem('theme',t)}catch(e){}paint()}}

/* search across all notes and podcasts */
(function(){
  var inp=document.getElementById('q'),box=document.getElementById('sr');
  if(!inp||!box||!CS)return;
  var assets=CS.src.slice(0,CS.src.lastIndexOf('/')+1),home=assets.replace(/assets\/$/,'');
  var data=null,loading=false,items=[],sel=-1,timer=null;
  var KIND={d:'Detailed notes',s:'Study notes',p:'Podcast'};
  function norm(s){return s.toLowerCase().replace(/₂/g,'2').replace(/[‘’]/g,"'")}
  function esc(s){return s.replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function rx(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}
  function load(cb){
    if(data){cb();return}
    if(loading)return;loading=true;
    fetch(assets+'search-index.json').then(function(r){return r.json()}).then(function(j){
      j.forEach(function(e){e._t=norm(e.t+' '+e.p+' '+e.l);e._x=norm(e.x)});data=j;loading=false;cb()
    }).catch(function(){loading=false;show('<div class="sr-msg">Search is not available right now.</div>')});
  }
  function show(h){box.innerHTML=h;box.hidden=false}
  function hide(){box.hidden=true;sel=-1}
  function hl(text,terms){
    if(!terms.length)return esc(text);
    var re=new RegExp('('+terms.map(rx).join('|')+')','gi'),out='',last=0,m;
    while((m=re.exec(text))){out+=esc(text.slice(last,m.index))+'<mark>'+esc(m[0])+'</mark>';last=m.index+m[0].length;if(m[0].length===0)re.lastIndex++}
    return out+esc(text.slice(last));
  }
  function run(){
    var q=norm(inp.value).trim();
    if(q.length<2){hide();return}
    var terms=q.split(/[^a-z0-9']+/).filter(function(t){return t.length>0});
    if(!terms.length){hide();return}
    var res=[];
    data.forEach(function(e){
      var s=0;
      for(var i=0;i<terms.length;i++){
        var t=terms[i],inT=e._t.indexOf(t)>=0,p=e._x.indexOf(t);
        if(!inT&&p<0){return}
        if(inT)s+=8;
        if(p>=0){var c=0,k=p;while(k>=0&&c<6){c++;k=e._x.indexOf(t,k+t.length)}s+=c}
      }
      if(terms.length>1&&(e._t.indexOf(q)>=0||e._x.indexOf(q)>=0))s+=10;
      if(e.k==='d')s+=1;
      res.push({e:e,s:s});
    });
    res.sort(function(a,b){return b.s-a.s});
    items=res.slice(0,25);sel=-1;
    if(!items.length){show('<div class="sr-msg">No matches for &ldquo;'+esc(inp.value.trim())+'&rdquo;.</div>');return}
    var h='<div class="sr-count">'+res.length+' result'+(res.length>1?'s':'')+(res.length>25?', showing the best 25':'')+'</div>';
    items.forEach(function(r,i){
      var e=r.e,x=e.x,pos=e._x.indexOf(terms[0]);
      var sn=pos<0?x.slice(0,150):(pos>60?'…':'')+x.slice(Math.max(0,pos-60),pos+150)+(pos+150<x.length?'…':'');
      h+='<a class="sr-item" role="option" data-i="'+i+'" href="'+esc(home+e.u)+'"><span class="sr-k '+e.k+'">'+KIND[e.k]+'</span><b>'+hl(e.t,terms)+'</b><span class="sr-p">'+esc(e.l+(e.p?' › '+e.p:''))+'</span><span class="sr-s">'+hl(sn,terms)+'</span></a>';
    });
    show(h);
  }
  function move(d){
    var els=box.querySelectorAll('.sr-item');if(!els.length)return;
    if(sel>=0)els[sel].classList.remove('on');
    sel=(sel+d+els.length)%els.length;els[sel].classList.add('on');els[sel].scrollIntoView({block:'nearest'});
  }
  inp.addEventListener('input',function(){clearTimeout(timer);timer=setTimeout(function(){load(run)},120)});
  inp.addEventListener('focus',function(){load(function(){if(inp.value.trim().length>=2)run()})});
  inp.addEventListener('keydown',function(e){
    if(e.key==='ArrowDown'){e.preventDefault();move(1)}
    else if(e.key==='ArrowUp'){e.preventDefault();move(-1)}
    else if(e.key==='Enter'){var els=box.querySelectorAll('.sr-item');var t=els[sel>=0?sel:0];if(t){e.preventDefault();location.href=t.href}}
    else if(e.key==='Escape'){hide();inp.blur()}
  });
  document.addEventListener('keydown',function(e){
    var tg=e.target&&e.target.tagName;
    if(e.key==='/'&&tg!=='INPUT'&&tg!=='TEXTAREA'&&tg!=='SELECT'){e.preventDefault();inp.focus();inp.select()}
  });
  document.addEventListener('click',function(e){if(!e.target.closest('.search'))hide()});
  box.addEventListener('click',function(e){var a=e.target.closest('.sr-item');if(a)hide()});
})();

/* contents drawer + scroll spy */
var side=document.getElementById('side'),btn=document.getElementById('tocbtn');
if(side&&btn){
  btn.onclick=function(){var o=!side.classList.contains('open');side.classList.toggle('open',o);btn.setAttribute('aria-expanded',o)};
  side.addEventListener('click',function(e){if(e.target.closest('a'))side.classList.remove('open')});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')side.classList.remove('open')});
  var links={},heads=[];
  side.querySelectorAll('.toc a').forEach(function(a){var id=decodeURIComponent(a.getAttribute('href').slice(1));links[id]=a;var h=document.getElementById(id);if(h)heads.push(h)});
  function spy(){
    var y=window.scrollY+110,cur=null;
    for(var i=0;i<heads.length;i++){if(heads[i].getBoundingClientRect().top+window.scrollY<=y)cur=heads[i];else break}
    side.querySelectorAll('.toc a.on').forEach(function(a){a.classList.remove('on')});
    side.querySelectorAll('.toc li.open').forEach(function(l){l.classList.remove('open')});
    if(!cur)return;
    var a=links[cur.id];if(!a)return;
    a.classList.add('on');
    var li=a.closest('li');if(li){li.classList.add('open');var p=li.parentElement.closest('li');if(p){p.classList.add('open');var pa=p.querySelector(':scope>a');if(pa)pa.classList.add('on')}}
    var r=a.getBoundingClientRect(),sr=side.getBoundingClientRect();
    if(r.top<sr.top+40||r.bottom>sr.bottom-40)side.scrollTop+=r.top-sr.top-sr.height/3;
  }
  var tk=false;window.addEventListener('scroll',function(){if(!tk){tk=true;requestAnimationFrame(function(){tk=false;spy()})}},{passive:true});spy();
}

/* image zoom */
var zs=document.querySelectorAll('a.zoom');
if(zs.length){
  var lb=document.createElement('div');lb.id='lb';
  lb.innerHTML='<div class="bar"><div class="c"></div><button type="button" data-a="fit">Actual size</button><button type="button" data-a="x">Close</button></div><div class="stage"><img alt=""></div>';
  document.body.appendChild(lb);
  var img=lb.querySelector('img'),cap=lb.querySelector('.c'),fb=lb.querySelector('[data-a=fit]');
  function open(a){img.src=a.getAttribute('href');img.alt=a.dataset.cap||'';cap.textContent=a.dataset.cap||'';img.classList.remove('full');fb.textContent='Actual size';lb.classList.add('on')}
  function close(){lb.classList.remove('on');img.removeAttribute('src')}
  function fit(){var f=img.classList.toggle('full');fb.textContent=f?'Fit to screen':'Actual size'}
  zs.forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();open(a)})});
  img.onclick=fit;fb.onclick=fit;lb.querySelector('[data-a=x]').onclick=close;
  lb.addEventListener('click',function(e){if(e.target===lb||e.target.classList.contains('stage'))close()});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&lb.classList.contains('on'))close()});
}
})();
