// Fungsi untuk menangani klik pada tautan navbar
document.querySelectorAll("nav a.nav-link").forEach((navLink) => {
  navLink.addEventListener("click", function (e) {
    e.preventDefault();

    // Menghapus kelas "active" dari semua tautan navbar
    document.querySelectorAll("nav a.nav-link").forEach((link) => {
      link.classList.remove("active");
    });

    // Menghapus kelas "active" dari semua tautan footer
    document.querySelectorAll(".footer a.nav-link").forEach((link) => {
      link.classList.remove("active");
    });

    // Mengambil target dari tautan yang diklik
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    // Menggulir halaman ke elemen target dengan efek smooth
    if (targetElement) {
      window.scrollTo({
        behavior: "smooth",
        top: targetElement.offsetTop,
      });

      // Tambahkan kelas "active" ke tautan yang diklik
      this.classList.add("active");

      // Tambahkan kelas "active" ke tautan footer yang sesuai
      const footerLink = document.querySelector('.footer a.nav-link[href="#' + targetId + '"]');
      if (footerLink) {
        footerLink.classList.add("active");
      }
    }
  });
});

// Fungsi untuk menangani klik pada tautan footer
document.querySelectorAll(".footer a.nav-link").forEach((footerLink) => {
  footerLink.addEventListener("click", function (e) {
    e.preventDefault();

    // Menghapus kelas "active" dari semua tautan navbar
    document.querySelectorAll("nav a.nav-link").forEach((link) => {
      link.classList.remove("active");
    });

    // Menghapus kelas "active" dari semua tautan footer
    document.querySelectorAll(".footer a.nav-link").forEach((link) => {
      link.classList.remove("active");
    });

    // Mengambil target dari tautan yang diklik
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    // Menggulir halaman ke elemen target dengan efek smooth
    if (targetElement) {
      window.scrollTo({
        behavior: "smooth",
        top: targetElement.offsetTop,
      });

      // Tambahkan kelas "active" ke tautan yang diklik
      this.classList.add("active");

      // Tambahkan kelas "active" ke tautan navbar yang sesuai
      const navLink = document.querySelector('nav a.nav-link[href="#' + targetId + '"]');
      if (navLink) {
        navLink.classList.add("active");
      }
    }
  });
});
