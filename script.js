const togglerBtn = document.getElementById('toggler-ball'),
  mainEl = document.querySelector('.main-container')

togglerBtn.addEventListener('click', (e) => mainEl.classList.toggle('light'))
