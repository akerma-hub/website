                      document.addEventListener("DOMContentLoaded", () => {
  const ctaButton = document.querySelector(".cta-button");

  if (ctaButton) {
    ctaButton.addEventListener("click", function (event) {
      event.preventDefault();

      // Agar overlay pehle se maujood nahi hai to banayein
      let overlay = document.createElement("div");
      overlay.classList.add("transition-overlay");
      overlay.innerHTML = `
        <div class="transition-text">
          <h2>🚀 Let’s Bring Your Vision to Life</h2>
          <p>Preparing your creative space...</p>
        </div>
      `;
      document.body.appendChild(overlay);

      // Force browser reflow taaki animation properly start ho
      overlay.offsetHeight; // ✅ THIS LINE IS THE FIX

      // Animation trigger karna
      overlay.classList.add("active");

      // Redirect after animation
      setTimeout(() => {
        window.location.href = "contact.html";
      }, 2500);
    });
  }
});