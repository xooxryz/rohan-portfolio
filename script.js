// Theme toggle
const toggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';
document.body.dataset.theme = currentTheme;
toggleBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

toggleBtn.addEventListener('click', () => {
  const theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
  document.body.dataset.theme = theme;
  localStorage.setItem('theme', theme);
  toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
});

// QR Code generation
const qrcode = new QRCode(document.getElementById("qrcode"), {
  text: "https://www.instagram.com/xoxryz/",
  width: 100,
  height: 100,
});
