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
