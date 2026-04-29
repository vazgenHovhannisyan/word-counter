// частицы
for(let i=0;i<50;i++){
  const p=document.createElement('div');
  p.className='particle';
  const size=Math.random()*4+2;
  p.style.cssText=`width:${size}px;height:${size}px;left:${Math.random()*100}vw;top:${Math.random()*100}vh;animation-duration:${Math.random()*10+5}s`;
  document.body.appendChild(p);
}

// элементы
const t=document.getElementById('text');
const c=document.getElementById('c');
const w=document.getElementById('w');
const s=document.getElementById('s');

// плавная анимация без лагов
function animate(el,val){
  clearInterval(el._interval);

  let cur = +el.textContent;
  if(cur === val) return;

  const diff = val - cur;
  const step = Math.ceil(Math.abs(diff)/20) * Math.sign(diff);

  el._interval = setInterval(()=>{
    cur += step;

    if((step > 0 && cur >= val) || (step < 0 && cur <= val)){
      cur = val;
      clearInterval(el._interval);
    }

    el.textContent = cur;
  },16);
}

// подсчёт
t.addEventListener('input',()=>{
  const text = t.value;

  animate(c, text.length);

  const words = text.split(/\s+/).filter(Boolean);
  animate(w, words.length);

  const sentences = text.split(/[.!?]+/).filter(s=>s.trim().length>0);
  animate(s, sentences.length);
});