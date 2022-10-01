const form = document.getElementById('form');
const bmi = document.getElementById('bmi');
const kriteria = document.getElementById('kriteria');

form.addEventListener('submit', function (event) {
  // cegah page refresh
  event.preventDefault();

  let formData = new FormData(form);
  let values = Object.fromEntries(formData); // { email: ... }

  let hitungBMI = (berat, tinggi) => {
    let BMI = berat / Math.pow(tinggi / 100, 2);
    return BMI.toFixed(2);
  };
  let hasil = hitungBMI(values.berat, values.tinggi);
  if (hasil < 18.5) {
    kriteria.innerText = 'Underweight';
  } else if (hasil < 25.0) {
    kriteria.innerText = 'Normal weight';
  } else if (hasil < 30.0) {
    kriteria.innerText = 'Overweight';
} else {
    kriteria.innerText = 'Obesity';
}
  bmi.innerText = hasil;
});
