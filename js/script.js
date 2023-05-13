const result = document.querySelector('.result');
const buttons = document.querySelectorAll('.btn');
const normal = document.querySelector('.normal');
const dark = document.querySelector('.dark');
const light = document.querySelector('.light');
const body = document.body;

buttons.forEach((e) => {
  e.addEventListener('click', () => {
    if (result.innerHTML.length < 12) result.innerHTML += e.innerHTML;
    if (e.innerHTML === 'AC') {
      clearAll();
    }
  });
});

const clearAll = () => {
  result.innerHTML = '';
};

//===================== Color mode =======================//
normal.addEventListener('click', () => {
  if (
    body.classList.contains('dark-mode') ||
    body.classList.contains('light-mode')
  ) {
    body.classList.remove('dark-mode');
    body.classList.remove('light-mode');
  }
});
dark.addEventListener('click', () => {
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
  }
  body.classList.add('dark-mode');
});
light.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
  }
  body.classList.add('light-mode');
});
