document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTop");

  // Add a click event listener to the button
  scrollToTopBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default behavior of the anchor link

    // Use smooth scrolling when clicking the button
    document.body.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
