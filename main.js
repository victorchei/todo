document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const cards = document.querySelector(".cards");

  const list = [
    { text: "зробити todo" },
    { text: "+ функцію удаляти" },
    { text: "+ відмічати виконані" },
  ];

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const input = document.getElementById("input");
    if (input.value.trim()) {
      list.unshift({
        text: input.value.trim(),
      });
      cards.innerHTML = "";
      create(list);
    }
  });

  function create(list) {
    for (let el = 0; el < list.length; el++) {
      let card = document.createElement("div");
      card.classList.add("card");
      card.setAttribute("id", el);
      card.innerHTML = `
                <div class="text">${el + 1} ${list[el].text}</div>            
                <div class="btn yes">&#10004;</div>
                <div class="btn del">&#10060;</div>               
            `;
      card.addEventListener("click", function (event) {
        if (event.target.classList.contains("yes")) {
          event.target
            .closest(".card")
            .firstElementChild.classList.toggle("done");
        }
        if (event.target.classList.contains("del")) {
          const item = event.target.closest(".card").remove();
        }
      });

      cards.insertAdjacentElement("beforeend", card);
    }
  }

  create(list);
});
