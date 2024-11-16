var email = document.getElementById("email");
var comment = document.getElementById("text");
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  // Validasi sederhana untuk email
  if (!email.value || !email.value.includes("@")) {
    alert("Please enter a valid email address!");
    email.style.border = "2px solid red"; // Tambahkan border merah
    setTimeout(() => (email.style.border = ""), 2000); // Hilangkan efek setelah 2 detik
    return;
  }

  // Validasi untuk komentar kosong
  if (!comment.value) {
    alert("Please add your comment!");
    comment.style.border = "2px solid red"; // Tambahkan border merah
    setTimeout(() => (comment.style.border = ""), 2000); // Hilangkan efek setelah 2 detik
    return;
  }

  // Hapus isi input setelah validasi berhasil
  email.value = ""; // Hapus teks di input email
  comment.value = ""; // Hapus teks di textarea

  // Tampilkan pesan sukses dengan animasi
  var successMessage = document.createElement("div");
  successMessage.innerText = "Thanks for your feedback!";
  successMessage.style.position = "fixed";
  successMessage.style.bottom = "20px";
  successMessage.style.right = "20px";
  successMessage.style.padding = "20px 30px";
  successMessage.style.backgroundColor = "linear-gradient(to right, #4CAF50, #81C784)"; // Gradasi hijau
  successMessage.style.color = "black";
  successMessage.style.borderRadius = "10px";
  successMessage.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
  successMessage.style.fontFamily = "Arial, sans-serif";
  successMessage.style.fontSize = "18px";
  successMessage.style.fontWeight = "bold";
  successMessage.style.textAlign = "center";
  successMessage.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.5)";
  successMessage.style.opacity = "0";
  successMessage.style.transition = "all 0.5s ease-in-out";
  
  // Tambahkan ke body
  document.body.appendChild(successMessage);

  // Efek animasi masuk
  setTimeout(() => {
    successMessage.style.opacity = "1";
    successMessage.style.transform = "translateY(-10px)";
  }, 10);

  // Efek menghilang
  setTimeout(() => {
    successMessage.style.opacity = "0"; // Mulai hilang
    successMessage.style.transform = "translateY(10px)";
    setTimeout(() => successMessage.remove(), 500); // Hapus elemen
  }, 3000); // Tampilkan selama 3 detik
});

