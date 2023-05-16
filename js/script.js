const buttons = document.querySelectorAll('.btn');
const result = document.querySelector('#result');
const equal = document.querySelector('#equal');
const cln = document.querySelector('#cln');
const del = document.querySelector('#del');

window.onload = () => {
  result.value = '';
};

let equal_pressed = 0;

buttons.forEach((btn_class) => {
  btn_class.addEventListener('click', () => {
    if (equal_pressed == 1) {
      result.value = '';
      equal_pressed = 0;
    }
    result.value += btn_class.value;
  });
});

equal.addEventListener('click', () => {
  equal_pressed = 1;
  let res_val = result.value;
  try {
    let solution = eval(res_val);
    if (Number.isInteger(solution)) {
      result.value = solution;
    } else {
      result.value = solution.toFixed(2);
    }
  } catch (err) {
    alert('Invalid Inut');
  }
});

cln.addEventListener('click', () => {
  result.value = '';
});

del.addEventListener('click', () => {
  result.value = result.value.substr(0, result.value.length - 1);
});
