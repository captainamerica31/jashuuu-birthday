function sendWish() {
  const wish = document.getElementById("wishText").value.trim();
  if (wish === "") {
    alert("Pehle apni wish likho 💖");
    return;
  }

  document.getElementById("wishMsg").style.display = "block";
  document.querySelector(".confetti").classList.add("blast");
  document.getElementById("wishText").value = "";
}

function openMini(n){
  document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.mini').forEach(m => m.classList.remove('show'));
  document.getElementById('mini'+n).classList.add('show');
}

function closeMini(){
  document.querySelectorAll('.mini').forEach(m => m.classList.remove('show'));
  // show the hub card again
  document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
  const cards = document.querySelectorAll('.card');
  cards[cards.length - 2].classList.add('active');
}

function goToFinal(){
  document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.mini').forEach(m => m.classList.remove('show'));
  document.querySelector('.card.final').classList.add('active');
}

const wishForm = document.querySelector('.card.final form');
if (wishForm) {
  wishForm.addEventListener('submit', () => {
    // show success text
    setTimeout(() => {
      const msg = document.getElementById('wishMsg');
      const txt = document.getElementById('wishText');
      const confetti = document.querySelector('.confetti');

      if (msg) msg.style.display = 'block';
      if (txt) txt.value = '';

      // cute sparkle / confetti blast
      if (confetti) {
        confetti.classList.add('blast');
        setTimeout(() => confetti.classList.remove('blast'), 2500);
      }
    }, 400);
  });
}