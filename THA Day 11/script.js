let questions = [
  {
    question: "What is the full form of CSS?",
    options: [
      "Cascade style sheets",
      "Color and style sheets",
      "Cascading style sheets",
      "None of the above",
    ],
    correct: "Cascade style sheets",
  },
  {
    question:
      "The property in CSS used to change the background color of an element is -",
    options: ["bgcolor", "color", "background-color", "All of the above"],
    correct: "background-color",
  },
  {
    question:
      "The property in CSS used to change the text color of an element is -",
    options: ["bgcolor", "color", "background-color", "All of the above"],
    correct: "color",
  },
  {
    question: "The CSS property used to control the element's font-size is -",
    options: ["text-style", "text-size", "font-size", "None of the above"],
    correct: "font-size",
  },
  {
    question:
      "Which of the following property is used as the shorthand property for the padding properties?",
    options: ["padding-left", "padding-right", "padding", "All of the above"],
    correct: "padding",
  },
];

let content = "";

let quiz_body = document.querySelector(".quiz");

for (let i = 0; i < questions.length; i++) {
  content += `<div class="quiz_frame" value="${i}" style="display:none;">
    <div class="questions">
      <p>
        <span class="question__item"
          >Q ${i + 1}.) ${questions[i].question}
        </span>
      </p>
    </div>

    <div class="options">
      <ul class="options_list">
        <li class="option">A. <span class="option__item">${
          questions[i].options[0]
        }</span></li>
        <li class="option">B. <span class="option__item">${
          questions[i].options[1]
        }</span></li>
        <li class="option">C. <span class="option__item">${
          questions[i].options[2]
        }</span></li>
        <li class="option">D. <span class="option__item">${
          questions[i].options[3]
        }</span></li>
      </ul>
    </div>
  </div>`;
}

quiz_body.innerHTML = content;

let current_ques = 0;

let all_ques = document.querySelectorAll(".quiz_frame");

document.querySelector(".previous").style.pointerEvents = "none";

document.querySelector(".next").style.pointerEvents = "none";

document.querySelector(".start_btn").addEventListener("click", () => {
  document.querySelector(".start").style.display = "none";
  all_ques[0].style.display = "flex";
  document.querySelector(".previous").style.pointerEvents = "auto";
  document.querySelector(".next").style.pointerEvents = "auto";
});

document.querySelector(".next").addEventListener("click", function next() {
  if (current_ques < questions.length - 1) {
    document.querySelector(".next").style.pointerEvents = "none";
    all_ques[current_ques].classList.add("exit_n");
    setTimeout(() => {
      current_ques++;
      for (let i = 0; i < questions.length; i++) {
        if (i == current_ques) {
          all_ques[i].style.display = "flex";
          all_ques[i].classList.add("entry_n");
        } else {
          all_ques[i].style.display = "none";
          all_ques[i].classList.remove("entry_n");
          all_ques[i].classList.remove("exit_n");
        }
      }
    }, 300);

    setTimeout(() => {
      all_ques[current_ques].classList.remove("entry_n");
      document.querySelector(".next").style.pointerEvents = "auto";
    }, 700);
  }
});

document
  .querySelector(".previous")
  .addEventListener("click", function previous() {
    if (current_ques > 0) {
      document.querySelector(".previous").style.pointerEvents = "none";
      all_ques[current_ques].classList.add("exit_p");
      setTimeout(() => {
        current_ques--;
        for (let i = 0; i < questions.length; i++) {
          if (i == current_ques) {
            all_ques[i].style.display = "flex";
            all_ques[i].classList.add("entry_p");
          } else {
            all_ques[i].style.display = "none";
            all_ques[i].classList.remove("entry_p");
            all_ques[i].classList.remove("exit_p");
          }
        }
      }, 300);
      setTimeout(() => {
        all_ques[current_ques].classList.remove("entry_p");
        document.querySelector(".previous").style.pointerEvents = "auto";
      }, 700);
    }
  });

let remaining_q_ui = document.querySelector(".remain");
let correct_q_ui = document.querySelector(".correct");
let incorrect_q_ui = document.querySelector(".incorrect");

let options_ui = document.querySelectorAll(".option");

let r = questions.length;
remaining_q_ui.innerText = r;
let Co = 0;
let In = 0;

options_ui.forEach((option) => {
  option.addEventListener("click", () => {
    r--;
    let current_qid =
      option.parentElement.parentElement.parentElement.attributes.value.value;
    if (questions[current_qid].correct === option.children[0].innerText) {
      option.style.background = "green";
      option.parentElement.style.pointerEvents = "none";
      Co++;
    } else {
      option.style.background = "red";
      option.parentElement.style.pointerEvents = "none";
      In++;
    }
    remaining_q_ui.innerText = r;
    correct_q_ui.innerText = Co;
    incorrect_q_ui.innerText = In;

    if (r == 0) finished();
  });
});

function finished() {
  setTimeout(() => {
    all_ques[current_ques].style.display = "none";
    document.querySelector(".g_over").innerText = Co;
    document.querySelector(".finished").style.display = "flex";
    document.querySelector(".previous").style.pointerEvents = "none";
    document.querySelector(".next").style.pointerEvents = "none";
  }, 1000);
}
