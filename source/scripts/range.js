const rangeSlider = document.getElementById('range');

noUiSlider.create(rangeSlider, {
  start: [0, 900],
  connect: true,
  step: 50,
  range: {
    'min': [0],
    'max': [1000]
  }
});

const input0 = document.getElementById('range-input-min');
const input1 = document.getElementById('range-input-max');
const inputs = [input0, input1];

rangeSlider.noUiSlider.on('update', function(values, handle) {
  inputs[handle].value = Math.round(values[handle]);
});

const setRangeSlider = (i, value) => {
  const arr = [null, null];
  arr[i] = value;
  rangeSlider.noUiSlider.set(arr);
};

inputs.forEach((el, index) => {
  el.addEventListener('change', (e) => {
    setRangeSlider(index, e.currentTarget.value);
  });
});
