const togglerBtn = document.getElementById('toggler-ball'),
  bodyEl = document.querySelector('body')

togglerBtn.addEventListener('click', (e) => bodyEl.classList.toggle('light'))
