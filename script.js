const questions = [
  { q: "Hewan apa yang suka wortel?", a: "kelinci" },
  { q: "Hewan yang hidup di laut dan bertentakel?", a: "gurita" },
  // Tambahkan hingga 50 soal...
];

let current = 0;
let lives = 3;

function showQuestion() {
  document.getElementById("question").innerText = questions[current].q;
}

function submitAnswer() {
  const input = document.getElementById("answer").value.toLowerCase().trim();
  if (input === questions[current].a) {
    showConfetti();
    current++;
    if (current >= questions.length) {
      document.getElementById("question").innerText = "Selamat! Kamu berhasil!";
      document.getElementById("answer").style.display = "none";
    } else {
      showQuestion();
    }
  } else {
    lives--;
    updateLives();
    if (lives <= 0) {
      document.getElementById("question").innerText = "Game Over!";
      document.getElementById("answer").style.display = "none";
      document.getElementById("restart").style.display = "block";
    }
  }
  document.getElementById("answer").value = "";
}

function updateLives() {
  document.getElementById("lives").innerText = "❤️".repeat(lives);
}

function showConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  for (let i = 0; i < 100; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
    ctx.fillRect(x, y, 5, 5);
  }
  setTimeout(() => ctx.clearRect(0, 0, canvas.width, canvas.height), 3000);
}

showQuestion();
