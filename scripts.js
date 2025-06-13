// court
function showCourt() {
  document.querySelector(".court_item").classList.toggle("hidden_court");
}

// match points
function showMatchPoint() {
  document.querySelector(".match_point").classList.toggle("show_item");
}

// percents
function showPercents() {
  document.querySelector(".percents_wrapper").classList.toggle("show_item");
}

// stats
function showStats() {
  document.querySelector(".stats_wrapper").classList.toggle("show_item");
}

// notifications
function cycleShowItems(
  selector = ".fixed_not",
  className = "show_item",
  showDuration = 3000,
  delayBetween = 2000
) {
  const elements = document.querySelectorAll(selector);
  let current = 0;

  function showNext() {
    elements.forEach((el) => el.classList.remove(className));

    const el = elements[current];
    el.classList.add(className);

    setTimeout(() => {
      el.classList.remove(className);

      current = (current + 1) % elements.length;
      setTimeout(showNext, delayBetween);
    }, showDuration);
  }

  if (elements.length > 0) {
    showNext();
  }
}

//
function incrementScore(pElement) {
  let current = parseInt(pElement.textContent);
  let updated = current + 1;
  pElement.textContent = updated;

  pElement.classList.add("animated");
  setTimeout(() => {
    pElement.classList.remove("animated");
  }, 300);

  updateStatItemClasses();
}
//
function updateStatItemClasses() {
  const allItems = document.querySelectorAll(".stat_item");
  let values = [];

  allItems.forEach((item) => {
    const num = parseInt(item.querySelector("p").textContent);
    values.push(num);
  });

  const maxValue = Math.max(...values);

  allItems.forEach((item) => {
    const value = parseInt(item.querySelector("p").textContent);
    if (value === maxValue) {
      item.classList.add("stat_item_selected");
    } else {
      item.classList.remove("stat_item_selected");
    }
  });
}

// клик по числу вызывает увеличение
document.querySelectorAll(".stat_item p").forEach((p) => {
  p.addEventListener("click", () => incrementScore(p));
});
