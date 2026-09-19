document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  var filter = document.getElementById("theme-filter");
  var search = document.getElementById("set-search");
  var grid = document.getElementById("review-grid");
  if (grid && (filter || search)) {
    function applyFilters() {
      var theme = filter ? filter.value : "alle";
      var query = search ? search.value.trim().toLowerCase() : "";
      grid.querySelectorAll(".card").forEach(function (card) {
        var themeMatch = theme === "alle" || card.dataset.theme === theme;
        var textMatch = !query || card.textContent.toLowerCase().indexOf(query) !== -1;
        card.classList.toggle("is-hidden", !(themeMatch && textMatch));
      });
    }
    if (filter) filter.addEventListener("change", applyFilters);
    if (search) search.addEventListener("input", applyFilters);
  }
});

function showTab(btn, id) {
  var wrap = btn.closest(".thumb-tabs");
  wrap.querySelectorAll(".tab-buttons button").forEach(function (b) { b.classList.remove("active"); });
  wrap.querySelectorAll(".tab-panel").forEach(function (p) { p.classList.remove("active"); });
  btn.classList.add("active");
  wrap.querySelector("#" + id).classList.add("active");
}

