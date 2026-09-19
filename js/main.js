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

function showTab(btn, id) {
  var wrap = btn.closest(".thumb-tabs");
  wrap.querySelectorAll(".tab-buttons button").forEach(function (b) { b.classList.remove("active"); });
  wrap.querySelectorAll(".tab-panel").forEach(function (p) { p.classList.remove("active"); });
  btn.classList.add("active");
  wrap.querySelector("#" + id).classList.add("active");
}

