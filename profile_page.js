const uploadInput = document.getElementById('upload-image');
const profilePic = document.getElementById('profile-pic');

window.addEventListener('DOMContentLoaded', () => {
  const savedImage = localStorage.getItem('profilePic');
  if (savedImage) {
    profilePic.src = savedImage;
  }
});

uploadInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      profilePic.src = e.target.result;
      localStorage.setItem('profilePic', e.target.result);
    };
    reader.readAsDataURL(file);
  }
});

document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");

    document.getElementById("profile-username").textContent = username || '';
    document.getElementById("profile-email").textContent = email || '';
});