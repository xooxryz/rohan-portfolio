// Theme handling
const root = document.documentElement;
const saved = localStorage.getItem('theme') || 'dark';
if(saved === 'light'){ root.classList.add('light'); }
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  root.classList.toggle('light');
  const mode = root.classList.contains('light') ? 'light' : 'dark';
  localStorage.setItem('theme', mode);
  toggle.innerHTML = mode === 'light' ? '<i class="ri-sun-line"></i>' : '<i class="ri-moon-line"></i>';
});
toggle.innerHTML = root.classList.contains('light') ? '<i class="ri-sun-line"></i>' : '<i class="ri-moon-line"></i>';

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple typewriter effect
const textEl = document.getElementById('typewriter');
const phrases = [
  'Flutter Developer',
  'Social Media Specialist',
  'Content Writer',
  'I build delightful mobile apps'
];
let p = 0, i = 0, deleting = false;
function type(){
  const current = phrases[p];
  if(!deleting){
    i++;
    textEl.textContent = current.slice(0, i);
    if(i === current.length){ deleting = true; setTimeout(type, 1200); return; }
  }else{
    i--;
    textEl.textContent = current.slice(0, i);
    if(i === 0){ deleting = false; p = (p+1)%phrases.length; }
  }
  setTimeout(type, deleting ? 40 : 70);
}
type();

// QR modal
const modal = document.getElementById('qr-modal');
const openBtns = [document.getElementById('qr-open'), document.getElementById('qr-open-2')].filter(Boolean);
const closeBtn = document.getElementById('qr-close');
openBtns.forEach(b => b.addEventListener('click', () => {
  modal.classList.add('show');
  // Build QR only once
  if(!document.querySelector('#qrcode canvas, #qrcode img')){
    new QRCode(document.getElementById('qrcode'), {
      text: 'https://www.instagram.com/xoxryz/',
      width: 180, height: 180
    });
  }
}));
closeBtn.addEventListener('click', () => modal.classList.remove('show'));
modal.addEventListener('click', (e) => { if(e.target === modal) modal.classList.remove('show'); });

// Copy email
document.getElementById('copy-mail').addEventListener('click', async () => {
  try{
    await navigator.clipboard.writeText('arifulhaquerohan@gmail.com');
    const btn = document.getElementById('copy-mail');
    const original = btn.innerHTML;
    btn.innerHTML = '<i class="ri-check-line"></i> Copied!';
    setTimeout(() => btn.innerHTML = original, 1200);
  }catch(e){ alert('Copy failed'); }
});
