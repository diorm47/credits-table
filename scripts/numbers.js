function incrementScore(statItem) {
  const wrapper = statItem.querySelector(".score_wrapper");
  const currentSpan = wrapper.querySelector(".score");
  const current = parseInt(currentSpan.textContent);
  const updated = current + 1;

  // Создаём следующий элемент
  const spanNext = document.createElement("span");
  spanNext.className = "score next";
  spanNext.textContent = updated;
  wrapper.appendChild(spanNext);

  // Анимация
  requestAnimationFrame(() => {
    wrapper.style.transform = "translateY(70%)";
  });

  setTimeout(() => {
    wrapper.innerHTML = "";
    const final = document.createElement("span");
    final.className = "score";
    final.textContent = updated;
    wrapper.appendChild(final);
    wrapper.style.transform = "translateY(0)";
    updateStatItemClasses();
  }, 300);
}

function updateStatItemClasses() {
  const allItems = document.querySelectorAll(".stat_item, .stats_finally_item");
  let values = [];

  allItems.forEach((item) => {
    const score = item.querySelector(".score");
    if (score) {
      values.push(parseInt(score.textContent));
    }
  });

  const max = Math.max(...values);

  allItems.forEach((item) => {
    const score = item.querySelector(".score");
    if (!score) return;
    const val = parseInt(score.textContent);
    item.classList.toggle("stat_item_selected", val === max);
  });
}

// Обернуть все <p> в .score_wrapper
document.querySelectorAll(".stat_item, .stats_finally_item").forEach(item => {
  const p = item.querySelector("p");
  if (!p) return;
  const wrapper = document.createElement("div");
  wrapper.className = "score_wrapper";

  const span = document.createElement("span");
  span.className = "score";
  span.textContent = p.textContent;

  wrapper.appendChild(span);
  p.replaceWith(wrapper);
});

// Клик по любому элементу
document.querySelectorAll(".stat_item, .stats_finally_item").forEach(item => {
  item.addEventListener("click", () => incrementScore(item));
});
