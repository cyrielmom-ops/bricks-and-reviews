document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  var filter = document.getElementById("theme-filter");
  if (filter) {
    var grid = document.getElementById("review-grid");
    filter.addEventListener("change", function () {
      var value = filter.value;
      grid.querySelectorAll(".card").forEach(function (card) {
        var match = value === "alle" || card.dataset.theme === value;
        card.classList.toggle("is-hidden", !match);
      });
    });
  }
});

