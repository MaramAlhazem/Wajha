function goToPage(pageName) {
  window.location.href = pageName;
}

function openWhatsApp() {
  const phoneNumber = "0556209248";
  const message = "السلام عليكم، أنا صاحب مكان وأرغب بالتواصل مع منصة وجهة.";
  const url = `https://wa.me/${0556209248}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}