import './style.css'

const form = document.getElementById('regForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', e => {
  e.preventDefault();
  form.reset();
  successMessage.textContent = 'Sikeres regisztráció';
});