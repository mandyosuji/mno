// handles cycling for main page id words
const words = ["creative", "poet", "quilter", "web designer", "writer"];
let i = 0;
const span = document.querySelector(".cycle");
if (span) {
  function next() {
    span.textContent = words[i];
    i = (i + 1) % words.length;
  }
  
  next(); // set first word immediately
  setInterval(next, 2000); // auto-cycle every 2 seconds
}

//cursor?
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseenter', () => cursor.classList.add('active'));
  link.addEventListener('mouseleave', () => cursor.classList.remove('active'));
});

const tabs = document.querySelectorAll('.piece-tab');
if (tabs.length) {
  tabs.forEach(pieceTab => {
    pieceTab.addEventListener('click', e => {
      e.preventDefault();
      document.querySelectorAll('.piece-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.piece').forEach(p => p.classList.remove('active'));
      
      pieceTab.classList.add('active');
      document.getElementById(pieceTab.dataset.piece).classList.add('active');
    });
  });
}