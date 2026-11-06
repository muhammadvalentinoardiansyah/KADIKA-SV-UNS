const grid=document.querySelector("#departmentGrid");
const dialog=document.querySelector("#departmentDialog");
const dialogContent=document.querySelector("#dialogContent");
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
departments.forEach((d,i)=>{
 const card=document.createElement("article"); card.className="department-card";
 card.innerHTML=`<div class="dept-index">DEPARTEMEN / 0${i+1}</div><div class="dept-logo-wrap"><img src="assets/departemen/${encodeURIComponent(d.logo)}" alt="Logo ${esc(d.name)}" loading="lazy"></div><h3>${esc(d.name)}</h3><button class="detail-button" type="button">Lihat proker & tugas <span>↗</span></button>`;
 card.querySelector("button").addEventListener("click",()=>openDepartment(d,i)); grid.appendChild(card);
});
function list(items){return items.length?`<ul>${items.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`:'<p class="empty-note">Belum ada daftar yang ditambahkan.</p>'}
function openDepartment(d,i){
 dialogContent.innerHTML=`<p class="kicker">DEPARTEMEN / 0${i+1}</p><h2>${esc(d.name)}</h2><div class="dialog-columns"><section><h3>Program Kerja</h3>${list(d.proker)}</section><section><h3>Tugas & Tanggung Jawab</h3>${list(d.tasks)}</section></div>`;
 dialog.showModal();
}
document.querySelector(".dialog-close").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});
const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav");
toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",open)});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false")}));
document.querySelector("#year").textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".value-card,.department-card,.quote-band,.activity-strip").forEach(el=>{el.classList.add("reveal");observer.observe(el)});