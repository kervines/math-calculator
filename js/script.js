const result = document.querySelector('.result');
const buttons = document.querySelectorAll('.btn');
// const clear = document.querySelector('.cln');

buttons.forEach((e) => {
  e.addEventListener('click', () => {
    result.innerHTML += e.innerHTML;

    if (e.innerHTML === 'AC') {
      clearAll();
    }
  });
});

const clearAll = () => {
  result.innerHTML = '';
};
