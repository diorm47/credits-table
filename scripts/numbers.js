function incrementScore(statItem) {
  const wrapper = statItem.querySelector(".score_wrapper");
  const currentSpan = wrapper.querySelector(".score");
  const currentValue = parseInt(currentSpan.textContent);
  const nextValue = currentValue + 1;

  // Новый элемент
  const spanNext = document.createElement("span");
  spanNext.className = "score next";
  spanNext.textContent = nextValue;

  // Подготовка классов
  currentSpan.classList.add("current");
  wrapper.appendChild(spanNext);

  // Анимация через requestAnimationFrame
  requestAnimationFrame(() => {
    currentSpan.style.transform = "translateY(-100%)";
    spanNext.style.transform = "translateY(0%)";
  });

  // После анимации
  spanNext.addEventListener("transitionend", () => {
    wrapper.innerHTML = "";
    const final = document.createElement("span");
    final.className = "score";
    final.textContent = nextValue;
    wrapper.appendChild(final);
    updateStatItemClasses();
  }, { once: true });
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
