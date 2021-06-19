let frame = document.querySelector(".main_frame");
let score_board = document.querySelector(".score_board");

let q_moves = document.querySelector(".moves");
let q_points = document.querySelector(".points");
let end_moves = document.querySelector(".end_moves");

let objs = [
  { url: "images/1.png", value: "a" },
  { url: "images/2.png", value: "b" },
  { url: "images/3.png", value: "c" },
  { url: "images/4.png", value: "d" },
  { url: "images/5.png", value: "e" },
  { url: "images/6.png", value: "f" },
  { url: "images/1.png", value: "a" },
  { url: "images/2.png", value: "b" },
  { url: "images/3.png", value: "c" },
  { url: "images/4.png", value: "d" },
  { url: "images/5.png", value: "e" },
  { url: "images/6.png", value: "f" },
];

let random_objs = objs.sort(() => Math.random() - 0.5);

let content = "";
for (let i = 0; i < 12; i++) {
  content += ` <div class="card">
    <div class="card_inner" id="${objs[i].value}">
      <div class="card_front">
        <div class="card_text">M</div>
      </div>
      <div class="card_back">
          <img src="${objs[i].url}" alt="" srcset="">

      </div>
    </div>
  </div>`;
}

frame.innerHTML = content;

let cards = document.querySelectorAll(".card_inner");

let prev_val = "";
let prev_card;

let moves = 0;
let points = 0;

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("rotate");

    if (prev_val == "") {
      prev_val = card.id;
      prev_card = card;
    } else if (prev_val == card.id) {
      prev_val = "";
      frame.style.pointerEvents = "none";

      setTimeout(() => {
        card.style.visibility = "hidden";
        prev_card.style.visibility = "hidden";
        points += 1;
        q_points.innerText = points;
        moves += 1;
        q_moves.innerText = moves;
        frame.style.pointerEvents = "auto";

        if (points == 6) complete();
      }, 900);
    } else {
      frame.style.pointerEvents = "none";

      prev_val = "";
      setTimeout(() => {
        card.classList.toggle("rotate");
        prev_card.classList.toggle("rotate");
        moves += 1;
        q_moves.innerText = moves;
        frame.style.pointerEvents = "auto";
      }, 600);
    }
  });
});

document.querySelector(".play_b").addEventListener("click", (e) => {
  frame.style.display = "flex";
  score_board.style.display = "flex";
  document.querySelector(".play_b").style.display = "none";
});

let complete = () => {
  frame.style.display = "none";
  score_board.style.display = "none";
  document.querySelector(".play_again").style.display = "block";
  end_moves.innerText = `You took ${moves} moves to complete the game !!!`;
  end_moves.style.display = "block";
};

document
  .querySelector(".play_again")
  .addEventListener("click", () => location.reload());
