// ===== Before / after compare slider =====
const range = document.getElementById('compareRange');
const dirty = document.getElementById('dirtyLayer');
const handle = document.getElementById('handle');
function updateCompare(){
  const v = range.value;
  dirty.style.clipPath = `inset(0 ${100 - v}% 0 0)`;
  handle.style.left = v + '%';
}
if (range) {
  range.addEventListener('input', updateCompare);
  updateCompare();
}

// ===== Mobile menu =====
const burger = document.querySelector('.burger');
const mmenu = document.getElementById('mmenu');
if (burger && mmenu) {
  burger.addEventListener('click', () => {
    mmenu.style.display = mmenu.style.display === 'flex' ? 'none' : 'flex';
  });
  document.querySelectorAll('#mmenu a').forEach(a => {
    a.addEventListener('click', () => { mmenu.style.display = 'none'; });
  });
}

// ===== Scroll reveal =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ===== Service tabs =====
const tabs = document.querySelectorAll('.svc-tab');
const panels = document.querySelectorAll('.svc-panel');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-target');
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(target).classList.add('active');
  });
});

// ===== Contact form -> WhatsApp with prefilled message =====
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
  quoteForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('fname').value;
    const phone = document.getElementById('fphone').value;
    const service = document.getElementById('fservice').value;
    const msg = document.getElementById('fmsg').value;
    const text = encodeURIComponent(`Hola Ronald's Clean, soy ${name} (tel: ${phone}). Quiero cotizar: ${service}. ${msg}`);
    window.open(`https://api.whatsapp.com/send?phone=573133464644&text=${text}`, '_blank');
  });
}
