const story=[
 {title:"First of all...",text:"This isn't another birthday text you can reply to with a thumbs-up.",icon:"✦"},
 {title:"I had a plan.",text:"I could've just typed \"Happy Birthday\" and disappeared. But you're worth a little more effort than that.",icon:"♡"},
 {title:"Then I remembered...",text:"You're one of those rare people who make ordinary days feel like memories.",icon:"∞"},
 {title:"So here we are.",text:"No big speech. No emotional damage. Just one small reminder that you're appreciated, in writing.",icon:"♥"}
];

const hero=document.getElementById("hero");
const storyEl=document.getElementById("story");
const birthday=document.getElementById("birthday");
const final=document.getElementById("final");
const leaf=document.querySelector(".leaf");
const beginBtn=document.getElementById("beginBtn");
const nextBtn=document.getElementById("nextBtn");
const giftBtn=document.getElementById("giftBtn");
const replayBtn=document.getElementById("replayBtn");

let step=0;

function crossFade(hideEl,showEl,after){
 hideEl.animate(
  [{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-14px)"}],
  {duration:450,easing:"ease"}
 ).onfinish=()=>{
  hideEl.classList.add("hidden");
  showEl.classList.remove("hidden");
  showEl.animate(
   [{opacity:0,transform:"translateY(16px)"},{opacity:1,transform:"translateY(0)"}],
   {duration:600,easing:"cubic-bezier(.2,.8,.2,1)"}
  );
  if(after)after();
 };
}

function turnPage(){
 leaf.animate(
  [{opacity:1,transform:"rotateY(0deg)"},{opacity:0,transform:"rotateY(-12deg)"}],
  {duration:320,easing:"ease-in"}
 ).onfinish=()=>{
  renderStory();
  leaf.animate(
   [{opacity:0,transform:"rotateY(10deg)"},{opacity:1,transform:"rotateY(0deg)"}],
   {duration:380,easing:"cubic-bezier(.2,.8,.2,1)"}
  );
 };
}

function renderStory(){
 const s=story[step];
 document.getElementById("counter").textContent=`Page ${step+1} of ${story.length}`;
 document.getElementById("icon").textContent=s.icon;
 document.getElementById("storyTitle").textContent=s.title;
 document.getElementById("storyText").textContent=s.text;
 nextBtn.textContent=step===story.length-1?"One more page":"Turn the page";
}

function riseEmbers(){
 const box=document.getElementById("embers");
 box.innerHTML="";
 for(let i=0;i<28;i++){
  const p=document.createElement("i");
  p.className="ember";
  p.style.left=Math.random()*100+"%";
  p.style.setProperty("--drift",(Math.random()*60-30)+"px");
  p.style.animationDelay=Math.random()*2.5+"s";
  p.style.animationDuration=4+Math.random()*3+"s";
  box.appendChild(p);
 }
}

beginBtn.addEventListener("click",()=>{
 crossFade(hero,storyEl,renderStory);
});

nextBtn.addEventListener("click",()=>{
 if(step<story.length-1){
  step++;
  turnPage();
 }else{
  crossFade(storyEl,birthday,riseEmbers);
 }
});

giftBtn.addEventListener("click",()=>{
 crossFade(birthday,final);
});

replayBtn.addEventListener("click",()=>location.reload());
