/* NEET Tracker - Made by Md Imamuddin */
var D={
P:{n:'Physics',e:'⚛️',k:'--p',11:['Units and Measurements','Motion in a Straight Line','Motion in a Plane','Laws of Motion','Work, Energy and Power','System of Particles and Rotational Motion','Gravitation','Mechanical Properties of Solids','Mechanical Properties of Fluids','Thermal Properties of Matter','Thermodynamics','Kinetic Theory','Oscillations','Waves'],
12:['Electric Charges and Fields','Electrostatic Potential and Capacitance','Current Electricity','Moving Charges and Magnetism','Magnetism and Matter','Electromagnetic Induction','Alternating Current','Electromagnetic Waves','Ray Optics and Optical Instruments','Wave Optics','Dual Nature of Radiation and Matter','Atoms','Nuclei','Semiconductor Electronics']},
C:{n:'Chemistry',e:'🧪',k:'--c',11:['Some Basic Concepts of Chemistry','Structure of Atom','Classification of Elements and Periodicity','Chemical Bonding and Molecular Structure','Thermodynamics','Equilibrium','Redox Reactions','p-Block Elements (Group 13 & 14)','Organic Chemistry: Basic Principles','Hydrocarbons'],
12:['Solutions','Electrochemistry','Chemical Kinetics','d- and f-Block Elements','Coordination Compounds','Haloalkanes and Haloarenes','Alcohols, Phenols and Ethers','Aldehydes, Ketones and Carboxylic Acids','Amines','Biomolecules','p-Block Elements (Group 15–18)']},
B:{n:'Biology',e:'🧬',k:'--b',11:['The Living World|C','Biological Classification|C','Plant Kingdom|B','Animal Kingdom|Z','Morphology of Flowering Plants|B','Anatomy of Flowering Plants|B','Structural Organisation in Animals|Z','Cell: The Unit of Life|C','Biomolecules|C','Cell Cycle and Cell Division|C','Transport in Plants|B','Mineral Nutrition|B','Photosynthesis in Higher Plants|B','Respiration in Plants|B','Plant Growth and Development|B','Digestion and Absorption|Z','Breathing and Exchange of Gases|Z','Body Fluids and Circulation|Z','Excretory Products and Elimination|Z','Locomotion and Movement|Z','Neural Control and Coordination|Z','Chemical Coordination and Integration|Z'],
12:['Sexual Reproduction in Flowering Plants|B','Human Reproduction|Z','Reproductive Health|Z','Principles of Inheritance and Variation|C','Molecular Basis of Inheritance|C','Evolution|Z','Human Health and Disease|Z','Microbes in Human Welfare|B','Biotechnology: Principles and Processes|C','Biotechnology and its Applications|C','Organisms and Populations|B','Ecosystem|B','Biodiversity and Conservation|B']}};
var TG={B:'Botany',Z:'Zoology',C:'Both'};
var S={exam:'2027-05-03',ch:{},log:{}};
try{var r=localStorage.getItem('neet_v1');if(r)S=Object.assign(S,JSON.parse(r))}catch(e){}
var TH='';try{TH=localStorage.getItem('neet_th')||''}catch(e){}if(TH)document.documentElement.setAttribute('data-theme',TH);
S.mt=S.mt||[];var V={s:'T',cl:'all',f:'all',q:''};
var QT=['Roz ka thoda sa kaam, kal ka bada fark.','NCERT ek baar line-by-line, phir sab easy.','Aaj ke 50 questions, kal ka confidence.','Revision hi rank banata hai.','Weak chapter ko aaj chuo, kal woh strong hoga.','Phone side me, timer start karo.','Ek chapter aur, phir break.'];
var T={m:25,left:1500,run:0,iv:0};
function fmt(n){return String(Math.floor(n/60)).padStart(2,'0')+':'+String(n%60).padStart(2,'0')}
function toast(m){var d=document.createElement('div');d.className='toast';d.textContent=m;document.body.appendChild(d);setTimeout(function(){d.remove()},2400)}
function fin(b,s){if(b<100&&pr(s)>=100)toast('🎉 Chapter complete! Shabash!')}
function tick(){T.left--;var e=document.getElementById('tm');if(e)e.textContent=fmt(T.left);if(T.left<=0){clearInterval(T.iv);T.run=0;var l=S.log[today()]||(S.log[today()]={q:0,h:0,txt:''});l.h=Math.round((l.h+T.m/60)*100)/100;save();T.left=T.m*60;try{navigator.vibrate&&navigator.vibrate(400)}catch(x){}toast('⏱ Session complete! Hours add ho gaye.');draw()}}
function timerBox(){return '<div class="box" style="text-align:center"><div class="lbl">Focus khatam hone par hours Daily Log me add ho jate hain</div><div class="big" id="tm" style="font-size:46px;margin:8px 0">'+fmt(T.left)+'</div><div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap"><button class="btn" id="ts">'+(T.run?'Pause':'Start')+'</button><button class="btn g" data-tm="25">25 min</button><button class="btn g" data-tm="50">50 min</button><button class="btn g" id="tr">Reset</button></div></div>'}
function mockBox(){var m=S.mt.slice(-7),avg=S.mt.length?Math.round(S.mt.reduce(function(a,x){return a+x.p+x.c+x.b},0)/S.mt.length):0;var h='<div class="box"><div class="row">Phy <input type="number" id="mp" placeholder="/180"> Chem <input type="number" id="mc" placeholder="/180"> Bio <input type="number" id="mb" placeholder="/360"> <button class="btn" id="ma">Add test</button></div>';if(m.length){h+='<div style="display:flex;align-items:flex-end;gap:6px;height:130px;margin-top:12px">'+m.map(function(x){var t=x.p+x.c+x.b;return '<div style="flex:1;text-align:center;font-size:11px"><div style="background:var(--hl);color:#101826;border-radius:6px 6px 0 0;height:'+Math.max(16,Math.min(100,t/720*100))+'px;font-weight:600;line-height:16px">'+t+'</div>'+x.d.slice(5)+'</div>'}).join('')+'</div><div class="lbl">Average '+avg+'/720 · '+S.mt.length+' tests <button class="chip" id="md">Last wala delete</button></div>'}else h+='<div class="lbl" style="margin-top:8px">Pehla mock test score add karo, graph yahan dikhega.</div>';return h+'</div>'}
function save(){try{localStorage.setItem('neet_v1',JSON.stringify(S))}catch(e){}}
function g(id){return S.ch[id]||(S.ch[id]={c:0,n:0,r1:0,r2:0,r3:0,q:0,t:150,d:'',w:0,note:''})}
function pr(s){return Math.round(s.c*25+s.n*15+Math.min(1,s.q/Math.max(1,s.t))*40+s.r1*7+s.r2*7+s.r3*6)}
function today(){var d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function all(sk){var o=[];Object.keys(D).forEach(function(k){if(sk&&sk!==k)return;[11,12].forEach(function(c){D[k][c].forEach(function(x,i){var p=x.split('|');o.push({id:k+c+'_'+i,k:k,c:c,name:p[0],tag:p[1]})})})});return o}
function late(s){return s.d&&s.d<today()&&pr(s)<100}
function stat(sk){var a=all(sk),sum=0,done=0,q=0;a.forEach(function(x){var s=g(x.id),p=pr(s);sum+=p;if(p>=100)done++;q+=s.q});return{n:a.length,avg:Math.round(sum/a.length),done:done,q:q}}
function esc(t){return String(t).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function streak(){var n=0,d=new Date();for(var i=0;i<400;i++){var k=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');var l=S.log[k];if(l&&(l.q>0||l.h>0))n++;else if(i>0)break;d.setDate(d.getDate()-1)}return n}
function bar(p,col){return '<div class="bar"><i style="width:'+p+'%;'+(col?'--col:var('+col+')':'')+'"></i></div>'}
function tabs(){var h='<button class="tab'+(V.s==='T'?' on':'')+'" data-s="T">📅 Aaj</button>';Object.keys(D).forEach(function(k){h+='<button class="tab'+(V.s===k?' on':'')+'" data-s="'+k+'">'+D[k].e+' '+D[k].n+'</button>'});document.getElementById('tabs').innerHTML=h}
function days(){return Math.max(0,Math.ceil((new Date(S.exam+'T00:00:00')-new Date(today()+'T00:00:00'))/864e5))}
function report(){var t=today(),l=S.log[t]||{q:0,h:0,txt:''},a=all(),od=a.filter(function(x){return late(g(x.id))});
var L=['NEET Daily Update – '+t,'Questions today: '+l.q,'Study hours: '+l.h,'Streak: '+streak()+' days','Days left: '+days(),''];
Object.keys(D).forEach(function(k){var s=stat(k);L.push(D[k].n+': '+s.avg+'% | '+s.done+'/'+s.n+' chapters done | '+s.q+' Qs total')});
L.push('','Overdue: '+(od.length?od.map(function(x){return x.name}).join(', '):'none'),'','Notes: '+(l.txt||'-'));return L.join('\n')}
function ring(p){var r=40,c=2*Math.PI*r;return '<svg width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="var(--line)" stroke-width="10"/><circle cx="50" cy="50" r="40" fill="none" stroke="var(--hl)" stroke-width="10" stroke-linecap="round" stroke-dasharray="'+(c*p/100)+' '+c+'" transform="rotate(-90 50 50)"/><text x="50" y="57" text-anchor="middle" font-size="22" font-weight="800" fill="var(--ink)">'+p+'%</text></svg>'}
function home(){var a=all(),st=stat(),t=today(),l=S.log[t]||{q:0,h:0,txt:''};
var due=a.filter(function(x){var s=g(x.id);return s.d&&s.d<=t&&pr(s)<100}).sort(function(x,y){return g(x.id).d<g(y.id).d?-1:1});
var weak=a.filter(function(x){return g(x.id).w});
var h='<div class="hero">'+ring(st.avg)+'<div><b>'+(days()?days()+' din bache hain':'Best of luck! 🎉')+'</b><div class="lbl">'+st.q+' questions solve · streak '+streak()+' din · '+a.filter(function(x){return pr(g(x.id))>=100}).length+' chapters complete</div></div></div><div class="box" style="margin-bottom:10px">💡 '+QT[new Date().getDate()%QT.length]+'</div><div class="grid"><div class="box"><div class="big">'+days()+'</div><div class="lbl">din bache NEET me</div><input type="date" data-exam value="'+S.exam+'" style="margin-top:6px;width:100%"></div>';
h+='<div class="box"><div class="big">'+st.avg+'%</div><div class="lbl">total syllabus complete</div>'+bar(st.avg)+'</div>';
h+='<div class="box"><div class="big">🔥 '+streak()+'</div><div class="lbl">din ki streak</div></div>';
h+='<div class="box"><div class="big">'+st.q+'</div><div class="lbl">total questions solve</div></div></div>';
h+='<h3>Subject-wise</h3><div class="grid">';
Object.keys(D).forEach(function(k){var s=stat(k);h+='<div class="box" style="--col:var('+D[k].k+')"><b>'+D[k].e+' '+D[k].n+'</b> <span class="pct" style="float:right">'+s.avg+'%</span>'+bar(s.avg,D[k].k)+'<div class="lbl">'+s.done+'/'+s.n+' chapters complete · '+s.q+' Qs</div></div>'});
h+='</div><h3>⏱ Focus timer</h3>'+timerBox()+'<h3>📝 Mock tests (NEET /720)</h3>'+mockBox()+'<h3>Aaj ka log ✍️</h3><div class="box"><div class="row">Aaj ke questions <input type="number" data-lg="q" value="'+l.q+'"> Hours <input type="number" step="0.5" data-lg="h" value="'+l.h+'"></div><textarea data-lg="txt" placeholder="Aaj kya padha, kya reh gaya, kya galat hua..." style="margin-top:8px">'+esc(l.txt||'')+'</textarea>';
h+='<div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap"><a class="btn" id="mail" href="#">📧 Mail daily update</a><button class="btn g" id="cp">Copy report</button></div></div>';
h+='<h3>Deadline aa gayi / aaj ki 🚨</h3><div class="box">'+(due.length?due.map(function(x){var s=g(x.id);return '<div class="item"><b>'+D[x.k].e+' '+esc(x.name)+'</b> (Class '+x.c+') · '+s.d+' · '+pr(s)+'%</div>'}).join(''):'<div class="lbl">Kuch pending nahi. Deadline set karo chapters me.</div>')+'</div>';
h+='<h3>⭐ Weak chapters</h3><div class="box">'+(weak.length?weak.map(function(x){return '<div class="item">'+D[x.k].e+' '+esc(x.name)+' · '+pr(g(x.id))+'%</div>'}).join(''):'<div class="lbl">Chapter me ⭐ dabao to yahan dikhega.</div>')+'</div>';
h+='<details><summary>Backup / restore (data sirf is browser me save hai)</summary><textarea id="bk">'+esc(JSON.stringify(S))+'</textarea><div style="margin-top:6px;display:flex;gap:8px;flex-wrap:wrap"><button class="btn g" id="rs">Restore from box</button><button class="btn g" id="dl">⬇ Download backup file</button><button class="btn g" id="ul">⬆ Upload backup file</button><input type="file" id="uf" accept=".json" hidden></div></details>';
return h}
function card(x){var s=g(x.id),p=pr(s),k=D[x.k].k,cl=['ch'];if(p>=100)cl.push('done');if(late(s))cl.push('late');
function pl(f,t){return '<button class="pill'+(s[f]?' on':'')+'" data-t="'+f+'" data-id="'+x.id+'">'+t+'</button>'}
return '<div class="'+cl.join(' ')+'" style="--col:var('+k+')"><div class="top"><div><span class="nm">'+esc(x.name)+'</span>'+(x.tag?'<span class="tag">'+TG[x.tag]+'</span>':'')+'<div class="lbl">Class '+x.c+'</div></div><div><span class="pct">'+p+'%</span> <button class="star'+(s.w?' on':'')+'" data-t="w" data-id="'+x.id+'">⭐</button></div></div>'+bar(p,k)+
'<div class="pills">'+pl('c','📖 Concept padh liya')+pl('n','📘 NCERT line-by-line')+pl('r1','🔁 Rev 1')+pl('r2','🔁 Rev 2')+pl('r3','🔁 Rev 3')+'</div>'+
'<div class="row">Questions <input type="number" data-f="q" data-id="'+x.id+'" value="'+s.q+'"> / <input type="number" data-f="t" data-id="'+x.id+'" value="'+s.t+'"> &nbsp; Kab tak <input type="date" data-f="d" data-id="'+x.id+'" value="'+s.d+'"></div>'+
'<details><summary>Notes (formulas, mistakes, kya bacha)</summary><textarea data-f="note" data-id="'+x.id+'">'+esc(s.note)+'</textarea></details></div>'}
function sub(){var k=V.s,a=all(k),st=stat(k);
var h='<div class="box" style="--col:var('+D[k].k+')"><b>'+D[k].e+' '+D[k].n+'</b> · '+st.done+'/'+st.n+' complete'+bar(st.avg,D[k].k)+'</div><div class="chips">';
[['all','Sab'],[11,'Class 11'],[12,'Class 12']].forEach(function(c){h+='<button class="chip'+(V.cl===c[0]?' on':'')+'" data-cl="'+c[0]+'">'+c[1]+'</button>'});
h+='</div><div class="chips">';
[['all','All'],['pending','Pending'],['late','Overdue'],['weak','⭐ Weak'],['done','Done']].forEach(function(c){h+='<button class="chip'+(V.f===c[0]?' on':'')+'" data-f2="'+c[0]+'">'+c[1]+'</button>'});
h+='</div><input data-q placeholder="🔍 Chapter search..." value="'+esc(V.q)+'" style="width:100%;margin-bottom:6px">';
a=a.filter(function(x){var s=g(x.id),p=pr(s);if(V.q&&x.name.toLowerCase().indexOf(V.q.toLowerCase())<0)return false;if(V.cl!=='all'&&x.c!=V.cl)return false;if(V.f==='pending')return p<100;if(V.f==='late')return late(s);if(V.f==='weak')return s.w;if(V.f==='done')return p>=100;return true});
return h+(a.length?a.map(card).join(''):'<div class="box lbl">Is filter me koi chapter nahi.</div>')}
function draw(){tabs();document.getElementById('sub').textContent='NCERT + NEET syllabus · '+all().length+' chapters · progress = concept 25 + NCERT 15 + questions 40 + revisions 20';document.getElementById('app').innerHTML=V.s==='T'?home():sub()}
document.addEventListener('click',function(e){var t=e.target.closest('button,a');if(!t)return;
if(t.dataset.s){V.s=t.dataset.s;draw();window.scrollTo(0,0)}
else if(t.dataset.cl){V.cl=t.dataset.cl;draw()}
else if(t.dataset.f2){V.f=t.dataset.f2;draw()}
else if(t.dataset.t){var s=g(t.dataset.id),b=pr(s);s[t.dataset.t]=s[t.dataset.t]?0:1;save();draw();fin(b,s)}
else if(t.id==='ts'){if(T.run){clearInterval(T.iv);T.run=0}else{T.run=1;T.iv=setInterval(tick,1000)}draw()}
else if(t.dataset.tm||t.id==='tr'){clearInterval(T.iv);T.run=0;if(t.dataset.tm)T.m=+t.dataset.tm;T.left=T.m*60;draw()}
else if(t.id==='ma'){var v=['mp','mc','mb'].map(function(i){return Math.max(0,+document.getElementById(i).value||0)});S.mt.push({d:today(),p:v[0],c:v[1],b:v[2]});save();draw()}
else if(t.id==='md'){S.mt.pop();save();draw()}
else if(t.id==='cp'){try{navigator.clipboard.writeText(report());t.textContent='Copied ✓'}catch(x){t.textContent='Copy nahi hua'}}
else if(t.id==='mail'){e.preventDefault();location.href='mailto:?subject='+encodeURIComponent('NEET Daily Update '+today())+'&body='+encodeURIComponent(report())}
else if(t.id==='th'){TH=document.documentElement.getAttribute('data-theme')==='light'||(!document.documentElement.getAttribute('data-theme')&&matchMedia('(prefers-color-scheme:light)').matches)?'dark':'light';document.documentElement.setAttribute('data-theme',TH);try{localStorage.setItem('neet_th',TH)}catch(x){}}
else if(t.id==='dl'){var a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(S)],{type:'application/json'}));a.download='neet-backup-'+today()+'.json';a.click()}
else if(t.id==='ul'){document.getElementById('uf').click()}
else if(t.id==='rs'){try{S=Object.assign(S,JSON.parse(document.getElementById('bk').value));save();draw()}catch(x){t.textContent='Galat data'}}});
document.addEventListener('change',function(e){var t=e.target;
if(t.dataset.f){var s=g(t.dataset.id),f=t.dataset.f,b=pr(s);s[f]=(f==='q'||f==='t')?Math.max(0,+t.value||0):t.value;save();draw();fin(b,s)}
else if(t.dataset.lg){var l=S.log[today()]||(S.log[today()]={q:0,h:0,txt:''}),f2=t.dataset.lg;l[f2]=f2==='txt'?t.value:(+t.value||0);save();draw()}
else if(t.id==='uf'&&t.files[0]){var fr=new FileReader();fr.onload=function(){try{S=Object.assign(S,JSON.parse(fr.result));save();draw()}catch(x){alert('File sahi nahi hai')}};fr.readAsText(t.files[0])}
else if('exam' in t.dataset){S.exam=t.value||S.exam;save();draw()}});
document.addEventListener('input',function(e){var t=e.target;if('q' in t.dataset){V.q=t.value;draw();var n=document.querySelector('[data-q]');n.focus();n.setSelectionRange(n.value.length,n.value.length)}});
draw();
if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0)navigator.serviceWorker.register('sw.js').catch(function(){});
