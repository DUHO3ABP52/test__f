const progressInput = document.getElementById('progress');
const progressPercent = document.getElementById('progress-percent');
const progressBar = document.querySelector('.order__progress-bar');

progressInput.addEventListener('input', function() {
  const value = progressInput.value;
  progressPercent.textContent = value + '%';
  progressBar.style.setProperty('--progress-width', value + '%');
});

// Инициализация начального состояния
progressPercent.textContent = progressInput.value + '%';
progressBar.style.setProperty('--progress-width', progressInput.value + '%');
  
  