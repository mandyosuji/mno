// handles cycling for main page id words
const words = ["creative", "poet", "quilter", "web designer", "writer"];
let i = 0;
const span = document.querySelector(".cycle");

function next() {
  span.textContent = words[i];
  i = (i + 1) % words.length;
}

next(); // set first word immediately
setInterval(next, 2000); // auto-cycle every 2 seconds