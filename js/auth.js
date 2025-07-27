const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
const loginSubmit = document.getElementById('loginSubmit');
let registerSubmit = document.getElementById('registerSubmit');

registerBtn.addEventListener('click', () => {
  container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
  container.classList.remove('active');
})

loginSubmit.addEventListener('click', () => {
  window.location.href = "saya/user.html"
})

registerSubmit.addEventListener('click', () => {
  window.location.href = "saya/user.html"
})