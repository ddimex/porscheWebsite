const model = document.getElementById("model");
const dropDown = document.getElementById("dropDown");

model.addEventListener("mouseover", () => {
  dropDown.classList.add("active");
  clearTimeout(timeoutID);
});

model.addEventListener("mouseout", () => {
  timeoutID = setTimeout(() => {
    dropDown.classList.remove("active");
  }, 400);
});

dropDown.addEventListener("mouseover", () => {
  dropDown.classList.add("active");
  clearTimeout(timeoutID);
});

dropDown.addEventListener("mouseout", () => {
  timeoutID = setTimeout(() => {
    dropDown.classList.remove("active");
  }, 400);
});

const cards = document.querySelectorAll(".card2");

cards.forEach(card => {
    const img1 = card.querySelector("img.active");
    const img2 = card.querySelector("img.inactive");

    card.addEventListener("mouseover", () => {
        img1.classList.remove("active");
        img1.classList.add("inactive");
        img2.classList.remove("inactive");
        img2.classList.add("active");
    });

    card.addEventListener("mouseout", () => {
        img1.classList.remove("inactive");
        img1.classList.add("active");
        img2.classList.remove("active");
        img2.classList.add("inactive");
    });
});