// match points
function showMatchPoint() {
  document.querySelector(".match_point").classList.toggle("show_item");
  setTimeout(() => {
    document.querySelector(".match_point").classList.remove("show_item");
  }, 3000);
}

// percents
function showPercents() {
  document.querySelector(".percents_wrapper").classList.toggle("show_item");
  setTimeout(() => {
    document.querySelector(".percents_wrapper").classList.remove("show_item");
  }, 3000);
}

// stats
function showStats() {
  document.querySelector(".stats_wrapper").classList.toggle("show_item");
  setTimeout(() => {
    document.querySelector(".stats_wrapper").classList.remove("show_item");
  }, 3000);
}

// break point
function showBreak() {
  document.querySelector(".breakpoint").classList.toggle("show_item");
  setTimeout(() => {
    document.querySelector(".breakpoint").classList.remove("show_item");
  }, 3000);
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
