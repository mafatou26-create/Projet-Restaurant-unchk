// Smooth scroll for local anchors
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      // allow external links
      const href = this.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Reservation form handling
  const form = document.getElementById("reservation-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nom = document.getElementById("nom").value.trim();
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;
      const personnes = document.getElementById("personnes").value;
      if (!nom || !date || !time || !personnes) {
        alert("Veuillez remplir tous les champs");
        return;
      }
      alert(
        `Réservation confirmée : \n${nom} - ${date} ${time} - ${personnes} personne(s)`
      );
      form.reset();
    });
  }
});
